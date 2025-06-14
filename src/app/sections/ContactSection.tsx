
"use client"

import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Section } from "@/components/Section";
import { IconLink } from "@/components/IconLink";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type FormData = z.infer<typeof formSchema>;

const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay }
  }),
};

export function ContactSection() {
  const [mounted, setMounted] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    setMounted(true);
  }, []);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        form.reset();
      } else {
        toast({
          title: "Failed to Send Message",
          description: "There was an error sending your message. Please try again later.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Failed to Send Message",
        description: "There was an unexpected error. Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <Section id="contact" title="Get In Touch" contentClassName="py-8 md:py-24">
      <div className="max-w-2xl mx-auto">
        <motion.p
          className="text-lg text-center text-muted-foreground mb-8"
          custom={0}
          variants={contentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          I&apos;m currently open to full-time SDE roles and internships. Whether you have a question or just want to say hi, feel free to reach out. Let&apos;s connect!
        </motion.p>

        <motion.div
          custom={0.4}
          variants={contentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
        >
          {mounted ? (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 bg-card p-6 sm:p-8 rounded-lg shadow-lg">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="your.email@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Your message..." {...field} rows={5} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full" size="lg" disabled={form.formState.isSubmitting}>
                  {form.formState.isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          ) : (
            <div className="space-y-6 bg-card p-6 sm:p-8 rounded-lg shadow-lg animate-pulse">
              <div className="space-y-2">
                <div className="h-4 bg-muted rounded w-1/4"></div>
                <div className="h-10 bg-muted rounded w-full"></div>
              </div>
              <div className="space-y-2">
                <div className="h-4 bg-muted rounded w-1/4"></div>
                <div className="h-10 bg-muted rounded w-full"></div>
              </div>
              <div className="space-y-2">
                <div className="h-4 bg-muted rounded w-1/4"></div>
                <div className="h-20 bg-muted rounded w-full"></div>
              </div>
              <div className="h-11 bg-muted rounded w-full mt-4"></div>
            </div>
          )}
        </motion.div>
      </div>
    </Section>
  );
}
