import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Achievements.css';

gsap.registerPlugin(ScrollTrigger);

import { ACHIEVEMENTS } from '../data/portfolioData';



function AchievementCard({ ach, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="ach-card reveal"
      data-stagger
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="ach-card-top">
        <span className="ach-num">{ach.id}</span>
        <span className="ach-year">{ach.year}</span>
      </div>
      <div className="ach-card-body">
        <div className="ach-badge-wrap">
          <span className="ach-badge" style={{ '--ach-accent': ach.accent }}>{ach.badge}</span>
        </div>
        <h3 className="ach-title">{ach.title}</h3>
        <p className="ach-org">{ach.org}</p>
        <p className="ach-desc">{ach.desc}</p>
      </div>
      {/* Accent border */}
      <div
        className="ach-card-accent-line"
        style={{ '--ach-accent': ach.accent }}
      />
      {/* Glow */}
      <div
        className="ach-card-glow"
        style={{ '--ach-accent': ach.accent, opacity: hovered ? 1 : 0 }}
      />
    </div>
  );
}

export default function Achievements() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo('.ach-card', {
      opacity: 0,
      y: 50,
    }, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.ach-grid',
        start: 'top 80%',
      }
    });
  }, { scope: sectionRef });

  return (
    <section id="achievements" className="section ach-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="label">04 — Achievements</span>
          <h2 className="section-title" style={{ marginTop: '1rem' }}>
            Recognitions &<br /><em>Milestones</em>
          </h2>
          <p className="projects-intro">
            A testament to high performance, continuous learning, and real-world execution.
          </p>
        </div>

        <div className="ach-grid">
          {ACHIEVEMENTS.map((ach, i) => (
            <AchievementCard key={ach.id} ach={ach} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
