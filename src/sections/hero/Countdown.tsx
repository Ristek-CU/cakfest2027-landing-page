import { useEffect, useState } from 'react'

function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  })

  useEffect(() => {
    const updateCountdown = () => {
      const target = new Date('2026-11-30T23:59:59+07:00').getTime()
      const difference = Math.max(0, target - Date.now())
      const pad = (value: number) => String(value).padStart(2, '0')

      setTimeLeft({
        days: pad(Math.floor(difference / 86_400_000)),
        hours: pad(Math.floor((difference % 86_400_000) / 3_600_000)),
        minutes: pad(Math.floor((difference % 3_600_000) / 60_000)),
        seconds: pad(Math.floor((difference % 60_000) / 1_000)),
      })
    }

    updateCountdown()
    const timer = window.setInterval(updateCountdown, 1000)
    return () => window.clearInterval(timer)
  }, [])

  return (
    <div className="relative my-4 overflow-hidden rounded-[18px] border-2 border-[#fd47d6] bg-[linear-gradient(135deg,rgba(25,34,113,.92)_0%,rgba(14,22,56,.96)_60%,rgba(68,43,130,.9)_100%)] px-5 py-4 shadow-[0_10px_35px_rgba(0,0,0,.5),0_0_30px_rgba(253,71,214,.35)] backdrop-blur-xl max-[768px]:mb-3.5 max-[768px]:rounded-xl max-[768px]:px-3 max-[768px]:py-3">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-3 border-b border-fuchsia-400/25 pb-2">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#fd47d6] bg-fuchsia-500/20 px-2.5 py-[3px]">
          <span className="h-2 w-2 animate-pulse rounded-full bg-[#e0ff00]" />
          <span className="font-[Aileron] text-[11px] font-extrabold tracking-wide text-white">COUNTDOWN MENUJU CAKFEST VOL.2</span>
        </div>
        <div className="inline-flex items-center gap-1.5 text-[11px] text-slate-200">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          <span>DEADLINE BATCH 1: <strong className="font-extrabold tracking-wide text-[#e0ff00]">30 NOV 2026</strong></span>
        </div>
      </div>
      <div
        className="my-2.5 flex items-center justify-center gap-2 max-[400px]:gap-1"
        aria-label={`${timeLeft.days} hari ${timeLeft.hours} jam ${timeLeft.minutes} menit ${timeLeft.seconds} detik`}
      >
        <div className="max-w-[90px] flex-1 rounded-xl border-[1.5px] border-lime-300/50 bg-[#080c20] px-1.5 py-2.5 text-center shadow-[inset_0_2px_6px_rgba(0,0,0,.8),0_4px_12px_rgba(0,0,0,.4)] transition hover:-translate-y-0.5 hover:border-[#e0ff00]">
          <div className="font-[Aileron] text-[clamp(30px,4.4vw,44px)] leading-none font-black tracking-wide text-white [text-shadow:0_0_12px_rgba(255,255,255,.6)] max-[400px]:text-[23px]">{timeLeft.days}</div>
          <div className="mt-1.5 font-[Aileron] text-[11px] font-extrabold tracking-[1.5px] text-[#fd47d6]">HARI</div>
        </div>
        <div className="animate-pulse select-none font-[Aileron] text-[26px] font-black text-[#fd47d6] opacity-85 max-[480px]:hidden">:</div>
        <div className="max-w-[90px] flex-1 rounded-xl border-[1.5px] border-lime-300/50 bg-[#080c20] px-1.5 py-2.5 text-center shadow-[inset_0_2px_6px_rgba(0,0,0,.8),0_4px_12px_rgba(0,0,0,.4)] transition hover:-translate-y-0.5 hover:border-[#e0ff00]">
          <div className="font-[Aileron] text-[clamp(30px,4.4vw,44px)] leading-none font-black tracking-wide text-white [text-shadow:0_0_12px_rgba(255,255,255,.6)] max-[400px]:text-[23px]">{timeLeft.hours}</div>
          <div className="mt-1.5 font-[Aileron] text-[11px] font-extrabold tracking-[1.5px] text-[#fd47d6]">JAM</div>
        </div>
        <div className="animate-pulse select-none font-[Aileron] text-[26px] font-black text-[#fd47d6] opacity-85 max-[480px]:hidden">:</div>
        <div className="max-w-[90px] flex-1 rounded-xl border-[1.5px] border-lime-300/50 bg-[#080c20] px-1.5 py-2.5 text-center shadow-[inset_0_2px_6px_rgba(0,0,0,.8),0_4px_12px_rgba(0,0,0,.4)] transition hover:-translate-y-0.5 hover:border-[#e0ff00]">
          <div className="font-[Aileron] text-[clamp(30px,4.4vw,44px)] leading-none font-black tracking-wide text-white [text-shadow:0_0_12px_rgba(255,255,255,.6)] max-[400px]:text-[23px]">{timeLeft.minutes}</div>
          <div className="mt-1.5 font-[Aileron] text-[11px] font-extrabold tracking-[1.5px] text-[#fd47d6]">MENIT</div>
        </div>
        <div className="animate-pulse select-none font-[Aileron] text-[26px] font-black text-[#fd47d6] opacity-85 max-[480px]:hidden">:</div>
        <div className="max-w-[90px] flex-1 rounded-xl border-[1.5px] border-fuchsia-400/60 bg-[#190f2d] px-1.5 py-2.5 text-center shadow-[inset_0_2px_6px_rgba(0,0,0,.8),0_4px_12px_rgba(0,0,0,.4)] transition hover:-translate-y-0.5 hover:border-[#fd47d6]">
          <div className="font-[Aileron] text-[clamp(30px,4.4vw,44px)] leading-none font-black tracking-wide text-[#e0ff00] [text-shadow:0_0_16px_rgba(224,255,0,.75)] max-[400px]:text-[23px]">{timeLeft.seconds}</div>
          <div className="mt-1.5 font-[Aileron] text-[11px] font-extrabold tracking-[1.5px] text-[#e0ff00]">DETIK</div>
        </div>
      </div>
    </div>
  )
}

export default Countdown
