import { useState, useRef, useEffect, useCallback } from 'react';
import { DATA, Lang, LangData, Project } from './portfolioData';
import { STACK_ICONS } from './StackIcons';

// ── Color constants ──────────────────────────────────────────────────────────

const C = {
  bg: '#151517',
  panel: '#1c1c20',
  panel2: '#232328',
  ink: '#e8e8ea',
  muted: '#7a7a82',
  dim: '#3a3a42',
  line: 'rgba(255,255,255,0.07)',
  accent: '#4b3bff',
  accent2: '#d4fb3c',
  mono: "'JetBrains Mono', ui-monospace, 'SF Mono', Menlo, monospace",
  sans: "'Geist', -apple-system, system-ui, sans-serif",
} as const;

// ── Tiny shared components ────────────────────────────────────────────────────

function MacDots() {
  return (
    <div style={{ display: 'flex', gap: 6, marginRight: 6 }}>
      {(['#ff5f57', '#febc2e', '#28c840'] as const).map((bg, i) => (
        <i key={i} style={{ width: 10, height: 10, borderRadius: '50%', background: bg, display: 'block' }} />
      ))}
    </div>
  );
}

function Equalizer() {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'flex-end', gap: 3, height: 18 }}>
      {[40, 90, 60, 75].map((h, i) => (
        <i key={i} className="p-eq-bar" style={{ height: `${h}%` }} />
      ))}
    </span>
  );
}

function Ln({ n }: { n: number }) {
  return <span style={{ color: C.dim, userSelect: 'none', display: 'inline-block', width: 22, textAlign: 'right', marginRight: 14 }}>{n}</span>;
}
function Kw({ c }: { c: React.ReactNode }) { return <span style={{ color: '#c77dff' }}>{c}</span>; }
function Str({ c }: { c: React.ReactNode }) { return <span style={{ color: C.accent2 }}>{c}</span>; }
function Fn({ c }: { c: React.ReactNode }) { return <span style={{ color: '#ff8a4c' }}>{c}</span>; }
function Com({ c }: { c: React.ReactNode }) { return <span style={{ color: C.muted }}>{c}</span>; }

function CodeBlock({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <div style={{
      background: C.panel, border: `1px solid ${C.line}`, borderRadius: 6,
      padding: '14px 18px', fontSize: 12.5, lineHeight: 1.75, color: C.ink,
      overflowX: 'auto', fontFamily: C.mono,
      ...style,
    }}>
      {children}
    </div>
  );
}

function SectionHead({ title, ext, meta }: { title: string; ext: string; meta: string }) {
  return (
    <div className="p-section-head" style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', paddingBottom: 12, borderBottom: `1px solid ${C.line}`, marginBottom: 16 }}>
      <h2 style={{ fontFamily: C.sans, fontSize: 28, fontWeight: 500, letterSpacing: '-0.02em', margin: 0, color: C.ink, lineHeight: 1.5 }}><span style={{ color: C.muted, fontWeight: 400 }}>./</span>{title}<span style={{ color: C.muted, fontWeight: 400 }}>{ext}</span></h2>
      <div className="p-section-meta" style={{ fontSize: 11, color: C.muted }}>{meta}</div>
    </div>
  );
}

// ── README section ────────────────────────────────────────────────────────────

