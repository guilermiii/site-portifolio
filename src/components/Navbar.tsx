import { useState } from 'react';
import { Terminal, Download, Mail, Check, Menu, X, Sun, Moon } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
}

export default function Navbar({ darkMode, setDarkMode }: NavbarProps) {
  const [copied, setCopied] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-[#0a0e17]/85 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="#overview" className="flex items-center space-x-3 group">
          <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
            <Terminal className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-bold text-slate-100 tracking-tight text-sm sm:text-base">
                guilherme<span className="text-emerald-400">.sre</span>
              </span>
              <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse mr-1.5"></span>
                ACTIVE
              </span>
            </div>
            <p className="text-[11px] text-slate-400 font-mono hidden sm:block">oci-bastion • arm64</p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-xs lg:text-sm font-medium text-slate-300">
          <a href="#overview" className="hover:text-emerald-400 transition">Visão Geral</a>
          <a href="#pipeline" className="hover:text-emerald-400 transition">Esteira CI/CD</a>
          <a href="#terminal" className="hover:text-emerald-400 transition">Terminal CLI</a>
          <a href="#projects" className="hover:text-emerald-400 transition">Projetos IaC</a>
          <a href="#experience" className="hover:text-emerald-400 transition">Experiência</a>
          <a href="#certifications" className="hover:text-emerald-400 transition">Certificações</a>
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center space-x-2.5">
          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle theme"
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-amber-400 transition"
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            onClick={copyEmail}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-200 transition"
            title="Copiar e-mail"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Mail className="w-3.5 h-3.5 text-slate-400" />}
            <span>{copied ? 'Copiado!' : 'E-mail'}</span>
          </button>

          <a
            href={PORTFOLIO_DATA.profile.resumePdf}
            download="curriculo-guilherme.pdf"
            className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition shadow-sm shadow-emerald-500/20"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Baixar CV</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center space-x-2 md:hidden">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400"
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800 bg-[#0a0e17] px-4 py-4 space-y-3">
          <div className="flex flex-col space-y-2 text-sm text-slate-300">
            <a onClick={() => setMobileMenuOpen(false)} href="#overview" className="p-2 rounded hover:bg-slate-900">Visão Geral</a>
            <a onClick={() => setMobileMenuOpen(false)} href="#pipeline" className="p-2 rounded hover:bg-slate-900">Esteira CI/CD</a>
            <a onClick={() => setMobileMenuOpen(false)} href="#terminal" className="p-2 rounded hover:bg-slate-900">Terminal CLI</a>
            <a onClick={() => setMobileMenuOpen(false)} href="#projects" className="p-2 rounded hover:bg-slate-900">Projetos IaC</a>
            <a onClick={() => setMobileMenuOpen(false)} href="#experience" className="p-2 rounded hover:bg-slate-900">Experiência</a>
            <a onClick={() => setMobileMenuOpen(false)} href="#certifications" className="p-2 rounded hover:bg-slate-900">Certificações</a>
          </div>
          <div className="pt-2 border-t border-slate-800 flex items-center space-x-2">
            <button
              onClick={copyEmail}
              className="flex-1 py-2 rounded-lg text-xs font-mono bg-slate-900 border border-slate-800 text-center text-slate-200"
            >
              {copied ? 'E-mail Copiado!' : 'Copiar E-mail'}
            </button>
            <a
              href={PORTFOLIO_DATA.profile.resumePdf}
              download
              className="flex-1 py-2 rounded-lg text-xs font-semibold bg-emerald-500 text-slate-950 text-center"
            >
              Baixar CV (PDF)
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
