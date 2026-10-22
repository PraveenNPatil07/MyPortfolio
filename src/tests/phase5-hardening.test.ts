import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';
import sitemap from '../app/sitemap';
import robots from '../app/robots';
import nextConfig from '../../next.config';
import { siteConfig } from '../content/site';

describe('Phase 5 — SEO, Accessibility, Security & Quality Hardening', () => {
  const rootDir = path.resolve(__dirname, '../../');

  describe('1. SEO & Crawlability Infrastructure', () => {
    it('generates a complete, valid sitemap.xml with all verified routes', () => {
      const items = sitemap();
      expect(items.length).toBe(8);

      const urls = items.map((i) => i.url);
      const baseUrl = siteConfig.siteUrl.replace(/\/$/, '');

      expect(urls).toContain(`${baseUrl}`);
      expect(urls).toContain(`${baseUrl}/about`);
      expect(urls).toContain(`${baseUrl}/experience`);
      expect(urls).toContain(`${baseUrl}/projects`);
      expect(urls).toContain(`${baseUrl}/projects/vaultless`);
      expect(urls).toContain(`${baseUrl}/projects/fittrack`);
      expect(urls).toContain(`${baseUrl}/projects/blogopedia`);
      expect(urls).toContain(`${baseUrl}/contact`);

      for (const item of items) {
        expect(item.lastModified).toMatch(/^\d{4}-\d{2}-\d{2}$/);
        expect(item.priority).toBeGreaterThanOrEqual(0.7);
        expect(['weekly', 'monthly']).toContain(item.changeFrequency);
      }
    });

    it('generates robots.txt disallowing private api routes and specifying sitemap', () => {
      const config = robots();
      expect(config.rules).toBeDefined();
      const rules = Array.isArray(config.rules) ? config.rules[0] : config.rules;
      expect(rules.userAgent).toBe('*');
      expect(rules.allow).toBe('/');
      expect(rules.disallow).toContain('/api/');
      expect(config.sitemap).toBe(`${siteConfig.siteUrl.replace(/\/$/, '')}/sitemap.xml`);
    });

    it('ensures all pages define canonical URLs in their metadata', () => {
      const pageFiles = [
        'src/app/page.tsx',
        'src/app/about/page.tsx',
        'src/app/experience/page.tsx',
        'src/app/projects/page.tsx',
        'src/app/projects/vaultless/page.tsx',
        'src/app/projects/fittrack/page.tsx',
        'src/app/projects/blogopedia/page.tsx',
        'src/app/contact/page.tsx',
      ];

      for (const relPath of pageFiles) {
        const fullPath = path.join(rootDir, relPath);
        const content = fs.readFileSync(fullPath, 'utf-8');
        expect(content).toContain('alternates');
        expect(content).toContain('canonical');
        expect(content).toContain('openGraph');
      }
    });
  });

  describe('2. Accessibility & Usability Hardening', () => {
    it('includes a WCAG 2.1 AA compliant skip-to-content bypass link in root layout', () => {
      const layoutContent = fs.readFileSync(path.join(rootDir, 'src/app/layout.tsx'), 'utf-8');
      expect(layoutContent).toContain('href="#main-content"');
      expect(layoutContent).toContain('Skip to main content');
      expect(layoutContent).toContain('sr-only focus:not-sr-only');
    });

    it('verifies that main content landmark has id="main-content"', () => {
      const layoutContent = fs.readFileSync(path.join(rootDir, 'src/app/layout.tsx'), 'utf-8');
      expect(layoutContent).toContain('<main id="main-content"');
    });

    it('verifies contact form has explicit labels, aria-invalid, and role="alert"', () => {
      const formContent = fs.readFileSync(path.join(rootDir, 'src/app/contact/ContactForm.tsx'), 'utf-8');
      expect(formContent).toContain('htmlFor="name"');
      expect(formContent).toContain('htmlFor="email"');
      expect(formContent).toContain('htmlFor="message"');
      expect(formContent).toContain('aria-invalid');
      expect(formContent).toContain('aria-describedby');
      expect(formContent).toContain('role="alert"');
    });
  });

  describe('3. HTTP Security Headers Hardening', () => {
    it('configures strict security headers in next.config.ts', async () => {
      expect(nextConfig.headers).toBeDefined();
      const headersConfig = await nextConfig.headers!();
      expect(headersConfig.length).toBeGreaterThan(0);

      const allHeaders = headersConfig[0].headers;
      const headerKeys = allHeaders.map((h) => h.key);

      expect(headerKeys).toContain('X-Frame-Options');
      expect(headerKeys).toContain('X-Content-Type-Options');
      expect(headerKeys).toContain('Referrer-Policy');
      expect(headerKeys).toContain('Strict-Transport-Security');
      expect(headerKeys).toContain('Permissions-Policy');
      expect(headerKeys).toContain('Content-Security-Policy');

      // Verify specific security values
      const frameOptions = allHeaders.find((h) => h.key === 'X-Frame-Options');
      expect(frameOptions?.value).toBe('DENY');

      const contentType = allHeaders.find((h) => h.key === 'X-Content-Type-Options');
      expect(contentType?.value).toBe('nosniff');

      const referrer = allHeaders.find((h) => h.key === 'Referrer-Policy');
      expect(referrer?.value).toBe('strict-origin-when-cross-origin');

      const csp = allHeaders.find((h) => h.key === 'Content-Security-Policy');
      expect(csp?.value).toContain("connect-src 'self' ws: wss:");
      expect(csp?.value).not.toContain("connect-src 'self' ws: http: https:");

      expect(nextConfig.poweredByHeader).toBe(false);
    });
  });

  describe('4. Performance & Font Optimization', () => {
    it('configures Google Fonts with display: swap in root layout', () => {
      const layoutContent = fs.readFileSync(path.join(rootDir, 'src/app/layout.tsx'), 'utf-8');
      expect(layoutContent).toContain("display: 'swap'");
    });

    it('ensures reduced motion safety is declared in globals.css', () => {
      const cssContent = fs.readFileSync(path.join(rootDir, 'src/app/globals.css'), 'utf-8');
      expect(cssContent).toContain('@media (prefers-reduced-motion: reduce)');
    });
  });
});
