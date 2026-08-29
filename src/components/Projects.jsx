import { useRef, useState, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiGithub, FiExternalLink, FiPlus, FiMinus, FiX, FiArrowRight } from 'react-icons/fi';
import './Projects.css';

gsap.registerPlugin(ScrollTrigger);

import { PROJECTS } from '../data/portfolioData';

function RedirectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'Enter' && project?.live) {
        window.open(project.live, '_blank', 'noopener,noreferrer');
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  const targetUrl = project.live || project.github;
  const isLive = Boolean(project.live);

  const handleProceed = () => {
    if (targetUrl) {
      window.open(targetUrl, '_blank', 'noopener,noreferrer');
    }
    onClose();
  };

  return (
    <div className="redirect-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div 
        className="redirect-modal-container" 
        onClick={(e) => e.stopPropagation()}
        style={{ '--project-accent': project.accent || 'var(--accent)' }}
      >
        <button className="redirect-modal-close" onClick={onClose} aria-label="Close modal">
          <FiX size={18} />
        </button>

        <div className="redirect-modal-eyebrow">
          <span className="pulse-dot" />
          <span>OUTBOUND REDIRECT // {project.id}</span>
        </div>

        <div className="redirect-modal-content">
          <h3 className="redirect-modal-title">{project.title}</h3>
          <p className="redirect-modal-subtitle">{project.subtitle}</p>
          <p className="redirect-modal-desc">{project.desc}</p>

          <div className="redirect-modal-target">
            <span className="target-label">DESTINATION:</span>
            <span className="target-url">{targetUrl}</span>
          </div>
        </div>

        <div className="redirect-modal-actions">
          <button className="btn-modal-cancel" onClick={onClose}>
            Cancel
          </button>
          <button className="btn-modal-proceed" onClick={handleProceed}>
            <span>{isLive ? 'Launch Live App' : 'View GitHub Repo'}</span>
            <FiArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project, onSelect }) {
  const [hovered, setHovered] = useState(false);

  const handleClick = (e) => {
    // If the click occurred inside an explicit card-link icon, let the anchor handle it
    if (e.target.closest('.card-link')) {
      return;
    }
    onSelect(project);
  };

  return (
    <article
      className={`project-card ${project.featured ? 'featured' : ''}`}
      onClick={handleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      data-stagger
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick(e);
        }
      }}
    >
      <div className="card-top">
        <div className="card-meta">
          <span className="proj-id">{project.id}</span>
          <span className="proj-year">{project.year}</span>
          {project.featured && <span className="proj-badge">Featured</span>}
        </div>
        <div className="card-links">
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" className="card-link" aria-label="GitHub" data-cursor="hover" onClick={(e) => e.stopPropagation()}>
              <FiGithub size={16} />
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer" className="card-link" aria-label="Live" data-cursor="hover" onClick={(e) => e.stopPropagation()}>
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
  const [selectedProject, setSelectedProject] = useState(null);

  const featuredProjects = PROJECTS.filter(p => p.featured);
  const otherProjects = PROJECTS.filter(p => !p.featured);
  const displayedProjects = showAll ? [...featuredProjects, ...otherProjects] : featuredProjects;

  useGSAP(() => {
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
            <ProjectCard 
              key={project.id} 
              project={project} 
              onSelect={(p) => setSelectedProject(p)} 
            />
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

      {selectedProject && (
        <RedirectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
}
