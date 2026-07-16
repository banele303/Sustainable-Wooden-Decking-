import React, { useState, useEffect } from 'react';

const HERO_TABS = [
  {
    id: 'bamboo-decking',
    label: 'Moso Bamboo Decking',
    headline: 'Carbon-Negative MOSO® Bamboo Decking',
    image: '/images/tanda_tula_walkway.jpg',
    price: 'From R1,850 / m²',
    specs: 'MOSO® Bamboo X-treme® · Class 1 Durability · 25-Year Warranty'
  },
  {
    id: 'bamboo-flooring',
    label: 'Moso Bamboo Flooring',
    headline: 'High-Density Sustainable Bamboo Flooring',
    image: '/images/hero_sofa_deck.jpg',
    price: 'From R1,200 / m²',
    specs: 'Class-Leading Janka Hardness · Eco-Friendly · Scratch Resistant'
  },
  {
    id: 'hardwood-decking',
    label: 'Hardwood Decking',
    headline: 'Premium Responsibly-Sourced Wood Decking',
    image: '/images/timber_decking.png',
    price: 'From R1,800 / m²',
    specs: 'Garapa, Balau & Teak · SANS Structural Compliant · Natural UV Oil'
  },
  {
    id: 'engineered-flooring',
    label: 'Engineered Wood Flooring',
    headline: 'Luxury Natural Wood Flooring for Interiors',
    image: '/images/project_modern_house.png',
    price: 'From R1,350 / m²',
    specs: 'French Oak & Walnut Textures · Stable Core · Premium Finishes'
  }
];

