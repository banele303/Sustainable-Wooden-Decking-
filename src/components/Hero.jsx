import React from 'react';

export default function Hero() {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-bg" style={{ backgroundImage: "url('/images/hero_bg.png')" }}></div>
      <div className="hero-overlay"></div>
      <div className="container hero-container">
        <div className="hero-content fade-in-up active">
          <span className="badge">Advanced Medical Aesthetics</span>
          <h1 className="hero-title">Where Science Meets <span className="text-glow">Radiant Beauty</span></h1>
          <p className="hero-subtitle">Experience Ottawa's premier destination for laser hair removal, facial rejuvenation, and medical-grade skincare treatments tailored to your unique skin profile.</p>
          <div className="hero-ctas">
            <a href="#booking" className="btn btn-primary">Schedule Consultation</a>
            <a href="#services" className="btn btn-secondary">Explore Treatments</a>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <span className="mouse">
          <span className="wheel"></span>
        </span>
        <span className="arrow-down"></span>
      </div>
    </section>
  );
}
