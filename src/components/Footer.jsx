import React, { useState } from 'react';

export default function Footer({ setView, setServiceId }) {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
    }
  };

  const handleLinkClick = (viewName, serviceName = null) => {
    setView(viewName);
    if (serviceName) {
      setServiceId(serviceName);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="main-footer" style={{ 
      borderTop: '1px solid rgba(197, 126, 59, 0.25)', 
      paddingTop: '80px', 
      background: 'linear-gradient(180deg, rgba(10, 10, 12, 0.96) 0%, rgba(5, 5, 6, 0.99) 100%)',
      boxShadow: '0 -20px 50px rgba(0,0,0,0.8)',
      backdropFilter: 'var(--glass-blur)'
    }}>
      <div className="container footer-grid">
        
        {/* Brand Information */}
        <div className="footer-brand" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <button 
            onClick={() => handleLinkClick('landing')}
            style={{ cursor: 'pointer', background: 'none', border: 'none', display: 'flex', alignItems: 'center', padding: 0 }}
          >
            <img 
              src="/images/logo.png" 
              alt="Sustainable Wooden Decking and Flooring SA Logo" 
              style={{ height: '80px', objectFit: 'contain', filter: 'drop-shadow(0 4px 16px rgba(0,0,0,0.5))' }} 
              className="floating-element"
            />
          </button>
          
          <p className="footer-desc" style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
            Sustainable Wooden Decking and Flooring SA (Pty) Ltd is South Africa's premier supplier and installer of eco-friendly, carbon-negative outdoor decking and indoor flooring, emphasizing Moso Bamboo.
          </p>
          
          <div className="footer-address" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent-eco)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            <span>36 Sarie Street, Ridgeway, Johannesburg, 2091</span>
          </div>
          
          <div className="social-links" style={{ display: 'flex', gap: '12px' }}>
            <a href="#" aria-label="Facebook" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', color: 'var(--text-secondary)', transition: 'all 0.3s ease' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
            </a>
            <a href="#" aria-label="Instagram" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', color: 'var(--text-secondary)', transition: 'all 0.3s ease' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
            </a>
            <a href="#" aria-label="LinkedIn" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', color: 'var(--text-secondary)', transition: 'all 0.3s ease' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/></svg>
            </a>
          </div>
        </div>
        
        {/* Services Links */}
        <div className="footer-links">
          <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '24px', letterSpacing: '0.05em', position: 'relative', display: 'inline-block' }}>
            Services
            <span style={{ position: 'absolute', bottom: '-6px', left: 0, width: '20px', height: '2px', background: 'var(--accent-eco)' }}></span>
          </h4>
          <ul style={{ padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <li><button onClick={() => handleLinkClick('service-detail', 'bamboo-decking')} className="footer-link-cool">Moso Bamboo Decking</button></li>
            <li><button onClick={() => handleLinkClick('service-detail', 'bamboo-flooring')} className="footer-link-cool">Moso Bamboo Flooring</button></li>
            <li><button onClick={() => handleLinkClick('service-detail', 'hardwood-decking')} className="footer-link-cool">Hardwood Decking</button></li>
            <li><button onClick={() => handleLinkClick('service-detail', 'engineered-flooring')} className="footer-link-cool">Engineered Flooring</button></li>
            <li><button onClick={() => handleLinkClick('service-detail', 'pergolas-cladding')} className="footer-link-cool">Pergolas & Cladding</button></li>
            <li><button onClick={() => handleLinkClick('service-detail', 'restoration-maintenance')} className="footer-link-cool">Restoration & Care</button></li>
          </ul>
        </div>

        {/* Company Links */}
        <div className="footer-links">
          <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '24px', letterSpacing: '0.05em', position: 'relative', display: 'inline-block' }}>
            Company
            <span style={{ position: 'absolute', bottom: '-6px', left: 0, width: '20px', height: '2px', background: 'var(--accent-eco)' }}></span>
          </h4>
          <ul style={{ padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <li><button onClick={() => handleLinkClick('about')} className="footer-link-cool">About Us</button></li>
            <li><button onClick={() => handleLinkClick('projects')} className="footer-link-cool">Our Projects</button></li>
            <li><button onClick={() => handleLinkClick('visualizer')} className="footer-link-cool">Quote & Invoice Creator</button></li>
            <li><button onClick={() => handleLinkClick('calculator')} className="footer-link-cool">Cost Calculator</button></li>
            <li><button onClick={() => handleLinkClick('contact')} className="footer-link-cool">Contact Us</button></li>
            <li><button onClick={() => handleLinkClick('quote')} className="footer-link-cool">Request a Quote</button></li>
          </ul>
        </div>

        {/* Newsletter & Contact */}
        <div className="footer-newsletter" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '8px', letterSpacing: '0.05em', position: 'relative', display: 'inline-block' }}>
            Newsletter
            <span style={{ position: 'absolute', bottom: '-6px', left: 0, width: '20px', height: '2px', background: 'var(--accent-eco)' }}></span>
          </h4>
          <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>Subscribe for our seasonal project journals and decking advice in South Africa.</p>
          
          <form className="newsletter-form" onSubmit={handleSubscribe} style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
            <input 
              type="email" 
              placeholder="Your email address" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
              aria-label="Email address"
              style={{
                width: '100%',
                padding: '12px 50px 12px 16px',
                background: 'rgba(0,0,0,0.4)',
                border: '1px solid var(--border-glass)',
                borderRadius: '8px',
                color: '#fff',
                fontSize: '0.9rem',
                outline: 'none',
                transition: 'all 0.3s ease'
              }}
              onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
              onBlur={(e) => e.target.style.borderColor = 'var(--border-glass)'}
            />
            <button type="submit" aria-label="Subscribe" style={{
              position: 'absolute',
              right: '6px',
              width: '36px',
              height: '36px',
              borderRadius: '6px',
              background: 'var(--accent-primary)',
              border: 'none',
              color: '#fff',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </form>
          <div className={`newsletter-success ${isSubscribed ? 'active' : ''}`} style={{ fontSize: '0.85rem', color: 'var(--accent-eco)' }}>
            Thank you for subscribing to SWDF SA news!
          </div>
          <div className="footer-contact" style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.9rem' }}>
            <p style={{ margin: 0 }}>✉️ <a href="mailto:swdandflooringsa@gmail.com" style={{ color: 'var(--text-primary)', textDecoration: 'none' }}>swdandflooringsa@gmail.com</a></p>
          </div>
        </div>
      </div>

      {/* Trust Badges and Compliance Seals */}
      <div className="container" style={{ borderTop: '1px solid rgba(255,255,255,0.06)', marginTop: '40px', paddingTop: '30px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            Compliance Certifications & Quality Assurances:
          </div>
          <div className="trust-badge-row" style={{ marginTop: 0 }}>
            <div className="trust-badge-card">
              <span>🛡️</span>
              <span><strong>Class 1</strong> Durability Rated</span>
            </div>
            <div className="trust-badge-card">
              <span>📐</span>
              <span><strong>SANS Compliant</strong> Installations</span>
            </div>
            <div className="trust-badge-card">
              <span>🌱</span>
              <span><strong>100% Eco-Friendly</strong> Materials</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container footer-bottom" style={{ borderTop: '1px solid rgba(255,255,255,0.06)', marginTop: '30px', paddingTop: '24px', paddingBottom: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
        <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-muted)' }}>&copy; 2026 Sustainable Wooden Decking and Flooring SA (Pty) Ltd. All rights reserved.</p>
        <div className="bottom-links" style={{ display: 'flex', gap: '24px', fontSize: '0.85rem' }}>
          <a href="#" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s ease' }} onMouseEnter={(e) => e.target.style.color = '#fff'} onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}>Privacy Policy</a>
          <a href="#" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s ease' }} onMouseEnter={(e) => e.target.style.color = '#fff'} onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}>Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
