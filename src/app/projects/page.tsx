import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { siteConfig } from "@/content/site"
import { ArrowRight, ArrowUpRight, CheckCircle2, Shield, Cpu, BookOpen } from "lucide-react"
import { SiGithub } from "react-icons/si"

export const metadata: Metadata = {
  title: "Engineering Lab & Systems Case Studies",
  description: "Verified software systems, microservices architectures, security brokers, and foundational technical explorations by Praveen Patil.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/projects`,
  },
  openGraph: {
    title: `Engineering Lab & Systems · ${siteConfig.name}`,
    description: "Verified software systems, microservices architectures, security brokers, and foundational technical explorations.",
    url: `${siteConfig.siteUrl}/projects`,
    type: "website",
  },
}

interface CaseStudy {
  title: string
  slug: string
  category: string
  tagline: string
  description: string
  techStack: string[]
  githubUrl: string
  highlights: string[]
  icon: typeof Shield
  imageSrc: string
  imageAlt: string
}

interface FoundationalProject {
  title: string
  category: string
  subCategory: string
  description: string
  techStack: string[]
  githubUrl: string
  highlights: string[]
  imageSrc: string
  imageAlt: string
}

const flagshipCaseStudies: CaseStudy[] = [
  {
    title: "Vaultless",
    slug: "vaultless",
    category: "Distributed Systems & Security",
    tagline: "Ephemeral Credential Broker for Autonomous AI Agents",
    description: "Stateless security broker eliminating standing privileges for AI agents. Mints short-lived, scoped PASETO v4 tokens and guarantees strictly atomic single-use consumption via Redis SETNX locks and PostgreSQL audit ledgers.",
    techStack: ["TypeScript", "Fastify", "PASETO v4 (Ed25519)", "Redis", "PostgreSQL", "Docker", "Vitest"],
    githubUrl: "https://github.com/PraveenNPatil07/Vaultless",
    highlights: [
      "PASETO v4 Public Ed25519 asymmetric cryptography without algorithm negotiation",
      "Atomic single-use token burn via Redis SET NX EX preventing concurrent race conditions",
      "Fail-closed resilience model (503 Service Unavailable on cache partition)",
      "Append-only synchronous audit logging in PostgreSQL with Prometheus metrics",
    ],
    icon: Shield,
    imageSrc: "/vaultless-architecture.svg",
    imageAlt: "Vaultless Ephemeral Credential Broker System Architecture & Security Operations",
  },
  {
    title: "FitTrack",
    slug: "fittrack",
    category: "Microservices & Event-Driven Architecture",
    tagline: "Distributed Fitness Platform & Asynchronous AI Recommendation Engine",
    description: "Decomposed 6-microservice architecture with Spring Cloud Gateway, Netflix Eureka discovery, and centralized configuration. Features asynchronous LLM workout analysis via RabbitMQ and polyglot persistence.",
    techStack: ["Java 21", "Spring Boot 3", "Spring Cloud Gateway", "RabbitMQ", "Keycloak (PKCE)", "MongoDB Atlas", "PostgreSQL"],
    githubUrl: "https://github.com/PraveenNPatil07/FitTrack",
    highlights: [
      "Six decoupled Spring Boot services with dynamic Eureka discovery and Config Server",
      "Asynchronous AMQP decoupling via RabbitMQ for Google Gemini recommendation generation",
      "Polyglot data layer: ACID PostgreSQL for identities, MongoDB Atlas for telemetry",
      "OAuth2 Authorization Code with PKCE and Spring Cloud Gateway JWKS validation",
    ],
    icon: Cpu,
    imageSrc: "/fittrack-architecture.svg",
    imageAlt: "FitTrack Distributed Microservices Topology & Event-Driven AI Architecture",
  },
  {
    title: "Blogopedia",
    slug: "blogopedia",
    category: "Academic Full-Stack Exploration",
    tagline: "Relational Modeling & Role-Based Publishing Platform",
    description: "Undergraduate capstone investigating relational schema normalization, session-based authentication lifecycles, and decorator-driven authorization with Flask and SQLAlchemy.",
    techStack: ["Python 3.10+", "Flask", "SQLAlchemy", "Flask-Login", "WTForms", "Werkzeug", "Jinja2"],
    githubUrl: "https://github.com/PraveenNPatil07/Blogopedia",
    highlights: [
      "Normalized 3-entity relational schema (User, BlogPost, Comment) with foreign key cascades",
      "Custom Python decorator (@admin_only) enforcing route-level access control",
      "Salted PBKDF2 password hashing and automated CSRF protection with Flask-WTF",
      "Serverless WSGI deployment configuration in vercel.json",
    ],
    icon: BookOpen,
    imageSrc: "/Blogopedia.png",
    imageAlt: "Blogopedia Relational Publishing Platform Application Interface",
  },
]

