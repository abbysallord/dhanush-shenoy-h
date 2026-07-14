import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Philosophy.css';

gsap.registerPlugin(ScrollTrigger);

const QUOTES = [
  {
    text: "I don't wait for opportunities. I build them.",
    label: "On Action"
  },
  {
    text: "Luck isn't something I can control. My effort is.",
    label: "On Control"
  },
  {
    text: "Consistency compounds.",
    label: "On Growth"
  }
];

export default function Philosophy() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo('.philosophy-block', {
      opacity: 0,
      y: 40,
    }, {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.25,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 75%',
      }
    });
  }, { scope: containerRef });

  return (
    <section className="section philosophy-section" ref={containerRef}>
      <div className="container">
        <div className="philosophy-grid">
          {QUOTES.map((q, idx) => (
            <div key={idx} className="philosophy-block">
              <span className="label philosophy-label">// {q.label}</span>
              <p className="philosophy-text">
                “{q.text}”
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
