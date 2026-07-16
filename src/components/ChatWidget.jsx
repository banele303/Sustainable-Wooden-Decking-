import React, { useState, useRef, useEffect } from 'react';

const systemPrompt = `You are SWDF SA AI Assistant, an expert project assistant for Sustainable Wooden Decking and Flooring SA (Pty) Ltd located at 36 Sarie Street, Ridgeway, Johannesburg 2091. You specialize in:
- Moso Bamboo Decking (MOSO® Bamboo X-treme® / N-durance®) from R1,850/m²
- Moso Bamboo Flooring (high-density indoor boards) from R1,200/m²
- Hardwood Decking (Garapa, Balau) from R1,800/m²
- Engineered Wood Flooring (French Oak, Walnut veneers) from R1,350/m²
- Pergolas & Bamboo Cladding – custom quotes
- Restoration & Maintenance from R220/m²
- Sustainability, SANS compliance, and eco-friendly products
Contact: swdandflooringsa@gmail.com | 36 Sarie Street, Ridgeway, Johannesburg 2091
Keep answers concise, helpful, and use bullet points where needed. Never mention you are an AI.`;

const buildFallbackResponse = (userMessages) => {
  const lastMsg = userMessages[userMessages.length - 1]?.content?.toLowerCase() || '';
  if (lastMsg.match(/bamboo|moso|x-treme|n-durance/)) {
    return `**MOSO® Bamboo — Our Flagship Product:**\n\n• **Carbon-negative:** Bamboo absorbs more CO₂ than it produces.\n• **Class 1 Durability:** Harder than most tropical hardwoods.\n• **Decking:** From **R1,850/m²** installed (MOSO® X-treme® or N-durance®).\n• **Flooring:** From **R1,200/m²** — scratch-resistant, dimensionally stable.\n• **25-year warranty** on MOSO® products.`;
  } else if (lastMsg.match(/hardwood|timber|wood|garapa|balau/)) {
    return `**Premium Hardwood Decking Options:**\n\n• **Garapa:** Golden-honey hardwood, naturally durable. From R1,800/m².\n• **Balau:** Rich reddish-brown, classic look. Requires annual oiling. From R1,900/m².\n• All boards installed with hidden stainless steel fasteners for a seamless finish.`;
  } else if (lastMsg.match(/floor|flooring|indoor|interior/)) {
    return `**Engineered Wood Flooring:**\n\n• French Oak & Walnut veneer options.\n• Stable multi-layer core — no warping or cupping.\n• From **R1,350/m²** supply and install.\n• Ideal for living rooms, bedrooms, and commercial interiors.`;
  } else if (lastMsg.match(/pergola|cladding|shade|screen/)) {
    return `**Pergolas & Bamboo Cladding:**\n\n• Custom architectural pergolas using structural timber.\n• Exterior bamboo wall cladding for privacy and aesthetics.\n• Matched to your existing decking for a cohesive look.\n• **Custom quotes** — contact us for dimensions.`;
  } else if (lastMsg.match(/restore|restoration|maintenance|repair|sand|oil|clean/)) {
    return `**Restoration & Maintenance Services:**\n\n• Professional deck sanding, cleaning & UV oil application.\n• Subframe structural repairs and board replacement.\n• From **R220/m²** — restore your deck to showroom condition.`;
  } else if (lastMsg.match(/price|cost|rate|estimate|how much/)) {
    return `**Quick Price Guide (ZAR, installed):**\n\n• Moso Bamboo Decking: From R1,850/m²\n• Moso Bamboo Flooring: From R1,200/m²\n• Hardwood Decking: From R1,800/m²\n• Engineered Wood Flooring: From R1,350/m²\n• Restoration: From R220/m²\n\nUse the **Cost Estimator** on our site for a detailed quote!`;
  } else if (lastMsg.match(/address|location|office|johannesburg|ridgeway|where/)) {
    return `📍 **Our Office:**\n36 Sarie Street, Ridgeway, Johannesburg 2091\n\n✉️ **Email:** swdandflooringsa@gmail.com\n\nWe serve the greater Johannesburg and Gauteng area for supply and installation.`;
  } else if (lastMsg.match(/hello|hi|hey|good morning|good day/)) {
    return `Welcome to **SWDF SA AI Assistant** 🌿\n\nI'm here to help you with:\n\n• 🎋 Moso Bamboo Decking & Flooring\n• 🪵 Hardwood & Engineered Wood Flooring\n• 🏡 Pergolas & Bamboo Cladding\n• 🔧 Restoration & Maintenance\n• 📍 Located in Ridgeway, Johannesburg\n\nHow can I assist you today?`;
  }
  return `Thank you for reaching out to **SWDF SA**! We specialise in eco-friendly Moso Bamboo and premium hardwood decking & flooring in Johannesburg. What would you like to know more about?`;
};

