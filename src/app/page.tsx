import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { siteConfig } from "@/content/site"
import { ArrowRight, Code2, Database, ShieldCheck, Terminal, Cpu, Server } from "lucide-react"
import { SiGithub, SiLinkedin } from "react-icons/si"

export const metadata: Metadata = {
  title: `${siteConfig.name} · ${siteConfig.role}`,
  description: siteConfig.bio,
  alternates: {
    canonical: siteConfig.siteUrl,
  },
  openGraph: {
    title: `${siteConfig.name} · ${siteConfig.role}`,
    description: siteConfig.bio,
    url: siteConfig.siteUrl,
    type: "website",
  },
}

export default function HomePage() {
  return (
    <div className="container mx-auto max-w-5xl px-4 sm:px-6 py-12 md:py-20">
      
      {/* Hero Section */}
      <section className="pt-4 pb-16 md:pb-24 border-b border-border-subtle" aria-labelledby="hero-heading">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 md:gap-12">
          
          {/* Main Hero Column: Content & CTAs */}
          <div className="space-y-6 flex-1 max-w-2xl">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border-subtle bg-surface text-xs font-mono text-text-muted">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
              </span>
              <span>{siteConfig.role} @ {siteConfig.company}</span>
            </div>

            {/* Master Headline */}
            <h1 
              id="hero-heading"
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-text-main leading-[1.1]"
            >
              {siteConfig.headline}
            </h1>

            {/* Narrative Bio */}
            <p className="text-lg md:text-xl text-text-muted leading-relaxed">
              I specialize in backend architecture, data pipelines, and secure full-stack applications. 
              From designing resilient API contracts to profiling database queries, I focus on building software that is reliable, testable, and maintainable.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 bg-text-main text-bg font-medium px-5 py-2.5 rounded-md hover:opacity-90 active:scale-[0.98] transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                Explore Engineering Lab <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-border-subtle bg-surface hover:bg-surface-elevated active:scale-[0.98] text-text-main font-medium px-5 py-2.5 rounded-md transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                Get In Touch
              </Link>
              <div className="flex items-center gap-2 pl-2 border-l border-border-subtle">
                <Link
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2.5 rounded-md border border-border-subtle bg-surface hover:text-accent hover:border-accent active:scale-95 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <SiGithub className="h-4 w-4" />
                </Link>
                <Link
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 rounded-md border border-border-subtle bg-surface hover:text-accent hover:border-accent active:scale-95 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <SiLinkedin className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Profile Portrait */}
          {siteConfig.showProfilePhoto && (
            <div className="shrink-0 self-center md:self-start md:pt-1">
              <div className="relative group">
                <div className="relative w-44 h-44 sm:w-52 sm:h-52 md:w-60 md:h-60 lg:w-68 lg:h-68 rounded-full overflow-hidden border-2 border-border-subtle bg-surface shadow-sm transition-all duration-300 group-hover:border-accent/60 group-hover:shadow-md">
                  <Image
                    src="/ProfilePhoto.jpg"
                    alt="Praveen Patil"
                    fill
                    sizes="(max-width: 640px) 176px, (max-width: 768px) 208px, (max-width: 1024px) 240px, 272px"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    priority
                  />
                </div>
                <div className="mt-2.5 text-center">
                  <span className="text-xs font-mono text-text-muted font-medium">
                    Praveen Patil
                  </span>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Systems Engineering Snapshot (Bento Micro-Grid) */}
        <div className="pt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl border border-border-subtle bg-surface/70 hover:border-accent/40 hover:-translate-y-0.5 hover:shadow-xs transition-all duration-200 ease-out space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-wider text-accent font-semibold">
                Core Discipline
              </span>
              <Server className="h-4 w-4 text-accent" />
            </div>
            <h3 className="text-sm font-bold text-text-main">
              Distributed Systems & APIs
            </h3>
            <p className="text-xs text-text-muted leading-relaxed">
              Microservices, event-driven decoupling, ACID databases, and fail-closed security brokers.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-border-subtle bg-surface/70 hover:border-accent/40 hover:-translate-y-0.5 hover:shadow-xs transition-all duration-200 ease-out space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-wider text-accent font-semibold">
                Production Role
              </span>
              <Terminal className="h-4 w-4 text-accent" />
            </div>
            <h3 className="text-sm font-bold text-text-main">
              Associate Software Engineer
            </h3>
            <p className="text-xs text-text-muted leading-relaxed">
              Full-time at Brillio. Backend endpoints, automated regression test suites, and clean architectural patterns.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-border-subtle bg-surface/70 hover:border-accent/40 hover:-translate-y-0.5 hover:shadow-xs transition-all duration-200 ease-out space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-wider text-accent font-semibold">
                Verified Code
              </span>
              <ShieldCheck className="h-4 w-4 text-accent" />
            </div>
            <h3 className="text-sm font-bold text-text-main">
              3 Public Case Studies
            </h3>
            <p className="text-xs text-text-muted leading-relaxed">
              Vaultless (PASETO v4 + Redis), FitTrack (Spring Cloud + RabbitMQ), and Blogopedia.
            </p>
          </div>
        </div>
      </section>

      {/* Engineering Pillars Section */}
      <section className="py-16 md:py-24 border-b border-border-subtle" aria-labelledby="pillars-heading">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-accent font-semibold">
              Approach
            </span>
            <h2 id="pillars-heading" className="text-2xl sm:text-3xl font-bold tracking-tight text-text-main mt-1">
              Engineering Principles
            </h2>
          </div>
          <p className="text-sm text-text-muted max-w-md">
            How I approach system design, code quality, and technical problem-solving.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-lg border border-border-subtle bg-surface/60 hover:bg-surface hover:border-accent/40 hover:-translate-y-0.5 hover:shadow-xs transition-all duration-200 ease-out space-y-3">
            <div className="p-2.5 w-fit rounded-md bg-surface-elevated text-accent border border-border-subtle">
              <Cpu className="h-5 w-5" />
            </div>
            <h3 className="text-base font-semibold text-text-main">Systems & Architecture</h3>
            <p className="text-sm text-text-muted leading-relaxed">
              Prioritizing clear service boundaries, predictable state, decoupled data models, and resilient error recovery mechanisms.
            </p>
          </div>

          <div className="p-6 rounded-lg border border-border-subtle bg-surface/60 hover:bg-surface hover:border-accent/40 hover:-translate-y-0.5 hover:shadow-xs transition-all duration-200 ease-out space-y-3">
            <div className="p-2.5 w-fit rounded-md bg-surface-elevated text-accent border border-border-subtle">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <h3 className="text-base font-semibold text-text-main">Strict Correctness</h3>
            <p className="text-sm text-text-muted leading-relaxed">
              No suppressed type errors, no untested edge cases. Verifying systems through automated tests and strict schema validation.
            </p>
          </div>

          <div className="p-6 rounded-lg border border-border-subtle bg-surface/60 hover:bg-surface hover:border-accent/40 hover:-translate-y-0.5 hover:shadow-xs transition-all duration-200 ease-out space-y-3">
            <div className="p-2.5 w-fit rounded-md bg-surface-elevated text-accent border border-border-subtle">
              <Terminal className="h-5 w-5" />
            </div>
            <h3 className="text-base font-semibold text-text-main">Operational Clarity</h3>
            <p className="text-sm text-text-muted leading-relaxed">
              Writing transparent, debuggable code with meaningful error messages, lean runtime dependencies, and high performance budgets.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Systems Preview */}
      <section className="py-16 md:py-24 border-b border-border-subtle" aria-labelledby="featured-projects-heading">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-accent font-semibold">
              Selected Work
            </span>
            <h2 id="featured-projects-heading" className="text-2xl sm:text-3xl font-bold tracking-tight text-text-main mt-1">
              Featured Systems & Case Studies
            </h2>
            <p className="text-sm text-text-muted mt-1 max-w-xl">
              Production-modeled software architectures and security brokers. Derived directly from verified source repositories with detailed technical case studies.
            </p>
          </div>
          <Link 
            href="/projects" 
            className="inline-flex items-center gap-1.5 text-sm font-mono text-text-muted hover:text-accent transition-colors shrink-0"
          >
            All case studies & lab <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Vaultless */}
          <div className="group p-6 rounded-lg border border-border-subtle bg-surface flex flex-col justify-between hover:border-accent/50 hover:shadow-md hover:-translate-y-1 transition-all duration-200 ease-out">
            <div>
              {/* Project Architecture Preview */}
              <div className="relative w-full aspect-[16/9] rounded-md overflow-hidden border border-border-subtle bg-surface-elevated mb-4">
                <Image
                  src="/vaultless-architecture.svg"
                  alt="Vaultless System Architecture & Security Broker Diagram"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain group-hover:scale-[1.01] transition-transform duration-300 ease-out"
                />
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs px-2 py-0.5 rounded border border-border-subtle bg-surface-elevated text-accent font-medium">
                    Distributed Systems · Security Broker
                  </span>
                  <span className="text-xs font-mono text-success flex items-center gap-1">
                    <ShieldCheck className="h-3.5 w-3.5" /> Verified Repo
                  </span>
                </div>
                <h3 className="text-lg font-bold text-text-main group-hover:text-accent transition-colors">Vaultless</h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  Ephemeral credential broker for autonomous AI agents. Issues scoped PASETO v4 asymmetric tokens and guarantees atomic single-use invalidation via Redis SETNX locks and PostgreSQL audit trails.
                </p>
              </div>
            </div>
            <div className="pt-6 mt-6 border-t border-border-subtle flex items-center justify-between">
              <div className="flex flex-wrap gap-1.5 text-xs font-mono text-text-muted">
                <span>TypeScript</span> · <span>Fastify</span> · <span>PASETO v4</span> · <span>Redis</span>
              </div>
              <Link 
                href="/projects/vaultless"
                className="text-xs font-mono text-accent hover:underline inline-flex items-center gap-1 font-medium transition-transform duration-150 group-hover:translate-x-0.5"
              >
                Case Study <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>

          {/* FitTrack */}
          <div className="group p-6 rounded-lg border border-border-subtle bg-surface flex flex-col justify-between hover:border-accent/50 hover:shadow-md hover:-translate-y-1 transition-all duration-200 ease-out">
            <div>
              {/* Project Architecture Preview */}
              <div className="relative w-full aspect-[16/9] rounded-md overflow-hidden border border-border-subtle bg-surface-elevated mb-4">
                <Image
                  src="/fittrack-architecture.svg"
                  alt="FitTrack Distributed Microservices Topology Diagram"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain group-hover:scale-[1.01] transition-transform duration-300 ease-out"
                />
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs px-2 py-0.5 rounded border border-border-subtle bg-surface-elevated text-accent font-medium">
                    Microservices · Event-Driven
                  </span>
                  <span className="text-xs font-mono text-success flex items-center gap-1">
                    <ShieldCheck className="h-3.5 w-3.5" /> Verified Repo
                  </span>
                </div>
                <h3 className="text-lg font-bold text-text-main group-hover:text-accent transition-colors">FitTrack</h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  Distributed 6-service fitness tracking platform. Features Spring Cloud Gateway, Eureka discovery, polyglot persistence, Keycloak PKCE auth, and asynchronous RabbitMQ event processing for Google Gemini AI recommendations.
                </p>
              </div>
            </div>
            <div className="pt-6 mt-6 border-t border-border-subtle flex items-center justify-between">
              <div className="flex flex-wrap gap-1.5 text-xs font-mono text-text-muted">
                <span>Java 21</span> · <span>Spring Boot</span> · <span>RabbitMQ</span> · <span>MongoDB</span>
              </div>
              <Link 
                href="/projects/fittrack"
                className="text-xs font-mono text-accent hover:underline inline-flex items-center gap-1 font-medium transition-transform duration-150 group-hover:translate-x-0.5"
              >
                Case Study <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Competencies Matrix */}
      <section className="py-16 md:py-24" aria-labelledby="skills-heading">
        <div className="mb-10">
          <span className="font-mono text-xs uppercase tracking-wider text-accent font-semibold">
            Toolbox
          </span>
          <h2 id="skills-heading" className="text-2xl sm:text-3xl font-bold tracking-tight text-text-main mt-1">
            Technical Competencies
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="p-5 rounded-lg border border-border-subtle bg-surface/50 space-y-3">
            <div className="flex items-center gap-2 font-medium text-text-main text-sm">
              <Code2 className="h-4 w-4 text-accent" /> Languages & Runtimes
            </div>
            <ul className="space-y-1.5 text-xs font-mono text-text-muted">
              <li>Python (Core, Async, Typing)</li>
              <li>Java & Spring Boot fundamentals</li>
              <li>TypeScript / JavaScript (ESNext)</li>
              <li>C / C++ (Data structures, Memory)</li>
              <li>SQL (Relational schema design)</li>
            </ul>
          </div>

          <div className="p-5 rounded-lg border border-border-subtle bg-surface/50 space-y-3">
            <div className="flex items-center gap-2 font-medium text-text-main text-sm">
              <Database className="h-4 w-4 text-accent" /> Backend & Data
            </div>
            <ul className="space-y-1.5 text-xs font-mono text-text-muted">
              <li>FastAPI, Flask, Django</li>
              <li>PostgreSQL, MySQL, SQLite</li>
              <li>RESTful API Specification</li>
              <li>Pandas, NumPy, Data ETL</li>
              <li>Authentication & Session Security</li>
            </ul>
          </div>

          <div className="p-5 rounded-lg border border-border-subtle bg-surface/50 space-y-3">
            <div className="flex items-center gap-2 font-medium text-text-main text-sm">
              <Terminal className="h-4 w-4 text-accent" /> Systems, Web & Tools
            </div>
            <ul className="space-y-1.5 text-xs font-mono text-text-muted">
              <li>Next.js 16 (App Router, RSC)</li>
              <li>Tailwind CSS 4 & Design Systems</li>
              <li>Git, GitHub Actions, CI/CD</li>
              <li>Linux CLI, PowerShell, Bash</li>
              <li>Vitest, Playwright, ESLint</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Next Steps CTA */}
      <section className="mt-8 p-8 md:p-12 rounded-xl border border-border-subtle bg-surface-elevated/40 text-center space-y-4" aria-labelledby="cta-heading">
        <h2 id="cta-heading" className="text-2xl font-bold text-text-main">
          Want to discuss an engineering challenge or opportunity?
        </h2>
        <p className="text-sm text-text-muted max-w-lg mx-auto">
          I am always open to discussing backend architectures, systems design, and full-stack software development.
        </p>
        <div className="pt-2">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-text-main text-bg font-medium px-6 py-2.5 rounded-md hover:opacity-90 active:scale-[0.98] transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            Start a Conversation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
