import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { siteConfig } from "@/content/site"
import { ArrowLeft, ArrowUpRight, CheckCircle2, Shield, AlertTriangle, BookOpen, Database, Code, Lock, Server } from "lucide-react"
import { SiGithub } from "react-icons/si"

export const metadata: Metadata = {
  title: "Blogopedia — Academic Full-Stack Publishing Platform Case Study",
  description: "Technical case study of Blogopedia: an academic full-stack blog platform built with Python, Flask, SQLAlchemy ORM, Flask-Login authentication, Flask-WTF CSRF defense, and relational data modeling.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/projects/blogopedia`,
  },
  openGraph: {
    title: `Blogopedia Case Study · ${siteConfig.name}`,
    description: "Academic full-stack blog platform built with Python, Flask, SQLAlchemy ORM, Flask-Login authentication, and relational data modeling.",
    url: `${siteConfig.siteUrl}/projects/blogopedia`,
    type: "article",
  },
}

export default function BlogopediaCaseStudy() {
  return (
    <article className="container mx-auto max-w-4xl px-4 sm:px-6 py-12 md:py-20">
      
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumbs" className="mb-8">
        <Link 
          href="/projects" 
          className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-text-muted hover:text-accent transition-colors py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> Back to Engineering Lab
        </Link>
      </nav>

      {/* Case Study Header */}
      <header className="space-y-6 pb-10 border-b border-border-subtle">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-mono text-xs px-2.5 py-1 rounded-md border border-border-subtle bg-surface-elevated text-accent font-semibold">
            Academic Full-Stack Project
          </span>
          <span className="font-mono text-xs px-2.5 py-1 rounded-md border border-border-subtle bg-surface-elevated text-success flex items-center gap-1 font-medium">
            <CheckCircle2 className="h-3 w-3" /> Verified Public Repository
          </span>
          <span className="font-mono text-xs px-2.5 py-1 rounded-md border border-border-subtle bg-surface-elevated text-text-muted">
            Foundational Engineering Capstone
          </span>
        </div>

        <div className="space-y-3">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-text-main leading-tight">
            Blogopedia: Relational Modeling & Role-Based Publishing Platform
          </h1>
          <p className="text-lg md:text-xl text-text-muted leading-relaxed max-w-3xl">
            A full-stack publication system developed during undergraduate coursework to explore relational schema normalization, session-based authentication lifecycles, decorator-driven authorization, and server-side Jinja2 template rendering with Flask and SQLAlchemy.
          </p>
        </div>

        {/* Project Meta Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-lg border border-border-subtle bg-surface font-mono text-xs">
          <div>
            <span className="text-text-muted block text-[10px] uppercase tracking-wider">Classification</span>
            <span className="text-text-main font-medium">Academic Capstone</span>
          </div>
          <div>
            <span className="text-text-muted block text-[10px] uppercase tracking-wider">Backend Stack</span>
            <span className="text-text-main font-medium">Python 3.10+ · Flask</span>
          </div>
          <div>
            <span className="text-text-muted block text-[10px] uppercase tracking-wider">ORM & Database</span>
            <span className="text-text-main font-medium">SQLAlchemy · SQLite/PG</span>
          </div>
          <div>
            <span className="text-text-muted block text-[10px] uppercase tracking-wider">Security Layer</span>
            <span className="text-text-main font-medium">Flask-Login · Werkzeug</span>
          </div>
        </div>

        {/* Action Links */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <Link
            href="https://github.com/PraveenNPatil07/Blogopedia"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-text-main text-bg text-xs font-mono font-medium px-4 py-2 rounded-md hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <SiGithub className="h-4 w-4" /> Source Repository <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
          <span className="inline-flex items-center gap-2 border border-border-subtle bg-surface text-text-muted text-xs font-mono px-3 py-2 rounded-md">
            <Server className="h-3.5 w-3.5 text-accent" /> WSGI Serverless Configured (Vercel)
          </span>
        </div>

        {/* Full-Stack Application Interface Showcase */}
        <div className="relative w-full aspect-[21/9] sm:aspect-[16/8] rounded-xl overflow-hidden border border-border-subtle bg-surface shadow-xs mt-6">
          <Image
            src="/Blogopedia.png"
            alt="Blogopedia Full-Stack Relational Publishing Platform Interface"
            fill
            sizes="(max-width: 768px) 100vw, 1024px"
            className="object-cover"
            priority
          />
        </div>
      </header>

      {/* Main Content Body */}
      <div className="py-12 space-y-16">
        
        {/* Section 1: The Problem & Academic Motivation */}
        <section className="space-y-4" aria-labelledby="motivation-heading">
          <div className="flex items-center gap-2 text-accent font-mono text-xs uppercase tracking-wider font-semibold">
            <BookOpen className="h-4 w-4" />
            01 / Academic Context & Motivation
          </div>
          <h2 id="motivation-heading" className="text-2xl font-bold tracking-tight text-text-main">
            Understanding Server-Side Web Fundamentals from First Principles
          </h2>
          <div className="space-y-4 text-text-muted text-sm sm:text-base leading-relaxed">
            <p>
              In contemporary frontend-heavy ecosystems, developers frequently rely on abstracted Backend-as-a-Service (BaaS) platforms without deeply understanding how session cookies, cryptographic salt hashing, or relational foreign key cascades operate under the hood.
            </p>
            <p>
              <strong>Blogopedia</strong> was developed as an academic capstone to master these core backend mechanics from scratch:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2 text-text-main/90 font-mono text-xs sm:text-sm">
              <li><strong>Relational Integrity & Foreign Keys:</strong> Defining parent-child entity constraints across users, blog posts, and nested comments.</li>
              <li><strong>Session Authentication & Cryptographic Hashing:</strong> Implementing salted PBKDF2 hashing, secure cookie serialization, and session restoration via Flask-Login.</li>
              <li><strong>Form Validation & CSRF Mitigation:</strong> Validating client input on the server and binding cryptographic CSRF tokens to every mutating POST request.</li>
              <li><strong>Route-Level Access Control:</strong> Constructing custom Python function decorators to enforce role hierarchies (e.g. distinguishing post authors from system administrators).</li>
            </ul>
          </div>
        </section>

        {/* Section 2: Relational Schema & Entity Modeling */}
        <section className="space-y-6" aria-labelledby="schema-heading">
          <div className="flex items-center gap-2 text-accent font-mono text-xs uppercase tracking-wider font-semibold">
            <Database className="h-4 w-4" />
            02 / Relational Schema Architecture
          </div>
          <h2 id="schema-heading" className="text-2xl font-bold tracking-tight text-text-main">
            Normalized SQLAlchemy Relational Schema
          </h2>
          <p className="text-text-muted text-sm sm:text-base leading-relaxed">
            The database model establishes strict referential integrity across three core entities using SQLAlchemy ORM: <code>User</code>, <code>BlogPost</code>, and <code>Comment</code>.
          </p>

          {/* Relational Entity Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            <div className="p-4 rounded-lg border border-border-subtle bg-surface space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between border-b border-border-subtle pb-2">
                <span className="font-bold text-text-main">Table: users</span>
                <span className="text-[10px] text-accent">Parent Entity</span>
              </div>
              <ul className="space-y-1 text-text-muted">
                <li><span className="text-text-main">id</span>: Integer (PK)</li>
                <li><span className="text-text-main">email</span>: String(100) (Unique)</li>
                <li><span className="text-text-main">password</span>: String(250) (Hashed)</li>
                <li><span className="text-text-main">name</span>: String(100)</li>
                <li className="pt-2 text-accent">→ posts (1:M relationship)</li>
                <li className="text-accent">→ comments (1:M relationship)</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg border border-border-subtle bg-surface space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between border-b border-border-subtle pb-2">
                <span className="font-bold text-text-main">Table: blog_posts</span>
                <span className="text-[10px] text-accent">Content Entity</span>
              </div>
              <ul className="space-y-1 text-text-muted">
                <li><span className="text-text-main">id</span>: Integer (PK)</li>
                <li><span className="text-text-main">author_id</span>: FK → users.id</li>
                <li><span className="text-text-main">title</span>: String(250) (Unique)</li>
                <li><span className="text-text-main">subtitle</span>: String(250)</li>
                <li><span className="text-text-main">date</span>: String(250)</li>
                <li><span className="text-text-main">body</span>: Text (CKEditor HTML)</li>
                <li className="pt-2 text-accent">→ comments (1:M relationship)</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg border border-border-subtle bg-surface space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between border-b border-border-subtle pb-2">
                <span className="font-bold text-text-main">Table: comments</span>
                <span className="text-[10px] text-accent">Child Entity</span>
              </div>
              <ul className="space-y-1 text-text-muted">
                <li><span className="text-text-main">id</span>: Integer (PK)</li>
                <li><span className="text-text-main">author_id</span>: FK → users.id</li>
                <li><span className="text-text-main">post_id</span>: FK → blog_posts.id</li>
                <li><span className="text-text-main">text</span>: Text (Sanitized Body)</li>
                <li className="pt-2 text-text-main">Both FKs enforce cascading referential integrity.</li>
              </ul>
            </div>

          </div>

          {/* ASCII Relational Entity Diagram Container */}
          <div className="p-6 sm:p-7 rounded-xl border border-border-subtle bg-surface hover:border-accent/40 transition-all duration-300 shadow-xs space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border-subtle pb-3.5">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                </span>
                <span className="font-mono text-xs text-text-main font-semibold uppercase tracking-wider">
                  Relational Entity-Relationship Diagram (ERD)
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-[11px] px-2.5 py-0.5 rounded bg-surface-elevated border border-border-subtle text-accent font-medium">
                  3NF Normalized (SQLAlchemy ORM)
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-[11px] font-mono text-text-muted px-1">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                  Foreign Key Cascades & Cardinality
                </span>
                <span className="hidden sm:inline text-[10px] text-text-muted">
                  Scroll horizontally to inspect full trace →
                </span>
              </div>
              <div className="p-4 rounded-lg bg-surface-elevated/80 border border-border-subtle font-mono text-xs text-text-muted overflow-x-auto leading-relaxed shadow-xs">
                <pre>{`┌───────────────────────────┐
│           User            │
├───────────────────────────┤
│ id (PK)                   │
│ email (Unique)            │
│ password (PBKDF2 Hashed)  │
│ name                      │
└─────────────┬─────────────┘
              │ 1
              │
              │ has many
              ├──────────────────────────────────────────┐
              │ M                                        │ M
              ▼                                          ▼
┌───────────────────────────┐              ┌───────────────────────────┐
│         BlogPost          │              │          Comment          │
├───────────────────────────┤              ├───────────────────────────┤
│ id (PK)                   │              │ id (PK)                   │
│ author_id (FK -> User.id) │ 1            │ author_id (FK -> User.id) │
│ title                     │──has many───>│ post_id   (FK -> Post.id) │
│ subtitle / date / body    │            M │ text                      │
└───────────────────────────┘              └───────────────────────────┘`}</pre>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Authentication & Authorization Details */}
        <section className="space-y-6" aria-labelledby="security-heading">
          <div className="flex items-center gap-2 text-accent font-mono text-xs uppercase tracking-wider font-semibold">
            <Lock className="h-4 w-4" />
            03 / Authentication & Authorization Mechanics
          </div>
          <h2 id="security-heading" className="text-2xl font-bold tracking-tight text-text-main">
            PBKDF2 Password Hashing & Custom Admin Decorators
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="p-5 rounded-lg border border-border-subtle bg-surface space-y-3">
              <h3 className="text-base font-bold text-text-main flex items-center gap-2">
                <Shield className="h-4 w-4 text-accent" /> Password Storage & Verification
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                Passwords are never stored in plaintext. Utilizing Werkzeug&apos;s security suite, user credentials pass through <code>generate_password_hash(method=&apos;pbkdf2:sha256&apos;, salt_length=8)</code>. During login, <code>check_password_hash</code> verifies user input against stored salt-hash pairs.
              </p>
            </div>

            <div className="p-5 rounded-lg border border-border-subtle bg-surface space-y-3">
              <h3 className="text-base font-bold text-text-main flex items-center gap-2">
                <Code className="h-4 w-4 text-accent" /> The @admin_only Route Decorator
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                Rather than sprinkling imperative role checks across route handlers, an idiomatic Python decorator (<code>@admin_only</code>) inspects <code>current_user.id == 1</code>. If an unprivileged user attempts to access post creation, edit, or delete endpoints, the decorator intercepts execution and issues an immediate <code>403 Forbidden</code>.
              </p>
            </div>

            <div className="p-5 rounded-lg border border-border-subtle bg-surface space-y-3">
              <h3 className="text-base font-bold text-text-main flex items-center gap-2">
                <Shield className="h-4 w-4 text-accent" /> CSRF Protection with Flask-WTF
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                Every client form (registration, login, post editing, comment submission) is modeled using WTForms classes. Flask-WTF injects a cryptographic CSRF token that is validated on form submission, protecting the session cookie from cross-site request forgery attacks.
              </p>
            </div>

            <div className="p-5 rounded-lg border border-border-subtle bg-surface space-y-3">
              <h3 className="text-base font-bold text-text-main flex items-center gap-2">
                <Server className="h-4 w-4 text-accent" /> Serverless WSGI Adaptability
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                The repository includes a <code>vercel.json</code> deployment configuration using the <code>@vercel/python</code> runtime. It maps the Flask WSGI callable (<code>app</code> in <code>main.py</code>) to serverless function invocations without modifying business logic.
              </p>
            </div>

          </div>
        </section>

        {/* Section 4: Academic Decisions & Trade-Offs */}
        <section className="space-y-4" aria-labelledby="decisions-heading">
          <div className="flex items-center gap-2 text-accent font-mono text-xs uppercase tracking-wider font-semibold">
            <BookOpen className="h-4 w-4" />
            04 / Engineering Decisions & Trade-offs
          </div>
          <h2 id="decisions-heading" className="text-2xl font-bold tracking-tight text-text-main">
            Architectural Choices for a Coursework Capstone
          </h2>
          <div className="space-y-4 text-text-muted text-sm sm:text-base leading-relaxed">
            <p>
              When evaluating Blogopedia within an engineering portfolio, it is vital to assess the intentional choices made during its implementation:
            </p>
            <div className="p-4 rounded-lg bg-surface border border-border-subtle font-mono text-xs space-y-3">
              <div>
                <strong className="text-text-main">1. Server-Side Jinja2 Rendering vs. Decoupled SPA:</strong>
                <p className="text-text-muted mt-0.5">SSR eliminated state synchronization issues, simplified authentication cookie handling, and delivered instantaneous page loads with zero JavaScript bundle overhead.</p>
              </div>
              <div>
                <strong className="text-text-main">2. SQLAlchemy ORM vs. Raw SQL:</strong>
                <p className="text-text-muted mt-0.5">Abstracted database interactions allowed seamless switching between SQLite for zero-config local development and PostgreSQL for production environments via environment variables.</p>
              </div>
              <div>
                <strong className="text-text-main">3. Client Gravatar Avatar Integration:</strong>
                <p className="text-text-muted mt-0.5">Instead of maintaining file upload endpoints and object storage buckets, MD5-hashed email addresses query Gravatar to display author avatars dynamically.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Honest Limitations */}
        <section className="space-y-4" aria-labelledby="limitations-heading">
          <div className="flex items-center gap-2 text-accent font-mono text-xs uppercase tracking-wider font-semibold">
            <AlertTriangle className="h-4 w-4" />
            05 / Honest Academic Scope Limitations
          </div>
          <h2 id="limitations-heading" className="text-2xl font-bold tracking-tight text-text-main">
            Limitations of the Coursework Architecture
          </h2>
          <p className="text-text-muted text-sm leading-relaxed">
            While robust for educational purposes, the system reflects the boundaries of a foundational capstone:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg border border-border-subtle bg-surface/50 text-xs font-mono space-y-2">
              <span className="text-text-main font-bold">1. Hardcoded Administrator ID</span>
              <p className="text-text-muted leading-relaxed">
                The <code>@admin_only</code> decorator inspects <code>current_user.id == 1</code>. In an enterprise system, this would be replaced with dynamic role tables, permission claims, or group memberships.
              </p>
            </div>

            <div className="p-4 rounded-lg border border-border-subtle bg-surface/50 text-xs font-mono space-y-2">
              <span className="text-text-main font-bold">2. Synchronous Monolithic Execution</span>
              <p className="text-text-muted leading-relaxed">
                All requests, database queries, and template renders run synchronously in a single Python thread per worker. High concurrent write throughput would require connection pooling and async workers.
              </p>
            </div>

            <div className="p-4 rounded-lg border border-border-subtle bg-surface/50 text-xs font-mono space-y-2">
              <span className="text-text-main font-bold">3. Stateful Session Cookies</span>
              <p className="text-text-muted leading-relaxed">
                User sessions rely on signed client cookies. Horizontal scaling across serverless instances requires configuring a shared secret key and maintaining lightweight session payloads.
              </p>
            </div>

            <div className="p-4 rounded-lg border border-border-subtle bg-surface/50 text-xs font-mono space-y-2">
              <span className="text-text-main font-bold">4. Client-Side Sanitization Reliance</span>
              <p className="text-text-muted leading-relaxed">
                Blog post bodies rely on CKEditor rich text HTML rendering with Jinja2 <code>safe</code> filters. While effective for personal blogging, multi-tenant public input requires rigorous server-side HTML sanitization (e.g. Bleach).
              </p>
            </div>
          </div>
        </section>

      </div>

      {/* Footer Navigation */}
      <footer className="pt-8 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
        <Link 
          href="/projects/fittrack" 
          className="text-text-muted hover:text-accent transition-colors flex items-center gap-1"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> Previous: FitTrack
        </Link>
        <Link 
          href="/projects" 
          className="text-accent hover:underline flex items-center gap-1"
        >
          Back to Engineering Lab <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      </footer>

    </article>
  )
}
