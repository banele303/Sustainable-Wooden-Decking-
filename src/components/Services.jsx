import React from 'react';

export default function Services() {
  const treatments = [
    {
      id: 'laser-hair',
      category: 'Hair Reduction',
      title: 'Diode Laser Hair Removal',
      description: 'Get silky smooth skin with our high-speed diode laser. Features advanced contact cooling for near-painless hair removal across all skin types.',
      image: '/images/treatment_laser.png',
      benefits: ['Permanent hair reduction', 'Comfortable cooling tip', 'Safe for dark and tanned skin'],
      price: 'From $89 / session'
    },
    {
      id: 'facial',
      category: 'Rejuvenation',
      title: 'IPL Laser Photo Facials',
      description: 'Reverse sun damage, target hyperpigmentation, and banish redness. This photorejuvenation facial stimulates collagen for a radiant complexion.',
      image: '/images/treatment_facial.png',
      benefits: ['Minimizes dark spots & freckles', 'Reduces active redness & rosacea', 'Boosts natural collagen output'],
      price: 'From $149 / session'
    },
    {
      id: 'tightening',
      category: 'Anti-Aging',
      title: 'Skin Tightening & Contour',
      description: 'Stimulate deep thermal layers to tighten loose skin on the face, neck, and body. Combats sagging, wrinkles, and fine lines non-invasively.',
      image: '/images/treatment_tightening.png',
      benefits: ['Instant firming, long-term tightening', 'No surgery or downtime', 'Smoothes fine lines and wrinkles'],
      price: 'From $199 / session'
    },
    {
      id: 'peels',
      category: 'Skincare Clinic',
      title: 'Chemical Peels & Peeling',
      description: 'Exfoliate dull, outer layers of skin to reveal fresh skin beneath. Exceptional for targeting acne scarring, large pores, and texture concerns.',
      placeholderClass: 'gradient-peel',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="placeholder-svg">
          <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
        </svg>
      ),
      benefits: ['Refines texture and pore size', 'Promotes rapid cellular turnover', 'Brightens dull skin instantly'],
      price: 'From $99 / session'
    },
    {
      id: 'fillers',
      category: 'Cosmetic Injections',
      title: 'Dermal Fillers (Dermalax HA)',
      description: 'Restore youthful volume, contour cheekbones, and plump lips. Utilizing medical-grade South Korean Hyaluronic Acid (HA) Dermalax fillers for soft, natural results.',
      placeholderClass: 'gradient-filler',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="placeholder-svg">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      ),
      benefits: ['Enhances facial contours & lips', 'Deeply hydrating HA formula', 'Safe, immediate, and reversible'],
      price: 'From $399 / syringe'
    }
  ];

  return (
    <section className="services-section section-padding" id="services">
      <div className="container">
        <div className="section-header text-center fade-in-up active">
          <span className="badge">Clinical Treatments</span>
          <h2 className="section-title">Aesthetic Solutions Designed for You</h2>
          <p className="section-desc">From permanent laser hair reduction to non-invasive facial contours, our advanced treatments target skin concerns directly at their source.</p>
        </div>

        <div className="services-grid">
          {treatments.map((t, idx) => (
            <div key={t.id} className="service-card fade-in-up active" style={{ transitionDelay: `${idx * 0.05}s` }}>
              <div className="service-img-wrapper">
                {t.image ? (
                  <img src={t.image} alt={t.title} className="service-img" />
                ) : (
                  <div className={`service-placeholder-bg ${t.placeholderClass}`}>
                    {t.icon}
                  </div>
                )}
                <div className="service-img-overlay"></div>
              </div>
              <div className="service-content">
                <span className="service-category">{t.category}</span>
                <h3>{t.title}</h3>
                <p>{t.description}</p>
                <ul className="service-benefits">
                  {t.benefits.map((b, i) => (
                    <li key={i}>
                      <span>✓</span> {b}
                    </li>
                  ))}
                </ul>
                <div className="service-footer">
                  <span className="service-price">{t.price}</span>
                  <a href="#booking" className="btn-text">Book Now →</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
