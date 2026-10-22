import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';
import { siteConfig } from '../content/site';

describe('Phase 3 — Portfolio Case Studies & Project Index Verification', () => {
  const rootDir = path.resolve(__dirname, '../../');
  
  it('has implemented all three authorized case study pages', () => {
    const requiredPages = [
      'src/app/projects/vaultless/page.tsx',
      'src/app/projects/fittrack/page.tsx',
      'src/app/projects/blogopedia/page.tsx',
    ];

    for (const relPath of requiredPages) {
      const fullPath = path.join(rootDir, relPath);
      expect(fs.existsSync(fullPath)).toBe(true);
      const content = fs.readFileSync(fullPath, 'utf-8');
      expect(content).toContain('export const metadata');
      expect(content).toContain('export default function');
    }
  });

  it('verifies that all authorized GitHub repository URLs match the owner repositories', () => {
    const projectIndexContent = fs.readFileSync(path.join(rootDir, 'src/app/projects/page.tsx'), 'utf-8');
    
    const expectedRepos = [
      'https://github.com/PraveenNPatil07/Vaultless',
      'https://github.com/PraveenNPatil07/FitTrack',
      'https://github.com/PraveenNPatil07/Blogopedia',
      'https://github.com/PraveenNPatil07/ApexBrowser',
      'https://github.com/PraveenNPatil07/Image-Watermarking-App',
      'https://github.com/PraveenNPatil07/Google_Trends_and_Data_Visualisation',
    ];

    for (const repoUrl of expectedRepos) {
      expect(projectIndexContent).toContain(repoUrl);
    }
  });

  it('strictly excludes Kasparro, BharatChronicles, and NewsNinja from publication', () => {
    const projectIndexContent = fs.readFileSync(path.join(rootDir, 'src/app/projects/page.tsx'), 'utf-8');
    expect(projectIndexContent.toLowerCase()).not.toContain('kasparro');
    expect(projectIndexContent.toLowerCase()).not.toContain('bharatchronicles');
    expect(projectIndexContent.toLowerCase()).not.toContain('newsninja');

    // Also verify no routes exist for them
    expect(fs.existsSync(path.join(rootDir, 'src/app/projects/kasparro'))).toBe(false);
    expect(fs.existsSync(path.join(rootDir, 'src/app/projects/bharatchronicles'))).toBe(false);
    expect(fs.existsSync(path.join(rootDir, 'src/app/projects/newsninja'))).toBe(false);
  });

  it('enables resume download and confirms resume file exists in public directory', () => {
    expect(siteConfig.resumeEnabled).toBe(true);
    expect(fs.existsSync(path.join(rootDir, 'public/resume.pdf'))).toBe(true);
  });

  it('maintains verified career milestone dates for Brillio', () => {
    expect(siteConfig.timeline.internshipStart).toBe('March 5, 2026');
    expect(siteConfig.timeline.internshipEnd).toBe('September 27, 2026');
    expect(siteConfig.timeline.conversionDate).toBe('September 28, 2026');

    // Experience page content verification
    const expContent = fs.readFileSync(path.join(rootDir, 'src/app/experience/page.tsx'), 'utf-8');
    expect(expContent).toContain('March 5, 2026 – Sept 27, 2026');
    expect(expContent).toContain('Sept 28, 2026 – Present');

    // About page content verification
    const aboutContent = fs.readFileSync(path.join(rootDir, 'src/app/about/page.tsx'), 'utf-8');
    expect(aboutContent).toContain('March 5, 2026 – Sept 27, 2026');
    expect(aboutContent).toContain('Sept 28, 2026 – Present');
  });
});
