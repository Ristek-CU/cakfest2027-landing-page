import { dataLomba, type Lomba } from '../../lib/data/lomba'
import CardLomba from './CardLomba'

type LombaSectionProps = {
  onRegister: (lomba: Lomba) => void
  onBooklet: (lomba: Lomba) => void
}

function LombaSection({ onRegister, onBooklet }: LombaSectionProps) {
  return (
    <section aria-labelledby="lomba-heading" className="relative scroll-mt-[84px]" id="kompetisi">
      <div className="mb-6 text-center max-[480px]:mb-4">
        <h2 className="font-[Aileron] text-[clamp(24px,2.9vw,36px)] leading-tight font-black tracking-wide text-white" id="lomba-heading">
          6 CABANG KOMPETISI CAKFEST VOL.2
        </h2>
        <p className="mx-auto mt-1.5 max-w-[680px] text-[14.5px] leading-relaxed text-slate-300 max-[480px]:text-[12.5px]">
          Pilih cabang lomba impianmu dan daftarkan tim sebelum kuota penuh.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-6 max-[1080px]:grid-cols-2 max-[1080px]:gap-5 max-[680px]:grid-cols-1 max-[680px]:gap-[18px]">
        {dataLomba.map((lomba) => (
          <CardLomba
            key={lomba.code}
            lomba={lomba}
            onBooklet={onBooklet}
            onRegister={onRegister}
          />
        ))}
      </div>
    </section>
  )
}

export default LombaSection
