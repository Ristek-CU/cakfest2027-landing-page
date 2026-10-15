import { useEffect, useState } from 'react'
import heroArtwork from '../../assets/hero_holo_visual_hd.png'
import Countdown from './Countdown'

type HeroSectionProps = {
  onOpenBooklet: () => void
}

const spectrumBars = Array.from({ length: 14 }, (_, index) => index)
const winampTracks = [
  { title: 'Cosmic Anthem (Retro Synth)', artist: "Cakfest '27 Official Soundtrack", duration: 210 },
  { title: 'Cyber Odyssey (140 BPM Breakbeat)', artist: 'Left Hand feat. Cakrawala Crew', duration: 195 },
  { title: 'Midnight Arcade (Lo-Fi Wave)', artist: 'Cakfest Chill Stage BGM', duration: 240 },
  { title: 'Arena of Champions (Eurobeat Edit)', artist: 'Main Stage Tournament Anthem', duration: 180 },
]

const playerButton =
  'flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-slate-600 bg-[linear-gradient(180deg,#f8fafc_0%,#cbd5e1_50%,#94a3b8_100%)] p-0 text-slate-800 shadow-[0_2px_4px_rgba(0,0,0,.35),inset_1px_1px_1px_white,inset_-1px_-1px_1px_#64748b] transition hover:-translate-y-px hover:bg-slate-50 active:translate-y-px disabled:cursor-default disabled:opacity-65'
const playerWindowButton =
  'flex h-[10px] w-[10px] items-center justify-center rounded-[1px] border border-[#1a2840] bg-[#2a3d5e] p-0 text-[8px] leading-[8px] text-slate-400 hover:bg-[#5b3da5] hover:text-white'

