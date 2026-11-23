import { useState } from 'react';
import { Mail, Linkedin, Github, Download, Copy, Check, MessageSquare, Terminal } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-16 border-t border-slate-200 dark:border-slate-800/80 bg-gradient-to-b from-transparent to-slate-100/60 dark:to-[#05080e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/60 p-8 sm:p-12 relative overflow-hidden shadow-xl backdrop-blur-md">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center space-x-2 text-xs font-mono text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 dark:bg-emerald-950/40 px-3 py-1 rounded-full border border-emerald-500/30">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>COMUNICAÇÃO DIRETA & CONEXÃO</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
                Pronto para Elevar a Confiabilidade da sua Infraestrutura?
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                Estou disponível para atuar em desafios de alta complexidade em Engenharia de DevOps,
                SRE, arquitetura na Oracle Cloud (OCI) / AWS e automação com Kubernetes e Terraform.
              </p>

              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href={`mailto:${PORTFOLIO_DATA.profile.email}`}
                  className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl font-semibold text-sm bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition shadow-lg shadow-emerald-500/20"
                >
                  <Mail className="w-4 h-4" />
                  <span>Enviar Mensagem por E-mail</span>
                </a>

                <button
                  onClick={copyEmail}
                  className="inline-flex items-center space-x-2 px-4 py-3 rounded-xl font-mono text-sm bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 transition shadow-sm"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? 'E-mail Copiado!' : PORTFOLIO_DATA.profile.email}</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
              {/* LinkedIn Card */}
              <a
                href={PORTFOLIO_DATA.profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 hover:border-sky-500/40 hover:bg-white dark:hover:bg-slate-900 transition flex flex-col justify-between group shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <Linkedin className="w-5 h-5 text-sky-600 dark:text-sky-400" />
                  <span className="text-[10px] text-slate-500">Perfil Oficial</span>
                </div>
                <div className="mt-3">
                  <div className="font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition">LinkedIn</div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 truncate">guilherme--desouza</div>
                </div>
              </a>

              {/* GitHub Card */}
              <a
                href={PORTFOLIO_DATA.profile.github}
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/40 hover:bg-white dark:hover:bg-slate-900 transition flex flex-col justify-between group shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <Github className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  <span className="text-[10px] text-slate-500">Repositórios</span>
                </div>
                <div className="mt-3">
                  <div className="font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition">GitHub</div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 truncate">github.com/guilermiii</div>
                </div>
              </a>

              {/* Resume Card */}
              <a
                href={PORTFOLIO_DATA.profile.resumePdf}
                download="curriculo-guilherme.pdf"
                className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 hover:border-amber-500/40 hover:bg-white dark:hover:bg-slate-900 transition flex flex-col justify-between group shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <Download className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                  <span className="text-[10px] text-slate-500">Download PDF</span>
                </div>
                <div className="mt-3">
                  <div className="font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition">Currículo</div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400">Versão Atualizada</div>
                </div>
              </a>

              {/* Bastion Node Status Card */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 flex flex-col justify-between shadow-sm">
                <div className="flex items-center justify-between">
                  <Terminal className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse"></span>
                </div>
                <div className="mt-3">
                  <div className="font-bold text-slate-900 dark:text-white">OCI Bastion</div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400">Zero-Trust Active</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
