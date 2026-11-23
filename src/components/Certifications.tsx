import { Award, ExternalLink, ShieldCheck, CheckCircle2, Calendar } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Certifications() {
  const getIssuerBadgeColor = (issuer: string) => {
    if (issuer.includes('Linux Foundation')) {
      return 'bg-emerald-500/10 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400 border-emerald-500/30';
    }
    if (issuer.includes('Google Cloud')) {
      return 'bg-sky-500/10 dark:bg-sky-950/50 text-sky-700 dark:text-sky-400 border-sky-500/30';
    }
    if (issuer.includes('Cisco')) {
      return 'bg-blue-500/10 dark:bg-blue-950/50 text-blue-700 dark:text-blue-400 border-blue-500/30';
    }
    return 'bg-amber-500/10 dark:bg-amber-950/50 text-amber-700 dark:text-amber-400 border-amber-500/30';
  };

  return (
    <section id="certifications" className="py-16 border-t border-slate-200 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center space-x-2 text-xs font-mono text-amber-700 dark:text-amber-400 bg-amber-500/10 dark:bg-amber-950/40 px-3 py-1 rounded-full border border-amber-500/30 mb-2">
              <Award className="w-3.5 h-3.5" />
              <span>VALIDAÇÃO PÚBLICA CREDLY (9 BADGES OFICIAIS)</span>
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">Certificações & Selos Oficiais</h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
              Credenciais técnicas emitidas pela Linux Foundation, Google Cloud, Cisco e Oracle Corporation com validação criptográfica oficial.
            </p>
          </div>

          <a
            href={PORTFOLIO_DATA.profile.credly}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-mono font-semibold bg-amber-500/10 hover:bg-amber-500 text-amber-700 dark:text-amber-300 hover:text-slate-950 border border-amber-500/30 transition shadow-sm"
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Ver Perfil Completo no Credly</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.certifications.map((cert) => (
            <div
              key={cert.id}
              className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-6 hover:border-amber-500/40 transition flex flex-col justify-between shadow-sm relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-3 gap-2">
                  <span className={`text-[11px] font-mono font-bold px-2.5 py-1 rounded border ${getIssuerBadgeColor(cert.issuer)}`}>
                    {cert.issuer}
                  </span>
                  <div className="flex items-center space-x-1 text-xs font-mono text-slate-500 dark:text-slate-400">
                    <Calendar className="w-3 h-3 text-slate-400" />
                    <span>{cert.date}</span>
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mt-1 leading-snug">
                  {cert.title}
                </h3>

                {/* Validity Pill */}
                {cert.validity && (
                  <div className="mt-2.5">
                    <span className="inline-flex items-center space-x-1 text-[11px] font-mono px-2 py-0.5 rounded-md font-semibold bg-emerald-500/10 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30">
                      <span>✓</span>
                      <span>{cert.validity}</span>
                    </span>
                  </div>
                )}

                {/* Skills verified */}
                <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800/80">
                  <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 mb-2 font-semibold">
                    Competências Validadas:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60 flex items-center space-x-1"
                      >
                        <CheckCircle2 className="w-3 h-3 text-amber-600 dark:text-amber-400" />
                        <span>{skill}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="mt-5 pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-500 dark:text-slate-400 text-[11px]">ID: {cert.code}</span>
                <a
                  href={cert.credlyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center space-x-1 text-amber-700 dark:text-amber-400 hover:text-amber-800 dark:hover:text-amber-300 font-semibold transition"
                >
                  <span>Verificar no Credly</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
