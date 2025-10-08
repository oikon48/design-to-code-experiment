'use client';

import { useState } from 'react';
import clsx from 'clsx';
import { navLinks } from '@/app/content';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen((prev) => !prev);
  };

  const closeNav = () => {
    setIsOpen(false);
  };

  return (
    <header className="site-header">
      <div className="container header__inner">
        <a className="logo" href="#home" onClick={closeNav}>
          <span className="logo__icon" aria-hidden="true">
            B
          </span>
          <span className="logo__label">Brooklyn</span>
        </a>
        <nav className={clsx('nav', isOpen && 'nav--open')} id="siteNav" aria-label="Primary">
          {navLinks.map((link) => (
            <a key={link.label} className="nav__link" href={link.href} onClick={closeNav}>
              {link.label}
            </a>
          ))}
          <a className="button button--primary" href="#contact" onClick={closeNav}>
            Contact
          </a>
        </nav>
        <button
          className={clsx('nav-toggle', isOpen && 'nav-toggle--open')}
          id="navToggle"
          aria-controls="siteNav"
          aria-expanded={isOpen}
          type="button"
          onClick={toggleNav}
        >
          <span className="nav-toggle__bar" />
          <span className="sr-only">Toggle navigation</span>
        </button>
      </div>
    </header>
  );
}
