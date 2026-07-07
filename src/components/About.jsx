import React from 'react';

export default function About() {
  return (
    <section className="about-section section-padding" id="about">
      <div className="container">
        <div className="section-header text-center fade-in-up active">
          <span className="badge">Our Philosophy</span>
          <h2 className="section-title">Clinical Precision. Luxurious Care.</h2>
          <p class="section-desc">At Dermalaz, we believe skin health is a reflection of overall well-being. Under the convergence of advanced dermatological science and customized medical spa comfort, we create clinical plans that reveal your skin's natural brilliance.</p>
        </div>
        
        <div className="about-grid">
          <div className="about-card fade-in-up active">
            <div className="about-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m12 6-3 6h6l-3 6"/></svg>
            </div>
            <h3>Advanced Laser Tech</h3>
            <p>We leverage top-tier FDA & Health Canada approved diode lasers and IPL equipment to guarantee safe, permanent, and pain-managed treatments.</p>
          </div>
          
          <div className="about-card fade-in-up active" style={{ transitionDelay: '0.1s' }}>
            <div className="about-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            </div>
            <h3>Personalized Skincare</h3>
            <p>Every face is unique. We begin with a deep digital skin analysis to craft custom treatment paths matching your Fitzpatrick skin type.</p>
          </div>
          
          <div className="about-card fade-in-up active" style={{ transitionDelay: '0.2s' }}>
            <div className="about-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            </div>
            <h3>Clinical Safety First</h3>
            <p>Rest easy in a sterile, medical-grade environment. Our experienced practitioners maintain the highest standards of safety and efficacy.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
