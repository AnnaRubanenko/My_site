// Shared primitives for Lumen screens
const { useState, useEffect, useRef } = React;

// ──────────────────────────────────────────────────────────────
// Holographic ring — animated AI presence indicator
// ──────────────────────────────────────────────────────────────
function HoloOrb({ size = 36, intensity = 1 }) {
  return (
    <div style={{
      width: size, height: size, position: 'relative',
      borderRadius: '50%',
      background: 'conic-gradient(from 0deg, oklch(0.84 0.13 200), oklch(0.72 0.18 340), oklch(0.74 0.16 270), oklch(0.84 0.13 200))',
      boxShadow: `0 0 ${12 * intensity}px oklch(0.74 0.16 270 / 0.55), inset 0 0 ${size / 3}px rgba(0,0,0,0.4)`,
      animation: 'lumenSpin 8s linear infinite'
    }}>
      <div style={{
        position: 'absolute', inset: 3, borderRadius: '50%',
        background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4), rgba(15,18,28,0.95) 60%)',
        backdropFilter: 'blur(6px)'
      }} />
    </div>);

}

// ──────────────────────────────────────────────────────────────
// Glass card — base surface
// ──────────────────────────────────────────────────────────────
function Glass({ children, style = {}, padding = 16, radius = 20, glow = false, onClick }) {
  return (
    <div onClick={onClick} style={{
      position: 'relative',
      borderRadius: radius,
      padding,
      background: 'linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.015))',
      border: `1px solid ${L.hairline}`,
      boxShadow: glow ? L.glow : '0 1px 0 rgba(255,255,255,0.04) inset, 0 4px 16px rgba(0,0,0,0.3)',
      backdropFilter: 'blur(20px) saturate(140%)',
      WebkitBackdropFilter: 'blur(20px) saturate(140%)',
      color: L.text,
      cursor: onClick ? 'pointer' : undefined,
      ...style
    }}>{children}</div>);

}

// ──────────────────────────────────────────────────────────────
// Status bar tuned for dark — pure white glyphs
// ──────────────────────────────────────────────────────────────
function StatusBar({ time = '9:41' }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '18px 32px 10px', position: 'relative', zIndex: 20,
      color: '#fff', fontFamily: L.font
    }}>
      <span style={{ fontSize: 16, fontWeight: 600, letterSpacing: -0.2 }}>{time}</span>
      <div style={{ width: 100 }} />
      <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
        <svg width="17" height="11" viewBox="0 0 17 11"><rect x="0" y="7" width="3" height="4" rx="0.6" fill="#fff" /><rect x="4.5" y="5" width="3" height="6" rx="0.6" fill="#fff" /><rect x="9" y="2.5" width="3" height="8.5" rx="0.6" fill="#fff" /><rect x="13.5" y="0" width="3" height="11" rx="0.6" fill="#fff" /></svg>
        <svg width="24" height="11" viewBox="0 0 24 11"><rect x="0.5" y="0.5" width="20" height="10" rx="3" fill="none" stroke="#fff" strokeOpacity="0.4" /><rect x="2" y="2" width="17" height="7" rx="1.6" fill="#fff" /><path d="M22 4v3c0.7-0.2 1.2-0.9 1.2-1.5S22.7 4.2 22 4z" fill="#fff" fillOpacity="0.4" /></svg>
      </div>
    </div>);

}

// ──────────────────────────────────────────────────────────────
// Phone shell — Lumen-tuned device frame, dark, with mesh bg
// ──────────────────────────────────────────────────────────────
// Larger inset top so dynamic island never clips content
function Phone({ children, width = 390, height = 844, label, screenLabel, bg }) {
  return (
    <div data-screen-label={screenLabel} style={{
      width, height, borderRadius: 52, position: 'relative',
      background: '#000',
      boxShadow: '0 0 0 1.5px #1a1c25, 0 0 0 8px #0c0d12, 0 30px 80px rgba(0,0,0,0.6), 0 60px 120px rgba(80,60,200,0.12)',
      overflow: 'hidden'
    }}>
      {/* dynamic island */}
      <div style={{
        position: 'absolute', top: 11, left: '50%', transform: 'translateX(-50%)',
        width: 122, height: 35, borderRadius: 22, background: '#000', zIndex: 200
      }} />
      {/* mesh bg */}
      <div style={{
        position: 'absolute', inset: 0,
        background: bg || meshBg
      }} />
      {/* content area */}
      <div style={{
        position: 'absolute', inset: 0, overflow: 'hidden',
        display: 'flex', flexDirection: 'column',
        fontFamily: L.font, color: L.text
      }}>
        <StatusBar />
        <div style={{ flex: 1, overflow: 'hidden', position: 'relative' }}>
          {children}
        </div>
      </div>
      {/* home indicator */}
      <div style={{
        position: 'absolute', bottom: 8, left: '50%', transform: 'translateX(-50%)',
        width: 134, height: 5, borderRadius: 100, background: 'rgba(255,255,255,0.55)', zIndex: 200
      }} />
    </div>);

}

