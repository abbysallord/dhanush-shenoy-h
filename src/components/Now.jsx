import { useEffect } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import './Now.css';

export default function Now() {
  // Scroll to top when loading the now page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBack = (e) => {
    e.preventDefault();
    window.location.hash = '#/';
  };

  return (
    <article className="now-page">
      <div className="container now-container">
        
        {/* Header */}
        <header className="now-header">
          <a href="#/" className="now-back-btn" onClick={handleBack} data-cursor="hover">
            <FiArrowLeft size={16} />
            Back to Portfolio
          </a>
          <div className="now-title-wrap">
            <span className="label now-label">// Now</span>
            <h1 className="now-title">What I'm focused on<br /><em>right now</em></h1>
            <p className="now-meta-desc">
              Inspired by Derek Sivers, this is a <a href="https://nownownow.com/about" target="_blank" rel="noreferrer">now page</a> detailing my active projects, learning directions, and immediate goals.
            </p>
            <div className="now-timestamp">
              <span className="timestamp-dot" />
              <span>Last updated: July 14, 2026</span>
            </div>
          </div>
        </header>

        {/* Content Grid */}
        <div className="now-grid">
          
          <section className="now-section-card">
            <h2 className="now-card-title">Currently Building</h2>
            <ul className="now-card-list">
              <li>
                <strong>AI Systems:</strong> Developing customizable agentic workflows that automate developer tasks.
              </li>
              <li>
                <strong>SaaS Products:</strong> Scaling AgroNova for agricultural analytics and CardioNerve for healthcare logistics.
              </li>
              <li>
                <strong>Product Engineering:</strong> Crafting production-grade frontends using Next.js and high-fidelity GSAP timelines.
              </li>
            </ul>
          </section>

          <section className="now-section-card">
            <h2 className="now-card-title">Current Learning</h2>
            <ul className="now-card-list">
              <li>
                <strong>Agentic Frameworks:</strong> Diving deep into swarm intelligence and state management in multi-agent environments.
              </li>
              <li>
                <strong>Developer Tooling:</strong> Writing compilers, custom AST parsers, and performance analysis systems.
              </li>
              <li>
                <strong>Durable Workflows:</strong> Investigating state preservation and retries using durable execution layers.
              </li>
            </ul>
          </section>

          <section className="now-section-card">
            <h2 className="now-card-title">Reading List</h2>
            <ul className="now-card-list">
              <li>
                <strong>Deep Software Engineering:</strong> Studying modular code design, API design aesthetics, and robust error systems.
              </li>
              <li>
                <strong>Startup Engineering:</strong> Analyzing start-to-finish product scaling, developer marketing, and product iteration.
              </li>
            </ul>
          </section>

          <section className="now-section-card">
            <h2 className="now-card-title">Active Goals</h2>
            <ul className="now-card-list">
              <li>
                <strong>Open Source:</strong> Launching and maintaining a highly-rated developer infrastructure tool on npm/pypi.
              </li>
              <li>
                <strong>Community Scale:</strong> Growing the OpenLoop developer community to connect and support regional builders.
              </li>
              <li>
                <strong>Physical Health:</strong> Maintaining a daily workout and run schedule alongside deep coding sessions.
              </li>
            </ul>
          </section>

          <section className="now-section-card">
            <h2 className="now-card-title">Current Experiments</h2>
            <ul className="now-card-list">
              <li>
                <strong>Headless automation:</strong> Scripting complex browser paths for automatic lead indexing.
              </li>
              <li>
                <strong>AI Video Pipelines:</strong> Programmatic frame manipulation and prompting hooks.
              </li>
            </ul>
          </section>

          <section className="now-section-card">
            <h2 className="now-card-title">Active Stack</h2>
            <div className="now-stack-tags">
              <span className="now-tag">TypeScript</span>
              <span className="now-tag">Node.js</span>
              <span className="now-tag">FastAPI</span>
              <span className="now-tag">Next.js</span>
              <span className="now-tag">PostgreSQL</span>
              <span className="now-tag">Docker</span>
              <span className="now-tag">Cloudflare Workers</span>
              <span className="now-tag">LangChain</span>
              <span className="now-tag">GSAP</span>
            </div>
          </section>

        </div>

        {/* Footer philosophy note */}
        <footer className="now-footer">
          <p className="now-philosophy-quote">
            "Luck is not a factor I can calculate. My consistency is."
          </p>
        </footer>

      </div>
    </article>
  );
}
