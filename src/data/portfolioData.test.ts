import { describe, it, expect } from 'vitest';
import { PORTFOLIO_DATA } from './portfolioData';

describe('PORTFOLIO_DATA Integrity Tests', () => {
  describe('Profile & Availability', () => {
    it('should have correct profile metadata and availability', () => {
      expect(PORTFOLIO_DATA.profile.name).toBe('Guilherme de Souza');
      expect(PORTFOLIO_DATA.profile.fullName).toBe('Guilherme de Souza Mizael de Morais');
      expect(PORTFOLIO_DATA.profile.resumePdf).toBe('/docs/curriculo-guilherme.pdf');
      expect(PORTFOLIO_DATA.profile.statusText).toContain('Disponível');
      expect(PORTFOLIO_DATA.profile.statusText).toContain('Presencial ou Remoto');
    });
  });

  describe('Unimed Experience & Consecutive Promotions', () => {
    const unimed = PORTFOLIO_DATA.experience.find((exp) => exp.company.includes('Unimed'));

    it('should exist and cover 1 year and 7 months', () => {
      expect(unimed).toBeDefined();
      expect(unimed?.period).toContain('02/2025 – 25/08/2026');
      expect(unimed?.period).toContain('1 ano 7 meses');
    });

    it('should have exactly 3 career steps (2 consecutive promotions + entry)', () => {
      expect(unimed?.promotions).toBeDefined();
      expect(unimed?.promotions?.length).toBe(3);

      const roles = unimed?.promotions?.map((p) => p.role);
      expect(roles).toEqual([
        'Analista de TI',
        'Analista de Infraestrutura de Redes',
        'Auxiliar de TI',
      ]);
    });

    it('should contain key metrics: Zabbix 7 LTS, 70% PC renewal, RPO 24h to 10m, and 24/7 hospital support', () => {
      const allHighlights = unimed?.promotions?.flatMap((p) => p.highlights).join(' ') || '';

      expect(allHighlights).toContain('Zabbix 7 LTS');
      expect(allHighlights).toContain('70% de todo o parque de microcomputadores');
      expect(allHighlights).toContain('24 horas para 10 minutos');
      expect(allHighlights).toContain('Veeam Backup & Replication');
      expect(allHighlights).toContain('24/7');
      expect(allHighlights).toContain('140 hospitais');
    });
  });

  describe('Stratus Telecom Experience', () => {
    const stratus = PORTFOLIO_DATA.experience.find((exp) => exp.company.includes('Stratus'));

    it('should exist with period 03/2023 – 12/2024', () => {
      expect(stratus).toBeDefined();
      expect(stratus?.period).toContain('03/2023 – 12/2024');
      expect(stratus?.achievements?.length).toBeGreaterThan(0);
    });
  });

  describe('Official Certifications & Skill Badges Separation', () => {
    const certs = PORTFOLIO_DATA.certifications.filter((c) => c.type === 'certification');
    const badges = PORTFOLIO_DATA.certifications.filter((c) => c.type === 'skill_badge');

    it('should have exactly 4 official certifications', () => {
      expect(certs.length).toBe(4);
      const codes = certs.map((c) => c.code);
      expect(codes).toContain('LF-2026');
      expect(codes).toContain('OCI-FA-2024');
      expect(codes).toContain('OCI-AI-2024');
      expect(codes).toContain('AGENTIC-AI-2024');
    });

    it('should have LFCA valid until 10/2028', () => {
      const lfca = certs.find((c) => c.code === 'LF-2026');
      expect(lfca).toBeDefined();
      expect(lfca?.validity).toContain('2028');
    });

    it('should have skill badges separated from official certifications', () => {
      expect(badges.length).toBeGreaterThan(0);
      badges.forEach((b) => {
        expect(b.type).toBe('skill_badge');
      });
    });
  });

  describe('Academic & Technical Education', () => {
    const unopar = PORTFOLIO_DATA.education.find((e) => e.id === 'unopar');
    const cefet = PORTFOLIO_DATA.education.find((e) => e.id === 'cefet');

    it('should have UNOPAR with expected completion in 1º semester of 2027', () => {
      expect(unopar).toBeDefined();
      expect(unopar?.status).toContain('2027');
      expect(unopar?.status).toContain('Último Período');
    });

    it('should have CEFET technical degree with 1.320 hours workload', () => {
      expect(cefet).toBeDefined();
      expect(cefet?.status).toBe('Concluído');
      expect(cefet?.details).toContain('1.320 horas');
    });
  });
});