function HeroSection({ onOpenBooklet }: HeroSectionProps) {
  const [playerVisible, setPlayerVisible] = useState(true)
  const [windowShaded, setWindowShaded] = useState(false)
  const [playing, setPlaying] = useState(true)
  const [trackIndex, setTrackIndex] = useState(0)
  const [elapsed, setElapsed] = useState(102)
  const [repeat, setRepeat] = useState(true)
  const [shuffle, setShuffle] = useState(false)
  const [volume, setVolume] = useState(80)
  const [showPlaylist, setShowPlaylist] = useState(false)
  const track = winampTracks[trackIndex]

  useEffect(() => {
    if (!playing) return
    const timer = window.setInterval(() => {
      if (elapsed < track.duration) {
        setElapsed(elapsed + 1)
      } else if (repeat) {
        setElapsed(0)
      } else if (trackIndex < winampTracks.length - 1) {
        setTrackIndex(trackIndex + 1)
        setElapsed(0)
      } else {
        setPlaying(false)
      }
    }, 1000)
    return () => window.clearInterval(timer)
  }, [elapsed, playing, repeat, track.duration, trackIndex])

  const changeTrack = (direction: -1 | 1) => {
    const nextIndex = shuffle
      ? (trackIndex + 1 + Math.floor(Math.random() * (winampTracks.length - 1))) % winampTracks.length
      : (trackIndex + direction + winampTracks.length) % winampTracks.length
    setTrackIndex(nextIndex)
    setElapsed(0)
  }

  const seekTo = (value: number) => setElapsed(Math.round((value / 100) * track.duration))
  const timeLabel = `${String(Math.floor(elapsed / 60)).padStart(2, '0')}:${String(elapsed % 60).padStart(2, '0')}`
  const progress = (elapsed / track.duration) * 100

  return (
    <header className="relative mb-8 w-full overflow-hidden border-b-2 border-white/10 bg-[#080d18] max-[768px]:mb-[18px]" id="beranda">
      <div className="relative w-full overflow-hidden">
        <div className="grid min-h-[520px] w-full grid-cols-[1fr_1.05fr] bg-[#080d18] max-[960px]:grid-cols-1 max-[768px]:min-h-0">
          <div className="z-[2] flex flex-col justify-between border-r border-purple-500/15 bg-[linear-gradient(145deg,#0e071c_0%,#1b0e36_100%)] px-[clamp(24px,4.5vw,64px)] py-11 text-slate-100 max-[768px]:border-0 max-[768px]:bg-[#090e24] max-[768px]:px-3.5 max-[768px]:py-5">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 font-mono text-[11px] font-bold tracking-[.8px] text-purple-300 max-[768px]:mb-2 max-[768px]:text-[10px]">
                <span className="h-1.5 w-1.5 rounded-full bg-purple-500 shadow-[0_0_8px_#a855f7]" />
                <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="#fd47d6" strokeWidth="2.5" aria-hidden="true">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <span>CAKFEST VOL.2 // UNIVERSITAS CAKRAWALA</span>
              </div>
              <h1 className="mb-3 block font-[Aileron] text-[clamp(48px,6vw,76px)] leading-[1.05] font-black tracking-[-.5px] text-white uppercase [text-shadow:0_4px_18px_rgba(0,0,0,.85),0_0_30px_rgba(25,34,113,.8)] max-[768px]:mb-2.5 max-[768px]:text-[clamp(26px,7.6vw,36px)] max-[768px]:leading-[1.12] max-[768px]:tracking-[-.3px] max-[400px]:text-[26px]">
                CAKRAWALA<span className="inline-block font-black text-[#fd47d6] [text-shadow:0_0_28px_rgba(253,71,214,.85),0_4px_18px_rgba(0,0,0,.9)]">FESTIVAL</span>
              </h1>
              <p className="mb-6 max-w-[460px] text-[14.5px] leading-[1.68] text-slate-200 max-[768px]:mb-3.5 max-[768px]:text-[13px] max-[768px]:leading-[1.55] max-[768px]:text-slate-300">
                <strong>&quot;Turn Your Spark Into Impact&quot;</strong> — <em>&quot;Your Spark. Your Moment. Your Impact.&quot;</em>
                <br />
                Ajang kreativitas, edukasi, dan festival kompetitif terintegrasi untuk pelajar SMA/SMK/MA serta mahasiswa se-Indonesia.
              </p>
              <Countdown />
              <div className="mb-6 mt-6 flex flex-wrap items-center gap-3 max-[400px]:grid max-[400px]:grid-cols-1">
                <a className="relative inline-flex items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-full border-[1.5px] border-white/45 bg-[linear-gradient(135deg,#fd47d6_0%,#7c3aed_50%,#192271_100%)] px-6 py-3 text-[13px] font-extrabold tracking-[.8px] text-white shadow-[0_4px_18px_rgba(253,71,214,.45),inset_0_2px_3px_rgba(255,255,255,.7)] transition duration-200 before:pointer-events-none before:absolute before:inset-x-[15%] before:top-px before:h-[42%] before:rounded-full before:bg-[linear-gradient(180deg,rgba(255,255,255,.7)_0%,rgba(255,255,255,.08)_100%)] before:content-[''] hover:-translate-y-0.5 hover:border-white hover:bg-[linear-gradient(135deg,#e0ff00_0%,#fd47d6_100%)] hover:text-[#090e24] hover:shadow-[0_6px_24px_rgba(224,255,0,.6),inset_0_2px_4px_rgba(255,255,255,.9)] max-[480px]:w-full max-[480px]:px-2 max-[480px]:py-2.5 max-[480px]:text-[11px]" href="https://wa.me/62815347557" target="_blank" rel="noreferrer" title="Daftar Sekarang ke Cakfest Vol.2">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                  <span>DAFTAR SEKARANG</span>
                </a>
                <a className="relative inline-flex items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-full border-[1.5px] border-[#e0ff00] bg-[rgba(25,34,113,.8)] px-[22px] py-3 text-[12.5px] font-extrabold tracking-[.6px] text-white shadow-[0_4px_14px_rgba(0,0,0,.5),inset_0_2px_3px_rgba(255,255,255,.4)] transition duration-200 before:pointer-events-none before:absolute before:inset-x-[15%] before:top-px before:h-[42%] before:rounded-full before:bg-[linear-gradient(180deg,rgba(255,255,255,.45)_0%,rgba(255,255,255,.05)_100%)] before:content-[''] hover:-translate-y-0.5 hover:border-[#fd47d6] hover:bg-[#192271] hover:text-[#e0ff00] max-[480px]:w-full max-[480px]:px-2 max-[480px]:py-2.5 max-[480px]:text-[11px]" href="#kompetisi" title="Jelajahi 6 Cabang Kompetisi">
                  LIHAT LOMBA
                </a>
              </div>
            </div>
          </div>

          <div className="relative flex min-h-[520px] items-center justify-center overflow-hidden bg-[#090d16] max-[768px]:min-h-[360px] max-[480px]:min-h-0 max-[480px]:flex-col max-[480px]:border-t max-[480px]:border-fuchsia-400/20 max-[480px]:bg-[#080d1e] max-[480px]:px-3.5 max-[480px]:pb-[18px] max-[480px]:pt-3">
            <img src={heroArtwork} alt="Cakfest Holographic Cosmic Visual Art" className="block h-full w-full object-cover transition-transform duration-500 hover:scale-[1.02] max-[480px]:hidden" />
            <div className={`absolute left-[18px] top-4 z-10 w-80 overflow-hidden rounded-[5px] border-2 border-[#525a6b] bg-[linear-gradient(180deg,#d8dce4_0%,#b4bac6_45%,#9aa1af_100%)] font-mono shadow-[0_12px_28px_rgba(0,0,0,.75),inset_1px_1px_0_rgba(255,255,255,.9),inset_-1px_-1px_0_rgba(0,0,0,.45)] transition-[box-shadow] hover:shadow-[0_16px_36px_rgba(0,0,0,.85),0_0_16px_rgba(168,85,247,.25)] max-[768px]:w-[min(320px,calc(100%-24px))] max-[480px]:relative max-[480px]:left-auto max-[480px]:top-auto max-[480px]:w-full max-[480px]:max-w-[360px] ${windowShaded ? 'h-6' : ''} ${playerVisible ? '' : 'hidden'}`} id="winampPlayer">
              <div className="flex h-[18px] items-center justify-between border-b border-[#081224] bg-[linear-gradient(180deg,#1c3664_0%,#0e2040_50%,#162c54_100%)] px-1.5 py-0.5 max-[480px]:h-5 max-[480px]:px-2">
                <div className="flex items-center gap-[5px]">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="#fbbf24" aria-hidden="true"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
                  <span className="font-[Aileron] text-[9.5px] font-black tracking-[1.5px] text-slate-300 [text-shadow:0_1px_2px_rgba(0,0,0,.8)]">WINAMP</span>
                </div>
                <div className="flex gap-0.5">
                  <button type="button" className={playerWindowButton} title="Minimize" aria-label="Minimalkan pemutar" onClick={() => setPlayerVisible(false)}>_</button>
                  <button type="button" className={playerWindowButton} title="Windowshade Mode" aria-label={windowShaded ? 'Buka tampilan penuh' : 'Ringkas pemutar'} onClick={() => setWindowShaded((value) => !value)}>□</button>
                  <button type="button" className={`${playerWindowButton} hover:!bg-red-500`} title="Close Winamp" onClick={() => setPlayerVisible(false)}>&times;</button>
                </div>
              </div>
              {!windowShaded && (
                <>
                  <div className="flex gap-2.5 border-b border-[#8e97a8] bg-[linear-gradient(180deg,#edf1f7_0%,#d1d7e2_100%)] px-2 py-px text-[8.5px] text-slate-900 max-[480px]:hidden">
                    <span><u>F</u>ile</span><span><u>P</u>lay</span><span><u>O</u>ptions</span><span><u>V</u>iew</span><span><u>H</u>elp</span>
                  </div>
                  <div className="flex flex-col gap-1 px-1.5 pb-1.5 pt-[5px]">
                    <div className="flex items-stretch gap-1 max-[480px]:px-0.5">
                      <div className="relative flex-1 overflow-hidden rounded border-2 border-[#3e4856] bg-[radial-gradient(ellipse_at_50%_30%,#0c2b50_0%,#031024_100%)] px-1.5 py-1 shadow-[inset_2px_2px_5px_rgba(0,0,0,.8),0_1px_0_rgba(255,255,255,.4)] max-[480px]:w-full max-[480px]:px-2">
                        <div className="flex items-center justify-between gap-1.5">
                          <div className="flex items-center gap-1">
                            <span className="animate-pulse text-[8px] text-purple-500">{playing ? '▶' : 'Ⅱ'}</span>
                            <span className="font-mono text-xl leading-none tracking-wide text-white [text-shadow:0_0_8px_rgba(168,85,247,.8)] max-[480px]:text-[15px]">{timeLabel}</span>
                          </div>
                          <div className="flex flex-col text-[7px] leading-tight text-purple-500 max-[480px]:hidden">
                            <span>KBPS: <strong className="text-white">320</strong></span><span>KHZ: <strong className="text-white">44</strong></span>
                            <span className="flex items-center gap-0.5"><i className="h-[5px] w-[5px] rounded-full border border-purple-500" /><i className="-ml-1 h-[5px] w-[5px] rounded-full border border-purple-500" />STEREO</span>
                          </div>
                          <div className="flex h-[18px] items-end gap-[1.5px] pl-0.5 max-[480px]:gap-px">
                            {spectrumBars.map((bar) => <i className={`h-[3px] w-[2.5px] rounded-sm bg-[linear-gradient(180deg,#f87171_0%,#fbbf24_35%,#34d399_70%,#059669_100%)] ${playing ? ['animate-eq-1', 'animate-eq-2', 'animate-eq-3', 'animate-eq-4', 'animate-eq-5'][bar % 5] : ''} max-[480px]:w-[3px]`} key={bar} />)}
                          </div>
                        </div>
                        <div className="mt-[3px] overflow-hidden whitespace-nowrap border-t border-dotted border-purple-500/30 pt-0.5 text-[8px] tracking-[.8px] text-purple-300">
                          <div className="inline-flex animate-winamp-scroll">
                            {[0, 1].map((copy) => <span key={copy}>{`CAKFEST 2027 -- ${track.title.toUpperCase()} -- ${track.artist.toUpperCase()} -- `}&nbsp;</span>)}
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col justify-between gap-[3px] max-[480px]:hidden">
                        <button type="button" className="flex items-center justify-center rounded-sm border border-slate-500 bg-[linear-gradient(180deg,#e2e8f0_0%,#cbd5e1_60%,#94a3b8_100%)] px-1 py-0.5 text-[8px] text-slate-800 shadow-[0_1px_2px_rgba(0,0,0,.25),inset_1px_1px_0_white]" title="Eject / Next Track" aria-label="Track berikutnya" onClick={() => changeTrack(1)}><svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><polygon points="12 5 3 17 21 17" /></svg></button>
                        <button type="button" className={`flex items-center justify-center rounded-sm border px-1 py-0.5 text-[8px] shadow-[inset_1px_1px_0_rgba(255,255,255,.6)] ${repeat ? 'border-[#442b82] bg-[linear-gradient(180deg,#a855f7_0%,#7048c6_100%)] text-white shadow-[0_0_6px_rgba(168,85,247,.6)]' : 'border-slate-500 bg-[linear-gradient(180deg,#e2e8f0_0%,#cbd5e1_60%,#94a3b8_100%)] text-slate-800'}`} title="Repeat (Loop)" aria-label={`Repeat ${repeat ? 'aktif' : 'nonaktif'}`} aria-pressed={repeat} onClick={() => setRepeat((value) => !value)}><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><polyline points="17 1 21 5 17 9" /><path d="M3 11V9a4 4 0 0 1 4-4h14" /><polyline points="7 23 3 19 7 15" /><path d="M21 13v2a4 4 0 0 1-4 4H3" /></svg></button>
                        <button type="button" className={`rounded-sm border px-1 py-0.5 text-[8px] ${shuffle ? 'border-purple-900 bg-purple-500 text-white' : 'border-slate-500 bg-slate-200 text-slate-800'}`} title="Shuffle (123)" aria-label={`Shuffle ${shuffle ? 'aktif' : 'nonaktif'}`} aria-pressed={shuffle} onClick={() => setShuffle((value) => !value)}>123</button>
                      </div>
                    </div>
                    <div className="mt-px flex items-center gap-[5px] max-[480px]:hidden">
                      <div className="relative h-1.5 flex-1 rounded border border-gray-600 bg-gray-900 shadow-inner">
                        <div className="h-full rounded-sm bg-[linear-gradient(90deg,#7048c6,#a855f7)]" style={{ width: `${progress}%` }} />
                        <div className="pointer-events-none absolute -top-0.5 h-2 w-2.5 -translate-x-1/2 rounded-sm border border-slate-600 bg-[linear-gradient(180deg,#fff_0%,#cbd5e1_50%,#94a3b8_100%)] shadow-sm" style={{ left: `${progress}%` }} />
                        <input aria-label="Posisi track" className="absolute inset-x-0 -top-[5px] h-4 w-full cursor-pointer opacity-0" max="100" min="0" onChange={(event) => seekTo(Number(event.currentTarget.value))} type="range" value={progress} />
                      </div>
                      <button type="button" className="rounded-sm border border-slate-500 bg-[linear-gradient(180deg,#f1f5f9_0%,#cbd5e1_50%,#94a3b8_100%)] px-1 text-[8px] font-bold text-slate-800 shadow-[inset_1px_1px_0_white]" aria-expanded={showPlaylist} onClick={() => setShowPlaylist((value) => !value)} title="Buka playlist">PL</button>
                      <button type="button" className="rounded-sm border border-slate-500 bg-[linear-gradient(180deg,#f1f5f9_0%,#cbd5e1_50%,#94a3b8_100%)] px-1 text-[8px] font-bold text-slate-800 shadow-[inset_1px_1px_0_white]" onClick={onOpenBooklet} title="Buka booklet">BK</button>
                    </div>
                    <div className="mt-0.5 flex items-center justify-between gap-1.5 px-0.5 max-[480px]:px-1 max-[480px]:px-[10px] max-[480px]:pb-2 max-[480px]:pt-1.5">
                      <div className="flex items-center gap-1 max-[480px]:gap-[5px]">
                        <button type="button" className={playerButton} onClick={() => changeTrack(-1)} title="Previous Track" aria-label="Track sebelumnya"><svg width="9" height="9" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><polygon points="11 19 2 12 11 5 11 19" /><polygon points="22 19 13 12 22 5 22 19" /></svg></button>
                        <button type="button" className={`${playerButton} h-[22px] w-[22px] max-[480px]:h-6 max-[480px]:w-8`} onClick={() => { if (elapsed >= track.duration) setElapsed(0); setPlaying(true) }} title="Play" aria-label="Putar" disabled={playing}>{playing ? <svg width="9" height="9" viewBox="0 0 24 24" fill="#a855f7" aria-hidden="true"><rect x="6" y="4" width="4" height="16" /><rect x="14" y="4" width="4" height="16" /></svg> : <svg width="10" height="10" viewBox="0 0 24 24" fill="#a855f7" aria-hidden="true"><polygon points="5 3 19 12 5 21 5 3" /></svg>}</button>
                        <button type="button" className={playerButton} onClick={() => setPlaying(false)} title="Pause" aria-label="Jeda" disabled={!playing}><svg width="9" height="9" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect x="6" y="4" width="4" height="16" /><rect x="14" y="4" width="4" height="16" /></svg></button>
                        <button type="button" className={playerButton} onClick={() => { setPlaying(false); setElapsed(0) }} title="Stop" aria-label="Berhenti"><svg width="9" height="9" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect x="5" y="5" width="14" height="14" /></svg></button>
                        <button type="button" className={playerButton} onClick={() => changeTrack(1)} title="Next Track" aria-label="Track berikutnya"><svg width="9" height="9" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><polygon points="13 19 22 12 13 5 13 19" /><polygon points="2 19 11 12 2 5 2 19" /></svg></button>
                      </div>
                      <div className="flex items-center gap-1 text-slate-600 max-[480px]:max-w-[90px]">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" /><path d="M15.54 8.46a5 5 0 0 1 0 7.07" /></svg>
                        <div className="relative h-[5px] w-12 rounded-sm border border-gray-600 bg-gray-900 max-[480px]:w-[90px]">
                          <div className="h-full rounded-sm bg-[linear-gradient(90deg,#10b981_0%,#fbbf24_70%,#ef4444_100%)]" style={{ width: `${volume}%` }} />
                          <input aria-label="Volume" className="absolute inset-x-0 -top-[6px] h-[17px] w-full cursor-pointer opacity-0" max="100" min="0" onChange={(event) => setVolume(Number(event.currentTarget.value))} type="range" value={volume} />
                        </div>
                      </div>
                      <div className="flex items-center gap-1 max-[480px]:hidden">
                        <span className="text-[7px] tracking-wide text-slate-600">CONFIG</span>
                        <span className="flex h-[18px] w-[18px] items-center justify-center rounded border border-slate-600 bg-slate-800 text-amber-400">ϟ</span>
                      </div>
                    </div>
                  </div>
                  {showPlaylist && (
                    <div className="mx-1.5 mb-1.5 border border-slate-600 bg-[#101a2c] p-[5px] shadow-inner">
                      <div className="px-1 py-1 text-[8px] tracking-[.6px] text-amber-400">PLAYLIST // CAKFEST 2027</div>
                      {winampTracks.map((playlistTrack, index) => (
                        <button aria-current={index === trackIndex ? 'true' : undefined} className={`flex w-full items-center justify-between gap-2 px-1 py-1 text-left text-[8px] ${index === trackIndex ? 'bg-[#263958] text-amber-400' : 'text-slate-300 hover:bg-[#263958] hover:text-amber-400'}`} key={playlistTrack.title} onClick={() => { setTrackIndex(index); setElapsed(0); setPlaying(true); setShowPlaylist(false) }} type="button">
                          <span>{String(index + 1).padStart(2, '0')} · {playlistTrack.title}</span>
                          <span>{String(Math.floor(playlistTrack.duration / 60)).padStart(2, '0')}:{String(playlistTrack.duration % 60).padStart(2, '0')}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
            {!playerVisible && (
              <button className="absolute left-[18px] top-4 z-10 rounded border border-[#525a6b] bg-[linear-gradient(180deg,#d8dce4_0%,#b4bac6_45%,#9aa1af_100%)] px-[9px] py-[5px] text-[8px] font-bold text-slate-800 shadow-lg max-[480px]:relative max-[480px]:left-auto max-[480px]:top-auto" onClick={() => setPlayerVisible(true)}>OPEN WINAMP</button>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default HeroSection
