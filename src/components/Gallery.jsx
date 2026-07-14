import { useState, useEffect } from 'react';
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import './Gallery.css';

// To add gallery images, populate this array with object items:
// { url: '/images/event1.jpg', caption: 'Organizing CODE4CHANGE Hackathon' }
const IMAGES = [];

export default function Gallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  // If no images exist in the array, gracefully hide the entire component
  if (!IMAGES || IMAGES.length === 0) {
    return null;
  }

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
      if (e.key === 'ArrowRight') setPhotoIndex((prev) => (prev + 1) % IMAGES.length);
      if (e.key === 'ArrowLeft') setPhotoIndex((prev) => (prev - 1 + IMAGES.length) % IMAGES.length);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const openLightbox = (idx) => {
    setPhotoIndex(idx);
    setIsOpen(true);
  };

  return (
    <section id="gallery" className="section gallery-section">
      <div className="container">
        <div className="section-header">
          <span className="label">09 — Gallery</span>
          <h2 className="section-title" style={{ marginTop: '1rem' }}>
            Moments &<br /><em>Community</em>
          </h2>
          <p className="projects-intro">
            Glimpses from hackathons, developer meetups, and campus leadership events.
          </p>
        </div>

        <div className="gallery-grid">
          {IMAGES.map((img, idx) => (
            <div
              key={idx}
              className="gallery-item-wrap"
              onClick={() => openLightbox(idx)}
              data-cursor="hover"
            >
              <img src={img.url} alt={img.caption} className="gallery-img" loading="lazy" />
              <div className="gallery-overlay">
                <span className="gallery-caption">{img.caption}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {isOpen && (
        <div className="lightbox-overlay" onClick={() => setIsOpen(false)}>
          <button className="lightbox-btn close-btn" onClick={() => setIsOpen(false)} aria-label="Close">
            <FiX size={24} />
          </button>
          
          <button
            className="lightbox-btn prev-btn"
            onClick={(e) => {
              e.stopPropagation();
              setPhotoIndex((photoIndex - 1 + IMAGES.length) % IMAGES.length);
            }}
            aria-label="Previous"
          >
            <FiChevronLeft size={32} />
          </button>

          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={IMAGES[photoIndex].url} alt={IMAGES[photoIndex].caption} className="lightbox-img" />
            <p className="lightbox-caption">{IMAGES[photoIndex].caption}</p>
          </div>

          <button
            className="lightbox-btn next-btn"
            onClick={(e) => {
              e.stopPropagation();
              setPhotoIndex((photoIndex + 1) % IMAGES.length);
            }}
            aria-label="Next"
          >
            <FiChevronRight size={32} />
          </button>
        </div>
      )}
    </section>
  );
}
