// Lumen v2 — revised screens following HIG critique
const { useState: useV2State } = React;

// ──────────────────────────────────────────────────────────────
// HOME — merged dashboard + insights, native nav, 17pt body
// ──────────────────────────────────────────────────────────────
function HomeV2() {
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: '#0a0b10' }}>
      {/* Large title nav (iOS canonical) — 59pt safe area */}
      <div style={{ paddingTop: 56, paddingLeft: 20, paddingRight: 20, paddingBottom: 8, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
        <div>
          <div style={{ fontSize: 13, color: 'rgba(240,241,246,0.55)', fontWeight: 500 }}>Wednesday, May 8</div>
          <div style={{ fontSize: 34, fontWeight: 700, letterSpacing: 0.4, lineHeight: 1.1, color: '#f0f1f6', marginTop: 2 }}>Home</div>
        </div>
        <button style={{ width: 36, height: 36, borderRadius: '50%', background: 'rgba(255,255,255,0.08)', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
          <Sym name="bell" size={18} color="#f0f1f6"/>
        </button>
      </div>

      {/* Pull-to-search affordance — visible search bar (HIG) */}
      <div style={{ padding: '6px 16px 12px' }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 8,
          padding: '10px 12px', borderRadius: 10,
          background: 'rgba(255,255,255,0.08)',
        }}>
          <Sym name="magnifyingglass" size={16} color="rgba(240,241,246,0.55)"/>
          <span style={{ fontSize: 17, color: 'rgba(240,241,246,0.55)', fontWeight: 400, flex: 1 }}>Ask Lumen or search</span>
          <span style={{ fontSize: 11, padding: '2px 6px', borderRadius: 4, background: 'rgba(255,255,255,0.10)', color: 'rgba(240,241,246,0.55)', fontFamily: L2.mono }}>⌘K</span>
        </div>
      </div>

      <div style={{ flex: 1, overflow: 'auto', padding: '0 16px 110px' }}>
        {/* Net worth card — solid surface, no glass */}
        <div style={{
          background: 'linear-gradient(180deg, #1a1f30 0%, #14182a 100%)',
          borderRadius: 16, padding: 20,
          border: '0.5px solid rgba(255,255,255,0.08)',
        }}>
          <div style={{ fontSize: 13, color: 'rgba(240,241,246,0.55)', fontWeight: 500 }}>Net worth</div>
          <div style={{ display: 'flex', alignItems: 'baseline', marginTop: 4, color: '#f0f1f6' }}>
            <span style={{ fontSize: 22, fontWeight: 400, color: 'rgba(240,241,246,0.55)' }}>$</span>
            <span style={{ fontSize: 40, fontWeight: 600, letterSpacing: -1, fontFeatureSettings: '"tnum"' }}>284,507</span>
            <span style={{ fontSize: 22, fontWeight: 400, color: 'rgba(240,241,246,0.55)' }}>.42</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 6 }}>
            <Sym name="arrow.up" size={13} color={L2.pos}/>
            <span style={{ fontSize: 15, color: L2.pos, fontWeight: 600, fontFamily: L2.mono }}>$3,212.08</span>
            <span style={{ fontSize: 15, color: 'rgba(240,241,246,0.55)' }}>this week</span>
          </div>
        </div>

        {/* AI insight card — solid, with reasoning disclosure */}
        <div style={{
          background: '#181b27', borderRadius: 16, padding: 16, marginTop: 12,
          border: '0.5px solid rgba(255,255,255,0.06)',
        }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
            <HoloOrb size={28}/>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: L2.cyan, letterSpacing: 0.2 }}>LUMEN INSIGHT</div>
              <div style={{ fontSize: 17, lineHeight: 1.35, color: '#f0f1f6', marginTop: 4 }}>
                You'll likely clear $291k by month-end if grocery spend stays flat.
              </div>
              <div style={{ fontSize: 13, color: 'rgba(240,241,246,0.55)', marginTop: 8 }}>
                Based on payroll on the 15th, no large outflows scheduled, and historical Oct→May trend.
              </div>
              <div style={{ display: 'flex', gap: 16, marginTop: 12 }}>
                <a style={{ fontSize: 15, color: L2.cyan, fontWeight: 500 }}>See reasoning</a>
                <a style={{ fontSize: 15, color: 'rgba(240,241,246,0.55)', fontWeight: 500 }}>Dismiss</a>
              </div>
            </div>
          </div>
        </div>

        {/* Quick actions — proper 44pt hit targets */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8, marginTop: 16 }}>
          {[
            { l: 'Send',     i: 'arrow.up' },
            { l: 'Request',  i: 'arrow.down' },
            { l: 'Convert',  i: 'sliders' },
            { l: 'Top up',   i: 'plus' },
          ].map(a => (
            <button key={a.l} style={{
              minHeight: 64, background: '#181b27', border: '0.5px solid rgba(255,255,255,0.06)',
              borderRadius: 14, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 4,
              color: '#f0f1f6', cursor: 'pointer', fontFamily: L2.font,
            }}>
              <Sym name={a.i} size={22} color={L2.cyan}/>
              <span style={{ fontSize: 13, fontWeight: 500 }}>{a.l}</span>
            </button>
          ))}
        </div>

        <GroupedHeader action="See all">Recent activity</GroupedHeader>
        <Card padding={0} radius={14}>
          {[
            { l: 'Tartine Bakery', s: 'Today · Dining',     a: -18.40 },
            { l: 'iCloud+',        s: 'Today · Subscription', a: -2.99 },
            { l: 'Stripe Payroll', s: 'Yesterday · Income', a: 6841.20 },
          ].map((t, i, arr) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: 12,
              padding: '12px 16px', minHeight: 56,
              borderBottom: i < arr.length - 1 ? '0.5px solid rgba(255,255,255,0.08)' : 'none',
            }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Sym name={t.a > 0 ? 'arrow.down' : 'creditcard'} size={16} color={t.a > 0 ? L2.pos : 'rgba(240,241,246,0.7)'}/>
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 17, fontWeight: 500, color: '#f0f1f6' }}>{t.l}</div>
                <div style={{ fontSize: 13, color: 'rgba(240,241,246,0.55)', marginTop: 1 }}>{t.s}</div>
              </div>
              <div style={{ fontFamily: L2.mono, fontSize: 17, fontWeight: 500, color: t.a > 0 ? L2.pos : '#f0f1f6' }}>
                {t.a > 0 ? '+' : '−'}${Math.abs(t.a).toFixed(2)}
              </div>
            </div>
          ))}
        </Card>
      </div>

      <TabBar2 active="home"/>
    </div>
  );
}
window.HomeV2 = HomeV2;

