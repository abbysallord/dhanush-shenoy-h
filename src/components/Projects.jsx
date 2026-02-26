import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import './Projects.css';

gsap.registerPlugin(ScrollTrigger);

// ── CONFIG — Replace with your actual projects ────────────────────
const PROJECTS = [
  {
    id: '01',
    title: 'OpenAI Buildathon Finalist',
    subtitle: 'among top 90 teams from 75,000',
    desc: 'I was selected as finalist in OpenAI Buildathon 2026, a national hackathon for AI and machine learning enthusiasts, which was held in Delhi as pre-summit event for the AI Impact Summit 2026. Showcased AgroNova there.',
    tags: ['AI', 'OpenAI', 'Hackathon', 'AgroNova'],
    github: 'https://github.com/abbysallord/AgroNova',
    live: 'https://drive.google.com/file/d/1Jg11Uuvwnr3qBWS0zRIpZAjBx3RkNLIn/view?usp=sharing',
    featured: true,
    hackathon: true,
    year: '2026',
    accent: '#c8f542',
  },
  {
    id: '02',
    title: 'AgroNova',
    subtitle: 'Smart Farming Platform',
    desc: 'A comprehensive smart farming platform designed to optimize agricultural operations through real-time data analytics, IoT integration, and predictive modeling.',
    tags: ['Next.js', 'Shadcn UI', 'Tailwind CSS', 'PostgreSQL', 'GSAP'],
    github: 'https://github.com/abbysallord/AgroNova',
    live: 'https://www.agronova.in/',
    featured: true,
    hackathon: false,
    year: '2026',
    accent: '#c8f542',
  },
  {
    id: '03',
    title: 'Srinathon 2nd Prize',
    subtitle: 'secured 2nd in Srinathon 2025',
    desc: 'I & team won 2nd prize in Srinathon 2025, a national hackathon, which was held in Mangalore.',
    tags: ['Srinathon', '2nd Prize', 'AI'],
    github: '',
    live: 'https://drive.google.com/file/d/1l1HWOCCLOnK-V3hvnWQuew_lq5cC0SpY/view?usp=sharing',
    featured: false,
    hackathon: true,
    year: '2025',
    accent: '#c8f542',
  },
  {
    id: '04',
    title: 'DrugSecure',
    subtitle: 'A QC Platform for drugs',
    desc: 'A QC platform for pharmaceutical industry designed to ensure the authenticity and traceability of drugs from manufacturer to consumer.',
    tags: ['React.js', 'Node.js', 'K-Means Clustering', 'Machine Learning'],
    github: 'https://github.com/abbysallord/drug-secure',
    live: 'https://drugsecure.vercel.app/',
    featured: true,
    hackathon: false,
    year: '2026',
    accent: '#64c8ff',
  },
  {
    id: '05',
    title: 'Old Portfolio',
    subtitle: 'My Old Portfolio',
    desc: 'My old portfolio website. The one that I built before this one. I really liked the design of this one, so I decided to keep it as a project.',
    tags: ['React', 'TypeScript', 'Storybook', 'Tailwind'],
    github: 'https://github.com/abbysallord/Portfolio',
    live: 'https://dhanush-porfolio.netlify.app/',
    featured: false,
    hackathon: false,
    year: '2025',
    accent: '#ff9564',
  },
  {
    id: '06',
    title: 'AI Chef',
    subtitle: 'built for pg students',
    desc: 'A website that helps you find the best recipes for the ingredients you have.',
    tags: ['React.js', 'HuggingFace API', 'Tailwind CSS'],
    github: 'https://github.com/abbysallord/AI-Chef',
    live: 'https://ai-chefbot.netlify.app/',
    hackathon: false,
    featured: false,
    year: '2025',
    accent: '#b642f5',
  },
];
// ─────────────────────────────────────────────────────────────────

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      className={`project-card ${project.featured ? 'featured' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      data-stagger
    >
      <div className="card-top">
        <div className="card-meta">
          <span className="proj-id">{project.id}</span>
          <span className="proj-year">{project.year}</span>
          {project.featured && <span className="proj-badge">Featured</span>}
          {project.hackathon && <span className="proj-badge">Hackathon</span>}
        </div>
        <div className="card-links">
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" className="card-link" aria-label="GitHub">
              <FiGithub size={16} />
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer" className="card-link" aria-label="Live">
              <FiExternalLink size={16} />
            </a>
          )}
        </div>
      </div>

      <div className="card-body">
        <h3 className="proj-title">{project.title}</h3>
        <p className="proj-subtitle">{project.subtitle}</p>
        <p className="proj-desc">{project.desc}</p>
      </div>

      <div className="card-bottom">
        <div className="proj-tags">
          {project.tags.map(tag => (
            <span key={tag} className="proj-tag">{tag}</span>
          ))}
        </div>
      </div>

      {/* Accent border */}
      <div
        className="card-accent-line"
        style={{ '--card-accent': project.accent }}
      />

      {/* Hover glow */}
      <div
        className="card-glow"
        style={{ '--card-accent': project.accent, opacity: hovered ? 1 : 0 }}
      />
    </article>
  );
}

export default function Projects() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo('.project-card', {
      opacity: 0,
      y: 60,
    }, {
      opacity: 1,
      y: 0,
      duration: 0.9,
      stagger: 0.12,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.projects-grid',
        start: 'top 75%',
      }
    });
  }, { scope: sectionRef });

  return (
    <section id="projects" className="section projects-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="label">02 — Selected Work</span>
          <h2 className="section-title" style={{ marginTop: '1rem' }}>
            Projects &<br /><em>Hackathons</em>
          </h2>
          <p className="projects-intro">
            A curated selection of projects — ranging from developer tools to SaaS platforms.
            Each one solved a real problem.
          </p>
        </div>

        <div className="projects-grid">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        <div className="projects-footer">
          <a href="https://github.com/abbysallord" target="_blank" rel="noreferrer" className="btn-ghost">
            <FiGithub size={16} />
            See more on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
