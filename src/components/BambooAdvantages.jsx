import React, { useState } from 'react';

const ADVANTAGES = [
  {
    id: 'sustainability',
    title: 'Sustainability',
    image: '/images/bamboo_advantage_sustainability.jpg',
    color: 'var(--accent-eco)',
  },
  {
    id: 'lifespan',
    title: 'Long Lifespan',
    image: '/images/bamboo_advantage_lifespan.jpg',
    color: 'var(--accent-primary)',
  },
  {
    id: 'durability',
    title: 'Durability Class 1',
    image: '/images/bamboo_advantage_durability.jpg',
    color: 'var(--accent-secondary)',
  },
  {
    id: 'natural-look',
    title: 'Natural Look',
    image: '/images/bamboo_advantage_natural.jpg',
    color: '#a78bfa',
  },
  {
    id: 'pros-cons',
    title: 'Pros & Cons',
    image: '/images/bamboo_advantage_proscons.jpg',
    color: '#f97316',
  }
];

const CONSIDERATIONS = [
  {
    id: 'investment',
    title: 'Investment',
    image: '/images/bamboo_consider_investment.jpg',
    color: 'var(--accent-primary)',
  },
  {
    id: 'weight',
    title: 'Weight',
    image: '/images/bamboo_consider_weight.jpg',
    color: 'var(--accent-secondary)',
  },
  {
    id: 'origin',
    title: 'Origin',
    image: '/images/bamboo_consider_origin.jpg',
    color: 'var(--accent-eco)',
  },
  {
    id: 'colour',
    title: 'Colour',
    image: '/images/bamboo_consider_colour.jpg',
    color: '#00E5FF',
  }
];

export default function BambooAdvantages() {
  const [activeTab, setActiveTab] = useState('advantages'); // 'advantages' or 'considerations'
  
  const currentItems = activeTab === 'advantages' ? ADVANTAGES : CONSIDERATIONS;

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
            Technical Guide
          </span>
          <h2 className="section-title">Moso Bamboo Decoded</h2>
          <p className="section-desc">Make an informed decision. Explore the key advantages of engineered bamboo alongside factors to consider for your build.</p>
        </div>

        {/* Tab Toggle Buttons */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '16px',
          marginBottom: '50px',
          marginTop: '20px'
        }}>
          <button
            onClick={() => setActiveTab('advantages')}
            style={{
              padding: '12px 28px',
              borderRadius: '100px',
              border: '1px solid',
              borderColor: activeTab === 'advantages' ? 'var(--accent-eco)' : 'rgba(255,255,255,0.08)',
              background: activeTab === 'advantages' ? 'rgba(60,168,70,0.12)' : 'rgba(255,255,255,0.02)',
              color: activeTab === 'advantages' ? '#fff' : 'var(--text-secondary)',
              fontSize: '0.9rem',
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              letterSpacing: '0.04em',
              boxShadow: activeTab === 'advantages' ? '0 8px 24px rgba(60,168,70,0.2)' : 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <span>🌿</span> Key Advantages
          </button>
          <button
            onClick={() => setActiveTab('considerations')}
            style={{
              padding: '12px 28px',
              borderRadius: '100px',
              border: '1px solid',
              borderColor: activeTab === 'considerations' ? 'var(--accent-secondary)' : 'rgba(255,255,255,0.08)',
              background: activeTab === 'considerations' ? 'rgba(229,169,59,0.12)' : 'rgba(255,255,255,0.02)',
              color: activeTab === 'considerations' ? '#fff' : 'var(--text-secondary)',
              fontSize: '0.9rem',
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              letterSpacing: '0.04em',
              boxShadow: activeTab === 'considerations' ? '0 8px 24px rgba(229,169,59,0.2)' : 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <span>🔍</span> What to Consider
          </button>
        </div>

        {/* Clean cards grid */}
        <div 
          key={activeTab}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '24px',
            animation: 'fadeIn 0.5s ease-out'
          }}
        >
          {currentItems.map((item) => (
            <div
              key={item.id}
              style={{
                position: 'relative',
                borderRadius: '18px',
                overflow: 'hidden',
                background: '#fff',
                border: '1px solid rgba(255,255,255,0.08)',
                aspectRatio: '4/5',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                cursor: 'default',
                boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.borderColor = item.color;
                e.currentTarget.style.boxShadow = `0 24px 48px rgba(0,0,0,0.5), 0 0 16px ${item.color}33`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.3)';
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