// ──────────────────────────────────────────────────────────────
// MONEY — merged Wallet + Payments
// ──────────────────────────────────────────────────────────────
function MoneyV2() {
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: '#0a0b10' }}>
      <div style={{ paddingTop: 56, paddingLeft: 20, paddingRight: 20, paddingBottom: 8, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
        <div style={{ fontSize: 34, fontWeight: 700, letterSpacing: 0.4, color: '#f0f1f6' }}>Money</div>
        <button style={{ width: 36, height: 36, borderRadius: '50%', background: 'rgba(255,255,255,0.08)', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Sym name="plus" size={18} color="#f0f1f6"/>
        </button>
      </div>

      {/* Segmented control (HIG) */}
      <div style={{ padding: '6px 16px 12px' }}>
        <div style={{ display: 'flex', background: 'rgba(255,255,255,0.08)', borderRadius: 9, padding: 2 }}>
          {['Cards', 'Accounts', 'Transfers'].map((s, i) => (
            <button key={s} style={{
              flex: 1, minHeight: 32, border: 'none', borderRadius: 7,
              background: i === 0 ? '#3a3d4a' : 'transparent',
              color: '#f0f1f6', fontSize: 13, fontWeight: i === 0 ? 600 : 500,
              cursor: 'pointer', fontFamily: L2.font,
            }}>{s}</button>
          ))}
        </div>
      </div>

      <div style={{ flex: 1, overflow: 'auto', padding: '8px 16px 110px' }}>
        {/* Card stack — refined */}
        <div style={{
          height: 200, borderRadius: 18, padding: 20, position: 'relative', overflow: 'hidden',
          background: 'radial-gradient(120% 100% at 0% 0%, oklch(0.40 0.18 290) 0%, transparent 60%), radial-gradient(120% 100% at 100% 100%, oklch(0.50 0.16 200) 0%, transparent 50%), linear-gradient(135deg, #1a1530 0%, #0d0f1c 100%)',
          border: '0.5px solid rgba(255,255,255,0.18)',
          display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', fontWeight: 500 }}>Lumen Signature</div>
              <div style={{ fontSize: 22, fontWeight: 600, color: '#fff', marginTop: 2 }}>Prism</div>
            </div>
            <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'conic-gradient(from 90deg, oklch(0.84 0.13 200), oklch(0.72 0.18 340), oklch(0.74 0.16 270), oklch(0.84 0.13 200))', position: 'relative' }}>
              <div style={{ position: 'absolute', inset: 4, borderRadius: '50%', background: 'rgba(13,15,28,0.8)' }}/>
            </div>
          </div>
          <div>
            <div style={{ fontFamily: L2.mono, fontSize: 18, letterSpacing: 4, color: '#fff', fontWeight: 500 }}>•••• 4421</div>
            <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', marginTop: 8 }}>Asha Khatri · 09/28</div>
          </div>
        </div>

        <GroupedHeader>Accounts</GroupedHeader>
        <Card padding={0} radius={14}>
          {[
            { n: 'Everyday Checking', s: '$12,428.10', sub: '4421' },
            { n: 'Reserve · 4.62%',   s: '$64,210.55', sub: 'Auto-saved · AI' },
            { n: 'Tax Vault',         s: '$18,402.00', sub: '24% of income' },
            { n: 'Brokerage',         s: '$207,868.77', sub: 'INV-204' },
          ].map((a, i, arr) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: 12,
              padding: '12px 16px', minHeight: 56,
              borderBottom: i < arr.length - 1 ? '0.5px solid rgba(255,255,255,0.08)' : 'none',
            }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 17, fontWeight: 500, color: '#f0f1f6' }}>{a.n}</div>
                <div style={{ fontSize: 13, color: 'rgba(240,241,246,0.55)', marginTop: 1 }}>{a.sub}</div>
              </div>
              <div style={{ fontFamily: L2.mono, fontSize: 17, fontWeight: 500, color: '#f0f1f6' }}>{a.s}</div>
              <Sym name="chevron" size={14} color="rgba(240,241,246,0.35)"/>
            </div>
          ))}
        </Card>
      </div>
      <TabBar2 active="money"/>
    </div>
  );
}
window.MoneyV2 = MoneyV2;

