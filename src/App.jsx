import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import { useCursor } from './hooks/useCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

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

  useEffect(() => {
    const l = initLenis();
    return () => {
      l.destroy();
    };
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
  }, []);

  return (
    <>
      <Helmet>
        <title>Dhanush Shenoy H — Full Stack Developer</title>
        <meta name="description" content="Portfolio of Dhanush Shenoy H, a full stack developer specializing in building modern web applications." />
        <meta name="keywords" content="Dhanush Shenoy H, Full Stack Developer, React, Portfolio, Web Developer" />
        <meta name="author" content="Dhanush Shenoy H" />
        <meta property="og:title" content="Dhanush Shenoy H — Full Stack Developer" />
        <meta property="og:description" content="Portfolio of Dhanush Shenoy H, a full stack developer specializing in building modern web applications." />
        <meta property="og:image" content="/favicon.svg" />
        <meta property="og:url" content="https://dhanushshenoyh.github.io/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dhanush Shenoy H — Full Stack Developer" />
        <meta name="twitter:description" content="Portfolio of Dhanush Shenoy H, a full stack developer specializing in building modern web applications." />
      </Helmet>

      {/* Custom cursor */}
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Analytics />
      <SpeedInsights />
    </>
  );
}
