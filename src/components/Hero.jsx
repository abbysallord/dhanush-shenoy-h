import { useEffect, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import './Hero.css';

// ── CONFIG — replace with your own info ──────────────────────────
const NAME_FIRST = 'Dhanush';
const NAME_LAST = 'Shenoy H';
const TAGLINE = 'I build & contribute for things I love';
const SUBTITLE = "Full Stack Developer — turning complex problems into elegant, performant software.";
const LOCATION = 'Mangaluru, India';
const STATUS = { text: 'Open to work', active: true };
// ─────────────────────────────────────────────────────────────────

function SplitText({ text, className, delay = 0 }) {
  return (
    <span className={className} aria-label={text}>
      {text.split('').map((char, i) => (
        <span
          key={i}
          className="split-char"
          style={{ '--delay': `${delay + i * 0.03}s` }}
          aria-hidden="true"
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
}

export default function Hero() {
  const containerRef = useRef(null);
  const bgRef = useRef(null);
  const overlayRef = useRef(null);

  // Parallax on mouse move
  useEffect(() => {
    const handleMouse = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 2;
      const y = (e.clientY / innerHeight - 0.5) * 2;

      if (bgRef.current) {
        bgRef.current.style.transform = `translate(${x * 12}px, ${y * 8}px) scale(1.05)`;
      }
    };

    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  // GSAP entrance
  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

    tl.fromTo('.hero-eyebrow', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1, delay: 0.3 })
      .fromTo('.split-char', {
        opacity: 0,
        y: '110%',
        rotateX: -90,
      }, {
        opacity: 1,
        y: '0%',
        rotateX: 0,
        duration: 0.8,
        stagger: 0.025,
      }, '-=0.5')
      .fromTo('.hero-subtitle', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.3')
      .fromTo('.hero-cta-group', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.5')
      .fromTo('.hero-scroll-indicator', { opacity: 0 }, { opacity: 1, duration: 1 }, '-=0.3')
      .fromTo('.hero-meta', { opacity: 0 }, { opacity: 1, duration: 1 }, '-=0.8');

  }, { scope: containerRef });

  return (
    <section className="hero" ref={containerRef}>
      {/* Cinematic background */}
      <div className="hero-bg" ref={bgRef}>
        <div className="hero-grid" />
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />
      </div>

      {/* Vignette */}
      <div className="hero-vignette" ref={overlayRef} />

      <div className="container hero-content">
        <div className="hero-eyebrow">
          <div className={`status-dot ${STATUS.active ? 'active' : ''}`} />
          <span className="label">{STATUS.text}</span>
          <span className="hero-divider">|</span>
          <span className="label" style={{ color: '#aaa' }}>{LOCATION}</span>
        </div>

        <h1 className="hero-title">
          <div className="title-line overflow-hidden">
            <SplitText text={NAME_FIRST} className="title-name" delay={0} />
          </div>
          <div className="title-line overflow-hidden">
            <SplitText text={NAME_LAST} className="title-name" delay={0.21} />
          </div>
        </h1>

        <div className="tagline-wrap overflow-hidden">
          <p className="hero-tagline">
            <span className="tag-accent">// </span>
            {TAGLINE}
          </p>
        </div>

        <p className="hero-subtitle">{SUBTITLE}</p>

        <div className="hero-cta-group">
          <a
            href="#projects"
            className="btn-primary"
            onClick={e => {
              e.preventDefault();
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            View my work
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="#contact"
            className="btn-ghost"
            onClick={e => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Let's talk
          </a>
        </div>

        {/* Side meta info */}
        <div className="hero-meta">
          <div className="meta-item">
            <span className="label">Stack</span>
            <span className="meta-val">MERN</span>
          </div>
          <div className="meta-sep" />
          <div className="meta-item">
            <span className="label">Experience</span>
            <span className="meta-val">2+ years</span>
          </div>
          <div className="meta-sep" />
          <div className="meta-item">
            <span className="label">Projects</span>
            <span className="meta-val">15+</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll-indicator">
        <div className="scroll-line" />
        <span className="label">scroll</span>
      </div>

      {/* Bottom marquee */}
      <div className="hero-marquee">
        <div className="marquee-track">
          {['Full Stack', 'React', 'Node.js', 'PostgreSQL', 'TypeScript', 'GraphQL', 'Docker', 'AWS', 'REST APIs', 'CI/CD'].map((item, i) => (
            <span key={i}>{item}<span className="marquee-dot">◆</span></span>
          ))}
          {['Full Stack', 'React', 'Node.js', 'PostgreSQL', 'TypeScript', 'GraphQL', 'Docker', 'AWS', 'REST APIs', 'CI/CD'].map((item, i) => (
            <span key={`b${i}`} aria-hidden>{item}<span className="marquee-dot">◆</span></span>
          ))}
        </div>
      </div>
    </section>
  );
}
