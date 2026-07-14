import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Timeline.css';

gsap.registerPlugin(ScrollTrigger);

import { MILESTONES } from '../data/portfolioData';



export default function Timeline() {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Fill vertical timeline line on scroll
    gsap.fromTo('.time-line-fill', {
      scaleY: 0,
    }, {
      scaleY: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: '.timeline-items-wrap',
        start: 'top 60%',
        end: 'bottom 60%',
        scrub: true,
      }
    });

    // Reveal milestone blocks
    const items = gsap.utils.toArray('.timeline-block');
    items.forEach((item, index) => {
      gsap.fromTo(item.querySelector('.timeline-card'), {
        opacity: 0,
        x: index % 2 === 0 ? -40 : 40,
        y: 20
      }, {
        opacity: 1,
        x: 0,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: item,
          start: 'top 85%',
        }
      });

      gsap.fromTo(item.querySelector('.timeline-indicator'), {
        scale: 0,
        backgroundColor: '#080808'
      }, {
        scale: 1,
        backgroundColor: '#c8f542',
        duration: 0.5,
        ease: 'back.out(2)',
        scrollTrigger: {
          trigger: item,
          start: 'top 85%',
        }
      });
    });

  }, { scope: containerRef });

  return (
    <section id="journey" className="section timeline-section" ref={containerRef}>
      <div className="container">
        <div className="section-header center-align">
          <span className="label">05 — The Journey</span>
          <h2 className="section-title" style={{ marginTop: '1rem' }}>
            Timeline of<br /><em>Growth</em>
          </h2>
          <p className="projects-intro center-text">
            Tracing the path from self-taught programming interest to designing AI-driven infrastructure.
          </p>
        </div>

        <div className="timeline-items-wrap">
          {/* Central vertical line */}
          <div className="time-line-track">
            <div className="time-line-fill" />
          </div>

          {MILESTONES.map((m, idx) => (
            <div
              key={idx}
              className={`timeline-block ${idx % 2 === 0 ? 'left-side' : 'right-side'}`}
            >
              {/* Central Indicator Dot */}
              <div className="timeline-indicator">
                <div className="indicator-inner" />
              </div>

              {/* Milestone Card */}
              <div className="timeline-card">
                <span className="timeline-year">{m.year}</span>
                <h3 className="timeline-block-title">{m.title}</h3>
                <p className="timeline-block-desc">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