// ──────────────────────────────────────────────────────────────
// Bottom tab bar — glass, with holo indicator
// ──────────────────────────────────────────────────────────────
function TabBar({ active = 'home' }) {
  const tabs = [
  { id: 'home', label: 'Home', icon: <path d="M3 11l9-7 9 7v9a2 2 0 01-2 2h-4v-7h-6v7H5a2 2 0 01-2-2v-9z" /> },
  { id: 'wallet', label: 'Wallet', icon: <path d="M3 7h15a3 3 0 013 3v8a3 3 0 01-3 3H6a3 3 0 01-3-3V7zm0 0V6a2 2 0 012-2h11M17 14h2" /> },
  { id: 'ai', label: '', icon: null }, // center button
  { id: 'invest', label: 'Invest', icon: <path d="M3 17l6-6 4 4 8-9M21 6l-2-1M21 6v3" /> },
  { id: 'me', label: 'Profile', icon: <path d="M12 12a4 4 0 100-8 4 4 0 000 8zM4 21a8 8 0 1116 0" /> }];

  return (
    <div style={{
      position: 'absolute', bottom: 22, left: 14, right: 14,
      height: 70, borderRadius: 28,
      background: 'rgba(15,18,28,0.78)',
      border: `1px solid ${L.hairline2}`,
      backdropFilter: 'blur(28px) saturate(160%)',
      WebkitBackdropFilter: 'blur(28px) saturate(160%)',
      boxShadow: '0 -1px 0 rgba(255,255,255,0.06) inset, 0 18px 40px rgba(0,0,0,0.5)',
      display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)',
      alignItems: 'center', padding: '0 6px', zIndex: 100
    }}>
      {tabs.map((t) => {
        if (t.id === 'ai') {
          return (
            <button key={t.id} aria-label="Ask Lumen" style={{
              background: 'transparent', border: 'none', padding: 0, cursor: 'pointer',
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3
            }}>
              <div style={{
                width: 44, height: 44, borderRadius: '50%',
                background: L.holo, position: 'relative',
                boxShadow: '0 0 18px oklch(0.74 0.16 270 / 0.55), 0 0 0 1px rgba(255,255,255,0.2) inset',
                display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l3 3M16 16l3 3M5 19l3-3M16 8l3-3" stroke="#0a0b10" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="12" cy="12" r="3" fill="#0a0b10" />
                </svg>
              </div>
              <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: 0.2, color: L.text }}></span>
            </button>);

        }
        const isActive = t.id === active;
        return (
          <button key={t.id} style={{
            background: 'transparent', border: 'none', padding: 0,
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
            color: isActive ? L.text : L.textMute, cursor: 'pointer'
          }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              {t.icon}
            </svg>
            <span style={{ fontSize: 10, fontWeight: 500, letterSpacing: 0.2 }}>{t.label}</span>
          </button>);

      })}
    </div>);

}

// ──────────────────────────────────────────────────────────────
// AI Chip — small "AI suggested" pill
// ──────────────────────────────────────────────────────────────
function AIChip({ children, style = {} }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 5,
      padding: '3px 8px 3px 6px', borderRadius: 100,
      background: 'linear-gradient(135deg, oklch(0.84 0.13 200 / 0.18), oklch(0.72 0.18 340 / 0.18))',
      border: '1px solid rgba(255,255,255,0.10)',
      fontFamily: L.font, fontWeight: 500, letterSpacing: 0.4,
      textTransform: 'uppercase', color: L.text, ...style, fontSize: "9px"
    }}>
      <svg width="9" height="9" viewBox="0 0 12 12"><path d="M6 0l1.5 4.5L12 6l-4.5 1.5L6 12 4.5 7.5 0 6l4.5-1.5L6 0z" fill="url(#sparkle-grad)" />
        <defs><linearGradient id="sparkle-grad" x1="0" y1="0" x2="1" y2="1"><stop stopColor="oklch(0.84 0.13 200)" /><stop offset="1" stopColor="oklch(0.72 0.18 340)" /></linearGradient></defs>
      </svg>
      {children}
    </span>);

}

// ──────────────────────────────────────────────────────────────
// Section header
// ──────────────────────────────────────────────────────────────
function SectionLabel({ children, action }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 4px', marginBottom: 10
    }}>
      <span style={{
        fontSize: 11, fontWeight: 500, letterSpacing: 1.2, textTransform: 'uppercase',
        color: L.textDim, fontFamily: L.mono
      }}>{children}</span>
      {action && <span style={{ fontSize: 12, color: L.textDim, fontFamily: L.font }}>{action}</span>}
    </div>);

}

// ──────────────────────────────────────────────────────────────
// Number ticker — large balance display
// ──────────────────────────────────────────────────────────────
function Money({ amount, currency = '$', size = 48, weight = 600, dim = false, sub = 0 }) {
  const [whole, frac] = String(amount.toFixed(2)).split('.');
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'baseline',
      fontFamily: L.font, color: dim ? L.textDim : L.text,
      fontWeight: weight, letterSpacing: -1.5
    }}>
      <span style={{ fontSize: size * 0.55, marginRight: 2, fontWeight: 400, color: L.textDim }}>{currency}</span>
      <span style={{ fontSize: size, fontFeatureSettings: '"tnum"' }}>{Number(whole).toLocaleString()}</span>
      <span style={{ fontSize: size * 0.5, color: L.textDim, fontWeight: 400 }}>.{frac}</span>
    </div>);

}

// keyframes injected once
if (typeof document !== 'undefined' && !document.getElementById('lumen-anim')) {
  const s = document.createElement('style');
  s.id = 'lumen-anim';
  s.textContent = `
    @keyframes lumenSpin { to { transform: rotate(360deg); } }
    @keyframes lumenPulse { 0%,100% { opacity: 0.6; transform: scale(1); } 50% { opacity: 1; transform: scale(1.02); } }
    @keyframes lumenShimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
    .lumen-shimmer { background-image: linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent); background-size: 200% 100%; animation: lumenShimmer 3s linear infinite; }
    .lumen-pulse { animation: lumenPulse 3s ease-in-out infinite; }
    @media (max-width: 639px) {
      *, *::before, *::after {
        animation: none !important;
        transition: none !important;
      }
    }
  `;
  document.head.appendChild(s);
}

Object.assign(window, { HoloOrb, Glass, StatusBar, Phone, TabBar, AIChip, SectionLabel, Money });