import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { siteConfig } from "@/content/site"
import { ArrowLeft, ArrowUpRight, CheckCircle2, Shield, AlertTriangle, Layers, Cpu, Activity, Sparkles, Network } from "lucide-react"
import { SiGithub } from "react-icons/si"

export const metadata: Metadata = {
  title: "FitTrack — Microservices Fitness Platform & AI Recommendations Case Study",
  description: "Technical case study of FitTrack: a distributed microservices platform built with Java 21, Spring Boot, Spring Cloud Gateway, Eureka, RabbitMQ, Keycloak OAuth2 PKCE, MongoDB Atlas, PostgreSQL, and Google Gemini API.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/projects/fittrack`,
  },
  openGraph: {
    title: `FitTrack Case Study · ${siteConfig.name}`,
    description: "Distributed microservices platform built with Java 21, Spring Boot, Eureka, RabbitMQ, Keycloak, and Google Gemini API.",
    url: `${siteConfig.siteUrl}/projects/fittrack`,
    type: "article",
  },
}

export default function FitTrackCaseStudy() {
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
            Microservices & Event-Driven Architecture
          </span>
          <span className="font-mono text-xs px-2.5 py-1 rounded-md border border-border-subtle bg-surface-elevated text-success flex items-center gap-1 font-medium">
            <CheckCircle2 className="h-3 w-3" /> Verified Public Repository
          </span>
          <span className="font-mono text-xs px-2.5 py-1 rounded-md border border-border-subtle bg-surface-elevated text-text-muted">
            Multi-Service Suite
          </span>
        </div>

        <div className="space-y-3">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-text-main leading-tight">
            FitTrack: Distributed Microservices Platform & Asynchronous AI Engine
          </h1>
          <p className="text-lg md:text-xl text-text-muted leading-relaxed max-w-3xl">
            An end-to-end fitness tracking ecosystem built with Java 21, Spring Boot 3, Spring Cloud Gateway, Eureka, RabbitMQ event queues, Keycloak PKCE authentication, polyglot persistence (PostgreSQL + MongoDB Atlas), and Google Gemini LLM integration.
          </p>
        </div>

        {/* Project Meta Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-lg border border-border-subtle bg-surface font-mono text-xs">
          <div>
            <span className="text-text-muted block text-[10px] uppercase tracking-wider">Architecture</span>
            <span className="text-text-main font-medium">Decomposed Microservices</span>
          </div>
          <div>
            <span className="text-text-muted block text-[10px] uppercase tracking-wider">Backend Stack</span>
            <span className="text-text-main font-medium">Java 21 · Spring Boot 3.x</span>
          </div>
          <div>
            <span className="text-text-muted block text-[10px] uppercase tracking-wider">Messaging & AI</span>
            <span className="text-text-main font-medium">RabbitMQ · Google Gemini</span>
          </div>
          <div>
            <span className="text-text-muted block text-[10px] uppercase tracking-wider">Databases & Auth</span>
            <span className="text-text-main font-medium">Postgres · Mongo · Keycloak</span>
          </div>
        </div>

        {/* Action Links */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <Link
            href="https://github.com/PraveenNPatil07/FitTrack"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-text-main text-bg text-xs font-mono font-medium px-4 py-2 rounded-md hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <SiGithub className="h-4 w-4" /> Source Repository <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
          <span className="inline-flex items-center gap-2 border border-border-subtle bg-surface text-text-muted text-xs font-mono px-3 py-2 rounded-md">
            <Activity className="h-3.5 w-3.5 text-accent" /> Distributed Local Environment (Java 21 + RabbitMQ + Keycloak)
          </span>
        </div>

        {/* Architecture Visual Topology Showcase */}
        <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden border border-border-subtle bg-surface shadow-xs mt-6">
          <Image
            src="/fittrack-architecture.svg"
            alt="FitTrack Distributed Microservices Topology & Event-Driven AI Architecture"
            fill
            sizes="(max-width: 768px) 100vw, 1024px"
            className="object-contain"
            priority
          />
        </div>
      </header>

      {/* Main Content Body */}
      <div className="py-12 space-y-16">
        
        {/* Section 1: The Problem & Motivation */}
        <section className="space-y-4" aria-labelledby="motivation-heading">
          <div className="flex items-center gap-2 text-accent font-mono text-xs uppercase tracking-wider font-semibold">
            <Layers className="h-4 w-4" />
            01 / Background & Motivation
          </div>
          <h2 id="motivation-heading" className="text-2xl font-bold tracking-tight text-text-main">
            Why Microservices for Fitness Telemetry & AI Processing?
          </h2>
          <div className="space-y-4 text-text-muted text-sm sm:text-base leading-relaxed">
            <p>
              In traditional monolithic fitness architectures, high-throughput activity ingestion (e.g., GPS points, cadence, heart rate, calories) shares resources with user identity management and heavy computational workloads like AI-based workout recommendations. This introduces severe systemic vulnerabilities:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2 text-text-main/90 font-mono text-xs sm:text-sm">
              <li><strong>Synchronous Blocking by LLMs:</strong> Calling a Large Language Model (e.g. Gemini) can take anywhere from 1.5 to 4 seconds. Forcing mobile or web clients to wait synchronously stalls HTTP worker threads and degrades user responsiveness.</li>
              <li><strong>Schema Rigidity vs. Dynamic Telemetry:</strong> Storing user authentication tables alongside polymorphic workout metrics (running pace vs. weightlifting sets/reps) in a single relational schema forces sparse columns or anti-pattern JSON blobs.</li>
              <li><strong>Tight Coupling & Single Points of Failure:</strong> If the recommendation engine crashes under heavy load, the core user login and activity logging endpoints should remain unaffected.</li>
            </ul>
            <p>
              <strong>FitTrack</strong> tackles this challenge with a distributed, event-driven microservices architecture: services have isolated data stores, communicate asynchronously via RabbitMQ, discover each other dynamically with Netflix Eureka, and route through a reactive Spring Cloud Gateway with Keycloak identity management.
            </p>
          </div>
        </section>

        {/* Section 2: Architecture & Service Topology */}
        <section className="space-y-6" aria-labelledby="topology-heading">
          <div className="flex items-center gap-2 text-accent font-mono text-xs uppercase tracking-wider font-semibold">
            <Network className="h-4 w-4" />
            02 / Microservice Topology
          </div>
          <h2 id="topology-heading" className="text-2xl font-bold tracking-tight text-text-main">
            Six Autonomous Backend Services & React Frontend
          </h2>
          <p className="text-text-muted text-sm sm:text-base leading-relaxed">
            Every backend service is an independent Spring Boot application with its own database and configuration profile. Configuration is pulled at startup from a central Config Server, and service instances register with Eureka for dynamic discovery.
          </p>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            <div className="p-4 rounded-lg border border-border-subtle bg-surface space-y-2">
              <div className="flex items-center justify-between font-mono text-xs">
                <span className="font-bold text-text-main">1. Config Server</span>
                <span className="px-2 py-0.5 rounded bg-surface-elevated text-accent">Port: 8888</span>
              </div>
              <p className="text-xs text-text-muted leading-relaxed">
                Centralized configuration authority. Downstream services pull their environment configuration (DB URLs, credentials, Eureka URIs) at boot time via <code>spring.config.import</code>.
              </p>
            </div>

            <div className="p-4 rounded-lg border border-border-subtle bg-surface space-y-2">
              <div className="flex items-center justify-between font-mono text-xs">
                <span className="font-bold text-text-main">2. Eureka Discovery Server</span>
                <span className="px-2 py-0.5 rounded bg-surface-elevated text-accent">Port: 8761</span>
              </div>
              <p className="text-xs text-text-muted leading-relaxed">
                Service registry providing heartbeat monitoring and client-side load balancing via <code>lb://SERVICE-NAME</code>. Enables services to discover each other without static IP addresses.
              </p>
            </div>

            <div className="p-4 rounded-lg border border-border-subtle bg-surface space-y-2">
              <div className="flex items-center justify-between font-mono text-xs">
                <span className="font-bold text-text-main">3. Spring Cloud Gateway</span>
                <span className="px-2 py-0.5 rounded bg-surface-elevated text-accent">Port: 8080</span>
              </div>
              <p className="text-xs text-text-muted leading-relaxed">
                Reactive reverse proxy (WebFlux). Validates Keycloak JWTs against JWKS certificates, injects security headers, and routes requests to <code>/api/users</code>, <code>/api/activities</code>, and <code>/api/recommendations</code>.
              </p>
            </div>

            <div className="p-4 rounded-lg border border-border-subtle bg-surface space-y-2">
              <div className="flex items-center justify-between font-mono text-xs">
                <span className="font-bold text-text-main">4. User Service</span>
                <span className="px-2 py-0.5 rounded bg-surface-elevated text-accent">Port: 8081</span>
              </div>
              <p className="text-xs text-text-muted leading-relaxed">
                User management and identity mapping. Backed by PostgreSQL (Supabase) via Spring Data JPA. Exposes validation endpoints consumed by Activity Service before activity persistence.
              </p>
            </div>

            <div className="p-4 rounded-lg border border-border-subtle bg-surface space-y-2">
              <div className="flex items-center justify-between font-mono text-xs">
                <span className="font-bold text-text-main">5. Activity Service</span>
                <span className="px-2 py-0.5 rounded bg-surface-elevated text-accent">Port: 8082</span>
              </div>
              <p className="text-xs text-text-muted leading-relaxed">
                Workout tracking engine backed by MongoDB Atlas. Validates users via WebClient, saves polymorphic activity documents, and acts as RabbitMQ producer to broadcast workout events.
              </p>
            </div>

            <div className="p-4 rounded-lg border border-border-subtle bg-surface space-y-2">
              <div className="flex items-center justify-between font-mono text-xs">
                <span className="font-bold text-text-main">6. AI Recommendation Service</span>
                <span className="px-2 py-0.5 rounded bg-surface-elevated text-accent">Port: 8083</span>
              </div>
              <p className="text-xs text-text-muted leading-relaxed">
                Asynchronous RabbitMQ consumer listening to <code>activity.queue</code>. Queries Google Gemini REST API, generates structured recovery insights, and writes recommendations to MongoDB.
              </p>
            </div>

          </div>

          {/* ASCII Architecture Diagram Container */}
          <div className="p-6 sm:p-7 rounded-xl border border-border-subtle bg-surface hover:border-accent/40 transition-all duration-300 shadow-xs space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border-subtle pb-3.5">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                </span>
                <span className="font-mono text-xs text-text-main font-semibold uppercase tracking-wider">
                  Microservices Topology & Message Bus
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-[11px] px-2.5 py-0.5 rounded bg-surface-elevated border border-border-subtle text-accent font-medium">
                  Polyglot (PostgreSQL + MongoDB Atlas)
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-[11px] font-mono text-text-muted px-1">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                  End-to-End System Communication Topology
                </span>
                <span className="hidden sm:inline text-[10px] text-text-muted">
                  Scroll horizontally to inspect full trace →
                </span>
              </div>
              <div className="p-4 rounded-lg bg-surface-elevated/80 border border-border-subtle font-mono text-xs text-text-muted overflow-x-auto leading-relaxed shadow-xs">
                <pre>{`                       ┌──────────────────────────────────────────────┐
                       │          React 19 + Vite Frontend            │
                       │     (Port 5173 · MUI v9 · Redux Toolkit)     │
                       └───────────────────────┬──────────────────────┘
                                               │ HTTP (Bearer JWT + X-User-ID)
                                               ▼
                       ┌──────────────────────────────────────────────┐
                       │           Spring Cloud Gateway               │
                       │        (Port 8080 · Reactive WebFlux)        │
                       └───────────────┬──────────────────────┬───────┘
                                       │                      │
             ┌─────────────────────────┴─────────┐            │
             ▼                                   ▼            ▼
 ┌──────────────────────┐             ┌──────────────────────────┐
 │     User Service     │<──WebClient─┤     Activity Service     │
 │ (Port 8081·Postgres) │ (Validation)│ (Port 8082·MongoDB Atlas)│
 └──────────────────────┘             └─────────────┬────────────┘
                                                    │
                                                    │ AMQP: fitness.exchange / activity.tracking
                                                    ▼
                                      ┌──────────────────────────┐
                                      │   RabbitMQ Event Broker  │
                                      │  (Port 5672·activity.queue)
                                      └─────────────┬────────────┘
                                                    │
                                                    │ Async Consume
                                                    ▼
                                      ┌──────────────────────────┐
                                      │  AI Recommendation Service│
                                      │(Port 8083·MongoDB Atlas) │
                                      └─────────────┬────────────┘
                                                    │
                                                    │ HTTPS (Prompt / JSON Generation)
                                                    ▼
                                      ┌──────────────────────────┐
                                      │     Google Gemini API    │
                                      └──────────────────────────┘`}</pre>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Data Flow & Event Processing */}
        <section className="space-y-6" aria-labelledby="flow-heading">
          <div className="flex items-center gap-2 text-accent font-mono text-xs uppercase tracking-wider font-semibold">
            <Cpu className="h-4 w-4" />
            03 / Request Flow & Event Processing
          </div>
          <h2 id="flow-heading" className="text-2xl font-bold tracking-tight text-text-main">
            From Workout Submission to AI Insights
          </h2>
          
          <div className="p-6 rounded-xl border border-border-subtle bg-surface space-y-4 text-xs font-mono">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="w-5 h-5 rounded bg-accent/20 text-accent font-bold flex items-center justify-center shrink-0 mt-0.5">1</span>
                <div>
                  <strong className="text-text-main">Authentication via OAuth2 PKCE:</strong>
                  <p className="text-text-muted mt-0.5">User signs in through Keycloak (port 8181). Frontend performs authorization code exchange with PKCE verification and extracts <code>sub</code> claim as <code>X-User-ID</code>.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-5 h-5 rounded bg-accent/20 text-accent font-bold flex items-center justify-center shrink-0 mt-0.5">2</span>
                <div>
                  <strong className="text-text-main">Gateway JWT Enforcement:</strong>
                  <p className="text-text-muted mt-0.5">React client submits <code>POST /api/activities</code> with Bearer JWT. Gateway verifies JWT validity against Keycloak’s JWKS endpoint (<code>/protocol/openid-connect/certs</code>) before proxying to Activity Service.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-5 h-5 rounded bg-accent/20 text-accent font-bold flex items-center justify-center shrink-0 mt-0.5">3</span>
                <div>
                  <strong className="text-text-main">Inter-Service User Verification:</strong>
                  <p className="text-text-muted mt-0.5">Activity Service validates that the user exists by executing a non-blocking <code>GET /api/users/&#123;userId&#125;/validate</code> call to User Service via Spring WebClient.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-5 h-5 rounded bg-accent/20 text-accent font-bold flex items-center justify-center shrink-0 mt-0.5">4</span>
                <div>
                  <strong className="text-text-main">Storage & Immediate Response:</strong>
                  <p className="text-text-muted mt-0.5">Activity is saved into MongoDB Atlas. The endpoint returns <code>201 Created</code> to the client in under 50ms, without blocking on AI generation.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-5 h-5 rounded bg-accent/20 text-accent font-bold flex items-center justify-center shrink-0 mt-0.5">5</span>
                <div>
                  <strong className="text-text-main">Asynchronous RabbitMQ Ingestion:</strong>
                  <p className="text-text-muted mt-0.5">Activity Service publishes message to <code>fitness.exchange</code> with routing key <code>activity.tracking</code>. AI Service consumes message from <code>activity.queue</code>, formats contextual prompt, invokes Google Gemini, and persists structured recommendation in MongoDB.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Key Engineering Decisions & Trade-Offs */}
        <section className="space-y-6" aria-labelledby="decisions-heading">
          <div className="flex items-center gap-2 text-accent font-mono text-xs uppercase tracking-wider font-semibold">
            <Shield className="h-4 w-4" />
            04 / Key Engineering Decisions
          </div>
          <h2 id="decisions-heading" className="text-2xl font-bold tracking-tight text-text-main">
            Architecture Trade-offs & Polyglot Persistence
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="p-5 rounded-lg border border-border-subtle bg-surface space-y-3">
              <h3 className="text-base font-bold text-text-main">
                Asynchronous RabbitMQ vs. Synchronous REST
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                Calling LLM APIs involves latency spikes and potential rate limiting. Offloading AI recommendation generation to an AMQP message queue decouples user-facing activity logging latency from external API response times and ensures reliable message redelivery.
              </p>
            </div>

            <div className="p-5 rounded-lg border border-border-subtle bg-surface space-y-3">
              <h3 className="text-base font-bold text-text-main">
                Polyglot Persistence: PostgreSQL + MongoDB
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                Relational PostgreSQL (Supabase) handles User identities, unique email constraints, and roles where ACID guarantees are essential. MongoDB Atlas handles fitness activities and AI recommendations, accommodating flexible <code>additionalMetrics</code> maps (pace, cadence, reps) across 8 distinct workout types.
              </p>
            </div>

            <div className="p-5 rounded-lg border border-border-subtle bg-surface space-y-3">
              <h3 className="text-base font-bold text-text-main">
                OAuth2 Authorization Code with PKCE
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                Standard authorization code grant requires a client secret, which cannot be securely stored in single-page applications. Implementing PKCE (Proof Key for Code Exchange) cryptographically verifies that the code exchange request originates from the same browser instance that initiated login.
              </p>
            </div>

            <div className="p-5 rounded-lg border border-border-subtle bg-surface space-y-3">
              <h3 className="text-base font-bold text-text-main">
                Centralized Configuration Management
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                Instead of managing isolated <code>application.yml</code> files across six microservices, the Spring Cloud Config Server provides single-point versioning for database credentials, RabbitMQ hosts, and JWT verification endpoints.
              </p>
            </div>

          </div>
        </section>

        {/* Section 5: Testing & Operational Scope */}
        <section className="space-y-4" aria-labelledby="testing-heading">
          <div className="flex items-center gap-2 text-accent font-mono text-xs uppercase tracking-wider font-semibold">
            <Sparkles className="h-4 w-4" />
            05 / Implementation Verification & Tested Scenarios
          </div>
          <h2 id="testing-heading" className="text-2xl font-bold tracking-tight text-text-main">
            Verified Endpoints & AI Output Structure
          </h2>
          <div className="space-y-4 text-text-muted text-sm sm:text-base leading-relaxed">
            <p>
              The system supports full CRUD operations across user profiles, activities, and recommendations:
            </p>
            <div className="p-4 rounded-lg bg-surface border border-border-subtle font-mono text-xs space-y-2">
              <div className="text-success font-semibold">✓ Supported Activities & Metrics</div>
              <p className="text-text-muted">
                Activity types: <code>RUNNING</code>, <code>WALKING</code>, <code>CYCLING</code>, <code>WEIGHT_TRAINING</code>, <code>YOGA</code>, <code>CARDIO</code>, <code>STRETCHING</code>, <code>OTHER</code>.
              </p>
              <div className="pt-2 text-text-main font-semibold">AI Recommendation Schema Generated via Gemini:</div>
              <ul className="list-disc list-inside space-y-1 text-text-muted">
                <li><code>Analysis</code>: Performance evaluation based on pace, heart rate, and duration.</li>
                <li><code>Improvements</code>: Actionable suggestions for recovery and training volume.</li>
                <li><code>Suggestions</code>: Recommended next session focus.</li>
                <li><code>Safety</code>: Injury prevention and hydration alerts based on max metrics.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 6: Limitations & Engineering Realities */}
        <section className="space-y-4" aria-labelledby="limitations-heading">
          <div className="flex items-center gap-2 text-accent font-mono text-xs uppercase tracking-wider font-semibold">
            <AlertTriangle className="h-4 w-4" />
            06 / Honest Limitations & Operational Scope
          </div>
          <h2 id="limitations-heading" className="text-2xl font-bold tracking-tight text-text-main">
            Operational Complexities & Production Considerations
          </h2>
          <p className="text-text-muted text-sm leading-relaxed">
            Operating a multi-service distributed suite presents distinct challenges that are honestly documented in the repository:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg border border-border-subtle bg-surface/50 text-xs font-mono space-y-2">
              <span className="text-text-main font-bold">1. Multi-Service Startup Order</span>
              <p className="text-text-muted leading-relaxed">
                Services must be booted in strict sequence: Config Server (8888) → Eureka (8761) → Gateway (8080) → User Service (8081) → Activity Service (8082) → AI Service (8083). In a production cloud setting, Kubernetes readiness probes or container orchestrators would manage health gating automatically.
              </p>
            </div>

            <div className="p-4 rounded-lg border border-border-subtle bg-surface/50 text-xs font-mono space-y-2">
              <span className="text-text-main font-bold">2. Eventual Consistency on UI</span>
              <p className="text-text-muted leading-relaxed">
                Because AI recommendations are processed asynchronously, navigating immediately to an activity detail page displays a placeholder until the Gemini response is generated and persisted. The frontend polls or expects 404 until generation concludes.
              </p>
            </div>

            <div className="p-4 rounded-lg border border-border-subtle bg-surface/50 text-xs font-mono space-y-2">
              <span className="text-text-main font-bold">3. Dead-Letter Queue (DLQ) Absence</span>
              <p className="text-text-muted leading-relaxed">
                The current RabbitMQ configuration does not include an explicit Dead-Letter Exchange (DLX). If the Gemini API experiences sustained downtime or unparseable JSON responses, failed messages require manual retry rather than automated DLQ routing.
              </p>
            </div>

            <div className="p-4 rounded-lg border border-border-subtle bg-surface/50 text-xs font-mono space-y-2">
              <span className="text-text-main font-bold">4. Cloud Deployment Footprint</span>
              <p className="text-text-muted leading-relaxed">
                Running 6 Java virtual machines (JVMs) alongside Keycloak and RabbitMQ requires substantial memory overhead. The system is designed and tested as a local distributed testbed; deploying to production would benefit from GraalVM native image compilation to reduce RAM footprint.
              </p>
            </div>
          </div>
        </section>

      </div>

      {/* Footer Navigation */}
      <footer className="pt-8 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
        <Link 
          href="/projects/vaultless" 
          className="text-text-muted hover:text-accent transition-colors flex items-center gap-1"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> Previous: Vaultless
        </Link>
        <Link 
          href="/projects/blogopedia" 
          className="text-accent hover:underline flex items-center gap-1"
        >
          Next Case Study: Blogopedia <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      </footer>

    </article>
  )
}
