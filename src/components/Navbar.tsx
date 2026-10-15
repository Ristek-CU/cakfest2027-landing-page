import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'Make It Pop', id: 'make-it-pop' },
  { label: 'Lomba', id: 'lomba' },
  { label: 'Timeline', id: 'timeline' },
  { label: 'FAQ', id: 'faq' },
];

export function Navbar() {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const sectionHref = (id: string) => (pathname === '/' ? `#${id}` : `/#${id}`);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);

  return (
    <header className="site-navbar">
      <div className="site-navbar__inner">
        <Link className="site-navbar__brand" to="/" onClick={() => setIsOpen(false)}>
          <span className="site-navbar__eye" aria-hidden="true">
            <span />
          </span>
          <span className="site-navbar__mark">
            <strong>CAKFEST</strong>
            <small>VOL.2</small>
          </span>
        </Link>

        <nav id="primary-navigation" className={`site-navbar__nav${isOpen ? ' is-open' : ''}`} aria-label="Navigasi utama">
          {navItems.map((item) => (
            <a key={item.id} href={sectionHref(item.id)} onClick={() => setIsOpen(false)}>
              {item.label}
            </a>
          ))}
          <a className="site-navbar__cta" href={sectionHref('lomba')} onClick={() => setIsOpen(false)}>
            Daftar Sekarang
          </a>
        </nav>

        <button
          type="button"
          className="site-navbar__menu-button"
          aria-label={isOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
