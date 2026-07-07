import React from 'react';

export default function Science() {
  return (
    <section className="tech-section section-padding" id="technology">
      <div className="container tech-container">
        <div className="tech-visual fade-in-up active">
          <div className="laser-machine-graphic">
            <div className="pulse-ring"></div>
            <div className="pulse-ring-2"></div>
            <div className="glass-device">
              <div className="device-lens"></div>
              <div className="laser-beam"></div>
            </div>
          </div>
        </div>
        
        <div className="tech-info fade-in-up active">
          <span className="badge">Laser Physics</span>
          <h2 className="section-title">The Science of Laser Aesthetics</h2>
          <p className="tech-intro">How does skin rejuvenation work? We target chromophores in the dermis safely using selected light wavelengths, sparing surrounding tissue.</p>
          
          <div className="tech-item">
            <div className="tech-number">808nm</div>
            <div className="tech-text">
              <h4>Selective Photothermolysis</h4>
              <p>Our 808nm Diode Laser targets melanin in hair follicles. The light converts to heat, disabling the hair growth center permanently without heating the skin.</p>
            </div>
          </div>
          
          <div className="tech-item">
            <div className="tech-number">IPL</div>
            <div className="tech-text">
              <h4>Broad-Spectrum Light Wavelengths</h4>
              <p>Intense Pulsed Light (IPL) photo facials deliver high-energy pulses that break apart facial pigmentation and collapse broken veins, promoting clear skin.</p>
            </div>
          </div>

          <div className="tech-item">
            <div className="tech-number">Collagen</div>
            <div className="tech-text">
              <h4>Thermal Neocollagenesis</h4>
              <p>By delivering controlled thermal energy to the deep dermis, we contract existing collagen fibrils and kickstart the cellular synthesis of brand new skin scaffolding.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
