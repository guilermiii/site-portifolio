import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Sparkles, CornerDownLeft, RotateCcw } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HistoryItem {
  command: string;
  output: React.ReactNode;
}

export default function InteractiveTerminal() {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      command: 'fastfetch',
      output: (
        <div className="space-y-1 font-mono text-xs">
          <div className="text-emerald-400 font-bold">guilherme@oci-bastion</div>
          <div className="text-slate-500">----------------------</div>
          <div><span className="text-sky-400">OS:</span> Linux (Debian 12 / Alpine 3.20 / Fedora 45)</div>
          <div><span className="text-sky-400">Host:</span> Oracle Cloud (ARM64 Ampere A1) + Homelab Bare-Metal X99 Xeon (Proxmox VE 8)</div>
          <div><span className="text-sky-400">Kernel:</span> 6.12.0-cloud-arm64 / Linux x86_64 PVE</div>
          <div><span className="text-sky-400">Uptime:</span> 180 days, 14 hours, 22 mins</div>
          <div><span className="text-sky-400">Roles:</span> DevOps Engineer • Site Reliability Engineer (SRE) • Infraestrutura On-Premise & Cloud</div>
          <div><span className="text-sky-400">Formação:</span> Sistemas de Informação (UNOPAR - Indo para o último período) • Técnico Informática (CEFET)</div>
          <div><span className="text-sky-400">Trajetória:</span> Unimed (2 promoções consecutivas por mérito: Auxiliar ➔ Analista de Redes ➔ Analista de TI)</div>
          <div><span className="text-sky-400">Certificações:</span> Linux Foundation LFCA (Válido até 2028), Google Cloud K8s, Cisco Cybersecurity, Oracle OCI</div>
          <div><span className="text-sky-400">Homelab:</span> Intel Xeon E5-2682v4 (16c/32t) • 64GB DDR4 ECC • X99 Bare-Metal</div>
          <div><span className="text-sky-400">SLA Alvo:</span> 99.99% • RPO: 10min (Healthcare Tier-1)</div>
          <div className="text-slate-400 pt-1">💡 Digite <span className="text-emerald-400">help</span> para ver a lista de comandos interativos.</div>
        </div>
      ),
    },
  ]);

  const [commandIndex, setCommandIndex] = useState(-1);
  const commandHistoryRef = useRef<string[]>(['fastfetch']);
  const terminalBodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [history]);

  const executeCommand = (cmd: string) => {
    const trimmed = cmd.trim();
    if (!trimmed) return;

    // Save to command history for arrow navigation
    commandHistoryRef.current.push(trimmed);
    setCommandIndex(-1);

    const parts = trimmed.split(' ');
    const mainCmd = parts[0].toLowerCase();
    const args = parts.slice(1).join(' ').toLowerCase();

    let output: React.ReactNode = null;

    switch (mainCmd) {
      case 'help':
      case '?':
        output = (
          <div className="space-y-1 text-xs font-mono text-slate-300">
            <div className="text-emerald-400 font-bold mb-1">Comandos Disponíveis:</div>
            <div><span className="text-sky-400 w-36 inline-block">fastfetch</span> : Exibe resumo e telemetria do sistema</div>
            <div><span className="text-sky-400 w-36 inline-block">homelab</span> : Exibe hardware e arquitetura do Homelab Xeon 64GB</div>
            <div><span className="text-sky-400 w-36 inline-block">kubectl get nodes</span> : Lista os nós do cluster Kubernetes OCI ARM64</div>
            <div><span className="text-sky-400 w-36 inline-block">kubectl get pods</span> : Lista pods de monitoramento e produção</div>
            <div><span className="text-sky-400 w-36 inline-block">docker ps</span> : Lista contêineres em execução no nó de produção</div>
            <div><span className="text-sky-400 w-36 inline-block">terraform plan</span> : Executa validação de plano declarativo IaC</div>
            <div><span className="text-sky-400 w-36 inline-block">projects</span> : Lista repositórios e projetos em destaque</div>
            <div><span className="text-sky-400 w-36 inline-block">skills</span> : Exibe a matriz de tecnologias e competências</div>
            <div><span className="text-sky-400 w-36 inline-block">certifications</span> : Exibe credenciais oficiais do Credly</div>
            <div><span className="text-sky-400 w-36 inline-block">cat cv</span> : Exibe resumo profissional formatado</div>
            <div><span className="text-sky-400 w-36 inline-block">whoami</span> : Exibe a identidade do perfil</div>
            <div><span className="text-sky-400 w-36 inline-block">clear</span> : Limpa a tela do terminal</div>
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      case 'whoami':
        output = (
          <div className="text-xs font-mono text-slate-300 space-y-1">
            <div>
              <span className="text-emerald-400 font-bold">Guilherme de Souza</span> (@guilermiii) — DevOps & SRE | Infraestrutura Crítica On-Premise & Cloud
            </div>
            <div className="text-slate-400">
              Estudante de Sistemas de Informação (UNOPAR - último período) • 2 promoções na Unimed por mérito • Homelab Bare-Metal Xeon 16c/32t 64GB RAM
            </div>
          </div>
        );
        break;

      case 'fastfetch':
      case 'neofetch':
        output = (
          <div className="space-y-1 font-mono text-xs">
            <div className="text-emerald-400 font-bold">guilherme@oci-bastion</div>
            <div className="text-slate-500">----------------------</div>
            <div><span className="text-sky-400">OS:</span> Linux (Debian 12 / Alpine 3.20 / Fedora 45)</div>
            <div><span className="text-sky-400">Host:</span> Oracle Cloud (ARM64 Ampere A1) + Homelab Bare-Metal X99 Xeon (Proxmox VE 8)</div>
            <div><span className="text-sky-400">Kernel:</span> 6.12.0-cloud-arm64 / Linux x86_64 PVE</div>
            <div><span className="text-sky-400">Uptime:</span> 180 days, 14 hours, 22 mins</div>
            <div><span className="text-sky-400">Roles:</span> DevOps Engineer • Site Reliability Engineer (SRE) • Infraestrutura On-Premise & Cloud</div>
            <div><span className="text-sky-400">Formação:</span> Sistemas de Informação (UNOPAR - Indo para o último período) • Técnico Informática (CEFET)</div>
            <div><span className="text-sky-400">Trajetória:</span> Unimed (2 promoções consecutivas por mérito: Auxiliar ➔ Analista de Redes ➔ Analista de TI)</div>
            <div><span className="text-sky-400">Certificações:</span> Linux Foundation LFCA (Válido até 2028), Google Cloud K8s, Cisco Cybersecurity, Oracle OCI</div>
            <div><span className="text-sky-400">Homelab:</span> Intel Xeon E5-2682v4 (16c/32t) • 64GB DDR4 ECC • X99 Bare-Metal</div>
            <div><span className="text-sky-400">SLA Alvo:</span> 99.99% • RPO: 10min (Healthcare Tier-1)</div>
          </div>
        );
        break;

      case 'homelab':
        output = (
          <div className="space-y-1.5 text-xs font-mono text-slate-300">
            <div className="text-emerald-400 font-bold">🖥️ Servidor Bare-Metal Enterprise Homelab (Proxmox VE 8)</div>
            <div className="text-slate-500">--------------------------------------------------</div>
            <div><span className="text-sky-400 w-28 inline-block">Placa-Mãe:</span> Placa-Mãe X99 Enterprise Dual/Single NVMe</div>
            <div><span className="text-sky-400 w-28 inline-block">Processador:</span> Intel Xeon E5-2682 v4 @ 3.00GHz (16 Cores / 32 Threads, 40MB Cache)</div>
            <div><span className="text-sky-400 w-28 inline-block">Memória RAM:</span> 64 GB DDR4 ECC Registered (Quad-Channel)</div>
            <div><span className="text-sky-400 w-28 inline-block">Hypervisor:</span> Proxmox VE 8.x (Kernel Linux 6.8 PVE, KVM & LXC)</div>
            <div><span className="text-sky-400 w-28 inline-block">Rede Virtual:</span> MikroTik RouterOS CHR + VLANs 802.1Q + UniFi Controller</div>
            <div><span className="text-sky-400 w-28 inline-block">Workloads:</span> Clusters K3s/Kind, Chaos Engineering, Pipelines Locais CI/CD, Stack Prometheus + Grafana</div>
            <div className="text-emerald-400/90 pt-1">
              🎯 <span className="font-semibold">Propósito:</span> Hobby e laboratório avançado de engenharia de confiabilidade (SRE), testes práticos sob estresse e validação de arquiteturas antes de deploy em nuvem.
            </div>
          </div>
        );
        break;

      case 'kubectl':
        if (args.includes('get nodes')) {
          output = (
            <div className="text-xs font-mono text-slate-300 whitespace-pre overflow-x-auto">
              <div className="text-slate-400">NAME             STATUS   ROLES           AGE    VERSION   INTERNAL-IP    OS-IMAGE</div>
              <div className="text-emerald-400">oci-arm-master   Ready    control-plane   180d   v1.31.2   10.0.10.12    Ubuntu 24.04 (aarch64)</div>
              <div className="text-emerald-400">oci-arm-worker1  Ready    worker          180d   v1.31.2   10.0.10.15    Ubuntu 24.04 (aarch64)</div>
              <div className="text-emerald-400">oci-arm-worker2  Ready    worker          180d   v1.31.2   10.0.10.18    Ubuntu 24.04 (aarch64)</div>
            </div>
          );
        } else if (args.includes('get pods')) {
          output = (
            <div className="text-xs font-mono text-slate-300 whitespace-pre overflow-x-auto">
              <div className="text-slate-400">NAMESPACE     NAME                               READY   STATUS    RESTARTS   AGE</div>
              <div className="text-emerald-300">production    oci-frontend-77f6b9-4x2kl          1/1     Running   0          41m</div>
              <div className="text-emerald-300">production    oci-backend-api-5c9df-8z9pm        1/1     Running   0          41m</div>
              <div className="text-emerald-300">production    redis-cache-cluster-0              1/1     Running   0          41m</div>
              <div className="text-emerald-300">monitoring    prometheus-server-85cd9-2vmnx      1/1     Running   0          41m</div>
              <div className="text-emerald-300">monitoring    redis-exporter-6bbd7-pl99s         1/1     Running   0          41m</div>
            </div>
          );
        } else {
          output = (
            <div className="text-xs font-mono text-yellow-400">
              Uso sugerido: <span className="text-emerald-400">kubectl get nodes</span> ou <span className="text-emerald-400">kubectl get pods</span>
            </div>
          );
        }
        break;

      case 'docker':
        if (args.includes('ps')) {
          output = (
            <div className="text-xs font-mono text-slate-300 whitespace-pre overflow-x-auto">
              <div className="text-slate-400">CONTAINER ID   IMAGE                                     STATUS         PORTS                    NAMES</div>
              <div className="text-sky-300">612d431969c3   prom/prometheus:v3.16.0-rc.4              Up 45 mins     0.0.0.0:9090-&gt;9090/tcp   oci-prometheus</div>
              <div className="text-sky-300">b2cc1214353a   always-free-monitoring-frontend           Up 45 mins     0.0.0.0:3000-&gt;80/tcp     oci-frontend</div>
              <div className="text-sky-300">78b22dd8cac2   always-free-monitoring-backend            Up 45 mins     0.0.0.0:8000-&gt;8000/tcp   oci-backend</div>
              <div className="text-sky-300">08b6696943d0   redis:7-alpine                            Up 45 mins     6379/tcp                 oci-redis</div>
              <div className="text-sky-300">84be2c6c70fa   oliver006/redis_exporter:v1.97.0-alpine   Up 45 mins     9121/tcp                 oci-redis-exporter</div>
            </div>
          );
        } else {
          output = <div className="text-xs font-mono text-yellow-400">Tente executar: docker ps</div>;
        }
        break;

      case 'terraform':
        output = (
          <div className="text-xs font-mono space-y-1">
            <div className="text-slate-400">Initializing the backend... S3 State Lock active.</div>
            <div className="text-slate-400">Refreshing state... [id=oci_core_vcn.k8s_vcn]</div>
            <div className="text-emerald-400 font-bold pt-1">
              No changes. Your infrastructure matches the declarative configuration.
            </div>
            <div className="text-slate-300">Plan: 0 to add, 0 to change, 0 to destroy.</div>
          </div>
        );
        break;

      case 'projects':
        output = (
          <div className="space-y-2 text-xs font-mono">
            <div className="text-emerald-400 font-bold">Repositórios de Destaque:</div>
            {PORTFOLIO_DATA.projects.map((p) => (
              <div key={p.id} className="border-l-2 border-emerald-500/40 pl-2">
                <div className="text-slate-200 font-bold">{p.title}</div>
                <div className="text-slate-400">{p.description}</div>
                <a href={p.githubUrl} target="_blank" rel="noreferrer" className="text-sky-400 underline hover:text-sky-300">
                  {p.githubUrl}
                </a>
              </div>
            ))}
          </div>
        );
        break;

      case 'skills':
        output = (
          <div className="space-y-2 text-xs font-mono">
            <div className="text-emerald-400 font-bold">Matriz de Competências:</div>
            {PORTFOLIO_DATA.skills.map((s, idx) => (
              <div key={idx}>
                <span className="text-sky-400 font-bold">{s.category}:</span>{' '}
                <span className="text-slate-300">{s.items.join(' • ')}</span>
              </div>
            ))}
          </div>
        );
        break;

      case 'certifications':
        const official = PORTFOLIO_DATA.certifications.filter((c) => c.type === 'certification');
        const badges = PORTFOLIO_DATA.certifications.filter((c) => c.type === 'skill_badge');

        output = (
          <div className="space-y-3 text-xs font-mono">
            <div>
              <div className="text-emerald-400 font-bold mb-1">🛡️ Certificações Oficiais da Indústria (Exames Formais):</div>
              <div className="space-y-1 pl-2 border-l border-emerald-500/30">
                {official.map((c) => (
                  <div key={c.id} className="text-slate-300">
                    <span className="text-emerald-400 font-bold">[{c.issuer}]</span> {c.title}{' '}
                    <span className="text-slate-500">({c.date})</span>
                    {c.validity && <span className="text-emerald-300 text-[11px] ml-1.5">• {c.validity}</span>}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="text-sky-400 font-bold mb-1">⚡ Skill Badges & Laboratórios Práticos (Hands-On):</div>
              <div className="space-y-1 pl-2 border-l border-sky-500/30">
                {badges.map((b) => (
                  <div key={b.id} className="text-slate-300">
                    <span className="text-sky-400 font-bold">[{b.issuer}]</span> {b.title}{' '}
                    <span className="text-slate-500">({b.date})</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
        break;

      case 'cat':
        if (args.includes('cv') || args.includes('resume')) {
          output = (
            <div className="text-xs font-mono space-y-1 text-slate-300">
              <div className="text-emerald-400 font-bold">GUILHERME DE SOUZA MIZAEL DE MORAIS — CURRÍCULO EXECUTIVO</div>
              <div>Cargo: DevOps Engineer | SRE | Infraestrutura Crítica On-Premise & Cloud</div>
              <div>Localização: Campo Belo – MG (Disponível: Presencial ou Remoto • Mudança e Início Imediato)</div>
              <div>Contato: guisouzaskill@gmail.com • LinkedIn: guilherme--desouza • GitHub: guilermiii</div>
              <div>Formação: Bacharelado em Sistemas de Informação (UNOPAR - Indo para o último período) | Técnico em Informática (CEFET)</div>
              <div className="text-slate-400 pt-1">
                Especialista em sustentação de ambientes hospitalares 24/7 (140+ prestadores) com histórico de 2 promoções consecutivas por mérito na Unimed.
                Redução comprovada de RPO de 24h para 10 min, Veeam Backup, virtualização Proxmox VE / VMware / Hyper-V,
                redes MikroTik / UniFi, homelab Xeon X99 16c/32t 64GB e automação declarativa com Terraform, Kubernetes e Oracle Cloud.
              </div>
              <div className="pt-1 text-emerald-400 font-semibold">
                📍 Disponível para atuação presencial ou remota, com total disponibilidade para mudança e início imediato.
              </div>
            </div>
          );
        } else {
          output = <div className="text-xs font-mono text-yellow-400">Tente: cat cv</div>;
        }
        break;

      default:
        output = (
          <div className="text-xs font-mono text-red-400">
            Comando não reconhecido: &apos;{trimmed}&apos;. Digite <span className="text-emerald-400 font-bold">help</span> para ver os comandos válidos.
          </div>
        );
    }

    setHistory((prev) => [...prev, { command: trimmed, output }]);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      executeCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistoryRef.current.length > 0) {
        const nextIdx = commandIndex === -1 ? commandHistoryRef.current.length - 1 : Math.max(0, commandIndex - 1);
        setCommandIndex(nextIdx);
        setInputVal(commandHistoryRef.current[nextIdx]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (commandIndex !== -1) {
        const nextIdx = commandIndex + 1;
        if (nextIdx < commandHistoryRef.current.length) {
          setCommandIndex(nextIdx);
          setInputVal(commandHistoryRef.current[nextIdx]);
        } else {
          setCommandIndex(-1);
          setInputVal('');
        }
      }
    }
  };

  const quickCommands = [
    'help',
    'fastfetch',
    'homelab',
    'kubectl get nodes',
    'docker ps',
    'terraform plan',
    'projects',
    'skills',
    'cat cv',
    'clear',
  ];

  return (
    <section id="terminal" className="py-12 border-t border-slate-200 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-6 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <div className="inline-flex items-center space-x-2 text-xs font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 dark:bg-emerald-950/40 px-3 py-1 rounded-full border border-emerald-500/30 mb-2">
              <TerminalIcon className="w-3.5 h-3.5" />
              <span>TERMINAL INTERATIVO AO VIVO</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">CLI de Simulação de Infraestrutura</h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
              Explore comandos simulados de orquestração Kubernetes, planos Terraform, telemetria e contêineres Docker.
            </p>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => {
                setHistory([]);
                executeCommand('fastfetch');
              }}
              className="inline-flex items-center space-x-1.5 text-xs font-mono px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white shadow-sm transition"
            >
              <RotateCcw className="w-3 h-3 text-slate-400" />
              <span>Resetar Terminal</span>
            </button>
          </div>
        </div>

        {/* Quick Command Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="text-[11px] font-mono text-slate-500 flex items-center space-x-1 mr-1">
            <Sparkles className="w-3 h-3 text-amber-500 dark:text-amber-400" />
            <span>Ações Rápidas:</span>
          </span>
          {quickCommands.map((cmd) => (
            <button
              key={cmd}
              onClick={() => executeCommand(cmd)}
              className="px-2.5 py-1 rounded-md text-xs font-mono bg-white dark:bg-slate-900/90 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/40 shadow-sm transition"
            >
              {cmd}
            </button>
          ))}
        </div>

        {/* Terminal Window Box */}
        <div
          onClick={() => inputRef.current?.focus()}
          className="rounded-2xl border border-slate-300 dark:border-slate-800 bg-[#070b12] shadow-2xl overflow-hidden cursor-text"
        >
          {/* Terminal Titlebar */}
          <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900/90 border-b border-slate-800">
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
              <span className="ml-2 text-xs font-mono text-slate-400">guilherme@oci-bastion:~ (zsh)</span>
            </div>
            <div className="text-[11px] font-mono text-slate-500 hidden sm:block">
              UTF-8 • aarch64 • session #0412
            </div>
          </div>

          {/* Terminal Content Body */}
          <div
            ref={terminalBodyRef}
            className="p-4 sm:p-6 min-h-[340px] max-h-[480px] overflow-y-auto space-y-4 font-mono text-xs sm:text-sm"
          >
            {history.map((item, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex items-center space-x-2 text-slate-200">
                  <span className="text-emerald-400 font-bold">guilherme@oci-bastion:~$</span>
                  <span className="text-white">{item.command}</span>
                </div>
                <div className="text-slate-300 pl-4">{item.output}</div>
              </div>
            ))}

            {/* Input Line */}
            <div className="flex items-center space-x-2 pt-1">
              <span className="text-emerald-400 font-bold whitespace-nowrap">guilherme@oci-bastion:~$</span>
              <div className="relative flex-1 flex items-center">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Digite um comando (ex: help, fastfetch, kubectl get nodes)..."
                  className="w-full bg-transparent text-white font-mono text-xs sm:text-sm outline-none border-none focus:ring-0 p-0 placeholder-slate-600"
                  autoCapitalize="none"
                  autoComplete="off"
                  spellCheck="false"
                />
                <button
                  onClick={() => executeCommand(inputVal)}
                  aria-label="Executar comando"
                  className="p-1 text-slate-500 hover:text-emerald-400 transition"
                >
                  <CornerDownLeft className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
