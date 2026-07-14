import { useRef, useEffect, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './About.css';

gsap.registerPlugin(ScrollTrigger);

import { STORY_STAGES as STORY, STATS } from '../data/portfolioData';


function AnimatedCounter({ value, suffix = '', label }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasRun = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasRun.current) {
          hasRun.current = true;
          const end = parseInt(value, 10);
          if (isNaN(end)) return;

          let startTime = null;
          const duration = 1500; // ms

          const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const current = Math.floor(progress * end);
            setCount(current);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(end);
            }
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );

    const el = ref.current;
    if (el) observer.observe(el);
    return () => {
      if (el) observer.unobserve(el);
    };
  }, [value]);

  return (
    <div className="stat-item" ref={ref}>
      <span className="stat-num">
        {count.toLocaleString()}
        {suffix}
      </span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

export default function About() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    // Large background title parallax
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

        {/* Stats Strip with Animated Counters */}
        <div className="stats-strip">
          {STATS.map(({ value, suffix, label }) => (
            <AnimatedCounter key={label} value={value} suffix={suffix} label={label} />
          ))}
        </div>

      </div>
    </section>
  );
}
