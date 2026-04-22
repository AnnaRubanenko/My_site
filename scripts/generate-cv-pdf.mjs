import { execFileSync } from 'node:child_process';
import { mkdtempSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const out = resolve(root, 'public/anna-demeshko-cv.pdf');
const tmp = mkdtempSync(resolve(tmpdir(), 'anna-cv-'));
const htmlPath = resolve(tmp, 'cv.html');
const photo = pathToFileURL(resolve(root, 'public/profile-binary-source.png')).href;

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
  languages: ['русский — native', 'английский — B2 (intermediate)'],
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
      period: 'февр. 2025 — март 2026 · 1 г. 2 мес.',
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
      period: 'март 2024 — янв. 2025 · 11 мес.',
      details: [
        'разрабатывала wireframes, макеты и интерактивные прототипы для презентации решений команде разработки и заказчикам',
        'создавала адаптивные дизайны, редизайнила существующие интерфейсы и улучшала пользовательские пути',
        'поддерживала и обновляла дизайн-системы и UI-киты, сохраняя консистентность интерфейсов',
        'проводила usability-тестирования, собирала обратную связь и внедряла улучшения в интерфейсы',
      ],
    },
  ],
  education: [
    ['UX Researcher', 'Google UX Design', 'нояб. 2025 — фев. 2026'],
    ['UX / UI Designer', 'UPROCK SCHOOL', 'март 2024 — сент. 2024'],
    ['Аналитик ИБ', 'Университет ИТМО', 'сент. 2020 — июнь 2022'],
    ['Прикладной лингвист', 'СПбГУАП', 'сент. 2014 — июнь 2018'],
  ],
};

const esc = (value) => String(value).replace(/[&<>"']/g, (char) => ({
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
}[char]));

const list = (items) => `<ul class="list">${items.map((item) => `<li>${esc(item)}</li>`).join('')}</ul>`;
const tags = (items) => `<div class="tags">${items.map((item) => `<span>${esc(item)}</span>`).join('')}</div>`;

