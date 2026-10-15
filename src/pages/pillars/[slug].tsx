import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getPillarBySlug, VISI_SECTION_DATA } from '../../lib/data/Visisection';

export const PillarDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const pillar = slug ? getPillarBySlug(slug) : undefined;

  if (!pillar) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
        <div className="w-16 h-16 rounded-2xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 mb-4 text-2xl font-mono">
          404
        </div>
        <h1 className="text-2xl md:text-3xl font-bold font-['Space_Grotesk'] text-white mb-2">
          Pilar Tidak Ditemukan
        </h1>
        <p className="text-slate-400 text-sm max-w-md mb-6">
          Pilar dengan identifier <code className="text-pink-400 bg-slate-900 px-2 py-0.5 rounded">"{slug}"</code> tidak terdaftar dalam pilar resmi Cakfest Vol.2.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold bg-[#fd47d6] text-white hover:bg-[#e034ba] transition-all shadow-lg shadow-[#fd47d6]/30"
        >
          ← Kembali ke Beranda
        </Link>
      </div>
    );
  }

  // Find other pillars for exploration
  const otherPillars = VISI_SECTION_DATA.pillars.filter((p) => p.slug !== pillar.slug);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-8 md:py-14 animate-fade-in">
      {/* Top Breadcrumb & Back Action */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-800/80">
        <button
          onClick={() => navigate('/')}
          type="button"
          className="inline-flex items-center gap-2 text-xs font-['JetBrains_Mono',monospace] font-semibold text-slate-300 hover:text-white px-3.5 py-1.5 rounded-full bg-slate-900/60 border border-slate-700/60 hover:border-[#fd47d6] transition-all cursor-pointer"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          <span>KEMBALI KE BERANDA</span>
        </button>

        <div className="flex items-center gap-2 text-xs font-['JetBrains_Mono',monospace] text-slate-400">
          <Link to="/" className="hover:text-slate-200 transition-colors">
            Cakfest
          </Link>
          <span>/</span>
          <span className="text-[#fd47d6]">Pilar</span>
          <span>/</span>
          <span className="text-white font-bold">{pillar.title}</span>
        </div>
      </div>

      {/* Main Pillar Hero Showcase Banner */}
      <section
        className="relative rounded-2xl p-6 sm:p-10 md:p-12 mb-10 overflow-hidden border backdrop-blur-xl transition-all"
        style={{
          background: `radial-gradient(ellipse at top left, ${pillar.themeColor.glow} 0%, rgba(13, 21, 44, 0.95) 60%)`,
          borderColor: pillar.themeColor.border,
          boxShadow: `0 16px 40px -10px ${pillar.themeColor.glow}`,
        }}
      >
        {/* Top Accent Line */}
        <div
          className="absolute top-0 left-0 right-0 h-1"
          style={{
            background: `linear-gradient(90deg, ${pillar.themeColor.primary}, ${pillar.themeColor.secondary})`,
          }}
        />

        <div className="max-w-3xl">
          {/* Eyebrow Tag */}
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-['JetBrains_Mono',monospace] font-bold tracking-widest uppercase mb-4 border"
            style={{
              borderColor: pillar.themeColor.primary,
              color: pillar.themeColor.primary,
              backgroundColor: pillar.themeColor.badgeBg,
            }}
          >
            <span
              className="w-2 h-2 rounded-full animate-ping"
              style={{ backgroundColor: pillar.themeColor.primary }}
            />
            <span>{pillar.badgeTag}</span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-['Space_Grotesk',sans-serif] tracking-tight mb-4">
            {pillar.title}
          </h1>

          {/* Manifesto Quote Box */}
          <blockquote className="border-l-2 pl-4 py-1.5 my-5 text-sm md:text-base italic text-slate-200 leading-relaxed font-['Aileron',sans-serif] bg-slate-900/40 rounded-r-lg"
            style={{ borderColor: pillar.themeColor.primary }}
          >
            "{pillar.manifesto}"
          </blockquote>

          {/* Full Narrative */}
          <p className="text-sm md:text-base text-slate-300 leading-relaxed font-['Aileron',sans-serif] mt-4">
            {pillar.fullDescription}
          </p>
        </div>
      </section>

      {/* Key Metrics Grid */}
      <section className="mb-10">
        <h2 className="text-xs font-mono font-bold tracking-wider text-slate-400 uppercase mb-4">
          TARGET &amp; INDIKATOR PENGGERAK
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {pillar.metrics.map((metric, idx) => (
            <div
              key={idx}
              className="bg-[#0e1638]/70 border border-slate-800 rounded-xl p-5 backdrop-blur-md"
            >
              <span className="text-xs font-mono text-slate-400 block mb-1">
                {metric.label}
              </span>
              <strong
                className="text-xl sm:text-2xl font-bold font-['Space_Grotesk']"
                style={{ color: pillar.themeColor.primary }}
              >
                {metric.value}
              </strong>
            </div>
          ))}
        </div>
      </section>

      {/* Implementation Focus Areas */}
      <section className="mb-10">
        <h2 className="text-xs font-mono font-bold tracking-wider text-slate-400 uppercase mb-4">
          FOKUS GERAKAN PILAR
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {pillar.actionPillars.map((action, idx) => (
            <div
              key={idx}
              className="bg-[#0d152c]/80 border border-[#fd47d6]/15 hover:border-[#fd47d6]/40 rounded-xl p-5 md:p-6 transition-all"
            >
              <div className="flex items-center gap-3 mb-2">
                <span
                  className="w-6 h-6 rounded-md flex items-center justify-center text-xs font-mono font-bold"
                  style={{
                    backgroundColor: pillar.themeColor.badgeBg,
                    color: pillar.themeColor.primary,
                  }}
                >
                  {idx + 1}
                </span>
                <h3 className="text-base font-bold text-white font-['Space_Grotesk']">
                  {action.title}
                </h3>
              </div>
              <p className="text-xs md:text-sm text-slate-300 leading-relaxed pl-9">
                {action.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Related Competition Branches */}
      {pillar.relatedCompetitions.length > 0 && (
        <section className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xs font-mono font-bold tracking-wider text-slate-400 uppercase">
              CABANG LOMBA TERKAIT PILAR INI
            </h2>
            <span className="text-xs text-[#fd47d6] font-mono">
              {pillar.relatedCompetitions.length} Cabang Aktif
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {pillar.relatedCompetitions.map((comp) => (
              <div
                key={comp.id}
                className="bg-[#111a3b]/80 border border-slate-700/60 rounded-xl p-5 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-slate-300 uppercase">
                    {comp.category}
                  </span>
                  <h4 className="text-lg font-bold text-white font-['Space_Grotesk'] mt-2 mb-1">
                    {comp.name}
                  </h4>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-mono">
                  <div>
                    <span className="text-slate-400 block text-[10px]">BIAYA REGISTRASI</span>
                    <strong className="text-white">{comp.registrationFee}</strong>
                  </div>
                  <div className="text-right">
                    <span className="text-slate-400 block text-[10px]">TOTAL HADIAH</span>
                    <strong className="text-[#e0ff00]">{comp.totalPrize}</strong>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Explore Other Pillars Strip */}
      <section className="pt-8 border-t border-slate-800">
        <h2 className="text-xs font-mono font-bold tracking-wider text-slate-400 uppercase mb-4 text-center">
          JELAJAHI PILAR LAINNYA
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {otherPillars.map((other) => (
            <Link
              key={other.id}
              to={`/pillars/${other.slug}`}
              className="bg-slate-900/60 hover:bg-slate-900/90 border border-slate-800 hover:border-[#fd47d6] rounded-lg p-3.5 flex items-center justify-between transition-all group"
            >
              <div>
                <span className="text-[10px] font-mono text-slate-400 block">
                  {other.badgeTag}
                </span>
                <span className="text-sm font-bold text-white group-hover:text-[#fd47d6] transition-colors font-['Space_Grotesk']">
                  {other.title}
                </span>
              </div>
              <span className="text-slate-500 group-hover:text-white transition-colors">
                →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PillarDetailPage;
