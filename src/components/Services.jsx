import React from 'react';

const services = [
  {
    id: 'bamboo-decking',
    icon: '🎋',
    category: 'ECO OUTDOOR',
    title: 'Moso Bamboo Decking',
    description: 'Carbon-negative exterior decking from MOSO® Bamboo X-treme® or N-durance®. Class 1 durability, stunning natural aesthetics, and a 25-year warranty.',
    image: '/images/tanda_tula_walkway.jpg',
    price: 'From R1,850/m²',
    tag: 'Most Popular',
    tagColor: 'var(--accent-eco)'
  },
  {
    id: 'bamboo-flooring',
    icon: '🌿',
    category: 'ECO INDOOR',
    title: 'Moso Bamboo Flooring',
    description: 'High-density indoor bamboo boards that are harder than oak, scratch-resistant, and dimensionally stable. Warm organic elegance for any interior.',
    image: '/images/moso_bamboo_colors.jpg',
    price: 'From R1,200/m²',
    tag: 'Eco Choice',
    tagColor: '#22c55e'
  },
  {
    id: 'hardwood-decking',
    icon: '🪵',
    category: 'TIMBER OUTDOOR',
    title: 'Hardwood Decking',
    description: 'Custom-built decking from responsibly sourced Garapa and Balau hardwoods. Installed with hidden stainless steel clips for a seamless, premium finish.',
    image: '/images/timber_decking.png',
    price: 'From R1,800/m²',
    tag: 'Classic',
    tagColor: 'var(--accent-secondary)'
  },
  {
    id: 'engineered-flooring',
    icon: '✨',
    category: 'TIMBER INDOOR',
    title: 'Engineered Wood Flooring',
    description: 'Luxury French Oak and Walnut veneers on stable multi-layer cores. Maximum dimensional stability with natural wood beauty for upscale interiors.',
    image: '/images/project_modern_house.png',
    price: 'From R1,350/m²',
    tag: 'Luxury',
    tagColor: 'var(--accent-primary)'
  },
  {
    id: 'pergolas-cladding',
    icon: '🏡',
    category: 'STRUCTURES',
    title: 'Pergolas & Cladding',
    description: 'Architectural pergolas and exterior bamboo wall cladding for shade, privacy, and structural beauty. Perfectly matched to your decking aesthetic.',
    image: '/images/project_patio_gazebo.png',
    price: 'Custom Quote',
    tag: 'Bespoke',
    tagColor: '#a78bfa'
  },
  {
    id: 'restoration-maintenance',
    icon: '🔧',
    category: 'CARE & RESTORE',
    title: 'Restoration & Maintenance',
    description: 'Bring weathered timber and bamboo installations back to life. We sand, clean, repair, and apply UV-protective oils for a showroom-quality result.',
    image: '/images/before_after_deck.png',
    price: 'From R220/m²',
    tag: 'Trusted',
    tagColor: '#f97316'
  }
];

export default function Services({ setView, setServiceId }) {
  const handleCardClick = (id) => {
    setServiceId(id);
    setView('service-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section style={{ padding: '100px 0', position: 'relative', overflow: 'hidden' }} id="services">
      {/* Decorative background line grid */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none' }} />

      <div className="container" style={{ position: 'relative' }}>
        <div className="section-header text-center fade-in-up active">
          <span className="badge" style={{ background: 'rgba(60,168,70,0.1)', color: 'var(--accent-eco)', border: '1px solid rgba(60,168,70,0.25)' }}>Our Services</span>
          <h2 className="section-title">Premium Decking & Flooring</h2>
          <p className="section-desc">Eco-friendly supply and installation from Johannesburg's Moso Bamboo specialists. Every project built to last generations.</p>
        </div>

        {/* 3-column responsive grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px' }}>
          {services.map((s, idx) => (
            <div
              key={s.id}
              className="fade-in-up active"
              onClick={() => handleCardClick(s.id)}
              style={{
                transitionDelay: `${idx * 0.06}s`,
                cursor: 'pointer',
                borderRadius: '20px',
                overflow: 'hidden',
                background: 'rgba(20,20,25,0.8)',
                border: '1px solid rgba(255,255,255,0.07)',
                backdropFilter: 'blur(12px)',
                transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.borderColor = 'rgba(60,168,70,0.4)';
                e.currentTarget.style.boxShadow = '0 24px 48px rgba(0,0,0,0.4), 0 0 0 1px rgba(60,168,70,0.2)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Image */}
              <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
                <img src={s.image} alt={s.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.06)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                />
                {/* Tag */}
                <div style={{ position: 'absolute', top: '12px', left: '12px', padding: '4px 12px', borderRadius: '100px', background: s.tagColor, color: '#fff', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.06em' }}>{s.tag}</div>
                {/* Category */}
                <div style={{ position: 'absolute', top: '12px', right: '12px', padding: '4px 10px', borderRadius: '100px', background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(8px)', color: 'rgba(255,255,255,0.7)', fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.1em' }}>{s.category}</div>
              </div>

              {/* Content */}
              <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '12px', flexGrow: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '1.4rem' }}>{s.icon}</span>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#fff', fontFamily: 'var(--font-heading)', margin: 0 }}>{s.title}</h3>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, margin: 0, flexGrow: 1 }}>{s.description}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '16px', marginTop: '4px' }}>
                  <span style={{ fontWeight: 800, color: 'var(--accent-secondary)', fontSize: '1rem' }}>{s.price}</span>
                  <span style={{ color: 'var(--accent-eco)', fontSize: '0.85rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>View Details <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
