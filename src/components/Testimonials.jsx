import React, { useState, useEffect } from 'react';

const reviews = [
  {
    stars: 5,
    text: '"SWDF SA transformed our back patio with Moso Bamboo decking. The finish is absolutely stunning — it looks like something out of a design magazine. Incredibly professional team and the eco story really resonated with us."',
    name: 'Thabo Mokoena',
    service: 'Moso Bamboo Decking — Bryanston, Johannesburg',
    avatar: 'TM'
  },
  {
    stars: 5,
    text: '"We installed their MOSO® Bamboo X-treme® boards on our commercial rooftop terrace. Three years in and it looks brand new. The Class 1 durability rating is not a marketing claim — it\'s real. Highly recommend!"',
    name: 'Liezel van der Berg',
    service: 'Commercial Rooftop Deck — Sandton, Johannesburg',
    avatar: 'LV'
  },
  {
    stars: 5,
    text: '"Had our old timber deck restored and re-oiled by SWDF SA. They showed up on time, worked cleanly, and the result exceeded our expectations. From a weathered eyesore to a beautiful outdoor living area."',
    name: 'Sipho Dlamini',
    service: 'Deck Restoration & Maintenance — Ridgeway, Johannesburg',
    avatar: 'SD'
  },
  {
    stars: 5,
    text: '"The engineered oak flooring throughout our open-plan home is breathtaking. The team measured, planned and installed it all in two days with zero mess. The quality is world class for the price."',
    name: 'Kavita Naidoo',
    service: 'Engineered Wood Flooring — Centurion',
    avatar: 'KN'
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reviews.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section style={{ background: 'linear-gradient(180deg, var(--bg-deep) 0%, rgba(10,18,10,0.98) 100%)', padding: '100px 0', position: 'relative', overflow: 'hidden' }} id="reviews">
      {/* Ambient glow */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '600px', height: '400px', background: 'radial-gradient(ellipse, rgba(60,168,70,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div className="container">
        <div className="section-header text-center fade-in-up active">
          <span className="badge" style={{ background: 'rgba(60,168,70,0.1)', color: 'var(--accent-eco)', border: '1px solid rgba(60,168,70,0.25)' }}>Client Stories</span>
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-desc">Real feedback from Johannesburg homeowners and commercial property owners who chose SWDF SA.</p>
        </div>

        {/* Quote display */}
        <div style={{ position: 'relative', maxWidth: '860px', margin: '0 auto 48px auto', minHeight: '200px' }}>
          {reviews.map((r, idx) => (
            <div
              key={idx}
              style={{
                position: idx === 0 ? 'relative' : 'absolute',
                top: 0, left: 0, right: 0,
                opacity: idx === activeIndex ? 1 : 0,
                transform: idx === activeIndex ? 'translateY(0)' : 'translateY(12px)',
                transition: 'opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)',
                pointerEvents: idx === activeIndex ? 'auto' : 'none',
                textAlign: 'center'
              }}
            >
              {/* Stars */}
              <div style={{ display: 'flex', justifyContent: 'center', gap: '4px', marginBottom: '24px' }}>
                {Array.from({ length: r.stars }).map((_, i) => (
                  <svg key={i} width="22" height="22" viewBox="0 0 24 24" fill="#E5A93B" stroke="none">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>

              {/* Quote text */}
              <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', fontStyle: 'italic', color: 'rgba(255,255,255,0.9)', lineHeight: 1.7, marginBottom: '32px' }}>{r.text}</p>

              {/* Reviewer info */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--accent-eco), #2d8f3a)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', fontWeight: 800, color: '#fff', marginBottom: '4px' }}>{r.avatar}</div>
                <span style={{ fontWeight: 700, color: '#fff', fontSize: '1rem' }}>{r.name}</span>
                <span style={{ fontSize: '0.8rem', color: 'var(--accent-eco)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{r.service}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Dots navigation */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
          {reviews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              aria-label={`Go to review ${idx + 1}`}
              style={{
                width: idx === activeIndex ? '28px' : '10px',
                height: '10px',
                borderRadius: '5px',
                background: idx === activeIndex ? 'var(--accent-eco)' : 'rgba(255,255,255,0.15)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)'
              }}
            />
          ))}
        </div>

        {/* Stats row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '24px', marginTop: '72px', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '48px' }}>
          {[
            { value: '250+', label: 'Projects Completed' },
            { value: '100%', label: 'Eco-Friendly Materials' },
            { value: '25yr', label: 'MOSO® Warranty' },
            { value: '5★', label: 'Average Client Rating' }
          ].map((stat, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 900, fontFamily: 'var(--font-heading)', background: 'linear-gradient(135deg, var(--accent-eco), var(--accent-secondary))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{stat.value}</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: '6px' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
