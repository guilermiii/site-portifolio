import { Wrench, CheckCircle, Terminal, Cloud, Shield, Server, Activity, Network } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

const categoryIcons = [
  Cloud,
  Server,
  Terminal,
  Activity,
  Network,
  Shield,
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 text-xs font-mono text-emerald-400 bg-emerald-950/40 px-3 py-1 rounded-full border border-emerald-500/20 mb-2">
            <Wrench className="w-3.5 h-3.5" />
            <span>ARSENAL TÉCNICO & DOMÍNIOS</span>
          </div>
          <h2 className="text-3xl font-extrabold text-white">Competências em Infraestrutura & Engenharia</h2>
          <p className="text-slate-400 text-sm mt-2">
            Tecnologias dominadas na prática diária de sustentação de missão crítica, automação e arquiteturas em nuvem.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.skills.map((skillGroup, idx) => {
            const Icon = categoryIcons[idx] || Server;

            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-slate-700 transition"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="font-bold text-base text-white">{skillGroup.category}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((item, itemIdx) => (
                    <span
                      key={itemIdx}
                      className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-950/80 border border-slate-800 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/30 transition"
                    >
                      <CheckCircle className="w-3 h-3 text-emerald-400 shrink-0" />
                      <span>{item}</span>
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
