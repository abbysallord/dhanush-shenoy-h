import { useEffect, useRef, useState } from 'react';
import './Navbar.css';

const links = ['About', 'Projects', 'Experience', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [hash, setHash] = useState(window.location.hash || '#/');
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      // Update active section (only when on home page)
      if (window.location.hash === '#/' || window.location.hash === '') {
        const sections = ['about', 'projects', 'experience', 'contact'];
        for (const id of [...sections].reverse()) {
          const el = document.getElementById(id);
          if (el && window.scrollY >= el.offsetTop - 200) {
            setActive(id);
            break;
          }
        }
      }
    };

    const handleHashChange = () => {
      setHash(window.location.hash || '#/');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    const targetId = id.toLowerCase();
    
    if (window.location.hash !== '#/' && window.location.hash !== '') {
      // Direct back to home, then scroll
      window.location.hash = '#/';
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    } else {
      const el = document.getElementById(targetId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    setMenuOpen(false);
    if (window.location.hash !== '#/' && window.location.hash !== '') {
      window.location.hash = '#/';
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav ref={navRef} className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <a className="nav-logo" onClick={handleLogoClick} data-cursor="hover" href="#/">
          <span className="logo-bracket">[</span>
          <span className="logo-name">DS</span>
          <span className="logo-bracket">]</span>
        </a>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {links.map((link, i) => (
            <li key={link} style={{ '--i': i }}>
              <button
                className={active === link.toLowerCase() ? 'active' : ''}
                onClick={() => scrollTo(link)}
              >
                <span className="link-num">0{i + 1}.</span>
                {link}
              </button>
            </li>
          ))}
          
          <li style={{ '--i': links.length }}>
            <a
              className={`nav-now-link ${hash === '#/now' ? 'active' : ''}`}
              href="#/now"
              onClick={() => setMenuOpen(false)}
            >
              <span className="link-num">0{links.length + 1}.</span>
              Now
            </a>
          </li>

          <li>
            <a
              className={`nav-cta ${hash === '#/resume' ? 'active' : ''}`}
              href="#/resume"
              onClick={() => setMenuOpen(false)}
            >
              Resume
            </a>
          </li>
        </ul>

        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}
