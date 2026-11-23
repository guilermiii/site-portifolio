import { Wrench, CheckCircle, Terminal, Cloud, Shield, Server, Activity, Network, Cpu } from 'lucide-react';
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
    <section id="skills" className="py-16 border-t border-slate-200 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 text-xs font-mono text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 dark:bg-emerald-950/40 px-3 py-1 rounded-full border border-emerald-500/30 mb-2">
            <Wrench className="w-3.5 h-3.5" />
            <span>ARSENAL TÉCNICO & DOMÍNIOS</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">Competências em Infraestrutura & Engenharia</h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">
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
                className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-6 hover:border-slate-300 dark:hover:border-slate-700 transition shadow-sm"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="font-bold text-base text-slate-900 dark:text-white">{skillGroup.category}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((item, itemIdx) => (
                    <span
                      key={itemIdx}
                      className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-500/30 transition"
                    >
                      <CheckCircle className="w-3 h-3 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      <span>{item}</span>
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Homelab Bare-Metal Enterprise Showcase */}
        <div className="mt-12 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-900 p-6 sm:p-8 text-white relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 blur-3xl rounded-full pointer-events-none -mr-20 -mt-20" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-sky-500/10 blur-3xl rounded-full pointer-events-none -ml-20 -mb-20" />

          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
              <div className="flex items-center space-x-3.5">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                  <Cpu className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-bold uppercase tracking-wider">
                      Laboratório Físico Bare-Metal
                    </span>
                    <span className="text-xs font-mono text-emerald-400 flex items-center space-x-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span>PROXMOX VE 8</span>
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mt-1 text-white">
                    {PORTFOLIO_DATA.homelab.server}
                  </h3>
                </div>
              </div>

              <div className="text-left md:text-right font-mono text-xs text-slate-400">
                <div>Hardware: <span className="text-slate-200 font-semibold">{PORTFOLIO_DATA.homelab.motherboard}</span></div>
                <div className="text-emerald-400 font-semibold mt-0.5">{PORTFOLIO_DATA.homelab.network}</div>
              </div>
            </div>

            {/* Hardware Specs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                <div className="text-[11px] font-mono text-slate-400">PROCESSAMENTO</div>
                <div className="text-base font-bold font-mono text-emerald-400 mt-1">Xeon E5-2682 v4</div>
                <div className="text-xs text-slate-400 mt-0.5">16 Cores / 32 Threads • 40MB Cache</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                <div className="text-[11px] font-mono text-slate-400">MEMÓRIA RAM</div>
                <div className="text-base font-bold font-mono text-sky-400 mt-1">64 GB DDR4 ECC</div>
                <div className="text-xs text-slate-400 mt-0.5">Quad-Channel Registered</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                <div className="text-[11px] font-mono text-slate-400">VIRTUALIZAÇÃO</div>
                <div className="text-base font-bold font-mono text-amber-400 mt-1">Proxmox VE 8.x</div>
                <div className="text-xs text-slate-400 mt-0.5">Kernel 6.8 PVE • KVM & LXC</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                <div className="text-[11px] font-mono text-slate-400">PROPÓSITO & SRE</div>
                <div className="text-base font-bold font-mono text-purple-400 mt-1">Stress & Resiliência</div>
                <div className="text-xs text-slate-400 mt-0.5">Chaos Engineering & K3s</div>
              </div>
            </div>

            {/* Purpose & Workloads */}
            <div className="mt-6 pt-5 border-t border-slate-800 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div className="space-y-1.5 max-w-2xl">
                <div className="text-xs font-mono font-semibold text-slate-300">
                  🎯 Workloads & Práticas Executadas no Laboratório:
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  {PORTFOLIO_DATA.homelab.workloads.map((wl, wIdx) => (
                    <span
                      key={wIdx}
                      className="text-xs font-mono px-3 py-1 rounded-lg bg-slate-800/90 border border-slate-700/80 text-slate-300 flex items-center space-x-1.5"
                    >
                      <CheckCircle className="w-3 h-3 text-emerald-400 shrink-0" />
                      <span>{wl}</span>
                    </span>
                  ))}
                </div>
              </div>

              <div className="text-xs font-mono text-slate-300 italic bg-slate-950/60 p-3.5 rounded-xl border border-slate-800 lg:max-w-md">
                &ldquo;{PORTFOLIO_DATA.homelab.purpose}&rdquo;
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
