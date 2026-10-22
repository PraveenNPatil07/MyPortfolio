import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';

// Helper to convert hex to sRGB components
function hexToRgb(hex: string): [number, number, number] {
  const cleanHex = hex.replace('#', '').trim();
  const num = parseInt(cleanHex, 16);
  return [(num >> 16) & 255, (num >> 8) & 255, num & 255];
}

// Helper to compute WCAG 2.1 relative luminance
function relativeLuminance(rgb: [number, number, number]): number {
  const [r, g, b] = rgb.map((val) => {
    const s = val / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

// Helper to compute contrast ratio
function getContrastRatio(hex1: string, hex2: string): number {
  const lum1 = relativeLuminance(hexToRgb(hex1));
  const lum2 = relativeLuminance(hexToRgb(hex2));
  const lighter = Math.max(lum1, lum2);
  const darker = Math.min(lum1, lum2);
  return (lighter + 0.05) / (darker + 0.05);
}

// Parse tokens from tokens.css
function parseTokensCss() {
  const tokensPath = path.resolve(__dirname, '../styles/tokens.css');
  const css = fs.readFileSync(tokensPath, 'utf-8');

  const rootMatch = css.match(/:root\s*\{([^}]+)\}/);
  const darkMatch = css.match(/\.dark\s*\{([^}]+)\}/);

  const extractTokens = (block: string) => {
    const tokens: Record<string, string> = {};
    const lines = block.split('\n');
    for (const line of lines) {
      const match = line.match(/--([a-z0-9-]+)\s*:\s*(#[a-fA-F0-9]{6})/);
      if (match) {
        tokens[match[1]] = match[2];
      }
    }
    return tokens;
  };

  return {
    light: extractTokens(rootMatch ? rootMatch[1] : ''),
    dark: extractTokens(darkMatch ? darkMatch[1] : ''),
  };
}

describe('Engineering Journal Design Tokens - WCAG 2.1 AA Compliance', () => {
  const tokens = parseTokensCss();

  describe('Light Mode Tokens', () => {
    it('defines all required semantic tokens in :root', () => {
      const required = ['bg', 'surface', 'surface-elevated', 'text', 'text-secondary', 'accent', 'border', 'success', 'error'];
      for (const token of required) {
        expect(tokens.light[token]).toBeDefined();
      }
    });

    it('maintains WCAG AA normal text contrast (>= 4.5:1) for primary text', () => {
      const ratioBg = getContrastRatio(tokens.light['text'], tokens.light['bg']);
      const ratioSurface = getContrastRatio(tokens.light['text'], tokens.light['surface']);
      expect(ratioBg).toBeGreaterThanOrEqual(4.5);
      expect(ratioSurface).toBeGreaterThanOrEqual(4.5);
    });

    it('maintains WCAG AA normal text contrast (>= 4.5:1) for secondary text', () => {
      const ratioBg = getContrastRatio(tokens.light['text-secondary'], tokens.light['bg']);
      const ratioSurface = getContrastRatio(tokens.light['text-secondary'], tokens.light['surface']);
      expect(ratioBg).toBeGreaterThanOrEqual(4.5);
      expect(ratioSurface).toBeGreaterThanOrEqual(4.5);
    });

    it('maintains WCAG UI component contrast (>= 3.0:1) for accent focus/links', () => {
      const ratioBg = getContrastRatio(tokens.light['accent'], tokens.light['bg']);
      const ratioSurface = getContrastRatio(tokens.light['accent'], tokens.light['surface']);
      expect(ratioBg).toBeGreaterThanOrEqual(3.0);
      expect(ratioSurface).toBeGreaterThanOrEqual(3.0);
    });
  });

  describe('Dark Mode Tokens', () => {
    it('defines all required semantic tokens in .dark', () => {
      const required = ['bg', 'surface', 'surface-elevated', 'text', 'text-secondary', 'accent', 'border', 'success', 'error'];
      for (const token of required) {
        expect(tokens.dark[token]).toBeDefined();
      }
    });

    it('maintains WCAG AA normal text contrast (>= 4.5:1) for primary text', () => {
      const ratioBg = getContrastRatio(tokens.dark['text'], tokens.dark['bg']);
      const ratioSurface = getContrastRatio(tokens.dark['text'], tokens.dark['surface']);
      expect(ratioBg).toBeGreaterThanOrEqual(4.5);
      expect(ratioSurface).toBeGreaterThanOrEqual(4.5);
    });

    it('maintains WCAG AA normal text contrast (>= 4.5:1) for secondary text', () => {
      const ratioBg = getContrastRatio(tokens.dark['text-secondary'], tokens.dark['bg']);
      const ratioSurface = getContrastRatio(tokens.dark['text-secondary'], tokens.dark['surface']);
      expect(ratioBg).toBeGreaterThanOrEqual(4.5);
      expect(ratioSurface).toBeGreaterThanOrEqual(4.5);
    });

    it('maintains WCAG UI component contrast (>= 3.0:1) for accent focus/links', () => {
      const ratioBg = getContrastRatio(tokens.dark['accent'], tokens.dark['bg']);
      const ratioSurface = getContrastRatio(tokens.dark['accent'], tokens.dark['surface']);
      expect(ratioBg).toBeGreaterThanOrEqual(3.0);
      expect(ratioSurface).toBeGreaterThanOrEqual(3.0);
    });
  });
});
