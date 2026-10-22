"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { siteConfig } from "@/content/site"
import { ThemeToggle } from "./ThemeToggle"
import { Button } from "./ui/button"
import { Menu, ArrowUpRight } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "./ui/sheet"

export function Header() {
  const pathname = usePathname()
  const [isSheetOpen, setIsSheetOpen] = React.useState(false)
  const closeSheet = () => setIsSheetOpen(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border-subtle bg-bg/85 backdrop-blur-md transition-colors">
      <div className="container mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
        
        {/* Brand Logo */}
        <Link 
          href="/" 
          className="flex items-center space-x-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md py-1 px-1.5 transition-transform duration-150 active:scale-95"
          aria-label="Praveen Patil - Home"
        >
          <div className="relative h-8 w-8 rounded-full overflow-hidden border border-border-subtle bg-surface shadow-xs transition-colors group-hover:border-accent shrink-0">
            <Image
              src="/logo.png"
              alt="Praveen Patil Logo"
              width={32}
              height={32}
              className="object-cover h-full w-full"
              priority
            />
          </div>
          <span className="font-sans font-semibold text-sm tracking-tight text-text-main group-hover:text-accent transition-colors">
            {siteConfig.name}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav 
          className="hidden md:flex items-center space-x-1 text-sm font-medium"
          aria-label="Main Navigation"
        >
          {siteConfig.navItems.map((item) => {
            const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-1.5 rounded-md transition-all duration-150 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                  isActive
                    ? "text-accent bg-surface font-semibold shadow-xs"
                    : "text-text-muted hover:text-text-main hover:bg-surface-elevated/60"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </Link>
            )
          })}

          {siteConfig.resumeEnabled && (
            <Link
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-mono font-medium text-accent border border-accent/40 hover:border-accent hover:bg-accent/10 active:scale-95 bg-surface px-2.5 py-1 rounded-md transition-all duration-150 ml-2"
            >
              Resume <ArrowUpRight className="h-3 w-3" />
            </Link>
          )}
        </nav>

        {/* Right side controls (Theme Toggle + Mobile Hamburger) */}
        <div className="flex items-center space-x-2">
          <ThemeToggle />

          {/* Mobile Navigation Drawer */}
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-text-muted hover:text-text-main focus-visible:ring-2 focus-visible:ring-accent"
                aria-label="Open navigation menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[320px] bg-bg border-border-subtle p-6 flex flex-col justify-between">
              <div>
                <SheetTitle className="text-left font-mono text-xs uppercase tracking-wider text-text-muted mb-6">
                  Navigation
                </SheetTitle>
                <nav className="flex flex-col space-y-2">
                  {siteConfig.navItems.map((item) => {
                    const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href)
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={closeSheet}
                        className={`px-3.5 py-2.5 rounded-md text-base transition-colors ${
                          isActive
                            ? "bg-surface text-accent font-semibold border-l-2 border-accent"
                            : "text-text-muted hover:text-text-main hover:bg-surface-elevated/50"
                        }`}
                        aria-current={isActive ? "page" : undefined}
                      >
                        {item.label}
                      </Link>
                    )
                  })}
                </nav>
              </div>

              {/* Mobile Drawer Footer */}
              <div className="pt-6 border-t border-border-subtle text-xs font-mono text-text-muted">
                <span>Praveen Patil · 2.0</span>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
