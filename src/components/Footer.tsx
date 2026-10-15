const footerLinks = [
  { label: 'Make It Pop', href: '/#make-it-pop' },
  { label: '6 Cabang Lomba', href: '/#kompetisi' },
  { label: 'Timeline Acara', href: '/#timeline' },
  { label: 'FAQ', href: '/#faq' },
];

const footerBadges = [
  ['HTML', '5.0 VALID'],
  ['MAKE IT', 'POP'],
  ['STEREO', 'SOUND ON'],
  ['CAKFEST', 'VOL.2'],
  ['NO SPAM', '100% SECURE'],
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__grid">
        <div className="site-footer__brand">
          <h2>CAKFEST <span>VOL.2</span></h2>
          <p>Make It Pop: Turn Your Spark Into Impact. Festival akbar kompetisi mahasiswa dan pelajar nasional persembahan Universitas Cakrawala.</p>
          <small>© 2026-2027 SGA Universitas Cakrawala. Cakfest Vol.2 Landing Page. All rights reserved.</small>
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
            <a href="/#kompetisi">Buku Panduan Teknis &amp; Booklet (PDF)</a>
            <a href="/#timeline">Jadwal Technical Meeting</a>
            <a href="/#faq">Pusat Informasi &amp; Regulasi</a>
          </nav>
        </div>

        <div className="site-footer__column">
          <h3>Kontak &amp; Sekretariat</h3>
          <p>Gedung Student Center Lt. 2, Kampus Terpadu Universitas Cakrawala.</p>
          <span className="site-footer__contact-label">Hotline WA:</span>
          <a href="tel:0815347557">081.534.7557</a>
          <span className="site-footer__contact-label">Email:</span>
          <a href="mailto:halo@cakfest2027.id">halo@cakfest2027.id</a>
        </div>
      </div>

      <div className="site-footer__bottom">
        <div className="site-footer__badges" aria-label="Festival badges">
          {footerBadges.map(([label, value]) => (
            <span className="site-footer__badge" key={label}>
              <b>{label}</b>
              <strong>{value}</strong>
            </span>
          ))}
        </div>
      </div>
      <button type="button" className="site-footer__top" aria-label="Kembali ke atas" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="m6 15 6-6 6 6" />
        </svg>
      </button>
    </footer>
  );
}

export default Footer;
