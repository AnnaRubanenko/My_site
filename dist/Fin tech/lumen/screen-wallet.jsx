// Wallet / Accounts — Lumen
function ScreenWallet() {
  return (
    <div style={{ height: '100%', overflow: 'hidden', position: 'relative' }}>
      <div style={{ height: '100%', overflow: 'auto', padding: '8px 18px 130px' }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
          <div>
            <div style={{ fontSize: 11, color: L.textDim, fontFamily: L.mono, letterSpacing: 1, textTransform: 'uppercase' }}>Wallet</div>
            <div style={{ fontSize: 26, fontWeight: 500, letterSpacing: -0.6, marginTop: 2 }}>Cards & accounts</div>
          </div>
          <div style={{
            width: 38, height: 38, borderRadius: '50%',
            background: 'rgba(255,255,255,0.06)', border: `1px solid ${L.hairline2}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round"><path d="M12 5v14M5 12h14" /></svg>
          </div>
        </div>

        {/* Hero card — holographic credit card */}
        <div style={{ position: 'relative', marginBottom: 20, perspective: 1200 }}>
          <div style={{
            position: 'relative', borderRadius: 22, height: 210,
            background: `
              radial-gradient(120% 100% at 0% 0%, oklch(0.40 0.18 290) 0%, transparent 60%),
              radial-gradient(120% 100% at 100% 100%, oklch(0.50 0.16 200) 0%, transparent 50%),
              linear-gradient(135deg, #1a1530 0%, #0d0f1c 100%)`,
            border: '1px solid rgba(255,255,255,0.18)',
            boxShadow: '0 0 0 1px rgba(255,255,255,0.04) inset',
            overflow: 'hidden', padding: 22,
            transform: 'rotateX(2deg)'
          }}>
            {/* iridescent shine */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.12) 50%, transparent 70%)',
              mixBlendMode: 'screen', pointerEvents: 'none'
            }} />
            {/* etched grid */}
            <svg style={{ position: 'absolute', top: 0, right: 0, opacity: 0.2 }} width="200" height="210" viewBox="0 0 200 210" fill="none">
              <defs>
                <pattern id="cardgrid" width="22" height="22" patternUnits="userSpaceOnUse">
                  <path d="M22 0H0V22" stroke="rgba(255,255,255,0.4)" strokeWidth="0.4" />
                </pattern>
              </defs>
              <rect width="200" height="210" fill="url(#cardgrid)" />
            </svg>

            <div style={{ position: 'relative', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontSize: 11, fontFamily: L.mono, letterSpacing: 1.4, color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase' }}>Lumen Signature</div>
                  <div style={{ fontSize: 18, fontFamily: L.serif, fontStyle: 'italic', color: '#fff', marginTop: 2 }}>Prism</div>
                </div>
                {/* Lumen mark */}
                <div style={{
                  width: 40, height: 40, borderRadius: '50%',
                  background: 'conic-gradient(from 90deg, oklch(0.84 0.13 200), oklch(0.72 0.18 340), oklch(0.74 0.16 270), oklch(0.84 0.13 200))',
                  boxShadow: '0 0 16px oklch(0.74 0.16 270 / 0.6)'
                }}>
                  <div style={{ position: 'absolute', inset: 4, borderRadius: '50%', background: 'rgba(13,15,28,0.8)', opacity: "-0.89" }} />
                </div>
              </div>

              <div>
                <div style={{
                  fontFamily: L.mono, fontSize: 17, letterSpacing: 4, color: '#fff', fontWeight: 500
                }}>•••• •••• •••• 4421</div>
                <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginTop: 12 }}>
                  <div>
                    <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.5)', fontFamily: L.mono, letterSpacing: 1, textTransform: 'uppercase' }}>Cardholder</div>
                    <div style={{ fontSize: 13, color: '#fff', marginTop: 2, fontWeight: 500 }}>Asha Khatri</div>
                  </div>
                  <div>
                    <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.5)', fontFamily: L.mono, letterSpacing: 1, textTransform: 'uppercase' }}>Expires</div>
                    <div style={{ fontSize: 13, color: '#fff', marginTop: 2, fontFamily: L.mono }}>09 / 28</div>
                  </div>
                  <div style={{ fontSize: 18, fontStyle: 'italic', fontFamily: L.serif, color: '#fff' }}>VISA</div>
                </div>
              </div>
            </div>
          </div>

          {/* dots indicator */}
          <div style={{ display: 'flex', gap: 6, justifyContent: 'center', marginTop: 14 }}>
            {[0, 1, 2].map((i) =>
            <div key={i} style={{
              width: i === 0 ? 18 : 6, height: 6, borderRadius: 100,
              background: i === 0 ? L.text : 'rgba(255,255,255,0.18)', transition: 'all 0.3s'
            }} />
            )}
          </div>
        </div>

        {/* Quick controls */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8, marginBottom: 22 }}>
          {[
          { l: 'Freeze', on: false, i: <path d="M12 2v20M2 12h20M5 5l14 14M19 5L5 19" /> },
          { l: 'Limits', on: false, i: <path d="M3 12h4l3-9 4 18 3-9h4" /> },
          { l: 'Apple Pay', on: true, i: <path d="M3 7h18v10a3 3 0 01-3 3H6a3 3 0 01-3-3V7z M3 7l3-3h12l3 3" /> },
          { l: 'Travel', on: true, i: <path d="M22 16l-10-3L2 16v-2l10-3 10 3v2zM2 22h20" /> }].
          map((c) =>
          <Glass key={c.l} padding={10} radius={16} style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
            background: c.on ? 'oklch(0.74 0.16 270 / 0.10)' : undefined,
            borderColor: c.on ? 'oklch(0.74 0.16 270 / 0.40)' : undefined
          }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={c.on ? L.iris : L.text} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">{c.i}</svg>
              <span style={{ fontSize: 11, fontWeight: 500 }}>{c.l}</span>
            </Glass>
          )}
        </div>

        {/* AI guardrail */}
        <Glass padding={14} radius={18} style={{ marginBottom: 22, background: 'linear-gradient(135deg, oklch(0.84 0.13 200 / 0.06), oklch(0.72 0.18 340 / 0.06))' }}>
          <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
            <HoloOrb size={28} />
            <div style={{ flex: 1 }}>
              <AIChip>Smart guardrail</AIChip>
              <div style={{ fontSize: 13, marginTop: 6, lineHeight: 1.4 }}>
                Lumen will pause the card if a charge exceeds <span style={{ color: L.cyan, fontFamily: L.mono }}>$340</span> outside your usual cities.
              </div>
            </div>
            <div style={{
              width: 36, height: 22, borderRadius: 100, position: 'relative',
              background: L.holo, padding: 2
            }}>
              <div style={{ width: 18, height: 18, borderRadius: '50%', background: '#fff', marginLeft: 14 }} />
            </div>
          </div>
        </Glass>

        {/* Account list */}
        <SectionLabel action="+ Link →">All accounts</SectionLabel>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 22 }}>
          {[
          { n: 'Everyday Checking', s: 'Lumen Bank · 4421', a: 12428.10, c: L.cyan, badge: 'Primary' },
          { n: 'High-yield Reserve', s: '4.62% APY · auto-allocated', a: 64210.55, c: L.iris, badge: 'AI' },
          { n: 'Tax Vault', s: '24% of income · auto-set aside', a: 18402.00, c: L.warn, badge: 'AI' },
          { n: 'Brokerage · INV-204', s: 'Diversified · low risk', a: 207868.77, c: L.violet, badge: null },
          { n: 'Crypto Vault', s: 'BTC, ETH, SOL · cold storage', a: 8421.30, c: L.magenta, badge: null }].
          map((a) =>
          <div key={a.n} style={{
            borderRadius: 18, padding: '14px 16px',
            background: 'linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.015))',
            border: `1px solid ${L.hairline}`,
            display: 'flex', alignItems: 'center', gap: 14
          }}>
              <div style={{
              width: 36, height: 36, borderRadius: 12,
              background: `linear-gradient(135deg, ${a.c}, oklch(0.30 0.06 280))`,
              border: '1px solid rgba(255,255,255,0.12)',
              boxShadow: `0 0 14px ${a.c.replace(')', ' / 0.3)')}`
            }} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', gap: 6, fontWeight: "500", alignItems: "flex-start" }}>
                  <span style={{ fontSize: 14, fontWeight: "500", height: "33px", width: "67px" }}>{a.n}</span>
                  {a.badge === 'AI' && <AIChip>Auto</AIChip>}
                  {a.badge === 'Primary' &&
                <span style={{ fontSize: 9, padding: '2px 6px', borderRadius: 100, border: `1px solid ${L.hairline2}`, color: L.textDim, fontFamily: L.mono, letterSpacing: 1, textTransform: 'uppercase' }}>Primary</span>
                }
                </div>
                <div style={{ fontSize: 11, color: L.textDim, marginTop: 2 }}>{a.s}</div>
              </div>
              <div style={{ fontFamily: L.mono, fontSize: 14, fontWeight: 500 }}>
                ${a.a.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </div>
            </div>
          )}
        </div>
      </div>

      <TabBar active="wallet" />
    </div>);

}

window.ScreenWallet = ScreenWallet;