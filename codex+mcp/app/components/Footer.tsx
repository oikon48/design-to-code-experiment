import { navLinks } from '@/app/content';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer__inner">
        <a className="logo logo--footer" href="#home">
          <span className="logo__icon" aria-hidden="true">
            B
          </span>
          <span className="logo__label">Brooklyn</span>
        </a>
        <nav className="footer-nav" aria-label="Footer">
          {navLinks.map((link) => (
            <a key={link.label} className="footer-nav__link" href={link.href}>
              {link.label}
            </a>
          ))}
          <a className="footer-nav__link" href="#contact">
            Contact
          </a>
        </nav>
        <p className="footer__copyright">Copyright © 2024 Picto.</p>
      </div>
    </footer>
  );
}