const foundationalProjects: FoundationalProject[] = [
  {
    title: "ApexBrowser",
    category: "Foundational Project",
    subCategory: "Desktop GUI & WebEngine",
    description: "Desktop browser utility developed with Python and PyQt5 to investigate browser engine lifecycles, tabbed isolation, custom ad-blocking rules, and local bookmark/history persistence.",
    techStack: ["Python", "PyQt5", "QtWebEngine", "QThread"],
    githubUrl: "https://github.com/PraveenNPatil07/ApexBrowser",
    highlights: [
      "Multi-tabbed browsing architecture with isolated page lifecycles",
      "Custom ad-blocking rules, download handling, and session state persistence",
      "Desktop GUI exploration with PyQt5 and QtWebEngine",
    ],
    imageSrc: "/Apex Browser.png",
    imageAlt: "Apex Browser PyQt5 Desktop Application Interface",
  },
  {
    title: "Image Watermarking Desktop App",
    category: "Foundational Project",
    subCategory: "Desktop Utility",
    description: "Desktop utility developed with Python Tkinter and Pillow for batch image processing, positioning text/image watermarks, and preserving image aspect ratios.",
    techStack: ["Python", "Tkinter", "Pillow (PIL)"],
    githubUrl: "https://github.com/PraveenNPatil07/Image-Watermarking-App",
    highlights: [
      "Local offline batch image processing utility",
      "Interactive canvas preview with real-time coordinate calculations",
      "Pillow-based image manipulation with aspect ratio preservation",
    ],
    imageSrc: "/ImageWatermarkingApp.png",
    imageAlt: "Image Watermarking Desktop Application Interface",
  },
  {
    title: "Google Trends & Data Visualisation",
    category: "Foundational Project",
    subCategory: "Data Science & Analysis",
    description: "Jupyter Notebook data analysis comparing Google search trends with economic and financial time series (Bitcoin prices, Tesla stock, and US Unemployment rates during the Great Recession).",
    techStack: ["Python", "Jupyter Notebook", "Pandas", "Matplotlib"],
    githubUrl: "https://github.com/PraveenNPatil07/Google_Trends_and_Data_Visualisation",
    highlights: [
      "Time-series resampling and data cleansing across longitudinal datasets",
      "Dual-axis time-series visualization with color-coded locators in Matplotlib",
      "Correlation analysis between public search interest and market valuation",
    ],
    imageSrc: "/Google Trends project screenshot.png",
    imageAlt: "Google Trends and Stock Price Predictive Data Analysis Graph",
  },
]

