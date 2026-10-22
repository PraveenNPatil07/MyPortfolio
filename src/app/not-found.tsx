import Link from "next/link"
import { Home, Search } from "lucide-react"

export default function NotFound() {
  return (
    <div className="container mx-auto max-w-2xl px-4 py-24 sm:py-32 text-center space-y-6">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border-subtle bg-surface text-xs font-mono text-accent">
        <span>HTTP 404 — Not Found</span>
      </div>

      <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-text-main">
        Page Not Located
      </h1>

      <p className="text-base text-text-muted max-w-md mx-auto leading-relaxed">
        The requested endpoint or document does not exist in this engineering journal. It may have been moved or is currently in development.
      </p>

      <div className="pt-4 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-text-main text-bg text-sm font-medium px-5 py-2.5 rounded-md hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          <Home className="h-4 w-4" /> Return to Home
        </Link>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 border border-border-subtle bg-surface hover:bg-surface-elevated text-text-main text-sm font-medium px-5 py-2.5 rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          <Search className="h-4 w-4" /> Browse Projects
        </Link>
      </div>
    </div>
  )
}
