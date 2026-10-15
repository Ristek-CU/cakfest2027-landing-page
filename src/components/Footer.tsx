const footerLinks = [
  { label: 'Make It Pop', href: '/#make-it-pop' },
  { label: '6 Cabang Lomba', href: '/#lomba' },
  { label: 'Timeline Acara', href: '/#timeline' },
  { label: 'FAQ', href: '/#faq' },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__grid">
        <div className="site-footer__brand">
          <h2>CAKFEST <span>VOL.2</span></h2>
          <p>Make It Pop: Turn Your Spark Into Impact. Festival kolaborasi, kompetisi, dan perayaan potensi pelajar serta mahasiswa Indonesia.</p>
          <small>© 2026–2027 SGA Universitas Cakrawala. All rights reserved.</small>
        </div>

        <div className="site-footer__column">
          <h3>Navigasi Cepat</h3>
          <nav aria-label="Navigasi footer">
            {footerLinks.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
          </nav>
        </div>

        <div className="site-footer__column">
          <h3>Dokumen Resmi</h3>
          <nav aria-label="Dokumen resmi">
            <a href="/#lomba">Buku Panduan Tournament &amp; Booklet PDF</a>
            <a href="/#timeline">Jadwal Technical Meeting</a>
            <a href="/#faq">Pusat Informasi &amp; Regulasi</a>
          </nav>
        </div>

        <div className="site-footer__column">
          <h3>Kontak &amp; Sekretariat</h3>
          <p>Gedung Student Center Lt. 2, Kampus Terpadu Universitas Cakrawala.</p>
          <a href="tel:+62813457657">+62 813 4576 57</a>
          <a href="mailto:halo@cakfest2027.id">halo@cakfest2027.id</a>
        </div>
      </div>

      <div className="site-footer__bottom">
        <span>CAKFEST VOL.2 // Universitas Cakrawala</span>
        <div className="site-footer__badges" aria-label="Festival badges">
          <span>HTML</span><span>JS</span><span>MAKE IT POP</span><span>CAKFEST</span>
        </div>
        <button type="button" className="site-footer__top" aria-label="Kembali ke atas" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>↑</button>
      </div>
    </footer>
  );
}

export default Footer;
