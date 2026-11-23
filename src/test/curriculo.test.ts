import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';

describe('Curriculum PDF & Static Docs Integrity', () => {
  const pdfPath = path.resolve(process.cwd(), 'public/docs/curriculo-guilherme.pdf');

  it('should have curriculo-guilherme.pdf in public/docs directory', () => {
    expect(fs.existsSync(pdfPath)).toBe(true);
  });

  it('curriculo-guilherme.pdf should be non-empty and valid size', () => {
    const stats = fs.statSync(pdfPath);
    expect(stats.size).toBeGreaterThan(10000); // Greater than 10KB
  });

  it('should have HTML template source in scripts/curriculo_abnt.html', () => {
    const htmlPath = path.resolve(process.cwd(), 'scripts/curriculo_abnt.html');
    expect(fs.existsSync(htmlPath)).toBe(true);
    const content = fs.readFileSync(htmlPath, 'utf-8');
    expect(content).toContain('Guilherme de Souza Mizael de Morais');
    expect(content).toContain('1.320 horas');
    expect(content).toContain('LFCA');
  });
});
