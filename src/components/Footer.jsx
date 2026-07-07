import React, { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      console.log('Newsletter subscription for:', email);
      setIsSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="main-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <a href="#" className="logo">
            <span className="logo-accent">Derma</span>laz
          </a>
          <p className="footer-desc">Premium clinical dermatology and laser services located in Ottawa. Experience state-of-the-art technology and radiant skin transformations.</p>
          <div className="social-links">
            <a href="#" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a href="#" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
          </div>
        </div>
        
        <div className="footer-links">
          <h4>Treatments</h4>
          <ul>
            <li><a href="#services">Laser Hair Removal</a></li>
            <li><a href="#services">IPL Photo Facials</a></li>
            <li><a href="#services">Skin Tightening</a></li>
            <li><a href="#services">Chemical Peels</a></li>
            <li><a href="#services">Dermal Fillers</a></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Clinic</h4>
          <ul>
            <li><a href="#about">Philosophy</a></li>
            <li><a href="#before-after">Results</a></li>
            <li><a href="#quiz">Skin Match Quiz</a></li>
            <li><a href="#technology">Laser Science</a></li>
            <li><a href="#booking">Book Appointment</a></li>
          </ul>
        </div>

        <div className="footer-newsletter">
          <h4>Newsletter</h4>
          <p>Subscribe to receive aesthetic news, tips, and exclusive treatment offers.</p>
          <form className="newsletter-form" onSubmit={handleSubscribe}>
            <input 
              type="email" 
              placeholder="Your email address" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
              aria-label="Email address" 
            />
            <button type="submit" aria-label="Subscribe">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </form>
          <div className={`newsletter-success ${isSubscribed ? 'active' : ''}`}>
            Thank you for subscribing!
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>&copy; 2026 Dermalaz Laser Clinic. All rights reserved. Medical-grade procedures require assessment.</p>
        <div className="bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
