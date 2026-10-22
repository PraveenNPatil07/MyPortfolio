import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, BookOpen, CheckCircle2, Compass, GraduationCap, Laptop, Code2, Database, Terminal, ArrowUpRight } from "lucide-react"
import { SiGithub, SiLinkedin } from "react-icons/si"
import { siteConfig } from "@/content/site"

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Praveen Patil: professional narrative, engineering growth, education, and technical trajectory at Brillio.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/about`,
  },
  openGraph: {
    title: `About · ${siteConfig.name}`,
    description: "Professional narrative, engineering growth, education, and technical trajectory at Brillio.",
    url: `${siteConfig.siteUrl}/about`,
    type: "profile",
  },
}

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-5xl px-4 sm:px-6 py-12 md:py-20">
      
      {/* Header */}
      <div className="space-y-4 pb-12 border-b border-border-subtle">
        <span className="font-mono text-xs uppercase tracking-wider text-accent font-semibold">
          Background & Engineering Trajectory
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-text-main">
          About Praveen Patil
        </h1>
        <p className="text-lg text-text-muted max-w-2xl leading-relaxed">
          Associate Software Engineer at Brillio. Dedicated to building reliable, well-tested backend services, understanding low-level systems behavior, and writing clean, maintainable software.
        </p>
      </div>

      {/* Main Narrative & Quick Facts Grid */}
      <div className="py-12 md:py-16 grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-border-subtle">
        
        {/* Left Column: Professional Narrative & Growth Story */}
        <div className="md:col-span-2 space-y-6 text-text-main/90 leading-relaxed text-base">
          <div className="flex items-center gap-2 text-accent font-mono text-xs uppercase tracking-wider font-semibold">
            <Compass className="h-4 w-4" />
            01 / Professional Narrative
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-text-main">
            Engineering Systems from First Principles
          </h2>
          
          <p>
            I believe that software engineering is fundamentally about understanding systems deeply, not just gluing together high-level abstractions. Whether it is analyzing how a relational query executes across foreign key constraints, verifying concurrency locks under load, or structuring clean API boundaries, my focus is on predictable, maintainable software.
          </p>

          <p>
            Currently at <strong>Brillio</strong>, I work as an <strong>Associate Software Engineer</strong>, having converted on <strong>September 28, 2026</strong>, after completing an intensive engineering internship that began on <strong>March 5, 2026</strong>. In my day-to-day engineering, I contribute to backend service endpoints, participate in code reviews, write automated unit and integration tests, and uphold strict architectural hygiene.
          </p>

          <p>
            My technical trajectory originated in rigorous computer science education—studying data structures, operating systems, networking protocols, and relational database internals. During university, I built practical software systems like <Link href="/projects/blogopedia" className="text-accent underline font-medium">Blogopedia</Link> to study session-based authentication lifecycles and normalized schemas from the ground up.
          </p>

          <p>
            Beyond daily feature delivery, I spend time exploring distributed systems patterns, such as asymmetric credential brokering with PASETO v4 and Redis atomic locks (<Link href="/projects/vaultless" className="text-accent underline font-medium">Vaultless</Link>), and decomposed event-driven microservices utilizing RabbitMQ and Spring Cloud (<Link href="/projects/fittrack" className="text-accent underline font-medium">FitTrack</Link>).
          </p>

          {/* Social Links Bar */}
          <div className="pt-4 flex items-center gap-3">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-text-muted hover:text-accent transition-colors p-2 rounded-md border border-border-subtle bg-surface"
            >
              <SiGithub className="h-3.5 w-3.5" /> GitHub Profile <ArrowUpRight className="h-3 w-3" />
            </Link>
            <Link
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-text-muted hover:text-accent transition-colors p-2 rounded-md border border-border-subtle bg-surface"
            >
              <SiLinkedin className="h-3.5 w-3.5" /> LinkedIn Profile <ArrowUpRight className="h-3 w-3" />
            </Link>
          </div>
        </div>

        {/* Right Column: Quick Profile Cards */}
        <div className="space-y-6">
          {/* Current Role Card */}
          <div className="p-6 rounded-lg border border-border-subtle bg-surface space-y-4">
            <div className="flex items-center gap-2 text-sm font-semibold text-text-main">
              <Laptop className="h-4 w-4 text-accent" /> Professional Role
            </div>
            <div className="space-y-1.5">
              <h3 className="text-base font-bold text-text-main">
                Associate Software Engineer
              </h3>
              <p className="text-xs font-mono text-accent font-semibold">
                Brillio · Sept 28, 2026 – Present
              </p>
              <p className="text-xs text-text-muted/90 leading-relaxed pt-1">
                Converted from Software Engineer Intern (March 5, 2026 – Sept 27, 2026). Focused on backend services, clean architecture, automated testing, and team collaboration.
              </p>
            </div>
          </div>

          {/* Education Card */}
          <div className="p-6 rounded-lg border border-border-subtle bg-surface space-y-4">
            <div className="flex items-center gap-2 text-sm font-semibold text-text-main">
              <GraduationCap className="h-4 w-4 text-accent" /> Academic Education
            </div>
            <div className="space-y-1.5">
              <h3 className="text-base font-bold text-text-main">
                Bachelor of Engineering (B.E.)
              </h3>
              <p className="text-xs font-mono text-text-muted">
                Computer Science and Engineering
              </p>
              <p className="text-xs text-text-muted/90 leading-relaxed pt-1">
                Foundations in Data Structures, Algorithms, Database Management Systems, Operating Systems, and Distributed Computing.
              </p>
            </div>
          </div>

          {/* Core Technical Domains Card */}
          <div className="p-6 rounded-lg border border-border-subtle bg-surface space-y-3">
            <div className="flex items-center gap-2 text-sm font-semibold text-text-main">
              <Terminal className="h-4 w-4 text-accent" /> Technical Focus Areas
            </div>
            <ul className="text-xs font-mono text-text-muted space-y-1.5">
              <li className="flex items-center gap-1.5">
                <span className="text-accent">•</span> Backend Services & REST APIs
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-accent">•</span> Relational & Polyglot Persistence
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-accent">•</span> Asynchronous Event Messaging
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-accent">•</span> Cryptographic Access Tokens
              </li>
            </ul>
          </div>
        </div>

      </div>

      {/* Core Engineering Philosophy */}
      <section className="py-12 md:py-16 border-b border-border-subtle space-y-8" aria-labelledby="principles-heading">
        <div>
          <span className="font-mono text-xs uppercase tracking-wider text-accent font-semibold">
            Work Ethic & Methodology
          </span>
          <h2 id="principles-heading" className="text-2xl sm:text-3xl font-bold tracking-tight text-text-main mt-1">
            Core Engineering Philosophy
          </h2>
          <p className="text-sm text-text-muted mt-1 max-w-xl">
            The principles that guide how I design, implement, and review production software.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-5 rounded-lg border border-border-subtle bg-surface/50 space-y-2.5">
            <div className="flex items-center gap-2 font-semibold text-text-main text-sm">
              <CheckCircle2 className="h-4 w-4 text-success" />
              Correctness Over Convenience
            </div>
            <p className="text-xs text-text-muted leading-relaxed">
              I avoid shortcut patterns that suppress compiler warnings, bypass type safety, or postpone edge-case handling. Software should be mathematically verifiable from the initial commit.
            </p>
          </div>

          <div className="p-5 rounded-lg border border-border-subtle bg-surface/50 space-y-2.5">
            <div className="flex items-center gap-2 font-semibold text-text-main text-sm">
              <CheckCircle2 className="h-4 w-4 text-success" />
              Defensive API Design
            </div>
            <p className="text-xs text-text-muted leading-relaxed">
              Client-side validation is a user experience enhancement, never a security boundary. All service endpoints must enforce strict schema validation, sanitary boundary parsing, and injection defenses.
            </p>
          </div>

          <div className="p-5 rounded-lg border border-border-subtle bg-surface/50 space-y-2.5">
            <div className="flex items-center gap-2 font-semibold text-text-main text-sm">
              <CheckCircle2 className="h-4 w-4 text-success" />
              Automated Verification Discipline
            </div>
            <p className="text-xs text-text-muted leading-relaxed">
              Features are not considered complete until backed by deterministic tests. Comprehensive unit and integration suites ensure that future refactoring can proceed with zero regression risk.
            </p>
          </div>

          <div className="p-5 rounded-lg border border-border-subtle bg-surface/50 space-y-2.5">
            <div className="flex items-center gap-2 font-semibold text-text-main text-sm">
              <CheckCircle2 className="h-4 w-4 text-success" />
              Lean Dependencies & Standard Tooling
            </div>
            <p className="text-xs text-text-muted leading-relaxed">
              Every third-party package introduced into a project carries a maintenance, licensing, and vulnerability cost. I prefer standard library primitives and well-vetted, minimal frameworks.
            </p>
          </div>
        </div>
      </section>

      {/* Technical Competencies Matrix */}
      <section className="py-12 md:py-16 border-b border-border-subtle space-y-8" aria-labelledby="toolbox-heading">
        <div>
          <span className="font-mono text-xs uppercase tracking-wider text-accent font-semibold">
            Technical Competencies
          </span>
          <h2 id="toolbox-heading" className="text-2xl sm:text-3xl font-bold tracking-tight text-text-main mt-1">
            Languages, Frameworks & Infrastructure
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
          
          <div className="p-5 rounded-lg border border-border-subtle bg-surface space-y-3">
            <div className="flex items-center gap-2 font-bold text-text-main text-sm">
              <Code2 className="h-4 w-4 text-accent" /> Languages & Runtimes
            </div>
            <ul className="space-y-1.5 text-text-muted">
              <li>• Python (Core, OOP, Async, Typing)</li>
              <li>• Java 21 (OOP, Streams, Collections)</li>
              <li>• TypeScript / JavaScript (ESNext)</li>
              <li>• SQL (PostgreSQL, MySQL, SQLite)</li>
              <li>• C / C++ (Memory, Data Structures)</li>
            </ul>
          </div>

          <div className="p-5 rounded-lg border border-border-subtle bg-surface space-y-3">
            <div className="flex items-center gap-2 font-bold text-text-main text-sm">
              <Database className="h-4 w-4 text-accent" /> Backend & Data Architecture
            </div>
            <ul className="space-y-1.5 text-text-muted">
              <li>• Spring Boot 3 & Spring Cloud</li>
              <li>• Fastify & Express (Node.js)</li>
              <li>• Flask & Django (Python)</li>
              <li>• Redis (Atomic Locks, Caching)</li>
              <li>• RabbitMQ (AMQP Event Queues)</li>
              <li>• MongoDB Atlas (Document Modeling)</li>
            </ul>
          </div>

          <div className="p-5 rounded-lg border border-border-subtle bg-surface space-y-3">
            <div className="flex items-center gap-2 font-bold text-text-main text-sm">
              <Terminal className="h-4 w-4 text-accent" /> Systems & Engineering Tools
            </div>
            <ul className="space-y-1.5 text-text-muted">
              <li>• Next.js 16 (App Router, Turbopack)</li>
              <li>• Docker & Docker Compose</li>
              <li>• Vitest, Jest & Unit Testing</li>
              <li>• Git, GitHub Actions, CI/CD</li>
              <li>• Keycloak (OAuth2 PKCE Security)</li>
              <li>• Linux CLI & PowerShell Scripting</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Navigation Footer */}
      <footer className="pt-12 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
        <Link
          href="/experience"
          className="inline-flex items-center gap-2 text-text-main hover:text-accent transition-colors"
        >
          <BookOpen className="h-4 w-4" /> View Experience Timeline
        </Link>
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 bg-text-main text-bg font-medium px-4 py-2 rounded-md hover:opacity-90 transition-opacity"
        >
          Explore Case Studies <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </footer>

    </div>
  )
}
