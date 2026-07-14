import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiGithub, FiExternalLink, FiPlus, FiMinus } from 'react-icons/fi';
import './Projects.css';

gsap.registerPlugin(ScrollTrigger);

import { PROJECTS } from '../data/portfolioData';



function ProjectCard({ project }) {
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
        </div>
        <div className="card-links">
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" className="card-link" aria-label="GitHub" data-cursor="hover">
              <FiGithub size={16} />
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer" className="card-link" aria-label="Live" data-cursor="hover">
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
        style={{ '--card-accent': project.accent, opacity: hovered ? 0.08 : 0 }}
      />
    </article>
  );
}

export default function Projects() {
  const sectionRef = useRef(null);
  const [showAll, setShowAll] = useState(false);

  const featuredProjects = PROJECTS.filter(p => p.featured);
  const otherProjects = PROJECTS.filter(p => !p.featured);
  const displayedProjects = showAll ? [...featuredProjects, ...otherProjects] : featuredProjects;

  useGSAP(() => {
    // Re-run scrolltrigger animations on card load
    ScrollTrigger.refresh();
  }, [showAll]);

  return (
    <section id="projects" className="section projects-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="label">02 — Selected Work</span>
          <h2 className="section-title" style={{ marginTop: '1rem' }}>
            Featured Products &<br /><em>Projects</em>
          </h2>
          <p className="projects-intro">
            A curated selection of core engineering products — spanning multi-agent automations, 
            IoT hardware integrations, and bespoke commercial platforms.
          </p>
        </div>

        <div className="projects-grid">
          {displayedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="projects-footer">
          <button 
            className="btn-ghost" 
            onClick={() => setShowAll(!showAll)}
            data-cursor="hover"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', cursor: 'pointer', background: 'transparent' }}
          >
            {showAll ? (
              <>
                <FiMinus size={16} />
                Collapse Archive
              </>
            ) : (
              <>
                <FiPlus size={16} />
                View Project Archive
              </>
            )}
          </button>
          
          <a href="https://github.com/abbysallord" target="_blank" rel="noreferrer" className="btn-ghost" data-cursor="hover" style={{ marginLeft: '1rem' }}>
            <FiGithub size={16} />
            GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
}
