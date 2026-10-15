import paperTexture from '../../assets/paper_texture.jpg'
import type { Lomba } from '../../lib/data/lomba'

type CardLombaProps = {
  lomba: Lomba
  onRegister: (lomba: Lomba) => void
  onBooklet: (lomba: Lomba) => void
}

function CardLomba({ lomba, onRegister, onBooklet }: CardLombaProps) {
  return (
    <article
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-[#fbfbfb] shadow-[0_16px_36px_rgba(0,0,0,.5),0_3px_8px_rgba(0,0,0,.25)] transition duration-300 hover:-translate-y-1.5 hover:rotate-[.4deg] hover:shadow-[0_24px_50px_rgba(0,0,0,.62),0_8px_24px_rgba(253,71,214,.28)] [background-position:center] [background-size:cover]"
      style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,.45),rgba(255,255,255,.45)),url(${paperTexture})`,
        WebkitMask: 'radial-gradient(circle 16px at 0% 50%, transparent 15px, #000 16px) left, radial-gradient(circle 16px at 100% 50%, transparent 15px, #000 16px) right',
        WebkitMaskSize: '51% 100%',
        WebkitMaskRepeat: 'no-repeat',
        mask: 'radial-gradient(circle 16px at 0% 50%, transparent 15px, #000 16px) left, radial-gradient(circle 16px at 100% 50%, transparent 15px, #000 16px) right',
        maskSize: '51% 100%',
        maskRepeat: 'no-repeat',
      }}
    >
      <div className={`relative h-[155px] overflow-hidden rounded-t-2xl border-b-2 border-dashed border-[#192271]/35 bg-black ${lomba.code === 'CCC' ? 'h-[185px] max-[480px]:h-[135px]' : 'max-[480px]:h-[135px]'}`}>
        <img
          alt={lomba.imageAlt}
          className="block h-full w-full object-cover brightness-90 transition-transform duration-300 group-hover:scale-[1.04]"
          loading="lazy"
          src={lomba.image}
        />
        <div className="absolute left-2.5 top-2.5 flex items-center gap-[5px] rounded-full border border-fuchsia-400/45 bg-[#090e24]/90 px-3 py-1 text-[10px] font-extrabold text-white backdrop-blur">
          <span>{lomba.badge}</span>
        </div>
      </div>
      <div className="relative z-[2] flex flex-1 flex-col p-5 px-[22px] pb-[22px] max-[480px]:px-3.5 max-[480px]:pb-3">
        <h3 className={`mb-1 font-[Aileron] text-xl leading-[1.2] font-black tracking-[-.3px] ${lomba.code === 'MLBB' ? 'text-[#fd47d6]' : 'text-[#192271]'} max-[480px]:text-base`}>
          {lomba.name}
        </h3>
        <p className="mb-2 mt-0.5 font-[Aileron] text-[11.5px] leading-[1.35] font-extrabold tracking-wide text-[#fd47d6] uppercase max-[480px]:mb-1.5 max-[480px]:text-[11px]">
          {lomba.tagline}
        </p>
        <p className="mb-3.5 text-[13.5px] leading-relaxed font-medium text-slate-700 max-[480px]:mb-2.5 max-[480px]:text-xs max-[480px]:leading-[1.48]">
          {lomba.description}
        </p>
        <div className="mt-auto mb-3.5 grid grid-cols-2 gap-2.5 rounded-lg border border-[#192271]/[.16] border-t-2 border-t-dashed border-t-[#192271]/30 bg-white/85 p-2.5 px-3">
          <div className="flex flex-col">
            <span className="font-[Aileron] text-[10px] font-extrabold tracking-wide text-slate-500 uppercase max-[480px]:text-[8px]">TOTAL HADIAH</span>
            <strong className="font-[Aileron] text-sm font-black text-[#192271] max-[480px]:text-xs">{lomba.prize}</strong>
          </div>
          <div className="flex flex-col">
            <span className="font-[Aileron] text-[10px] font-extrabold tracking-wide text-slate-500 uppercase max-[480px]:text-[8px]">BIAYA REGISTRASI</span>
            <strong className="font-[Aileron] text-sm font-black text-[#fd47d6] max-[480px]:text-xs">{lomba.registrationFee}</strong>
          </div>
        </div>
        <div className="mt-3.5 flex w-full items-center gap-2.5 max-[499px]:flex-col max-[499px]:gap-2">
          <button
            className="inline-flex h-11 min-h-11 flex-[1.35] items-center justify-center gap-1.5 whitespace-nowrap rounded-full border-[1.5px] border-white/50 bg-[linear-gradient(135deg,#fd47d6_0%,#7c3aed_50%,#192271_100%)] px-[18px] text-xs font-extrabold tracking-[.6px] text-white uppercase shadow-[0_4px_14px_rgba(253,71,214,.4),inset_0_1px_2px_rgba(255,255,255,.6)] transition hover:-translate-y-0.5 hover:bg-[linear-gradient(135deg,#e0ff00_0%,#fd47d6_70%,#192271_100%)] hover:text-[#090e1f] hover:shadow-[0_6px_20px_rgba(224,255,0,.55)] active:scale-[.97] max-[499px]:h-12 max-[499px]:w-full"
            onClick={() => onRegister(lomba)}
            type="button"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
            DAFTAR SEKARANG
          </button>
          <button
            className="inline-flex h-11 min-h-11 flex-1 items-center justify-center gap-1.5 whitespace-nowrap rounded-full border-[1.5px] border-cyan-300/50 bg-[linear-gradient(135deg,#090e24_0%,#1e293b_60%,#0f172a_100%)] px-4 text-[11.5px] tracking-[.6px] text-slate-100 uppercase shadow-[0_4px_12px_rgba(0,0,0,.35),inset_0_1px_1px_rgba(255,255,255,.25)] transition hover:-translate-y-0.5 hover:border-white hover:bg-[linear-gradient(135deg,#00f0ff_0%,#0284c7_60%,#192271_100%)] hover:text-[#04101e] active:scale-[.97] max-[499px]:h-[42px] max-[499px]:w-full"
            onClick={() => onBooklet(lomba)}
            type="button"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
            </svg>
            BOOKLET
          </button>
        </div>
      </div>
    </article>
  )
}

export default CardLomba
