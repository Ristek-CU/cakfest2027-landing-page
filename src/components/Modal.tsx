import { useEffect, type ReactNode } from 'react'

type ModalProps = {
  title: string
  onClose: () => void
  children: ReactNode
}

function Modal({ title, onClose, children }: ModalProps) {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/[.78] p-5 backdrop-blur-lg max-[480px]:p-3.5"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <section
        aria-labelledby="lomba-modal-title"
        aria-modal="true"
        className="max-h-[calc(100dvh-24px)] w-full max-w-[640px] animate-modal-in overflow-y-auto rounded-2xl border border-white/10 bg-[#080d18] shadow-[0_24px_70px_rgba(0,0,0,.7)] max-[480px]:rounded-[14px]"
        role="dialog"
      >
        <div className="flex select-none items-center justify-between border-b border-[#5b3da5] bg-[linear-gradient(180deg,#1e3a8a_0%,#172554_50%,#0f172a_100%)] px-3.5 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,.25)]">
          <div className="flex min-w-0 items-center gap-2.5">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
            </svg>
            <span className="truncate font-[Aileron] text-[13px] font-bold tracking-wide text-white" id="lomba-modal-title">{title}</span>
          </div>
          <button className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/25 bg-slate-900/70 font-mono text-xl text-white transition hover:bg-red-500" onClick={onClose} type="button" aria-label="Tutup Modal">
            &times;
          </button>
        </div>
        <div className="p-5">{children}</div>
      </section>
    </div>
  )
}

export default Modal
