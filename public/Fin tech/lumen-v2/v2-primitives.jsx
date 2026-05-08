// Lumen v2 — tightened type system + native iOS conventions
const L2 = {
  ...window.L,
  // Type — 17pt body register matches iOS body
  size: {
    largeTitle: 34,    // navigation large title
    title1:     28,
    title2:     22,
    title3:     20,
    headline:   17,    // semibold body
    body:       17,    // regular body — the iOS workhorse
    callout:    16,
    subhead:    15,
    footnote:   13,
    caption1:   12,
    caption2:   11,
  },
  // Spacing scale
  hit: 44,             // HIG minimum hit target
  // Solid surfaces (glass moved to chrome only)
  card:      '#181b27',
  cardHi:    '#1f2330',
  cardLo:    '#13161f',
};
window.L2 = L2;

// SF-Symbols stand-ins — single stroke ramp (1.5 body, 2.0 active)
function Sym({ name, size = 22, weight = 'regular', color = 'currentColor' }) {
  const sw = weight === 'bold' ? 2.2 : weight === 'semibold' ? 1.9 : 1.6;
  const paths = {
    house:        <path d="M3 11l9-7 9 7v9a2 2 0 01-2 2h-4v-7h-6v7H5a2 2 0 01-2-2v-9z"/>,
    'house.fill': <path d="M3 11l9-7 9 7v9a2 2 0 01-2 2h-4v-7h-6v7H5a2 2 0 01-2-2v-9z" fill={color} stroke="none"/>,
    creditcard:   <g><rect x="3" y="6" width="18" height="14" rx="3"/><path d="M3 11h18M7 16h4"/></g>,
    'chart.line': <path d="M3 17l6-6 4 4 8-9"/>,
    person:       <g><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 1116 0"/></g>,
    'magnifyingglass': <g><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.5-4.5"/></g>,
    'arrow.up':   <path d="M12 19V5M5 12l7-7 7 7"/>,
    'arrow.down': <path d="M12 5v14M5 12l7 7 7-7"/>,
    plus:         <path d="M12 5v14M5 12h14"/>,
    chevron:      <path d="M9 6l6 6-6 6"/>,
    xmark:        <path d="M6 6l12 12M18 6L6 18"/>,
    sparkle:      <path d="M12 3l1.8 5.5L19 10l-5.2 1.5L12 17l-1.8-5.5L5 10l5.2-1.5L12 3z"/>,
    bell:         <path d="M18 8a6 6 0 10-12 0c0 7-3 9-3 9h18s-3-2-3-9M14 21a2 2 0 01-4 0"/>,
    lock:         <g><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 018 0v4"/></g>,
    'arrow.right': <path d="M5 12h14M13 6l6 6-6 6"/>,
    'list.bullet': <g><circle cx="5" cy="6" r="1.4" fill={color} stroke="none"/><circle cx="5" cy="12" r="1.4" fill={color} stroke="none"/><circle cx="5" cy="18" r="1.4" fill={color} stroke="none"/><path d="M9 6h12M9 12h12M9 18h12"/></g>,
    sliders:      <path d="M4 6h10M18 6h2M4 12h2M10 12h10M4 18h10M18 18h2M16 4v4M8 10v4M16 16v4"/>,
    'face.id':    <g><path d="M5 9V7a2 2 0 012-2h2M19 9V7a2 2 0 00-2-2h-2M5 15v2a2 2 0 002 2h2M19 15v2a2 2 0 01-2 2h-2"/><path d="M9 10v2M15 10v2M10 15c.5.6 1.2 1 2 1s1.5-.4 2-1"/></g>,
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
      {paths[name]}
    </svg>
  );
}
window.Sym = Sym;

// ──────────────────────────────────────────────────────────────
// Native iOS-style 4-tab bar — no center button, all labeled
// ──────────────────────────────────────────────────────────────
function TabBar2({ active = 'home' }) {
  const tabs = [
    { id: 'home',   label: 'Home',    icon: 'house',      active: 'house.fill' },
    { id: 'money',  label: 'Money',   icon: 'creditcard', active: 'creditcard' },
    { id: 'mkts',   label: 'Markets', icon: 'chart.line', active: 'chart.line' },
    { id: 'you',    label: 'You',     icon: 'person',     active: 'person' },
  ];
  return (
    <div style={{
      position: 'absolute', bottom: 0, left: 0, right: 0,
      paddingBottom: 30, paddingTop: 8, zIndex: 100,
      background: 'rgba(10,11,16,0.72)',
      backdropFilter: 'blur(28px) saturate(180%)',
      WebkitBackdropFilter: 'blur(28px) saturate(180%)',
      borderTop: '0.5px solid rgba(255,255,255,0.10)',
      display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
    }}>
      {tabs.map(t => {
        const on = t.id === active;
        return (
          <button key={t.id} aria-label={t.label} style={{
            background: 'transparent', border: 'none', padding: '6px 0',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3,
            color: on ? L2.cyan : 'rgba(240,241,246,0.50)', cursor: 'pointer',
            minHeight: 44,
          }}>
            <Sym name={on ? t.active : t.icon} size={26} weight={on ? 'semibold' : 'regular'} color={on ? L2.cyan : 'rgba(240,241,246,0.55)'}/>
            <span style={{ fontSize: 10, fontWeight: on ? 600 : 500, letterSpacing: 0.1, fontFamily: L2.font }}>{t.label}</span>
          </button>
        );
      })}
    </div>
  );
}
window.TabBar2 = TabBar2;

// Solid card (no glass blur on content)
function Card({ children, style = {}, padding = 16, radius = 16 }) {
  return (
    <div style={{
      background: L2.card,
      borderRadius: radius,
      padding,
      border: '0.5px solid rgba(255,255,255,0.06)',
      ...style,
    }}>{children}</div>
  );
}
window.Card = Card;

// Section header (HIG: 13pt semibold uppercase, more inset)
function GroupedHeader({ children, action }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
      padding: '0 4px 8px', marginTop: 18,
    }}>
      <span style={{
        fontSize: 13, fontWeight: 600, letterSpacing: -0.08,
        color: 'rgba(240,241,246,0.55)', fontFamily: L2.font,
        textTransform: 'uppercase',
      }}>{children}</span>
      {action && <a style={{ fontSize: 15, color: L2.cyan, fontWeight: 400 }}>{action}</a>}
    </div>
  );
}
window.GroupedHeader = GroupedHeader;
