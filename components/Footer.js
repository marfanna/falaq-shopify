import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-logo">FA<span>L</span>AQ</div>
            <div className="footer-tagline">Contemporary fine dining in the heart of Moulvibazar. Order online via Duare or reserve your table with us.</div>
            <div className="footer-social">
              <a href="#" aria-label="Instagram">𝕀</a>
              <a href="#" aria-label="Facebook">𝔽</a>
              <a href="#" aria-label="Twitter">𝕏</a>
            </div>
          </div>
          <div>
            <div className="footer-heading">Navigate</div>
            <div className="footer-links">
              <Link href="/">Home</Link>
              <Link href="/menu">Menu</Link>
              <Link href="/reservation">Reserve a Table</Link>
              <Link href="/contact">Contact Us</Link>
            </div>
          </div>
          <div>
            <div className="footer-heading">Order</div>
            <div className="footer-links">
              <a href="https://duare.net" target="_blank" rel="noopener noreferrer">Order on Duare ↗</a>
              <Link href="/menu#starters">Starters</Link>
              <Link href="/menu#mains">Mains</Link>
              <Link href="/menu#desserts">Desserts</Link>
            </div>
          </div>
          <div>
            <div className="footer-heading">Visit</div>
            <div className="footer-links">
              <span style={{ color: 'var(--muted)', fontSize: 15 }}>Main Road, Moulvibazar</span>
              <a href="tel:+8801700000000">+880 170 000 0000</a>
              <a href="mailto:hello@falaq.com.bd">hello@falaq.com.bd</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-copy">© 2026 FALAQ Fine Dining. All rights reserved.</div>
          <div className="footer-made">Ordering powered by <span>Duare.net</span></div>
        </div>
      </div>
    </footer>
  );
}
