import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './TechStack.css';

gsap.registerPlugin(ScrollTrigger);

import { SKILLS_CATEGORIZED as TECH_CATEGORIES } from '../data/portfolioData';



export default function TechStack() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo('.tech-group', {
      opacity: 0,
      y: 30,
    }, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.tech-grid',
        start: 'top 80%',
      }
    });
  }, { scope: sectionRef });

  return (
    <section id="tech" className="section tech-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="label">08 — Tech Stack</span>
          <h2 className="section-title" style={{ marginTop: '1rem' }}>
            Systems &<br /><em>Toolkits</em>
          </h2>
          <p className="projects-intro">
            Categorized stack of technologies I design with. No fluff, just tools I use to build robust software.
          </p>
        </div>

        <div className="tech-grid">
          {TECH_CATEGORIES.map((category) => (
            <div key={category.cat} className="tech-group">
              <h3 className="tech-cat-title">{category.cat}</h3>
              <ul className="tech-list">
                {category.items.map((item) => (
                  <li key={item} className="tech-item">
                    <span className="tech-bullet">▸</span>
                    <span className="tech-name">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
