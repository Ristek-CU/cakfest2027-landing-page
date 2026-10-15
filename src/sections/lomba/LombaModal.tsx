import Modal from '../../components/Modal'
import type { LombaModalState } from '../../lib/types'

type LombaModalProps = {
  modal: LombaModalState | null
  onClose: () => void
}

function LombaModal({ modal, onClose }: LombaModalProps) {
  if (!modal) return null

  const lomba = modal.lomba
  const title = lomba
    ? `BOOKLET TEKNIS // ${lomba.code}`
    : 'BUKU PANDUAN TEKNIS RESMI & BOOKLET // CAKFEST 2027'

  return (
    <Modal onClose={onClose} title={title}>
      <div className="mb-4 flex items-start gap-4 rounded-2xl border border-purple-500/30 bg-[#0a0f1d] p-4 max-[480px]:flex-col">
        <div className="flex h-[66px] w-[58px] shrink-0 flex-col items-center justify-center rounded-[14px] border border-purple-500/45 bg-[linear-gradient(135deg,#1e3a8a_0%,#442b82_100%)] text-white shadow-[0_4px_12px_rgba(112,72,198,.3)]">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
          </svg>
          <span className="mt-[3px] font-mono text-[9px] font-extrabold tracking-wide text-cyan-300">PDF</span>
        </div>
        <div className="min-w-0">
          <h3 className="mb-1 font-[Aileron] text-[15px] font-extrabold text-white">{lomba ? lomba.name : 'Buku Pedoman Teknis & Regulasi Peserta v2.4'}</h3>
          <p className="mb-2 text-[13px] leading-relaxed text-slate-300">
            {lomba
              ? `${lomba.tagline}. ${lomba.description}`
              : 'Berisi seluruh regulasi pertandingan 6 cabor, ketentuan peserta, tata tertib panggung, sistem poin decathlon CCC, jadwal technical meeting, dan format walk-out.'}
          </p>
          {lomba && (
            <p className="mb-2 text-[13px] leading-relaxed text-slate-300">
              Hadiah {lomba.prize} · Biaya registrasi {lomba.registrationFee}
            </p>
          )}
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full border border-purple-500/25 bg-purple-500/10 px-[9px] py-[3px] font-mono text-[10px] text-cyan-300">FORMAT: PDF RESMI</span>
            <span className="rounded-full border border-purple-500/25 bg-purple-500/10 px-[9px] py-[3px] font-mono text-[10px] text-cyan-300">TERVALIDASI PANITIA</span>
          </div>
        </div>
      </div>
      <div className="mb-[18px] rounded-[14px] border border-white/10 bg-[#0d1424] px-[18px] py-3.5">
        <h4 className="mb-2 font-mono text-[11.5px] font-bold tracking-wide text-purple-200">POIN PENTING REGULASI:</h4>
        <ol className="list-decimal space-y-1 pl-[18px] text-[13.5px] leading-[1.65] text-slate-200">
          <li>Seluruh atlet dan kontingen wajib berstatus mahasiswa atau pelajar aktif yang dibuktikan dengan KTM/Kartu Pelajar yang sah.</li>
          <li>Toleransi keterlambatan kehadiran di arena pertandingan maksimal 15 menit dari jadwal rundown sebelum dinyatakan Walk-Out (W.O.).</li>
          <li>Keputusan dewan juri dan wasit bersertifikasi bersifat mutlak, independen, dan tidak dapat diganggu gugat.</li>
        </ol>
      </div>
      <div className="flex items-center justify-end gap-2.5 border-t border-white/10 pt-3">
        <button className="rounded-full border border-white/20 bg-[linear-gradient(180deg,#1e293b_0%,#0f172a_50%,#020617_100%)] px-[18px] py-2.5 text-[12.5px] font-bold text-slate-100 transition hover:bg-slate-700" onClick={onClose} type="button">Tutup</button>
        <button className="cursor-not-allowed rounded-full border border-white/35 bg-[linear-gradient(180deg,#b066ff_0%,#7c3aed_50%,#442b82_100%)] px-[22px] py-2.5 text-[12px] font-extrabold text-white opacity-60 shadow-lg" disabled title="File booklet belum disediakan di halaman ini" type="button">
          BOOKLET BELUM TERSEDIA
        </button>
      </div>
    </Modal>
  )
}

export default LombaModal
