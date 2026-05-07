import { useState, useRef, useEffect, useCallback } from 'react';
import { DATA, Lang, LangData, Project, CaseRepositoryFlowCopy } from './portfolioData';
import { STACK_ICONS } from './StackIcons';

// ── Color constants ──────────────────────────────────────────────────────────

const C = {
  bg: 'var(--p-bg)',
  panel: 'var(--p-panel)',
  panel2: 'var(--p-panel2)',
  ink: 'var(--p-ink)',
  muted: 'var(--p-muted)',
  dim: 'var(--p-dim)',
  line: 'var(--p-line)',
  accent: 'var(--p-accent)',
  accent2: 'var(--p-accent2)',
  mono: "'JetBrains Mono', ui-monospace, 'SF Mono', Menlo, monospace",
  sans: "'Geist', -apple-system, system-ui, sans-serif",
  keyword: 'var(--p-code-keyword)',
  function: 'var(--p-code-function)',
  tooltipBg: 'var(--p-tooltip-bg)',
  tooltipInk: 'var(--p-tooltip-ink)',
  successInk: 'var(--p-success-ink)',
  successBg: 'var(--p-success-bg)',
  tagBg: 'var(--p-tag-bg)',
  tagBgStrong: 'var(--p-tag-bg-strong)',
  casePlaceholderBg: 'var(--p-case-placeholder-bg)',
  vibesBg: 'var(--p-vibes-bg)',
  vibesBorder: 'var(--p-vibes-border)',
  vibesShadow: 'var(--p-vibes-shadow)',
  vibesLabel: 'var(--p-vibes-label)',
  spotifyBg: 'var(--p-spotify-bg)',
  spotifyInk: 'var(--p-spotify-ink)',
  tabStrip: 'var(--p-tab-strip)',
  mobileNavBg: 'var(--p-mobile-nav-bg)',
  mobileNavShadow: 'var(--p-mobile-nav-shadow)',
  mobileActiveBg: 'var(--p-mobile-active-bg)',
  mobilePressBg: 'var(--p-mobile-press-bg)',
  tgInk: 'var(--p-tg-ink)',
} as const;

const SITE_BASE = import.meta.env.BASE_URL || '/';

function withSiteBase(value?: string) {
  if (!value) return value;
  const normalizedBase = SITE_BASE.endsWith('/') ? SITE_BASE : `${SITE_BASE}/`;
  if (value === '/portfolio' || value === '/portfolio/') return normalizedBase;
  if (value.startsWith('/portfolio/')) return `${normalizedBase}${value.slice('/portfolio/'.length)}`;
  return value;
}

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

function Ln({ n }: { n: number }) {
  return <span style={{ color: C.dim, userSelect: 'none', display: 'inline-block', width: 22, textAlign: 'right', marginRight: 14 }}>{n}</span>;
}
function Kw({ c }: { c: React.ReactNode }) { return <span style={{ color: C.keyword }}>{c}</span>; }
function Str({ c }: { c: React.ReactNode }) { return <span style={{ color: C.accent2 }}>{c}</span>; }
function Fn({ c }: { c: React.ReactNode }) { return <span style={{ color: C.function }}>{c}</span>; }
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

function PixelBat() {
  const batPhrases = [
    'SHAROOOOOOOOOON!',
    "ROCK'N ROLL!!!",
    'OZZY APPROVES',
    'ONE MORE CASE!',
  ];
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [phraseIndex, setPhraseIndex] = useState(0);

  const nextPhrase = () => {
    setPhraseIndex(index => (index + 1) % batPhrases.length);
  };

  return (
    <button
      className={`p-readme-bat${isSpeaking ? ' is-speaking' : ''}`}
      type="button"
      aria-label="rock n roll bat"
      aria-pressed={isSpeaking}
      onMouseEnter={nextPhrase}
      onClick={() => {
        nextPhrase();
        setIsSpeaking(show => !show);
      }}
    >
      <span className="p-readme-bat-bubble">{batPhrases[phraseIndex]}</span>
      <img src={withSiteBase('/portfolio/bat.png')} alt="" className="p-readme-bat-img p-readme-bat-body" />
      <img src={withSiteBase('/portfolio/bat.png')} alt="" className="p-readme-bat-img p-readme-bat-wing-layer p-readme-bat-wing-layer-left" />
      <img src={withSiteBase('/portfolio/bat.png')} alt="" className="p-readme-bat-img p-readme-bat-wing-layer p-readme-bat-wing-layer-right" />
    </button>
  );
}

// ── README section ────────────────────────────────────────────────────────────

