import React, { useState } from 'react';

export default function Booking() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    treatment: '',
    practitioner: 'no-preference',
    date: '',
    timeWindow: '',
    fullname: '',
    email: '',
    phone: '',
    agree: false
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { id, value, name, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData({ ...formData, [id]: checked });
    } else if (type === 'radio') {
      setFormData({ ...formData, [name]: value });
    } else {
      const fieldId = id || name;
      setFormData({ ...formData, [fieldId]: value });
    }
  };

  const handleNext = () => {
    // Basic validation
    if (step === 1 && !formData.treatment) {
      alert('Please select a treatment.');
      return;
    }
    if (step === 2 && (!formData.date || !formData.timeWindow)) {
      alert('Please fill out the date and time window.');
      return;
    }
    
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const handlePrev = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullname || !formData.email || !formData.phone || !formData.agree) {
      alert('Please complete all contact details and accept the terms.');
      return;
    }
    
    // Simulate API call
    console.log('Booking submitted:', formData);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setStep(1);
    setFormData({
      treatment: '',
      practitioner: 'no-preference',
      date: '',
      timeWindow: '',
      fullname: '',
      email: '',
      phone: '',
      agree: false
    });
    setIsSubmitted(false);
  };

  return (
    <section className="booking-section section-padding" id="booking">
      <div className="container booking-container">
        <div className="booking-details fade-in-up active">
          <span className="badge">Reservations</span>
          <h2 className="section-title">Begin Your Skin Journey</h2>
          <p className="booking-intro">Book a medical assessment or service reservation. Our team of aesthetic specialists is ready to guide you to your best skin.</p>
          
          <div className="contact-details">
            <div className="contact-item">
              <div className="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.1-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div>
                <h5>Call to Book</h5>
                <p>+1 (613) 555-0182</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <h5>Clinic Location</h5>
                <p>425 McArthur Ave, Ottawa, ON K1K 1G5</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <polyline points="8 21 12 17 16 21" />
                </svg>
              </div>
              <div>
                <h5>Business Hours</h5>
                <p>Mon - Sat: 9:00 AM - 7:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="booking-form-box fade-in-up active" id="booking-box">
          {!isSubmitted ? (
            <form className="multi-step-form" onSubmit={handleSubmit}>
              {/* Step Indicator */}
              <div className="form-indicators">
                <div className={`indicator ${step >= 1 ? 'active' : ''} ${step > 1 ? 'complete' : ''}`}>1</div>
                <div className={`indicator ${step >= 2 ? 'active' : ''} ${step > 2 ? 'complete' : ''}`}>2</div>
                <div className={`indicator ${step >= 3 ? 'active' : ''}`}>3</div>
              </div>

              {/* Form Step 1: Select Treatment */}
              {step === 1 && (
                <div className="form-step active">
                  <h3 className="form-step-title">Select Desired Treatment</h3>
                  
                  <div className="form-group">
                    <label htmlFor="treatment">Clinical Service</label>
                    <select 
                      id="treatment" 
                      value={formData.treatment} 
                      onChange={handleInputChange}
                      required
                    >
                      <option value="" disabled>Choose a treatment...</option>
                      <option value="laser-hair">Diode Laser Hair Removal</option>
                      <option value="facial">IPL Laser Photo Facial</option>
                      <option value="tightening">Skin Tightening & Contour</option>
                      <option value="peels">Chemical Peels & Peeling</option>
                      <option value="fillers">Dermal Fillers (Dermalax HA)</option>
                      <option value="consultation">General Consultation & Assessment</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Preferred Practitioner Gender</label>
                    <div className="radio-group">
                      <label className="radio-label">
                        <input 
                          type="radio" 
                          name="practitioner" 
                          value="no-preference" 
                          checked={formData.practitioner === 'no-preference'}
                          onChange={handleInputChange}
                        />
                        <span>No Preference</span>
                      </label>
                      <label className="radio-label">
                        <input 
                          type="radio" 
                          name="practitioner" 
                          value="female" 
                          checked={formData.practitioner === 'female'}
                          onChange={handleInputChange}
                        />
                        <span>Female Only</span>
                      </label>
                      <label className="radio-label">
                        <input 
                          type="radio" 
                          name="practitioner" 
                          value="male" 
                          checked={formData.practitioner === 'male'}
                          onChange={handleInputChange}
                        />
                        <span>Male Only</span>
                      </label>
                    </div>
                  </div>

                  <div className="form-navigation">
                    <div></div>
                    <button type="button" className="btn btn-primary" onClick={handleNext}>Continue</button>
                  </div>
                </div>
              )}

              {/* Form Step 2: Date & Time */}
              {step === 2 && (
                <div className="form-step active">
                  <h3 className="form-step-title">Choose Schedule</h3>
                  
                  <div className="form-group">
                    <label htmlFor="date">Preferred Date</label>
                    <input 
                      type="date" 
                      id="date" 
                      value={formData.date}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="timeWindow">Preferred Time Window</label>
                    <select 
                      id="timeWindow" 
                      value={formData.timeWindow}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="" disabled>Select a time...</option>
                      <option value="morning">Morning (9:00 AM - 12:00 PM)</option>
                      <option value="afternoon">Afternoon (12:00 PM - 4:00 PM)</option>
                      <option value="evening">Evening (4:00 PM - 7:00 PM)</option>
                    </select>
                  </div>

                  <div className="form-navigation">
                    <button type="button" className="btn btn-secondary" onClick={handlePrev}>Back</button>
                    <button type="button" className="btn btn-primary" onClick={handleNext}>Continue</button>
                  </div>
                </div>
              )}

              {/* Form Step 3: Contact Info */}
              {step === 3 && (
                <div className="form-step active">
                  <h3 className="form-step-title">Contact & Confirmation</h3>
                  
                  <div className="form-group">
                    <label htmlFor="fullname">Full Name</label>
                    <input 
                      type="text" 
                      id="fullname" 
                      placeholder="John Doe" 
                      value={formData.fullname}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      placeholder="john@example.com" 
                      value={formData.email}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      placeholder="(613) 555-0182" 
                      value={formData.phone}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>

                  <div className="form-group">
                    <label className="checkbox-label">
                      <input 
                        type="checkbox" 
                        id="agree"
                        checked={formData.agree}
                        onChange={handleInputChange}
                        required 
                      />
                      <span>I agree to Dermalaz's clinical policy and privacy terms.</span>
                    </label>
                  </div>

                  <div className="form-navigation">
                    <button type="button" className="btn btn-secondary" onClick={handlePrev}>Back</button>
                    <button type="submit" className="btn btn-primary">Book Consultation</button>
                  </div>
                </div>
              )}
            </form>
          ) : (
            /* Success Screen */
            <div className="booking-success-screen active">
              <div className="success-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <h3>Consultation Requested!</h3>
              <p>Thank you for choosing Dermalaz. Our medical aesthetics coordinator will contact you via phone or email within 2 business hours to finalize your appointment details.</p>
              <button className="btn btn-primary" onClick={handleReset}>Back to Site</button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
