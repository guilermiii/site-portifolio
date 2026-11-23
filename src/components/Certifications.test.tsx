import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Certifications from './Certifications';

describe('Certifications Component', () => {
  it('renders section title and Credly badge link', () => {
    render(<Certifications />);

    expect(screen.getByText(/Certificações Oficiais & Skill Badges/i)).toBeInTheDocument();
    expect(screen.getByText(/Ver Perfil Completo no Credly/i)).toBeInTheDocument();
  });

  it('renders the 4 official certifications', () => {
    render(<Certifications />);

    expect(screen.getByText(/LFCA: Linux Foundation Certified IT Associate/i)).toBeInTheDocument();
    expect(screen.getByText(/Oracle Cloud Infrastructure Certified Foundations Associate/i)).toBeInTheDocument();
    expect(screen.getByText(/Oracle Cloud Infrastructure Certified AI Foundations Associate/i)).toBeInTheDocument();
    expect(screen.getByText(/Oracle Agentic AI Foundations Associate/i)).toBeInTheDocument();
  });

  it('renders Google Cloud and Cisco skill badges', () => {
    render(<Certifications />);

    expect(screen.getByText(/Deploy Kubernetes Applications on Google Cloud/i)).toBeInTheDocument();
    expect(screen.getByText(/Manage Kubernetes in Google Cloud/i)).toBeInTheDocument();
    expect(screen.getByText(/Introduction to Cybersecurity/i)).toBeInTheDocument();
  });
});
