// Investments / Portfolio — Lumen
function ScreenInvestments() {
  return (
    <div style={{ height: '100%', overflow: 'hidden', position: 'relative' }}>
      <div style={{ height: '100%', overflow: 'auto', padding: '8px 18px 130px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
          <div>
            <div style={{ fontSize: 11, color: L.textDim, fontFamily: L.mono, letterSpacing: 1, textTransform: 'uppercase' }}>Portfolio</div>
            <div style={{ fontSize: 26, fontWeight: 500, letterSpacing: -0.6, marginTop: 2 }}>Markets</div>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <Glass padding={0} radius={100} style={{ width: 38, height: 38, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.5-4.5"/></svg>
            </Glass>
          </div>
        </div>

        {/* Hero portfolio with chart */}
        <Glass padding={20} radius={24} glow style={{ marginBottom: 18, background: 'linear-gradient(160deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01))' }}>
          <div style={{ fontSize: 11, fontFamily: L.mono, color: L.textDim, letterSpacing: 1, textTransform: 'uppercase' }}>Total value</div>
          <Money amount={207868.77} size={42} weight={500}/>
          <div style={{ display: 'flex', gap: 10, marginTop: 8, alignItems: 'center' }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 4,
              fontSize: 12, color: L.pos, fontFamily: L.mono,
              padding: '3px 8px', borderRadius: 100,
              background: 'oklch(0.80 0.17 155 / 0.12)', border: '1px solid oklch(0.80 0.17 155 / 0.25)',
            }}>+$8,402.18 · 4.21%</span>
            <span style={{ fontSize: 12, color: L.textDim }}>1M</span>
          </div>

          {/* Line chart */}
          <PortfolioChart/>

          {/* Range selector */}
          <div style={{ display: 'flex', gap: 4, justifyContent: 'space-between', marginTop: 4 }}>
            {['1D', '1W', '1M', '3M', 'YTD', '1Y', 'ALL'].map(p => (
              <button key={p} style={{
                background: p === '1M' ? 'rgba(255,255,255,0.1)' : 'transparent',
                border: 'none', color: p === '1M' ? L.text : L.textDim,
                fontSize: 11, fontWeight: 500, padding: '6px 8px', borderRadius: 100, cursor: 'pointer',
                fontFamily: L.mono,
              }}>{p}</button>
            ))}
          </div>
        </Glass>

        {/* AI strategist */}
        <Glass padding={14} radius={20} style={{
          marginBottom: 18,
          background: 'linear-gradient(135deg, oklch(0.84 0.13 200 / 0.10), oklch(0.72 0.18 340 / 0.10))',
          border: `1px solid ${L.hairline2}`,
        }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
            <HoloOrb size={28}/>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <AIChip>Strategist</AIChip>
                <span style={{ fontSize: 10, fontFamily: L.mono, color: L.textDim, letterSpacing: 1, textTransform: 'uppercase' }}>Risk · Moderate</span>
              </div>
              <div style={{ fontSize: 13, lineHeight: 1.4, marginTop: 8 }}>
                Your tech weight is <span style={{ color: L.warn, fontFamily: L.mono }}>+9%</span> above target. Rebalance into <span style={{ color: L.cyan, fontFamily: L.mono }}>VTI</span> or <span style={{ color: L.cyan, fontFamily: L.mono }}>BND</span>?
              </div>
            </div>
          </div>
        </Glass>

        {/* Holdings */}
        <SectionLabel action="Trade →">Holdings</SectionLabel>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 22 }}>
          {[
            { t: 'NVDA', n: 'NVIDIA',           shares: 42,  price: 1042.10, chg: +5.21, val: 43768.20, ai: true },
            { t: 'VTI',  n: 'Total Mkt Index',  shares: 218, price: 268.40,  chg: +0.62, val: 58511.20, ai: false },
            { t: 'AAPL', n: 'Apple',            shares: 96,  price: 232.14,  chg: -1.18, val: 22285.44, ai: false },
            { t: 'BTC',  n: 'Bitcoin',          shares: 0.62,price: 71200,   chg: +2.04, val: 44144.00, ai: true },
            { t: 'BND',  n: 'US Bond Index',    shares: 410, price: 73.10,   chg: +0.08, val: 29971.00, ai: false },
          ].map(h => (
            <div key={h.t} style={{
              borderRadius: 16, padding: '12px 14px',
              background: 'rgba(255,255,255,0.03)',
              border: `1px solid ${L.hairline}`,
              display: 'flex', alignItems: 'center', gap: 12,
            }}>
              <div style={{
                width: 38, height: 38, borderRadius: 11,
                background: 'linear-gradient(135deg, rgba(255,255,255,0.10), rgba(255,255,255,0.02))',
                border: '1px solid rgba(255,255,255,0.10)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: L.mono, fontSize: 11, fontWeight: 600,
              }}>{h.t}</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span style={{ fontSize: 13, fontWeight: 500 }}>{h.n}</span>
                  {h.ai && <span style={{
                    fontSize: 9, padding: '1px 6px', borderRadius: 100,
                    background: L.holoSoft, color: L.cyan, fontFamily: L.mono, letterSpacing: 0.5, textTransform: 'uppercase',
                    border: '1px solid rgba(255,255,255,0.1)',
                  }}>AI pick</span>}
                </div>
                <div style={{ fontSize: 11, color: L.textDim, marginTop: 2, fontFamily: L.mono }}>
                  {h.shares} {h.shares < 10 ? 'units' : 'shares'} · ${h.price.toLocaleString()}
                </div>
              </div>
              <Sparkline up={h.chg > 0}/>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontFamily: L.mono, fontSize: 13, fontWeight: 500 }}>${h.val.toLocaleString(undefined, {maximumFractionDigits: 2})}</div>
                <div style={{ fontFamily: L.mono, fontSize: 11, color: h.chg > 0 ? L.pos : L.neg, marginTop: 2 }}>
                  {h.chg > 0 ? '+' : ''}{h.chg.toFixed(2)}%
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* AI baskets */}
        <SectionLabel>Curated baskets</SectionLabel>
        <div style={{ display: 'flex', gap: 10, overflowX: 'auto', marginRight: -18, paddingRight: 18, scrollbarWidth: 'none' }}>
          {[
            { n: 'AI Infrastructure', r: '+18.4%', col: L.cyan },
            { n: 'Climate transition', r: '+9.1%', col: L.iris },
            { n: 'Steady dividends', r: '+4.2%', col: L.warn },
          ].map(b => (
            <div key={b.n} style={{
              flex: '0 0 180px', borderRadius: 18, padding: 14,
              background: `linear-gradient(160deg, ${b.col}25, rgba(255,255,255,0.02))`,
              border: `1px solid ${L.hairline2}`,
            }}>
              <div style={{ fontSize: 10, fontFamily: L.mono, color: b.col, letterSpacing: 1, textTransform: 'uppercase' }}>1Y return</div>
              <div style={{ fontFamily: L.mono, fontSize: 22, fontWeight: 500, marginTop: 2 }}>{b.r}</div>
              <div style={{ fontSize: 12, color: L.text, marginTop: 12, fontWeight: 500 }}>{b.n}</div>
              <div style={{ fontSize: 11, color: L.textDim, marginTop: 2 }}>12 holdings · auto-rebalanced</div>
            </div>
          ))}
        </div>
      </div>

      <TabBar active="invest"/>
    </div>
  );
}

function PortfolioChart() {
  // Generate path
  const pts = [0.30, 0.34, 0.28, 0.42, 0.38, 0.55, 0.50, 0.62, 0.58, 0.72, 0.78, 0.74, 0.88, 0.82, 0.92];
  const w = 320, h = 90;
  const path = pts.map((p, i) => {
    const x = (i / (pts.length - 1)) * w;
    const y = h - p * h;
    return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
  }).join(' ');
  const fillPath = path + ` L ${w} ${h} L 0 ${h} Z`;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} style={{ width: '100%', height: 90, marginTop: 14, overflow: 'visible' }}>
      <defs>
        <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.74 0.16 270)" stopOpacity="0.4"/>
          <stop offset="100%" stopColor="oklch(0.74 0.16 270)" stopOpacity="0"/>
        </linearGradient>
        <linearGradient id="chartStroke" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="oklch(0.84 0.13 200)"/>
          <stop offset="100%" stopColor="oklch(0.72 0.18 340)"/>
        </linearGradient>
      </defs>
      <path d={fillPath} fill="url(#chartFill)"/>
      <path d={path} stroke="url(#chartStroke)" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ filter: 'drop-shadow(0 0 4px oklch(0.74 0.16 270 / 0.6))' }}/>
      {/* current dot */}
      <circle cx={w} cy={h - pts[pts.length-1]*h} r="4" fill="oklch(0.72 0.18 340)" stroke="#0a0b10" strokeWidth="2"/>
    </svg>
  );
}

function Sparkline({ up }) {
  const pts = up ? [10,8,9,6,7,4,3] : [4,6,5,7,8,7,9];
  const w = 40, h = 16;
  const path = pts.map((p, i) => `${i === 0 ? 'M' : 'L'} ${(i/(pts.length-1))*w} ${p}`).join(' ');
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
      <path d={path} stroke={up ? L.pos : L.neg} strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

window.ScreenInvestments = ScreenInvestments;
