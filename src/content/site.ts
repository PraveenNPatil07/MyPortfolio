/**
 * Praveen Patil Portfolio 2.0 - Site Configuration & Content Manifest
 * Authoritative single source of truth for site metadata, navigation, and feature flags.
 */

export const siteConfig = {
  name: "Praveen Patil",
  role: "Associate Software Engineer",
  company: "Brillio",
  headline: "I build software systems, and I care about how they work.",
  bio: "Software engineer at Brillio specializing in backend systems, distributed architectures, and clean engineering practices. Passionate about building robust, scalable services from database schema to API layer.",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://praveenpatil.dev",
  
  // Verified career milestones
  timeline: {
    internshipStart: "March 5, 2026",
    internshipEnd: "September 27, 2026",
    conversionDate: "September 28, 2026",
  },
  
  // Feature flags
  resumeEnabled: true, // Enabled following owner confirmation of current resume.pdf
  showProfilePhoto: true, // Enabled per owner request (subtle, non-center focus)
  certificationsEnabled: false, // Hidden until verified credentials are supplied
  
  // Verified social profiles
  links: {
    github: "https://github.com/PraveenNPatil07",
    linkedin: "https://www.linkedin.com/in/praveenpatil07/",
    email: "praveenpatil.dev@gmail.com",
    leetcode: "https://leetcode.com/u/Praveen0_7/",
    codechef: "https://www.codechef.com/users/praveenpatil07",
  },
  
  // Authoritative navigation items
  navItems: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Experience", href: "/experience" },
    { label: "Contact", href: "/contact" },
  ],
};
