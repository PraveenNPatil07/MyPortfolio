import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { siteConfig } from "@/content/site"
import { ArrowLeft, ArrowUpRight, CheckCircle2, Shield, AlertTriangle, Key, Cpu, Database, Activity, RefreshCw } from "lucide-react"
import { SiGithub } from "react-icons/si"

export const metadata: Metadata = {
  title: "Vaultless — Ephemeral Credential Broker Case Study",
  description: "Technical case study of Vaultless: an ephemeral credential broker for autonomous AI agents using Fastify, TypeScript, PASETO v4 asymmetric cryptography, Redis atomic locks, and PostgreSQL audit trails.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/projects/vaultless`,
  },
  openGraph: {
    title: `Vaultless Case Study · ${siteConfig.name}`,
    description: "Ephemeral credential broker for autonomous AI agents using Fastify, TypeScript, PASETO v4, Redis atomic locks, and PostgreSQL audit trails.",
    url: `${siteConfig.siteUrl}/projects/vaultless`,
    type: "article",
  },
}

export default function VaultlessCaseStudy() {
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
            Distributed Systems & Security
          </span>
          <span className="font-mono text-xs px-2.5 py-1 rounded-md border border-border-subtle bg-surface-elevated text-success flex items-center gap-1 font-medium">
            <CheckCircle2 className="h-3 w-3" /> Verified Public Repository
          </span>
          <span className="font-mono text-xs px-2.5 py-1 rounded-md border border-border-subtle bg-surface-elevated text-text-muted">
            Hackathon Scope
          </span>
        </div>

        <div className="space-y-3">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-text-main leading-tight">
            Vaultless: Ephemeral Credential Broker for Autonomous AI Agents
          </h1>
          <p className="text-lg md:text-xl text-text-muted leading-relaxed max-w-3xl">
            A zero-standing-privilege security broker built with Fastify, TypeScript, PASETO v4 Ed25519 asymmetric tokens, Redis atomic locks, and an append-only PostgreSQL audit ledger.
          </p>
        </div>

        {/* Project Meta Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-lg border border-border-subtle bg-surface font-mono text-xs">
          <div>
            <span className="text-text-muted block text-[10px] uppercase tracking-wider">Architecture</span>
            <span className="text-text-main font-medium">Broker / Stateless Verifier</span>
          </div>
          <div>
            <span className="text-text-muted block text-[10px] uppercase tracking-wider">Primary Stack</span>
            <span className="text-text-main font-medium">TypeScript · Fastify · Redis</span>
          </div>
          <div>
            <span className="text-text-muted block text-[10px] uppercase tracking-wider">Cryptography</span>
            <span className="text-text-main font-medium">PASETO v4 (Ed25519)</span>
          </div>
          <div>
            <span className="text-text-muted block text-[10px] uppercase tracking-wider">Persistence</span>
            <span className="text-text-main font-medium">PostgreSQL + Upstash Redis</span>
          </div>
        </div>

        {/* Action Links */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <Link
            href="https://github.com/PraveenNPatil07/Vaultless"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-text-main text-bg text-xs font-mono font-medium px-4 py-2 rounded-md hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <SiGithub className="h-4 w-4" /> Source Repository <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
          <Link
            href="https://vaultless.onrender.com/health"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-border-subtle bg-surface hover:bg-surface-elevated text-text-main text-xs font-mono font-medium px-4 py-2 rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <Activity className="h-3.5 w-3.5 text-accent" /> Live Health Endpoint (Render Free Tier) <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Architecture Visual Topology Showcase */}
        <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden border border-border-subtle bg-surface shadow-xs mt-6">
          <Image
            src="/vaultless-architecture.svg"
            alt="Vaultless Ephemeral Credential Broker System Architecture & Security Operations"
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
            <Key className="h-4 w-4" />
            01 / Background & Motivation
          </div>
          <h2 id="motivation-heading" className="text-2xl font-bold tracking-tight text-text-main">
            The Danger of Standing Privileges in Autonomous Agents
          </h2>
          <div className="space-y-4 text-text-muted text-sm sm:text-base leading-relaxed">
            <p>
              When autonomous software agents interact with third-party APIs (such as payment gateways, internal databases, or cloud infrastructure), conventional architecture equips them with permanent, high-privilege API keys. This creates an unacceptable attack surface:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2 text-text-main/90 font-mono text-xs sm:text-sm">
              <li><strong>Prompt Injection & Hallucinations:</strong> A subverted agent or anomalous model response can abuse standing credentials to drain resources or exfiltrate customer records.</li>
              <li><strong>Indefinite Blast Radius:</strong> Long-lived static keys possess no natural time-to-live (TTL) and must be rotated manually, complicating disaster recovery.</li>
              <li><strong>Zero Fine-Grained Authorization:</strong> Downstream services receive a root-level credential rather than a proof-of-work token scoped to a single operation.</li>
            </ul>
            <p>
              <strong>Vaultless</strong> was conceived to solve this dilemma by establishing an ephemeral credential broker: agents hold zero permanent privileges. Instead, right before invoking a capability, they request a short-lived (e.g., 300-second), cryptographically tamper-proof token strictly scoped to a single action and constraint.
            </p>
          </div>
        </section>

        {/* Section 2: Architecture & Data Flow */}
        <section className="space-y-6" aria-labelledby="architecture-heading">
          <div className="flex items-center gap-2 text-accent font-mono text-xs uppercase tracking-wider font-semibold">
            <Cpu className="h-4 w-4" />
            02 / System Architecture
          </div>
          <h2 id="architecture-heading" className="text-2xl font-bold tracking-tight text-text-main">
            Two-Phase Lifecycle: Minting & Atomic Single-Use Consumption
          </h2>
          <p className="text-text-muted text-sm sm:text-base leading-relaxed">
            The system isolates credential generation from validation through asymmetric cryptography. The broker signs claims with its private key; downstream consumers validate signatures and rely on Redis atomic primitives for instant token invalidation.
          </p>

          {/* Architecture Visual Diagram */}
          {/* Architecture Visual Diagram Container */}
          <div className="p-6 sm:p-7 rounded-xl border border-border-subtle bg-surface hover:border-accent/40 transition-all duration-300 shadow-xs space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border-subtle pb-3.5">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                </span>
                <span className="font-mono text-xs text-text-main font-semibold uppercase tracking-wider">
                  Two-Phase Lifecycle Topology
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-[11px] px-2.5 py-0.5 rounded bg-surface-elevated border border-border-subtle text-accent font-medium">
                  Fail-Closed Guarantee (Redis SETNX)
                </span>
              </div>
            </div>

            {/* Step-by-Step Flow Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Phase 1 Box */}
              <div className="p-5 rounded-lg border border-border-subtle bg-surface-elevated/50 hover:border-accent/30 transition-colors space-y-3">
                <div className="flex items-center justify-between font-mono text-xs">
                  <div className="flex items-center gap-2 font-bold text-text-main">
                    <span className="w-5 h-5 rounded-full bg-accent/20 text-accent flex items-center justify-center text-[10px] font-bold">1</span>
                    Phase 1: Idempotent Minting
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-surface border border-border-subtle text-accent font-mono">POST /v1/credentials</span>
                </div>
                <div className="text-xs font-mono text-text-muted space-y-2">
                  <p>1. Agent requests credential with <code>resource</code>, <code>action</code>, <code>constraints</code>, and <code>ttl_seconds</code>.</p>
                  <p>2. Broker validates optional <code>x-idempotency-key</code> in Redis (24h TTL) to prevent duplicate issuance upon network retry.</p>
                  <p>3. Broker generates an asymmetric <strong>PASETO v4 Public</strong> token signed with Ed25519.</p>
                  <p>4. Synchronously persists grant record and appends <code>issued</code> event to PostgreSQL audit ledger.</p>
                </div>
              </div>

              {/* Phase 2 Box */}
              <div className="p-5 rounded-lg border border-border-subtle bg-surface-elevated/50 hover:border-accent/30 transition-colors space-y-3">
                <div className="flex items-center justify-between font-mono text-xs">
                  <div className="flex items-center gap-2 font-bold text-text-main">
                    <span className="w-5 h-5 rounded-full bg-accent/20 text-accent flex items-center justify-center text-[10px] font-bold">2</span>
                    Phase 2: Atomic Consumption
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-surface border border-border-subtle text-accent font-mono">POST /v1/validate</span>
                </div>
                <div className="text-xs font-mono text-text-muted space-y-2">
                  <p>1. Downstream API forwards token and expected scope to Vaultless.</p>
                  <p>2. Broker cryptographically verifies signature and expiration time.</p>
                  <p>3. Executes Redis <code>SET NX EX</code> on <code>used_token:token_hash</code>. If key exists, immediately returns <code>409 Conflict</code>.</p>
                  <p>4. If Redis is unreachable, returns <code>503 Service Unavailable</code> (never fails open).</p>
                  <p>5. Appends <code>consumed</code> event to PostgreSQL and returns <code>200 OK</code>.</p>
                </div>
              </div>

            </div>

            {/* ASCII Sequence Diagram with Toolbar */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-[11px] font-mono text-text-muted px-1">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                  Sequence Execution Order
                </span>
                <span className="hidden sm:inline text-[10px] text-text-muted">
                  Scroll horizontally to inspect full trace →
                </span>
              </div>
              <div className="p-4 rounded-lg bg-surface-elevated/80 border border-border-subtle font-mono text-xs text-text-muted overflow-x-auto leading-relaxed shadow-xs">
                <pre>{`[Autonomous Agent]                  [Vaultless Broker]               [Upstash Redis]     [Supabase Postgres]
       │                                     │                              │                     │
       │── POST /v1/credentials (scoped) ───>│                              │                     │
       │                                     │── SETNX idempotency_key ────>│                     │
       │                                     │── Sign PASETO v4 (Ed25519) ──│                     │
       │                                     │── Append 'issued' event ──────────────────────────>│
       │<── Returns Token + Grant ID ────────│                              │                     │
       │                                     │                              │                     │
[Downstream API]                             │                              │                     │
       │── POST /v1/validate (Bearer token) ─>│                              │                     │
       │                                     │── Verify PASETO v4 sig ──────│                     │
       │                                     │── SETNX used_token:<hash> ──>│                     │
       │                                     │   ├── [If Acquired]: Append 'consumed' ───────────>│
       │<── 200 OK (Claims Verified) ────────│   └── [If Locked]: 409 Conflict (Burned)           │`}</pre>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Key Engineering Decisions & Trade-Offs */}
        <section className="space-y-6" aria-labelledby="decisions-heading">
          <div className="flex items-center gap-2 text-accent font-mono text-xs uppercase tracking-wider font-semibold">
            <Shield className="h-4 w-4" />
            03 / Key Engineering Decisions
          </div>
          <h2 id="decisions-heading" className="text-2xl font-bold tracking-tight text-text-main">
            Architectural Trade-offs & Security Invariants
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="p-5 rounded-lg border border-border-subtle bg-surface space-y-3">
              <h3 className="text-base font-bold text-text-main">
                PASETO v4 Public vs. Conventional JWT
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                JSON Web Tokens (JWT) have historically suffered from critical algorithm confusion vulnerabilities (e.g. <code>alg: none</code> exploits or public/private key confusion attacks). PASETO (Platform-Agnostic Security Tokens) v4 strictly mandates Ed25519 asymmetric cryptography without algorithm headers, eliminating header forgery classes entirely.
              </p>
            </div>

            <div className="p-5 rounded-lg border border-border-subtle bg-surface space-y-3">
              <h3 className="text-base font-bold text-text-main">
                Fail-Closed Resilience Model
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                If the Redis caching layer fails or experiences a network partition during validation, Vaultless hard-fails validation requests with HTTP <code>503 Service Unavailable</code>. The system never falls back to an unverified allowlist: it is mathematically safer to reject valid actions than to permit a replayed token.
              </p>
            </div>

            <div className="p-5 rounded-lg border border-border-subtle bg-surface space-y-3">
              <h3 className="text-base font-bold text-text-main">
                Atomic Single-Use Concurrency Control
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                Single-use enforcement is executed via Redis <code>SETNX</code> with an automated TTL matching the token expiry. This ensures that even if 10 concurrent requests arrive at the exact same millisecond, exactly one thread acquires the lock, while the remaining 9 are deterministically rejected with <code>409 Conflict</code>.
              </p>
            </div>

            <div className="p-5 rounded-lg border border-border-subtle bg-surface space-y-3">
              <h3 className="text-base font-bold text-text-main">
                Agent-Scoped Rate Limiting
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                Utilizes Fastify rate limiting keyed off the <code>x-agent-id</code> header (falling back to client IP). This defends against runaway or looping autonomous agents, preventing noisy neighbor starvation across multi-tenant deployments.
              </p>
            </div>

          </div>
        </section>

        {/* Section 4: Verified API Surface */}
        <section className="space-y-6" aria-labelledby="api-heading">
          <div className="flex items-center gap-2 text-accent font-mono text-xs uppercase tracking-wider font-semibold">
            <Database className="h-4 w-4" />
            04 / Verified API Surface
          </div>
          <h2 id="api-heading" className="text-2xl font-bold tracking-tight text-text-main">
            Service Endpoints & Telemetry
          </h2>

          <div className="border border-border-subtle rounded-xl overflow-hidden bg-surface">
            <div className="p-4 border-b border-border-subtle bg-surface-elevated/50 font-mono text-xs font-semibold text-text-main">
              RESTful Route Manifest
            </div>
            <div className="divide-y divide-border-subtle font-mono text-xs">
              <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-success/15 text-success font-bold">POST</span>
                  <span className="text-text-main font-semibold">/v1/credentials</span>
                </div>
                <span className="text-text-muted">Mint scoped ephemeral token (Idempotent via <code>x-idempotency-key</code>)</span>
              </div>
              <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-accent/15 text-accent font-bold">POST</span>
                  <span className="text-text-main font-semibold">/v1/validate</span>
                </div>
                <span className="text-text-muted">Downstream verification & atomic single-use burn (Returns 200, 409, or 503)</span>
              </div>
              <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-error/15 text-error font-bold">POST</span>
                  <span className="text-text-main font-semibold">/v1/revoke</span>
                </div>
                <span className="text-text-muted">Premature manual revocation by grant ID before natural TTL expiration</span>
              </div>
              <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-surface-elevated text-text-main font-bold">GET</span>
                  <span className="text-text-main font-semibold">/v1/audit/:grant_id</span>
                </div>
                <span className="text-text-muted">Immutable lifecycle audit log (issued, consumed, revoked, failed)</span>
              </div>
              <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-surface-elevated text-text-main font-bold">GET</span>
                  <span className="text-text-main font-semibold">/metrics</span>
                </div>
                <span className="text-text-muted">Prometheus-compatible counters for minting, validations, and lock contentions</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Testing & Verification */}
        <section className="space-y-4" aria-labelledby="testing-heading">
          <div className="flex items-center gap-2 text-accent font-mono text-xs uppercase tracking-wider font-semibold">
            <RefreshCw className="h-4 w-4" />
            05 / Verification & Test Suite
          </div>
          <h2 id="testing-heading" className="text-2xl font-bold tracking-tight text-text-main">
            Real Integration Testing Against Containerized Infrastructure
          </h2>
          <div className="space-y-4 text-text-muted text-sm sm:text-base leading-relaxed">
            <p>
              Rather than testing against mocked database drivers or fake in-memory caches, Vaultless implements a <strong>Vitest integration test suite</strong> executing against live Docker containers (PostgreSQL 15 and Redis 7):
            </p>
            <div className="p-4 rounded-lg bg-surface border border-border-subtle font-mono text-xs space-y-2">
              <div className="text-success font-semibold">✓ Verified Test Scenarios</div>
              <ul className="list-disc list-inside space-y-1 text-text-muted">
                <li>Concurrent race condition validation: 10 parallel consumers hammering the same token yield 1 success and 9 conflict errors.</li>
                <li>Redis fail-closed behavior: Simulating Redis disconnection forces validation endpoints to reject requests with 503 rather than permitting token reuse.</li>
                <li>Idempotency cache: Re-sending identical minting requests with duplicate idempotency keys returns matching tokens without duplicating audit ledger entries.</li>
                <li>Tampered signature rejection: Invalid PASETO signatures or altered constraints trigger immediate 401 Unauthorized responses.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 6: Limitations & Future Work */}
        <section className="space-y-4" aria-labelledby="limitations-heading">
          <div className="flex items-center gap-2 text-accent font-mono text-xs uppercase tracking-wider font-semibold">
            <AlertTriangle className="h-4 w-4" />
            06 / Honest Limitations & Scope
          </div>
          <h2 id="limitations-heading" className="text-2xl font-bold tracking-tight text-text-main">
            Hackathon Scope Limitations & Production Path
          </h2>
          <p className="text-text-muted text-sm leading-relaxed">
            In accordance with honest engineering principles, the codebase contains explicit architectural compromises documented during the hackathon cycle:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg border border-border-subtle bg-surface/50 text-xs font-mono space-y-2">
              <span className="text-text-main font-bold">1. Missing Relational Indexes</span>
              <p className="text-text-muted leading-relaxed">
                The <code>credential_grants</code> table currently lacks composite B-tree indexes on <code>token_hash</code> and <code>expires_at</code>. While imperceptible under light load, database performance would degrade at high ingestion volumes without an explicit indexing migration.
              </p>
            </div>

            <div className="p-4 rounded-lg border border-border-subtle bg-surface/50 text-xs font-mono space-y-2">
              <span className="text-text-main font-bold">2. Redis/Postgres Split-Brain Window</span>
              <p className="text-text-muted leading-relaxed">
                If the single-use token lock is successfully set in Redis but the subsequent write to PostgreSQL fails due to a network partition, the token is burned without an audit log entry for <code>consumed</code>. Resolving this requires a two-phase commit or transactional outbox pattern.
              </p>
            </div>

            <div className="p-4 rounded-lg border border-border-subtle bg-surface/50 text-xs font-mono space-y-2">
              <span className="text-text-main font-bold">3. In-Memory Prometheus Metrics</span>
              <p className="text-text-muted leading-relaxed">
                The <code>/metrics</code> counters reside in Node.js process memory. On a single free-tier instance this is sufficient, but in a horizontally scaled cluster, metrics must be exported to an external collector (e.g. Datadog or Prometheus Pushgateway).
              </p>
            </div>

            <div className="p-4 rounded-lg border border-border-subtle bg-surface/50 text-xs font-mono space-y-2">
              <span className="text-text-main font-bold">4. Permissive DB SSL</span>
              <p className="text-text-muted leading-relaxed">
                The Postgres connection pool is configured with <code>ssl: &#123; rejectUnauthorized: false &#125;</code> to maintain compatibility with Supabase&apos;s managed connection pooler. An enterprise environment would enforce certificate authority pinning.
              </p>
            </div>
          </div>
        </section>

      </div>

      {/* Footer Navigation */}
      <footer className="pt-8 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
        <Link 
          href="/projects" 
          className="text-text-muted hover:text-accent transition-colors flex items-center gap-1"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> All Projects
        </Link>
        <Link 
          href="/projects/fittrack" 
          className="text-accent hover:underline flex items-center gap-1"
        >
          Next Case Study: FitTrack Microservices <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      </footer>

    </article>
  )
}
