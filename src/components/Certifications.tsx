import { useState } from 'react';
import { Award, ExternalLink, ShieldCheck, CheckCircle2, Calendar, Sparkles, Layers } from 'lucide-react';
import { PORTFOLIO_DATA, Certification } from '../data/portfolioData';

type FilterType = 'all' | 'certification' | 'skill_badge';

export default function Certifications() {
  const [activeTab, setActiveTab] = useState<FilterType>('all');

  const officialCerts = PORTFOLIO_DATA.certifications.filter((c) => c.type === 'certification');
  const skillBadges = PORTFOLIO_DATA.certifications.filter((c) => c.type === 'skill_badge');

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

  const renderCertCard = (cert: Certification) => {
    const isCert = cert.type === 'certification';

    return (
      <div
        key={cert.id}
        className={`rounded-2xl border bg-white dark:bg-slate-900/60 p-6 transition flex flex-col justify-between shadow-sm relative group ${
          isCert
            ? 'border-emerald-500/30 dark:border-emerald-500/20 hover:border-emerald-500/60'
            : 'border-sky-500/30 dark:border-sky-500/20 hover:border-sky-500/60'
        }`}
      >
        <div>
          <div className="flex items-center justify-between mb-3 gap-2">
            <div className="flex items-center space-x-1.5 flex-wrap">
              <span className={`text-[11px] font-mono font-bold px-2.5 py-0.5 rounded border ${getIssuerBadgeColor(cert.issuer)}`}>
                {cert.issuer}
              </span>
              {cert.badgeLevel && (
                <span className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded ${
                  isCert
                    ? 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400'
                    : 'bg-sky-500/10 text-sky-700 dark:text-sky-400'
                }`}>
                  {cert.badgeLevel}
                </span>
              )}
            </div>
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
              <span className={`inline-flex items-center space-x-1 text-[11px] font-mono px-2 py-0.5 rounded-md font-semibold border ${
                cert.validity.includes('2028')
                  ? 'bg-emerald-500/15 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border-emerald-500/40'
                  : 'bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'
              }`}>
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
                  <CheckCircle2 className={`w-3 h-3 ${isCert ? 'text-emerald-600 dark:text-emerald-400' : 'text-sky-600 dark:text-sky-400'}`} />
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
            className="inline-flex items-center space-x-1 text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 font-semibold transition"
          >
            <span>Verificar no Credly</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    );
  };

  return (
    <section id="certifications" className="py-16 border-t border-slate-200 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center space-x-2 text-xs font-mono text-amber-700 dark:text-amber-400 bg-amber-500/10 dark:bg-amber-950/40 px-3 py-1 rounded-full border border-amber-500/30 mb-2">
              <Award className="w-3.5 h-3.5" />
              <span>VALIDAÇÃO PÚBLICA CREDLY (9 BADGES OFICIAIS)</span>
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">Certificações Oficiais & Skill Badges</h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
              Separação técnica entre exames formais da indústria e selos de validação prática emitidos por Linux Foundation, Google Cloud, Cisco e Oracle.
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

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition flex items-center space-x-1.5 ${
              activeTab === 'all'
                ? 'bg-slate-900 text-white dark:bg-emerald-500 dark:text-slate-950 shadow-sm'
                : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-slate-300'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Todas as Credenciais ({PORTFOLIO_DATA.certifications.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('certification')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition flex items-center space-x-1.5 ${
              activeTab === 'certification'
                ? 'bg-emerald-600 text-white dark:bg-emerald-500 dark:text-slate-950 shadow-sm'
                : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-emerald-500/40'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Certificações Oficiais ({officialCerts.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('skill_badge')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition flex items-center space-x-1.5 ${
              activeTab === 'skill_badge'
                ? 'bg-sky-600 text-white dark:bg-sky-500 dark:text-slate-950 shadow-sm'
                : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-sky-500/40'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Skill Badges Práticos ({skillBadges.length})</span>
          </button>
        </div>

        {/* Content Area */}
        <div className="space-y-12">
          {/* Section 1: Certificações Oficiais */}
          {(activeTab === 'all' || activeTab === 'certification') && (
            <div className="space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800 gap-2">
                <div className="flex items-center space-x-2.5">
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      Certificações Oficiais da Indústria
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Exames formais proctorados com emissão de títulos oficiais e códigos de validação criptográfica
                    </p>
                  </div>
                </div>
                <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30 font-bold w-fit">
                  {officialCerts.length} Exames Oficiais
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {officialCerts.map(renderCertCard)}
              </div>
            </div>
          )}

          {/* Section 2: Skill Badges & Laboratórios Práticos */}
          {(activeTab === 'all' || activeTab === 'skill_badge') && (
            <div className="space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800 gap-2">
                <div className="flex items-center space-x-2.5">
                  <div className="w-7 h-7 rounded-lg bg-sky-500/20 text-sky-600 dark:text-sky-400 flex items-center justify-center">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      Skill Badges & Laboratórios Práticos
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Validações hands-on em orquestração Kubernetes GKE, arquitetura de VPC, Load Balancing e Cibersegurança
                    </p>
                  </div>
                </div>
                <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-sky-500/10 text-sky-700 dark:text-sky-400 border border-sky-500/30 font-bold w-fit">
                  {skillBadges.length} Skill Badges
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillBadges.map(renderCertCard)}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
