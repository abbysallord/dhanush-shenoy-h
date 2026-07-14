import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Leadership.css';

gsap.registerPlugin(ScrollTrigger);

import { LEADERSHIP as LEADERSHIP_ITEMS } from '../data/portfolioData';

export default function Leadership() {
  const sectionRef = useRef(null);
  const [hoveredIdx, setHoveredIdx] = useState(null);

  useGSAP(() => {
    gsap.fromTo('.lead-card', {
      opacity: 0,
      y: 40,
    }, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.12,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.lead-list',
        start: 'top 80%',
      }
    });
  }, { scope: sectionRef });

  return (
    <section id="leadership" className="section lead-section" ref={sectionRef}>
      <div className="container">
        <div className="lead-layout">
          {/* Header */}
          <div className="lead-header">
            <span className="label">06 — Leadership</span>
            <h2 className="section-title" style={{ marginTop: '1rem' }}>
              Leading &<br /><em>Building</em>
            </h2>
            <p className="projects-intro">
              I believe in expanding the developer ecosystem. Beyond code, I organize platforms,
              lead hackathon teams, and mentor students to build real systems.
            </p>
          </div>

          {/* Cards List */}
          <div className="lead-list">
            {LEADERSHIP_ITEMS.map((item, idx) => (
              <div
                key={item.id}
                className="lead-card"
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                <div className="lead-card-header">
                  <span className="lead-role">{item.role}</span>
                  <span className="lead-id">{item.id}</span>
                </div>
                <h3 className="lead-title">{item.title}</h3>
                <p className="lead-desc">{item.desc}</p>
                <div className="lead-impact-box">
                  <span className="lead-impact-label">Key Impact</span>
                  <p className="lead-impact-text">{item.impact}</p>
                </div>
                {/* Accent border */}
                <div
                  className="lead-card-accent-line"
                  style={{ transform: hoveredIdx === idx ? 'scaleX(1)' : 'scaleX(0)' }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
