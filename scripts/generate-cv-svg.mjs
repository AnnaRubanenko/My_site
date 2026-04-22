import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const out = resolve(root, 'public/anna-demeshko-cv.svg');
const photoPath = resolve(root, 'public/profile-binary-source.png');
const photo = `data:image/png;base64,${readFileSync(photoPath).toString('base64')}`;

const W = 794;
const H = 1123;
const M = 42;
const shellX = M;
const shellY = M;
const shellW = W - M * 2;
const topH = 132;
const asideW = 220;
const mainX = shellX + asideW;
const bodyY = shellY + topH;
const bodyH = H - M * 2 - topH;

const cv = {
  name: 'Анна Демешко',
  role: 'Product Designer',
  summary: 'Специализируюсь на B2B и B2C продуктах в сфере информационной безопасности, где важны логика, структура и удобство взаимодействия. Создаю интерфейсы с продуманными сценариями, очевидной логикой и чистым дизайном. Хорошо взаимодействую с PM-ами, разработчиками и аналитиками на всех этапах.',
  availability: 'Открыта к full-time формату, remote, GMT+3.',
  contacts: [
    ['телефон/тг', '+7 963 316 2580'],
    ['email', 'aneyta@mail.ru'],
  ],
  tools: ['figma', 'after effects', 'html / css', 'jira', 'confluence', 'claude', 'midjourney'],
  languages: ['русский - native', 'английский - B2 (intermediate)'],
  hardSkills: [
    'Product Discovery',
    'UX Research',
    'Usability Testing',
    'Information Architecture',
    'Interaction Design',
    'Design Systems',
    'Data-heavy Interfaces',
  ],
  softSkills: ['креативность', 'работа в команде', 'суперкоммуникация', 'самообучение', 'позитивность', 'умение аргументировать'],
  highlights: [
    '10+ запущенных продуктовых проектов',
    'B2B / B2C / SaaS / enterprise',
    'сложные таблицы, формы, фильтры и дашборды',
    'исследования, прототипы, дизайн-системы и handoff',
  ],
  experience: [
    {
      role: 'Product Designer',
      company: 'AppSec Solutions',
      period: 'февр. 2025 - март 2026 · 1 г. 2 мес.',
      details: [
        'проектировала высоконагруженные интерфейсы для B2B-продуктов в сфере информационной безопасности',
        'прорабатывала пользовательский опыт от user flows и wireframes до high-fidelity прототипов',
        'участвовала в создании дизайн-системы: компоненты, состояния, спецификации, Storybook и переезд на Taiga UI',
        'коммуницировала с продуктовыми менеджерами, разработчиками и аналитиками на всех этапах проектирования',
        'редизайнила и улучшала веб-экосистему продукта: дашборды, формы, фильтры, таблицы и сложные UI-компоненты',
        'управляла несколькими задачами параллельно, контролируя сроки, качество и консистентность решений',
      ],
    },
    {
      role: 'UX / UI Designer',
      company: 'Grokhotov studio',
      period: 'март 2024 - янв. 2025 · 11 мес.',
      details: [
        'разрабатывала wireframes, макеты и интерактивные прототипы для презентации решений команде разработки и заказчикам',
        'создавала адаптивные дизайны, редизайнила существующие интерфейсы и улучшала пользовательские пути',
        'поддерживала и обновляла дизайн-системы и UI-киты, сохраняя консистентность интерфейсов',
        'проводила usability-тестирования, собирала обратную связь и внедряла улучшения в интерфейсы',
      ],
    },
  ],
  education: [
    ['UX Researcher', 'Google UX Design', 'нояб. 2025 - фев. 2026'],
    ['UX / UI Designer', 'UPROCK SCHOOL', 'март 2024 - сент. 2024'],
    ['Аналитик ИБ', 'Университет ИТМО', 'сент. 2020 - июнь 2022'],
    ['Прикладной лингвист', 'СПбГУАП', 'сент. 2014 - июнь 2018'],
  ],
};

const esc = (value) => String(value).replace(/[&<>"']/g, (char) => ({
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&apos;',
}[char]));