function ReadmeSection({ d }: { d: LangData }) {
  return (
    <section id="readme" style={{ scrollMarginTop: 60 }}>
      <div className="p-readme-marker" style={{ fontSize: 11, color: C.muted, marginBottom: 14, fontFamily: C.mono }}>
        <b style={{ color: C.muted, fontWeight: 500 }}>{d.secMarker}</b>
      </div>

      <div className="p-readme-head" style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 30, alignItems: 'start' }}>
        <div>
          <h1 style={{ fontFamily: C.sans, fontSize: 'clamp(38px, 6vw, 56px)', fontWeight: 500, letterSpacing: '-0.03em', lineHeight: 1, margin: '0 0 14px', color: C.ink }}>
            {d.h1Line1}<br />
            <span style={{ color: C.accent2 }}>{d.h1Line2}</span>
          </h1>
          <p style={{ fontFamily: C.sans, fontSize: 18, lineHeight: 1.55, color: C.ink, maxWidth: 620, margin: 0, whiteSpace: 'pre-line' }}>
            {d.lede}
          </p>
          <a href="https://t.me/annademeshko" target="_blank" rel="noopener" className="p-tg-cta">
            <svg width={14} height={14} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M9.78 15.28l-.4 4.04c.57 0 .81-.24 1.11-.53l2.66-2.54 5.52 4.04c1.01.56 1.73.27 2-.94l3.63-17c.35-1.52-.55-2.11-1.53-1.75L1.5 9.34C.02 9.93.04 10.77 1.25 11.14l5.62 1.75 13.06-8.23c.61-.41 1.17-.18.71.22L9.78 15.28z" />
            </svg>
            {d.ctaTelegram}
            <span>↗</span>
          </a>
        </div>

        <div style={{ border: `1px solid ${C.line}`, background: C.panel, padding: '14px 16px', borderRadius: 4, minWidth: 240 }}>
          {Object.entries(d.stats).map(([k, v], i, arr) => (
            <div key={k} style={{ display: 'flex', justifyContent: 'space-between', gap: 16, fontSize: 11, padding: '4px 0', borderBottom: i < arr.length - 1 ? `1px dashed ${C.line}` : 'none' }}>
              <span style={{ color: C.muted }}>{k}</span>
              <span style={{ color: C.ink, textAlign: 'right' }}>{v}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginTop: 32 }}>
        <CodeBlock style={{ padding: '14px 16px' }}>
          <div><Ln n={1} /><Com c={d.codeComment} /></div>
          <div><Ln n={2} /><Kw c="export const" /> strengths = [</div>
          {d.codeStrengths.map((s, i) => (
            <div key={i}><Ln n={i + 3} />&nbsp;&nbsp;<Str c={`'${s}'`} />,</div>
          ))}
          <div><Ln n={d.codeStrengths.length + 3} />];</div>
          <div><Ln n={d.codeStrengths.length + 4} />&nbsp;</div>
          <div>
            <Ln n={d.codeStrengths.length + 5} />
            <Kw c="const" /> <Fn c={d.codeTodayLabel} /> = () =&gt; <Str c={`'${d.codeToday}'`} />;
          </div>
        </CodeBlock>
      </div>
    </section>
  );
}

// ── Projects section ──────────────────────────────────────────────────────────

function ProjectRow({ p, idx, onOpenCase }: { p: Project; idx: number; onOpenCase: (id: string) => void }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      key={p.id}
      id={p.id}
      className="p-proj"
      onClick={() => onOpenCase(p.id)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{ fontSize: 11, color: C.muted, fontVariantNumeric: 'tabular-nums', fontFamily: C.mono }}>
        {String(idx + 1).padStart(2, '0')}
      </div>
      <div style={{ minWidth: 0 }}>
        <div style={{ fontFamily: C.sans, fontSize: 19, fontWeight: 500, letterSpacing: '-0.01em', marginBottom: 3, lineHeight: 1.2, color: hovered ? C.accent2 : C.ink, transition: 'color 0.15s ease' }}>
          {p.title}<span style={{ color: C.muted, fontWeight: 400, fontFamily: C.mono, fontSize: 14 }}>.case</span>
        </div>
        <div style={{ fontSize: 11, color: C.muted, lineHeight: 1.4 }}>{p.problem}</div>
      </div>
      <div className="p-proj-tags-col" style={{ display: 'flex', gap: 4, flexWrap: 'wrap' as const }}>
        {p.tags.map(t => (
          <span key={t} style={{
            fontSize: 9, padding: '2px 6px',
            border: `1px solid ${hovered ? C.accent2 : C.line}`,
            borderRadius: 2,
            color: hovered ? C.accent2 : C.muted,
            background: hovered ? 'rgba(212,251,60,0.08)' : 'transparent',
            textTransform: 'lowercase' as const,
            fontFamily: C.mono,
            transition: 'color 0.15s ease, border-color 0.15s ease, background 0.15s ease',
          }}>
            {t}
          </span>
        ))}
      </div>
      <div style={{ fontFamily: C.sans, fontSize: 18, fontWeight: 500, letterSpacing: '-0.01em', lineHeight: 1 }}>
        <span style={{ color: C.accent2 }}>{p.metric.value}</span>
        <span style={{ display: 'block', fontFamily: C.mono, fontSize: 10, color: C.muted, fontWeight: 400, marginTop: 4 }}>{p.metric.label}</span>
      </div>
      <div
        className={`pv-${p.cover}`}
        style={{
          width: 74, height: 46, borderRadius: 3,
          border: `1px solid ${hovered ? C.accent2 : C.line}`,
          position: 'relative' as const, overflow: 'hidden', flexShrink: 0,
          transform: hovered ? 'scale(1.05)' : 'scale(1)',
          transition: 'transform 0.2s ease, border-color 0.2s ease',
        }}
      />
    </button>
  );
}

