// Payments / Transfers — Lumen
function ScreenPayments() {
  return (
    <div style={{ height: '100%', overflow: 'hidden', position: 'relative' }}>
      <div style={{ height: '100%', overflow: 'auto', padding: '8px 18px 130px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
          <div>
            <div style={{ fontSize: 11, color: L.textDim, fontFamily: L.mono, letterSpacing: 1, textTransform: 'uppercase' }}>Send</div>
            <div style={{ fontSize: 26, fontWeight: 500, letterSpacing: -0.6, marginTop: 2 }}>Pay anyone</div>
          </div>
          <Glass padding={0} radius={100} style={{ width: 38, height: 38, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round"><rect x="4" y="4" width="6" height="6" rx="1"/><rect x="14" y="4" width="6" height="6" rx="1"/><rect x="4" y="14" width="6" height="6" rx="1"/><path d="M14 14h2v2M20 14v2M14 20h6"/></svg>
          </Glass>
        </div>

        {/* Amount input — futuristic */}
        <Glass padding={26} radius={28} glow style={{ marginBottom: 18, textAlign: 'center', background: 'linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01))' }}>
          <div style={{ fontSize: 11, fontFamily: L.mono, color: L.textDim, letterSpacing: 1, textTransform: 'uppercase' }}>You're sending</div>
          <div style={{ marginTop: 14, display: 'flex', alignItems: 'baseline', justifyContent: 'center' }}>
            <span style={{ fontSize: 28, fontWeight: 400, color: L.textDim, marginRight: 4 }}>$</span>
            <span style={{ fontSize: 64, fontWeight: 500, letterSpacing: -2.5, lineHeight: 1, fontFeatureSettings: '"tnum"' }}>
              420
            </span>
            <span style={{ fontSize: 36, fontWeight: 400, color: L.textDim }}>.00</span>
          </div>
          <div style={{ marginTop: 10, fontSize: 12, color: L.textDim }}>≈ ¥62,710 · live FX</div>

          {/* From / to */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 22 }}>
            <div style={{ flex: 1, padding: '10px 12px', borderRadius: 14, background: 'rgba(255,255,255,0.04)', border: `1px solid ${L.hairline}`, textAlign: 'left' }}>
              <div style={{ fontSize: 9, color: L.textDim, fontFamily: L.mono, letterSpacing: 1, textTransform: 'uppercase' }}>From</div>
              <div style={{ fontSize: 13, fontWeight: 500, marginTop: 2 }}>Everyday · 4421</div>
            </div>
            <div style={{
              width: 28, height: 28, borderRadius: '50%',
              background: L.holo, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              boxShadow: '0 0 12px oklch(0.74 0.16 270 / 0.5)',
            }}>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#0a0b10" strokeWidth="2.6" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </div>
            <div style={{ flex: 1, padding: '10px 12px', borderRadius: 14, background: L.holoSoft, border: `1px solid ${L.hairline2}`, textAlign: 'left' }}>
              <div style={{ fontSize: 9, color: L.textDim, fontFamily: L.mono, letterSpacing: 1, textTransform: 'uppercase' }}>To</div>
              <div style={{ fontSize: 13, fontWeight: 500, marginTop: 2 }}>Mika Tanaka 🇯🇵</div>
            </div>
          </div>
        </Glass>

        {/* AI route advisor */}
        <Glass padding={14} radius={20} style={{ marginBottom: 18, background: 'linear-gradient(135deg, oklch(0.84 0.13 200 / 0.08), oklch(0.72 0.18 340 / 0.06))' }}>
          <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
            <HoloOrb size={26}/>
            <div style={{ flex: 1 }}>
              <AIChip>Route picked</AIChip>
              <div style={{ fontSize: 13, marginTop: 6, lineHeight: 1.4 }}>
                <span style={{ fontFamily: L.mono, color: L.cyan }}>Wise rail</span> — arrives in <span style={{ color: L.text, fontWeight: 600 }}>11 min</span>, fees <span style={{ fontFamily: L.mono, color: L.pos }}>$2.40</span> (saves $14.20 vs SWIFT).
              </div>
            </div>
          </div>
        </Glass>

        {/* Recents grid */}
        <SectionLabel action="Search →">Recent recipients</SectionLabel>
        <div style={{ display: 'flex', gap: 10, overflowX: 'auto', marginRight: -18, paddingRight: 18, marginBottom: 22, scrollbarWidth: 'none' }}>
          {[
            { n: 'Jordan', sub: 'Roommate', col: 'oklch(0.55 0.16 25)', i: 'JR' },
            { n: 'Mika',   sub: 'Tokyo · ¥', col: 'oklch(0.55 0.14 290)', i: 'MT' },
            { n: 'Sam',    sub: '@samhq',   col: 'oklch(0.55 0.16 200)', i: 'SK' },
            { n: 'Office', sub: 'Rent',     col: 'oklch(0.55 0.10 75)', i: 'OF' },
            { n: 'Mom',    sub: 'Family',   col: 'oklch(0.55 0.16 340)', i: 'MA' },
          ].map(p => (
            <div key={p.n} style={{
              flex: '0 0 76px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
            }}>
              <div style={{
                width: 60, height: 60, borderRadius: '50%',
                background: `linear-gradient(135deg, ${p.col}, oklch(0.30 0.06 280))`,
                border: '1px solid rgba(255,255,255,0.12)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 16, fontWeight: 600, color: '#fff',
              }}>{p.i}</div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 12, fontWeight: 500 }}>{p.n}</div>
                <div style={{ fontSize: 10, color: L.textDim, fontFamily: L.mono }}>{p.sub}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Scheduled / automated */}
        <SectionLabel action="Manage →">Automations</SectionLabel>
        <Glass padding={0} radius={20} style={{ marginBottom: 22 }}>
          {[
            { l: 'Rent · 1st of month',    s: 'Bank transfer', a: 2400, ai: false },
            { l: 'Reserve sweep',          s: 'When checking > $14k', a: null, ai: true },
            { l: 'Dad · birthday',         s: 'Mar 18 · Chase', a: 200, ai: false },
          ].map((r, i, arr) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: 12, padding: '14px 16px',
              borderBottom: i < arr.length - 1 ? `1px solid ${L.hairline}` : 'none',
            }}>
              <div style={{
                width: 32, height: 32, borderRadius: 10,
                background: r.ai ? L.holoSoft : 'rgba(255,255,255,0.06)',
                border: `1px solid ${r.ai ? 'rgba(255,255,255,0.18)' : L.hairline}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={r.ai ? L.cyan : L.text} strokeWidth="1.6" strokeLinecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span style={{ fontSize: 13, fontWeight: 500 }}>{r.l}</span>
                  {r.ai && <AIChip>Auto</AIChip>}
                </div>
                <div style={{ fontSize: 11, color: L.textDim, marginTop: 2 }}>{r.s}</div>
              </div>
              {r.a != null && <div style={{ fontFamily: L.mono, fontSize: 13, fontWeight: 500 }}>${r.a.toLocaleString()}</div>}
            </div>
          ))}
        </Glass>

        {/* Send button */}
        <button style={{
          width: '100%', padding: 16, borderRadius: 100, border: 'none', cursor: 'pointer',
          background: L.holo, color: '#0a0b10', fontSize: 16, fontWeight: 600,
          fontFamily: L.font, letterSpacing: -0.2,
          boxShadow: '0 0 32px oklch(0.74 0.16 270 / 0.4), 0 8px 24px rgba(0,0,0,0.4)',
        }}>
          Confirm with Face ID →
        </button>
      </div>

      <TabBar active="home"/>
    </div>
  );
}

window.ScreenPayments = ScreenPayments;
