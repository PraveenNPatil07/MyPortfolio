import type { Metadata } from "next"
import Link from "next/link"
import { siteConfig } from "@/content/site"
import { ContactForm } from "./ContactForm"
import { CopyEmailButton } from "@/components/CopyEmailButton"
import { Mail, MapPin, Clock } from "lucide-react"
import { SiGithub, SiLinkedin, SiLeetcode } from "react-icons/si"

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Praveen Patil: email, professional networks, and direct message channel.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/contact`,
  },
  openGraph: {
    title: `Contact · ${siteConfig.name}`,
    description: "Get in touch with Praveen Patil: email, professional networks, and direct message channel.",
    url: `${siteConfig.siteUrl}/contact`,
    type: "website",
  },
}

export default function ContactPage() {
  return (
    <div className="container mx-auto max-w-5xl px-4 sm:px-6 py-12 md:py-20">
      
      {/* Header */}
      <div className="space-y-4 pb-12 border-b border-border-subtle">
        <span className="font-mono text-xs uppercase tracking-wider text-accent font-semibold">
          Communication
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-text-main">
          Get In Touch
        </h1>
        <p className="text-lg text-text-muted max-w-2xl leading-relaxed">
          Whether you have a technical question, wish to discuss backend systems architecture, or have an engineering opportunity, feel free to reach out.
        </p>
      </div>

      <div className="py-12 md:py-16 grid grid-cols-1 md:grid-cols-12 gap-12">
        
        {/* Left Column: Direct Contact Details & Links */}
        <div className="md:col-span-5 space-y-6">
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-text-main">
              Direct Channels
            </h2>
            <p className="text-sm text-text-muted leading-relaxed">
              I check my email regularly and respond to serious technical inquiries promptly.
            </p>
          </div>

          <div className="space-y-3">
            <div className="p-4 rounded-lg border border-border-subtle bg-surface hover:border-accent/40 transition-colors flex items-center justify-between gap-3 group">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="p-2.5 rounded-md bg-surface-elevated text-accent shrink-0">
                  <Mail className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-mono text-text-muted">Primary Email</p>
                  <a
                    href={`mailto:${siteConfig.links.email}`}
                    className="text-sm font-medium text-text-main hover:text-accent transition-colors truncate block focus-visible:outline-none focus-visible:underline"
                  >
                    {siteConfig.links.email}
                  </a>
                </div>
              </div>
              <CopyEmailButton email={siteConfig.links.email} variant="badge" />
            </div>

            <div className="p-4 rounded-lg border border-border-subtle bg-surface/50 flex items-center gap-3.5">
              <div className="p-2.5 rounded-md bg-surface-elevated text-text-muted">
                <MapPin className="h-4 w-4" />
              </div>
              <div>
                <p className="text-xs font-mono text-text-muted">Current Location</p>
                <p className="text-sm font-medium text-text-main">Bengaluru, India</p>
              </div>
            </div>

            <div className="p-4 rounded-lg border border-border-subtle bg-surface/50 flex items-center gap-3.5">
              <div className="p-2.5 rounded-md bg-surface-elevated text-text-muted">
                <Clock className="h-4 w-4" />
              </div>
              <div>
                <p className="text-xs font-mono text-text-muted">Timezone</p>
                <p className="text-sm font-medium text-text-main">IST (UTC +5:30)</p>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-border-subtle">
            <h3 className="text-xs font-mono uppercase tracking-wider text-text-muted mb-3">
              Verified Profiles
            </h3>
            <div className="flex flex-wrap gap-2">
              <Link
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-border-subtle bg-surface text-xs font-mono text-text-main hover:text-accent hover:border-accent/40 transition-colors"
              >
                <SiGithub className="h-3.5 w-3.5" /> GitHub
              </Link>
              <Link
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-border-subtle bg-surface text-xs font-mono text-text-main hover:text-accent hover:border-accent/40 transition-colors"
              >
                <SiLinkedin className="h-3.5 w-3.5" /> LinkedIn
              </Link>
              <Link
                href={siteConfig.links.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-border-subtle bg-surface text-xs font-mono text-text-main hover:text-accent hover:border-accent/40 transition-colors"
              >
                <SiLeetcode className="h-3.5 w-3.5" /> LeetCode
              </Link>
            </div>
          </div>
        </div>

        {/* Right Column: Secure Contact Form */}
        <div className="md:col-span-7">
          <div className="p-6 sm:p-8 rounded-xl border border-border-subtle bg-surface shadow-xs">
            <h2 className="text-xl font-bold text-text-main mb-2">
              Send a Message
            </h2>
            <p className="text-xs text-text-muted mb-6">
              Messages are validated on the server, sanitized against injection, and transmitted securely.
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}
