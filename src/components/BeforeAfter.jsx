import React, { useState, useRef, useEffect } from 'react';

export default function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage (0 - 100)
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    };

    const handleTouchMove = (e) => {
      if (!isDragging) return;
      if (e.touches && e.touches[0]) {
        handleMove(e.touches[0].clientX);
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <section className="slider-section section-padding" id="before-after">
      <div className="container">
        <div className="section-header text-center fade-in-up active">
          <span className="badge">Visual Results</span>
          <h2 className="section-title">See the Dermalaz Transformation</h2>
          <p className="section-desc">Drag the interactive slider left and right to inspect the skin rejuvenation progress after 3 sessions of IPL photo facial treatment.</p>
        </div>

        <div className="slider-wrapper fade-in-up active">
          <div 
            className="comparison-slider" 
            ref={containerRef}
            style={{ position: 'relative' }}
          >
            {/* Before Image */}
            <img 
              src="/images/before_skin.png" 
              alt="Skin texture before laser rejuvenation" 
              className="image-before" 
            />
            
            {/* After Image Container (clipped) */}
            <div 
              className="image-after-container" 
              style={{ width: `${sliderPosition}%` }}
            >
              <img 
                src="/images/after_skin.png" 
                alt="Skin texture after laser rejuvenation" 
                className="image-after"
                style={{ width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '800px' }}
              />
            </div>
            
            {/* Drag bar */}
            <div 
              className="slider-handle" 
              style={{ left: `${sliderPosition}%` }}
              onMouseDown={handleMouseDown}
              onTouchStart={handleTouchStart}
            >
              <div className="handle-line"></div>
              <div className="handle-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="8 18 2 12 8 6" />
                  <polyline points="16 6 22 12 16 18" />
                </svg>
              </div>
              <div className="handle-line"></div>
            </div>

            {/* Labels */}
            <span className="slider-label label-before">Before Treatment</span>
            <span className="slider-label label-after">After Rejuvenation</span>
          </div>
        </div>
      </div>
    </section>
  );
}
