import React, { useState, useEffect } from 'react';

const reviews = [
  {
    stars: '★★★★★',
    text: '"The diode laser hair removal here is a game changer! I was so nervous about the pain but I barely felt a thing, just a cool sensation. After only 4 sessions, the hair is almost completely gone. Truly professional clinic!"',
    name: 'Sarah Jenkins',
    service: 'Laser Hair Removal Patient'
  },
  {
    stars: '★★★★★',
    text: '"I struggled with rosacea and sun spots for years. The photo facial treatments have literally wiped them away. My skin looks smoother and glows in photos now. Can\'t recommend Dr. Hajjaj and the team enough!"',
    name: 'Michael Chen',
    service: 'IPL Photo Facial Patient'
  },
  {
    stars: '★★★★★',
    text: '"Got dermal fillers done last month and the results are so soft and natural. They used Dermalax and carefully shaped my cheek area. It looks exactly how I wanted. Professional, clinical, and clean!"',
    name: 'Elena Rostova',
    service: 'Dermal Fillers Patient'
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handleDotClick = (idx) => {
    setActiveIndex(idx);
  };

  return (
    <section className="reviews-section section-padding" id="reviews">
      <div className="container">
        <div className="section-header text-center fade-in-up active">
          <span className="badge">Testimonials</span>
          <h2 className="section-title">Loved by Our Patients</h2>
          <p className="section-desc">Read real reviews from clients who have completed their laser treatments and skin contour plans at our Ottawa clinic.</p>
        </div>

        <div className="reviews-carousel-wrapper fade-in-up active">
          <div className="reviews-track">
            {reviews.map((r, idx) => (
              <div 
                key={idx} 
                className={`review-slide ${idx === activeIndex ? 'active' : ''}`}
              >
                <div className="stars">{r.stars}</div>
                <p className="review-text">{r.text}</p>
                <div className="reviewer-meta">
                  <span className="reviewer-name">{r.name}</span>
                  <span className="reviewer-service">{r.service}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="carousel-dots">
            {reviews.map((_, idx) => (
              <span 
                key={idx}
                className={`dot ${idx === activeIndex ? 'active' : ''}`}
                onClick={() => handleDotClick(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
