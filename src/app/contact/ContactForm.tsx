"use client"

import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle2, AlertCircle, Send, Loader2 } from "lucide-react"

const clientContactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name is too long"),
  email: z.string().trim().email("Please provide a valid email address").max(120, "Email is too long"),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(3000, "Message is too long"),
})

type ContactFormData = z.infer<typeof clientContactSchema>

export function ContactForm() {
  const [serverError, setServerError] = useState<string | null>(null)
  const [isSuccess, setIsSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(clientContactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  const onSubmit = async (data: ContactFormData) => {
    setServerError(null)
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok) {
        setServerError(result.error || "Failed to deliver message. Please try again.")
        return
      }

      setIsSuccess(true)
      reset()
    } catch (err) {
      console.error("Contact submission network error:", err)
      setServerError("A network error occurred. Please check your connection and try again.")
    }
  }

  if (isSuccess) {
    return (
      <div className="p-6 rounded-lg border border-success/30 bg-success/10 space-y-3 text-center animate-in fade-in-50">
        <div className="flex justify-center text-success">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h3 className="text-base font-semibold text-text-main">Message Delivered</h3>
        <p className="text-xs text-text-muted max-w-sm mx-auto">
          Thank you for reaching out. Your message has been safely received, and I will get back to you shortly.
        </p>
        <div className="pt-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsSuccess(false)}
            className="text-xs font-mono border-border-subtle hover:bg-surface"
          >
            Send Another Message
          </Button>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      {serverError && (
        <div 
          role="alert" 
          className="p-3.5 rounded-md border border-error/40 bg-error/10 text-error text-xs flex items-start gap-2.5"
        >
          <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
          <span>{serverError}</span>
        </div>
      )}

      {/* Name Input */}
      <div className="space-y-1.5">
        <label htmlFor="name" className="block text-xs font-mono font-medium text-text-main">
          Full Name <span className="text-error">*</span>
        </label>
        <Input
          id="name"
          placeholder="e.g. Alex Mercer"
          disabled={isSubmitting}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
          className={`bg-surface-elevated/40 border-border-subtle text-text-main placeholder:text-text-muted/60 focus-visible:ring-accent ${
            errors.name ? "border-error focus-visible:ring-error" : ""
          }`}
          {...register("name")}
        />
        {errors.name && (
          <p id="name-error" className="text-xs text-error font-mono">
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Email Input */}
      <div className="space-y-1.5">
        <label htmlFor="email" className="block text-xs font-mono font-medium text-text-main">
          Email Address <span className="text-error">*</span>
        </label>
        <Input
          id="email"
          type="email"
          placeholder="e.g. alex@company.com"
          disabled={isSubmitting}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          className={`bg-surface-elevated/40 border-border-subtle text-text-main placeholder:text-text-muted/60 focus-visible:ring-accent ${
            errors.email ? "border-error focus-visible:ring-error" : ""
          }`}
          {...register("email")}
        />
        {errors.email && (
          <p id="email-error" className="text-xs text-error font-mono">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Message Input */}
      <div className="space-y-1.5">
        <label htmlFor="message" className="block text-xs font-mono font-medium text-text-main">
          Message <span className="text-error">*</span>
        </label>
        <Textarea
          id="message"
          rows={5}
          placeholder="What would you like to discuss? Technical inquiries, project architecture, or career opportunities..."
          disabled={isSubmitting}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`bg-surface-elevated/40 border-border-subtle text-text-main placeholder:text-text-muted/60 focus-visible:ring-accent resize-y ${
            errors.message ? "border-error focus-visible:ring-error" : ""
          }`}
          {...register("message")}
        />
        {errors.message && (
          <p id="message-error" className="text-xs text-error font-mono">
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-text-main text-bg font-medium hover:opacity-90 active:scale-[0.99] transition-all duration-150 focus-visible:ring-2 focus-visible:ring-accent h-10"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Transmitting...
          </>
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" /> Send Message
          </>
        )}
      </Button>
    </form>
  )
}