// ──────────────────────────────────────────────────────────────
// SPOTLIGHT-AI — pull-down overlay from any screen
// ──────────────────────────────────────────────────────────────
function SpotlightV2() {
  return (
    <div style={{ height: '100%', position: 'relative', background: '#0a0b10' }}>
      {/* Behind-screen blur ghost */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.4 }}>
        <HomeV2/>
      </div>
      {/* Spotlight overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'rgba(10,11,16,0.78)',
        backdropFilter: 'blur(36px) saturate(160%)',
        WebkitBackdropFilter: 'blur(36px) saturate(160%)',
        display: 'flex', flexDirection: 'column',
      }}>
        {/* Search bar */}
        <div style={{ paddingTop: 60, paddingLeft: 16, paddingRight: 16, paddingBottom: 12, display: 'flex', gap: 8, alignItems: 'center' }}>
          <div style={{
            flex: 1, display: 'flex', alignItems: 'center', gap: 10,
            padding: '12px 14px', borderRadius: 12,
            background: 'rgba(255,255,255,0.10)',
            border: '0.5px solid rgba(255,255,255,0.15)',
          }}>
            <HoloOrb size={20}/>
            <span style={{ fontSize: 17, color: '#f0f1f6', flex: 1 }}>Can I afford a $4k trip to Tokyo in March?<span style={{ display: 'inline-block', width: 2, height: 18, background: L2.cyan, marginLeft: 2, verticalAlign: 'middle', animation: 'lumenPulse 1s infinite' }}/></span>
            <Sym name="xmark" size={16} color="rgba(240,241,246,0.55)"/>
          </div>
          <button style={{ background: 'transparent', border: 'none', color: L2.cyan, fontSize: 17, fontWeight: 500, cursor: 'pointer' }}>Cancel</button>
        </div>

        <div style={{ flex: 1, overflow: 'auto', padding: '0 16px' }}>
          {/* AI streaming response */}
          <div style={{ padding: '12px 4px' }}>
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: 1.2, color: L2.cyan, textTransform: 'uppercase' }}>Lumen · thinking</div>
            <div style={{ fontSize: 22, lineHeight: 1.3, color: '#f0f1f6', marginTop: 8, fontWeight: 400 }}>
              Yes — comfortably. Here's the projection.
            </div>
          </div>

          <Card padding={16} radius={14} style={{ background: '#181b27' }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: 'rgba(240,241,246,0.55)', textTransform: 'uppercase', letterSpacing: 0.2 }}>March projection · 92% confidence</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginTop: 12 }}>
              {[
                { l: 'Cash on hand', v: '$14,820', c: L2.pos },
                { l: 'Trip cost', v: '−$4,000', c: L2.neg },
                { l: 'Reserve buffer', v: '$10,820', c: '#f0f1f6' },
                { l: 'Goals impact', v: 'None', c: L2.cyan },
              ].map(s => (
                <div key={s.l}>
                  <div style={{ fontSize: 13, color: 'rgba(240,241,246,0.55)' }}>{s.l}</div>
                  <div style={{ fontSize: 20, fontWeight: 600, color: s.c, fontFamily: L2.mono, marginTop: 2 }}>{s.v}</div>
                </div>
              ))}
            </div>
          </Card>

          <div style={{ marginTop: 16, fontSize: 13, fontWeight: 600, color: 'rgba(240,241,246,0.55)', textTransform: 'uppercase', letterSpacing: 0.2 }}>Suggested actions</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 1, marginTop: 8, background: '#181b27', borderRadius: 14, overflow: 'hidden' }}>
            {[
              { l: 'Lock today\'s FX rate (¥)', s: 'Saves ~$84' },
              { l: 'Build a savings plan',      s: '$285/wk × 14 weeks' },
              { l: 'Compare alternative dates', s: 'Apr is 18% cheaper' },
            ].map((a, i, arr) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', padding: '14px 16px', minHeight: 56,
                borderBottom: i < arr.length - 1 ? '0.5px solid rgba(255,255,255,0.06)' : 'none',
              }}>
                <Sym name="sparkle" size={18} color={L2.cyan}/>
                <div style={{ flex: 1, marginLeft: 12 }}>
                  <div style={{ fontSize: 17, fontWeight: 500, color: '#f0f1f6' }}>{a.l}</div>
                  <div style={{ fontSize: 13, color: 'rgba(240,241,246,0.55)', marginTop: 1 }}>{a.s}</div>
                </div>
                <Sym name="chevron" size={14} color="rgba(240,241,246,0.35)"/>
              </div>
            ))}
          </div>
        </div>

        <div style={{ padding: '10px 16px 30px', borderTop: '0.5px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ fontSize: 13, color: 'rgba(240,241,246,0.55)', flex: 1 }}>Lumen never moves money without confirmation.</span>
          <Sym name="lock" size={14} color="rgba(240,241,246,0.55)"/>
        </div>
      </div>
    </div>
  );
}
window.SpotlightV2 = SpotlightV2;

