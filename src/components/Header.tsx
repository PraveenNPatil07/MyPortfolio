"use client"

import Link from "next/link"
import { ThemeToggle } from "./ThemeToggle"
import { Button } from "./ui/button"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import React from "react"

const navItems = [
  { label: "Resume", href: "/Resume.pdf", target: "_blank" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
]

export function Header() {
  const [isSheetOpen, setIsSheetOpen] = React.useState(false)
  const closeSheet = () => setIsSheetOpen(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-background shadow-sm">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <Link href="/" className="mr-auto flex items-center space-x-1 group">
          <img src="/logo.png" alt="Logo" className="h-24 w-24" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium ml-auto">
          {navItems.map((item) =>
            item.label === "Resume" ? (
              <Link
                key={item.href}
                href={item.href}
                target={item.target}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-md font-semibold shadow-md hover:opacity-90 transition-all duration-300"
              >
                {item.label}
              </Link>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Theme toggle + Mobile nav trigger */}
        <div className="flex items-center space-x-2 ml-auto md:ml-6">
          <ThemeToggle />
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) =>
                  item.label === "Resume" ? (
                    <Link
                      key={item.href}
                      href={item.href}
                      target={item.target}
                      onClick={closeSheet}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-md font-semibold shadow-md hover:opacity-90 transition-all duration-300"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={closeSheet}
                      className="text-lg transition-colors hover:text-primary"
                    >
                      {item.label}
                    </Link>
                  )
                )}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
