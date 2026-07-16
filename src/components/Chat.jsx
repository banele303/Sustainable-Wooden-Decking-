import React, { useState, useRef, useEffect, useCallback } from 'react';

/* ─── SWDF SA AI Knowledge Base ─────────────────────────────────────────── */
const SYSTEM_PERSONA = `You are SWDF SA AI Assistant, the virtual consultant for Sustainable Wooden Decking and Flooring SA (Pty) Ltd located at 36 Sarie Street, Ridgeway, Johannesburg 2091. You are professional, knowledgeable, and precise. You specialize in:
- Moso Bamboo Decking (MOSO® Bamboo X-treme® / N-durance®) from R1,850/m² installed
- Moso Bamboo Flooring (high-density interior flooring) from R1,200/m² installed
- Premium Hardwood Decking (Garapa, Balau) from R1,800/m² installed
- Engineered Wood Flooring (French Oak, Walnut) from R1,350/m² installed
- Pergolas & Bamboo Cladding - custom quotes
- Restoration & Maintenance from R220/m²
- Sustainability, SANS 10400 safety building codes, and eco-friendly products
Contact: swdandflooringsa@gmail.com | 36 Sarie Street, Ridgeway, Johannesburg 2091.
Always keep responses concise, bulleted, and helpful.`;

/* ─── Local fallback matching engine ─────────────────────────────────────── */
const buildFallbackResponse = (userMessages) => {
  const lastMsg = userMessages[userMessages.length - 1]?.content?.toLowerCase() || '';

  if (lastMsg.match(/bamboo|moso|x-treme|n-durance/)) {
    return `**MOSO® Bamboo — Our Flagship Sustainable Product:**\n\n• **Carbon-Negative:** Bamboo absorbs more CO₂ than it produces over its lifecycle.\n• **Class 1 Durability:** Harder than tropical hardwoods, with a 25-year structural warranty.\n• **Bamboo Decking:** From **R1,850/m²** installed (using hidden clip systems).\n• **Bamboo Flooring:** From **R1,200/m²** supply and install — highly scratch-resistant and stable.`;
  } else if (lastMsg.match(/hardwood|timber|wood|garapa|balau/)) {
    return `**Premium Timber Decking Options:**\n\n• **Garapa (Hardwood):** Golden-honey color, extremely durable and rot-resistant. From R1,800/m².\n• **Balau (Hardwood):** Classic reddish-brown hardwood. Long-lasting but needs annual oiling. From R1,900/m².\n• All boards are installed with hidden stainless steel fasteners to ensure a clean surface.`;
  } else if (lastMsg.match(/floor|flooring|indoor|interior/)) {
    return `**Engineered Wood Flooring Options:**\n\n• French Oak & Walnut veneer ranges.\n• Multi-layer core prevents warping or cupping from humidity.\n• From **R1,350/m²** supply and install.\n• Perfect for residential and commercial interiors.`;
  } else if (lastMsg.match(/pergola|cladding|gazebo/)) {
    return `**Custom Pergolas & Wall Cladding:**\n\n• Built from structural grade Pine, Balau, or Garapa timber.\n• Bamboo privacy cladding for walls and fences.\n• Custom quotes depending on dimensions — contact us for a free onsite layout estimate!`;
  } else if (lastMsg.match(/sans|regulation|code|safety|height|handrail/)) {
    return `**Raised Deck & Balustrade Regulations (SANS 10400):**\n\n• **Elevation:** Decks raised more than 300mm require handrails.\n• **Height:** Balustrades must be at least 1.0m high, with vertical gaps no wider than 100mm.\n• **Certification:** Decks raised higher than 1.5m require structural engineering sign-off.`;
  } else if (lastMsg.match(/price|cost|how much|rate|estimate/)) {
    return `**ZAR Installed Price Guide:**\n\n• Moso Bamboo Decking: From R1,850/m²\n• Moso Bamboo Flooring: From R1,200/m²\n• Hardwood Decking: From R1,800/m²\n• Engineered Wood Flooring: From R1,350/m²\n• Restoration Services: From R220/m²\n\nUse our interactive **Cost Estimator** on the page for a comprehensive quote!`;
  } else if (lastMsg.match(/restore|restoration|maintenance|sand|oil/)) {
    return `**Restoration & Maintenance Services:**\n\n• Mechanical sanding, deep chemical cleaning, and UV oil application.\n• Subframe reinforcement and broken board replacement.\n• Rates starting from **R220/m²** to restore decks to original beauty.`;
  } else if (lastMsg.match(/hour|open|close|location|address|where|johannesburg|ridgeway/)) {
    return `📍 **Our Showroom / Office:**\n36 Sarie Street, Ridgeway, Johannesburg 2091\n\n✉️ **Email:** swdandflooringsa@gmail.com\n\nWe service the entire Johannesburg and greater Gauteng area.`;
  } else if (lastMsg.match(/hello|hi|hey/)) {
    return `Welcome to **SWDF SA Project Consultant** 🌿\n\nI can assist you with:\n\n• 🎋 Moso Bamboo Decking & Flooring specs\n• 🪵 Garapa & Balau hardwood decking\n• 🏡 Pergolas & Bamboo wall cladding\n• 🔧 Restoration & maintenance quotes\n• 📍 Located in Ridgeway, Johannesburg\n\nHow can I help you today?`;
  }
  return `Thank you for your question. We specialize in Moso Bamboo and premium hardwood decking & flooring solutions in Johannesburg. Tell me more about your project so I can assist!`;
};

