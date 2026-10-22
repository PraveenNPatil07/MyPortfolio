"use client"

import React, { useState } from "react"
import { Copy, Check } from "lucide-react"

interface CopyEmailButtonProps {
  email: string
  className?: string
  variant?: "badge" | "button"
}

export function CopyEmailButton({
  email,
  className = "",
  variant = "badge",
}: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(email)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
        return
      }
      throw new Error("Clipboard API unavailable")
    } catch {
      // Fallback for permissions restricted, unfocused document, or older browsers
      try {
        const textarea = document.createElement("textarea")
        textarea.value = email
        textarea.style.position = "fixed"
        textarea.style.left = "-9999px"
        textarea.style.top = "0"
        textarea.setAttribute("readonly", "")
        document.body.appendChild(textarea)
        textarea.select()
        const successful = document.execCommand("copy")
        document.body.removeChild(textarea)
        if (successful) {
          setCopied(true)
          setTimeout(() => setCopied(false), 2000)
        }
      } catch (err) {
        console.error("Failed to copy email:", err)
      }
    }
  }

  if (variant === "button") {
    return (
      <button
        type="button"
        onClick={handleCopy}
        aria-label={copied ? "Email copied to clipboard" : `Copy email ${email} to clipboard`}
        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono font-medium transition-all duration-150 active:scale-95 border cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
          copied
            ? "border-success/40 bg-success/15 text-success scale-[1.02]"
            : "border-border-subtle bg-surface hover:border-accent hover:text-accent text-text-muted hover:shadow-xs"
        } ${className}`}
      >
        {copied ? (
          <>
            <Check className="h-3.5 w-3.5 text-success shrink-0 transition-transform duration-200" />
            <span>Copied!</span>
          </>
        ) : (
          <>
            <Copy className="h-3.5 w-3.5 shrink-0 transition-transform duration-200" />
            <span>Copy Email</span>
          </>
        )}
      </button>
    )
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={copied ? "Email copied to clipboard" : `Copy email ${email} to clipboard`}
      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-mono transition-all duration-150 active:scale-95 border cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
        copied
          ? "border-success/40 bg-success/15 text-success font-semibold scale-[1.02]"
          : "border-border-subtle bg-surface-elevated hover:border-accent hover:text-accent text-text-muted"
      } ${className}`}
    >
      {copied ? (
        <>
          <Check className="h-3 w-3 text-success shrink-0 transition-transform duration-200" />
          <span>Copied!</span>
        </>
      ) : (
        <>
          <Copy className="h-3 w-3 shrink-0 transition-transform duration-200" />
          <span>Copy</span>
        </>
      )}
    </button>
  )
}
