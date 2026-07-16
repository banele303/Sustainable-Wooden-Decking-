import React, { useState } from 'react';

const galleryItems = [
  { id: 1, src: '/images/tanda_tula_walkway.jpg', title: 'Bamboo Walkway', category: 'Outdoor Decking', accent: 'var(--accent-eco)' },
  { id: 2, src: '/images/timber_decking.png', title: 'Hardwood Deck', category: 'Outdoor Decking', accent: 'var(--accent-secondary)' },
  { id: 3, src: '/images/moso_bamboo_colors.jpg', title: 'MOSO® Bamboo Flooring', category: 'Indoor Flooring', accent: 'var(--accent-eco)' },
  { id: 4, src: '/images/project_modern_house.png', title: 'Modern Engineered Floor', category: 'Indoor Flooring', accent: 'var(--accent-primary)' },
  { id: 5, src: '/images/project_patio_gazebo.png', title: 'Timber Pergola', category: 'Structures', accent: '#a78bfa' },
  { id: 6, src: '/images/project_pool_deck.png', title: 'Pool Surround Deck', category: 'Outdoor Decking', accent: 'var(--accent-secondary)' },
  { id: 7, src: '/images/composite_boards.png', title: 'Composite Boards', category: 'Materials', accent: 'var(--accent-primary)' },
  { id: 8, src: '/images/before_after_deck.png', title: 'Full Renovation', category: 'Restoration', accent: '#f97316' },
];

const FILTERS = ['All', 'Outdoor Decking', 'Indoor Flooring', 'Structures', 'Restoration', 'Materials'];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightbox, setLightbox] = useState(null);

  const filtered = activeFilter === 'All' ? galleryItems : galleryItems.filter(g => g.category === activeFilter);

  return (
    <section style={{ padding: '100px 0', background: 'var(--bg-deep)', position: 'relative' }} id="gallery">
      {/* Subtle grid background */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)',
        backgroundSize: '40px 40px', pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative' }}>
        {/* Section header */}
        <div className="section-header text-center fade-in-up active">
          <span className="badge" style={{ background: 'rgba(197,126,59,0.1)', color: 'var(--accent-secondary)', border: '1px solid rgba(197,126,59,0.25)' }}>
            Portfolio
          </span>
          <h2 className="section-title">Project Gallery</h2>
          <p className="section-desc">A selection of our finest decking, flooring, and restoration projects across Johannesburg and Gauteng.</p>
        </div>

        {/* Filter pills */}
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '10px', marginBottom: '48px' }}>
          {FILTERS.map(f => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              style={{
                padding: '8px 22px',
                borderRadius: '100px',
                border: '1px solid',
                borderColor: activeFilter === f ? 'var(--accent-eco)' : 'rgba(255,255,255,0.12)',
                background: activeFilter === f ? 'rgba(60,168,70,0.15)' : 'rgba(255,255,255,0.03)',
                color: activeFilter === f ? 'var(--accent-eco)' : 'var(--text-secondary)',
                fontSize: '0.85rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                backdropFilter: 'blur(8px)'
              }}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Masonry-style grid */}
        <div style={{ columns: '3', columnGap: '16px' }} className="gallery-grid">
          {filtered.map((item) => (
            <div
              key={item.id}
              onClick={() => setLightbox(item)}
              style={{
                breakInside: 'avoid',
                marginBottom: '16px',
                borderRadius: '16px',
                overflow: 'hidden',
                cursor: 'zoom-in',
                position: 'relative',
                border: '1px solid rgba(255,255,255,0.06)',
                transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)',
                display: 'block'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'scale(1.02)';
                e.currentTarget.style.boxShadow = `0 16px 48px rgba(0,0,0,0.5), 0 0 0 1px ${item.accent}`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <img
                src={item.src}
                alt={item.title}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
              {/* Hover overlay */}
              <div
                style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0) 55%)',
                  opacity: 0, transition: 'opacity 0.35s ease',
                  display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '20px'
                }}
                onMouseEnter={e => e.currentTarget.style.opacity = '1'}
                onMouseLeave={e => e.currentTarget.style.opacity = '0'}
              >
                <span style={{ fontSize: '0.7rem', color: item.accent, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '4px' }}>{item.category}</span>
                <span style={{ fontSize: '1rem', fontWeight: 700, color: '#fff' }}>{item.title}</span>
                <span style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.55)', marginTop: '4px' }}>Click to enlarge →</span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {lightbox && (
          <div
            onClick={() => setLightbox(null)}
            style={{
              position: 'fixed', inset: 0,
              background: 'rgba(0,0,0,0.94)',
              zIndex: 9999,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: '24px',
              backdropFilter: 'blur(20px)',
              cursor: 'zoom-out',
              animation: 'fadeIn 0.2s ease'
            }}
          >
            <div onClick={e => e.stopPropagation()} style={{ position: 'relative', maxWidth: '900px', width: '100%' }}>
              <img
                src={lightbox.src}
                alt={lightbox.title}
                style={{ width: '100%', height: 'auto', borderRadius: '20px', boxShadow: '0 40px 80px rgba(0,0,0,0.8)', display: 'block' }}
              />
              <div style={{ marginTop: '20px', textAlign: 'center' }}>
                <div style={{ fontSize: '0.75rem', color: lightbox.accent, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '4px' }}>{lightbox.category}</div>
                <div style={{ fontSize: '1.3rem', fontWeight: 800, color: '#fff' }}>{lightbox.title}</div>
              </div>
              <button
                onClick={() => setLightbox(null)}
                style={{
                  position: 'absolute', top: '-14px', right: '-14px',
                  width: '40px', height: '40px',
                  borderRadius: '50%',
                  background: '#fff',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.1rem', fontWeight: 700, color: '#111',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.4)'
                }}
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