export default function ProjectsPage() {
  return (
    <div className="container mx-auto max-w-5xl px-4 sm:px-6 py-12 md:py-20">
      
      {/* Header */}
      <div className="space-y-4 pb-12 border-b border-border-subtle">
        <span className="font-mono text-xs uppercase tracking-wider text-accent font-semibold">
          Engineering Lab
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-text-main">
          Systems & Case Studies
        </h1>
        <p className="text-lg text-text-muted max-w-2xl leading-relaxed">
          A verified catalog of software systems, distributed architectures, and foundational lab explorations. Each entry links directly to public source code with detailed architectural case studies.
        </p>
      </div>

      {/* Flagship Case Studies Section */}
      <section className="py-12 md:py-16 space-y-8" aria-labelledby="flagship-heading">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-border-subtle pb-4">
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-accent font-semibold">
              In-Depth Documentation
            </span>
            <h2 id="flagship-heading" className="text-2xl sm:text-3xl font-bold tracking-tight text-text-main mt-1">
              Featured Case Studies
            </h2>
          </div>
          <p className="text-xs font-mono text-text-muted">
            Derived directly from repository code & configuration
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {flagshipCaseStudies.map((study) => {
            const Icon = study.icon

            return (
              <div
                key={study.slug}
                className="group p-6 sm:p-8 rounded-xl border border-border-subtle bg-surface hover:border-accent/60 hover:shadow-md hover:-translate-y-1 transition-all duration-200 ease-out flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  {/* Meta Tag Line */}
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="p-1.5 rounded-md bg-surface-elevated text-accent border border-border-subtle">
                        <Icon className="h-4 w-4" />
                      </span>
                      <span className="font-mono text-xs px-2.5 py-0.5 rounded border border-border-subtle bg-surface-elevated text-accent font-medium">
                        {study.category}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-success flex items-center gap-1">
                      <CheckCircle2 className="h-3.5 w-3.5" /> Verified Public Repo
                    </span>
                  </div>

                  {/* Visual Architecture / System Preview */}
                  <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden border border-border-subtle bg-surface-elevated">
                    <Image
                      src={study.imageSrc}
                      alt={study.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 900px"
                      className="object-contain group-hover:scale-[1.01] transition-transform duration-500 ease-out"
                    />
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <h3 className="text-2xl font-bold text-text-main group-hover:text-accent transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-xs font-mono text-text-muted mt-0.5">
                      {study.tagline}
                    </p>
                    <p className="text-sm text-text-muted leading-relaxed mt-3">
                      {study.description}
                    </p>
                  </div>

                  {/* Architecture & Engineering Highlights */}
                  <div className="p-4 rounded-lg bg-surface-elevated/50 border border-border-subtle space-y-2">
                    <span className="font-mono text-xs font-semibold text-text-main uppercase tracking-wider block">
                      Architectural Highlights & Invariants
                    </span>
                    <ul className="space-y-1.5 text-xs font-mono text-text-muted">
                      {study.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-accent">▹</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Tech Stack & Action Links */}
                <div className="pt-4 border-t border-border-subtle flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {study.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono px-2 py-0.5 rounded bg-surface-elevated border border-border-subtle text-text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 shrink-0 font-mono text-xs">
                    <Link
                      href={study.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-text-muted hover:text-accent active:scale-95 transition-all duration-150"
                    >
                      <SiGithub className="h-3.5 w-3.5" /> Source Code <ArrowUpRight className="h-3 w-3" />
                    </Link>
                    <Link
                      href={`/projects/${study.slug}`}
                      className="inline-flex items-center gap-1.5 bg-text-main text-bg font-medium px-4 py-2 rounded-md hover:opacity-90 active:scale-[0.98] transition-all duration-150"
                    >
                      Read Case Study <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Foundational Projects & Lab Utilities */}
      <section className="py-12 md:py-16 space-y-8 border-t border-border-subtle" aria-labelledby="foundational-heading">
        <div>
          <span className="font-mono text-xs uppercase tracking-wider text-accent font-semibold">
            Explorations & Tooling
          </span>
          <h2 id="foundational-heading" className="text-2xl sm:text-3xl font-bold tracking-tight text-text-main mt-1">
            Foundational Software Projects
          </h2>
          <p className="text-sm text-text-muted mt-1 max-w-xl">
            Targeted desktop GUI utilities, data analysis notebooks, and early systems experiments exploring platform APIs and data processing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {foundationalProjects.map((project) => (
            <div
              key={project.title}
              className="group p-6 rounded-xl border border-border-subtle bg-surface flex flex-col justify-between hover:border-accent/60 hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200 ease-out space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs px-2 py-0.5 rounded border border-border-subtle bg-surface-elevated text-text-muted">
                    {project.subCategory}
                  </span>
                  <span className="text-xs font-mono text-success flex items-center gap-1">
                    <CheckCircle2 className="h-3 w-3" /> Verified
                  </span>
                </div>

                {/* Project Screenshot / Visual Preview */}
                <div className="relative w-full aspect-[16/9] rounded-md overflow-hidden border border-border-subtle bg-surface-elevated">
                  <Image
                    src={project.imageSrc}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 280px"
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                  />
                </div>

                <h3 className="text-lg font-bold text-text-main group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-xs text-text-muted leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-1 pt-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-text-muted font-semibold block">
                    Implementation Notes
                  </span>
                  <ul className="text-xs font-mono text-text-muted/90 space-y-1">
                    {project.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-accent text-[10px] mt-0.5">•</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-border-subtle space-y-3">
                <div className="flex flex-wrap gap-1">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-1.5 py-0.5 rounded bg-surface-elevated border border-border-subtle text-text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-mono text-accent hover:underline active:scale-95 transition-all duration-150"
                >
                  <SiGithub className="h-3.5 w-3.5" /> View Public Repo <ArrowUpRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}
