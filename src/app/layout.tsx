import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Toaster } from "@/components/ui/toaster";
import { InteractiveGradientBackground } from '@/components/InteractiveGradientBackground';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { siteConfig } from '@/content/site';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: `${siteConfig.name} · ${siteConfig.role}`,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.bio,
  keywords: [
    'Praveen Patil',
    'Associate Software Engineer',
    'Backend Engineer',
    'Brillio',
    'Distributed Systems',
    'Microservices Architecture',
    'PASETO v4',
    'Fastify',
    'Spring Boot',
    'RabbitMQ',
    'PostgreSQL',
    'TypeScript',
    'Python',
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.siteUrl }],
  creator: siteConfig.name,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.siteUrl,
    title: `${siteConfig.name} · ${siteConfig.role}`,
    description: siteConfig.bio,
    siteName: `${siteConfig.name} · Engineering Journal`,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} · ${siteConfig.role}`,
    description: siteConfig.bio,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable}`} data-scroll-behavior="smooth">
      <body className="font-sans antialiased bg-bg text-text min-h-screen selection:bg-accent/20 selection:text-accent">
        {/* WCAG 2.1 AA Skip-to-content accessible bypass link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent focus:text-bg focus:font-mono focus:text-xs focus:font-bold focus:rounded-md focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-accent"
        >
          Skip to main content
        </a>

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <InteractiveGradientBackground />
          <div className="relative z-10 flex flex-col min-h-screen">
            <Header />
            <main id="main-content" className="flex-grow animate-page-enter">
              {children}
            </main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