const nodes = [];
const add = (node) => nodes.push(node);

function text(x, y, content, cls, opts = {}) {
  const anchor = opts.anchor ? ` text-anchor="${opts.anchor}"` : '';
  add(`<text x="${x}" y="${y}" class="${cls}"${anchor}>${esc(content)}</text>`);
}

function wrapText(value, maxChars) {
  const words = String(value).split(/\s+/);
  const lines = [];
  let line = '';
  for (const word of words) {
    const next = line ? `${line} ${word}` : word;
    if (next.length > maxChars && line) {
      lines.push(line);
      line = word;
    } else {
      line = next;
    }
  }
  if (line) lines.push(line);
  return lines;
}

function paragraph(x, y, widthChars, value, cls, lineH) {
  const lines = wrapText(value, widthChars);
  lines.forEach((line, i) => text(x, y + i * lineH, line, cls));
  return y + lines.length * lineH;
}

function heading(x, y, label) {
  text(x, y, label.toUpperCase(), 'heading');
  return y + 17;
}

function bulletList(x, y, items, widthChars, cls = 'body', lineH = 14) {
  for (const item of items) {
    const lines = wrapText(item, widthChars);
    add(`<circle cx="${x}" cy="${y - 4}" r="2.2" fill="#536b00"/>`);
    lines.forEach((line, i) => text(x + 10, y + i * lineH, line, cls));
    y += lines.length * lineH + 6;
  }
  return y;
}

function tagList(x, y, items, maxW) {
  let cx = x;
  let cy = y;
  for (const item of items) {
    const w = Math.max(34, item.length * 5.2 + 14);
    if (cx + w > x + maxW) {
      cx = x;
      cy += 24;
    }
    add(`<rect x="${cx}" y="${cy - 13}" width="${w}" height="18" rx="9" fill="#fff" stroke="#dfe3ea"/>`);
    text(cx + w / 2, cy, item, 'tag', { anchor: 'middle' });
    cx += w + 6;
  }
  return cy + 18;
}

function contactBlock(x, y) {
  y = heading(x, y, 'контакты');
  for (const [label, value] of cv.contacts) {
    text(x, y, label.toUpperCase(), 'label');
    text(x, y + 16, value, 'strong');
    add(`<line x1="${x}" y1="${y + 26}" x2="${x + 160}" y2="${y + 26}" stroke="#d8dbe2" stroke-dasharray="3 4"/>`);
    y += 42;
  }
  return y + 6;
}

function block(x, y, label, render) {
  y = heading(x, y, label);
  return render(y) + 11;
}

add(`<rect width="${W}" height="${H}" fill="#ffffff"/>`);
add(`<rect x="${shellX}" y="${shellY}" width="${shellW}" height="${H - M * 2}" rx="8" fill="#ffffff" stroke="#e3e5ea"/>`);
add(`<defs>
  <linearGradient id="topBg" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0%" stop-color="#f7faef"/>
    <stop offset="50%" stop-color="#f4f5ff"/>
    <stop offset="100%" stop-color="#ffffff"/>
  </linearGradient>
  <clipPath id="photoClip"><rect x="${shellX + 20}" y="${shellY + 26}" width="78" height="78" rx="14"/></clipPath>
</defs>`);
add(`<rect x="${shellX}" y="${shellY}" width="${shellW}" height="${topH}" rx="8" fill="url(#topBg)"/>`);
add(`<line x1="${shellX}" y1="${bodyY}" x2="${shellX + shellW}" y2="${bodyY}" stroke="#e3e5ea"/>`);
add(`<image href="${photo}" x="${shellX + 20}" y="${shellY + 26}" width="78" height="78" clip-path="url(#photoClip)" preserveAspectRatio="xMidYMid slice"/>`);
text(shellX + 116, shellY + 66, cv.name, 'name');
text(shellX + 118, shellY + 88, cv.role, 'accentMono');
paragraph(shellX + shellW - 205, shellY + 60, 31, cv.availability, 'accentMonoRight', 13);

