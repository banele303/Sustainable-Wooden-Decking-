import React from 'react';

export default function About({ setView }) {
  return (
    <section className="section-padding" id="about">
      <div className="container">
        <div className="section-header text-center fade-in-up active">
          <span className="badge" style={{ backgroundColor: 'rgba(60, 168, 70, 0.1)', color: 'var(--accent-eco)', border: '1px solid rgba(60, 168, 70, 0.2)' }}>Who We Are</span>
          <h2 className="section-title">Pioneering Sustainable Decking & Flooring</h2>
          <p className="section-desc">
            Sustainable Wooden Decking and Flooring SA (Pty) Ltd is South Africa's premier design-led supplier and installer of eco-friendly, carbon-negative outdoor decking and indoor flooring. We emphasize sustainability and eco-friendly products, hence our main products come from premium Moso Bamboo.
          </p>
        </div>
        
        <div className="bento-grid">
          <div className="bento-card col-span-4 fade-in-up active">
            <div className="bento-icon" style={{ color: 'var(--accent-eco)' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
            </div>
            <h3 className="bento-title">Moso Bamboo Pioneer</h3>
            <p style={{ color: 'var(--text-secondary)' }}>We specialize in MOSO® Bamboo, a rapidly renewable, carbon-neutral resource that excels in durability, fire safety, and strength, making it the ultimate eco-friendly choice.</p>
          </div>
          
          <div className="bento-card col-span-4 fade-in-up active" style={{ transitionDelay: '0.1s' }}>
            <div className="bento-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="9" y1="3" x2="9" y2="21" /><line x1="15" y1="3" x2="15" y2="21" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="3" y1="15" x2="21" y2="15" /></svg>
            </div>
            <h3 className="bento-title">Wooden Decking</h3>
            <p style={{ color: 'var(--text-secondary)' }}>Our professional carpenters build custom timber decking using premium hardwoods (Garapa, Balau) and high-density composites with subframe designs engineered for stability.</p>
          </div>
          
          <div className="bento-card col-span-4 fade-in-up active" style={{ transitionDelay: '0.2s' }}>
            <div className="bento-icon" style={{ color: 'var(--accent-secondary)' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
            </div>
            <h3 className="bento-title">Interior Flooring</h3>
            <p style={{ color: 'var(--text-secondary)' }}>We supply and install luxury engineered wooden flooring and solid bamboo flooring. Get stable, long-lasting, and beautiful floor boards that bring organic warmth to your home.</p>
          </div>

          <div className="bento-card col-span-12 fade-in-up active" style={{ transitionDelay: '0.3s', display: 'flex', flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap', gap: '24px' }}>
            <div style={{ flexGrow: 1 }}>
              <p style={{ color: 'var(--accent-eco)', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '0.1em' }}>Our Head Office</p>
              <p style={{ fontSize: '1.2rem', color: 'var(--text-primary)', marginTop: '8px' }}>36 Sarie Street, Ridgeway, Johannesburg, 2091</p>
            </div>
            <button onClick={() => setView('contact')} className="btn btn-secondary">Get in Touch</button>
          </div>
        </div>
      </div>
    </section>
  );
}
