import React, { useState } from 'react';

export default function Contact({ setView }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Moso Bamboo Decking',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      alert('Please fill in your name, email and phone number.');
      return;
    }
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: 'Moso Bamboo Decking',
      message: ''
    });
    setIsSubmitted(false);
  };

  return (
    <div className="contact-page" style={{ minHeight: 'calc(100vh - var(--header-height))', background: 'var(--color-bg-deep)', paddingBottom: '80px' }}>
      
      {/* 1. Header Banner */}
      <section style={{ 
        padding: '100px 0 60px', 
        background: 'radial-gradient(circle at 50% 20%, rgba(60, 168, 70, 0.15) 0%, rgba(10, 10, 12, 0.95) 70%)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        textAlign: 'center'
      }}>
        <div className="container">
          <span className="badge" style={{ 
            background: 'rgba(60, 168, 70, 0.15)', 
            color: 'var(--accent-eco)', 
            border: '1px solid rgba(60, 168, 70, 0.3)',
            padding: '6px 16px',
            borderRadius: '20px',
            fontSize: '0.85rem',
            fontWeight: 600,
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            display: 'inline-block',
            marginBottom: '16px'
          }}>
            Get in Touch
          </span>
          <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: 900, color: '#fff', margin: '0 0 16px 0', letterSpacing: '-0.02em' }}>
            Contact Our Specialists
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '650px', margin: '0 auto', lineHeight: 1.6 }}>
            Have questions about Moso Bamboo decking, hardwood floors, or need a site inspection? Reach out directly to our Johannesburg team.
          </p>
        </div>
      </section>

      {/* 2. Contact Cards Grid */}
      <section className="container" style={{ marginTop: '-30px', position: 'relative', zIndex: 10 }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', 
          gap: '24px' 
        }}>
          
          {/* Card 1: Direct Phone */}
          <div style={{
            background: 'linear-gradient(145deg, rgba(25, 26, 30, 0.9) 0%, rgba(14, 15, 18, 0.95) 100%)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '16px',
            padding: '30px 24px',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            transition: 'transform 0.3s ease, border-color 0.3s ease'
          }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(60, 168, 70, 0.15)', color: 'var(--accent-eco)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.1-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', color: '#fff', margin: '0 0 6px 0', fontWeight: 700 }}>Call Us Directly</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', margin: 0, lineHeight: 1.5 }}>Estimations & Technical Inquiries</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: 'auto' }}>
              <a 
                href="tel:+27639148319" 
                style={{ color: '#fff', textDecoration: 'none', fontWeight: 600, fontSize: '1.02rem', display: 'flex', alignItems: 'center', gap: '8px' }}
              >
                <span>📞</span> +27 63 914 8319
              </a>
              <a 
                href="tel:+27812693682" 
                style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.92rem', display: 'flex', alignItems: 'center', gap: '8px' }}
              >
                <span>📞</span> +27 81 269 3682
              </a>
            </div>
          </div>

          {/* Card 2: WhatsApp Chat */}
          <div style={{
            background: 'linear-gradient(145deg, rgba(25, 26, 30, 0.9) 0%, rgba(14, 15, 18, 0.95) 100%)',
            border: '1px solid rgba(37, 211, 102, 0.3)',
            borderRadius: '16px',
            padding: '30px 24px',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(37, 211, 102, 0.15)', color: '#25D366', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', color: '#fff', margin: '0 0 6px 0', fontWeight: 700 }}>WhatsApp Support</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', margin: 0, lineHeight: 1.5 }}>Fast mobile quotes & photo sharing</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: 'auto' }}>
              <a 
                href="https://wa.me/27639148319?text=Hello%20SWDF%20SA,%20I'd%20like%20to%20inquire%20about%20decking%20and%20flooring" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ background: '#25D366', borderColor: '#25D366', color: '#fff', textAlign: 'center', padding: '10px 16px', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
              >
                <span>💬</span> Chat +27 63 914 8319
              </a>
              <a 
                href="https://wa.me/27812693682?text=Hello%20SWDF%20SA,%20I'd%20like%20to%20inquire%20about%20decking%20and%20flooring" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.85rem', textAlign: 'center', marginTop: '4px' }}
              >
                Alt WhatsApp: +27 81 269 3682
              </a>
            </div>
          </div>

          {/* Card 3: Email Inquiries */}
          <div style={{
            background: 'linear-gradient(145deg, rgba(25, 26, 30, 0.9) 0%, rgba(14, 15, 18, 0.95) 100%)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '16px',
            padding: '30px 24px',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(197, 126, 59, 0.15)', color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', color: '#fff', margin: '0 0 6px 0', fontWeight: 700 }}>Email Office</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', margin: 0, lineHeight: 1.5 }}>Send floor plans & tender specs</p>
            </div>
            <div style={{ marginTop: 'auto' }}>
              <a 
                href="mailto:swdandflooringsa@gmail.com" 
                style={{ color: '#fff', textDecoration: 'none', fontWeight: 600, fontSize: '0.98rem', wordBreak: 'break-all' }}
              >
                swdandflooringsa@gmail.com
              </a>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.82rem', marginTop: '6px' }}>
                Replies within 24 hours
              </div>
            </div>
          </div>

          {/* Card 4: Showroom & Office */}
          <div style={{
            background: 'linear-gradient(145deg, rgba(25, 26, 30, 0.9) 0%, rgba(14, 15, 18, 0.95) 100%)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '16px',
            padding: '30px 24px',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(60, 168, 70, 0.15)', color: 'var(--accent-eco)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', color: '#fff', margin: '0 0 6px 0', fontWeight: 700 }}>Head Office</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', margin: 0, lineHeight: 1.5 }}>Showroom & Workshop</p>
            </div>
            <div style={{ marginTop: 'auto' }}>
              <p style={{ color: '#fff', fontSize: '0.92rem', margin: '0 0 10px 0', lineHeight: 1.5 }}>
                36 Sarie Street, Ridgeway, Johannesburg, 2091
              </p>
              <a 
                href="https://maps.google.com/?q=36+Sarie+Street,+Ridgeway,+Johannesburg,+2091" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: 'var(--accent-eco)', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '4px' }}
              >
                Open in Maps →
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Main Form & Info Section */}
      <section className="container" style={{ marginTop: '60px' }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: window.innerWidth > 992 ? '1fr 1.2fr' : '1fr', 
          gap: '40px',
          alignItems: 'start'
        }}>
          
          {/* Left Details: Hours, Areas, and Direct Quote CTA */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            
            <div style={{
              background: 'rgba(18, 19, 23, 0.8)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '16px',
              padding: '32px'
            }}>
              <h3 style={{ fontSize: '1.3rem', color: '#fff', marginBottom: '16px', fontWeight: 700 }}>
                Operating Hours & Consultations
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '20px' }}>
                We conduct on-site inspections across Gauteng Mondays to Saturdays. Showroom visits at our Ridgeway location are by appointment.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.92rem' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>Monday – Friday:</span>
                  <span style={{ color: '#fff', fontWeight: 600 }}>08:00 – 17:00</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.92rem' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>Saturday:</span>
                  <span style={{ color: '#fff', fontWeight: 600 }}>09:00 – 13:00</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.92rem' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>Sunday & Public Holidays:</span>
                  <span style={{ color: 'var(--text-muted)' }}>Closed</span>
                </div>
              </div>
            </div>

            <div style={{
              background: 'rgba(18, 19, 23, 0.8)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '16px',
              padding: '32px'
            }}>
              <h3 style={{ fontSize: '1.3rem', color: '#fff', marginBottom: '12px', fontWeight: 700 }}>
                Service Coverage
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '16px' }}>
                We service residential estates, luxury lodges, and commercial complexes across South Africa:
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {['Johannesburg South & North', 'Sandton & Bryanston', 'Midrand & Centurion', 'Pretoria East', 'Cape Town Atlantic Seaboard', 'Durban North & Umhlanga'].map((region, i) => (
                  <span key={i} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', padding: '6px 12px', borderRadius: '6px', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                    📍 {region}
                  </span>
                ))}
              </div>
            </div>

            {/* Quote Creator Shortcut */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(60, 168, 70, 0.15) 0%, rgba(197, 126, 59, 0.15) 100%)',
              border: '1px solid rgba(60, 168, 70, 0.3)',
              borderRadius: '16px',
              padding: '28px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}>
              <h4 style={{ fontSize: '1.15rem', color: '#fff', margin: 0, fontWeight: 700 }}>Need an Instant Budgetary Quote?</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0, lineHeight: 1.5 }}>
                Use our automated cost estimator to calculate per-square-meter prices for Moso Bamboo, Garapa, and engineered flooring in seconds.
              </p>
              <button 
                onClick={() => { setView('calculator'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="btn btn-primary" 
                style={{ alignSelf: 'flex-start' }}
              >
                Launch Cost Estimator →
              </button>
            </div>

          </div>

          {/* Right: Interactive Contact Form */}
          <div style={{
            background: 'linear-gradient(145deg, rgba(22, 23, 27, 0.95) 0%, rgba(14, 15, 18, 0.98) 100%)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '20px',
            padding: '36px',
            boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
          }}>
            {isSubmitted ? (
              <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                <div style={{ 
                  width: '64px', 
                  height: '64px', 
                  borderRadius: '50%', 
                  background: 'rgba(34,197,94,0.15)', 
                  border: '1px solid rgba(34,197,94,0.3)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  margin: '0 auto 24px', 
                  color: '#22c55e', 
                  fontSize: '2rem' 
                }}>
                  ✓
                </div>
                <h3 style={{ fontSize: '1.6rem', color: '#fff', marginBottom: '12px' }}>Message Received</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '24px' }}>
                  Thank you, <strong>{formData.name}</strong>. Our project estimator will contact you shortly at <strong>{formData.phone}</strong> or <strong>{formData.email}</strong>.
                </p>
                <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <button onClick={handleReset} className="btn btn-secondary" style={{ padding: '10px 20px', fontSize: '0.9rem' }}>
                    Send Another Message
                  </button>
                  <button onClick={() => { setView('landing'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="btn btn-primary" style={{ padding: '10px 20px', fontSize: '0.9rem' }}>
                    Back to Home
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <h2 style={{ fontSize: '1.6rem', color: '#fff', margin: '0 0 8px 0', fontWeight: 800 }}>Send Us a Message</h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', margin: '0 0 28px 0' }}>
                  Tell us about your outdoor decking or flooring project and our team will get in touch.
                </p>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  
                  <div>
                    <label style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '8px', fontWeight: 500 }}>
                      Full Name *
                    </label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. David Mokoena"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '14px 16px',
                        background: 'rgba(0,0,0,0.4)',
                        border: '1px solid rgba(255,255,255,0.12)',
                        borderRadius: '8px',
                        color: '#fff',
                        fontSize: '0.95rem',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                    <div>
                      <label style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '8px', fontWeight: 500 }}>
                        Email Address *
                      </label>
                      <input 
                        type="email" 
                        required
                        placeholder="you@domain.co.za"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '14px 16px',
                          background: 'rgba(0,0,0,0.4)',
                          border: '1px solid rgba(255,255,255,0.12)',
                          borderRadius: '8px',
                          color: '#fff',
                          fontSize: '0.95rem',
                          outline: 'none'
                        }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '8px', fontWeight: 500 }}>
                        Phone Number *
                      </label>
                      <input 
                        type="tel" 
                        required
                        placeholder="e.g. 082 123 4567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '14px 16px',
                          background: 'rgba(0,0,0,0.4)',
                          border: '1px solid rgba(255,255,255,0.12)',
                          borderRadius: '8px',
                          color: '#fff',
                          fontSize: '0.95rem',
                          outline: 'none'
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '8px', fontWeight: 500 }}>
                      Service or Product Required
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '14px 16px',
                        background: 'rgba(15,16,20,0.95)',
                        border: '1px solid rgba(255,255,255,0.12)',
                        borderRadius: '8px',
                        color: '#fff',
                        fontSize: '0.95rem',
                        outline: 'none'
                      }}
                    >
                      <option value="Moso Bamboo Decking">Moso Bamboo Decking (MOSO® X-treme®)</option>
                      <option value="Moso Bamboo Flooring">Moso Bamboo Interior Flooring</option>
                      <option value="Hardwood Decking">Hardwood Decking (Garapa / Balau)</option>
                      <option value="Engineered Flooring">Engineered Wood Flooring (Oak / Walnut)</option>
                      <option value="Pergolas & Cladding">Pergolas & Exterior Cladding</option>
                      <option value="Restoration & Maintenance">Restoration & Maintenance</option>
                      <option value="General Inquiry">General Technical Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '8px', fontWeight: 500 }}>
                      Message or Project Dimensions (m²)
                    </label>
                    <textarea 
                      rows={4}
                      placeholder="Please share your estimated area size, location, and preferred timeframe..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '14px 16px',
                        background: 'rgba(0,0,0,0.4)',
                        border: '1px solid rgba(255,255,255,0.12)',
                        borderRadius: '8px',
                        color: '#fff',
                        fontSize: '0.95rem',
                        outline: 'none',
                        resize: 'vertical'
                      }}
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="btn btn-primary"
                    style={{ width: '100%', padding: '16px', fontSize: '1rem', fontWeight: 700, marginTop: '8px' }}
                  >
                    Send Inquiry →
                  </button>

                  <p style={{ color: 'var(--text-muted)', fontSize: '0.78rem', textAlign: 'center', margin: 0 }}>
                    🔒 We respect your privacy. Your information is strictly used for your project quote.
                  </p>
                </form>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* 4. Map & Directions Embed Card */}
      <section className="container" style={{ marginTop: '60px' }}>
        <div style={{
          background: 'rgba(18, 19, 23, 0.8)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '16px',
          overflow: 'hidden'
        }}>
          <div style={{ padding: '24px 32px', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <h3 style={{ fontSize: '1.2rem', color: '#fff', margin: '0 0 4px 0', fontWeight: 700 }}>
                📍 Johannesburg Office & Showroom Location
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', margin: 0 }}>
                36 Sarie Street, Ridgeway, Johannesburg, 2091
              </p>
            </div>
            <a 
              href="https://maps.google.com/?q=36+Sarie+Street,+Ridgeway,+Johannesburg,+2091" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{ fontSize: '0.85rem', padding: '8px 18px' }}
            >
              Get Directions ↗
            </a>
          </div>
          <div style={{ width: '100%', height: '320px', background: '#111' }}>
            <iframe
              title="SWDF SA Office Location"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)' }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://maps.google.com/maps?q=36%20Sarie%20Street,%20Ridgeway,%20Johannesburg,%202091&t=&z=15&ie=UTF8&iwloc=&output=embed"
            ></iframe>
          </div>
        </div>
      </section>

    </div>
  );
}