export default function Hero({ setView }) {
  const [activeTabIdx, setActiveTabIdx] = useState(0);
  const [promptInput, setPromptInput] = useState('');
  const [isInputFocused, setIsInputFocused] = useState(false);

  const currentTab = HERO_TABS[activeTabIdx];

  // Auto rotate tabs every 8 seconds, unless user clicks
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTabIdx((prev) => (prev + 1) % HERO_TABS.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const handlePromptSubmit = (e) => {
    e.preventDefault();
    if (!promptInput.trim()) return;
    // Save to localStorage so Visualizer.jsx can pick it up on mount
    localStorage.setItem('top3k_hero_prompt', promptInput);
    setView('visualizer');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="hero-section" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', padding: '160px 0 80px' }}>
      
      {/* Immersive Background Images (Crossfading with lower opacity for text contrast) */}
      {HERO_TABS.map((tab, idx) => (
        <div
          key={tab.id}
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url('${tab.image}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: idx === activeTabIdx ? 0.28 : 0,
            filter: 'brightness(0.9)',
            transition: 'opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
            zIndex: 1
          }}
        />
      ))}

      {/* Dark Radial Vignette for Typography Readability */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(circle at center, rgba(5, 5, 5, 0.1) 0%, rgba(5, 5, 5, 0.65) 75%, rgba(5, 5, 5, 0.85) 100%), linear-gradient(to bottom, rgba(5, 5, 5, 0.25) 0%, rgba(5, 5, 5, 0.8) 100%)',
        zIndex: 2
      }}></div>

      {/* Content Container */}
      <div className="container" style={{ position: 'relative', zIndex: 10, width: '100%' }}>
        
        {/* Interactive Navigation Tabs */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '12px',
          flexWrap: 'wrap',
          marginBottom: '40px'
        }}>
          {HERO_TABS.map((tab, idx) => (
            <button
              key={tab.id}
              onClick={() => setActiveTabIdx(idx)}
              className={`hero-tab-btn ${idx === activeTabIdx ? 'active' : ''}`}
              style={{ textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}
            >
              {tab.label}
              {idx === activeTabIdx && <span key={idx} className="hero-tab-progress" />}
            </button>
          ))}
        </div>

        {/* Main Hero Split Grid */}
        <div className="hero-grid-container">
          
          {/* Left Column: Typography Stack & Search */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            {/* Glowing animated badge */}
            <div style={{ display: 'inline-flex', alignSelf: 'flex-start' }}>
              <span 
                key={`specs-${activeTabIdx}`} 
                className="badge hero-badge-animate" 
                style={{ 
                  color: 'var(--accent-secondary)', 
                  background: 'rgba(229, 169, 59, 0.08)',
                  border: '1px solid rgba(229, 169, 59, 0.2)',
                  padding: '6px 16px',
                  borderRadius: '100px',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.5)'
                }}
              >
                ✨ {currentTab.specs}
              </span>
            </div>
            
            {/* Headline */}
            <h1 
              key={`title-${activeTabIdx}`}
              className="hero-headline-animate" 
              style={{
                fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)',
                fontWeight: 900,
                lineHeight: 1.15,
                textTransform: 'uppercase',
                margin: 0,
                background: 'linear-gradient(135deg, #ffffff 40%, var(--accent-primary) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                letterSpacing: '-0.02em',
                filter: 'drop-shadow(0 4px 10px rgba(0, 0, 0, 0.8))'
              }}
            >
              {currentTab.headline}
            </h1>

            {/* Subtitle / Paragraph */}
            <p style={{
              color: 'var(--text-secondary)',
              fontSize: '1.05rem',
              lineHeight: 1.6,
              margin: 0,
              maxWidth: '540px',
              textShadow: '0 2px 4px rgba(0,0,0,0.5)'
            }}>
              Sustainable Wooden Decking and Flooring SA (Pty) Ltd — Johannesburg's premier supplier and installer of eco-friendly Moso Bamboo and premium hardwood decking & flooring solutions.
            </p>

            {/* AI Prompt Box */}
            <form onSubmit={handlePromptSubmit} className="hero-search-form" style={{
              width: '100%',
              maxWidth: '580px',
              position: 'relative',
              background: 'rgba(20, 20, 25, 0.65)',
              border: '1px solid',
              borderColor: isInputFocused ? 'var(--accent-primary)' : 'var(--border-glass)',
              borderRadius: '100px',
              padding: '8px',
              backdropFilter: 'var(--glass-blur)',
              boxShadow: isInputFocused 
                ? '0 0 30px rgba(197, 126, 59, 0.25), 0 20px 50px rgba(0,0,0,0.6)' 
                : '0 20px 50px rgba(0,0,0,0.5)',
              display: 'flex',
              alignItems: 'center',
              transition: 'var(--transition)',
              marginTop: '10px'
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--text-secondary)" strokeWidth="2.5" style={{ marginLeft: '20px', flexShrink: 0 }}><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              <input
              type="text"
              placeholder="Ask our AI estimator about bamboo decking or custom wood flooring..."
              value={promptInput}
              onChange={(e) => setPromptInput(e.target.value)}
              onFocus={() => setIsInputFocused(true)}
              onBlur={() => setIsInputFocused(false)}
              style={{
                flexGrow: 1,
                background: 'none',
                border: 'none',
                color: '#fff',
                padding: '12px 16px',
                fontSize: '1rem',
                outline: 'none'
              }}
            />
            <button type="submit" className="btn btn-primary" style={{
              padding: '12px 28px',
              fontSize: '0.9rem',
              borderRadius: '100px',
              whiteSpace: 'nowrap'
            }}>
              Consult AI
            </button>
            </form>

            {/* Action Buttons */}
            <div className="hero-ctas" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '10px' }}>
              <button onClick={() => setView('calculator')} className="btn btn-primary" style={{ padding: '16px 32px', minWidth: '180px' }}>
                🛠️ Cost Estimator
              </button>
              <button onClick={() => setView('projects')} className="btn btn-secondary" style={{ padding: '16px 32px', minWidth: '180px' }}>
                📐 View Portfolio
              </button>
            </div>

          </div>

          {/* Right Column: Visual Showcase Deck Frame */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="hero-showcase-frame floating-element">
              
              {/* Showcase Image */}
              <img 
                src={currentTab.image} 
                alt={currentTab.label} 
                className="hero-showcase-img"
                key={`showcase-img-${activeTabIdx}`}
                style={{
                  animation: 'heroTextFadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards'
                }}
              />
              
              {/* Interactive details overlay inside frame */}
              <div className="hero-showcase-overlay" key={`overlay-${activeTabIdx}`} style={{
                animation: 'heroTextFadeIn 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards'
              }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--accent-secondary)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                      {currentTab.label} SPEC
                    </span>
                    <span style={{ fontSize: '0.72rem', color: '#22c55e', background: 'rgba(34,197,94,0.1)', padding: '2px 8px', borderRadius: '4px', fontWeight: 700 }}>
                      ACTIVE
                    </span>
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff', margin: 0 }}>
                    {currentTab.headline}
                  </h3>
                  <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', marginTop: '8px', paddingTop: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Budget Projection:</span>
                    <span style={{ fontSize: '1.05rem', color: 'var(--accent-primary)', fontWeight: 800 }}>{currentTab.price}</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
      
    </section>
  );
}
