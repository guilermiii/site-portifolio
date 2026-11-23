import { Terminal, ArrowUp } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-[#070b12] text-slate-600 dark:text-slate-400 py-10 font-mono text-xs transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & info */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <div className="text-slate-900 dark:text-slate-200 font-bold">
                {PORTFOLIO_DATA.profile.name} • <span className="text-emerald-600 dark:text-emerald-400">DevOps, SRE & Infra On-Premise</span>
              </div>
              <div className="text-slate-500 dark:text-slate-400 text-[11px]">
                Infraestrutura On-Premise & Cloud • Kubernetes • Terraform • Proxmox VE
              </div>
            </div>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-[11px]">
            <span className="px-2.5 py-1 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 shadow-sm">
              React + TypeScript + Vite
            </span>
            <span className="px-2.5 py-1 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 shadow-sm">
              Tailwind CSS
            </span>
            <span className="px-2.5 py-1 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-emerald-700 dark:text-emerald-400 shadow-sm font-semibold">
              Docker Multi-Stage & Nginx
            </span>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            aria-label="Voltar ao topo"
            className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/40 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white shadow-sm transition"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 gap-2">
          <div>
            © {new Date().getFullYear()} Guilherme de Souza. Todos os direitos reservados.
          </div>
          <div className="flex items-center space-x-4">
            <a href="#overview" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition">Visão Geral</a>
            <a href="#pipeline" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition">CI/CD</a>
            <a href="#terminal" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition">Terminal</a>
            <a href="#projects" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition">Projetos</a>
            <a href="#contact" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition">Contato</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
