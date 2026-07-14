import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { useCursor } from './hooks/useCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Timeline from './components/Timeline';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Leadership from './components/Leadership';
import Exploring from './components/Exploring';
import TechStack from './components/TechStack';
import Philosophy from './components/Philosophy';
import Gallery from './components/Gallery';
import Writing from './components/Writing';
import Contact from './components/Contact';
import Now from './components/Now';
import Resume from './components/Resume';


gsap.registerPlugin(ScrollTrigger);

// Initialize Lenis smooth scrolling
let lenis;

function initLenis() {
  lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  // Connect GSAP ScrollTrigger to Lenis
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);

  return lenis;
}

export default function App() {
  const { dotRef, ringRef } = useCursor();
  const [hash, setHash] = useState(window.location.hash || '#/');

  useEffect(() => {
    const l = initLenis();
    return () => {
      l.destroy();
    };
  }, []);

  // Listen to hash routes
  useEffect(() => {
    const handleHashChange = () => {
      setHash(window.location.hash || '#/');
      
      // Scroll to top on route change
      window.scrollTo(0, 0);
      if (lenis) lenis.scrollTo(0, { immediate: true });
      
      // Refresh GSAP ScrollTrigger
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Scroll reveal via IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [hash]); // Re-observe when view changes

  const isNowPage = hash === '#/now';
  const isResumePage = hash === '#/resume';


  return (
    <>
      <Helmet>
        <title>{isResumePage ? "Resume — Dhanush Shenoy H" : isNowPage ? "Now — Dhanush Shenoy H" : "Dhanush Shenoy H — AI Engineer & Full Stack Developer"}</title>
        <meta name="description" content={isResumePage ? "Professional resume of Dhanush Shenoy H, AI Engineer & Full Stack Developer detailing experience, projects, skills, and contact info." : isNowPage ? "What Dhanush Shenoy H is building, learning, and reading right now." : "Portfolio of Dhanush Shenoy H, an AI Engineer, builder, entrepreneur, and student leader specializing in multi-agent systems and developer infrastructure."} />
        <meta name="keywords" content="Dhanush Shenoy H, AI Engineer, Full Stack Developer, Multi-Agent Systems, Agentic Infrastructure, Yenepoya, NIAT" />
        <meta name="author" content="Dhanush Shenoy H" />
        <link rel="canonical" href={isResumePage ? "https://www.dshenoyh.in/#/resume" : isNowPage ? "https://www.dshenoyh.in/#/now" : "https://www.dshenoyh.in/"} />
        
        {/* OpenGraph */}
        <meta property="og:title" content={isResumePage ? "Resume — Dhanush Shenoy H" : isNowPage ? "Now — Dhanush Shenoy H" : "Dhanush Shenoy H — AI Engineer & Full Stack Developer"} />
        <meta property="og:description" content={isResumePage ? "Professional resume of Dhanush Shenoy H, AI Engineer & Full Stack Developer detailing experience, projects, skills, and contact info." : isNowPage ? "What Dhanush Shenoy H is building, learning, and reading right now." : "Portfolio of Dhanush Shenoy H, an AI Engineer, builder, entrepreneur, and student leader specializing in multi-agent systems and developer infrastructure."} />
        <meta property="og:image" content="/favicon.svg" />
        <meta property="og:url" content={isResumePage ? "https://www.dshenoyh.in/#/resume" : isNowPage ? "https://www.dshenoyh.in/#/now" : "https://www.dshenoyh.in/"} />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={isResumePage ? "Resume — Dhanush Shenoy H" : isNowPage ? "Now — Dhanush Shenoy H" : "Dhanush Shenoy H — AI Engineer & Full Stack Developer"} />
        <meta name="twitter:description" content={isResumePage ? "Professional resume of Dhanush Shenoy H, AI Engineer & Full Stack Developer detailing experience, projects, skills, and contact info." : isNowPage ? "What Dhanush Shenoy H is building, learning, and reading right now." : "Portfolio of Dhanush Shenoy H, an AI Engineer, builder, entrepreneur, and student leader specializing in multi-agent systems and developer infrastructure."} />
        <meta name="twitter:image" content="/favicon.svg" />


        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Dhanush Shenoy H",
            "jobTitle": "AI Engineer & Full Stack Developer",
            "url": "https://www.dshenoyh.in/",
            "alumniOf": {
              "@type": "CollegeOrUniversity",
              "name": "Yenepoya University (YSET)"
            },
            "sameAs": [
              "https://github.com/abbysallord",
              "https://drive.google.com/file/d/1O2NmNrT76fyelNoJ_ggRIWKiEDRrP_K-/view?usp=sharing"
            ]
          })}
        </script>
      </Helmet>

      {/* Custom cursor */}
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />

      <Navbar />

      <main style={{ minHeight: '100vh' }}>
        {isNowPage ? (
          <Now />
        ) : isResumePage ? (
          <Resume />
        ) : (
          <>
            <Hero />
            <About />
            <Timeline />
            <Achievements />
            <Projects />
            <Experience />
            <Leadership />
            <Exploring />
            <TechStack />
            <Philosophy />
            <Gallery />
            <Writing />
            <Contact />
          </>
        )}
      </main>


      <Analytics />
      <SpeedInsights />
    </>
  );
}
