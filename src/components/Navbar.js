import React, { useState, useEffect } from 'react';
import './Navbar.css';

const navItems = [
  { id: 'home',     label: 'Home' },
  { id: 'about',    label: 'About' },
  { id: 'skills',   label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'resume',   label: 'Resume' },
  { id: 'contact',  label: 'Contact' },
];

export default function Navbar({ activePage, navigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (id) => {
    navigate(id);
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <button className="navbar__logo" onClick={() => handleNav('home')}>
          AU
        </button>

        {/* Desktop links */}
        <ul className="navbar__links">
          {navItems.map(item => (
            <li key={item.id}>
              <button
                className={`navbar__link ${activePage === item.id ? 'navbar__link--active' : ''}`}
                onClick={() => handleNav(item.id)}
              >
                {item.label}
                {activePage === item.id && <span className="navbar__link-dot" />}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className={`navbar__hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`}>
        {navItems.map(item => (
          <button
            key={item.id}
            className={`navbar__mobile-link ${activePage === item.id ? 'active' : ''}`}
            onClick={() => handleNav(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
