import { describe, it, expect, beforeEach, vi } from 'vitest';
import nodemailer from 'nodemailer';
import { POST } from '../app/api/contact/route';

describe('Contact API Endpoint (/api/contact)', () => {
  const originalEnv = process.env;

  beforeEach(() => {
    process.env = { ...originalEnv };
    delete process.env.SMTP_HOST;
    delete process.env.SMTP_USER;
    delete process.env.SMTP_PASS;
    delete process.env.RECIPIENT_EMAIL;
  });

  it('rejects invalid JSON payloads with status 400', async () => {
    const req = new Request('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: 'invalid-json{{{',
    });

    const res = await POST(req);
    expect(res.status).toBe(400);
    const data = await res.json();
    expect(data.error).toBe('Invalid JSON payload');
  });

  it('rejects payloads with missing or invalid fields with status 400', async () => {
    const invalidPayloads = [
      { name: '', email: 'valid@example.com', message: 'Valid message body here' },
      { name: 'Praveen', email: 'invalid-email', message: 'Valid message body here' },
      { name: 'Praveen', email: 'valid@example.com', message: 'Short' },
    ];

    for (let i = 0; i < invalidPayloads.length; i++) {
      const payload = invalidPayloads[i];
      const req = new Request('http://localhost:3000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-forwarded-for': `10.0.0.${i + 1}`,
        },
        body: JSON.stringify(payload),
      });

      const res = await POST(req);
      expect(res.status).toBe(400);
      const data = await res.json();
      expect(data.error).toBeDefined();
    }
  });

  it('fails safely with HTTP 503 when SMTP credentials are not configured', async () => {
    const req = new Request('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-forwarded-for': '192.168.1.100',
      },
      body: JSON.stringify({
        name: 'Recruiter Name',
        email: 'recruiter@company.com',
        message: 'Hello Praveen, we are interested in discussing an engineering role.',
      }),
    });

    const res = await POST(req);
    expect(res.status).toBe(503);
    const data = await res.json();
    expect(data.error).toContain('temporarily unconfigured');
    expect(data.error).toContain('praveenpatil.dev@gmail.com');
    // Ensure no server paths or credential keys leaked
    expect(JSON.stringify(data)).not.toContain('SMTP_HOST');
    expect(JSON.stringify(data)).not.toContain('SMTP_PASS');
  });

  it('enforces rate limiting (maximum 5 requests per window per IP)', async () => {
    const testIp = '192.168.200.1';
    const payload = {
      name: 'Rate Limit Test',
      email: 'ratelimit@example.com',
      message: 'Testing sliding window rate limiter thresholds.',
    };

    // First 5 requests should pass rate limit check (failing with 503 because SMTP is unconfigured)
    for (let i = 0; i < 5; i++) {
      const req = new Request('http://localhost:3000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-forwarded-for': testIp,
        },
        body: JSON.stringify(payload),
      });

      const res = await POST(req);
      expect(res.status).toBe(503);
    }

    // 6th request from the same IP must be rejected by rate limiter with 429
    const blockedReq = new Request('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-forwarded-for': testIp,
      },
      body: JSON.stringify(payload),
    });

    const blockedRes = await POST(blockedReq);
    expect(blockedRes.status).toBe(429);
    const data = await blockedRes.json();
    expect(data.error).toContain('Too many requests');
  });

  it('safely simulates configured SMTP delivery without sending unsolicited emails', async () => {
    process.env.SMTP_HOST = 'smtp.example.com';
    process.env.SMTP_USER = 'praveen@example.com';
    process.env.SMTP_PASS = 'secret-token';
    process.env.RECIPIENT_EMAIL = 'recipient@example.com';

    const sendMailMock = vi.fn().mockResolvedValue({ messageId: '<mock-id@example.com>' });
    const createTransportSpy = vi.spyOn(nodemailer, 'createTransport').mockReturnValue({
      sendMail: sendMailMock,
    } as unknown as ReturnType<typeof nodemailer.createTransport>);

    const req = new Request('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-forwarded-for': '10.50.0.1',
      },
      body: JSON.stringify({
        name: 'Jane Doe\r\nBcc: evil@attacker.com',
        email: 'jane@company.com',
        message: 'Testing valid submission with <script>alert("xss")</script>',
      }),
    });

    const res = await POST(req);
    expect(res.status).toBe(200);
    const data = await res.json();
    expect(data.message).toContain('sent successfully');

    // Verify sanitization in mailOptions passed to transporter
    expect(sendMailMock).toHaveBeenCalledTimes(1);
    const mailArgs = sendMailMock.mock.calls[0][0];
    expect(mailArgs.from).not.toContain('\r');
    expect(mailArgs.from).not.toContain('\n');
    expect(mailArgs.replyTo).not.toContain('\r');
    expect(mailArgs.replyTo).not.toContain('\n');
    expect(mailArgs.html).toContain('&lt;script&gt;');
    expect(mailArgs.html).not.toContain('<script>');

    createTransportSpy.mockRestore();
  });

  it('fails safely with HTTP 500 if the mail transporter encounters an error', async () => {
    process.env.SMTP_HOST = 'smtp.example.com';
    process.env.SMTP_USER = 'praveen@example.com';
    process.env.SMTP_PASS = 'secret-token';
    process.env.RECIPIENT_EMAIL = 'recipient@example.com';

    const sendMailMock = vi.fn().mockRejectedValue(new Error('ECONNREFUSED 127.0.0.1:587'));
    const createTransportSpy = vi.spyOn(nodemailer, 'createTransport').mockReturnValue({
      sendMail: sendMailMock,
    } as unknown as ReturnType<typeof nodemailer.createTransport>);

    const req = new Request('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-forwarded-for': '10.50.0.2',
      },
      body: JSON.stringify({
        name: 'Jane Doe',
        email: 'jane@company.com',
        message: 'Testing error resilience.',
      }),
    });

    const res = await POST(req);
    expect(res.status).toBe(500);
    const data = await res.json();
    expect(data.error).toBe('Internal server error occurred while sending message.');
    expect(JSON.stringify(data)).not.toContain('ECONNREFUSED');

    createTransportSpy.mockRestore();
  });
});

