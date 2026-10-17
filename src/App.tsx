import { useCallback, useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import background from './assets/Background.webp'
import MakeItPopSection from './components/MakeItPopSection'
import type { LombaModalState } from './lib/types'
import HomePage from './pages/HomePage'
import PillarDetailPage from './pages/pillars/[slug]'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import LombaModal from './sections/lomba/LombaModal'
import LombaSection from './sections/lomba/LombaSection'
import HeroSection from './sections/hero/HeroSection'

function LandingPage() {
  const [modal, setModal] = useState<LombaModalState | null>(null)

  const openBooklet = useCallback((lomba?: LombaModalState['lomba']) => {
    setModal({ lomba })
  }, [])

  const closeModal = useCallback(() => {
    setModal(null)
  }, [])

  return (
    <>
      <HeroSection onOpenBooklet={() => openBooklet()} />
      <MakeItPopSection />
      <main className="mx-auto flex w-[95%] max-w-[1280px] flex-col gap-16 px-0 pb-20 pt-8 max-[768px]:px-3.5 max-[768px]:pb-[60px] max-[768px]:pt-4">
        <LombaSection
          onRegister={(lomba) => {
            const message = encodeURIComponent(
              `Halo Panitia Cakrawala Festival Vol.2! Saya ingin mendaftar untuk kompetisi: ${lomba.name}. Mohon panduan registrasi dan konfirmasi slot.`,
            )
            window.open(
              `https://wa.me/62815347557?text=${message}`,
              '_blank',
              'noopener,noreferrer',
            )
          }}
          onBooklet={openBooklet}
        />
      </main>
      <HomePage />
      <LombaModal modal={modal} onClose={closeModal} />
    </>
  )
}

function App() {
  return (
    <div className="relative isolate min-h-screen overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#080d18]">
        <div className="absolute inset-0 animate-hero-drift bg-cover bg-[center_top] opacity-[.82] will-change-transform" style={{ backgroundImage: `url(${background})` }} />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 18% 15%, rgba(253,71,214,.16) 0%, transparent 45%), radial-gradient(circle at 82% 45%, rgba(224,255,0,.12) 0%, transparent 40%), radial-gradient(circle at 20% 70%, rgba(253,71,214,.14) 0%, transparent 45%), radial-gradient(circle at 50% 92%, rgba(68,43,130,.3) 0%, transparent 50%)',
          }}
        />
        <div
          className="absolute inset-0 opacity-70"
          style={{
            backgroundImage: 'linear-gradient(to right, rgba(168,85,247,.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(168,85,247,.035) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/pillars/:slug" element={<PillarDetailPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
