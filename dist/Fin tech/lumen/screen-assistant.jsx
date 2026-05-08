// AI Financial Assistant — Lumen
function ScreenAssistant() {
  return (
    <div style={{ height: '100%', overflow: 'hidden', position: 'relative' }}>
      <div style={{ height: '100%', overflow: 'auto', padding: '8px 18px 130px' }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <HoloOrb size={42} intensity={1.5}/>
            <div>
              <div style={{ fontSize: 16, fontWeight: 500 }}>Lumen</div>
              <div style={{ fontSize: 11, color: L.textDim, fontFamily: L.mono, letterSpacing: 0.5 }}>
                <span style={{ display: 'inline-block', width: 6, height: 6, borderRadius: '50%', background: L.pos, marginRight: 5, boxShadow: `0 0 6px ${L.pos}` }}/>
                Online · context 30 days
              </div>
            </div>
          </div>
          <Glass padding={0} radius={100} style={{ width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
          </Glass>
        </div>

        {/* Greeting */}
        <div style={{ padding: '8px 4px 18px' }}>
          <div style={{
            fontSize: 26, fontFamily: L.serif, fontStyle: 'italic',
            lineHeight: 1.2, letterSpacing: -0.3,
            background: L.holo, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}>How can I help with your money today?</div>
          <div style={{ fontSize: 13, color: L.textDim, marginTop: 8, lineHeight: 1.4 }}>
            I can analyze, project, move funds, or just answer.
          </div>
        </div>

        {/* Conversation */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 18 }}>
          {/* user msg */}
          <div style={{ alignSelf: 'flex-end', maxWidth: '80%' }}>
            <div style={{
              padding: '10px 14px', borderRadius: '18px 18px 4px 18px',
              background: 'rgba(255,255,255,0.08)', fontSize: 14, lineHeight: 1.4,
              border: `1px solid ${L.hairline}`,
            }}>Can I afford a $4k trip to Tokyo in March?</div>
          </div>

          {/* AI response — long card */}
          <div style={{ maxWidth: '92%', display: 'flex', gap: 8 }}>
            <HoloOrb size={22}/>
            <div style={{
              padding: 14, borderRadius: '18px 18px 18px 4px',
              background: 'rgba(15,18,28,0.6)',
              border: `1px solid ${L.hairline2}`,
              fontSize: 14, lineHeight: 1.5, flex: 1,
            }}>
              <div style={{ marginBottom: 12, display: 'flex', alignItems: 'baseline', gap: 8 }}>
                <span style={{ fontFamily: L.serif, fontStyle: 'italic', fontSize: 22, color: L.pos }}>Yes</span>
                <span style={{ color: L.textDim }}>— comfortably.</span>
              </div>

              {/* Projection card — visual cash impact */}
              <div style={{
                borderRadius: 14, padding: 14,
                background: 'rgba(255,255,255,0.03)',
                border: `1px solid ${L.hairline}`, marginBottom: 10,
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                  <span style={{ fontSize: 12, fontWeight: 500 }}>Cash through March 31</span>
                  <span style={{
                    fontSize: 10, padding: '3px 7px', borderRadius: 100,
                    background: 'oklch(0.80 0.17 155 / 0.15)', color: L.pos,
                    fontFamily: L.mono, fontWeight: 600, letterSpacing: 0.5,
                  }}>92% CONFIDENT</span>
                </div>

                {/* Before / After cash with safety floor */}
                <div style={{ position: 'relative', height: 56, marginBottom: 14 }}>
                  {/* Safety floor line */}
                  <div style={{ position: 'absolute', left: 0, right: 0, top: 38, borderTop: `1px dashed ${L.hairline2}` }} />
                  <div style={{ position: 'absolute', right: 0, top: 32, fontSize: 9, color: L.textDim, fontFamily: L.mono }}>$8k floor</div>

                  {/* Bars */}
                  <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'flex-end', gap: 14 }}>
                    {[
                      { l: 'Today',  v: 56, money: '$14,820', c: L.cyan },
                      { l: 'After trip', v: 41, money: '$10,820', c: L.iris },
                    ].map(b => (
                      <div key={b.l} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 3 }}>
                        <span style={{ fontFamily: L.mono, fontSize: 12, fontWeight: 600, color: b.c }}>{b.money}</span>
                        <div style={{ width: '100%', height: b.v, borderRadius: 6, background: `linear-gradient(180deg, ${b.c}, ${b.c.replace(')', ' / 0.5)')})`, boxShadow: `0 0 10px ${b.c.replace(')', ' / 0.4)')}` }} />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom line */}
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 10, borderTop: `1px solid ${L.hairline}` }}>
                  <span style={{ fontSize: 12, color: L.textDim }}>Trip cost</span>
                  <span style={{ fontSize: 12, fontFamily: L.mono, fontWeight: 500 }}>−$4,000</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6 }}>
                  <span style={{ fontSize: 12, color: L.textDim }}>Goals impact</span>
                  <span style={{ fontSize: 12, fontFamily: L.mono, color: L.pos, fontWeight: 500 }}>None — on track</span>
                </div>
              </div>

              <div>I'd preload <span style={{ fontFamily: L.mono, color: L.cyan }}>¥595,000</span> via the FX vault to lock today's rate. Save <span style={{ fontFamily: L.mono, color: L.pos }}>~$84</span>.</div>
            </div>
          </div>

          {/* AI follow-up actions */}
          <div style={{ marginLeft: 30, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            <ActionPill primary>Lock the FX rate</ActionPill>
            <ActionPill>Build a savings plan</ActionPill>
            <ActionPill>Alternative dates</ActionPill>
          </div>
        </div>

        {/* Suggested follow-ups */}
        <SectionLabel>Try asking</SectionLabel>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 22 }}>
          {[
            { i: '📈', q: 'How would $500/mo into VTI compare to my reserve?' },
            { i: '🏠', q: "What's the most house I can afford by Q3?" },
            { i: '🧾', q: 'Find every recurring charge I haven\'t used.' },
          ].map((s, i) => (
            <Glass key={i} padding={14} radius={16} style={{
              display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer',
            }}>
              <div style={{ fontSize: 18 }}>{s.i}</div>
              <span style={{ flex: 1, fontSize: 13, color: L.text }}>{s.q}</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={L.textDim} strokeWidth="1.6" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </Glass>
          ))}
        </div>
      </div>

      {/* Composer — sticky at bottom above tab bar */}
      <div style={{
        position: 'absolute', bottom: 104, left: 14, right: 14, zIndex: 99,
      }}>
        <div style={{
          borderRadius: 26, padding: '10px 10px 10px 16px',
          background: 'rgba(15,18,28,0.85)',
          border: `1px solid ${L.hairline2}`,
          backdropFilter: 'blur(28px) saturate(160%)',
          WebkitBackdropFilter: 'blur(28px) saturate(160%)',
          boxShadow: '0 -1px 0 rgba(255,255,255,0.05) inset, 0 18px 40px rgba(0,0,0,0.5)',
          display: 'flex', alignItems: 'center', gap: 10,
        }}>
          <span style={{ flex: 1, fontSize: 14, color: L.textMute }}>Ask Lumen anything...</span>
          <div style={{
            width: 36, height: 36, borderRadius: '50%',
            background: L.holo, display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 0 14px oklch(0.74 0.16 270 / 0.6)',
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0a0b10" strokeWidth="2.4" strokeLinecap="round"><path d="M12 2v8M12 14v8M5 12h2M17 12h2M5 5l1.5 1.5M17.5 17.5L19 19M5 19l1.5-1.5M17.5 6.5L19 5"/></svg>
          </div>
        </div>
      </div>

      <TabBar active="ai"/>
    </div>
  );
}

function Stat({ label, value, tone }) {
  return (
    <div>
      <div style={{ fontSize: 10, color: L.textDim, fontFamily: L.mono, textTransform: 'uppercase', letterSpacing: 1 }}>{label}</div>
      <div style={{ fontSize: 15, fontWeight: 500, fontFamily: L.mono, color: tone, marginTop: 2 }}>{value}</div>
    </div>
  );
}

function ActionPill({ children, primary }) {
  return (
    <button style={{
      background: primary ? L.holo : 'rgba(255,255,255,0.05)',
      border: primary ? 'none' : `1px solid ${L.hairline2}`,
      color: primary ? '#0a0b10' : L.text,
      padding: '7px 12px', borderRadius: 100, fontSize: 12, fontWeight: primary ? 600 : 500,
      cursor: 'pointer', fontFamily: L.font,
    }}>{children}</button>
  );
}

window.ScreenAssistant = ScreenAssistant;
