// Analytics / Spending Insights — Lumen
function ScreenAnalytics() {
  // Bar chart data (months)
  const months = [
  { m: 'May', a: 3.2 }, { m: 'Jun', a: 3.8 }, { m: 'Jul', a: 4.1 },
  { m: 'Aug', a: 3.5 }, { m: 'Sep', a: 4.6 }, { m: 'Oct', a: 4.9 }];

  const max = 5.5;

  return (
    <div style={{ height: '100%', overflow: 'hidden', position: 'relative' }}>
      <div style={{ height: '100%', overflow: 'auto', padding: '8px 18px 130px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
          <div>
            <div style={{ fontSize: 11, color: L.textDim, fontFamily: L.mono, letterSpacing: 1, textTransform: 'uppercase' }}>Insights</div>
            <div style={{ fontSize: 26, fontWeight: 500, letterSpacing: -0.6, marginTop: 2 }}>Where it goes</div>
          </div>
          <Glass padding={6} radius={100} style={{ display: 'flex', gap: 2 }}>
            {['W', 'M', 'Y'].map((p) =>
            <button key={p} style={{
              background: p === 'M' ? L.holo : 'transparent', border: 'none',
              color: p === 'M' ? '#0a0b10' : L.text, fontWeight: 600, fontSize: 12,
              width: 28, height: 28, borderRadius: 100, cursor: 'pointer'
            }}>{p}</button>
            )}
          </Glass>
        </div>

        {/* Headline spend card — readable, predictive */}
        <Glass padding={20} radius={24} glow style={{ marginBottom: 18 }}>
          {/* Hero row: amount + delta */}
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12 }}>
            <div>
              <div style={{ fontSize: 12, color: L.textDim, fontWeight: 500 }}>Spent in October</div>
              <Money amount={4912.40} size={36} weight={600} />
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 6 }}>
                <span style={{
                  display: 'inline-flex', alignItems: 'center', gap: 3,
                  fontSize: 12, fontWeight: 600, color: L.neg,
                  background: 'oklch(0.65 0.20 25 / 0.12)', padding: '3px 8px', borderRadius: 100
                }}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={L.neg} strokeWidth="2.5" strokeLinecap="round"><path d="M7 17l5-5 5 5M7 7l5 5 5-5"/></svg>
                  +8.2%
                </span>
                <span style={{ fontSize: 12, color: L.textDim }}>vs September</span>
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: 11, color: L.textDim, fontFamily: L.mono, letterSpacing: 1, textTransform: 'uppercase' }}>Days left</div>
              <div style={{ fontFamily: L.mono, fontSize: 22, fontWeight: 500, marginTop: 2 }}>9</div>
            </div>
          </div>

          {/* Budget progress bar */}
          <div style={{ marginTop: 18 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 6 }}>
              <span style={{ fontSize: 12, color: L.textDim }}>Budget · $7,900</span>
              <span style={{ fontSize: 12, fontFamily: L.mono, color: L.text, fontWeight: 500 }}>62% used</span>
            </div>
            <div style={{ height: 8, borderRadius: 100, background: 'rgba(255,255,255,0.06)', overflow: 'hidden', position: 'relative' }}>
              <div style={{ width: '62%', height: '100%', background: L.holo, boxShadow: '0 0 10px oklch(0.74 0.16 270 / 0.6)' }} />
              {/* "on-pace" marker at 70% (9/30 days left → should be at 70%) */}
              <div style={{ position: 'absolute', left: '70%', top: -3, bottom: -3, width: 2, background: 'rgba(255,255,255,0.5)', borderRadius: 2 }} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6 }}>
              <span style={{ fontSize: 11, color: L.textDim }}>$0</span>
              <span style={{ fontSize: 11, color: L.textDim, fontFamily: L.mono }}>on-pace ↑</span>
              <span style={{ fontSize: 11, color: L.textDim }}>$7.9k</span>
            </div>
          </div>

          {/* AI forecast line */}
          <div style={{
            marginTop: 14, padding: '10px 12px', borderRadius: 12,
            background: 'oklch(0.84 0.13 200 / 0.08)', border: `1px solid oklch(0.84 0.13 200 / 0.18)`,
            display: 'flex', alignItems: 'center', gap: 10
          }}>
            <HoloOrb size={20} />
            <div style={{ flex: 1, fontSize: 12.5, lineHeight: 1.4 }}>
              On pace for <span style={{ fontFamily: L.mono, color: L.cyan, fontWeight: 600 }}>$7,420</span> by Oct 31 — <span style={{ color: L.pos }}>$480 under budget</span>
            </div>
          </div>

          {/* Category breakdown with proportional bars */}
          <div style={{ marginTop: 18, display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              { l: 'Housing', a: 1820, c: L.cyan,    p: 37 },
              { l: 'Other',   a: 1470, c: L.warn,    p: 30 },
              { l: 'Travel',  a: 980,  c: L.magenta, p: 20 },
              { l: 'Food',    a: 642,  c: L.violet,  p: 13 }
            ].map(c => (
              <div key={c.l}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 4 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: c.c, boxShadow: `0 0 6px ${c.c}` }} />
                    <span style={{ fontSize: 13, fontWeight: 500 }}>{c.l}</span>
                    <span style={{ fontSize: 11, color: L.textDim, fontFamily: L.mono }}>{c.p}%</span>
                  </div>
                  <span style={{ fontFamily: L.mono, fontSize: 13, fontWeight: 500 }}>${c.a.toLocaleString()}</span>
                </div>
                <div style={{ height: 4, borderRadius: 100, background: 'rgba(255,255,255,0.05)', overflow: 'hidden' }}>
                  <div style={{ width: `${c.p}%`, height: '100%', background: c.c, opacity: 0.85 }} />
                </div>
              </div>
            ))}
          </div>
        </Glass>

        {/* AI narrative */}
        <Glass padding={16} radius={20} style={{
          marginBottom: 18,
          background: 'linear-gradient(135deg, oklch(0.84 0.13 200 / 0.08), oklch(0.72 0.18 340 / 0.08))'
        }}>
          <div style={{ display: 'flex', gap: 12 }}>
            <HoloOrb size={32} />
            <div style={{ flex: 1 }}>
              <AIChip>Pattern detected</AIChip>
              <div style={{ fontSize: 14, lineHeight: 1.45, marginTop: 8 }}>
                You spend <span style={{ fontFamily: L.serif, fontStyle: 'italic', fontSize: 17, color: L.cyan }}>2.4×</span> more on dining the week after a payday. Want me to <span style={{ color: L.text, textDecoration: 'underline', textDecorationColor: L.cyan, textUnderlineOffset: 3 }}>auto-route $300</span> to your reserve next Friday?
              </div>
              <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
                <button style={{
                  background: L.holo, border: 'none', color: '#0a0b10',
                  padding: '7px 14px', borderRadius: 100, fontSize: 12, fontWeight: 600, cursor: 'pointer'
                }}>Set it up</button>
                <button style={{
                  background: 'transparent', border: `1px solid ${L.hairline2}`, color: L.text,
                  padding: '7px 14px', borderRadius: 100, fontSize: 12, fontWeight: 500, cursor: 'pointer'
                }}>Not now</button>
              </div>
            </div>
          </div>
        </Glass>

        {/* 6-month trend */}
        <SectionLabel>6-month trend</SectionLabel>
        <Glass padding={18} radius={20} style={{ marginBottom: 18 }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 10, height: 110, marginBottom: 8 }}>
            {months.map((mo, i) => {
              const isCur = i === months.length - 1;
              return (
                <div key={mo.m} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                  <div style={{
                    width: '100%', borderRadius: 6,
                    height: `${mo.a / max * 90}px`,
                    background: isCur ? L.holo : 'rgba(255,255,255,0.10)',
                    boxShadow: isCur ? '0 0 18px oklch(0.74 0.16 270 / 0.5)' : undefined
                  }} />
                  <span style={{ fontSize: 10, color: isCur ? L.text : L.textDim, fontFamily: L.mono }}>{mo.m}</span>
                </div>);

            })}
          </div>
        </Glass>

        {/* Top merchants */}
        <SectionLabel action="See all →">Top merchants</SectionLabel>
        <Glass padding={0} radius={20}>
          {[
          { l: 'Whole Foods', s: '14 visits', a: 482.10, c: L.cyan },
          { l: 'Uber', s: '22 trips', a: 318.60, c: L.violet },
          { l: 'Netflix', s: 'Subscription', a: 22.99, c: L.magenta },
          { l: 'Shell', s: '8 fill-ups', a: 412.30, c: L.warn }].
          map((t, i, arr) =>
          <div key={i} style={{
            display: 'flex', alignItems: 'center', gap: 12, padding: '14px 16px',
            borderBottom: i < arr.length - 1 ? `1px solid ${L.hairline}` : 'none'
          }}>
              <div style={{ width: 6, height: 28, borderRadius: 3, background: t.c }} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 13, fontWeight: 500 }}>{t.l}</div>
                <div style={{ fontSize: 11, color: L.textDim, marginTop: 2 }}>{t.s}</div>
              </div>
              <div style={{ fontFamily: L.mono, fontSize: 13, fontWeight: 500 }}>${t.a.toFixed(2)}</div>
            </div>
          )}
        </Glass>
      </div>

      <TabBar active="home" />
    </div>);

}

