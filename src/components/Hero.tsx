import { Terminal, Shield, ArrowRight, Github, Linkedin, Award, Server, Activity, Cpu, Mail } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Hero() {
  return (
    <section id="overview" className="relative pt-12 pb-16 overflow-hidden">
      {/* Background Glow Accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-emerald-500/10 via-sky-500/5 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Copy */}
          <div className="lg:col-span-7 space-y-6">
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
              <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
                Olá, sou o <span className="font-semibold text-slate-900 dark:text-white">{PORTFOLIO_DATA.profile.name}</span>.
                Estudante de Sistemas de Informação (indo para o último período), entusiasta de DevOps e SRE com sólida experiência em ambientes críticos de infraestrutura On-Premise e telecomunicações.
                Tenho alta proficiência técnica com solidez garantida por estudos contínuos. Preparado tanto para sustentar o legado quanto para arquitetar a infraestrutura moderna, habituado a atuar com alta confiabilidade sob pressão 24/7.
              </p>
            </div>

            {/* Quick Metrics Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
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

          {/* Right Column: Live Infrastructure Node Status Widget */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/80 p-5 shadow-2xl backdrop-blur-sm relative space-y-4">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
                <div className="flex items-center space-x-2.5">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse"></div>
                  <span className="text-xs font-mono font-semibold text-slate-800 dark:text-slate-200">CLUSTER OCI & PROXMOX NODES</span>
                </div>
                <span className="text-[11px] font-mono text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 dark:bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/20">
                  HEALTH: OK
                </span>
              </div>

              {/* Node List */}
              <div className="space-y-2.5 text-xs font-mono">
                {/* Node 1 */}
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center space-x-2.5">
                    <Server className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <div>
                      <div className="font-semibold text-slate-800 dark:text-slate-200">oci-ampere-k8s-master</div>
                      <div className="text-[10px] text-slate-500 dark:text-slate-400">ARM64 Ampere A1 • 4 OCPUs • 24GB</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold">READY</span>
                    <div className="text-[10px] text-slate-400 dark:text-slate-500">load: 0.18</div>
                  </div>
                </div>

                {/* Node 2 */}
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center space-x-2.5">
                    <Activity className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                    <div>
                      <div className="font-semibold text-slate-800 dark:text-slate-200">oci-monitoring-frontend</div>
                      <div className="text-[10px] text-slate-500 dark:text-slate-400">FastAPI + Redis 7 + Prometheus</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-sky-600 dark:text-sky-400 font-bold">&lt; 3ms</span>
                    <div className="text-[10px] text-slate-400 dark:text-slate-500">cache hit 99.4%</div>
                  </div>
                </div>

                {/* Node 3 */}
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center space-x-2.5">
                    <Cpu className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                    <div>
                      <div className="font-semibold text-slate-800 dark:text-slate-200">pve-homelab-x99-server</div>
                      <div className="text-[10px] text-slate-500 dark:text-slate-400">Intel Xeon E5-2682v4 (16c/32t) • 64GB DDR4 ECC</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold">ONLINE</span>
                    <div className="text-[10px] text-slate-400 dark:text-slate-500">Proxmox VE 8 • K3s Lab</div>
                  </div>
                </div>
              </div>

              {/* Terminal Quick Peek Preview */}
              <div className="rounded-xl bg-[#070b12] p-3.5 border border-slate-300 dark:border-slate-800/80 font-mono text-xs text-slate-300">
                <div className="flex items-center space-x-1.5 text-slate-400 text-[10px] pb-1 border-b border-slate-800">
                  <span className="w-2 h-2 rounded-full bg-red-500/80"></span>
                  <span className="w-2 h-2 rounded-full bg-yellow-500/80"></span>
                  <span className="w-2 h-2 rounded-full bg-green-500/80"></span>
                  <span className="ml-2">bash - session</span>
                </div>
                <div className="pt-2 text-emerald-400">$ kubectl get nodes -o wide</div>
                <div className="text-slate-400 text-[11px] mt-1 overflow-x-auto whitespace-pre">
NAME            STATUS   ROLES           AGE    VERSION
oci-arm-k8s-01  Ready    control-plane   180d   v1.31.2
oci-arm-k8s-02  Ready    worker          180d   v1.31.2
                </div>
                <div className="pt-2 text-emerald-400">$ terraform plan -compact-warnings</div>
                <div className="text-emerald-300 text-[11px] mt-0.5">
Plan: 0 to add, 0 to change, 0 to destroy. Infrastructure up-to-date.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
