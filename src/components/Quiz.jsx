import React, { useState } from 'react';

const recommendations = {
  hair: {
    name: 'Diode Laser Hair Removal',
    badge: 'Laser Therapy',
    description: 'Based on your preference for hair reduction, our clinical-grade diode laser is ideal. Designed for quick, long-term results with active contact cooling for premium comfort across all skin types.',
    duration: '15 - 45 Mins',
    sessions: '6 - 8 sessions',
    downtime: 'None (Zero)'
  },
  aging: {
    name: 'Skin Tightening & Contour',
    badge: 'Thermal Rejuvenation',
    description: 'To address skin sagging and fine lines, we recommend deep thermal skin tightening. It targets deep dermis layers to contract collagen and stimulate new cell scaffolding without surgery.',
    duration: '45 - 60 Mins',
    sessions: '3 - 5 sessions',
    downtime: 'Mild redness (1-2 hours)'
  },
  spots: {
    name: 'IPL Laser Photo Facial',
    badge: 'Photorejuvenation',
    description: 'For sunspots, hyperpigmentation, or uneven skin tone, Intense Pulsed Light (IPL) is the clinical gold standard. It breaks down skin pigments and minor capillaries to reveal a clear complexion.',
    duration: '30 - 45 Mins',
    sessions: '3 - 4 sessions',
    downtime: 'None (Zero)'
  },
  acne: {
    name: 'Chemical Peels & Peeling',
    badge: 'Clinical Exfoliation',
    description: 'For pores, active breakouts, or acne scarring, a medical-grade chemical peel is ideal. It clears dead cellular layers and boosts cell turnover to smooth and refine skin texture.',
    duration: '30 Mins',
    sessions: '4 - 6 sessions',
    downtime: 'Light peeling (2-3 days)'
  }
};

export default function Quiz() {
  const [step, setStep] = useState(1);
  const [selections, setSelections] = useState({
    concern: '',
    sun: '',
    sensitivity: ''
  });

  const progressPercentage = (step / 3) * 100;

  const handleSelectOption = (key, value) => {
    setSelections({ ...selections, [key]: value });
    if (step < 3) {
      setStep(step + 1);
    } else {
      setStep('result');
    }
  };

  const handlePrev = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleReset = () => {
    setStep(1);
    setSelections({ concern: '', sun: '', sensitivity: '' });
  };

  const getRecommendation = () => {
    // Return recommendation based on primary concern
    const key = selections.concern || 'hair';
    return recommendations[key] || recommendations.hair;
  };

  const rec = getRecommendation();

  return (
    <section className="quiz-section section-padding" id="quiz">
      <div className="container">
        <div className="section-header text-center fade-in-up active">
          <span className="badge">Interactive Consultation</span>
          <h2 className="section-title">Find Your Perfect Skincare Match</h2>
          <p className="section-desc">Take our 1-minute smart quiz. Tell us about your skin concerns and discover the ideal medical treatment recommended by our clinical algorithm.</p>
        </div>

        <div className="quiz-container-box fade-in-up active" id="quiz-box">
          {/* Progress Bar */}
          {step !== 'result' && (
            <div className="quiz-progress-bar">
              <div className="quiz-progress" style={{ width: `${progressPercentage}%` }}></div>
            </div>
          )}

          {/* Step 1 */}
          {step === 1 && (
            <div className="quiz-step active">
              <h3 className="quiz-question">1. What is your primary skin concern today?</h3>
              <div className="quiz-options-grid">
                <button className="quiz-option" onClick={() => handleSelectOption('concern', 'hair')}>
                  <span className="option-icon">✨</span>
                  <span className="option-text">Unwanted body or facial hair</span>
                </button>
                <button className="quiz-option" onClick={() => handleSelectOption('concern', 'aging')}>
                  <span className="option-icon">⏳</span>
                  <span className="option-text">Fine lines, wrinkles, or sagging skin</span>
                </button>
                <button className="quiz-option" onClick={() => handleSelectOption('concern', 'spots')}>
                  <span className="option-icon">☀️</span>
                  <span className="option-text">Sunspots, freckles, or uneven tone</span>
                </button>
                <button className="quiz-option" onClick={() => handleSelectOption('concern', 'acne')}>
                  <span className="option-icon">🫧</span>
                  <span className="option-text">Active acne, scarring, or large pores</span>
                </button>
              </div>
            </div>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <div className="quiz-step active">
              <h3 className="quiz-question">2. How does your skin react to direct sunlight?</h3>
              <div className="quiz-options-grid">
                <button className="quiz-option" onClick={() => handleSelectOption('sun', 'burns')}>
                  <span className="option-icon">🔴</span>
                  <span className="option-text">Always burns, rarely tans (Fair skin)</span>
                </button>
                <button className="quiz-option" onClick={() => handleSelectOption('sun', 'tans-easily')}>
                  <span className="option-icon">🟡</span>
                  <span className="option-text">Tans easily, rarely burns (Medium/Olive skin)</span>
                </button>
                <button className="quiz-option" onClick={() => handleSelectOption('sun', 'dark')}>
                  <span className="option-icon">🟤</span>
                  <span className="option-text">Never burns, deeply pigmented (Dark skin)</span>
                </button>
              </div>
              <div className="quiz-navigation">
                <button className="btn btn-secondary quiz-prev" onClick={handlePrev}>Back</button>
              </div>
            </div>
          )}

          {/* Step 3 */}
          {step === 3 && (
            <div className="quiz-step active">
              <h3 className="quiz-question">3. What is your skin sensitivity profile?</h3>
              <div className="quiz-options-grid">
                <button className="quiz-option" onClick={() => handleSelectOption('sensitivity', 'sensitive')}>
                  <span className="option-icon">⚠️</span>
                  <span className="option-text">Highly sensitive (gets red or irritated easily)</span>
                </button>
                <button className="quiz-option" onClick={() => handleSelectOption('sensitivity', 'normal')}>
                  <span className="option-icon">✅</span>
                  <span className="option-text">Normal (balanced, rarely reacts to skincare)</span>
                </button>
                <button className="quiz-option" onClick={() => handleSelectOption('sensitivity', 'oily')}>
                  <span className="option-icon">💧</span>
                  <span className="option-text">Comb/Oily (shine prone, occasional breakouts)</span>
                </button>
              </div>
              <div className="quiz-navigation">
                <button className="btn btn-secondary quiz-prev" onClick={handlePrev}>Back</button>
              </div>
            </div>
          )}

          {/* Result Panel */}
          {step === 'result' && (
            <div className="quiz-step quiz-result-panel active">
              <div className="result-celebration">🎉</div>
              <h3 className="result-title">Your Recommended Treatment</h3>
              <div className="result-card">
                <div className="result-badge">{rec.badge}</div>
                <h4>{rec.name}</h4>
                <p>{rec.description}</p>
                
                <div className="result-details">
                  <div className="detail-item">
                    <span className="detail-label">Duration:</span>
                    <span className="detail-value">{rec.duration}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Recommended Sessions:</span>
                    <span className="detail-value">{rec.sessions}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Est. Downtime:</span>
                    <span className="detail-value">{rec.downtime}</span>
                  </div>
                </div>
              </div>
              <div className="quiz-navigation">
                <button className="btn btn-secondary quiz-reset" onClick={handleReset}>Retake Quiz</button>
                <a href="#booking" className="btn btn-primary">Book Treatment</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