add(`<rect x="${shellX}" y="${bodyY}" width="${asideW}" height="${bodyH}" fill="#fafbfc"/>`);
add(`<line x1="${mainX}" y1="${bodyY}" x2="${mainX}" y2="${H - M}" stroke="#e3e5ea"/>`);

let ay = bodyY + 28;
const ax = shellX + 18;
ay = contactBlock(ax, ay);
ay = block(ax, ay, 'инструменты работы', (y) => tagList(ax, y, cv.tools, 170));
ay = block(ax, ay, 'языки', (y) => bulletList(ax, y, cv.languages, 25, 'bodySmall', 13));
ay = block(ax, ay, 'хард скиллс', (y) => bulletList(ax, y, cv.hardSkills, 25, 'bodySmall', 13));
ay = block(ax, ay, 'софт скиллс', (y) => bulletList(ax, y, cv.softSkills, 25, 'bodySmall', 13));

let my = bodyY + 28;
const mx = mainX + 18;
const mainW = shellW - asideW - 36;
my = block(mx, my, 'профиль', (y) => paragraph(mx, y, 82, cv.summary, 'body', 15));
my = block(mx, my, 'ключевые факты', (y) => {
  const colW = (mainW - 20) / 2;
  const left = cv.highlights.slice(0, 2);
  const right = cv.highlights.slice(2);
  const y1 = bulletList(mx, y, left, 34, 'body', 14);
  const y2 = bulletList(mx + colW + 20, y, right, 34, 'body', 14);
  return Math.max(y1, y2);
});

my = heading(mx, my, 'опыт работы');
for (const job of cv.experience) {
  const startY = my;
  text(mx, my, job.role, 'jobTitle');
  text(mx + job.role.length * 8 + 14, my, job.company, 'mutedMono');
  text(shellX + shellW - 18, my, job.period, 'period', { anchor: 'end' });
  my += 22;
  my = bulletList(mx, my, job.details, 78, 'bodySmall', 13);
  add(`<line x1="${mx}" y1="${my + 2}" x2="${shellX + shellW - 18}" y2="${my + 2}" stroke="#e3e5ea"/>`);
  my += 18;
  if (my - startY < 70) my = startY + 70;
}

my = heading(mx, my + 2, 'образование');
const eduColW = (mainW - 24) / 2;
cv.education.forEach(([title, place, period], i) => {
  const col = i % 2;
  const row = Math.floor(i / 2);
  const x = mx + col * (eduColW + 24);
  const y = my + row * 60;
  text(x, y, title, 'eduTitle');
  text(x + Math.min(title.length * 7.4 + 10, eduColW - 82), y, place, 'mutedMono');
  text(x, y + 21, period, 'mutedMono');
  add(`<line x1="${x}" y1="${y + 34}" x2="${x + eduColW}" y2="${y + 34}" stroke="#e3e5ea"/>`);
});

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
<style>
  text { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif; fill: #151517; }
  .name { font-size: 31px; font-weight: 650; letter-spacing: -0.6px; }
  .heading { fill: #6b7280; font-family: "SF Mono", "Courier New", monospace; font-size: 10px; font-weight: 700; letter-spacing: 1px; }
  .label { fill: #6b7280; font-family: "SF Mono", "Courier New", monospace; font-size: 8.5px; letter-spacing: 0.8px; }
  .strong { font-size: 11px; font-weight: 650; }
  .body { font-size: 11px; }
  .bodySmall { font-size: 10px; }
  .tag { font-family: "SF Mono", "Courier New", monospace; font-size: 8.7px; }
  .accentMono, .accentMonoRight { fill: #536b00; font-family: "SF Mono", "Courier New", monospace; font-size: 10.5px; }
  .accentMonoRight { text-anchor: end; }
  .mutedMono { fill: #6b7280; font-family: "SF Mono", "Courier New", monospace; font-size: 9px; }
  .period { fill: #536b00; font-family: "SF Mono", "Courier New", monospace; font-size: 9px; }
  .jobTitle { font-size: 13.5px; font-weight: 650; }
  .eduTitle { font-size: 12px; font-weight: 650; }
</style>
${nodes.join('\n')}
</svg>
`;

writeFileSync(out, svg);
console.log(out);