function ProjectsSection({ d, onOpenCase }: { d: LangData; onOpenCase: (id: string) => void }) {
  return (
    <section id="projects" style={{ scrollMarginTop: 60 }}>
      <SectionHead title={d.secProjectsTitle} ext="/" meta={d.secProjectsMeta.replace('%d', String(d.projects.length))} />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {d.projects.map((p, i) => (
          <ProjectRow key={p.id} p={p} idx={i} onOpenCase={onOpenCase} />
        ))}
      </div>
    </section>
  );
}

// ── Stack section ─────────────────────────────────────────────────────────────

function StackCell({ s }: { s: { short: string; name: string; skills: string[] } }) {
  const icon = STACK_ICONS[s.name];

  return (
    <div className="p-stack-cell">
      <span className="p-stack-short">{icon ?? s.short}</span>
      <span>{s.name}</span>
    </div>
  );
}

function StackSection({ d }: { d: LangData }) {
  return (
    <section id="stack" style={{ scrollMarginTop: 60 }}>
      <SectionHead title={d.secStackTitle} ext=".json" meta={d.secStackMeta} />
      <div className="p-stack-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)', gap: 8 }}>
        {d.stack.map(s => <StackCell key={s.name} s={s} />)}
      </div>
    </section>
  );
}

// ── Contact section ───────────────────────────────────────────────────────────

function EmailContactRow({ c, d }: { c: { label: string; value: string; href: string }; d: LangData }) {
  const [copied, setCopied] = useState(false);
  const [hovered, setHovered] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(c.value).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <a
      href={c.href}
      className="p-contact"
      onClick={handleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ position: 'relative' }}
    >
      <span style={{ color: C.muted, fontSize: 11, textTransform: 'uppercase' as const, letterSpacing: '0.08em' }}>{c.label}</span>
      <span>{c.value}</span>
      <span className="p-contact-arrow" style={{ transition: 'opacity 0.15s' }}>
        {copied ? '✓' : '↗'}
      </span>
      {hovered && !copied && (
        <span style={{
          position: 'absolute',
          right: 36,
          top: '50%',
          transform: 'translateY(-50%)',
          background: C.ink,
          color: C.bg,
          fontSize: 10,
          padding: '3px 8px',
          borderRadius: 3,
          whiteSpace: 'nowrap' as const,
          pointerEvents: 'none',
          fontFamily: C.mono,
          letterSpacing: '0.02em',
          zIndex: 10,
        }}>
          {d.tooltipCopy}
        </span>
      )}
      {copied && (
        <span style={{
          position: 'absolute',
          right: 36,
          top: '50%',
          transform: 'translateY(-50%)',
          background: C.accent2,
          color: '#000',
          fontSize: 10,
          padding: '3px 8px',
          borderRadius: 3,
          whiteSpace: 'nowrap' as const,
          pointerEvents: 'none',
          fontFamily: C.mono,
          letterSpacing: '0.02em',
          zIndex: 10,
        }}>
          {d.tooltipCopied}
        </span>
      )}
    </a>
  );
}

