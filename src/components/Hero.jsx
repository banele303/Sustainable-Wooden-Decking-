import React, { useState, useEffect } from 'react';

const BG_IMAGES = [
  '/images/tanda_tula_walkway.jpg',
  '/images/timber_decking.png',
  '/images/hero_sofa_deck.jpg',
  '/images/project_modern_house.png',
];

const STATS = [
  { value: '250+', label: 'Projects Done' },
  { value: '25yr', label: 'MOSO® Warranty' },
  { value: '100%', label: 'Eco-Friendly' },
  { value: '5★', label: 'Client Rating' },
];

export default function Hero({ setView }) {
  const [bgIdx, setBgIdx] = useState(0);
  const [promptInput, setPromptInput] = useState('');
  const [isInputFocused, setIsInputFocused] = useState(false);

  // Auto-rotate background every 6s
  useEffect(() => {
    const interval = setInterval(() => {
      setBgIdx(prev => (prev + 1) % BG_IMAGES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handlePromptSubmit = (e) => {
    e.preventDefault();
    if (!promptInput.trim()) return;
    localStorage.setItem('swdf_hero_prompt', promptInput);
    setView('visualizer');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      padding: '120px 0 80px',
    }}>

      {/* ── Crossfading background images ── */}
      {BG_IMAGES.map((src, idx) => (
        <div
          key={src}
          style={{
            position: 'absolute', inset: 0,
            backgroundImage: `url('${src}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: idx === bgIdx ? 0.22 : 0,
            transition: 'opacity 1.6s cubic-bezier(0.16,1,0.3,1)',
            zIndex: 1,
          }}
        />
      ))}

      {/* ── Layered gradient overlay ── */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 2,
        background: `
          radial-gradient(ellipse at 60% 40%, rgba(60,168,70,0.09) 0%, transparent 55%),
          radial-gradient(ellipse at 20% 80%, rgba(197,126,59,0.08) 0%, transparent 50%),
          linear-gradient(to bottom, rgba(5,5,5,0.55) 0%, rgba(5,5,5,0.85) 100%)
        `,
      }} />

      {/* ── Animated grain texture ── */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 3,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.035'/%3E%3C/svg%3E")`,
        opacity: 0.6,
        pointerEvents: 'none',
      }} />

      {/* ── Content ── */}
      <div className="container" style={{ position: 'relative', zIndex: 10, width: '100%' }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: '0',
        }}>

          {/* Eco badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '6px 18px',
            borderRadius: '100px',
            background: 'rgba(60,168,70,0.1)',
            border: '1px solid rgba(60,168,70,0.3)',
            backdropFilter: 'blur(12px)',
            marginBottom: '32px',
            animation: 'heroTextFadeIn 0.6s ease forwards',
          }}>
            <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#22c55e', display: 'inline-block', boxShadow: '0 0 8px #22c55e' }} />
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent-eco)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Johannesburg's Eco-Decking Specialists
            </span>
          </div>

          {/* Main headline */}
          <h1 style={{
            fontSize: 'clamp(2.6rem, 6vw, 5rem)',
            fontWeight: 900,
            lineHeight: 1.08,
            letterSpacing: '-0.03em',
            margin: '0 0 8px 0',
            fontFamily: 'var(--font-heading)',
            background: 'linear-gradient(135deg, #ffffff 0%, #e8d5b0 50%, var(--accent-eco) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            filter: 'drop-shadow(0 4px 24px rgba(0,0,0,0.6))',
            animation: 'heroTextFadeIn 0.7s 0.1s ease both',
            maxWidth: '900px',
          }}>
            Sustainable Wooden<br />Decking & Flooring
          </h1>

          {/* Company name badge */}
          <p style={{
            fontSize: 'clamp(0.85rem, 1.5vw, 1rem)',
            fontWeight: 600,
            color: 'var(--accent-secondary)',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            margin: '0 0 28px 0',
            animation: 'heroTextFadeIn 0.7s 0.2s ease both',
          }}>
            SA (Pty) Ltd · 36 Sarie Street, Ridgeway, Johannesburg
          </p>

          {/* Description */}
          <p style={{
            fontSize: 'clamp(1rem, 1.8vw, 1.15rem)',
            color: 'rgba(255,255,255,0.7)',
            lineHeight: 1.7,
            maxWidth: '620px',
            margin: '0 0 40px 0',
            animation: 'heroTextFadeIn 0.7s 0.3s ease both',
          }}>
            We supply and install premium MOSO® Bamboo and hardwood decking & flooring.
            Carbon-negative, built to last, and beautifully crafted for South African homes.
          </p>

          {/* AI Search bar */}
          <form
            onSubmit={handlePromptSubmit}
            style={{
              width: '100%',
              maxWidth: '600px',
              position: 'relative',
              background: 'rgba(15,15,20,0.7)',
              border: '1px solid',
              borderColor: isInputFocused ? 'var(--accent-eco)' : 'rgba(255,255,255,0.1)',
              borderRadius: '100px',
              padding: '6px 6px 6px 24px',
              backdropFilter: 'blur(24px)',
              boxShadow: isInputFocused
                ? '0 0 0 3px rgba(60,168,70,0.15), 0 24px 60px rgba(0,0,0,0.5)'
                : '0 24px 60px rgba(0,0,0,0.4)',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
              marginBottom: '32px',
              animation: 'heroTextFadeIn 0.7s 0.4s ease both',
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2.5" style={{ flexShrink: 0 }}>
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            <input
              type="text"
              placeholder="Ask about bamboo decking prices, installations..."
              value={promptInput}
              onChange={e => setPromptInput(e.target.value)}
              onFocus={() => setIsInputFocused(true)}
              onBlur={() => setIsInputFocused(false)}
              style={{
                flexGrow: 1, background: 'none', border: 'none',
                color: '#fff', fontSize: '0.95rem', outline: 'none',
                padding: '10px 0',
              }}
            />
            <button
              type="submit"
              style={{
                padding: '12px 26px',
                borderRadius: '100px',
                background: 'linear-gradient(135deg, var(--accent-eco) 0%, #2d8f3a 100%)',
                border: 'none', color: '#fff',
                fontSize: '0.88rem', fontWeight: 700,
                cursor: 'pointer', whiteSpace: 'nowrap',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 16px rgba(60,168,70,0.4)',
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            >
              Ask AI ✦
            </button>
          </form>

          {/* CTA Buttons */}
          <div style={{
            display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center',
            marginBottom: '64px',
            animation: 'heroTextFadeIn 0.7s 0.5s ease both',
          }}>
            <button
              onClick={() => setView('quote')}
              style={{
                padding: '15px 36px',
                borderRadius: '100px',
                background: 'linear-gradient(135deg, var(--accent-primary) 0%, #a3622a 100%)',
                border: 'none', color: '#fff',
                fontSize: '1rem', fontWeight: 700,
                cursor: 'pointer',
                boxShadow: '0 8px 32px rgba(197,126,59,0.35)',
                transition: 'all 0.3s ease',
                letterSpacing: '0.02em',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 14px 40px rgba(197,126,59,0.45)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(197,126,59,0.35)'; }}
            >
              Get Free Quote
            </button>
            <button
              onClick={() => setView('calculator')}
              style={{
                padding: '15px 36px',
                borderRadius: '100px',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.18)',
                color: '#fff',
                fontSize: '1rem', fontWeight: 600,
                cursor: 'pointer', backdropFilter: 'blur(12px)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.12)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)'; }}
            >
              🛠 Cost Estimator
            </button>
            <button
              onClick={() => setView('projects')}
              style={{
                padding: '15px 36px',
                borderRadius: '100px',
                background: 'rgba(60,168,70,0.08)',
                border: '1px solid rgba(60,168,70,0.25)',
                color: 'var(--accent-eco)',
                fontSize: '1rem', fontWeight: 600,
                cursor: 'pointer', backdropFilter: 'blur(12px)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(60,168,70,0.15)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(60,168,70,0.08)'; }}
            >
              View Portfolio
            </button>
          </div>

          {/* ── Stats row ── */}
          <div style={{
            display: 'flex',
            gap: '12px',
            flexWrap: 'wrap',
            justifyContent: 'center',
            animation: 'heroTextFadeIn 0.7s 0.6s ease both',
          }}>
            {STATS.map((stat, i) => (
              <div key={i} style={{
                padding: '16px 28px',
                borderRadius: '16px',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                backdropFilter: 'blur(16px)',
                textAlign: 'center',
                minWidth: '110px',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(60,168,70,0.08)'; e.currentTarget.style.borderColor = 'rgba(60,168,70,0.25)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; }}
              >
                <div style={{
                  fontSize: 'clamp(1.4rem, 3vw, 2rem)',
                  fontWeight: 900,
                  fontFamily: 'var(--font-heading)',
                  background: 'linear-gradient(135deg, var(--accent-eco), var(--accent-secondary))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  lineHeight: 1.1,
                }}>
                  {stat.value}
                </div>
                <div style={{
                  fontSize: '0.75rem',
                  color: 'rgba(255,255,255,0.5)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginTop: '4px',
                  fontWeight: 600,
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Scroll cue */}
          <div style={{
            marginTop: '56px',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
            opacity: 0.4,
            animation: 'heroTextFadeIn 1s 1s ease both',
          }}>
            <span style={{ fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#fff' }}>Scroll to explore</span>
            <div style={{
              width: '24px', height: '38px', borderRadius: '12px',
              border: '1.5px solid rgba(255,255,255,0.3)',
              display: 'flex', alignItems: 'flex-start', justifyContent: 'center',
              padding: '5px',
            }}>
              <div style={{
                width: '4px', height: '8px', borderRadius: '2px',
                background: '#fff',
                animation: 'scrollCue 1.8s infinite',
              }} />
            </div>
          </div>

        </div>
      </div>

      {/* Scroll cue keyframe */}
      <style>{`
        @keyframes scrollCue {
          0%   { opacity: 1; transform: translateY(0); }
          80%  { opacity: 0; transform: translateY(14px); }
          100% { opacity: 0; transform: translateY(14px); }
        }
      `}</style>
    </section>
  );
}
