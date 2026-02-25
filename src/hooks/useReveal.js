import { useEffect, useRef } from 'react';

export function useReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          if (!options.repeat) observer.unobserve(el);
        } else if (options.repeat) {
          el.classList.remove('visible');
        }
      },
      { threshold: options.threshold || 0.15, rootMargin: options.rootMargin || '0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}

// Stagger children
export function useStaggerReveal(delay = 0.1) {
  const ref = useRef(null);

  useEffect(() => {
    const parent = ref.current;
    if (!parent) return;

    const children = Array.from(parent.querySelectorAll('[data-stagger]'));
    children.forEach((el, i) => {
      el.style.transitionDelay = `${i * delay}s`;
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          children.forEach(el => el.classList.add('visible'));
          observer.unobserve(parent);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(parent);
    return () => observer.disconnect();
  }, [delay]);

  return ref;
}
