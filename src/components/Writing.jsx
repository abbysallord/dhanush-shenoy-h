import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Writing.css';

gsap.registerPlugin(ScrollTrigger);

export default function Writing() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo('.writing-teaser', {
      opacity: 0,
      y: 30,
    }, {
      opacity: 1,
      y: 0,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
      }
    });
  }, { scope: containerRef });

  return (
    <section id="writing" className="section writing-section" ref={containerRef}>
      <div className="container">
        <div className="section-header">
          <span className="label">10 — Writing</span>
          <h2 className="section-title" style={{ marginTop: '1rem' }}>
            Thoughts &<br /><em>Articles</em>
          </h2>
          <p className="projects-intro">
            Writing down architectures, devlogs, and design post-mortems as a way to clarify thinking.
          </p>
        </div>

        <div className="writing-teaser">
          <div className="teaser-inner">
            <span className="teaser-badge">DEVLOGS & ARCHITECTURE NOTES</span>
            <h3 className="teaser-title">Technical Writing</h3>
            <p className="teaser-desc">
              I am planning to document agentic pipelines, local dev environments, database transaction lifecycle, 
              and learnings from building products.
            </p>
            <div className="teaser-coming-soon">
              <span className="dot-blink" />
              <span className="coming-soon-text">Coming Soon</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
