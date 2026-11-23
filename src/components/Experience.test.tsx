import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Experience from './Experience';
import { PORTFOLIO_DATA } from '../data/portfolioData';

describe('Experience Component', () => {
  it('renders section title and download CV button', () => {
    render(<Experience />);

    expect(screen.getByText(/Experiência Corporativa em Alta Criticidade/i)).toBeInTheDocument();

    const downloadBtn = screen.getByRole('link', { name: /Baixar CV \(PDF ABNT\)/i });
    expect(downloadBtn).toHaveAttribute('href', PORTFOLIO_DATA.profile.resumePdf);
    expect(downloadBtn).toHaveAttribute('download', 'curriculo-guilherme-souza.pdf');
  });

  it('renders Unimed experience with all 3 consecutive roles', () => {
    render(<Experience />);

    expect(screen.getByText(/Unimed Cooperativa de Trabalho Médico/i)).toBeInTheDocument();
    expect(screen.getByText(/02\/2025 – 25\/08\/2026/i)).toBeInTheDocument();

    // 3 roles in Unimed
    expect(screen.getByText('Analista de TI')).toBeInTheDocument();
    expect(screen.getByText('Analista de Infraestrutura de Redes')).toBeInTheDocument();
    expect(screen.getByText('Auxiliar de TI')).toBeInTheDocument();
  });

  it('renders key technical highlights: Zabbix 7 LTS, Veeam, and RPO reduction', () => {
    render(<Experience />);

    expect(screen.getAllByText(/Zabbix 7 LTS/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText(/24 horas para 10 minutos/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Veeam Backup & Replication/i).length).toBeGreaterThanOrEqual(1);
  });

  it('renders Stratus Telecom experience', () => {
    render(<Experience />);

    expect(screen.getByText(/Stratus Telecomunicações/i)).toBeInTheDocument();
    expect(screen.getByText(/Analista de Telecomunicações Interno/i)).toBeInTheDocument();
  });

  it('renders Academic and Technical education items', () => {
    render(<Experience />);

    expect(screen.getByText(/Universidade Norte do Paraná \(UNOPAR\)/i)).toBeInTheDocument();
    expect(screen.getByText(/Centro Federal de Educação Tecnológica \(CEFET\)/i)).toBeInTheDocument();
    expect(screen.getByText(/1\.320 horas/i)).toBeInTheDocument();
  });
});
