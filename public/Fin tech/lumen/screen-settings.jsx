// Settings / Profile — Lumen
function ScreenSettings() {
  return (
    <div style={{ height: '100%', overflow: 'hidden', position: 'relative' }}>
      <div style={{ height: '100%', overflow: 'auto', padding: '8px 18px 130px' }}>
        <div style={{ marginBottom: 22 }}>
          <div style={{ fontSize: 11, color: L.textDim, fontFamily: L.mono, letterSpacing: 1, textTransform: 'uppercase' }}>Profile</div>
          <div style={{ fontSize: 26, fontWeight: 500, letterSpacing: -0.6, marginTop: 2 }}>Asha Khatri</div>
        </div>

        {/* Identity card */}
        <Glass padding={20} radius={24} glow style={{ marginBottom: 18 }}>
          <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
            <div style={{
              width: 60, height: 60, borderRadius: '50%', position: 'relative',
              background: 'linear-gradient(135deg, oklch(0.50 0.15 320), oklch(0.40 0.10 250))',
              border: '2px solid rgba(255,255,255,0.18)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 22, fontWeight: 600, color: '#fff', flexShrink: 0,
            }}>
              AK
              <div style={{
                position: 'absolute', bottom: -2, right: -2,
                width: 22, height: 22, borderRadius: '50%',
                background: L.holo, border: '2px solid #10131c',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#0a0b10" strokeWidth="3" strokeLinecap="round"><path d="M5 12l5 5L20 7"/></svg>
              </div>
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 16, fontWeight: 600 }}>Asha Khatri</div>
              <div style={{ fontSize: 13, color: L.textDim, marginTop: 1 }}>asha@khatri.co</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 6 }}>
                <span style={{ fontSize: 9, padding: '2px 7px', borderRadius: 100, background: L.holoSoft, color: L.cyan, fontFamily: L.mono, letterSpacing: 0.6, textTransform: 'uppercase', fontWeight: 600 }}>Prism · Tier 3</span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 3, fontSize: 11, color: L.pos }}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={L.pos} strokeWidth="2.5" strokeLinecap="round"><path d="M5 12l5 5L20 7"/></svg>
                  Verified
                </span>
              </div>
            </div>
          </div>

          {/* Quick stats row */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8, marginTop: 18, paddingTop: 16, borderTop: `1px solid ${L.hairline}` }}>
            {[
              { l: 'Member',   v: '2 yr',     s: 'since 2024' },
              { l: 'Devices',  v: '2',        s: 'trusted' },
              { l: 'Last in',  v: 'Tue',      s: '9:14 am' },
            ].map(s => (
              <div key={s.l}>
                <div style={{ fontSize: 10, color: L.textDim, fontFamily: L.mono, letterSpacing: 0.8, textTransform: 'uppercase' }}>{s.l}</div>
                <div style={{ fontSize: 16, fontWeight: 600, marginTop: 3, letterSpacing: -0.3 }}>{s.v}</div>
                <div style={{ fontSize: 11, color: L.textDim, marginTop: 1 }}>{s.s}</div>
              </div>
            ))}
          </div>

          {/* Security score with checklist */}
          <div style={{ marginTop: 16, paddingTop: 16, borderTop: `1px solid ${L.hairline}` }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 8 }}>
              <span style={{ fontSize: 13, fontWeight: 500 }}>Security score</span>
              <span style={{ fontFamily: L.mono, fontSize: 14, fontWeight: 600, color: L.pos }}>92<span style={{ color: L.textDim, fontWeight: 400 }}> / 100</span></span>
            </div>
            <div style={{ height: 6, borderRadius: 100, background: 'rgba(255,255,255,0.06)', overflow: 'hidden', marginBottom: 12 }}>
              <div style={{ width: '92%', height: '100%', background: L.holo, boxShadow: '0 0 10px oklch(0.74 0.16 270 / 0.6)' }}/>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
              {[
                { ok: true,  l: 'Face ID enabled' },
                { ok: true,  l: 'Recovery codes saved' },
                { ok: false, l: 'Hardware key', cta: '+8 pts' },
              ].map(c => (
                <div key={c.l} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <div style={{
                    width: 16, height: 16, borderRadius: '50%', flexShrink: 0,
                    background: c.ok ? 'oklch(0.80 0.17 155 / 0.18)' : 'oklch(0.82 0.16 75 / 0.18)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    {c.ok ? (
                      <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke={L.pos} strokeWidth="3.5" strokeLinecap="round"><path d="M5 12l5 5L20 7"/></svg>
                    ) : (
                      <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke={L.warn} strokeWidth="3" strokeLinecap="round"><path d="M12 5v9M12 18v1"/></svg>
                    )}
                  </div>
                  <span style={{ flex: 1, fontSize: 12.5, color: c.ok ? L.textDim : L.text }}>{c.l}</span>
                  {c.cta && (
                    <span style={{ fontSize: 11, color: L.cyan, fontWeight: 600 }}>Set up →</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Glass>

        {/* AI personalization */}
        <SectionLabel>Lumen AI</SectionLabel>
        <Glass padding={0} radius={20} style={{ marginBottom: 18 }}>
          {[
            { l: 'Memory', s: 'Lumen remembers context across 30 days', toggle: true, on: true, ai: true },
            { l: 'Proactive nudges', s: 'Push insights before you ask', toggle: true, on: true },
            { l: 'Auto-route payments', s: 'Pick cheapest rail for FX', toggle: true, on: true },
            { l: 'Voice', s: 'Aria · soft, neutral', chev: true },
            { l: 'Risk profile', s: 'Moderate · 60/40', chev: true },
          ].map((r, i, arr) => (
            <Row key={i} {...r} isLast={i === arr.length-1}/>
          ))}
        </Glass>

        {/* Security */}
        <SectionLabel>Security</SectionLabel>
        <Glass padding={0} radius={20} style={{ marginBottom: 18 }}>
          <Row l="Face ID & Passcode" chev/>
          <Row l="Trusted devices" s="iPhone 16 Pro · MacBook" chev/>
          <Row l="Hardware key" s="Add YubiKey" chev highlight/>
          <Row l="Activity log" s="Last login · Tue 9:14am" chev isLast/>
        </Glass>

        {/* Preferences */}
        <SectionLabel>Preferences</SectionLabel>
        <Glass padding={0} radius={20} style={{ marginBottom: 18 }}>
          <Row l="Appearance" s="Dark · System" chev/>
          <Row l="Currency" s="USD · $" chev/>
          <Row l="Notifications" chev/>
          <Row l="Connected accounts" s="6 banks linked" chev isLast/>
        </Glass>

        <Glass padding={0} radius={20} style={{ marginBottom: 22 }}>
          <Row l="Help & support" chev/>
          <Row l="Sign out" danger isLast/>
        </Glass>

        <div style={{ textAlign: 'center', fontSize: 11, color: L.textMute, fontFamily: L.mono, letterSpacing: 1, paddingBottom: 4 }}>
          LUMEN · v4.2.1 · build 2026.05
        </div>
      </div>

      <TabBar active="me"/>
    </div>
  );
}

function Row({ l, s, toggle, on, chev, ai, danger, highlight, isLast }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 12, padding: '13px 16px',
      borderBottom: !isLast ? `1px solid ${L.hairline}` : 'none',
    }}>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <span style={{ fontSize: 14, fontWeight: 500, color: danger ? L.neg : L.text }}>{l}</span>
          {ai && <AIChip>Beta</AIChip>}
          {highlight && <span style={{ fontSize: 9, padding: '1px 6px', borderRadius: 100, background: 'oklch(0.82 0.16 75 / 0.18)', color: L.warn, fontFamily: L.mono, letterSpacing: 0.5, textTransform: 'uppercase' }}>+8</span>}
        </div>
        {s && <div style={{ fontSize: 11, color: L.textDim, marginTop: 2 }}>{s}</div>}
      </div>
      {toggle ? (
        <div style={{
          width: 36, height: 22, borderRadius: 100, position: 'relative',
          background: on ? L.holo : 'rgba(255,255,255,0.10)',
          padding: 2, transition: 'background 0.2s',
        }}>
          <div style={{
            width: 18, height: 18, borderRadius: '50%', background: '#fff',
            marginLeft: on ? 14 : 0, transition: 'margin 0.2s',
            boxShadow: '0 1px 3px rgba(0,0,0,0.4)',
          }}/>
        </div>
      ) : chev ? (
        <svg width="7" height="12" viewBox="0 0 7 12"><path d="M1 1l5 5-5 5" stroke={L.textMute} strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
      ) : null}
    </div>
  );
}

window.ScreenSettings = ScreenSettings;
