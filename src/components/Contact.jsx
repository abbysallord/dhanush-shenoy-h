import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiSend } from 'react-icons/fi';
import { FaXTwitter, FaHeart } from 'react-icons/fa6'
import './Contact.css';

gsap.registerPlugin(ScrollTrigger);

// ── CONFIG ───────────────────────────────────────────────────────
const EMAIL = 'dshenoyh@gmail.com';
const SOCIAL = [
  { icon: FiGithub, label: 'GitHub', href: 'https://github.com/abbysallord' },
  { icon: FiLinkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/dhanush-shenoy-h' },
  { icon: FaXTwitter, label: 'X (formerly Twitter)', href: 'https://x.com/dhanushshenoyh' },
];
// ─────────────────────────────────────────────────────────────────

export default function Contact() {
  const sectionRef = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent

  useGSAP(() => {
    gsap.fromTo('.contact-headline', {
      opacity: 0,
      y: 60,
    }, {
      opacity: 1,
      y: 0,
      duration: 1.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.contact-headline',
        start: 'top 80%',
      }
    });

    gsap.fromTo('.contact-form-wrap, .contact-sidebar', {
      opacity: 0,
      y: 40,
    }, {
      opacity: 1,
      y: 0,
      duration: 0.9,
      stagger: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.contact-grid',
        start: 'top 75%',
      }
    });
  }, { scope: sectionRef });

  const handleChange = (e) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    // Replace with your actual form submission (Formspree, EmailJS, etc.)
    await new Promise(r => setTimeout(r, 1500));
    setStatus('sent');
  };

  return (
    <section id="contact" className="section contact-section" ref={sectionRef}>
      <div className="container">

        {/* Big headline */}
        <div className="contact-headline">
          <span className="label" style={{ display: 'block', marginBottom: '1rem' }}>04 — Contact</span>
          <h2 className="contact-title">
            Let's build<br />something<br /><em>remarkable</em>
          </h2>
        </div>

        <div className="contact-grid">
          {/* Form */}
          <div className="contact-form-wrap">
            {status === 'sent' ? (
              <div className="form-success">
                <div className="success-icon">✓</div>
                <h3>Message sent!</h3>
                <p>I'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label" htmlFor="name">Your name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="form-input"
                    placeholder="What do people call you?"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="form-input"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-input form-textarea"
                    placeholder="Tell me about your project, idea, or just say hello..."
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    required
                  />
                </div>
                <button type="submit" className="form-submit" disabled={status === 'sending'}>
                  {status === 'sending' ? (
                    <span className="sending">Sending<span className="dots">...</span></span>
                  ) : (
                    <>
                      Send message
                      <FiSend size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <div className="contact-sidebar">
            <div className="sidebar-block">
              <span className="label" style={{ display: 'block', marginBottom: '1rem' }}>Direct email</span>
              <a href={`mailto:${EMAIL}`} className="contact-email">
                {EMAIL}
              </a>
            </div>

            <div className="sidebar-block">
              <span className="label" style={{ display: 'block', marginBottom: '1.2rem' }}>Online</span>
              <div className="social-links">
                {SOCIAL.map(({ icon: Icon, label, href }) => (
                  <a key={label} href={href} target="_blank" rel="noreferrer" className="social-link">
                    <Icon size={18} />
                    <span>{label}</span>
                    <span className="social-arrow">↗</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="sidebar-block availability">
              <div className="avail-dot" />
              <div>
                <p className="avail-status">Available for work</p>
                <p className="avail-note">Open to full-time, contract & freelance</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Footer */}
      <div className="contact-footer">
        <div className="container footer-inner">
          <span className="footer-copy">
            © {new Date().getFullYear()} — Built with DSH
          </span>
          <span className="footer-name">Dhanush Shenoy H</span>
        </div>
      </div>
    </section>
  );
}
