import React from 'react';

const ADVANTAGES = [
  {
    id: 'sustainability',
    badge: 'Sustainability',
    title: 'Rapidly Renewable',
    desc: 'Bamboo stores CO₂ as it grows and matures in just 4 to 5 years. Harvesting preserves the root system, preventing deforestation.',
    image: '/images/bamboo_advantage_sustainability.jpg',
    color: 'var(--accent-eco)',
  },
  {
    id: 'lifespan',
    badge: 'Long Lifespan',
    title: '25-Year Warranty',
    desc: 'Moso Bamboo decking has an exceptionally long lifespan comparable to premium hardwoods like Ipe, backed by a 25-year warranty.',
    image: '/images/bamboo_advantage_lifespan.jpg',
    color: 'var(--accent-primary)',
  },
  {
    id: 'durability',
    badge: 'Durability Class 1',
    title: 'Maximum Stability',
    desc: 'Achieves the highest durability class 1 (EN350). No warping, cupping, or bowing from coastal humidity to winter frost.',
    image: '/images/bamboo_advantage_durability.jpg',
    color: 'var(--accent-secondary)',
  },
  {
    id: 'natural-look',
    badge: 'Natural Look',
    title: 'Organic Warmth',
    desc: 'Brings a warm, premium atmosphere to terraces, roof decks, and walkways. A natural aesthetic opposite to plastic composites.',
    image: '/images/bamboo_advantage_natural.jpg',
    color: '#a78bfa',
  },
  {
    id: 'pros-cons',
    badge: 'Honest Take',
    title: 'Pros & Cons',
    desc: 'We provide clear, honest expectations. Extremely dense and scratch-resistant, but requires annual UV oiling to maintain color.',
    image: '/images/bamboo_advantage_proscons.jpg',
    color: '#f97316',
  }
];

export default function BambooAdvantages() {
  return (
    <section style={{
      padding: '100px 0',
      background: 'linear-gradient(180deg, rgba(10,18,10,0.98) 0%, var(--bg-deep) 100%)',
      position: 'relative',
      overflow: 'hidden'
    }} id="advantages">
      
      {/* Decorative ambient background mesh */}
      <div style={{
        position: 'absolute', top: '20%', left: '10%',
        width: '400px', height: '400px',
        background: 'radial-gradient(circle, rgba(60,168,70,0.06) 0%, transparent 70%)',
        pointerEvents: 'none', zIndex: 1
      }} />
      <div style={{
        position: 'absolute', bottom: '20%', right: '10%',
        width: '450px', height: '450px',
        background: 'radial-gradient(circle, rgba(197,126,59,0.05) 0%, transparent 70%)',
        pointerEvents: 'none', zIndex: 1
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 5 }}>
        
        {/* Section Header */}
        <div className="section-header text-center fade-in-up active">
          <span className="badge" style={{
            background: 'rgba(60,168,70,0.1)',
            color: 'var(--accent-eco)',
            border: '1px solid rgba(60,168,70,0.25)'
          }}>
            Premium Material
          </span>
          <h2 className="section-title">The Moso Bamboo Advantage</h2>
          <p className="section-desc">Why architect-specified thermal-treated bamboo is replacing traditional timber and composite decking across South Africa.</p>
        </div>

        {/* Dynamic Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '30px',
          marginTop: '50px'
        }}>
          {ADVANTAGES.map((adv, idx) => (
            <div
              key={adv.id}
              style={{
                position: 'relative',
                borderRadius: '24px',
                overflow: 'hidden',
                background: 'rgba(20,20,25,0.6)',
                border: '1px solid rgba(255,255,255,0.06)',
                backdropFilter: 'blur(12px)',
                height: '460px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                cursor: 'pointer'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.borderColor = adv.color;
                e.currentTarget.style.boxShadow = `0 24px 48px rgba(0,0,0,0.5), 0 0 16px ${adv.color}33`;
                const img = e.currentTarget.querySelector('img');
                if (img) img.style.transform = 'scale(1.08)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                e.currentTarget.style.boxShadow = 'none';
                const img = e.currentTarget.querySelector('img');
                if (img) img.style.transform = 'scale(1)';
              }}
            >
              {/* Card Image */}
              <div style={{
                position: 'absolute', inset: 0,
                overflow: 'hidden', zIndex: 1
              }}>
                <img
                  src={adv.image}
                  alt={adv.title}
                  style={{
                    width: '100%', height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                />
                {/* Dark Vignette Overlay */}
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, rgba(10,10,12,0.95) 0%, rgba(10,10,12,0.4) 60%, rgba(10,10,12,0.15) 100%)'
                }} />
              </div>

              {/* Card Content Overlay */}
              <div style={{
                position: 'relative', zIndex: 2,
                padding: '30px',
                display: 'flex', flexDirection: 'column',
                gap: '12px'
              }}>
                {/* Badge */}
                <span style={{
                  alignSelf: 'flex-start',
                  padding: '4px 12px',
                  borderRadius: '100px',
                  background: `rgba(${adv.id === 'sustainability' ? '60,168,70' : adv.id === 'lifespan' ? '197,126,59' : '229,169,59'}, 0.15)`,
                  color: adv.color,
                  border: `1px solid ${adv.color}40`,
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase'
                }}>
                  {adv.badge}
                </span>

                {/* Title */}
                <h3 style={{
                  fontSize: '1.4rem',
                  fontWeight: 800,
                  color: '#fff',
                  fontFamily: 'var(--font-heading)',
                  margin: 0
                }}>
                  {adv.title}
                </h3>

                {/* Description */}
                <p style={{
                  fontSize: '0.92rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
                  margin: 0
                }}>
                  {adv.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
