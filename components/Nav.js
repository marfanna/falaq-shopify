'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/menu', label: 'Menu' },
  { href: '/reservation', label: 'Reserve' },
  { href: '/contact', label: 'Contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <>
      {/* ── Desktop / Main Nav ───────────────────────── */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        height: 64, display: 'flex', alignItems: 'center',
        background: scrolled ? 'rgba(16,38,32,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid #1E2C31' : 'none',
        transition: 'background 300ms ease',
      }}>
        <div style={{
          maxWidth: 1280, width: '100%', margin: '0 auto',
          padding: '0 64px', display: 'flex',
          alignItems: 'center', justifyContent: 'space-between',
        }} className="nav-inner">
          {/* Logo */}
          <Link href="/" style={{
            fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
            fontSize: 22, fontWeight: 400, letterSpacing: '0.18em',
            color: '#FFFFFF', textDecoration: 'none', fontFeatureSettings: '"ss03"',
          }}>
            FA<span style={{ color: '#36F4A4' }}>L</span>AQ
          </Link>

          {/* Desktop links */}
          <ul style={{ display: 'flex', alignItems: 'center', gap: 40, listStyle: 'none', margin: 0, padding: 0 }} className="nav-desktop-links">
            {NAV_LINKS.map(l => (
              <li key={l.href}>
                <Link href={l.href} style={{
                  fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                  fontSize: 15, fontWeight: 500, letterSpacing: '0.072em',
                  color: pathname === l.href ? '#36F4A4' : '#FFFFFF',
                  textDecoration: 'none', fontFeatureSettings: '"ss03"',
                  transition: 'color 200ms ease',
                }}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTAs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }} className="nav-desktop-cta">
            <Link href="/reservation" className="btn-ghost" style={{ padding: '9px 20px 9px 16px', fontSize: 14 }}>
              Reserve a Table
            </Link>
            <a href="https://duare.net" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '9px 20px 9px 16px', fontSize: 14 }}>
              Order Online ↗
            </a>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Toggle menu"
            style={{ display: 'none', flexDirection: 'column', gap: 5, cursor: 'pointer', padding: 8, background: 'none', border: 'none' }}
            className="nav-hamburger"
          >
            <span style={{ display: 'block', width: 24, height: 2, background: '#FFFFFF', borderRadius: 2, transition: 'all 300ms ease', transform: menuOpen ? 'rotate(45deg) translate(5px,7px)' : 'none' }} />
            <span style={{ display: 'block', width: 24, height: 2, background: '#FFFFFF', borderRadius: 2, transition: 'all 300ms ease', opacity: menuOpen ? 0 : 1 }} />
            <span style={{ display: 'block', width: 24, height: 2, background: '#FFFFFF', borderRadius: 2, transition: 'all 300ms ease', transform: menuOpen ? 'rotate(-45deg) translate(5px,-7px)' : 'none' }} />
          </button>
        </div>
      </nav>

      {/* ── Mobile Menu ──────────────────────────────── */}
      <div style={{
        display: menuOpen ? 'flex' : 'none',
        position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.96)',
        zIndex: 99, flexDirection: 'column', alignItems: 'center',
        justifyContent: 'center', gap: 40,
      }}>
        {NAV_LINKS.map(l => (
          <Link key={l.href} href={l.href} onClick={close} style={{
            fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
            fontSize: 32, fontWeight: 300, letterSpacing: '0.05em',
            color: '#FFFFFF', textDecoration: 'none',
          }}>
            {l.label}
          </Link>
        ))}
        <a
          href="https://duare.net"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-accent"
          style={{ marginTop: 16 }}
          onClick={close}
        >
          Order on Duare ↗
        </a>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .nav-desktop-links { display: none !important; }
          .nav-desktop-cta   { display: none !important; }
          .nav-hamburger     { display: flex !important; }
          .nav-inner         { padding: 0 16px !important; }
        }
        @media (min-width: 1025px) {
          .nav-hamburger { display: none !important; }
        }
        @media (max-width: 640px) {
          .nav-inner { padding: 0 16px !important; }
        }
      `}</style>
    </>
  );
}
