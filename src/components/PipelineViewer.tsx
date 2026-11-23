import { useState } from 'react';
import { GitCommit, ShieldCheck, Box, Database, RefreshCw, Cpu, Activity, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

const stepIcons = [
  GitCommit,
  ShieldCheck,
  Box,
  Database,
  RefreshCw,
  Cpu,
  Activity,
];

export default function PipelineViewer() {
  const [activeStepId, setActiveStepId] = useState<number>(3); // Default to Docker Build
  const currentStep = PORTFOLIO_DATA.pipelineSteps.find((s) => s.id === activeStepId) || PORTFOLIO_DATA.pipelineSteps[0];
  const CurrentIcon = stepIcons[currentStep.id - 1] || Activity;

  return (
    <section id="pipeline" className="py-12 border-t border-slate-200 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 text-xs font-mono text-sky-700 dark:text-sky-400 bg-sky-500/10 dark:bg-sky-950/40 px-3 py-1 rounded-full border border-sky-500/30 mb-2">
            <RefreshCw className="w-3.5 h-3.5 animate-spin" />
            <span>ESTEIRA DE ENTREGA CONTÍNUA & GITOPS</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">Pipeline de Automação & DevSecOps</h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">
            Fluxo arquitetural padronizado desde o commit declarativo até o deploy seguro e monitorado no cluster Oracle Cloud.
          </p>
        </div>

        {/* Pipeline Horizontal Stepper */}
        <div className="overflow-x-auto pb-4">
          <div className="min-w-[760px] flex items-center justify-between relative px-2">
            {/* Connecting line */}
            <div className="absolute left-6 right-6 top-1/2 -translate-y-1/2 h-0.5 bg-slate-200 dark:bg-slate-800 -z-0" />

            {PORTFOLIO_DATA.pipelineSteps.map((step, idx) => {
              const Icon = stepIcons[idx] || Activity;
              const isActive = step.id === activeStepId;
              const isPast = step.id < activeStepId;

              return (
                <div key={step.id} className="relative z-10 flex flex-col items-center">
                  <button
                    onClick={() => setActiveStepId(step.id)}
                    className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                      isActive
                        ? 'bg-emerald-500 text-slate-950 scale-110 shadow-lg shadow-emerald-500/30 ring-4 ring-emerald-500/20'
                        : isPast
                        ? 'bg-white dark:bg-slate-900 border border-emerald-500/50 text-emerald-600 dark:text-emerald-400 shadow-sm hover:scale-105'
                        : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-700 hover:text-slate-800 dark:hover:text-slate-200 shadow-sm'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </button>
                  <div className="mt-2 text-center">
                    <span className="block text-[11px] font-mono text-slate-500 dark:text-slate-400 font-semibold">{step.phase}</span>
                    <span className={`block text-xs font-medium truncate max-w-[90px] ${isActive ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-500'}`}>
                      {step.name}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Step Detailed View Card */}
        <div className="mt-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 p-6 sm:p-8 shadow-xl backdrop-blur-md">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-5">
            <div className="flex items-center space-x-3.5">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                <CurrentIcon className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-wider">
                  Etapa {currentStep.id} de {PORTFOLIO_DATA.pipelineSteps.length} • {currentStep.phase}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-0.5">{currentStep.name}</h3>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400">Ferramenta / Padrão:</span>
              <span className="px-3 py-1 rounded-lg text-xs font-mono font-semibold bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sky-700 dark:text-sky-300">
                {currentStep.tool}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-5">
            <div className="md:col-span-8 space-y-3">
              <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-200 uppercase tracking-wider font-mono">Descrição Técnica:</h4>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                {currentStep.description}
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <div className="inline-flex items-center space-x-1.5 text-xs font-mono text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 dark:bg-emerald-950/40 px-2.5 py-1 rounded border border-emerald-500/30">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Automação Declarativa</span>
                </div>
                <div className="inline-flex items-center space-x-1.5 text-xs font-mono text-sky-700 dark:text-sky-400 bg-sky-500/10 dark:bg-sky-950/40 px-2.5 py-1 rounded border border-sky-500/30">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Zero Intervenção Manual</span>
                </div>
                <div className="inline-flex items-center space-x-1.5 text-xs font-mono text-amber-700 dark:text-amber-400 bg-amber-500/10 dark:bg-amber-950/40 px-2.5 py-1 rounded border border-amber-500/30">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Auditabilidade Total</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-4 rounded-xl bg-slate-50 dark:bg-black/40 border border-slate-200 dark:border-slate-800/80 p-4 font-mono text-xs text-slate-700 dark:text-slate-300 space-y-2">
              <div className="text-[11px] text-slate-500 dark:text-slate-400 font-bold border-b border-slate-200 dark:border-slate-800 pb-1">
                // Pipeline Trigger Spec
              </div>
              <div className="text-emerald-600 dark:text-emerald-400 font-semibold">trigger: push.branches = [&apos;main&apos;]</div>
              <div className="text-sky-700 dark:text-sky-300">runner: ubuntu-latest / arm64-oci</div>
              <div className="text-slate-500 dark:text-slate-400">compliance: strict-security-check</div>
              <div className="text-amber-600 dark:text-amber-400">alerting: webhook-ops-channel</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
