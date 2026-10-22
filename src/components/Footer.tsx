import Link from "next/link"
import Image from "next/image"
import { siteConfig } from "@/content/site"
import { SiGithub, SiLinkedin, SiLeetcode } from "react-icons/si"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full border-t border-border-subtle bg-surface/50 mt-24 text-sm text-text-muted transition-colors">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          
          {/* Identity column */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center space-x-2.5">
              <div className="relative h-6 w-6 rounded-full overflow-hidden border border-border-subtle bg-surface shrink-0">
                <Image
                  src="/logo.png"
                  alt="Praveen Patil Logo"
                  width={24}
                  height={24}
                  className="object-cover h-full w-full"
                />
              </div>
              <span className="font-sans font-semibold text-text-main">
                {siteConfig.name}
              </span>
            </div>
            <p className="text-xs text-text-muted leading-relaxed max-w-sm">
              {siteConfig.role} at {siteConfig.company}. Focused on backend architecture, reliable distributed services, and high-craft software systems.
            </p>
            <div className="flex items-center gap-2 pt-1">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
              </span>
              <span className="text-xs font-mono text-text-muted">
                Available for technical discussions
              </span>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-text-main font-semibold">
              Index
            </h4>
            <ul className="space-y-2 text-xs">
              {siteConfig.navItems.map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href}
                    className="hover:text-accent transition-colors focus-visible:outline-none focus-visible:underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* External Verification Links */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-text-main font-semibold">
              Profiles
            </h4>
            <div className="flex flex-col space-y-2 text-xs">
              <Link 
                href={siteConfig.links.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-accent transition-colors focus-visible:outline-none focus-visible:underline"
              >
                <SiGithub className="h-3.5 w-3.5" /> GitHub
              </Link>
              <Link 
                href={siteConfig.links.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-accent transition-colors focus-visible:outline-none focus-visible:underline"
              >
                <SiLinkedin className="h-3.5 w-3.5" /> LinkedIn
              </Link>
              <Link 
                href={siteConfig.links.leetcode} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-accent transition-colors focus-visible:outline-none focus-visible:underline"
              >
                <SiLeetcode className="h-3.5 w-3.5" /> LeetCode
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-text-muted">
          <p>© {currentYear} Praveen Patil. Engineering Journal v2.0.</p>
          <p className="text-[11px] text-text-muted/70">
            Next.js 16 · React 19 · Tailwind 4 · Zero Scaffolding
          </p>
        </div>
      </div>
    </footer>
  )
}
