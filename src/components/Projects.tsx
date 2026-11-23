import { useState } from 'react';
import { Layers, Github, ExternalLink, Activity, Server } from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredProjects = activeFilter === 'all'
    ? PORTFOLIO_DATA.projects
    : PORTFOLIO_DATA.projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-16 border-t border-slate-200 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center space-x-2 text-xs font-mono text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 dark:bg-emerald-950/40 px-3 py-1 rounded-full border border-emerald-500/30 mb-2">
              <Layers className="w-3.5 h-3.5" />
              <span>INFRAESTRUTURA COMO CÓDIGO & SISTEMAS</span>
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">Projetos & Repositórios de Destaque</h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
              Soluções reais desenvolvidas em IaC declarativo, observabilidade contínua e arquiteturas resilientes.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-200/70 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-xl">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition ${
                activeFilter === 'all'
                  ? 'bg-emerald-500 text-slate-950 font-bold shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Todos ({PORTFOLIO_DATA.projects.length})
            </button>
            <button
              onClick={() => setActiveFilter('cloud')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition ${
                activeFilter === 'cloud'
                  ? 'bg-emerald-500 text-slate-950 font-bold shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Cloud & IaC
            </button>
            <button
              onClick={() => setActiveFilter('observability')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition ${
                activeFilter === 'observability'
                  ? 'bg-emerald-500 text-slate-950 font-bold shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Observabilidade
            </button>
            <button
              onClick={() => setActiveFilter('distributed')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition ${
                activeFilter === 'distributed'
                  ? 'bg-emerald-500 text-slate-950 font-bold shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Sistemas Distribuídos
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project: Project) => (
            <div
              key={project.id}
              className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-50/80 dark:hover:bg-slate-900/90 transition-all p-6 flex flex-col justify-between group shadow-sm"
            >
              <div>
                {/* Header: Category & Status */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-sky-700 dark:text-sky-400 font-semibold">
                    {project.categoryLabel}
                  </span>
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                      project.status === 'Production'
                        ? 'bg-emerald-500/10 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border-emerald-500/30'
                        : 'bg-amber-500/10 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 border-amber-500/30'
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm mt-2 leading-relaxed">
                  {project.description}
                </p>

                {/* Highlight Metric */}
                {project.metrics && (
                  <div className="mt-3 p-2 rounded-lg bg-slate-50 dark:bg-black/40 border border-slate-200 dark:border-slate-800/80 text-[11px] font-mono text-emerald-700 dark:text-emerald-300 flex items-center space-x-1.5">
                    <Activity className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span className="truncate">{project.metrics}</span>
                  </div>
                )}

                {/* Architecture Highlights */}
                <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800/80">
                  <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 mb-1.5 font-semibold">Stack Arquitetural:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.architecture.map((tech, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer: Tags & Action Link */}
              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center space-x-1.5 text-xs text-slate-500 dark:text-slate-400 font-mono">
                  <Server className="w-3.5 h-3.5" />
                  <span>IaC Declarativo</span>
                </div>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-semibold bg-emerald-500/10 hover:bg-emerald-500 text-emerald-700 dark:text-emerald-400 hover:text-slate-950 border border-emerald-500/30 transition shadow-sm"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>Repositório</span>
                  <ExternalLink className="w-3 h-3 ml-0.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