const html = `<!doctype html>
<html lang="ru">
<head>
  <meta charset="utf-8">
  <title>Anna Demeshko CV</title>
  <style>
    @page { size: A4; margin: 11mm; }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      color: #151517;
      background: #fff;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif;
      font-size: 10.4px;
      line-height: 1.38;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
    .shell {
      border: 1px solid #e3e5ea;
      border-radius: 8px;
      overflow: hidden;
      background: #fff;
    }
    .top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 22px;
      padding: 18px 20px;
      border-bottom: 1px solid #e3e5ea;
      background: linear-gradient(135deg, #f7faef, #f4f5ff 48%, #fff);
    }
    .person {
      display: flex;
      align-items: center;
      gap: 16px;
      min-width: 0;
    }
    .photo {
      width: 78px;
      height: 78px;
      border-radius: 14px;
      object-fit: cover;
      flex: 0 0 auto;
    }
    h1 {
      margin: 0;
      font-size: 31px;
      line-height: 1;
      letter-spacing: -0.02em;
      font-weight: 650;
    }
    .role {
      margin: 7px 0 0;
      color: #536b00;
      font-family: "SF Mono", "Courier New", monospace;
      font-size: 10.5px;
    }
    .availability {
      max-width: 190px;
      color: #536b00;
      font-family: "SF Mono", "Courier New", monospace;
      font-size: 9.6px;
      text-align: right;
    }
    .grid {
      display: grid;
      grid-template-columns: 31% 69%;
    }
    aside {
      padding: 16px 17px;
      border-right: 1px solid #e3e5ea;
      background: #fafbfc;
    }
    main {
      padding: 16px 18px;
    }
    .block + .block { margin-top: 15px; }
    h2 {
      margin: 0 0 8px;
      color: #6b7280;
      font-family: "SF Mono", "Courier New", monospace;
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    .contact {
      padding: 7px 0;
      border-bottom: 1px dashed #d8dbe2;
    }
    .label {
      display: block;
      color: #6b7280;
      font-family: "SF Mono", "Courier New", monospace;
      font-size: 8.3px;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    .value {
      display: block;
      margin-top: 2px;
      color: #151517;
      font-weight: 650;
      overflow-wrap: anywhere;
    }
    .tags {
      display: flex;
      flex-wrap: wrap;
      gap: 5px;
    }
    .tags span {
      padding: 4px 6px;
      border: 1px solid #dfe3ea;
      border-radius: 999px;
      background: #fff;
      font-family: "SF Mono", "Courier New", monospace;
      font-size: 8.7px;
      line-height: 1.1;
    }
    .list {
      margin: 0;
      padding: 0;
      list-style: none;
    }
    .list li {
      position: relative;
      padding-left: 11px;
      margin-top: 5px;
    }
    .list li:first-child { margin-top: 0; }
    .list li::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0.55em;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background: #536b00;
    }
    .summary {
      margin: 0;
      font-size: 11.4px;
      line-height: 1.48;
    }
    .facts {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 6px 14px;
    }
    .timeline {
      display: flex;
      flex-direction: column;
      gap: 13px;
    }
    .job {
      display: grid;
      grid-template-columns: minmax(0, 1fr) auto;
      gap: 7px 12px;
      padding-bottom: 12px;
      border-bottom: 1px solid #e3e5ea;
      break-inside: avoid;
    }
    .job:last-child { border-bottom: 0; padding-bottom: 0; }
    .job-head {
      display: flex;
      align-items: flex-end;
      gap: 8px;
      min-width: 0;
    }
    h3 {
      margin: 0;
      font-size: 13.5px;
      line-height: 1.1;
      font-weight: 650;
    }
    .company {
      color: #6b7280;
      font-family: "SF Mono", "Courier New", monospace;
      font-size: 9px;
      line-height: 1.1;
      white-space: nowrap;
    }
    .period {
      color: #536b00;
      font-family: "SF Mono", "Courier New", monospace;
      font-size: 9px;
      white-space: nowrap;
    }
    .job .list {
      grid-column: 1 / -1;
      font-size: 10.1px;
    }
    .education {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 11px 18px;
    }
    .edu {
      padding-bottom: 9px;
      border-bottom: 1px solid #e3e5ea;
      break-inside: avoid;
    }
    .edu-head {
      display: flex;
      align-items: flex-end;
      gap: 9px;
      min-width: 0;
      white-space: nowrap;
    }
    .edu-title {
      font-size: 12px;
      line-height: 1.1;
      font-weight: 650;
    }
    .place {
      color: #6b7280;
      font-family: "SF Mono", "Courier New", monospace;
      font-size: 8.8px;
      line-height: 1.1;
    }
    .edu-period {
      display: block;
      margin-top: 5px;
      color: #6b7280;
      font-family: "SF Mono", "Courier New", monospace;
      font-size: 8.8px;
    }
  </style>
</head>
<body>
  <section class="shell">
    <header class="top">
      <div class="person">
        <img src="${photo}" alt="" class="photo">
        <div>
          <h1>${esc(cv.name)}</h1>
          <p class="role">${esc(cv.role)}</p>
        </div>
      </div>
      <div class="availability">${esc(cv.availability)}</div>
    </header>
    <div class="grid">
      <aside>
        <section class="block">
          <h2>контакты</h2>
          ${cv.contacts.map(([label, value]) => `<div class="contact"><span class="label">${esc(label)}</span><strong class="value">${esc(value)}</strong></div>`).join('')}
        </section>
        <section class="block"><h2>инструменты работы</h2>${tags(cv.tools)}</section>
        <section class="block"><h2>языки</h2>${list(cv.languages)}</section>
        <section class="block"><h2>хард скиллс</h2>${list(cv.hardSkills)}</section>
        <section class="block"><h2>софт скиллс</h2>${list(cv.softSkills)}</section>
      </aside>
      <main>
        <section class="block">
          <h2>профиль</h2>
          <p class="summary">${esc(cv.summary)}</p>
        </section>
        <section class="block">
          <h2>ключевые факты</h2>
          <div class="facts">${list(cv.highlights)}</div>
        </section>
        <section class="block">
          <h2>опыт работы</h2>
          <div class="timeline">
            ${cv.experience.map((job) => `<article class="job">
              <div class="job-head"><h3>${esc(job.role)}</h3><span class="company">${esc(job.company)}</span></div>
              <span class="period">${esc(job.period)}</span>
              ${list(job.details)}
            </article>`).join('')}
          </div>
        </section>
        <section class="block">
          <h2>образование</h2>
          <div class="education">
            ${cv.education.map(([title, place, period]) => `<article class="edu">
              <div class="edu-head"><span class="edu-title">${esc(title)}</span><span class="place">${esc(place)}</span></div>
              <span class="edu-period">${esc(period)}</span>
            </article>`).join('')}
          </div>
        </section>
      </main>
    </div>
  </section>
</body>
</html>`;

writeFileSync(htmlPath, html);

execFileSync('/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', [
  '--headless=new',
  '--disable-gpu',
  '--no-sandbox',
  '--print-to-pdf-no-header',
  `--print-to-pdf=${out}`,
  pathToFileURL(htmlPath).href,
], { stdio: 'inherit' });

