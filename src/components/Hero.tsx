import { Terminal, Shield, ArrowRight, Github, Linkedin, Award, Mail } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Hero() {
  return (
    <section id="overview" className="relative pt-12 pb-16 overflow-hidden">
      {/* Background Glow Accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-emerald-500/10 via-sky-500/5 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl space-y-6">
          {/* Status Pills */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 dark:bg-emerald-950/60 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse"></span>
              <span>DISPONÍVEL: PRESENCIAL OU REMOTO • MUDANÇA & INÍCIO IMEDIATO</span>
            </div>
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-mono bg-sky-500/10 dark:bg-sky-950/60 border border-sky-500/30 text-sky-700 dark:text-sky-400">
              <Shield className="w-3.5 h-3.5" />
              <span>LFCA & OCI CERTIFIED</span>
            </div>
          </div>

          {/* Title & Headline */}
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              Infraestrutura Crítica, On-Premise,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500 dark:from-emerald-400 dark:via-teal-300 dark:to-sky-400">
                DevOps & SRE
              </span>
            </h1>

            {/* Apresentação Pessoal Formatada e Estruturada */}
            <div className="mt-4 space-y-3 max-w-3xl text-slate-600 dark:text-slate-300 leading-relaxed">
              <p className="text-base sm:text-lg">
                Olá, sou o <span className="font-bold text-slate-900 dark:text-white">{PORTFOLIO_DATA.profile.name}</span>.
                Estudante de <span className="font-semibold text-slate-900 dark:text-white">Sistemas de Informação</span> (indo para o último período), entusiasta e praticante de <span className="font-semibold text-emerald-600 dark:text-emerald-400">DevOps & SRE</span> com sólida vivência em ambientes críticos de infraestrutura On-Premise e provedor de telecomunicações.
              </p>
              <p className="text-sm sm:text-base">
                Possuo alta proficiência técnica em sustentação, redes e automação, com bagagem fortalecida por estudos e laboratórios contínuos. Preparado tanto para manter e evoluir o <span className="font-medium text-slate-800 dark:text-slate-200">legado</span> quanto para arquitetar soluções modernas <span className="font-medium text-slate-800 dark:text-slate-200">Cloud Native</span>, habituado a atuar sob pressão com alta confiabilidade 24/7.
              </p>
            </div>
          </div>

          {/* Quick Metrics Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 max-w-3xl">
            {PORTFOLIO_DATA.telemetry.map((stat, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/40 transition shadow-sm">
                <div className="text-xs font-mono text-slate-500 dark:text-slate-400">{stat.label}</div>
                <div className="text-xl sm:text-2xl font-bold font-mono mt-1 text-emerald-600 dark:text-emerald-400">{stat.value}</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 truncate mt-0.5">{stat.sub}</div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl font-semibold text-sm bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition shadow-lg shadow-emerald-500/20"
            >
              <span>Explorar Projetos IaC</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#terminal"
              className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl font-semibold text-sm bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 transition shadow-sm"
            >
              <Terminal className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Testar Terminal Interativo</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl font-semibold text-sm bg-white dark:bg-slate-900/80 hover:bg-slate-100 dark:hover:bg-slate-850 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 transition shadow-sm"
            >
              <Mail className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Contatar</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4 pt-1 text-xs text-slate-500 dark:text-slate-400">
            <span className="font-mono">LINKS RÁPIDOS:</span>
            <a
              href={PORTFOLIO_DATA.profile.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-1.5 hover:text-slate-900 dark:hover:text-white transition"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href={PORTFOLIO_DATA.profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-1.5 hover:text-sky-600 dark:hover:text-sky-400 transition"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
            <a
              href={PORTFOLIO_DATA.profile.credly}
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-1.5 hover:text-amber-600 dark:hover:text-amber-400 transition"
            >
              <Award className="w-4 h-4" />
              <span>Credly (9 Badges Oficiais)</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
