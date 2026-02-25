import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Experience.css';

gsap.registerPlugin(ScrollTrigger);

// ── CONFIG ───────────────────────────────────────────────────────
const EXPERIENCES = [
  {
    period: '2024 — Present',
    role: 'Full Stack Developer',
    company: 'Your Company',
    type: 'Full-time',
    desc: 'Building scalable microservices and React applications serving 50k+ users. Led architecture decisions, mentored juniors, shipped 3 major product features.',
    highlights: ['40% performance improvement on core API', 'Led migration to TypeScript', 'Built internal design system'],
  },
  {
    period: '2023 — 2024',
    role: 'Frontend Developer',
    company: 'Agency / Studio',
    type: 'Contract',
    desc: 'Delivered pixel-perfect, animated web experiences for clients across fintech, SaaS, and e-commerce. Specialized in complex data visualization.',
    highlights: ['12 client projects launched', 'Introduced GSAP animation system', 'React performance audits'],
  },
  {
    period: '2022 — 2023',
    role: 'Junior Developer',
    company: 'Startup',
    type: 'Full-time',
    desc: 'First professional role. Contributed to full-stack features, learned production deployment, agile workflows, and code review culture.',
    highlights: ['Shipped 20+ features', 'Node.js backend development', 'CI/CD pipeline setup'],
  },
];

const EDUCATION = [
  {
    period: '2020 — 2024',
    degree: 'B.Tech Computer Science',
    institution: 'University: Yenepoya School of Engineering and Technology (YSET)',
    industryPartner: 'Industry Partner: Nxtwave of Innovation and Advanced Technologies (NIAT)',
    note: 'Focused on algorithms, distributed systems, and web development.',
  },
];
// ─────────────────────────────────────────────────────────────────

export default function Experience() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo('.exp-item', {
      opacity: 0,
      x: -40,
    }, {
      opacity: 1,
      x: 0,
      duration: 0.9,
      stagger: 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.exp-timeline',
        start: 'top 75%',
      }
    });

    // Timeline line draw
    gsap.fromTo('.timeline-line-fill', {
      scaleY: 0,
    }, {
      scaleY: 1,
      duration: 1.5,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.exp-timeline',
        start: 'top 75%',
      }
    });
  }, { scope: sectionRef });

  return (
    <section id="experience" className="section exp-section" ref={sectionRef}>
      <div className="container">
        <div className="exp-layout">

          {/* Left — header */}
          <div className="exp-header">
            <span className="label">03 — Experience</span>
            <h2 className="section-title" style={{ marginTop: '1rem' }}>
              Where I've<br /><em>worked</em>
            </h2>
            <p className="exp-intro">
              Each role shaped how I think about software — not just how to build it,
              but why it matters.
            </p>

            {/* Education card */}
            <div className="edu-card">
              <span className="label" style={{ marginBottom: '0.75rem', display: 'block' }}>Education</span>
              {EDUCATION.map(({ period, degree, institution, industryPartner, note }) => (
                <div key={degree}>
                  <span className="edu-period">{period}</span>
                  <h4 className="edu-degree">{degree}</h4>
                  <p className="edu-institution">{institution}</p>
                  <p className="edu-institution">{industryPartner}</p>
                  <p className="edu-note">{note}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — timeline */}
          <div className="exp-timeline">
            <div className="timeline-line">
              <div className="timeline-line-fill" />
            </div>

            {EXPERIENCES.map(({ period, role, company, type, desc, highlights }) => (
              <div key={role} className="exp-item">
                <div className="exp-dot">
                  <div className="dot-inner" />
                </div>
                <div className="exp-content">
                  <div className="exp-top">
                    <span className="exp-period">{period}</span>
                    <span className="exp-type">{type}</span>
                  </div>
                  <h3 className="exp-role">{role}</h3>
                  <p className="exp-company">{company}</p>
                  <p className="exp-desc">{desc}</p>
                  <ul className="exp-highlights">
                    {highlights.map(h => (
                      <li key={h}>
                        <span className="hi-bullet">→</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
