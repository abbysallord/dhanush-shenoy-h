import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useStaggerReveal } from '../hooks/useReveal';
import './About.css';

gsap.registerPlugin(ScrollTrigger);

// ── CONFIG ───────────────────────────────────────────────────────
const STORY = [
  { num: '01', title: 'The Beginning', text: "It started with a broken CSS layout at 2am. Instead of giving up, I spent four hours debugging — and felt more alive than ever. That night changed everything." },
  { num: '02', title: 'The Journey', text: "Self-taught through projects, failures, and late nights. From static HTML pages to full-stack applications. Every bug was a lesson, every feature a milestone." },
  { num: '03', title: 'The Present', text: "Now I build production-grade software — scalable backends, intuitive UIs, and clean APIs. I care deeply about the craft: readable code, thoughtful architecture, real impact." },
];

const SKILLS = [
  { cat: 'Frontend', items: ['React', 'TypeScript', 'Next.js', 'Framer Motion', 'Tailwind CSS', 'GSAP'] },
  { cat: 'Backend', items: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'Python (Flask, FastAPI)', 'REST APIs'] },
  { cat: 'DevOps & Tools', items: ['Docker', 'Git', 'Linux', 'AWS', 'Nginx', 'CI/CD'] },
];
// ─────────────────────────────────────────────────────────────────

export default function About() {
  const sectionRef = useRef(null);
  const staggerRef = useStaggerReveal(0.08);

  useGSAP(() => {
    // Horizontal scroll-driven number animation
    gsap.fromTo('.about-big-number', {
      x: -60,
      opacity: 0,
    }, {
      x: 0,
      opacity: 0.06,
      duration: 1.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
      }
    });

    // Story cards stagger
    gsap.fromTo('.story-card', {
      opacity: 0,
      y: 50,
    }, {
      opacity: 1,
      y: 0,
      duration: 0.9,
      stagger: 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.story-grid',
        start: 'top 75%',
      }
    });

  }, { scope: sectionRef });

  return (
    <section id="about" className="section about-section" ref={sectionRef}>
      <div className="about-big-number">ABOUT</div>
      <div className="container">

        {/* Header */}
        <div className="section-header">
          <span className="label">01 — Who I Am</span>
          <h2 className="section-title reveal" data-stagger>
            The story so<br /><em>far</em>
          </h2>
        </div>

        {/* Story cards */}
        <div className="story-grid">
          {STORY.map(({ num, title, text }) => (
            <div key={num} className="story-card">
              <span className="story-num">{num}</span>
              <h3 className="story-title">{title}</h3>
              <p className="story-text">{text}</p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-rule" style={{ margin: '6rem 0' }} />

        {/* Skills */}
        <div className="skills-block">
          <div className="skills-label">
            <span className="label">What I work with</span>
          </div>
          <div className="skills-grid" ref={staggerRef}>
            {SKILLS.map(({ cat, items }) => (
              <div key={cat} className="skill-group reveal" data-stagger>
                <h4 className="skill-cat">{cat}</h4>
                <ul className="skill-list">
                  {items.map(item => (
                    <li key={item} className="skill-item">
                      <span className="skill-bullet">▸</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="stats-strip">
          {[
            { num: '15+', label: 'Projects' },
            { num: '2+', label: 'Years coding' },
            { num: '∞', label: 'Coffees consumed' },
            { num: '100%', label: 'Passion' },
          ].map(({ num, label }) => (
            <div key={label} className="stat-item">
              <span className="stat-num">{num}</span>
              <span className="stat-label">{label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