/* ─── Diagnostic Gauge Component ─────────────────────────────────────────── */
const Gauge = ({ label, value, color, unit }) => (
  <div className="diag-gauge">
    <div className="diag-gauge-header">
      <span className="diag-gauge-label" style={{ color: 'var(--color-text-sec)', fontSize: '0.85rem' }}>{label}</span>
      <span className="diag-gauge-value" style={{ color, fontWeight: 700 }}>{value}<span className="diag-gauge-unit" style={{ fontSize: '0.8em', marginLeft: '2px' }}>{unit}</span></span>
    </div>
    <div className="diag-gauge-bar" style={{ background: 'rgba(255,255,255,0.05)', height: '6px', borderRadius: '4px', overflow: 'hidden', marginTop: '6px' }}>
      <div className="diag-gauge-fill" style={{ width: `${value}%`, background: `linear-gradient(90deg, ${color}66, ${color})`, height: '100%', borderRadius: '4px' }}></div>
    </div>
  </div>
);

/* ─── Preset queries ──────────────────────────────────────────────────────── */
const PRESETS = [
  { icon: '🎋', text: 'Tell me about Moso Bamboo Decking specs', short: 'Bamboo Decking' },
  { icon: '🌿', text: 'What is the price of Moso Bamboo Flooring?', short: 'Bamboo Flooring' },
  { icon: '🪵', text: 'Compare Garapa and Balau hardwood decks', short: 'Hardwood Decks' },
  { icon: '🏡', text: 'How much do pergolas cost?', short: 'Pergola Pricing' },
  { icon: '🔧', text: 'Tell me about deck restoration services', short: 'Restoration Care' },
  { icon: '📍', text: 'What is your email and office location?', short: 'Office Details' },
];