function SpendRing() {
  // segments: housing, food, travel, other
  const data = [
  { v: 0.37, c: 'oklch(0.84 0.13 200)' },
  { v: 0.13, c: 'oklch(0.70 0.17 290)' },
  { v: 0.20, c: 'oklch(0.72 0.18 340)' },
  { v: 0.30, c: 'oklch(0.82 0.16 75)' }];

  const r = 44,c = 2 * Math.PI * r;
  let off = 0;
  return (
    <div style={{ position: 'relative', width: 110, height: 110 }}>
      <svg width="110" height="110" viewBox="0 0 110 110">
        <circle cx="55" cy="55" r={r} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="9" />
        {data.map((s, i) => {
          const len = c * s.v;
          const dasharray = `${len} ${c - len}`;
          const dashoffset = -off;
          off += len;
          return (
            <circle key={i} cx="55" cy="55" r={r} fill="none" stroke={s.c} strokeWidth="9"
            strokeDasharray={dasharray} strokeDashoffset={dashoffset}
            transform="rotate(-90 55 55)" strokeLinecap="butt"
            style={{ filter: `drop-shadow(0 0 4px ${s.c})` }} />);

        })}
      </svg>
      <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ fontSize: 9, fontFamily: L.mono, color: L.textDim, letterSpacing: 1, textTransform: 'uppercase' }}>Used</div>
        <div style={{ fontSize: 18, fontWeight: 600, fontFamily: L.mono }}>62%</div>
        <div style={{ fontSize: 9, color: L.textDim }}>of $7.9k</div>
      </div>
    </div>);

}

window.ScreenAnalytics = ScreenAnalytics;