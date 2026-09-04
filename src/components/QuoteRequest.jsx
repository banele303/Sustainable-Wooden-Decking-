import React, { useState, useEffect } from 'react';
import { sendEmailForm } from '../services/emailService';

const SERVICES_LIST = [
  { id: 'swimming-pool', name: 'Swimming Pool Construction' },
  { id: 'outdoor-development', name: 'Outdoor Development' },
  { id: 'pergolas', name: 'Pergolas & Gazebos' },
  { id: 'building-construction', name: 'Building Construction' },
  { id: 'architectural-design', name: 'Architectural Design' },
  { id: 'composite-decking', name: 'Composite Decking' }
];

export default function QuoteRequest({ quoteData, setQuoteData }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: 'composite-decking',
    dimensions: '',
    materialPreference: 'composite',
    siteAccess: 'easy',
    additionalDetails: '',
    fullname: '',
    email: '',
    phone: '',
    city: 'Johannesburg',
    siteVisitDate: '',
    agree: false
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // Sync calculator data if passed
  useEffect(() => {
    if (quoteData) {
      setFormData(prev => ({
        ...prev,
        fullname: quoteData.name || prev.fullname,
        email: quoteData.email || prev.email,
        phone: quoteData.phone || prev.phone,
        city: quoteData.city || prev.city,
        dimensions: quoteData.details || prev.dimensions,
        additionalDetails: quoteData.estimatedCost 
          ? `Estimated Total from Calculator: R${quoteData.estimatedCost.toLocaleString()}. Configs: ${quoteData.details}` 
          : prev.additionalDetails
      }));
    }
  }, [quoteData]);

  const handleInputChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: type === 'checkbox' ? checked : value
    }));
  };

  const handleNext = () => {
    if (step === 1 && !formData.service) {
      alert('Please select a service.');
      return;
    }
    if (step === 2 && !formData.dimensions && formData.service !== 'architectural-design') {
      alert('Please specify your project size or details.');
      return;
    }
    if (step < 3) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.fullname || !formData.email || !formData.phone || !formData.agree) {
      alert('Please fill in all contact details and agree to terms.');
      return;
    }
    setIsSubmitting(true);
    setSubmitError('');

    const res = await sendEmailForm({
      'Client Full Name': formData.fullname,
      'Email Address': formData.email,
      'Phone Number': formData.phone,
      'City / Region': formData.city,
      'Service Required': formData.service,
      'Approx Dimensions': formData.dimensions || 'Not specified',
      'Material Selected': formData.materialPreference,
      'Site Access Level': formData.siteAccess,
      'Preferred Inspection Date': formData.siteVisitDate || 'Flexible / To coordinate',
      'Additional Project Scope': formData.additionalDetails || 'None'
    }, `New Consultation & Quote Request: ${formData.fullname} (${formData.city})`);

    setIsSubmitting(false);
    if (!res.success) {
      setSubmitError(res.error || 'Notice: Email relay delayed.');
    }
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setStep(1);
    setFormData({
      service: 'composite-decking',
      dimensions: '',
      materialPreference: 'composite',
      siteAccess: 'easy',
      additionalDetails: '',
      fullname: '',
      email: '',
      phone: '',
      city: 'Johannesburg',
      siteVisitDate: '',
      agree: false
    });
    if (setQuoteData) setQuoteData(null);
    setSubmitError('');
    setIsSubmitted(false);
  };

  return (
    <section className="booking-section section-padding" id="booking">
      <div className="container booking-container" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '48px' }}>
        
        {/* Contact Info Sidebar */}
        <div className="booking-details fade-in-up active">
          <span className="badge">Get in Touch</span>
          <h2 className="section-title">Request a Consultation</h2>
          <p className="booking-intro">
            Submit your project specifications or request a site inspection. Our engineering and estimation team based in Ridgeway, Johannesburg services the wider Gauteng region daily, with project managers in Cape Town and Durban.
          </p>
          
          <div className="contact-details" style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginTop: '32px' }}>
            <div className="contact-item" style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
              <div className="contact-icon" style={{ color: 'var(--color-gold-base)', width: '40px', height: '40px', background: 'rgba(29,83,160,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.1-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
              </div>
              <div>
                <h5 style={{ margin: 0, color: '#fff', fontSize: '1rem' }}>Call Our Estimators</h5>
                <p style={{ margin: '4px 0 0 0', color: 'var(--color-text-sec)', fontSize: '0.9rem' }}>
                  <a href="tel:+27639148319" style={{ color: 'var(--color-text-sec)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color='#fff'} onMouseLeave={e => e.target.style.color='var(--color-text-sec)'}>+27 63 914 8319</a>
                  <span style={{ margin: '0 6px', opacity: 0.5 }}>/</span>
                  <a href="tel:+27812693682" style={{ color: 'var(--color-text-sec)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color='#fff'} onMouseLeave={e => e.target.style.color='var(--color-text-sec)'}>+27 81 269 3682</a>
                </p>
              </div>
            </div>
            
            <div className="contact-item" style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
              <div className="contact-icon" style={{ color: 'var(--color-gold-base)', width: '40px', height: '40px', background: 'rgba(29,83,160,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
              </div>
              <div>
                <h5 style={{ margin: 0, color: '#fff', fontSize: '1rem' }}>Email Project Office</h5>
                <p style={{ margin: '4px 0 0 0', color: 'var(--color-text-sec)', fontSize: '0.9rem' }}>
                  <a href="mailto:swdandflooringsa@gmail.com" style={{ color: 'var(--color-text-sec)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color='#fff'} onMouseLeave={e => e.target.style.color='var(--color-text-sec)'}>swdandflooringsa@gmail.com</a>
                </p>
              </div>
            </div>

            <div className="contact-item" style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
              <div className="contact-icon" style={{ color: '#25D366', width: '40px', height: '40px', background: 'rgba(37,211,102,0.12)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
              </div>
              <div>
                <h5 style={{ margin: 0, color: '#fff', fontSize: '1rem' }}>WhatsApp Chat</h5>
                <p style={{ margin: '4px 0 0 0', fontSize: '0.9rem' }}>
                  <a href="https://wa.me/27639148319?text=Hello%20SWDF%20SA,%20I'd%20like%20to%20request%20a%20quote" target="_blank" rel="noopener noreferrer" style={{ color: '#25D366', textDecoration: 'none' }}>
                    Chat +27 63 914 8319
                  </a>
                </p>
              </div>
            </div>

            <div className="contact-item" style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
              <div className="contact-icon" style={{ color: 'var(--color-gold-base)', width: '40px', height: '40px', background: 'rgba(29,83,160,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div>
                <h5 style={{ margin: 0, color: '#fff', fontSize: '1rem' }}>Showroom & Office</h5>
                <p style={{ margin: '4px 0 0 0', color: 'var(--color-text-sec)', fontSize: '0.9rem' }}>36 Sarie Street, Ridgeway, Johannesburg, 2091</p>
              </div>
            </div>

            <div className="contact-item" style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
              <div className="contact-icon" style={{ color: 'var(--color-gold-base)', width: '40px', height: '40px', background: 'rgba(29,83,160,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
              </div>
              <div>
                <h5 style={{ margin: 0, color: '#fff', fontSize: '1rem' }}>Operating Hours</h5>
                <p style={{ margin: '4px 0 0 0', color: 'var(--color-text-sec)', fontSize: '0.9rem' }}>Mon - Fri: 08:00 - 17:00 | Sat: 09:00 - 13:00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quote Form Panel */}
        <div className="booking-card fade-in-up active">
          {isSubmitted ? (
            <div className="booking-success active" style={{ display: 'block', padding: '40px', textAlign: 'center' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)', display: 'flex', alignItems: 'center', justifySelf: 'center', justifyContent: 'center', color: '#22c55e', fontSize: '2rem', marginBottom: '24px' }}>✓</div>
              <h3>Consultation Request Sent Successfully</h3>
              <p style={{ color: 'var(--text-secondary)', margin: '16px 0 12px 0', lineHeight: 1.6 }}>
                Thank you for choosing Sustainable Wooden Decking and Flooring SA. Your specifications have been emailed directly to our project office at <strong style={{ color: '#fff' }}>swdandflooringsa@gmail.com</strong>.
              </p>
              <p style={{ color: 'var(--text-muted)', margin: '0 0 20px 0', lineHeight: 1.6 }}>
                A project manager will review your submission and contact you at <strong>{formData.phone}</strong> or <strong>{formData.email}</strong> to coordinate your site inspection.
              </p>
              {submitError && (
                <div style={{ background: 'rgba(234,179,8,0.1)', border: '1px solid rgba(234,179,8,0.3)', borderRadius: '8px', padding: '12px 16px', marginBottom: '20px', fontSize: '0.85rem', color: '#fde047', textAlign: 'left' }}>
                  💡 Direct connection tip: You can also message us directly on WhatsApp:{' '}
                  <a href={`https://wa.me/27639148319?text=Hi%20SWDF%20SA,%20I%20requested%20a%20quote%20for%20${encodeURIComponent(formData.service)}`} target="_blank" rel="noopener noreferrer" style={{ color: '#22c55e', fontWeight: 600, textDecoration: 'underline' }}>
                    +27 63 914 8319
                  </a>
                </div>
              )}
              <button onClick={handleReset} className="btn btn-primary" style={{ cursor: 'pointer' }}>
                Submit Another Request
              </button>
            </div>
          ) : (
            <div className="booking-form-wrapper" style={{ padding: '32px' }}>
              
              {/* Form Steps Header */}
              <div className="booking-steps" style={{ display: 'flex', gap: '8px', marginBottom: '32px' }}>
                <span className={`step-dot ${step === 1 ? 'active' : ''} ${step > 1 ? 'completed' : ''}`}>1</span>
                <span className={`step-dot ${step === 2 ? 'active' : ''} ${step > 2 ? 'completed' : ''}`}>2</span>
                <span className={`step-dot ${step === 3 ? 'active' : ''}`}>3</span>
              </div>

              <form onSubmit={handleSubmit}>
                {/* Step 1: Select Service */}
                {step === 1 && (
                  <div className="form-step active">
                    <h3 style={{ fontSize: '1.25rem', color: '#fff', marginBottom: '20px' }}>What service do you need?</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      {SERVICES_LIST.map((srv) => (
                        <label 
                          key={srv.id} 
                          style={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            gap: '12px', 
                            padding: '16px', 
                            background: formData.service === srv.id ? 'rgba(29,83,160,0.15)' : 'rgba(255,255,255,0.02)', 
                            border: formData.service === srv.id ? '1px solid var(--color-gold-base)' : '1px solid var(--color-border)', 
                            borderRadius: '8px', 
                            cursor: 'pointer',
                            transition: 'var(--transition-fast)'
                          }}
                        >
                          <input 
                            type="radio" 
                            name="service" 
                            id="service"
                            value={srv.id} 
                            checked={formData.service === srv.id}
                            onChange={handleInputChange}
                            style={{ width: '18px', height: '18px', accentColor: 'var(--color-gold-base)' }}
                          />
                          <span style={{ color: '#fff', fontWeight: 600 }}>{srv.name}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 2: Specifications */}
                {step === 2 && (
                  <div className="form-step active">
                    <h3 style={{ fontSize: '1.25rem', color: '#fff', marginBottom: '20px' }}>Project Specifications</h3>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                      <div>
                        <label htmlFor="dimensions" style={{ display: 'block', fontSize: '0.85rem', color: 'var(--color-text-sec)', marginBottom: '8px' }}>
                          Approximate Dimensions (e.g., 6m x 4m or 24m² pool)
                        </label>
                        <input 
                          type="text" 
                          id="dimensions" 
                          placeholder="e.g. 8m long, 3m wide, low level" 
                          required={formData.service !== 'architectural-design'}
                          value={formData.dimensions}
                          onChange={handleInputChange}
                          style={{ width: '100%', padding: '12px', background: 'rgba(0,0,0,0.3)', border: '1px solid var(--color-border)', borderRadius: '6px', color: '#fff' }}
                        />
                      </div>

                      <div>
                        <label htmlFor="materialPreference" style={{ display: 'block', fontSize: '0.85rem', color: 'var(--color-text-sec)', marginBottom: '8px' }}>
                          Material Preference
                        </label>
                        <select 
                          id="materialPreference" 
                          value={formData.materialPreference}
                          onChange={handleInputChange}
                          style={{ width: '100%', padding: '12px', background: 'var(--color-bg-sec)', border: '1px solid var(--color-border)', borderRadius: '6px', color: '#fff' }}
                        >
                          <option value="composite">Eco Composite Boards (Low Maintenance)</option>
                          <option value="garapa">Garapa Hardwood (Premium Wood)</option>
                          <option value="balau">Balau Hardwood (Classic Timber)</option>
                          <option value="pine">Treated structural Pine (Budget option)</option>
                          <option value="concrete-marbelite">Concrete shell with Marbelite (Pools)</option>
                          <option value="fibreglass">Pre-formed Fibreglass Shell (Pools)</option>
                          <option value="other">Not Sure / Other</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="additionalDetails" style={{ display: 'block', fontSize: '0.85rem', color: 'var(--color-text-sec)', marginBottom: '8px' }}>
                          Describe Your Project Goals
                        </label>
                        <textarea 
                          id="additionalDetails" 
                          rows="4" 
                          placeholder="Include details about slopes, access, pergolas needed, or existing structures to remove..." 
                          value={formData.additionalDetails}
                          onChange={handleInputChange}
                          style={{ width: '100%', padding: '12px', background: 'rgba(0,0,0,0.3)', border: '1px solid var(--color-border)', borderRadius: '6px', color: '#fff', fontFamily: 'inherit', resize: 'vertical' }}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Contact & Visit Booking */}
                {step === 3 && (
                  <div className="form-step active">
                    <h3 style={{ fontSize: '1.25rem', color: '#fff', marginBottom: '20px' }}>Contact & Scheduling</h3>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                      <input 
                        type="text" 
                        id="fullname" 
                        placeholder="Full Name" 
                        required 
                        value={formData.fullname}
                        onChange={handleInputChange}
                        style={{ width: '100%', padding: '12px', background: 'rgba(0,0,0,0.3)', border: '1px solid var(--color-border)', borderRadius: '6px', color: '#fff' }}
                      />
                      <input 
                        type="email" 
                        id="email" 
                        placeholder="Email Address" 
                        required 
                        value={formData.email}
                        onChange={handleInputChange}
                        style={{ width: '100%', padding: '12px', background: 'rgba(0,0,0,0.3)', border: '1px solid var(--color-border)', borderRadius: '6px', color: '#fff' }}
                      />
                      <input 
                        type="tel" 
                        id="phone" 
                        placeholder="Phone Number" 
                        required 
                        value={formData.phone}
                        onChange={handleInputChange}
                        style={{ width: '100%', padding: '12px', background: 'rgba(0,0,0,0.3)', border: '1px solid var(--color-border)', borderRadius: '6px', color: '#fff' }}
                      />
                      
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                        <div>
                          <label htmlFor="city" style={{ display: 'block', fontSize: '0.8rem', color: 'var(--color-text-sec)', marginBottom: '6px' }}>City / Region</label>
                          <select 
                            id="city" 
                            value={formData.city}
                            onChange={handleInputChange}
                            style={{ width: '100%', padding: '12px', background: 'var(--color-bg-sec)', border: '1px solid var(--color-border)', borderRadius: '6px', color: '#fff' }}
                          >
                            <option value="Johannesburg">Johannesburg / Midrand</option>
                            <option value="Pretoria">Pretoria / Centurion</option>
                            <option value="Cape Town">Cape Town</option>
                            <option value="Durban">Durban / Umhlanga</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor="siteVisitDate" style={{ display: 'block', fontSize: '0.8rem', color: 'var(--color-text-sec)', marginBottom: '6px' }}>Site Visit Target Date</label>
                          <input 
                            type="date" 
                            id="siteVisitDate" 
                            value={formData.siteVisitDate}
                            onChange={handleInputChange}
                            style={{ width: '100%', padding: '10px 12px', background: 'rgba(0,0,0,0.3)', border: '1px solid var(--color-border)', borderRadius: '6px', color: '#fff' }}
                          />
                        </div>
                      </div>

                      <label style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.85rem', color: 'var(--color-text-sec)', cursor: 'pointer', marginTop: '8px' }}>
                        <input 
                          type="checkbox" 
                          id="agree" 
                          required 
                          checked={formData.agree}
                          onChange={handleInputChange}
                          style={{ width: '18px', height: '18px', accentColor: 'var(--color-gold-base)' }}
                        />
                        I agree to receive project consultations and site visit updates.
                      </label>
                    </div>
                  </div>
                )}

                {/* Form Navigation Controls */}
                <div style={{ display: 'flex', gap: '16px', marginTop: '32px', justifyContent: 'flex-end', borderTop: '1px solid var(--color-border)', paddingTop: '20px' }}>
                  {step > 1 && (
                    <button 
                      type="button" 
                      onClick={handlePrev} 
                      className="btn btn-secondary"
                      style={{ cursor: 'pointer', padding: '10px 20px', fontSize: '0.9rem' }}
                    >
                      ← Back
                    </button>
                  )}
                  {step < 3 ? (
                    <button 
                      type="button" 
                      onClick={handleNext} 
                      className="btn btn-primary"
                      style={{ cursor: 'pointer', padding: '10px 24px', fontSize: '0.9rem' }}
                    >
                      Next Step →
                    </button>
                  ) : (
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="btn btn-primary"
                      style={{ cursor: isSubmitting ? 'not-allowed' : 'pointer', padding: '10px 28px', fontSize: '0.9rem', opacity: isSubmitting ? 0.7 : 1 }}
                    >
                      {isSubmitting ? 'Sending to swdandflooringsa@gmail.com...' : 'Submit Consultation Request'}
                    </button>
                  )}
                </div>

              </form>

            </div>
          )}
        </div>

      </div>
    </section>
  );
}
