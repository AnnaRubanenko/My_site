// Lumen — main app. Simple canvas layout (no DesignCanvas dependency).
function AutoScrollScreens() {
  React.useEffect(() => {
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return undefined;

    let frame = 0;
    const scrollers = Array.from(document.querySelectorAll('[data-screen-label]'))
      .map(phone => Array.from(phone.querySelectorAll('div')).find(node => {
        const style = window.getComputedStyle(node);
        return node.scrollHeight > node.clientHeight + 24 && /(auto|scroll)/.test(style.overflowY);
      }))
      .filter(Boolean);

    const start = performance.now();
    const duration = 9600;
    const hold = 1400;
    const ease = t => 0.5 - Math.cos(Math.PI * t) / 2;

    const tick = now => {
      scrollers.forEach((node, index) => {
        const max = node.scrollHeight - node.clientHeight;
        if (max <= 0) return;

        const local = (now - start + index * 850) % duration;
        const travel = (duration - hold * 2) / 2;
        let top = 0;

        if (local < hold) {
          top = 0;
        } else if (local < hold + travel) {
          top = max * ease((local - hold) / travel);
        } else if (local < hold + travel + hold) {
          top = max;
        } else {
          top = max * (1 - ease((local - hold - travel - hold) / travel));
        }

        node.scrollTop = top;
      });
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  return null;
}

function App() {
  const isCardPreview = new URLSearchParams(window.location.search).get('preview') === 'card';
  const screens = [
    { id: 'dashboard', label: '01 · Home',         comp: <ScreenDashboard/> },
    { id: 'wallet',    label: '02 · Wallet',       comp: <ScreenWallet/> },
    { id: 'analytics', label: '03 · Insights',     comp: <ScreenAnalytics/> },
    { id: 'invest',    label: '04 · Portfolio',    comp: <ScreenInvestments/> },
    { id: 'ai',        label: '05 · AI Assistant', comp: <ScreenAssistant/> },
    { id: 'pay',       label: '06 · Send',         comp: <ScreenPayments/> },
    { id: 'me',        label: '07 · Profile',      comp: <ScreenSettings/> },
  ];
  const visibleScreens = isCardPreview ? screens.slice(0, 2) : screens;

  return (
    <div style={{
      minHeight: '100vh',
      padding: isCardPreview ? '96px 104px 0' : '64px 56px 80px',
      background: 'radial-gradient(120% 80% at 0% 0%, #1b1830 0%, #0a0b10 60%), #0a0b10',
      fontFamily: L.font, color: L.text,
      overflow: isCardPreview ? 'hidden' : 'visible',
    }}>
      <AutoScrollScreens />
      {/* Title */}
      <div style={{ marginBottom: isCardPreview ? 108 : 56, maxWidth: isCardPreview ? 1080 : 920 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: isCardPreview ? 28 : 16 }}>
          <div style={{
            width: isCardPreview ? 88 : 48,
            height: isCardPreview ? 88 : 48,
            borderRadius: '50%',
            background: 'conic-gradient(from 0deg, oklch(0.84 0.13 200), oklch(0.72 0.18 340), oklch(0.74 0.16 270), oklch(0.84 0.13 200))',
            boxShadow: '0 0 42px oklch(0.74 0.16 270 / 0.6)', position: 'relative',
          }}>
            <div style={{ position: 'absolute', inset: isCardPreview ? 9 : 4, borderRadius: '50%', background: '#0a0b10' }}/>
          </div>
          <div>
            <div style={{
              fontSize: isCardPreview ? 21 : 11,
              color: L.textDim,
              fontFamily: L.mono,
              letterSpacing: isCardPreview ? 7 : 2,
              textTransform: 'uppercase',
            }}>Concept · 2026</div>
            <div style={{ fontSize: isCardPreview ? 66 : 36, fontWeight: 500, letterSpacing: 0, marginTop: isCardPreview ? 16 : 4 }}>
              Lumen <span style={{ fontFamily: L.serif, fontStyle: 'italic', color: L.textDim, fontWeight: 400 }}>— an AI-native finance OS</span>
            </div>
          </div>
        </div>
      </div>

      {/* Grid of phones */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: isCardPreview ? 'repeat(2, minmax(420px, 1fr))' : 'repeat(auto-fill, minmax(420px, 1fr))',
        gap: isCardPreview ? '0 176px' : '64px 32px',
        justifyItems: 'center',
      }}>
        {visibleScreens.map(s => (
          <div key={s.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{
              fontSize: isCardPreview ? 23 : 11,
              fontFamily: L.mono,
              letterSpacing: isCardPreview ? 8 : 2,
              textTransform: 'uppercase',
              color: L.textDim,
              marginBottom: isCardPreview ? 28 : 18,
            }}>{s.label}</div>
            <Phone screenLabel={s.label}>{s.comp}</Phone>
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: 64, fontSize: 11, fontFamily: L.mono, color: L.textMute, letterSpacing: 2 }}>
        LUMEN · END OF FLOW
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