// ──────────────────────────────────────────────────────────────
// SEND SHEET — modal with proper Cancel/Send + decimalPad
// ──────────────────────────────────────────────────────────────
function SendSheetV2() {
  return (
    <div style={{ height: '100%', position: 'relative', background: '#0a0b10' }}>
      {/* Dimmed home behind */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.3, pointerEvents: 'none' }}>
        <HomeV2/>
      </div>
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.45)' }}/>

      {/* Sheet (large detent) */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, top: 70,
        background: '#13161f', borderRadius: '14px 14px 0 0',
        overflow: 'hidden', display: 'flex', flexDirection: 'column',
      }}>
        {/* Grabber */}
        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 6 }}>
          <div style={{ width: 36, height: 5, borderRadius: 100, background: 'rgba(255,255,255,0.20)' }}/>
        </div>
        {/* Sheet nav bar — Cancel left, Review right (HIG canonical) */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 16px 8px' }}>
          <button style={{ background: 'transparent', border: 'none', color: L2.cyan, fontSize: 17, fontWeight: 400, cursor: 'pointer', minHeight: 44, padding: 0 }}>Cancel</button>
          <span style={{ fontSize: 17, fontWeight: 600, color: '#f0f1f6' }}>Send money</span>
          <button style={{ background: 'transparent', border: 'none', color: L2.cyan, fontSize: 17, fontWeight: 600, cursor: 'pointer', minHeight: 44, padding: 0 }}>Review</button>
        </div>

        <div style={{ flex: 1, overflow: 'auto', padding: '8px 16px 12px' }}>
          {/* Recipient row */}
          <div style={{ background: '#181b27', borderRadius: 12, padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 12, minHeight: 56 }}>
            <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'linear-gradient(135deg, oklch(0.55 0.14 290), oklch(0.30 0.06 280))', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 600 }}>MT</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, color: 'rgba(240,241,246,0.55)' }}>To</div>
              <div style={{ fontSize: 17, fontWeight: 500, color: '#f0f1f6' }}>Mika Tanaka 🇯🇵</div>
            </div>
            <Sym name="chevron" size={14} color="rgba(240,241,246,0.35)"/>
          </div>

          {/* Amount display — clearly editable, with cursor */}
          <div style={{ textAlign: 'center', padding: '32px 0 22px' }}>
            <div style={{ fontSize: 13, color: 'rgba(240,241,246,0.55)', fontWeight: 500, textTransform: 'uppercase', letterSpacing: 0.5 }}>Amount</div>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', marginTop: 8 }}>
              <span style={{ fontSize: 28, color: 'rgba(240,241,246,0.55)', fontWeight: 400 }}>$</span>
              <span style={{ fontSize: 64, fontWeight: 600, letterSpacing: -2, lineHeight: 1, fontFeatureSettings: '"tnum"', color: '#f0f1f6' }}>420</span>
              <span style={{ display: 'inline-block', width: 3, height: 56, background: L2.cyan, marginLeft: 4, animation: 'lumenPulse 1.1s infinite' }}/>
            </div>
            <div style={{ fontSize: 15, color: 'rgba(240,241,246,0.55)', marginTop: 8 }}>≈ ¥62,710 · live FX</div>
          </div>

          {/* From */}
          <div style={{ background: '#181b27', borderRadius: 12, padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 12, minHeight: 56 }}>
            <div style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Sym name="creditcard" size={16} color="rgba(240,241,246,0.7)"/>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, color: 'rgba(240,241,246,0.55)' }}>From</div>
              <div style={{ fontSize: 17, fontWeight: 500, color: '#f0f1f6' }}>Everyday · 4421</div>
            </div>
            <Sym name="chevron" size={14} color="rgba(240,241,246,0.35)"/>
          </div>

          {/* Reasoning disclosure for AI */}
          <div style={{ marginTop: 10, padding: '10px 14px', background: 'rgba(255,255,255,0.04)', borderRadius: 12, display: 'flex', alignItems: 'flex-start', gap: 10 }}>
            <Sym name="sparkle" size={16} color={L2.cyan}/>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 15, fontWeight: 500, color: '#f0f1f6' }}>Wise rail · arrives in 11 min</div>
              <div style={{ fontSize: 13, color: 'rgba(240,241,246,0.55)', marginTop: 1 }}>Saves $14.20 vs SWIFT. <a style={{ color: L2.cyan, fontWeight: 500 }}>Why this rail?</a></div>
            </div>
          </div>
        </div>

        {/* Decimal keypad — system style */}
        <Keypad/>

        <div style={{ padding: '10px 16px 30px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
          <Sym name="lock" size={12} color="rgba(240,241,246,0.55)"/>
          <span style={{ fontSize: 12, color: 'rgba(240,241,246,0.55)' }}>Confirm with Face ID on the next step</span>
        </div>
      </div>
    </div>
  );
}
window.SendSheetV2 = SendSheetV2;

