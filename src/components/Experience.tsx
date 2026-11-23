import { Briefcase, Calendar, MapPin, CheckCircle2, Building2, GraduationCap, Globe, TrendingUp } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-16 border-t border-slate-200 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10">
          <div className="inline-flex items-center space-x-2 text-xs font-mono text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 dark:bg-emerald-950/40 px-3 py-1 rounded-full border border-emerald-500/30 mb-2">
            <Briefcase className="w-3.5 h-3.5" />
            <span>TRAJETÓRIA PROFISSIONAL & IMPACTO</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">Experiência Corporativa em Alta Criticidade</h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
            Histórico comprovado em sustentação 24/7, modernização de infraestrutura legada e governança ITIL com rápido reconhecimento interno.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {PORTFOLIO_DATA.experience.map((exp, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-6 sm:p-8 hover:border-slate-300 dark:hover:border-slate-700 transition relative overflow-hidden shadow-sm"
            >
              {/* Highlight ribbon accent */}
              <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-emerald-500 to-sky-500" />

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-slate-200 dark:border-slate-800 pb-4">
                <div>
                  <div className="flex items-center space-x-2 text-emerald-700 dark:text-emerald-400 font-mono text-xs font-semibold">
                    <Building2 className="w-4 h-4" />
                    <span>{exp.company}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-1">{exp.role}</h3>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-500 dark:text-slate-400">
                  <span className="flex items-center space-x-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                    <span>{exp.period}</span>
                  </span>
                  <span>•</span>
                  <span className="flex items-center space-x-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                    <span>{exp.location}</span>
                  </span>
                </div>
              </div>

              {/* Highlight summary */}
              <div className="mt-4 p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-500/20 text-xs sm:text-sm font-medium text-emerald-800 dark:text-emerald-300">
                🎯 <span className="font-semibold">{exp.highlight}</span>
              </div>

              {/* Case 1: Nested Promotion Ladder (Gold Standard) */}
              {exp.promotions && exp.promotions.length > 0 ? (
                <div className="mt-6 space-y-6">
                  {/* Banner */}
                  <div className="p-3.5 sm:p-4 rounded-xl bg-gradient-to-r from-emerald-500/10 via-sky-500/10 to-transparent border border-emerald-500/30 flex items-center gap-3">
                    <TrendingUp className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-emerald-800 dark:text-emerald-300">
                      Trilha de Crescimento Interno: 2 Promoções Consecutivas por Mérito e Entregas Críticas
                    </span>
                  </div>

                  {/* Stepper Timeline */}
                  <div className="relative pl-6 sm:pl-8 border-l-2 border-emerald-500/30 dark:border-emerald-500/20 space-y-6 ml-3 sm:ml-4">
                    {exp.promotions.map((promo, pIdx) => {
                      const isPromotion = promo.badgeType === 'promotion';
                      return (
                        <div key={pIdx} className="relative">
                          {/* Step Marker Node */}
                          <div
                            className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold font-mono border-2 transition ${
                              isPromotion
                                ? 'bg-emerald-500 text-slate-950 border-emerald-300 ring-4 ring-emerald-500/20 shadow-sm'
                                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-300 dark:border-slate-700'
                            }`}
                          >
                            {isPromotion ? (pIdx === 0 ? '2ª' : '1ª') : '★'}
                          </div>

                          <div className="p-4 sm:p-5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80 hover:border-emerald-500/40 transition">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2.5 border-b border-slate-200 dark:border-slate-800">
                              <div className="flex flex-wrap items-center gap-2">
                                <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                                  {promo.role}
                                </h4>
                                <span
                                  className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full font-bold border ${
                                    isPromotion
                                      ? 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/30'
                                      : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700'
                                  }`}
                                >
                                  {promo.badge}
                                </span>
                              </div>

                              <span className="text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center space-x-1">
                                <Calendar className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                                <span>{promo.period}</span>
                              </span>
                            </div>

                            <p className="mt-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 italic">
                              {promo.summary}
                            </p>

                            <div className="mt-3.5 space-y-2">
                              {promo.highlights.map((item, hIdx) => (
                                <div key={hIdx} className="flex items-start space-x-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                                  <span className="leading-relaxed">{item}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ) : (
                /* Case 2: Standard Achievements list */
                exp.achievements && (
                  <div className="mt-5 space-y-2.5">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-slate-400 font-semibold">
                      Principais Entregas e Resultados:
                    </h4>
                    {exp.achievements.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                )
              )}

              {/* Tech Stack Pills */}
              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-1.5">
                {exp.techStack.map((tech, techIdx) => (
                  <span
                    key={techIdx}
                    className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Education & Academic Formation */}
        <div className="mt-14 pt-10 border-t border-slate-200 dark:border-slate-800">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 text-xs font-mono text-sky-700 dark:text-sky-400 bg-sky-500/10 dark:bg-sky-950/40 px-3 py-1 rounded-full border border-sky-500/30 mb-2">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>FORMAÇÃO ACADÊMICA & QUALIFICAÇÃO</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Educação Superior & Técnica</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
              Base acadêmica em computação e aperfeiçoamento contínuo em sistemas e infraestrutura.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PORTFOLIO_DATA.education.map((edu) => (
              <div
                key={edu.id}
                className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 hover:border-sky-500/40 transition shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-sky-500/10 text-sky-700 dark:text-sky-300 border border-sky-500/20">
                      {edu.status}
                    </span>
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400">{edu.period}</span>
                  </div>

                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mt-2">{edu.degree}</h4>
                  <div className="text-sm font-medium text-slate-700 dark:text-slate-300 mt-0.5">{edu.institution}</div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-3 leading-relaxed">{edu.details}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Idioma Pill Card */}
          <div className="mt-4 p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 flex items-center justify-between text-xs font-mono text-slate-700 dark:text-slate-300">
            <div className="flex items-center space-x-2">
              <Globe className="w-4 h-4 text-sky-600 dark:text-sky-400" />
              <span><strong>Idioma:</strong> Inglês Técnico</span>
            </div>
            <span className="text-slate-500 dark:text-slate-400 text-[11px]">
              Leitura fluente de documentações, RFCs, manuais e repositórios internacionais
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
