import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Exploring.css';

gsap.registerPlugin(ScrollTrigger);

import { EXPLORING as EXPLORING_TOPICS } from '../data/portfolioData';



export default function Exploring() {
  const sectionRef = useRef(null);
  const [hoveredIdx, setHoveredIdx] = useState(null);

  useGSAP(() => {
    gsap.fromTo('.explore-card', {
      opacity: 0,
      scale: 0.95,
      y: 20
    }, {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 0.7,
      stagger: 0.08,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.explore-grid',
        start: 'top 80%'
      }
    });
  }, { scope: sectionRef });

  return (
    <section id="exploring" className="section explore-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="label">07 — Current Focus</span>
          <h2 className="section-title" style={{ marginTop: '1rem' }}>
            Currently<br /><em>Exploring</em>
          </h2>
          <p className="projects-intro">
            Continuous experimentation is how I stay ahead. These are the architectures, fields,
            and systems I am currently building prototypes in.
          </p>
        </div>

        <div className="explore-grid">
          {EXPLORING_TOPICS.map((topic, idx) => (
            <div
              key={idx}
              className="explore-card"
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              <div className="explore-card-inner">
                <span className="explore-badge">Explore</span>
                <h3 className="explore-card-title">{topic.title}</h3>
                <span className="explore-card-sub">{topic.sub}</span>
                <p className="explore-card-desc">{topic.desc}</p>
              </div>

              {/* Glowing overlay */}
              <div
                className="explore-card-glow"
                style={{ opacity: hoveredIdx === idx ? 1 : 0 }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