function Keypad() {
  const keys = [['1','2','3'],['4','5','6'],['7','8','9'],['.','0','⌫']];
  return (
    <div style={{ background: '#1a1d28', padding: '8px 4px 4px' }}>
      {keys.map((row, i) => (
        <div key={i} style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 4, marginBottom: 4 }}>
          {row.map(k => (
            <button key={k} style={{
              minHeight: 46, background: '#3a3d4a', border: 'none', borderRadius: 6,
              fontSize: 24, fontWeight: 400, color: '#f0f1f6', cursor: 'pointer',
              fontFamily: L2.font,
            }}>{k}</button>
          ))}
        </div>
      ))}
    </div>
  );
}

// ──────────────────────────────────────────────────────────────
// TYPE SYSTEM SPEC
// ──────────────────────────────────────────────────────────────
function TypeSpecV2() {
  const sizes = [
    { n: 'Large Title',  s: 34, w: 700, ex: 'Home' },
    { n: 'Title 1',      s: 28, w: 600, ex: '$284,507' },
    { n: 'Title 2',      s: 22, w: 600, ex: 'Section heading' },
    { n: 'Title 3',      s: 20, w: 500, ex: 'Card heading' },
    { n: 'Headline',     s: 17, w: 600, ex: 'Tartine Bakery' },
    { n: 'Body',         s: 17, w: 400, ex: 'You\'ll likely clear $291k.' },
    { n: 'Callout',      s: 16, w: 400, ex: 'Subheading text' },
    { n: 'Subhead',      s: 15, w: 400, ex: 'Today · Dining' },
    { n: 'Footnote',     s: 13, w: 500, ex: 'LUMEN INSIGHT' },
    { n: 'Caption 1',    s: 12, w: 400, ex: 'metadata · 92% confidence' },
  ];
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: '#0a0b10' }}>
      <div style={{ paddingTop: 56, paddingLeft: 20, paddingRight: 20, paddingBottom: 16 }}>
        <div style={{ fontSize: 13, color: 'rgba(240,241,246,0.55)', fontWeight: 500 }}>Lumen · v2 design</div>
        <div style={{ fontSize: 34, fontWeight: 700, letterSpacing: 0.4, color: '#f0f1f6', marginTop: 2 }}>Type system</div>
        <div style={{ fontSize: 15, color: 'rgba(240,241,246,0.55)', marginTop: 4 }}>iOS-aligned · Geist + Geist Mono · 17pt body register</div>
      </div>
      <div style={{ flex: 1, overflow: 'auto', padding: '0 16px 110px' }}>
        <Card padding={0} radius={14}>
          {sizes.map((t, i, arr) => (
            <div key={t.n} style={{
              display: 'flex', alignItems: 'center', padding: '14px 16px',
              borderBottom: i < arr.length - 1 ? '0.5px solid rgba(255,255,255,0.08)' : 'none',
              gap: 12,
            }}>
              <div style={{ width: 86, fontSize: 12, color: 'rgba(240,241,246,0.55)', fontFamily: L2.mono }}>
                <div>{t.n}</div>
                <div style={{ fontSize: 11, marginTop: 2 }}>{t.s}/{t.w}</div>
              </div>
              <div style={{ flex: 1, fontSize: t.s, fontWeight: t.w, color: '#f0f1f6', fontFamily: L2.font, lineHeight: 1.2 }}>{t.ex}</div>
            </div>
          ))}
        </Card>

        <GroupedHeader>Hit targets · 44pt min</GroupedHeader>
        <Card padding={16} radius={14}>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <div style={{ width: 44, height: 44, borderRadius: 10, background: L2.cyan, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0a0b10', fontFamily: L2.mono, fontSize: 11, fontWeight: 600 }}>44</div>
            <div style={{ width: 56, height: 56, borderRadius: 12, background: '#3a3d4a', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#f0f1f6', fontFamily: L2.mono, fontSize: 11 }}>56</div>
            <div style={{ width: 64, height: 64, borderRadius: 14, background: '#3a3d4a', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#f0f1f6', fontFamily: L2.mono, fontSize: 11 }}>64</div>
            <div style={{ flex: 1, fontSize: 13, color: 'rgba(240,241,246,0.55)' }}>Buttons, list rows, tab bar items — never below 44.</div>
          </div>
        </Card>

        <GroupedHeader>Color & contrast</GroupedHeader>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 8 }}>
          {[
            { n: 'Text · primary',  c: '#f0f1f6', r: '15.4:1' },
            { n: 'Text · secondary', c: 'rgba(240,241,246,0.55)', r: '5.8:1' },
            { n: 'Cyan · accent',   c: L2.cyan, r: '9.1:1' },
            { n: 'Pos · success',   c: L2.pos, r: '7.4:1' },
          ].map(s => (
            <Card key={s.n} padding={12} radius={12}>
              <div style={{ width: '100%', height: 28, borderRadius: 6, background: s.c, marginBottom: 6 }}/>
              <div style={{ fontSize: 13, fontWeight: 500, color: '#f0f1f6' }}>{s.n}</div>
              <div style={{ fontSize: 11, color: 'rgba(240,241,246,0.55)', fontFamily: L2.mono, marginTop: 1 }}>{s.r}</div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
window.TypeSpecV2 = TypeSpecV2;
