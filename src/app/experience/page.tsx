import type { Metadata } from "next"
import Link from "next/link"
import { siteConfig } from "@/content/site"
import { Building, Calendar, CheckCircle2, Download, FileText, GraduationCap, ArrowRight, ArrowUpRight, ShieldCheck, Cpu, Code2, Terminal } from "lucide-react"

export const metadata: Metadata = {
  title: "Experience",
  description: "Professional career timeline, engineering roles at Brillio, and academic background of Praveen Patil.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/experience`,
  },
  openGraph: {
    title: `Experience · ${siteConfig.name}`,
    description: "Professional career timeline, engineering roles at Brillio, and academic background of Praveen Patil.",
    url: `${siteConfig.siteUrl}/experience`,
    type: "website",
  },
}

export default function ExperiencePage() {
  return (
    <div className="container mx-auto max-w-5xl px-4 sm:px-6 py-12 md:py-20">
      
      {/* Header */}
      <div className="space-y-4 pb-12 border-b border-border-subtle">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-accent font-semibold">
              Career History & Trajectory
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-text-main mt-1">
              Engineering Experience
            </h1>
          </div>

          {/* Résumé CTA respecting strict owner gating */}
          {siteConfig.resumeEnabled ? (
            <Link
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-text-main text-bg text-sm font-medium px-4 py-2 rounded-md hover:opacity-90 active:scale-[0.98] transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <Download className="h-4 w-4" /> Download Résumé
            </Link>
          ) : (
            <div className="inline-flex items-center gap-2 border border-border-subtle bg-surface px-3 py-1.5 rounded-md text-xs font-mono text-text-muted">
              <FileText className="h-3.5 w-3.5 text-accent" />
              <span>Résumé available upon request</span>
            </div>
          )}
        </div>
        <p className="text-lg text-text-muted max-w-2xl leading-relaxed">
          Chronological record of my professional growth, technical responsibilities at Brillio, and foundational computer science education.
        </p>
      </div>

      {/* Main Experience Timeline */}
      <div className="py-12 md:py-16 space-y-12">
        
        {/* Role 1: Associate Software Engineer */}
        <div className="relative pl-8 sm:pl-10 border-l-2 border-accent space-y-4">
          <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-accent border-4 border-bg" />
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-bold text-text-main">
                  Associate Software Engineer
                </h2>
                <span className="font-mono text-[11px] px-2 py-0.5 rounded-full bg-accent/15 text-accent font-semibold border border-accent/30">
                  Current Role
                </span>
              </div>
              <p className="text-sm font-semibold text-accent flex items-center gap-1.5 mt-0.5">
                <Building className="h-4 w-4" /> Brillio
              </p>
            </div>
            <span className="font-mono text-xs text-text-muted flex items-center gap-1.5 shrink-0">
              <Calendar className="h-3.5 w-3.5" /> Sept 28, 2026 – Present · Full-Time
            </span>
          </div>

          <p className="text-sm text-text-muted leading-relaxed">
            Transitioned to full-time Associate Software Engineer following successful completion of engineering internship. Focused on backend services, reliable API design, and engineering hygiene within agile development cycles.
          </p>

          <div className="space-y-3 pt-2">
            <h3 className="text-xs font-mono uppercase tracking-wider text-text-main font-semibold">
              Verified Engineering Focus Areas:
            </h3>
            <ul className="space-y-2.5 text-xs text-text-muted leading-relaxed">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                <span>
                  <strong className="text-text-main">Backend Service Implementation:</strong> Developing and maintaining backend API endpoints with defensive schema validation, predictable error payloads, and strict HTTP contract compliance.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                <span>
                  <strong className="text-text-main">Code Review & Architectural Hygiene:</strong> Participating actively in peer pull request reviews, discussing design trade-offs, and enforcing clean code standards across the codebase.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                <span>
                  <strong className="text-text-main">Automated Verification:</strong> Writing unit and integration test suites to validate business logic boundaries and prevent regression during active feature releases.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                <span>
                  <strong className="text-text-main">Diagnostics & Root-Cause Triaging:</strong> Investigating unexpected runtime exceptions, analyzing error logs, and addressing defect tickets to enhance overall system reliability.
                </span>
              </li>
            </ul>
          </div>

          {/* Core Competencies Used */}
          <div className="pt-2 flex flex-wrap gap-1.5">
            {["Backend APIs", "Java & Spring", "Python", "REST Architecture", "Automated Testing", "Git Workflows", "Agile Collaboration"].map((tag) => (
              <span key={tag} className="text-[11px] font-mono px-2 py-0.5 rounded bg-surface-elevated border border-border-subtle text-text-muted">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Role 2: Software Engineer Intern */}
        <div className="relative pl-8 sm:pl-10 border-l-2 border-border-subtle space-y-4">
          <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-border-subtle border-4 border-bg" />
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
            <div>
              <h2 className="text-xl font-bold text-text-main">
                Software Engineer Intern
              </h2>
              <p className="text-sm font-semibold text-text-muted flex items-center gap-1.5 mt-0.5">
                <Building className="h-4 w-4" /> Brillio
              </p>
            </div>
            <span className="font-mono text-xs text-text-muted flex items-center gap-1.5 shrink-0">
              <Calendar className="h-3.5 w-3.5" /> March 5, 2026 – Sept 27, 2026 · Internship
            </span>
          </div>

          <p className="text-sm text-text-muted leading-relaxed">
            Commenced engineering internship on March 5, 2026. Completed technical onboarding and intensive software engineering training. Gained practical experience implementing backend components, working with relational databases, and collaborating under senior engineering guidance before converting to full-time.
          </p>

          <div className="space-y-3 pt-2">
            <h3 className="text-xs font-mono uppercase tracking-wider text-text-main font-semibold">
              Internship Milestones & Learning:
            </h3>
            <ul className="space-y-2.5 text-xs text-text-muted leading-relaxed">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-text-muted shrink-0 mt-0.5" />
                <span>
                  <strong className="text-text-main">Engineering Onboarding & Foundation:</strong> Completed enterprise technical training covering clean code practices, testing methodologies, and collaborative git development.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-text-muted shrink-0 mt-0.5" />
                <span>
                  <strong className="text-text-main">Component & Script Delivery:</strong> Built modular components, helper scripts, and automated test cases complying with team standards.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-text-muted shrink-0 mt-0.5" />
                <span>
                  <strong className="text-text-main">Architecture & Systems Mentorship:</strong> Studied distributed architecture patterns, database design, and CI/CD pipelines through hands-on technical assignments.
                </span>
              </li>
            </ul>
          </div>

          {/* Core Competencies Used */}
          <div className="pt-2 flex flex-wrap gap-1.5">
            {["Technical Onboarding", "Core Java", "Python", "SQL", "Unit Testing", "Git Hygiene", "Code Reviews"].map((tag) => (
              <span key={tag} className="text-[11px] font-mono px-2 py-0.5 rounded bg-surface-elevated border border-border-subtle text-text-muted">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Milestone 3: Academic Foundation */}
        <div className="relative pl-8 sm:pl-10 border-l-2 border-border-subtle space-y-4">
          <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-border-subtle border-4 border-bg" />
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
            <div>
              <h2 className="text-xl font-bold text-text-main">
                Bachelor of Engineering (B.E.)
              </h2>
              <p className="text-sm font-semibold text-text-muted flex items-center gap-1.5 mt-0.5">
                <GraduationCap className="h-4 w-4 text-accent" /> Computer Science and Engineering
              </p>
            </div>
            <span className="font-mono text-xs text-text-muted flex items-center gap-1.5 shrink-0">
              <Calendar className="h-3.5 w-3.5" /> Completed Degree
            </span>
          </div>

          <p className="text-sm text-text-muted leading-relaxed">
            Rigorous undergraduate education providing foundational grounding in software engineering principles, algorithms, operating system internals, database normalization, and computer networking.
          </p>

          <div className="p-4 rounded-lg bg-surface border border-border-subtle text-xs font-mono space-y-2">
            <span className="text-text-main font-semibold block">Academic Capstones & Exploration:</span>
            <p className="text-text-muted leading-relaxed">
              Designed and built <Link href="/projects/blogopedia" className="text-accent underline font-medium">Blogopedia</Link> to explore relational database normalization, foreign key cascading, and custom decorator authorization, alongside explorations in desktop GUI engines with <Link href="/projects" className="text-accent underline font-medium">ApexBrowser</Link>.
            </p>
          </div>
        </div>

      </div>

      {/* Engineering Practice Areas Section */}
      <section className="py-12 md:py-16 border-t border-border-subtle space-y-8" aria-labelledby="practice-heading">
        <div>
          <span className="font-mono text-xs uppercase tracking-wider text-accent font-semibold">
            Applied Engineering Principles
          </span>
          <h2 id="practice-heading" className="text-2xl sm:text-3xl font-bold tracking-tight text-text-main mt-1">
            How I Approach Engineering Tasks
          </h2>
          <p className="text-sm text-text-muted mt-1 max-w-xl">
            Practical standards and engineering values applied across daily code contributions and system design.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-5 rounded-lg border border-border-subtle bg-surface space-y-2.5">
            <div className="flex items-center gap-2 font-semibold text-text-main text-sm">
              <ShieldCheck className="h-4 w-4 text-accent" />
              Defensive Boundary Validation
            </div>
            <p className="text-xs text-text-muted leading-relaxed">
              Client inputs must never be trusted. Every service boundary enforces strict type safety, schema validation, and defensive escaping before touching internal domain logic or database layers.
            </p>
          </div>

          <div className="p-5 rounded-lg border border-border-subtle bg-surface space-y-2.5">
            <div className="flex items-center gap-2 font-semibold text-text-main text-sm">
              <Code2 className="h-4 w-4 text-accent" />
              Comprehensive Automated Verification
            </div>
            <p className="text-xs text-text-muted leading-relaxed">
              Features are not considered complete until covered by meaningful unit and integration tests. Automated test suites provide the confidence needed for aggressive refactoring without regression.
            </p>
          </div>

          <div className="p-5 rounded-lg border border-border-subtle bg-surface space-y-2.5">
            <div className="flex items-center gap-2 font-semibold text-text-main text-sm">
              <Cpu className="h-4 w-4 text-accent" />
              Asynchronous & Decoupled State
            </div>
            <p className="text-xs text-text-muted leading-relaxed">
              Long-running operations (such as analytical processing or third-party AI generation) should never block client HTTP worker threads. Event queues like RabbitMQ keep user transactions snappy and resilient.
            </p>
          </div>

          <div className="p-5 rounded-lg border border-border-subtle bg-surface space-y-2.5">
            <div className="flex items-center gap-2 font-semibold text-text-main text-sm">
              <Terminal className="h-4 w-4 text-accent" />
              Operational Clarity & Debuggability
            </div>
            <p className="text-xs text-text-muted leading-relaxed">
              Writing maintainable code means making systems easy to debug at 2 AM. Structured logging, clear error hierarchies, and minimal runtime dependencies reduce diagnostic overhead.
            </p>
          </div>
        </div>
      </section>

      {/* Engineering Insights & Field Notes Section */}
      <section className="py-12 md:py-16 border-t border-border-subtle space-y-8" aria-labelledby="notes-heading">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-accent font-semibold">
              Technical Writing & Architectural Log
            </span>
            <h2 id="notes-heading" className="text-2xl sm:text-3xl font-bold tracking-tight text-text-main mt-1">
              Engineering Field Notes
            </h2>
          </div>
          <p className="text-xs font-mono text-text-muted">
            Key architectural lessons derived from real systems implementation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Note 1 */}
          <div className="p-5 rounded-lg border border-border-subtle bg-surface/50 hover:bg-surface transition-colors flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <span className="font-mono text-[10px] uppercase tracking-wider text-accent font-semibold block">
                Note 01 · Cryptographic Security
              </span>
              <h3 className="text-sm font-bold text-text-main">
                Asymmetric Tokens vs. Symmetric Secrets
              </h3>
              <p className="text-xs text-text-muted leading-relaxed">
                Why PASETO v4 Public (Ed25519) eliminates algorithm confusion attacks (like <code>alg: none</code>) and allows downstream services to verify tokens without sharing sensitive private keys.
              </p>
            </div>
            <Link
              href="/projects/vaultless"
              className="text-xs font-mono text-accent hover:underline inline-flex items-center gap-1 pt-2 border-t border-border-subtle"
            >
              See Vaultless Case Study <ArrowUpRight className="h-3 w-3" />
            </Link>
          </div>

          {/* Note 2 */}
          <div className="p-5 rounded-lg border border-border-subtle bg-surface/50 hover:bg-surface transition-colors flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <span className="font-mono text-[10px] uppercase tracking-wider text-accent font-semibold block">
                Note 02 · Event-Driven Architecture
              </span>
              <h3 className="text-sm font-bold text-text-main">
                Decoupling High-Latency LLMs with AMQP
              </h3>
              <p className="text-xs text-text-muted leading-relaxed">
                How offloading Gemini API recommendation workloads to RabbitMQ queues protects client response times (&lt;50ms) and prevents HTTP worker thread starvation.
              </p>
            </div>
            <Link
              href="/projects/fittrack"
              className="text-xs font-mono text-accent hover:underline inline-flex items-center gap-1 pt-2 border-t border-border-subtle"
            >
              See FitTrack Case Study <ArrowUpRight className="h-3 w-3" />
            </Link>
          </div>

          {/* Note 3 */}
          <div className="p-5 rounded-lg border border-border-subtle bg-surface/50 hover:bg-surface transition-colors flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <span className="font-mono text-[10px] uppercase tracking-wider text-accent font-semibold block">
                Note 03 · Relational Integrity
              </span>
              <h3 className="text-sm font-bold text-text-main">
                Normalized Schemas & Foreign Key Semantics
              </h3>
              <p className="text-xs text-text-muted leading-relaxed">
                The trade-offs between strict relational foreign key cascades in PostgreSQL vs flexible document storage in MongoDB Atlas across multi-service domains.
              </p>
            </div>
            <Link
              href="/projects/blogopedia"
              className="text-xs font-mono text-accent hover:underline inline-flex items-center gap-1 pt-2 border-t border-border-subtle"
            >
              See Blogopedia Case Study <ArrowUpRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* Navigation Footer */}
      <footer className="pt-12 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
        <Link 
          href="/about" 
          className="text-text-muted hover:text-accent transition-colors flex items-center gap-1"
        >
          About Praveen Patil
        </Link>
        <Link 
          href="/projects" 
          className="inline-flex items-center gap-1.5 bg-text-main text-bg font-medium px-4 py-2 rounded-md hover:opacity-90 transition-opacity"
        >
          Explore Systems & Projects <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </footer>

    </div>
  )
}