const renderText = (text) =>
  text.split('\n').map((line, i) => (
    <p key={i} dangerouslySetInnerHTML={{ __html: line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') || '&nbsp;' }} style={{ margin: '0 0 4px 0', lineHeight: 1.5 }} />
  ));

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [unread, setUnread] = useState(1);
  const bottomRef = useRef(null);
  const [inputVal, setInputVal] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 'w-init',
      role: 'assistant',
      content: "Hi! I'm the SWDF SA AI Assistant 🌿 Ask me anything about Moso Bamboo decking, hardwood flooring, pergolas, pricing, or our Johannesburg office!"
    }
  ]);

  useEffect(() => {
    if (open) {
      setUnread(0);
      setTimeout(() => bottomRef.current?.scrollIntoView({ behavior: 'smooth' }), 50);
    }
  }, [open, messages]);

  const sendMessage = async (text) => {
    if (!text.trim()) return;
    const userMsg = { id: Math.random().toString(), role: 'user', content: text };
    setMessages(prev => [...prev, userMsg]);
    setIsLoading(true);
    const conversationHistory = [...messages, userMsg];
    const reply = buildFallbackResponse(conversationHistory);

    const assistantMsgId = Math.random().toString();
    setMessages(prev => [...prev, { id: assistantMsgId, role: 'assistant', content: '' }]);
    const tokens = reply.split(/(?=\s+)/);
    let currentText = '';
    for (let i = 0; i < tokens.length; i++) {
      currentText += tokens[i];
      setMessages(prev => prev.map(m => m.id === assistantMsgId ? { ...m, content: currentText } : m));
      await new Promise(r => setTimeout(r, 12));
    }
    setIsLoading(false);
    if (!open) setUnread(n => n + 1);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!inputVal.trim() || isLoading) return;
    const text = inputVal;
    setInputVal('');
    sendMessage(text);
  };

  return (
    <>
      {!open && (
        <button
          className="widget-bubble"
          onClick={() => setOpen(true)}
          aria-label="Open SWDF SA chat assistant"
          style={{
            padding: 0, overflow: 'hidden', background: '#fff',
            border: '2px solid var(--accent-eco)', boxShadow: '0 8px 32px rgba(60,168,70,0.35)'
          }}
        >
          {/* Company logo */}
          <img
            src="/images/logo_round.jpg"
            alt="SWDF SA"
            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
          />
          {unread > 0 && (
            <span style={{ position: 'absolute', top: '-5px', right: '-5px', background: 'var(--accent-secondary)', color: '#111', width: '22px', height: '22px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 'bold' }}>
              {unread}
            </span>
          )}
        </button>
      )}

      {open && (
        <div className="widget-panel">
          <div className="widget-header" style={{ background: 'linear-gradient(135deg, #1a2e1a 0%, #0d1f0d 100%)', borderBottom: '1px solid rgba(60,168,70,0.3)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ position: 'relative' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', overflow: 'hidden', border: '2px solid rgba(60,168,70,0.5)', background: '#fff' }}>
                  <img src="/images/logo_round.jpg" alt="SWDF SA" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <span style={{ position: 'absolute', bottom: 0, right: 0, width: '10px', height: '10px', background: '#22c55e', borderRadius: '50%', border: '2px solid #1a2e1a' }}></span>
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#fff' }}>
                  SWDF SA Assistant <span style={{ fontSize: '0.6rem', background: 'var(--accent-eco)', color: '#fff', padding: '2px 6px', borderRadius: '4px', marginLeft: '4px' }}>AI</span>
                </div>
                <div style={{ fontSize: '0.72rem', color: '#86efac' }}>{isLoading ? 'Thinking...' : '● Online · Ridgeway, Johannesburg'}</div>
              </div>
            </div>
            <button onClick={() => setOpen(false)} style={{ cursor: 'pointer', background: 'none', border: 'none', color: 'rgba(255,255,255,0.6)', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color='#fff'} onMouseLeave={e => e.currentTarget.style.color='rgba(255,255,255,0.6)'}>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
          </div>

          <div className="widget-messages">
            {messages.map((m) => (
              <div key={m.id} className={`widget-msg-row ${m.role}`}>
                <div className={`widget-bubble-msg ${m.role}`}>{renderText(m.content)}</div>
              </div>
            ))}
            {isLoading && (
              <div className="widget-msg-row assistant">
                <div className="widget-bubble-msg assistant" style={{ padding: '12px 20px', display: 'flex', gap: '5px', alignItems: 'center' }}>
                  {[0, 0.2, 0.4].map((d, i) => (
                    <div key={i} style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'var(--accent-eco)', animation: `pulse 1.2s infinite ${d}s` }} />
                  ))}
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          <form className="widget-input-row" onSubmit={handleFormSubmit}>
            <input
              type="text"
              className="widget-input"
              placeholder="Ask about bamboo decking, pricing..."
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              disabled={isLoading}
            />
            <button type="submit" className="widget-send" disabled={isLoading || !inputVal.trim()} style={{ background: 'var(--accent-eco)' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
            </button>
          </form>
        </div>
      )}
    </>
  );
}
