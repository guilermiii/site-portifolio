import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Hero from './Hero';
import { PORTFOLIO_DATA } from '../data/portfolioData';

describe('Hero Component', () => {
  it('renders name, headline and main title', () => {
    render(<Hero />);

    expect(screen.getByText(PORTFOLIO_DATA.profile.name)).toBeInTheDocument();
    expect(screen.getAllByText(/DevOps & SRE/i).length).toBeGreaterThanOrEqual(1);
  });

  it('renders status badge indicating availability', () => {
    render(<Hero />);

    expect(
      screen.getByText(/DISPONÍVEL: PRESENCIAL OU REMOTO • MUDANÇA & INÍCIO IMEDIATO/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/LFCA & OCI CERTIFIED/i)).toBeInTheDocument();
  });

  it('renders telemetry metrics cards', () => {
    render(<Hero />);

    PORTFOLIO_DATA.telemetry.forEach((stat) => {
      expect(screen.getByText(stat.label)).toBeInTheDocument();
      expect(screen.getByText(stat.value)).toBeInTheDocument();
    });
  });

  it('renders action buttons and social links', () => {
    render(<Hero />);

    const projectsBtn = screen.getByRole('link', { name: /Explorar Projetos IaC/i });
    expect(projectsBtn).toHaveAttribute('href', '#projects');

    const terminalBtn = screen.getByRole('link', { name: /Testar Terminal Interativo/i });
    expect(terminalBtn).toHaveAttribute('href', '#terminal');

    const contactBtn = screen.getByRole('link', { name: /Contatar/i });
    expect(contactBtn).toHaveAttribute('href', '#contact');

    const linkedinLink = screen.getByRole('link', { name: /LinkedIn/i });
    expect(linkedinLink).toHaveAttribute('href', PORTFOLIO_DATA.profile.linkedin);

    const githubLink = screen.getByRole('link', { name: /GitHub/i });
    expect(githubLink).toHaveAttribute('href', PORTFOLIO_DATA.profile.github);
  });
});
