import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';

// Strict server-side validation schema
const contactSchema = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name cannot exceed 100 characters"),
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email("Please provide a valid email address")
    .max(120, "Email cannot exceed 120 characters"),
  message: z
    .string({ required_error: "Message is required" })
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(3000, "Message cannot exceed 3000 characters"),
});

// HTML escaping helper to prevent HTML injection / XSS in emails
function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Header injection prevention: remove all newline characters
function sanitizeHeader(input: string): string {
  return input.replace(/[\r\n]+/g, " ").trim();
}

/**
 * Architectural Note on Rate Limiting:
 * This in-memory sliding window rate limiter protects local development and single-process
 * Node.js instances (5 requests per 10 minutes per client IP).
 * 
 * IMPORTANT SERVERLESS CAVEAT:
 * In-memory state is NOT shared across multiple serverless lambda instances (e.g. Vercel, AWS Lambda)
 * or clustered Node processes. In a scaled serverless deployment, requests from the same client IP
 * routed to distinct cold/warm containers will have independent memory buckets. 
 * For true production-grade distributed rate limiting, an external atomic store (such as Upstash Redis
 * via `@upstash/ratelimit` or a database token bucket) must be configured with an authoritative Redis URI.
 */
interface RateLimitRecord {
  timestamps: number[];
}

const rateLimitMap = new Map<string, RateLimitRecord>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 5;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip) || { timestamps: [] };

  // Remove timestamps outside the sliding window
  record.timestamps = record.timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);

  if (record.timestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    return false;
  }

  record.timestamps.push(now);
  rateLimitMap.set(ip, record);
  return true;
}

export async function POST(request: Request) {
  try {
    // 1. Client IP resolution for rate limiting
    const forwardedFor = request.headers.get("x-forwarded-for");
    const clientIp = forwardedFor ? forwardedFor.split(",")[0].trim() : "127.0.0.1";

    if (!checkRateLimit(clientIp)) {
      return NextResponse.json(
        { error: "Too many requests. Please wait a few minutes before submitting another message." },
        { status: 429 }
      );
    }

    // 2. Body parsing & validation
    let rawBody: unknown;
    try {
      rawBody = await request.json();
    } catch {
      return NextResponse.json(
        { error: "Invalid JSON payload" },
        { status: 400 }
      );
    }

    const parseResult = contactSchema.safeParse(rawBody);
    if (!parseResult.success) {
      const firstError = parseResult.error.errors[0]?.message || "Validation failed";
      return NextResponse.json(
        { error: firstError, details: parseResult.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { name, email, message } = parseResult.data;

    // 3. Sanitization
    const cleanName = sanitizeHeader(name);
    const cleanEmail = sanitizeHeader(email);
    const escapedMessage = escapeHtml(message);
    const escapedName = escapeHtml(cleanName);
    const escapedEmail = escapeHtml(cleanEmail);

    // 4. SMTP Transport Verification & Execution
    const smtpHost = process.env.SMTP_HOST;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const recipientEmail = process.env.RECIPIENT_EMAIL || smtpUser;

    if (!smtpHost || !smtpUser || !smtpPass || !recipientEmail) {
      console.warn("[Contact API]: Contact dispatch attempted but SMTP credentials are not configured.");

      return NextResponse.json(
        {
          error: "The contact delivery service is temporarily unconfigured. Please send an email directly to praveenpatil.dev@gmail.com.",
        },
        { status: 503 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const mailOptions = {
      from: `"${cleanName}" <${smtpUser}>`,
      replyTo: cleanEmail,
      to: recipientEmail,
      subject: `[Portfolio Contact] Submission from ${cleanName}`,
      text: `Name: ${cleanName}\nEmail: ${cleanEmail}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: sans-serif; font-size: 14px; line-height: 1.6; color: #222;">
          <h2 style="color: #9A5B00; border-bottom: 1px solid #ddd; padding-bottom: 8px;">New Contact Form Message</h2>
          <p><strong>Name:</strong> ${escapedName}</p>
          <p><strong>Email:</strong> <a href="mailto:${escapedEmail}">${escapedEmail}</a></p>
          <div style="margin-top: 16px; padding: 12px; background: #f9f9f9; border-left: 3px solid #9A5B00;">
            <strong>Message:</strong><br/>
            <p style="white-space: pre-wrap; margin: 8px 0 0;">${escapedMessage}</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Thank you! Your message has been sent successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in contact form endpoint:", error);
    return NextResponse.json(
      { error: "Internal server error occurred while sending message." },
      { status: 500 }
    );
  }
}