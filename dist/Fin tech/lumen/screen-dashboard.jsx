// Dashboard — Lumen home screen
function ScreenDashboard() {
  return (
    <div style={{ height: '100%', overflow: 'hidden', position: 'relative' }}>
      <div style={{
        height: '100%', overflow: 'auto',
        padding: '24px 18px 130px'
      }}>
        {/* Top bar — greeting + avatar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
          <div>
            <div style={{ fontSize: 13, color: L.textDim, fontFamily: L.font, fontWeight: 500 }}>Wendsday</div>
            <div style={{ fontSize: 26, fontWeight: 600, letterSpacing: -0.5, marginTop: 2 }}>
              Good morning, <span style={{ color: L.textDim, fontWeight: 400 }}>·</span> <span style={{ fontFamily: L.serif, fontStyle: 'italic', fontWeight: 400 }}>Asha</span>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <div style={{
              width: 38, height: 38, borderRadius: '50%',
              background: 'rgba(255,255,255,0.06)', border: `1px solid ${L.hairline2}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative'
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8a6 6 0 10-12 0c0 7-3 9-3 9h18s-3-2-3-9M14 21a2 2 0 01-4 0" />
              </svg>
              <div style={{ position: 'absolute', top: 7, right: 8, width: 7, height: 7, borderRadius: '50%', background: L.magenta, boxShadow: '0 0 8px oklch(0.72 0.18 340)' }} />
            </div>
            <div style={{
              width: 38, height: 38, borderRadius: '50%',
              background: 'linear-gradient(135deg, oklch(0.50 0.15 320), oklch(0.40 0.10 250))',
              border: '1px solid rgba(255,255,255,0.18)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 13, fontWeight: 600, color: '#fff'
            }}>AK</div>
          </div>
        </div>

        {/* Search bar — HIG: visible on home */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 8,
          padding: '10px 14px', borderRadius: 12, marginBottom: 18,
          background: 'rgba(255,255,255,0.06)',
          border: `1px solid ${L.hairline}`,
          minHeight: 44
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={L.textDim} strokeWidth="1.6" strokeLinecap="round"><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.5-4.5" /></svg>
          <span style={{ fontSize: 16, color: L.textDim, flex: 1, fontWeight: 400 }}>Ask Lumen or search</span>
          <span style={{ fontSize: 11, padding: '2px 6px', borderRadius: 5, background: 'rgba(255,255,255,0.10)', color: L.textDim, fontFamily: L.mono }}>⌘K</span>
        </div>

        {/* Hero balance card */}
        <div style={{
          position: 'relative', borderRadius: 28, padding: 22,
          background: 'linear-gradient(140deg, rgba(20,24,40,0.9) 0%, rgba(28,18,40,0.85) 50%, rgba(15,18,28,0.95) 100%)',
          border: `1px solid ${L.hairline2}`,
          boxShadow: L.glow, overflow: 'hidden', marginBottom: 18
        }}>
          {/* holo aurora */}
          <div style={{
            position: 'absolute', top: -40, right: -40, width: 220, height: 220, borderRadius: '50%',
            background: 'radial-gradient(circle, oklch(0.74 0.16 270 / 0.55) 0%, transparent 60%)',
            filter: 'blur(20px)', pointerEvents: 'none'
          }} />
          <div style={{
            position: 'absolute', bottom: -60, left: -30, width: 200, height: 200, borderRadius: '50%',
            background: 'radial-gradient(circle, oklch(0.84 0.13 200 / 0.35) 0%, transparent 60%)',
            filter: 'blur(20px)', pointerEvents: 'none'
          }} />

          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
              <span style={{ fontSize: 11, fontFamily: L.mono, letterSpacing: 1, color: L.textDim, textTransform: 'uppercase' }}>
                Net worth · all accounts
              </span>
              <span style={{
                fontFamily: L.mono, color: L.textDim, padding: '3px 7px',
                borderRadius: 100, border: `1px solid ${L.hairline2}`, fontSize: "12px"
              }}>USD ▾</span>
            </div>
            <Money amount={284507.42} size={44} weight={500} />
            <div style={{ display: 'flex', gap: 8, marginTop: 10, alignItems: 'center' }}>
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: 4,
                fontSize: 12, fontWeight: 500, color: L.pos, fontFamily: L.mono,
                padding: '3px 8px', borderRadius: 100, background: 'oklch(0.80 0.17 155 / 0.12)',
                border: '1px solid oklch(0.80 0.17 155 / 0.25)'
              }}>
                <svg width="9" height="9" viewBox="0 0 10 10"><path d="M5 1l4 5H6v3H4V6H1l4-5z" fill="currentColor" /></svg>
                +$3,212.08
              </span>
              <span style={{ fontSize: 12, color: L.textDim }}>+1.14% this week</span>
            </div>

            {/* AI prediction — gradient hairline + serif accent */}
            <div style={{
              marginTop: 18, padding: '12px 14px', borderRadius: 16,
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.08)',
              display: 'flex', gap: 12, alignItems: 'flex-start'
            }}>
              <HoloOrb size={28} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 10, color: L.textDim, fontFamily: L.mono, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 3 }}>
                  Lumen forecast · 30 days
                </div>
                <div style={{ fontSize: 16, lineHeight: 1.4, color: L.text }}>
                  On pace to clear <span style={{ fontFamily: L.serif, fontStyle: 'italic', fontSize: 18, color: L.cyan }}>$291k</span> by month-end if grocery spend stays flat.
                </div>
                <div style={{ display: 'flex', gap: 16, marginTop: 8 }}>
                  <a style={{ fontSize: 13, color: L.cyan, fontWeight: 500 }}>Why?</a>
                  <a style={{ fontSize: 13, color: L.textDim, fontWeight: 500 }}>Dismiss</a>
                </div>
              </div>
            </div>

            {/* quick actions */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8, marginTop: 16 }}>
              {[
              { l: 'Send', i: <path d="M3 11l18-8-7 18-2-8-9-2z" /> },
              { l: 'Request', i: <path d="M12 5v14M5 12l7-7 7 7" /> },
              { l: 'Convert', i: <path d="M7 7h13l-3-3M17 17H4l3 3" /> },
              { l: 'Top up', i: <path d="M12 5v14M5 12h14" /> }].
              map((a) =>
              <button key={a.l} style={{
                background: 'rgba(255,255,255,0.05)',
                border: `1px solid ${L.hairline}`,
                borderRadius: 14, padding: '10px 4px',
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
                color: L.text, cursor: 'pointer'
              }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">{a.i}</svg>
                  <span style={{ fontSize: 11, fontWeight: 500 }}>{a.l}</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* AI Insights carousel preview */}
        <SectionLabel action="See all →">AI Insights · 3 new</SectionLabel>
        <div style={{ display: 'flex', gap: 10, overflowX: 'auto', marginRight: -18, paddingRight: 18, marginBottom: 22, scrollbarWidth: 'none' }}>
          <InsightCard
            tag="Save"
            color={L.cyan}
            title="Cancel two unused subs"
            body="Streaming + cloud you haven't opened in 60 days."
            value="$48/mo" />
          
          <InsightCard
            tag="Earn"
            color={L.violet}
            title="Move idle cash"
            body="$12.4k in checking · 4.6% APY available."
            value="+$571/yr" />
          
          <InsightCard
            tag="Watch"
            color={L.warn}
            title="Energy bill trending up"
            body="Currently +18% vs last month."
            value="$214" />
          
        </div>

        {/* Accounts strip */}
        <SectionLabel action="Manage →">Accounts</SectionLabel>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 22 }}>
          <AccountRow name="Everyday" sub="•• 4421" amount={12428.10} pct={4.4} />
          <AccountRow name="High-yield Reserve" sub="•• 8829 · 4.62% APY" amount={64210.55} pct={61.0} accent={L.cyan} />
          <AccountRow name="Brokerage" sub="•• INV-204" amount={207868.77} pct={null} accent={L.violet} chartTrend />
        </div>

        {/* Recent activity teaser */}
        <SectionLabel action="View →">Recent</SectionLabel>
        <Glass padding={0} radius={20}>
          {[
          { l: 'Tartine Bakery', s: 'Today · Dining', a: -18.40, cat: '🍞', auto: false },
          { l: 'Apple', s: 'Today · iCloud+', a: -2.99, cat: 'IC', auto: true },
          { l: 'Payroll · Stripe', s: 'Yesterday · Income', a: 6841.20, cat: 'IN', auto: false }].
          map((t, i, arr) =>
          <div key={i} style={{
            display: 'flex', alignItems: 'center', gap: 12, padding: '14px 14px',
            borderBottom: i < arr.length - 1 ? `1px solid ${L.hairline}` : 'none'
          }}>
              <div style={{
              width: 36, height: 36, borderRadius: 11,
              background: t.a > 0 ? 'oklch(0.80 0.17 155 / 0.15)' : 'rgba(255,255,255,0.06)',
              border: `1px solid ${L.hairline}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 12, fontWeight: 600, color: t.a > 0 ? L.pos : L.textDim
            }}>{t.cat}</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span style={{ fontSize: 14, fontWeight: 500, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{t.l}</span>
                  {t.auto && <AIChip>Auto</AIChip>}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 2, flexWrap: 'wrap' }}>
                  <span style={{ fontSize: 11, color: L.textDim }}>{t.s}</span>
                </div>
              </div>
              <div style={{
              fontFamily: L.mono, fontSize: 14, fontWeight: 500,
              color: t.a > 0 ? L.pos : L.text
            }}>
                {t.a > 0 ? '+' : '−'}${Math.abs(t.a).toFixed(2)}
              </div>
            </div>
          )}
        </Glass>
      </div>

      <TabBar active="home" />
    </div>);

}

function InsightCard({ tag, color, title, body, value }) {
  return (
    <div style={{
      flex: '0 0 230px', borderRadius: 22, padding: 16,
      background: 'linear-gradient(160deg, rgba(255,255,255,0.05), rgba(255,255,255,0.015))',
      border: `1px solid ${L.hairline2}`,
      position: 'relative', overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 1,
        background: `linear-gradient(90deg, transparent, ${color}, transparent)`, opacity: 0.6
      }} />
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
        <span style={{
          fontSize: 10, fontFamily: L.mono, letterSpacing: 1, textTransform: 'uppercase',
          color, padding: '2px 7px', borderRadius: 100,
          border: `1px solid ${color}`, background: `color-mix(in oklch, ${color} 12%, transparent)`
        }}>{tag}</span>
        <span style={{ fontFamily: L.mono, fontSize: 13, fontWeight: 600, color: L.text }}>{value}</span>
      </div>
      <div style={{ fontSize: 14, fontWeight: 500, lineHeight: 1.3, marginBottom: 4 }}>{title}</div>
      <div style={{ fontSize: 12, color: L.textDim, lineHeight: 1.4 }}>{body}</div>
    </div>);

}

function AccountRow({ name, sub, amount, pct, accent, chartTrend }) {
  return (
    <div style={{
      borderRadius: 18, padding: '14px 16px',
      background: 'linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.015))',
      border: `1px solid ${L.hairline}`,
      display: 'flex', alignItems: 'center', gap: 14
    }}>
      <div style={{
        width: 38, height: 38, borderRadius: 12, position: 'relative',
        background: accent ? `linear-gradient(135deg, ${accent}, oklch(0.40 0.10 250))` : 'linear-gradient(135deg, rgba(255,255,255,0.10), rgba(255,255,255,0.02))',
        border: '1px solid rgba(255,255,255,0.12)'
      }} />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 14, fontWeight: 500, width: "115px" }}>{name}</div>
        <div style={{ fontSize: 11, color: L.textDim, fontFamily: L.mono, marginTop: 2, width: "140px" }}>{sub}</div>
      </div>
      {chartTrend ?
      <svg width="48" height="22" viewBox="0 0 48 22" style={{ marginRight: 6 }}>
          <path d="M0 16 L8 12 L16 14 L24 8 L32 10 L40 5 L48 7" stroke={L.cyan} strokeWidth="1.4" fill="none" strokeLinecap="round" />
        </svg> :
      pct != null ?
      <span style={{ fontSize: 11, color: L.textDim, fontFamily: L.mono, marginRight: 6 }}>
          {pct.toFixed(1)}%
        </span> :
      null}
      <div style={{ fontFamily: L.mono, fontSize: 14, fontWeight: 500 }}>
        ${amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
      </div>
    </div>);

}

window.ScreenDashboard = ScreenDashboard;