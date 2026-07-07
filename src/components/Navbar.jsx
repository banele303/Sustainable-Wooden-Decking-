import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  const handleLinkClick = () => {
    setIsMobileOpen(false);
  };

  return (
    <header className={`main-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <a href="#" className="logo" onClick={handleLinkClick}>
          <span class="logo-accent">Derma</span>laz
        </a>
        
        <nav className={`nav-menu ${isMobileOpen ? 'open' : ''}`}>
          <a href="#about" className="nav-link" onClick={handleLinkClick}>Philosophy</a>
          <a href="#services" className="nav-link" onClick={handleLinkClick}>Treatments</a>
          <a href="#before-after" className="nav-link" onClick={handleLinkClick}>Results</a>
          <a href="#quiz" className="nav-link" onClick={handleLinkClick}>Skin Quiz</a>
          <a href="#technology" className="nav-link" onClick={handleLinkClick}>Science</a>
          <a href="#booking" className="btn btn-primary nav-cta" onClick={handleLinkClick}>Book Consultation</a>
        </nav>
        
        <button 
          className={`mobile-nav-toggle ${isMobileOpen ? 'open' : ''}`} 
          onClick={toggleMobileMenu}
          aria-label="Toggle Navigation"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
    </header>
  );
}
