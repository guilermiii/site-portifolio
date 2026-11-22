import { Award, ExternalLink, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Certifications() {
  return (
    <section id="certifications" className="py-16 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center space-x-2 text-xs font-mono text-amber-400 bg-amber-950/40 px-3 py-1 rounded-full border border-amber-500/20 mb-2">
              <Award className="w-3.5 h-3.5" />
              <span>VALIDAÇÃO PÚBLICA CREDLY</span>
            </div>
            <h2 className="text-3xl font-extrabold text-white">Certificações Oficiais</h2>
            <p className="text-slate-400 text-sm mt-1">
              Credenciais técnicas emitidas pela Linux Foundation e Oracle Corporation com validação criptográfica.
            </p>
          </div>

          <a
            href={PORTFOLIO_DATA.profile.credly}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-mono font-semibold bg-amber-500/10 hover:bg-amber-500 text-amber-300 hover:text-slate-950 border border-amber-500/30 transition shadow-sm"
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Ver Todas no Credly Oficial</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PORTFOLIO_DATA.certifications.map((cert) => (
            <div
              key={cert.id}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-7 hover:border-amber-500/30 transition flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-amber-950/50 text-amber-400 border border-amber-500/30">
                    {cert.issuer}
                  </span>
                  <span className="text-xs font-mono text-slate-500">Emitido: {cert.date}</span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white mt-1">
                  {cert.title}
                </h3>

                {/* Skills verified */}
                <div className="mt-4 pt-3 border-t border-slate-800">
                  <div className="text-[11px] font-mono text-slate-400 mb-2 font-semibold">
                    Competências Validadas:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-slate-800 text-slate-300 border border-slate-700/60 flex items-center space-x-1"
                      >
                        <CheckCircle2 className="w-3 h-3 text-amber-400" />
                        <span>{skill}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-500">ID: {cert.code}</span>
                <a
                  href={cert.credlyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center space-x-1.5 text-xs font-mono text-amber-400 hover:text-amber-300 transition"
                >
                  <span>Verificar Certificado</span>
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