function ReadmeSection({ d, lang, onOpenCv }: { d: LangData; lang: Lang; onOpenCv: () => void }) {
  return (
    <section id="readme" style={{ scrollMarginTop: 60 }}>
      <div className="p-readme-marker" style={{ fontSize: 11, color: C.muted, marginBottom: 14, fontFamily: C.mono }}>
        <b style={{ color: C.muted, fontWeight: 500 }}>{d.secMarker}</b>
      </div>

      <div className="p-readme-head" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(360px, 390px)', gap: 24, alignItems: 'start' }}>
        <div>
          <h1 className="p-readme-title" style={{ fontFamily: C.sans, fontSize: 'clamp(34px, 5.2vw, 52px)', fontWeight: 500, letterSpacing: '-0.03em', lineHeight: 1, margin: '0 0 14px', color: C.ink }}>
            <span className="p-readme-title-line">
              {d.h1Line1}
              <span className={`p-readme-title-accent${lang === 'ru' ? ' p-readme-title-accent-ru' : ''}`} style={{ color: C.accent2 }}>
                {' '}
                {d.h1Line1Accent}
              </span>
              {lang === 'ru' ? (
                <span className="p-readme-title-accent-mobile-ru" style={{ color: C.accent2 }}>
                  {' '}
                  product
                </span>
              ) : null}
            </span>
            <span className="p-readme-title-line" style={{ color: C.accent2, marginTop: 4 }}>{d.h1Line2}</span>
          </h1>
          <p style={{ fontFamily: C.sans, fontSize: 18, lineHeight: 1.55, color: C.ink, maxWidth: 620, margin: 0, whiteSpace: 'pre-line' }}>
            {d.lede}
          </p>
          <div className="p-readme-cta-row">
            <a href="https://t.me/annademeshko" target="_blank" rel="noopener" className="p-tg-cta">
              <svg width={14} height={14} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M9.78 15.28l-.4 4.04c.57 0 .81-.24 1.11-.53l2.66-2.54 5.52 4.04c1.01.56 1.73.27 2-.94l3.63-17c.35-1.52-.55-2.11-1.53-1.75L1.5 9.34C.02 9.93.04 10.77 1.25 11.14l5.62 1.75 13.06-8.23c.61-.41 1.17-.18.71.22L9.78 15.28z" />
              </svg>
              {d.ctaTelegram}
              <span>↗</span>
            </a>
            <button type="button" className="p-readme-cv-cta" onClick={onOpenCv}>
              {d.ctaViewCv}
              <span>↗</span>
            </button>
          </div>
        </div>

        <div className="p-readme-side">
          <PixelBat />
          <div className="p-readme-stats" style={{ border: `1px solid ${C.line}`, background: C.panel, padding: '14px 16px', borderRadius: 4, width: '100%' }}>
            {Object.entries(d.stats).map(([k, v], i, arr) => (
              <div key={k} style={{ display: 'flex', justifyContent: 'space-between', gap: 16, fontSize: 11, padding: '4px 0', borderBottom: i < arr.length - 1 ? `1px dashed ${C.line}` : 'none' }}>
                <span style={{ color: C.muted }}>{k}</span>
                <span style={{ color: C.ink, textAlign: 'right' }}>{v}</span>
              </div>
            ))}
          </div>
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

const HIDDEN_PROJECT_IDS = new Set(['scan-compare', 'triage']);

function textFromHtml(value?: string) {
  return (value || '')
    .replace(/<[^>]+>/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function projectSolutionSummary(project: Project) {
  const [mainSolution] = textFromHtml(project.solution).split(' impact:');
  return mainSolution || textFromHtml(project.task);
}

const PROJECT_CARD_COPY: Record<Lang, Record<string, { problem: string; action: string }>> = {
  ru: {
    copilot: {
      problem: 'Security-командам нужно было быстро разбирать много уязвимостей без потери контекста.',
      action: 'Собрала workflow с таблицей, side panel, доказательствами и управляемыми решениями.',
    },
    dashboards: {
      problem: 'Метрики были разбросаны по разделам, а командам нужен был свой рабочий dashboard.',
      action: 'Спроектировала настраиваемые виджеты: выбор, resize, drag-and-drop и expanded view.',
    },
    'wave-copilot': {
      problem: 'Аналитикам нужна была AI-помощь в SAST-триаже, но без слепого доверия модели.',
      action: 'Встроила CoPilot в контекст скана: режим анализа, confidence, объяснение и финальное решение.',
    },
    design_system: {
      problem: 'Повторяющиеся UI-паттерны жили отдельно и по-разному трактовались дизайном и разработкой.',
      action: 'Описала 6 компонентов дизайн-системы: структура, состояния, правила и handoff.',
    },
  },
  en: {
    copilot: {
      problem: 'Security teams needed to review many vulnerabilities without losing decision context.',
      action: 'Designed a workflow with a table, side panel, evidence, and governed actions.',
    },
    dashboards: {
      problem: 'Security metrics were scattered across sections, while teams needed their own daily dashboard.',
      action: 'Designed configurable widgets: selection, resize, drag-and-drop, and expanded analysis.',
    },
    'wave-copilot': {
      problem: 'Analysts needed AI support for SAST triage without blindly trusting the model.',
      action: 'Brought CoPilot into scan context with analysis modes, confidence, explanation, and final decision.',
    },
    design_system: {
      problem: 'Recurring UI patterns were interpreted differently across design and engineering.',
      action: 'Documented 6 system components: anatomy, states, rules, and handoff guidance.',
    },
  },
};

const PROJECT_CARD_TITLES: Record<Lang, Record<string, string>> = {
  ru: {
    copilot: 'CoPilot — анализ и решения\nпо уязвимостям',
    dashboards: 'Дашборды Для Аналитики ИБ',
    'wave-copilot': 'Wave — AI-Анализ Уязвимостей',
    design_system: 'Развитие Дизайн-Системы',
  },
  en: {
    copilot: 'CoPilot Reports — AppSec Scan Results Workspace',
    dashboards: 'Dashboards For Security Analytics',
    'wave-copilot': 'Wave — In-Context AI Vulnerability Analysis',
    design_system: 'Design System Evolution',
  },
};

function projectCardCopy(project: Project, lang: Lang) {
  return PROJECT_CARD_COPY[lang][project.id] || {
    problem: project.problem,
    action: projectSolutionSummary(project),
  };
}

function projectCardTitle(project: Project, lang: Lang) {
  return PROJECT_CARD_TITLES[lang][project.id] || project.title;
}

function ProjectCard({
  p,
  idx,
  onOpenCase,
  ctaLabel,
  problemLabel,
  actionLabel,
  lang,
}: {
  p: Project;
  idx: number;
  onOpenCase: (id: string) => void;
  ctaLabel: string;
  problemLabel: string;
  actionLabel: string;
  lang: Lang;
}) {
  const [hovered, setHovered] = useState(false);
  const [slideIdx, setSlideIdx] = useState(0);
  const slides = (p.slides || []).filter(slide => slide.image);
  const activeSlide = slides[slideIdx % Math.max(slides.length, 1)];
  const copy = projectCardCopy(p, lang);
  const title = projectCardTitle(p, lang);

  if (p.isLoading) {
    return (
      <div id={p.id} className="p-project-card p-project-card-loading">
        <span className="p-proj-loading-spinner" />
        <span>{p.title}</span>
      </div>
    );
  }

  const moveSlide = (direction: -1 | 1, event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    if (!slides.length) return;
    setSlideIdx(index => (index + direction + slides.length) % slides.length);
  };

  return (
    <article
      id={p.id}
      className={`p-project-card${hovered ? ' p-project-card-hovered' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <button type="button" className="p-project-card-hit" onClick={() => onOpenCase(p.id)} aria-label={`${ctaLabel}: ${title}`} />

      <div className="p-project-card-media">
        {activeSlide?.image ? (
          <img src={withSiteBase(activeSlide.image)} alt={activeSlide.alt || p.subtitle} />
        ) : (
          <div className="p-project-card-media-placeholder">
            <span>{p.subtitle}</span>
          </div>
        )}
      </div>

      {slides.length > 1 ? (
        <div className="p-project-card-controls">
          <button type="button" onClick={event => moveSlide(-1, event)} aria-label="previous screenshot">‹</button>
          <div>
            {slides.map((_, i) => (
              <button
                key={`${p.id}-slide-${i}`}
                type="button"
                className={i === slideIdx ? 'p-active' : ''}
                onClick={event => {
                  event.stopPropagation();
                  setSlideIdx(i);
                }}
                aria-label={`show screenshot ${i + 1}`}
              />
            ))}
          </div>
          <button type="button" onClick={event => moveSlide(1, event)} aria-label="next screenshot">›</button>
        </div>
      ) : null}

      <div className="p-project-card-body">
        <div className="p-project-card-kicker">
          <span>{String(idx + 1).padStart(2, '0')}</span>
          <span>{p.year}</span>
        </div>

        <h3>{title}</h3>

        <div className="p-project-card-copy">
          <p><strong>{problemLabel}</strong> {copy.problem}</p>
          <p><strong>{actionLabel}</strong> {copy.action}</p>
        </div>
      </div>

      <div className="p-project-card-footer">
        <div className="p-project-card-tags">
          {p.tags.map(t => (
            <span key={t}>{t}</span>
          ))}
        </div>
        <div className="p-project-card-metric">
          <span>{p.metric.value}</span>
          <span>{p.metric.label}</span>
        </div>
      </div>
    </article>
  );
}

function ProjectsSection({ d, onOpenCase, lang }: { d: LangData; onOpenCase: (id: string) => void; lang: Lang }) {
  const visibleProjects = d.projects.filter(project => !project.isLoading && !HIDDEN_PROJECT_IDS.has(project.id));
  const loadingProjects = d.projects.filter(project => project.isLoading);
  const ctaLabel = lang === 'ru' ? 'просмотреть кейс' : 'view case';
  const problemLabel = lang === 'ru' ? 'проблема:' : 'problem:';
  const actionLabel = lang === 'ru' ? 'что я сделала:' : 'what i did:';

  return (
    <section id="projects" style={{ scrollMarginTop: 60 }}>
      <SectionHead title={d.secProjectsTitle} ext="/" meta={d.secProjectsMeta} />
      <div className="p-project-card-grid">
        {visibleProjects.map((p, i) => (
          <ProjectCard
            key={p.id}
            p={p}
            idx={i}
            onOpenCase={onOpenCase}
            ctaLabel={ctaLabel}
            problemLabel={problemLabel}
            actionLabel={actionLabel}
            lang={lang}
          />
        ))}
      </div>
      {loadingProjects.map(project => (
        <div key={project.id} className="p-project-loading-strip">
          <span className="p-proj-loading-spinner" />
          <span>{project.title}</span>
        </div>
      ))}
    </section>
  );
}

// ── Stack section ─────────────────────────────────────────────────────────────

function StackCell({ s }: { s: { short: string; name: string; skills: string[] } }) {
  const icon = STACK_ICONS[s.name];
  const isLoading = s.name === 'загрузка нового скилла' || s.name === 'loading new skill';

  return (
    <div className="p-stack-cell">
      <div className={`p-stack-content${isLoading ? ' p-stack-content-loading' : ''}`}>
        <span className="p-stack-short">{icon ?? s.short}</span>
        <span className="p-stack-label">{s.name}</span>
      </div>
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

// ── CV view ───────────────────────────────────────────────────────────────────

function CvView({ d, lang, onBack }: { d: LangData; lang: Lang; onBack: () => void }) {
  const visibleTools = d.stack.filter(s => !s.name.includes('loading') && !s.name.includes('загрузка'));

  function CvContactRow({ c }: { c: { label: string; value: string; href?: string } }) {
    const [copied, setCopied] = useState(false);
    const [hovered, setHovered] = useState(false);
    const isEmail = c.href?.startsWith('mailto:');

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (!isEmail) return;
      e.preventDefault();
      navigator.clipboard.writeText(c.value).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    };

    return (
      <a
        href={withSiteBase(c.href) || '#'}
        className="p-cv-contact"
        target={!isEmail && c.href?.startsWith('http') ? '_blank' : undefined}
        rel="noreferrer"
        onClick={handleClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <span>{c.label}</span>
        <strong>{c.value}</strong>
        {isEmail && hovered && (
          <em className="p-cv-contact-tip">{copied ? d.tooltipCopied : d.tooltipCopy}</em>
        )}
      </a>
    );
  }

  return (
    <section id="cv" className="p-cv-section p-cv-page" style={{ display: 'flex', flexDirection: 'column', gap: 16, scrollMarginTop: 60 }}>
      <button className="p-case-back" onClick={onBack}>← {d.caseBackLabel}</button>

      <div className="p-cv-shell">
        <div className="p-cv-top">
          <div className="p-cv-person">
            <img src={withSiteBase(d.cv.photoSrc)} alt={d.name} className="p-cv-photo" />
            <div>
              <h2 className="p-cv-name">{d.name}</h2>
              <p className="p-cv-role">{d.cv.headline}</p>
            </div>
          </div>
          <a href={withSiteBase(d.cv.downloadHref)} download className="p-cv-download">
            {d.cv.downloadLabel}
          </a>
        </div>

        <div className="p-cv-grid">
          <aside className="p-cv-aside">
            <div className="p-cv-block">
              <h3>{d.cv.contactTitle}</h3>
              {d.cv.contactRows.map(c => (
                <CvContactRow key={c.label} c={c} />
              ))}
            </div>

            <div className="p-cv-block">
              <h3>{d.cv.toolsTitle}</h3>
              <div className="p-cv-tags">
                {visibleTools.map(s => (
                  <span key={s.name}>{s.name}</span>
                ))}
              </div>
            </div>

            <div className="p-cv-block">
              <h3>{d.cv.languagesTitle}</h3>
              <ul className="p-cv-list">
                {d.cv.languages.map(item => <li key={item}>{item}</li>)}
              </ul>
            </div>

            <div className="p-cv-block">
              <h3>{d.cv.hardSkillsTitle}</h3>
              <ul className="p-cv-list">
                {d.cv.hardSkills.map(item => <li key={item.title}>{item.title}</li>)}
              </ul>
            </div>

            <div className="p-cv-block">
              <h3>{d.cv.softSkillsTitle}</h3>
              <ul className="p-cv-list">
                {d.cv.softSkills.map(item => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </aside>

          <div className="p-cv-main">
            <div className="p-cv-block">
              <h3>{lang === 'ru' ? 'профиль' : 'profile'}</h3>
              <p className="p-cv-summary">{d.cv.summary}</p>
              <p className="p-cv-availability">{d.cv.availability}</p>
            </div>

            <div className="p-cv-block">
              <h3>{lang === 'ru' ? 'ключевые факты' : 'key facts'}</h3>
              <ul className="p-cv-list p-cv-list-grid">
                {d.cv.highlights.map(item => <li key={item}>{item}</li>)}
              </ul>
            </div>

            <div className="p-cv-block">
              <h3>{d.cv.experienceTitle}</h3>
              <div className="p-cv-timeline">
                {d.cv.experience.map(job => (
                  <article key={`${job.role}-${job.period}`} className="p-cv-job">
                    <div className="p-cv-job-head">
                      <h4>{job.role}</h4>
                      <p>{job.company}</p>
                    </div>
                    <span>{job.period}</span>
                    <ul className="p-cv-list">
                      {job.details.map(item => <li key={item}>{item}</li>)}
                    </ul>
                  </article>
                ))}
              </div>
            </div>

            <div className="p-cv-block">
              <h3>{d.cv.educationTitle}</h3>
              <div className="p-cv-education">
                {d.cv.education.map(item => (
                  <article key={`${item.title}-${item.period}`}>
                    <div className="p-cv-education-head">
                      <h4>{item.title}</h4>
                      <p>{item.place}</p>
                    </div>
                    <span>{item.period}</span>
                  </article>
                ))}
              </div>
            </div>

          </div>
        </div>
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
      href={withSiteBase(c.href)}
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
          background: C.tooltipBg,
          color: C.tooltipInk,
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
          background: C.successBg,
          color: C.successInk,
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
      href={withSiteBase(c.href)}
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
          background: C.tooltipBg,
          color: C.tooltipInk,
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
            <a key={c.label} href={withSiteBase(c.href)} className="p-contact" target={c.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
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

function VibesSection({ d }: { d: LangData }) {
  const [currentTrack, setCurrentTrack] = useState(() => d.tracks[Math.floor(Math.random() * d.tracks.length)] || null);

  useEffect(() => {
    setCurrentTrack(d.tracks[Math.floor(Math.random() * d.tracks.length)] || null);
  }, [d]);

  const trackTitle = currentTrack?.title || d.vibesPlaylistTitle;
  const trackArtwork = currentTrack?.artworkSrc || d.vibesArtworkSrc;
  const trackArtworkAlt = currentTrack?.artworkAlt || d.vibesArtworkAlt;

  return (
    <section id="vibes" style={{ scrollMarginTop: 60 }}>
      <SectionHead title={d.secVibesTitle} ext=".mp3" meta={d.secVibesMeta} />
      <a
        href={withSiteBase(d.vibesPlaylistHref)}
        target="_blank"
        rel="noopener noreferrer"
        className="p-vibes"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 16,
          textDecoration: 'none',
          background: C.vibesBg,
          border: `1px solid ${C.vibesBorder}`,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, minWidth: 0 }}>
          <img
            src={withSiteBase(trackArtwork)}
            alt={trackArtworkAlt}
            style={{
              width: 54,
              height: 54,
              borderRadius: 8,
              objectFit: 'cover',
              boxShadow: C.vibesShadow,
              flexShrink: 0,
            }}
          />
          <div style={{ minWidth: 0 }}>
            <div className="p-vibes-label" style={{ fontFamily: C.mono, fontSize: 11, color: C.vibesLabel, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              {d.vibesLabel}
            </div>
            <div className="p-vibes-eq" aria-label={d.vibesLabel}>
              {[1, 2, 3, 4].map(bar => <span key={bar} className="p-eq-bar" />)}
            </div>
            <div style={{ color: C.ink, fontSize: 16, lineHeight: 1.25, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {trackTitle}
            </div>
            <div style={{ color: C.muted, fontSize: 12 }}>
              {d.vibesPlaylistMeta}
            </div>
          </div>
        </div>
        <span
          className="p-vibes-cta"
          style={{
            color: C.spotifyInk,
            background: C.spotifyBg,
            padding: '8px 12px',
            borderRadius: 999,
            fontSize: 11,
            fontFamily: C.mono,
            whiteSpace: 'nowrap',
            flexShrink: 0,
          }}
        >
          <span className="p-vibes-cta-text">{d.vibesPlaylistCta}</span>
          <span aria-hidden="true">↗</span>
        </span>
      </a>
      <div className="p-vibes-pixel-cta" aria-hidden="true">
        <code className="p-vibes-code-line">
          <span className="p-vibes-code-kw">const</span>{' '}
          <span className="p-vibes-code-name">message</span>{' '}
          <span className="p-vibes-code-op">=</span>{' '}
          <span className="p-vibes-code-string">&quot;let&apos;s build something awesome&quot;</span>
          <span className="p-vibes-code-op">;</span>
        </code>
      </div>
    </section>
  );
}

// ── Case view ─────────────────────────────────────────────────────────────────

const BLOCK_COLORS = {
  task:     { border: '#4b3bff', comment: '#a798ff', hl: '#a798ff', hlBg: 'rgba(75,59,255,0.18)' },
  teamRole: { border: '#1db954', comment: '#72e69a', hl: '#72e69a', hlBg: 'rgba(29,185,84,0.14)' },
  problem:  { border: '#ff5f57', comment: '#ff8a8a', hl: '#ffb0b0', hlBg: 'rgba(255,95,87,0.14)' },
  process:  { border: '#ff8a4c', comment: '#ffb36f', hl: '#ffb36f', hlBg: 'rgba(255,138,76,0.14)' },
  solution: { border: '#d4fb3c', comment: '#d4fb3c', hl: '#d4fb3c', hlBg: 'rgba(212,251,60,0.12)' },
  overview: { border: '#4b3bff', comment: '#a798ff', hl: '#a798ff', hlBg: 'rgba(75,59,255,0.18)' },
  goals: { border: '#d4fb3c', comment: '#d4fb3c', hl: '#d4fb3c', hlBg: 'rgba(212,251,60,0.12)' },
  role: { border: '#1db954', comment: '#72e69a', hl: '#72e69a', hlBg: 'rgba(29,185,84,0.14)' },
  discovery: { border: '#ff8a4c', comment: '#ffb36f', hl: '#ffb36f', hlBg: 'rgba(255,138,76,0.14)' },
  strategy: { border: '#4b7dff', comment: '#8fb0ff', hl: '#8fb0ff', hlBg: 'rgba(75,125,255,0.16)' },
  why: { border: '#25d0c8', comment: '#78eee8', hl: '#78eee8', hlBg: 'rgba(37,208,200,0.14)' },
  ux: { border: '#ffcc66', comment: '#ffd98c', hl: '#ffd98c', hlBg: 'rgba(255,204,102,0.14)' },
  system: { border: '#b7a8ff', comment: '#c9bdff', hl: '#c9bdff', hlBg: 'rgba(183,168,255,0.16)' },
  tradeoffs: { border: '#ff6fb1', comment: '#ffa3ca', hl: '#ffa3ca', hlBg: 'rgba(255,111,177,0.14)' },
  outcome: { border: '#66e080', comment: '#98f2aa', hl: '#98f2aa', hlBg: 'rgba(102,224,128,0.14)' },
} as const;

function CaseCodeBlock({ type, label, text }: { type: keyof typeof BLOCK_COLORS; label: string; text: string }) {
  const bc = BLOCK_COLORS[type];
  const lineNoStyle = { color: C.dim, display: 'inline-block', width: 18, textAlign: 'right' as const, marginRight: 10 };
  const renderInlineHtml = (value: string) => value.replace(
    /<em>(.*?)<\/em>/g,
    `<em style="font-style:normal;color:${bc.hl};background:${bc.hlBg};padding:0 3px;border-radius:2px;">$1</em>`
  ).replace(
    /<i>(.*?)<\/i>/g,
    '<i style="font-style:italic;">$1</i>'
  );
  const contentLines = text.split('\n');

  return (
    <div className="p-case-code-block" style={{
      background: C.panel, border: `1px solid ${C.line}`, borderLeft: `3px solid ${bc.hl}`,
      borderRadius: 6, padding: '12px 14px 12px 6px', fontFamily: C.mono, fontSize: 12.5, lineHeight: 1.75, color: C.ink, overflowX: 'auto',
    }}>
      <div>
        <span style={lineNoStyle}>1</span>
        <span style={{ color: bc.comment }}>// {label}</span>
      </div>
      <div>
        <span style={lineNoStyle}>2</span>
        <Kw c="const" /> <span style={{ color: C.function }}>{type}</span> = () =&gt; (
      </div>
      <div style={{ display: 'flex', alignItems: 'flex-start', padding: '6px 0' }}>
        <span style={{ ...lineNoStyle, flexShrink: 0 }}>3</span>
        <div
          style={{ fontFamily: C.mono, fontSize: 13, lineHeight: 1.88, color: C.ink, flex: 1, minWidth: 0, paddingLeft: 1 }}
        >
          {contentLines.map((line, index) => {
            if (!line.trim()) {
              return <div key={index} style={{ height: '1.75em' }} />;
            }

            const listMatch = line.match(/^\s*>>\s?(.*)$/);
            if (listMatch) {
              return (
                <div key={index} style={{ display: 'grid', gridTemplateColumns: '26px minmax(0, 1fr)', columnGap: 10, alignItems: 'start', marginTop: index > 0 ? 1 : 0 }}>
                  <span style={{ color: C.dim, textAlign: 'right' }}>&gt;&gt;</span>
                  <span
                    style={{ minWidth: 0, wordBreak: 'break-word' }}
                    dangerouslySetInnerHTML={{ __html: renderInlineHtml(listMatch[1]) }}
                  />
                </div>
              );
            }

            return (
              <div
                key={index}
                style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word', marginTop: index > 0 ? 1 : 0 }}
                dangerouslySetInnerHTML={{ __html: renderInlineHtml(line) }}
              />
            );
          })}
        </div>
      </div>
      <div>
        <span style={lineNoStyle}>4</span>);
      </div>
    </div>
  );
}

function CaseInlineScreenshots({ screenshots }: { screenshots: NonNullable<Project['caseInlineScreenshots']> }) {
  const [idx, setIdx] = useState(0);
  const current = screenshots[idx];
  const total = screenshots.length;

  return (
    <div className="p-case-inline-screenshots">
      <div className="p-case-inline-screen">
        <img src={withSiteBase(current.image)} alt={current.alt} />
      </div>
      <div className="p-case-inline-controls">
        <button className="p-slider-btn" onClick={() => setIdx(i => (i - 1 + total) % total)} aria-label="previous screenshot">
          <svg width={12} height={12} viewBox="0 0 16 16" fill="none">
            <path d="M10 3.5L5.5 8l4.5 4.5" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <span>{idx + 1} / {total}</span>
        <div className="p-case-inline-dots">
          {screenshots.map((shot, i) => (
            <button key={shot.image} className={`p-slider-dot${i === idx ? ' p-active' : ''}`} onClick={() => setIdx(i)} aria-label={`screenshot ${i + 1}`} />
          ))}
        </div>
        <button className="p-slider-btn" onClick={() => setIdx(i => (i + 1) % total)} aria-label="next screenshot">
          <svg width={12} height={12} viewBox="0 0 16 16" fill="none">
            <path d="M6 3.5L10.5 8 6 12.5" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}

const DEFAULT_REPOSITORY_FLOW_COPY: CaseRepositoryFlowCopy = {
  title: 'Product Strategy: Split-screen Workspace',
  intro: 'Instead of a classic list → open page → back flow, I designed a dual-pane workspace. The reports list works as a command center, while the detail panel keeps analysis, evidence, and actions immediately available.',
  leftLabel: 'left:',
  leftTitle: 'Reports overview',
  leftItems: [
    'Report history, progress, prediction, match, total issues, format, and date',
    'Compact rows support fast scanning across high-volume report lists',
    'The table stays visible while the user investigates a selected report',
  ],
  rightLabel: 'right:',
  rightTitle: 'Deep-dive report analysis',
  rightItems: [
    'RL / LLM / Advice comparison stays in context',
    'Severity distribution and vulnerability list guide prioritization',
    'Parameters, rules, and actions support technical review and governance',
  ],
  decisionIntro: 'For each finding, users can confirm vulnerability, mark not vulnerability, or ignore it in future scans. These are high-risk actions, so the interaction model adds just enough friction to prevent accidental decisions.',
  actionsLabel: 'actions:',
  actionsTitle: 'Confirm / Decline / Ignore',
  actionItems: [
    { label: 'confirm', text: 'mark the finding as a real vulnerability' },
    { label: 'decline', text: 'mark it as not a vulnerability / false positive' },
    { label: 'ignore', text: 'exclude the object from the following scans' },
  ],
  safetyLabel: 'safety layer',
  safetyItems: [
    'Hover tooltips explain the action before click',
    'Confirmation modals protect high-risk decisions',
    'Toast feedback confirms the result and keeps triage moving',
  ],
  whyTitle: 'Why this works',
  whyItems: [
    { label: 'Zero-context switching:', text: 'users stay in one operational space.' },
    { label: 'Faster scanning:', text: 'the list works as a command center.' },
    { label: 'Better decision confidence:', text: 'details and actions are available immediately.' },
    { label: 'Enterprise efficiency:', text: 'the structure supports high-volume triage.' },
  ],
  choicesTitle: 'Design choices',
  choicesItems: [
    { label: 'Dual-pane layout:', text: 'faster than opening and closing separate detail pages.' },
    { label: 'Status timeline:', text: 'Waiting → RL → LLM → Advice → Completed / Failed shows the system process.' },
    { label: 'Confirmation modals:', text: 'high-risk actions need error prevention and audit confidence.' },
    { label: 'Semantic color:', text: 'in AppSec, color is a language for risk and system state.' },
  ],
};

function CaseRepositoryFlow({
  screenshots,
  copy = DEFAULT_REPOSITORY_FLOW_COPY,
}: {
  screenshots?: Project['caseInlineScreenshots'];
  copy?: CaseRepositoryFlowCopy;
}) {
  return (
    <section className="p-case-flow-card p-case-flow-card-blue">
      <h2>{copy.title}</h2>
      <p className="p-case-flow-line">{copy.intro}</p>
      <div className="p-case-article-grid p-case-workspace-grid">
        <article className="p-case-workspace-card p-case-workspace-card-left">
          <h4><span>{copy.leftLabel}</span> {copy.leftTitle}</h4>
          <ul>
            {copy.leftItems.map(item => <li key={item}>{item}</li>)}
          </ul>
        </article>
        <article className="p-case-workspace-card p-case-workspace-card-right">
          <h4><span>{copy.rightLabel}</span> {copy.rightTitle}</h4>
          <ul>
            {copy.rightItems.map(item => <li key={item}>{item}</li>)}
          </ul>
        </article>
      </div>

      {screenshots?.length ? <CaseInlineScreenshots screenshots={screenshots} /> : null}

      <p className="p-case-flow-line">{copy.decisionIntro}</p>
      <div className="p-case-article-grid p-case-workspace-grid">
        <article className="p-case-workspace-card p-case-workspace-card-left p-case-ignore-risk">
          <h4><span>{copy.actionsLabel}</span> {copy.actionsTitle}</h4>
          <ul>
            {copy.actionItems.map(item => (
              <li key={item.label}><strong>{item.label}</strong> — {item.text}</li>
            ))}
          </ul>
        </article>
        <article className="p-case-workspace-card p-case-workspace-card-right p-case-ignore-control">
          <h4><span>{copy.safetyLabel}</span>{copy.safetyTitle ? ` ${copy.safetyTitle}` : ''}</h4>
          <ul>
            {copy.safetyItems.map(item => <li key={item}>{item}</li>)}
          </ul>
        </article>
      </div>

      <div className="p-case-flow-reasons">
        <article>
          <h2>{copy.whyTitle}</h2>
          <ul>
            {copy.whyItems.map(item => (
              <li key={item.label}><strong>{item.label}</strong> <span>{item.text}</span></li>
            ))}
          </ul>
        </article>
        <article className="p-case-flow-decision">
          <h2>{copy.choicesTitle}</h2>
          <ul>
            {copy.choicesItems.map(item => (
              <li key={item.label}><strong>{item.label}</strong> <span>{item.text}</span></li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}

function CaseArticle({
  html,
  screenshots,
  flowCopy,
}: {
  html: string;
  screenshots?: Project['caseInlineScreenshots'];
  flowCopy?: Project['caseRepositoryFlowCopy'];
}) {
  const repositoryMarker = '<div data-case-flow="repository"></div>';
  const [beforeRepository, afterRepository = ''] = html.split(repositoryMarker);
  const afterWithoutIgnoreMarker = afterRepository.replace('<div data-case-flow="ignore"></div>', '');

  return (
    <article className="p-case-article">
      <div dangerouslySetInnerHTML={{ __html: beforeRepository }} />
      <CaseRepositoryFlow screenshots={screenshots} copy={flowCopy} />
      {afterWithoutIgnoreMarker ? <div dangerouslySetInnerHTML={{ __html: afterWithoutIgnoreMarker }} /> : null}
    </article>
  );
}

function CaseView({ project, d, onBack }: { project: Project; d: LangData; onBack: () => void }) {
  const [slideIdx, setSlideIdx] = useState(0);
  const [activeInfoTab, setActiveInfoTab] = useState('task');
  const slides = (project.slides && project.slides.length)
    ? project.slides
    : [{ cover: project.cover, caption: project.caption || project.subtitle }];
  const current = slides[slideIdx];
  const total = slides.length;
  const defaultInfoTabs = [
    { id: 'task', tone: 'task' as const, label: d.caseTaskLabel, codeLabel: d.caseTaskLabel, text: project.task },
    { id: 'problem', tone: 'problem' as const, label: d.caseProblemLabel, codeLabel: d.caseProblemLabel, text: project.problemFull },
    ...(project.process ? [{ id: 'process', tone: 'process' as const, label: d.caseProcessLabel, codeLabel: d.caseProcessLabel, text: project.process }] : []),
    { id: 'solution', tone: 'solution' as const, label: d.caseSolutionLabel, codeLabel: d.caseSolutionLabel, text: project.solution },
    ...(project.teamRole ? [{ id: 'teamRole', tone: 'teamRole' as const, label: d.caseTeamRoleLabel, codeLabel: d.caseTeamRoleLabel, text: project.teamRole }] : []),
  ];
  const infoTabs = project.caseTabs?.length
    ? project.caseTabs.map(tab => ({
      id: tab.id,
      tone: tab.tone,
      label: tab.label,
      codeLabel: tab.codeLabel,
      text: tab.text,
    }))
    : defaultInfoTabs;
  const activeInfo = infoTabs.find(tab => tab.id === activeInfoTab) || infoTabs[0];
  const useBottomScreenshots = Boolean(project.caseTabs?.length && project.caseInlineScreenshots?.length);

  useEffect(() => {
    setActiveInfoTab(infoTabs[0]?.id || 'task');
    setSlideIdx(0);
  }, [project.id]);

  return (
    <section id="case" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <button className="p-case-back" onClick={onBack}>← {d.caseBackLabel}</button>

      <h1 style={{ fontFamily: C.sans, fontSize: 'clamp(30px, 4.4vw, 42px)', fontWeight: 500, letterSpacing: '-0.02em', lineHeight: 1.08, margin: 0, color: C.ink, whiteSpace: 'pre-line' }}>
        {project.title}
        <span style={{ color: C.dim, fontWeight: 300, fontSize: '0.55em', fontFamily: C.mono, letterSpacing: 0, marginLeft: 6, verticalAlign: 'middle', opacity: 0.7 }}>.case</span>
      </h1>

      <div className="p-case-meta-row">
        <div className="p-case-tags">
          {project.tags.map(t => (
            <span key={t} style={{ fontFamily: C.mono, fontSize: 13, padding: '5px 14px', border: `1px solid ${C.line}`, borderRadius: 999, color: C.accent2, background: C.tagBg, textTransform: 'lowercase' }}>{t}</span>
          ))}
        </div>
        <div className="p-case-metric">
          <span>{project.metric.value}</span>
          <span>{project.metric.label}</span>
        </div>
      </div>

      {project.caseArticleHtml ? (
        <CaseArticle
          html={project.caseArticleHtml}
          screenshots={project.caseInlineScreenshots}
          flowCopy={project.caseRepositoryFlowCopy}
        />
      ) : (
        <div className={`p-case-info-tabs p-case-info-tabs-${project.id}`}>
          <div className="p-case-info-tablist" role="tablist" aria-label="case details">
            {infoTabs.map(tab => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={activeInfo.id === tab.id}
                className={`p-case-info-tab p-case-info-tab-${tab.tone}${activeInfo.id === tab.id ? ' p-active' : ''}`}
                onClick={() => setActiveInfoTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <CaseCodeBlock type={activeInfo.tone} label={activeInfo.codeLabel} text={activeInfo.text} />
        </div>
      )}

      {!project.caseArticleHtml && !useBottomScreenshots && (
        <div style={{ border: `1px solid ${C.line}`, borderRadius: 6, background: C.panel, overflow: 'hidden' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px', borderBottom: `1px solid ${C.line}`, background: C.panel2 }}>
            <MacDots />
            <span style={{ fontFamily: C.mono, fontSize: 11, color: C.muted, marginLeft: 4, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              ~/{project.id}.case — {project.subtitle}
            </span>
          </div>

          <div className={`p-case-screen-body${current.image ? ' p-has-image' : ''}${current.imageMode === 'fit' ? ' p-case-screen-fit' : ''}`}>
            {current.image ? (
              <img
                src={withSiteBase(current.image)}
                alt={current.alt || project.subtitle}
                style={{
                  width: current.imageMode === 'fit' || current.imageMode === 'full' ? '100%' : 'auto',
                  maxWidth: '100%',
                  height: 'auto',
                  display: 'block',
                  borderRadius: 0,
                  margin: '0 auto',
                }}
              />
            ) : (
              <span style={{ position: 'relative', zIndex: 3, fontFamily: C.mono, fontSize: 11, color: C.muted, padding: '8px 14px', border: `1px dashed ${C.line}`, borderRadius: 3, background: C.casePlaceholderBg, backdropFilter: 'blur(4px)', textAlign: 'center', maxWidth: '80%', lineHeight: 1.5 }}>
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

          {current.caption ? (
            <div style={{ fontFamily: C.mono, fontSize: 12, color: C.muted, lineHeight: 1.65, padding: '12px 16px 14px', background: C.panel2, borderTop: `1px solid ${C.line}` }}>
              // {current.caption}
            </div>
          ) : null}
        </div>
      )}

      {useBottomScreenshots && project.caseInlineScreenshots ? (
        <section className="p-case-screens-bottom" aria-label="case screenshots">
          <div className="p-case-screens-bottom-head">
            <MacDots />
            <span style={{ fontFamily: C.mono, fontSize: 11, color: C.muted, marginLeft: 4, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              ~/{project.id}.case — {project.subtitle}
            </span>
          </div>
          <CaseInlineScreenshots screenshots={project.caseInlineScreenshots} />
        </section>
      ) : null}
    </section>
  );
}

// ── Main Portfolio component ──────────────────────────────────────────────────

export function Portfolio({
  forcedLang,
  hideLangSwitcher = false,
}: {
  forcedLang?: Lang;
  hideLangSwitcher?: boolean;
} = {}) {
  const [lang, setLang] = useState<Lang>(() => {
    if (forcedLang) return forcedLang;
    try {
      const s = localStorage.getItem('portfolio-lang');
      if (s === 'ru' || s === 'en') return s as Lang;
    } catch { /* noop */ }
    return 'en';
  });
  const [currentCase, setCurrentCase] = useState<string | null>(null);
  const [cvOpen, setCvOpen] = useState(() => window.location.hash === '#cv');
  const [activeSections, setActiveSections] = useState<string[]>(['readme']);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const mainRef = useRef<HTMLDivElement>(null);
  const activeLang = forcedLang || lang;
  const d = DATA[activeLang];
  const visibleProjects = d.projects.filter(project => !project.isLoading && !HIDDEN_PROJECT_IDS.has(project.id));

  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el || !mainRef.current) return;
    mainRef.current.scrollTo({ top: el.offsetTop - 20, behavior: 'smooth' });
  }, []);

  const openCase = useCallback((id: string) => {
    setCvOpen(false);
    setCurrentCase(id);
    if (window.location.hash) history.replaceState(null, '', window.location.pathname);
    requestAnimationFrame(() => mainRef.current?.scrollTo({ top: 0 }));
  }, []);

  const closeCase = useCallback(() => {
    const wasId = currentCase;
    setCurrentCase(null);
    requestAnimationFrame(() => { if (wasId) scrollToSection(wasId); });
  }, [currentCase, scrollToSection]);

  const openCv = useCallback(() => {
    setCurrentCase(null);
    setCvOpen(true);
    history.replaceState(null, '', '#cv');
    requestAnimationFrame(() => mainRef.current?.scrollTo({ top: 0 }));
  }, []);

  const openPortfolio = useCallback(() => {
    setCvOpen(false);
    setCurrentCase(null);
    history.replaceState(null, '', window.location.pathname);
    requestAnimationFrame(() => scrollToSection('readme'));
  }, [scrollToSection]);

  const switchLang = (l: Lang) => {
    if (forcedLang) return;
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
      if (currentCase || cvOpen) return;
      const sections = Array.from(main.querySelectorAll<HTMLElement>('#editor > section'));
      const scrollTop = main.scrollTop;
      const threshold = 80;
      const viewportHeight = main.clientHeight;
      const visibleIds = sections
        .filter(sec => {
          const top = sec.offsetTop - scrollTop;
          const bottom = top + sec.offsetHeight;
          return bottom > threshold && top < viewportHeight - threshold;
        })
        .map(sec => sec.id);
      let activeId = sections[0]?.id || 'readme';
      for (const sec of sections) {
        if (sec.offsetTop - threshold <= scrollTop) activeId = sec.id;
        else break;
      }
      const next = visibleIds.length ? visibleIds : [activeId];
      setActiveSections(prev => (
        prev.length === next.length && prev.every((id, i) => id === next[i])
          ? prev
          : next
      ));
    };
    let ticking = false;
    const onScroll = () => {
      if (!ticking) { requestAnimationFrame(() => { update(); ticking = false; }); ticking = true; }
    };
    main.addEventListener('scroll', onScroll);
    update();
    return () => main.removeEventListener('scroll', onScroll);
  }, [currentCase, cvOpen]);

  const currentProject = currentCase ? d.projects.find(p => p.id === currentCase) : null;

  // Sidebar tree item
  function TreeItem({ id, icon, name, ext, isProject = false, href }: { id: string; icon: string; name: string; ext: string; isProject?: boolean; href?: string }) {
    const isActive = cvOpen ? id === 'cv' : (currentCase ? (isProject && id === currentCase) : (!isProject && activeSections.includes(id)));
    const inner = (
      <>
        <span className="p-tico" style={{ width: 12, display: 'inline-block', flexShrink: 0, fontSize: 10, lineHeight: '10px', textAlign: 'center' }}>{icon}</span>
        <span className="p-tname" style={{ flex: 1, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{name}</span>
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
          else if (id === 'cv') { openCv(); }
          else if (currentCase || cvOpen) {
            setCurrentCase(null);
            setCvOpen(false);
            if (window.location.hash) history.replaceState(null, '', window.location.pathname);
            requestAnimationFrame(() => scrollToSection(id));
          } else { scrollToSection(id); }
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
      <div className="p-grid" style={{ display: 'grid', gridTemplateRows: '36px 1fr 22px', gridTemplateColumns: '230px 1fr', gridTemplateAreas: '"top top" "side main" "status status"', height: '100vh', position: 'relative', zIndex: 1 }}>

        {/* Top bar */}
        <header style={{ gridArea: 'top', borderBottom: `1px solid ${C.line}`, background: C.panel, display: 'flex', alignItems: 'center', padding: '0 14px', gap: 14, fontSize: 11, color: C.muted, fontFamily: C.mono }}>
          <button className="p-burger" onClick={() => setSidebarOpen(!sidebarOpen)} aria-label="menu">
            <svg width={16} height={16} viewBox="0 0 16 16" fill="none">
              <path d="M2 4h12M2 8h12M2 12h12" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" />
            </svg>
          </button>
          <MacDots />
          <span className="p-header-title" style={{ color: C.ink }}>~/portfolio/<b style={{ color: C.accent2, fontWeight: 500 }}>{currentCase ? `${currentCase}.case` : (cvOpen ? 'anna_demeshko.cv.pdf' : (activeLang === 'ru' ? 'анна_демешко.fig' : 'anna_demeshko.fig'))}</b></span>
          <div style={{ marginLeft: 'auto', display: 'flex', gap: 14, alignItems: 'center' }}>
            <span className="p-header-meta" style={{ opacity: 0.7 }}>{d.ln}</span>
            <span className="p-header-meta" style={{ opacity: 0.7 }}>utf-8</span>
            {!hideLangSwitcher && (
              <div style={{ display: 'flex', border: `1px solid ${C.line}`, borderRadius: 999, padding: 2, marginLeft: 6 }}>
                {(['ru', 'en'] as Lang[]).map(l => (
                  <button key={l} className={`p-lang-btn${activeLang === l ? ' p-active' : ''}`} onClick={() => switchLang(l)}>{l}</button>
                ))}
              </div>
            )}
          </div>
        </header>


        {/* Sidebar */}
        <aside className={`p-sidebar${sidebarOpen ? ' p-sidebar-open' : ''}`} style={{ gridArea: 'side', background: C.panel, borderRight: `1px solid ${C.line}`, overflowY: 'auto', padding: '8px 0 20px' }}>
          {[
            { label: d.folderAbout, items: [{ id: 'readme', icon: '☰', name: 'readme', ext: '.md' }, { id: 'cv', icon: '▣', name: 'cv', ext: '.pdf' }, { id: 'stack', icon: '☰', name: 'stack', ext: '.json' }] },
            { label: d.folderProjects, items: visibleProjects.map(p => ({ id: p.id, icon: '◆', name: p.id.replace(/-/g, '_'), ext: '.case', isProject: true })) },
            { label: d.folderEtc, items: [{ id: 'contact', icon: '@', name: 'contact', ext: '.md' }, { id: 'vibes', icon: '♪', name: 'now playing', ext: '.mp3' }] },
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
          <div className="p-editor" id="editor" style={{ padding: '24px 40px 48px', maxWidth: 1200, margin: '0 auto', width: '100%', display: 'flex', flexDirection: 'column', gap: 36 }}>
            {currentCase && currentProject ? (
              <CaseView project={currentProject} d={d} onBack={closeCase} />
            ) : cvOpen ? (
              <CvView d={d} lang={activeLang} onBack={openPortfolio} />
            ) : (
              <>
                <ReadmeSection d={d} lang={activeLang} onOpenCv={openCv} />
                <ProjectsSection d={d} onOpenCase={openCase} lang={activeLang} />
                <StackSection d={d} />
                <ContactSection d={d} />
                <VibesSection d={d} />
              </>
            )}
          </div>
        </main>

        {/* Status bar / Mobile nav */}
        <footer className="p-statusbar" style={{ gridArea: 'status', background: C.accent, color: '#fff', display: 'flex', alignItems: 'center', padding: '0 14px', gap: 14, fontSize: 10, letterSpacing: '0.04em', fontFamily: C.mono }}>
          <span className="p-blink" style={{ color: 'var(--p-ready-dot)' }}>●</span>
          <span className="p-blink" style={{ color: 'var(--p-ready-dot)' }}>{d.statReady}</span>
          <span style={{ opacity: 0.4 }}>|</span>
          <span>branch: main</span>
          <span style={{ opacity: 0.4 }}>|</span>
          <span>📍 somewhere on Earth</span>
          <div style={{ marginLeft: 'auto', display: 'flex', gap: 14 }}>
            <span>built in figma</span>
            <span style={{ opacity: 0.4 }}>|</span>
            <span>made with caffeine</span>
          </div>
        </footer>

        {/* Mobile bottom nav */}
        <nav className="p-mobile-nav">
          {[
            { id: 'readme', label: 'About' },
            { id: 'projects', label: 'Projects' },
            { id: 'cv', label: 'CV' },
            { id: 'contact', label: 'Contact' },
          ].map((item, idx, arr) => (
            <button
              key={item.id}
              className={`p-mobile-nav-btn${(item.id === 'cv' ? cvOpen : (!currentCase && !cvOpen && activeSections.includes(item.id))) ? ' p-active' : ''}`}
              onClick={() => {
                setSidebarOpen(false);
                if (item.id === 'cv') {
                  openCv();
                } else if (currentCase || cvOpen) {
                  setCurrentCase(null);
                  setCvOpen(false);
                  if (window.location.hash) history.replaceState(null, '', window.location.pathname);
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