function LinkContactRow({ c, d }: { c: { label: string; value: string; href: string }; d: LangData }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={c.href}
      className="p-contact"
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ position: 'relative' }}
    >
      <span style={{ color: C.muted, fontSize: 11, textTransform: 'uppercase' as const, letterSpacing: '0.08em' }}>{c.label}</span>
      <span>{c.value}</span>
      <span className="p-contact-arrow">↗</span>
      {hovered && (
        <span style={{
          position: 'absolute',
          right: 36,
          top: '50%',
          transform: 'translateY(-50%)',
          background: C.ink,
          color: C.bg,
          fontSize: 10,
          padding: '3px 8px',
          borderRadius: 3,
          whiteSpace: 'nowrap' as const,
          pointerEvents: 'none',
          fontFamily: C.mono,
          letterSpacing: '0.02em',
          zIndex: 10,
        }}>
          {d.tooltipNavigate}
        </span>
      )}
    </a>
  );
}

function ContactSection({ d }: { d: LangData }) {
  return (
    <section id="contact" style={{ scrollMarginTop: 60 }}>
      <SectionHead title={d.secContactTitle} ext=".md" meta={d.secContactMeta} />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {d.contacts.map(c =>
          c.label === 'email' ? (
            <EmailContactRow key={c.label} c={c} d={d} />
          ) : (c.label === 'telegram' || c.label === 'linkedin') ? (
            <LinkContactRow key={c.label} c={c} d={d} />
          ) : (
            <a key={c.label} href={c.href} className="p-contact" target={c.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
              <span style={{ color: C.muted, fontSize: 11, textTransform: 'uppercase' as const, letterSpacing: '0.08em' }}>{c.label}</span>
              <span>{c.value}</span>
              <span className="p-contact-arrow">↗</span>
            </a>
          )
        )}
      </div>
    </section>
  );
}

// ── Vibes section ─────────────────────────────────────────────────────────────

function VibesSection({ d, tracksIdx, onCycleTrack }: { d: LangData; tracksIdx: number; onCycleTrack: () => void }) {
  return (
    <section id="vibes" style={{ scrollMarginTop: 60 }}>
      <SectionHead title={d.secVibesTitle} ext=".mp3" meta={d.secVibesMeta} />
      <div className="p-vibes" onClick={onCycleTrack}>
        <Equalizer />
        <span style={{ fontFamily: C.mono, fontSize: 12, color: C.muted }}>
          {d.vibesLabel} <b style={{ color: C.ink, fontWeight: 400 }}>{d.tracks[tracksIdx]}</b>
        </span>
      </div>
      <div style={{ marginTop: 20 }}>
        <CodeBlock>
          <div><Ln n={1} /><Com c="// playlist" /></div>
          {d.tracks.map((t, i) => (
            <div key={i}>
              <Ln n={i + 2} />
              <Fn c={i === tracksIdx ? '▶' : ' '} />{' '}
              {i === tracksIdx ? <Str c={t} /> : <Com c={t} />}
            </div>
          ))}
          <div><Ln n={d.tracks.length + 2} />&nbsp;</div>
          <div><Ln n={d.tracks.length + 3} /><Com c={'// "que sais-je?" — m. montaigne, 1580'} /></div>
        </CodeBlock>
      </div>
    </section>
  );
}

// ── Case view ─────────────────────────────────────────────────────────────────

const BLOCK_COLORS = {
  task:     { border: '#4b3bff', comment: '#a798ff', hl: '#a798ff', hlBg: 'rgba(75,59,255,0.18)' },
  problem:  { border: '#ff5f57', comment: '#ff8a8a', hl: '#ffb0b0', hlBg: 'rgba(255,95,87,0.14)' },
  solution: { border: '#d4fb3c', comment: '#d4fb3c', hl: '#d4fb3c', hlBg: 'rgba(212,251,60,0.12)' },
} as const;

function CaseCodeBlock({ type, label, text }: { type: keyof typeof BLOCK_COLORS; label: string; text: string }) {
  const bc = BLOCK_COLORS[type];
  const html = text.replace(
    /<em>(.*?)<\/em>/g,
    `<em style="font-style:normal;color:${bc.hl};background:${bc.hlBg};padding:0 3px;border-radius:2px;">$1</em>`
  );
  return (
    <div style={{
      background: C.panel, border: `1px solid ${C.line}`, borderLeft: `3px solid ${bc.border}`,
      borderRadius: 6, padding: '12px 18px', fontFamily: C.mono, fontSize: 12.5, lineHeight: 1.75, color: C.ink, overflowX: 'auto',
    }}>
      <div>
        <span style={{ color: C.dim, display: 'inline-block', width: 22, textAlign: 'right', marginRight: 14 }}>1</span>
        <span style={{ color: bc.comment }}>// {label}</span>
      </div>
      <div>
        <span style={{ color: C.dim, display: 'inline-block', width: 22, textAlign: 'right', marginRight: 14 }}>2</span>
        <Kw c="const" /> <span style={{ color: '#ff8a4c' }}>{type}</span> = () =&gt; (
      </div>
      <div style={{ display: 'flex', alignItems: 'flex-start', padding: '6px 0' }}>
        <span style={{ color: C.dim, display: 'inline-block', width: 22, textAlign: 'right', marginRight: 14, flexShrink: 0 }}>3</span>
        <div
          style={{ fontFamily: C.mono, fontSize: 13, lineHeight: 1.75, color: C.ink, flex: 1, minWidth: 0, paddingLeft: 2, whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
      <div>
        <span style={{ color: C.dim, display: 'inline-block', width: 22, textAlign: 'right', marginRight: 14 }}>4</span>);
      </div>
    </div>
  );
}

function CaseView({ project, d, onBack }: { project: Project; d: LangData; onBack: () => void }) {
  const [slideIdx, setSlideIdx] = useState(0);
  const slides = (project.slides && project.slides.length)
    ? project.slides
    : [{ cover: project.cover, caption: project.caption || project.subtitle }];
  const current = slides[slideIdx];
  const total = slides.length;

  return (
    <section id="case" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <button className="p-case-back" onClick={onBack}>← {d.caseBackLabel}</button>

      <h1 style={{ fontFamily: C.sans, fontSize: 'clamp(30px, 4.4vw, 42px)', fontWeight: 500, letterSpacing: '-0.02em', lineHeight: 1.08, margin: 0, color: C.ink }}>
        {project.title}
        <span style={{ color: C.dim, fontWeight: 300, fontSize: '0.55em', fontFamily: C.mono, letterSpacing: 0, marginLeft: 6, verticalAlign: 'middle', opacity: 0.7 }}>.case</span>
      </h1>

      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: -6 }}>
        {project.tags.map(t => (
          <span key={t} style={{ fontFamily: C.mono, fontSize: 13, padding: '5px 14px', border: `1px solid ${C.line}`, borderRadius: 999, color: C.accent2, background: 'rgba(212,251,60,0.04)', textTransform: 'lowercase' }}>{t}</span>
        ))}
      </div>

      {/* Screen widget */}
      <div style={{ border: `1px solid ${C.line}`, borderRadius: 6, background: C.panel, overflow: 'hidden' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px', borderBottom: `1px solid ${C.line}`, background: C.panel2 }}>
          <MacDots />
          <span style={{ fontFamily: C.mono, fontSize: 11, color: C.muted, marginLeft: 4, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            ~/{project.id}.case — {project.subtitle}
          </span>
        </div>

        <div className="p-case-screen-body">
          {current.image ? (
            <img
              src={current.image}
              alt={current.alt || project.subtitle}
              style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block', borderRadius: 0 }}
            />
          ) : (
            <span style={{ position: 'relative', zIndex: 3, fontFamily: C.mono, fontSize: 11, color: C.muted, padding: '8px 14px', border: `1px dashed ${C.line}`, borderRadius: 3, background: 'rgba(21,21,23,0.7)', backdropFilter: 'blur(4px)', textAlign: 'center', maxWidth: '80%', lineHeight: 1.5 }}>
              {d.screenPlaceholder}<br />{project.subtitle}
            </span>
          )}
        </div>

        {total > 1 && (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, padding: '12px 14px', borderTop: `1px solid ${C.line}`, background: C.panel2 }}>
            <button className="p-slider-btn" onClick={() => setSlideIdx(i => (i - 1 + total) % total)} aria-label="prev">
              <svg width={12} height={12} viewBox="0 0 16 16" fill="none">
                <path d="M10 3.5L5.5 8l4.5 4.5" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div style={{ display: 'inline-flex', gap: 8, alignItems: 'center' }}>
              {slides.map((_, i) => (
                <button key={i} className={`p-slider-dot${i === slideIdx ? ' p-active' : ''}`} onClick={() => setSlideIdx(i)} aria-label={`slide ${i + 1}`} />
              ))}
            </div>
            <button className="p-slider-btn" onClick={() => setSlideIdx(i => (i + 1) % total)} aria-label="next">
              <svg width={12} height={12} viewBox="0 0 16 16" fill="none">
                <path d="M6 3.5L10.5 8 6 12.5" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        )}

        <div style={{ fontFamily: C.mono, fontSize: 12, color: C.muted, lineHeight: 1.65, padding: '12px 16px 14px', background: C.panel2, borderTop: `1px solid ${C.line}` }}>
          // {current.caption}
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <CaseCodeBlock type="task" label={d.caseTaskLabel} text={project.task} />
        <CaseCodeBlock type="problem" label={d.caseProblemLabel} text={project.problemFull} />
        <CaseCodeBlock type="solution" label={d.caseSolutionLabel} text={project.solution} />
      </div>
    </section>
  );
}

// ── Main Portfolio component ──────────────────────────────────────────────────

export function Portfolio() {
  const [lang, setLang] = useState<Lang>(() => {
    try {
      const s = localStorage.getItem('portfolio-lang');
      if (s === 'ru' || s === 'en') return s as Lang;
    } catch { /* noop */ }
    return 'en';
  });
  const [currentCase, setCurrentCase] = useState<string | null>(null);
  const [tracksIdx, setTracksIdx] = useState(0);
  const [activeSection, setActiveSection] = useState('readme');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const mainRef = useRef<HTMLDivElement>(null);
  const d = DATA[lang];

  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el || !mainRef.current) return;
    mainRef.current.scrollTo({ top: el.offsetTop - 20, behavior: 'smooth' });
  }, []);

  const openCase = useCallback((id: string) => {
    setCurrentCase(id);
    requestAnimationFrame(() => mainRef.current?.scrollTo({ top: 0 }));
  }, []);

  const closeCase = useCallback(() => {
    const wasId = currentCase;
    setCurrentCase(null);
    requestAnimationFrame(() => { if (wasId) scrollToSection(wasId); });
  }, [currentCase, scrollToSection]);

  const switchLang = (l: Lang) => {
    setLang(l);
    try { localStorage.setItem('portfolio-lang', l); } catch { /* noop */ }
  };

  // Set viewport for mobile
  useEffect(() => {
    const viewport = document.querySelector('meta[name="viewport"]');
    if (viewport) {
      viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'viewport';
      meta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover';
      document.head.appendChild(meta);
    }
  }, []);

  // Prevent scroll when sidebar is open on mobile
  useEffect(() => {
    if (sidebarOpen && window.innerWidth <= 768) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [sidebarOpen]);

  // Scroll spy
  useEffect(() => {
    const main = mainRef.current;
    if (!main) return;
    const update = () => {
      if (currentCase) return;
      const sections = Array.from(main.querySelectorAll<HTMLElement>('#editor > section'));
      const scrollTop = main.scrollTop;
      const threshold = 80;
      let activeId = sections[0]?.id || 'readme';
      for (const sec of sections) {
        if (sec.offsetTop - threshold <= scrollTop) activeId = sec.id;
        else break;
      }
      setActiveSection(activeId);
    };
    let ticking = false;
    const onScroll = () => {
      if (!ticking) { requestAnimationFrame(() => { update(); ticking = false; }); ticking = true; }
    };
    main.addEventListener('scroll', onScroll);
    update();
    return () => main.removeEventListener('scroll', onScroll);
  }, [currentCase]);

  const currentProject = currentCase ? d.projects.find(p => p.id === currentCase) : null;

  // Sidebar tree item
  function TreeItem({ id, icon, name, ext, isProject = false, href }: { id: string; icon: string; name: string; ext: string; isProject?: boolean; href?: string }) {
    const isActive = currentCase ? (isProject && id === currentCase) : (!isProject && id === activeSection);
    const inner = (
      <>
        <span className="p-tico" style={{ width: 12, display: 'inline-block', flexShrink: 0, fontSize: 10, color: isActive ? C.accent2 : C.muted, lineHeight: '10px', textAlign: 'center' }}>{icon}</span>
        <span className="p-tname" style={{ flex: 1, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', color: isActive ? C.accent2 : C.ink }}>{name}</span>
        <span style={{ color: C.muted, opacity: 0.7, fontSize: 12 }}>{ext}</span>
      </>
    );
    if (href) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={`p-tree-item${isActive ? ' p-active' : ''}`} style={{ width: '100%', textAlign: 'left', textDecoration: 'none' }}>
          {inner}
        </a>
      );
    }
    return (
      <button
        className={`p-tree-item${isActive ? ' p-active' : ''}`}
        onClick={() => {
          setSidebarOpen(false);
          if (isProject) { openCase(id); }
          else if (currentCase) { setCurrentCase(null); requestAnimationFrame(() => scrollToSection(id)); }
          else { scrollToSection(id); }
        }}
        style={{ width: '100%', textAlign: 'left', background: 'transparent', border: 'none' }}
      >
        {inner}
      </button>
    );
  }


  return (
    <div className="p-root" style={{ position: 'relative' }}>

      {/* Grid */}
      <div className="p-grid" style={{ display: 'grid', gridTemplateRows: '36px 1fr 22px', gridTemplateColumns: '260px 1fr', gridTemplateAreas: '"top top" "side main" "status status"', height: '100vh' }}>

        {/* Top bar */}
        <header style={{ gridArea: 'top', borderBottom: `1px solid ${C.line}`, background: C.panel, display: 'flex', alignItems: 'center', padding: '0 14px', gap: 14, fontSize: 11, color: C.muted, fontFamily: C.mono }}>
          <button className="p-burger" onClick={() => setSidebarOpen(!sidebarOpen)} aria-label="menu">
            <svg width={16} height={16} viewBox="0 0 16 16" fill="none">
              <path d="M2 4h12M2 8h12M2 12h12" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" />
            </svg>
          </button>
          <MacDots />
          <span className="p-header-title" style={{ color: C.ink }}>~/portfolio/<b style={{ color: C.accent2, fontWeight: 500 }}>{currentCase ? `${currentCase}.case` : 'анна_демешко.fig'}</b></span>
          <div style={{ marginLeft: 'auto', display: 'flex', gap: 14, alignItems: 'center' }}>
            <span className="p-header-meta" style={{ opacity: 0.7 }}>{d.ln}</span>
            <span className="p-header-meta" style={{ opacity: 0.7 }}>utf-8</span>
            <div style={{ display: 'flex', border: `1px solid ${C.line}`, borderRadius: 999, padding: 2, marginLeft: 6 }}>
              {(['ru', 'en'] as Lang[]).map(l => (
                <button key={l} className={`p-lang-btn${lang === l ? ' p-active' : ''}`} onClick={() => switchLang(l)}>{l}</button>
              ))}
            </div>
          </div>
        </header>


        {/* Sidebar */}
        <aside className={`p-sidebar${sidebarOpen ? ' p-sidebar-open' : ''}`} style={{ gridArea: 'side', background: C.panel, borderRight: `1px solid ${C.line}`, overflowY: 'auto', padding: '8px 0 20px' }}>
          {[
            { label: d.folderAbout, items: [{ id: 'readme', icon: '☰', name: 'readme', ext: '.md' }, { id: 'stack', icon: '☰', name: 'stack', ext: '.json' }, { id: 'cv', icon: '↓', name: 'cv', ext: '.pdf', href: '#' }] },
            { label: d.folderProjects, items: d.projects.map(p => ({ id: p.id, icon: '◆', name: p.id, ext: '.case', isProject: true })) },
            { label: d.folderEtc, items: [{ id: 'contact', icon: '@', name: 'contact', ext: '.md' }, { id: 'vibes', icon: '♪', name: 'vibes', ext: '.mp3' }] },
          ].map(folder => (
            <div key={folder.label} style={{ padding: '10px 10px 4px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '5px 10px 5px 4px', fontSize: 10, color: C.muted, textTransform: 'uppercase', letterSpacing: '0.08em', userSelect: 'none' }}>
                <span style={{ fontSize: 8, color: C.dim }}>▾</span> {folder.label}
              </div>
              {folder.items.map(item => (
                <TreeItem key={item.id} {...item} />
              ))}
            </div>
          ))}
        </aside>

        {/* Main */}
        <main className="p-main" ref={mainRef} style={{ gridArea: 'main', overflowY: 'auto', scrollBehavior: 'smooth', background: C.bg, minWidth: 0 }}>

          {/* Editor */}
          <div className="p-editor" id="editor" style={{ padding: '24px 40px 120px', maxWidth: 980, margin: '0 auto', width: '100%', display: 'flex', flexDirection: 'column', gap: 36 }}>
            {currentCase && currentProject ? (
              <CaseView project={currentProject} d={d} onBack={closeCase} />
            ) : (
              <>
                <ReadmeSection d={d} />
                <ProjectsSection d={d} onOpenCase={openCase} />
                <StackSection d={d} />
                <ContactSection d={d} />
                <VibesSection d={d} tracksIdx={tracksIdx} onCycleTrack={() => setTracksIdx(i => (i + 1) % d.tracks.length)} />
              </>
            )}
          </div>
        </main>

        {/* Status bar / Mobile nav */}
        <footer className="p-statusbar" style={{ gridArea: 'status', background: C.accent, color: '#fff', display: 'flex', alignItems: 'center', padding: '0 14px', gap: 14, fontSize: 10, letterSpacing: '0.04em', fontFamily: C.mono }}>
          <span className="p-blink">●</span>
          <span>{d.statReady}</span>
          <span style={{ opacity: 0.4 }}>|</span>
          <span>branch: main</span>
          <span style={{ opacity: 0.4 }}>|</span>
          <span>📍 gmt+3</span>
          <div style={{ marginLeft: 'auto', display: 'flex', gap: 14 }}>
            <span>@anna_demeshko</span>
            <span style={{ opacity: 0.4 }}>|</span>
            <span>hi@demeshko.design</span>
          </div>
        </footer>

        {/* Mobile bottom nav */}
        <nav className="p-mobile-nav">
          {[
            { id: 'readme', label: 'About' },
            { id: 'projects', label: 'Projects' },
            { id: 'contact', label: 'Contact' },
          ].map((item, idx, arr) => (
            <button
              key={item.id}
              className={`p-mobile-nav-btn${!currentCase && activeSection === item.id ? ' p-active' : ''}`}
              onClick={() => {
                setSidebarOpen(false);
                if (currentCase) {
                  setCurrentCase(null);
                  requestAnimationFrame(() => scrollToSection(item.id));
                } else {
                  scrollToSection(item.id);
                }
              }}
              style={{ borderRight: idx < arr.length - 1 ? `1px solid ${C.line}` : 'none' }}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}