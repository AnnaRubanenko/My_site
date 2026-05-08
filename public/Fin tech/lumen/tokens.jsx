// Lumen design tokens — futuristic AI-native fintech, dark mode primary
const L = {
  // Backgrounds — cool deep blue-black
  bg:        '#0a0b10',
  bgRaised:  '#10131c',
  surface:   '#151926',
  surface2:  '#1c2030',
  hairline:  'rgba(255,255,255,0.07)',
  hairline2: 'rgba(255,255,255,0.12)',

  // Text
  text:      '#f0f1f6',
  textDim:   'rgba(240,241,246,0.62)',
  textMute:  'rgba(240,241,246,0.38)',

  // Holographic accents
  cyan:      'oklch(0.84 0.13 200)',
  violet:    'oklch(0.70 0.17 290)',
  magenta:   'oklch(0.72 0.18 340)',
  iris:      'oklch(0.74 0.16 270)',

  // Semantic
  pos:       'oklch(0.80 0.17 155)',
  neg:       'oklch(0.70 0.21 25)',
  warn:      'oklch(0.82 0.16 75)',

  // Type
  font:      "'Geist', -apple-system, system-ui, sans-serif",
  mono:      "'Geist Mono', ui-monospace, SFMono-Regular, monospace",
  serif:     "'Instrument Serif', Georgia, serif",

  // Shadows
  glow:      '0 0 0 1px rgba(255,255,255,0.06), 0 12px 40px -8px rgba(110,80,255,0.18), 0 2px 8px rgba(0,0,0,0.4)',
  card:      '0 0 0 1px rgba(255,255,255,0.06), 0 1px 0 rgba(255,255,255,0.04) inset, 0 8px 24px rgba(0,0,0,0.5)',

  // Holo gradient
  holo:      'linear-gradient(135deg, oklch(0.84 0.13 200) 0%, oklch(0.74 0.16 270) 50%, oklch(0.72 0.18 340) 100%)',
  holoSoft:  'linear-gradient(135deg, oklch(0.84 0.13 200 / 0.18) 0%, oklch(0.74 0.16 270 / 0.18) 50%, oklch(0.72 0.18 340 / 0.18) 100%)',
};

// Mesh background for screen body — multi-stop radial gradients on dark
const meshBg = `
  radial-gradient(120% 80% at 0% 0%, oklch(0.30 0.08 270 / 0.45) 0%, transparent 55%),
  radial-gradient(100% 70% at 100% 10%, oklch(0.32 0.10 200 / 0.35) 0%, transparent 50%),
  radial-gradient(140% 100% at 50% 100%, oklch(0.28 0.08 320 / 0.30) 0%, transparent 55%),
  ${L.bg}
`;

window.L = L;
window.meshBg = meshBg;
