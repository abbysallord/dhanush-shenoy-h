import { useEffect, useState } from 'react';
import { FiArrowLeft, FiMail, FiGithub, FiLinkedin, FiExternalLink, FiDownload, FiPrinter, FiCopy, FiCheck, FiFolder, FiAward, FiCpu, FiPlus, FiMinus } from 'react-icons/fi';
import { PROFILE, EXPERIENCES, PROJECTS, LEADERSHIP, ACHIEVEMENTS, SKILLS_CATEGORIZED, EDUCATION } from '../data/portfolioData';
import './Resume.css';

export default function Resume() {
  const [copied, setCopied] = useState(false);
  const [expandedProjects, setExpandedProjects] = useState({});

  // Dynamic calculated stats
  const totalProjects = PROJECTS.length;
  const totalAchievements = ACHIEVEMENTS.length;
  const totalTechnologies = new Set(SKILLS_CATEGORIZED.flatMap(c => c.items)).size;
  
  // Custom estimated years of experience calculation
  // Start year is 2024 (when student started NIAT / professional dev)
  const startYear = 2024;
  const currentYear = new Date().getFullYear();
  const estimatedYears = currentYear - startYear;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = (e) => {
    e.preventDefault();
    window.print();
  };

  const toggleProjectExpand = (id) => {
    setExpandedProjects(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleBack = (e) => {
    e.preventDefault();
    window.location.hash = '#/';
  };

  return (
    <article className="resume-page">
      <div className="container resume-container">
        
        {/* Navigation Bar */}
        <div className="resume-nav-actions no-print">
          <a href="#/" className="resume-back-btn" onClick={handleBack} data-cursor="hover">
            <FiArrowLeft size={16} />
            Back to Portfolio
          </a>
          <div className="action-buttons-group">
            <button className="btn-resume-action" onClick={handleCopyEmail} data-cursor="hover">
              {copied ? <FiCheck size={16} style={{ color: '#c8f542' }} /> : <FiCopy size={16} />}
              {copied ? 'Copied!' : 'Copy Email'}
            </button>
            <button className="btn-resume-action" onClick={handlePrint} data-cursor="hover">
              <FiPrinter size={16} />
              Print / Save PDF
            </button>
            <a href={PROFILE.resumeUrl} target="_blank" rel="noreferrer" className="btn-resume-action cta" data-cursor="hover">
              <FiDownload size={16} />
              Download Original PDF
            </a>
          </div>
        </div>

        {/* Header Block */}
        <header className="resume-header-block">
          <div className="header-meta-left">
            <h1 className="resume-name">{PROFILE.name.first} {PROFILE.name.last}</h1>
            <p className="resume-role-subtitle">{PROFILE.role}</p>
            <p className="resume-location">{PROFILE.location} • <a href="mailto:dhanushshenoyh@gmail.com" className="print-only-text">{PROFILE.email}</a></p>
          </div>
          
          <div className="header-meta-right no-print">
            <ul className="resume-contact-links">
              <li>
                <a href={`mailto:${PROFILE.email}`} data-cursor="hover">
                  <FiMail size={16} />
                  <span>{PROFILE.email}</span>
                </a>
              </li>
              <li>
                <a href={PROFILE.github} target="_blank" rel="noreferrer" data-cursor="hover">
                  <FiGithub size={16} />
                  <span>GitHub Profile</span>
                </a>
              </li>
              <li>
                <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" data-cursor="hover">
                  <FiLinkedin size={16} />
                  <span>LinkedIn Profile</span>
                </a>
              </li>
              <li>
                <a href="https://www.dshenoyh.in" target="_blank" rel="noreferrer" data-cursor="hover">
                  <FiExternalLink size={16} />
                  <span>www.dshenoyh.in</span>
                </a>
              </li>
            </ul>
          </div>
        </header>

        {/* Calculated Stats Banner */}
        <section className="resume-stats-banner no-print">
          <div className="resume-stat-box">
            <FiFolder className="stat-icon" />
            <div>
              <span className="stat-value">{totalProjects}</span>
              <span className="stat-name-label">Projects Built</span>
            </div>
          </div>
          <div className="resume-stat-box">
            <FiAward className="stat-icon" />
            <div>
              <span className="stat-value">{totalAchievements}</span>
              <span className="stat-name-label">Awards & Honors</span>
            </div>
          </div>
          <div className="resume-stat-box">
            <FiCpu className="stat-icon" />
            <div>
              <span className="stat-value">{totalTechnologies}</span>
              <span className="stat-name-label">Technologies Used</span>
            </div>
          </div>
          <div className="resume-stat-box">
            <span className="stat-icon-text">Yr</span>
            <div>
              <span className="stat-value">{estimatedYears}+</span>
              <span className="stat-name-label">Years of Focus</span>
            </div>
          </div>
        </section>

        {/* Profile Summary */}
        <section className="resume-section-wrapper">
          <h2 className="resume-section-title">Summary</h2>
          <p className="resume-summary-text">{PROFILE.summary}</p>
        </section>

        {/* Experience Section */}
        <section className="resume-section-wrapper">
          <h2 className="resume-section-title">Professional Experience</h2>
          <div className="resume-timeline-list">
            {EXPERIENCES.map((exp, idx) => (
              <div key={idx} className="resume-timeline-item">
                <div className="resume-timeline-dot" />
                <div className="resume-timeline-content">
                  <div className="resume-timeline-header">
                    <div>
                      <h3 className="resume-item-role">{exp.role}</h3>
                      <p className="resume-item-company">{exp.company} <span className="no-print">• {exp.type}</span></p>
                    </div>
                    <span className="resume-item-date">{exp.period}</span>
                  </div>
                  <p className="resume-item-desc">{exp.desc}</p>
                  <ul className="resume-item-bullets">
                    {exp.highlights.map((bullet, bulletIdx) => (
                      <li key={bulletIdx}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="resume-section-wrapper">
          <h2 className="resume-section-title">Key Projects</h2>
          <div className="resume-projects-list">
            {PROJECTS.filter(p => p.featured).map((proj) => {
              const isExpanded = expandedProjects[proj.id];
              return (
                <div key={proj.id} className="resume-project-item">
                  <div className="resume-project-header">
                    <div>
                      <h3 className="resume-project-title-text">
                        {proj.title}
                        <span className="resume-project-sub">{proj.subtitle}</span>
                      </h3>
                      <div className="resume-project-tech-pills">
                        {proj.tags.map((t, idx) => (
                          <span key={idx} className="resume-tech-pill">{t}</span>
                        ))}
                      </div>
                    </div>
                    <div className="resume-project-actions no-print">
                      <button 
                        className="btn-project-expand" 
                        onClick={() => toggleProjectExpand(proj.id)}
                        data-cursor="hover"
                      >
                        {isExpanded ? <FiMinus size={14} /> : <FiPlus size={14} />}
                        {isExpanded ? 'Less' : 'Details'}
                      </button>
                      {proj.github && (
                        <a href={proj.github} target="_blank" rel="noreferrer" className="project-action-link" data-cursor="hover">
                          <FiGithub size={14} />
                        </a>
                      )}
                      {proj.live && (
                        <a href={proj.live} target="_blank" rel="noreferrer" className="project-action-link" data-cursor="hover">
                          <FiExternalLink size={14} />
                        </a>
                      )}
                    </div>
                  </div>
                  
                  {/* Detailed specs shown on interactive click, but always expanded during print mode */}
                  <div className={`resume-project-details ${isExpanded ? 'expanded' : ''} print-always-visible`}>
                    <p className="resume-detail-p"><strong>Problem:</strong> {proj.problem}</p>
                    <p className="resume-detail-p"><strong>Solution:</strong> {proj.solution}</p>
                    <p className="resume-detail-p"><strong>Impact:</strong> {proj.impact}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Leadership Section */}
        <section className="resume-section-wrapper">
          <h2 className="resume-section-title">Leadership & Community</h2>
          <div className="resume-grid-two-col">
            {LEADERSHIP.map((lead) => (
              <div key={lead.id} className="resume-lead-item">
                <h3 className="resume-lead-title">{lead.title}</h3>
                <p className="resume-lead-role">{lead.role}</p>
                <p className="resume-lead-desc">{lead.desc}</p>
                <p className="resume-lead-impact"><strong>Impact:</strong> {lead.impact}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Achievements Section */}
        <section className="resume-section-wrapper">
          <h2 className="resume-section-title">Achievements & Honors</h2>
          <div className="resume-achievements-list">
            {ACHIEVEMENTS.map((ach) => (
              <div key={ach.id} className="resume-ach-item">
                <div className="ach-dot" />
                <div className="ach-content-wrap">
                  <div className="ach-header-wrap">
                    <span className="ach-badge-label no-print">{ach.badge}</span>
                    <h3 className="ach-title-label">{ach.title}</h3>
                    <span className="ach-date-label">{ach.year}</span>
                  </div>
                  <p className="ach-desc-label">{ach.org} • {ach.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="resume-section-wrapper">
          <h2 className="resume-section-title">Skills & Competencies</h2>
          <div className="resume-skills-categories">
            {SKILLS_CATEGORIZED.map((cat, idx) => (
              <div key={idx} className="resume-skill-cat-card">
                <h3 className="resume-skill-cat-title">{cat.cat}</h3>
                <div className="resume-skill-items-wrap">
                  {cat.items.map((item, itemIdx) => (
                    <span key={itemIdx} className="resume-skill-name-tag">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="resume-section-wrapper">
          <h2 className="resume-section-title">Education</h2>
          {EDUCATION.map((edu, idx) => (
            <div key={idx} className="resume-edu-card">
              <div className="resume-edu-header">
                <div>
                  <h3 className="resume-edu-degree">{edu.degree}</h3>
                  <p className="resume-edu-institution">{edu.institution}</p>
                  <p className="resume-edu-partner">{edu.industryPartner}</p>
                </div>
                <span className="resume-edu-date">{edu.period}</span>
              </div>
              <p className="resume-edu-note">{edu.note}</p>
              <div className="resume-coursework-wrap">
                <span className="coursework-label">Coursework:</span>
                <div className="coursework-pills">
                  {edu.coursework.map((course, courseIdx) => (
                    <span key={courseIdx} className="coursework-pill">{course}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Print only footer */}
        <footer className="resume-print-footer print-only">
          <p>Generated dynamically from portfolio schema. References: www.dshenoyh.in • github.com/abbysallord • linkedin.com/in/dhanush-shenoy-h-7622922a4/</p>
        </footer>

      </div>
    </article>
  );
}
