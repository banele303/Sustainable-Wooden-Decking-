import React, { useState } from 'react';

export default function BeforeAfter() {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    setSliderPos(Math.min(Math.max(x, 5), 95));
  };

  const handleTouchMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.touches[0].clientX - rect.left) / rect.width) * 100;
    setSliderPos(Math.min(Math.max(x, 5), 95));
  };

  return (
    <section style={{ padding: '100px 0', background: 'linear-gradient(180deg, rgba(5,5,5,1) 0%, rgba(10,18,10,0.95) 100%)', position: 'relative', overflow: 'hidden' }} id="before-after">
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(60,168,70,0.06) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(197,126,59,0.06) 0%, transparent 50%)', pointerEvents: 'none' }} />

      <div className="container">
        <div className="section-header text-center fade-in-up active">
          <span className="badge" style={{ background: 'rgba(197,126,59,0.1)', color: 'var(--accent-secondary)', border: '1px solid rgba(197,126,59,0.25)' }}>Transformations</span>
          <h2 className="section-title">Before & After Reveals</h2>
          <p className="section-desc">Drag the slider to reveal the transformation. From weathered, worn-out decks to stunning eco-friendly installations.</p>
        </div>

        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          {/* Interactive Drag Slider */}
          <div
            style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden', cursor: isDragging ? 'grabbing' : 'grab', userSelect: 'none', boxShadow: '0 32px 64px rgba(0,0,0,0.6)', border: '1px solid rgba(255,255,255,0.08)' }}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchStart={() => setIsDragging(true)}
            onTouchEnd={() => setIsDragging(false)}
            onTouchMove={handleTouchMove}
          >
            {/* After image (full width underneath) */}
            <img
              src="/images/before_after_deck.png"
              alt="After - Premium deck installation"
              style={{ width: '100%', height: '420px', objectFit: 'cover', display: 'block' }}
              draggable="false"
            />

            {/* Before image (clipped on left) */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: `${sliderPos}%`, height: '100%', overflow: 'hidden' }}>
              <img
                src="/images/composite_boards.png"
                alt="Before - weathered deck"
                style={{ width: `${100 / (sliderPos / 100)}%`, maxWidth: 'none', height: '100%', objectFit: 'cover', display: 'block' }}
                draggable="false"
              />
            </div>

            {/* Drag divider line */}
            <div style={{ position: 'absolute', top: 0, bottom: 0, left: `${sliderPos}%`, transform: 'translateX(-50%)', width: '3px', background: 'rgba(255,255,255,0.9)', boxShadow: '0 0 20px rgba(255,255,255,0.5)', zIndex: 10 }}>
              {/* Handle */}
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '44px', height: '44px', borderRadius: '50%', background: '#fff', boxShadow: '0 4px 16px rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '3px' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2.5">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2.5" style={{ marginLeft: '-6px' }}>
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </div>
            </div>

            {/* Labels */}
            <div style={{ position: 'absolute', top: '16px', left: '16px', padding: '6px 14px', background: 'rgba(239,68,68,0.85)', backdropFilter: 'blur(8px)', borderRadius: '6px', color: '#fff', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', zIndex: 5, pointerEvents: 'none' }}>Before</div>
            <div style={{ position: 'absolute', top: '16px', right: '16px', padding: '6px 14px', background: 'rgba(34,197,94,0.85)', backdropFilter: 'blur(8px)', borderRadius: '6px', color: '#fff', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', zIndex: 5, pointerEvents: 'none' }}>After</div>
          </div>

          <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '16px' }}>← Drag to compare →</p>

          {/* Transformation details */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', marginTop: '40px' }}>
            {[
              { icon: '🔩', title: 'Subframe Reinforcement', desc: 'Rotting joists replaced with structural steel or treated pine framework, engineered for decades of stability.' },
              { icon: '🎋', title: 'Eco Board Installation', desc: 'MOSO® Bamboo or premium hardwood boards laid with concealed stainless steel clip fasteners for a seamless surface.' },
              { icon: '🌿', title: 'Zero Maintenance Finish', desc: 'UV-protective oil applied. No sanding or sealing needed — just a rinse with soapy water keeps it pristine.' }
            ].map((item, i) => (
              <div key={i} style={{ padding: '24px', background: 'rgba(20,20,25,0.7)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.06)', backdropFilter: 'blur(12px)' }}>
                <div style={{ fontSize: '1.6rem', marginBottom: '12px' }}>{item.icon}</div>
                <h4 style={{ color: 'var(--accent-secondary)', fontSize: '1rem', fontWeight: 700, marginBottom: '8px' }}>{item.title}</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.55, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