/* ─── Main Chat Component ─────────────────────────────────────────────────── */
export default function Chat() {
  const chatEndRef = useRef(null);
  const [diagnostics, setDiagnostics] = useState({ loadLimit: 85, soilBearing: 160, slopeIncline: 8 });
  const [scanning, setScanning] = useState(false);
  const [inputVal, setInputVal] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 'init',
      role: 'assistant',
      content: "Welcome to **SWDF SA Project Consultant** 🌿\n\nI'm the virtual project assistant. Ask me anything about Moso Bamboo decking, hardwood flooring, pricing, SANS 10400 building codes, or our Johannesburg showroom.\n\nWhat project can I help you plan today?"
    }
  ]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const sendMessage = async (text) => {
    if (!text.trim()) return;

    const userMsg = { id: Math.random().toString(), role: 'user', content: text };
    setMessages(prev => [...prev, userMsg]);
    setIsLoading(true);

    // Substructure Diagnostic Scanner animation simulation
    setScanning(true);
    setTimeout(() => {
      setDiagnostics({
        loadLimit: 75 + Math.floor(Math.random() * 20),
        soilBearing: 110 + Math.floor(Math.random() * 110),
        slopeIncline: 1 + Math.floor(Math.random() * 15),
      });
      setScanning(false);
    }, 1200);

    const conversationHistory = [...messages, userMsg];
    const reply = buildFallbackResponse(conversationHistory);

    // Typist delay simulation
    setTimeout(async () => {
      const assistantMsgId = Math.random().toString();
      setMessages(prev => [...prev, { id: assistantMsgId, role: 'assistant', content: '' }]);

      const tokens = reply.split(/(?=\s+)/);
      let currentText = '';
      for (let i = 0; i < tokens.length; i++) {
        currentText += tokens[i];
        setMessages(prev => prev.map(m => m.id === assistantMsgId ? { ...m, content: currentText } : m));
        await new Promise(resolve => setTimeout(resolve, 12));
      }
      setIsLoading(false);
    }, 400);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!inputVal.trim() || isLoading) return;
    const text = inputVal;
    setInputVal('');
    sendMessage(text);
  };

  const sendPreset = useCallback((text) => {
    sendMessage(text);
  }, [messages]);

  const renderContent = (text) => {
    return text.split('\n').map((line, i) => {
      const bold = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      const bullet = bold.startsWith('• ') ? `<span class="chat-bullet">•</span>${bold.slice(2)}` : bold;
      const mdTable = bold.startsWith('|') ? `<span class="chat-table-row">${bold}</span>` : bullet;
      return <p key={i} dangerouslySetInnerHTML={{ __html: mdTable || '&nbsp;' }} className={line.startsWith('• ') ? 'chat-bullet-line' : ''} style={{ margin: '0 0 8px 0', lineHeight: 1.6 }} />;
    });
  };

  return (
    <div className="chat-page" style={{ display: 'grid', gridTemplateColumns: '1fr', minHeight: 'calc(100vh - var(--header-height))', background: 'var(--color-bg-deep)' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '30px', padding: '30px 24px' }}>
        
        <div className="chat-interface-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '30px', alignItems: 'stretch' }}>
          
          {/* ── Sidebar (Structural Diagnostics) ────────────────────────── */}
          <aside style={{ background: 'var(--color-bg-card)', padding: '24px', borderRadius: '12px', border: '1px solid var(--color-border)', display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            {/* Structural Scanner Widget */}
            <div className="scanner-widget" style={{ textAlign: 'center' }}>
              <div className={`scanner-face ${scanning ? 'scanning' : ''}`} style={{ position: 'relative', width: '200px', margin: '0 auto' }}>
                <svg viewBox="0 0 200 220" style={{ width: '100%', height: 'auto', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '10px', background: 'rgba(0,0,0,0.2)' }}>
                  <defs>
                    <linearGradient id="scanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="var(--color-gold-base)" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="var(--color-laser)" stopOpacity="0.8" />
                    </linearGradient>
                  </defs>
                  
                  {/* Deck joist structural grid lines */}
                  <rect x="25" y="30" width="150" height="150" fill="none" stroke="url(#scanGrad)" strokeWidth="1.5" strokeDasharray="3 3" />
                  
                  {/* Beams */}
                  <line x1="25" y1="80" x2="175" y2="80" stroke="var(--color-gold-base)" strokeWidth="2.5" opacity="0.7" />
                  <line x1="25" y1="130" x2="175" y2="130" stroke="var(--color-gold-base)" strokeWidth="2.5" opacity="0.7" />
                  
                  {/* Joists */}
                  <line x1="55" y1="30" x2="55" y2="180" stroke="var(--color-accent)" strokeWidth="1" opacity="0.5" />
                  <line x1="85" y1="30" x2="85" y2="180" stroke="var(--color-accent)" strokeWidth="1" opacity="0.5" />
                  <line x1="115" y1="30" x2="115" y2="180" stroke="var(--color-accent)" strokeWidth="1" opacity="0.5" />
                  <line x1="145" y1="30" x2="145" y2="180" stroke="var(--color-accent)" strokeWidth="1" opacity="0.5" />
                  
                  {/* Foundation Piers (dots) */}
                  <circle cx="55" cy="80" r="5" fill="var(--color-laser)" />
                  <circle cx="115" cy="80" r="5" fill="var(--color-laser)" />
                  <circle cx="145" cy="80" r="5" fill="var(--color-laser)" />
                  <circle cx="55" cy="130" r="5" fill="var(--color-laser)" />
                  <circle cx="115" cy="130" r="5" fill="var(--color-laser)" />
                  <circle cx="145" cy="130" r="5" fill="var(--color-laser)" />
                  
                  {/* Laser scanning line */}
                  <line x1="20" y1="30" x2="180" y2="30" stroke="var(--color-laser)" strokeWidth="2" opacity="0.9" className="scan-line" style={{ animation: scanning ? 'scanAnimation 1.5s infinite ease-in-out' : 'none' }} />
                </svg>
                <div style={{ fontSize: '0.8rem', color: scanning ? 'var(--color-laser)' : 'var(--color-text-muted)', fontWeight: 700, marginTop: '8px', letterSpacing: '0.05em' }}>
                  {scanning ? 'BEAM CALCULATION IN PROGRESS...' : 'SUBSTRUCTURE DIAGNOSTIC READY'}
                </div>
              </div>
            </div>

            {/* Diagnostics Panel */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ borderBottom: '1px solid var(--color-border)', paddingBottom: '8px', fontWeight: 600, fontSize: '0.9rem', color: '#fff', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Structural Diagnostics
              </div>
              <Gauge label="Beam Load Capacity" value={diagnostics.loadLimit} color="var(--color-gold-base)" unit="%" />
              <Gauge label="Soil Bearing Capacity" value={Math.round(diagnostics.soilBearing / 2.4)} color="var(--color-accent)" unit="kPa" />
              <Gauge label="Slope Incline Angle" value={diagnostics.slopeIncline} color="var(--color-laser)" unit="°" />
            </div>

            {/* Presets Panel */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ borderBottom: '1px solid var(--color-border)', paddingBottom: '8px', fontWeight: 600, fontSize: '0.9rem', color: '#fff', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Quick Topics
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '8px' }}>
                {PRESETS.map((p, i) => (
                  <button 
                    key={i} 
                    onClick={() => sendPreset(p.text)}
                    style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 14px', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--color-border)', borderRadius: '6px', cursor: 'pointer', textAlign: 'left', fontSize: '0.82rem', color: 'var(--color-text-sec)', transition: 'var(--transition-fast)' }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = '#fff'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; e.currentTarget.style.color = 'var(--color-text-sec)'; }}
                  >
                    <span>{p.icon}</span>
                    <span>{p.short}</span>
                  </button>
                ))}
              </div>
            </div>

          </aside>

          {/* ── Chat Feed ────────────────────────────────────────────────── */}
          <div style={{ background: 'var(--color-bg-card)', borderRadius: '12px', border: '1px solid var(--color-border)', display: 'flex', flexDirection: 'column', height: '620px' }}>
            
            {/* Header */}
            <div style={{ padding: '20px 24px', borderBottom: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ position: 'relative' }}>
                <img src="/images/logo_round.jpg" alt="SWDF SA" style={{ width: '40px', height: '40px', objectFit: 'cover', background: '#fff', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.1)' }} />
                <span style={{ position: 'absolute', bottom: '-2px', right: '-2px', width: '10px', height: '10px', borderRadius: '50%', background: '#22c55e', border: '2px solid var(--color-bg-card)' }}></span>
              </div>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontWeight: 700, color: '#fff', fontSize: '0.98rem' }}>SWDF SA Consultant <span className="chat-ai-badge" style={{ fontSize: '0.62rem', background: 'var(--accent-eco)', color: '#fff', padding: '2px 5px', borderRadius: '4px', marginLeft: '6px', fontWeight: 800 }}>AI</span></div>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Online · Project Planning Consultant</div>
              </div>
            </div>

            {/* Message Thread */}
            <div className="chat-messages-container" style={{ flexGrow: 1, padding: '24px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {messages.map((m) => (
                <div key={m.id} style={{ display: 'flex', gap: '12px', justifyContent: m.role === 'user' ? 'flex-end' : 'flex-start' }}>
                  {m.role !== 'user' && (
                    <img src="/images/logo_round.jpg" alt="" style={{ width: '32px', height: '32px', objectFit: 'cover', background: '#fff', borderRadius: '50%', alignSelf: 'flex-start', border: '1px solid rgba(255,255,255,0.1)' }} />
                  )}
                  <div 
                    className={`chat-bubble ${m.role}`}
                    style={{ 
                      padding: '14px 18px', 
                      borderRadius: m.role === 'user' ? '12px 12px 2px 12px' : '12px 12px 12px 2px', 
                      background: m.role === 'user' ? 'var(--accent-primary)' : 'var(--color-bg-sec)', 
                      border: '1px solid var(--color-border)',
                      color: '#fff', 
                      maxWidth: '75%', 
                      fontSize: '0.92rem', 
                      textAlign: 'left' 
                    }}
                  >
                    {renderContent(m.content)}
                  </div>
                </div>
              ))}

              {isLoading && (
                <div style={{ display: 'flex', gap: '12px' }}>
                  <img src="/images/logo_round.jpg" alt="SWDF SA" style={{ width: '32px', height: '32px', objectFit: 'cover', background: '#fff', borderRadius: '50%', alignSelf: 'flex-start', border: '1px solid rgba(255,255,255,0.1)' }} />
                  <div style={{ padding: '14px 18px', borderRadius: '12px', background: 'var(--color-bg-sec)', border: '1px solid var(--color-border)' }}>
                    <div className="typing-indicator-v2" style={{ display: 'flex', gap: '4px' }}>
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-text-muted)', display: 'inline-block', animation: 'typingBounce 1.4s infinite ease-in-out' }}></span>
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-text-muted)', display: 'inline-block', animation: 'typingBounce 1.4s infinite ease-in-out', animationDelay: '0.2s' }}></span>
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-text-muted)', display: 'inline-block', animation: 'typingBounce 1.4s infinite ease-in-out', animationDelay: '0.4s' }}></span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input Zone */}
            <div style={{ padding: '20px 24px', borderTop: '1px solid var(--color-border)', background: 'rgba(0,0,0,0.1)' }}>
              <form onSubmit={handleFormSubmit} style={{ display: 'flex', gap: '12px' }}>
                <input
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  placeholder="Ask about Moso Bamboo, pricing, installation times..."
                  disabled={isLoading}
                  style={{ flexGrow: 1, padding: '14px 16px', background: 'rgba(0,0,0,0.3)', border: '1px solid var(--color-border)', borderRadius: '6px', color: '#fff', outline: 'none', fontSize: '0.92rem' }}
                />
                <button 
                  type="submit" 
                  disabled={isLoading || !inputVal.trim()}
                  style={{ width: '48px', height: '48px', borderRadius: '6px', background: 'var(--accent-eco)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', cursor: 'pointer', border: 'none', transition: 'var(--transition-fast)' }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                </button>
              </form>
              <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', margin: '8px 0 0 0', textAlign: 'left' }}>
                SWDF SA Assistant provides budget estimates. All projects require site evaluations and custom engineering certifications.
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
