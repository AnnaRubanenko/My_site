export type Lang = 'ru' | 'en';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  tags: string[];
  metric: { value: string; label: string };
  problem: string;
  role: string;
  cover: string;
  slides?: { cover?: string; image?: string; alt?: string; caption: string }[];
  caption?: string;
  task: string;
  problemFull: string;
  solution: string;
}

export interface LangData {
  name: string;
  filename: string;
  role: string;
  h1Line1: string;
  h1Line2: string;
  ledeHi: string;
  lede: string;
  stats: Record<string, string>;
  secMarker: string;
  codeStrengths: string[];
  codeTodayLabel: string;
  codeToday: string;
  codeComment: string;
  ctaTelegram: string;
  secProjectsTitle: string;
  secProjectsMeta: string;
  secStackTitle: string;
  secStackMeta: string;
  secContactTitle: string;
  secContactMeta: string;
  secVibesTitle: string;
  secVibesMeta: string;
  vibesLabel: string;
  folderAbout: string;
  folderProjects: string;
  folderEtc: string;
  statReady: string;
  ln: string;
  caseStudyLabel: string;
  caseBackLabel: string;
  caseTaskLabel: string;
  caseProblemLabel: string;
  caseSolutionLabel: string;
  metaYear: string;
  metaRole: string;
  screenPlaceholder: string;
  tooltipCopy: string;
  tooltipCopied: string;
  tooltipNavigate: string;
  stack: { short: string; name: string; skills: string[] }[];
  contacts: { label: string; value: string; href: string }[];
  tracks: string[];
  projects: Project[];
}

export const DATA: Record<Lang, LangData> = {
  ru: {
    name: 'Анна Демешко',
    filename: 'демешко.readme',
    role: 'product designer',
    h1Line1: 'анна демешко,',
    h1Line2: 'product designer.',
    ledeHi: '',
    lede: 'превращаю сложные процессы в понятные, удобные и красивые продукты, crm системы — моя страсть\n\nлюблю свою работу, музыку Оззи Осборна и философию Мишеля Монтеня',
    stats: {
      'projects shipped': '10+',
      'case studies': '7',
      experience: 'enterprise / saas / studio',
      'open to': 'full-time, контракт',
      location: 'remote, gmt+3',
      languages: 'ru · en',
    },
    secMarker: '# readme.md · обновлено 19.04.2026',
    codeStrengths: [
      'сложные флоу → понятные экраны',
      'enterprise crm и b2b saas',
      'data-dense интерфейсы и таблицы',
      '0→1 продукты с ресёрчем',
    ],
    codeTodayLabel: 'today',
    codeToday: 'редизайн appsec-платформы, больше пишу',
    codeComment: '// в чём сильна',
    ctaTelegram: 'написать в телеграм',
    secProjectsTitle: 'projects',
    secProjectsMeta: '%d проектов',
    secStackTitle: 'stack',
    secStackMeta: 'инструменты и практики',
    secContactTitle: 'contact',
    secContactMeta: '4 способа написать',
    secVibesTitle: 'vibes',
    secVibesMeta: 'что играет, пока я проектирую',
    vibesLabel: 'сейчас играет:',
    folderAbout: 'about',
    folderProjects: 'projects/',
    folderEtc: 'etc/',
    statReady: 'ready',
    ln: 'стр 1, кол 1',
    caseStudyLabel: 'case study',
    caseBackLabel: 'к списку проектов',
    caseTaskLabel: 'задача',
    caseProblemLabel: 'проблема',
    caseSolutionLabel: 'решение',
    metaYear: 'год',
    metaRole: 'роль',
    screenPlaceholder: 'скриншот интерфейса',
    tooltipCopy: 'нажми, чтобы скопировать',
    tooltipCopied: 'скопировано!',
    tooltipNavigate: 'нажми, чтобы перейти',
    stack: [
      { short: 'Fi', name: 'figma',          skills: ['auto layout', 'компоненты и варианты', 'дизайн-токены', 'прототипирование', 'dev mode', 'переменные'] },
      { short: 'Ae', name: 'after effects',   skills: ['UI-анимации', 'motion graphics', 'экспорт Lottie'] },
      { short: '</>', name: 'html / css',     skills: ['разметка', 'flexbox / grid', 'базовые анимации', 'работа с дев-кодом'] },
      { short: 'Jr', name: 'jira',            skills: ['бэклог', 'эпики и спринты', 'user stories', 'репортинг'] },
      { short: 'Cf', name: 'confluence',      skills: ['документация', 'дизайн-спеки', 'брифы', 'совместная работа'] },
      { short: 'Cl', name: 'claude',          skills: ['промпт-инжиниринг', 'UX-тексты', 'исследования', 'брейнстормы'] },
      { short: 'Mj', name: 'midjourney',      skills: ['концепты', 'мудборды', 'визуальные направления', 'иллюстрации'] },
    ],
    contacts: [
      { label: 'telegram', value: '@anna_demeshko', href: '#' },
      { label: 'email', value: 'aneyta@mail.ru', href: 'mailto:aneyta@mail.ru' },
      { label: 'linkedin', value: 'in/anna-demeshko', href: 'https://www.linkedin.com/in/anna-demeshko-534755238/' },
      { label: 'cv', value: 'cv-2026.pdf', href: '#' },
    ],
    tracks: [
      'crazy train — ozzy osbourne',
      'iron man — black sabbath',
      'rock you like a hurricane — scorpions',
      'essais, livre i — m. montaigne',
      'paranoid — black sabbath',
    ],
    projects: [
      {
        id: 'scan-launch',
        title: 'запуск сканирования',
        subtitle: 'appsec platform · инициация сканирования',
        year: '2025',
        tags: ['appsec', 'b2b', 'saas'],
        metric: { value: '−42%', label: 'time-to-scan' },
        problem: 'пользователи не понимали, когда сканирование реально запущено',
        role: 'lead product designer',
        cover: 'table',
        slides: [
          { image: '/scan-launch-1.png', cover: 'table', caption: '1 / инициация: модалка запуска открыта, CTA неактивен, пока не выбрана конфигурация — защита от случайного запуска.' },
          { image: '/scan-launch-2.png', cover: 'diff', caption: '2 / форма: инженер выбирает версию и конфигурацию сканера, CTA разблокируется, параметры валидируются на лету.' },
          { image: '/scan-launch-3.png', cover: 'steps', caption: '3 / прогресс: после запуска видно живой статус задачи — queued → running → done с таймкодом.' },
          { image: '/scan-launch-4.png', cover: 'kanban', caption: '4 / защита: пока задача в работе, блокирующий оверлей не даёт отправить повторный запрос и создать дубликат.' },
          { image: '/scan-launch-5.png', cover: 'chat', caption: '5 / результат: завершённое сканирование появляется в таблице — со статусом, фильтрами и прямой ссылкой на отчёт.' },
          { image: '/scan-launch-6.png', cover: 'table', caption: '6 / детали: развёрнутая карточка сканирования с метаданными, логами и статусом завершения.' },
        ],
        task: 'добавить функцию <em>ручного запуска сканирования</em>, чтобы команды безопасности могли инициировать проверку нужной версии прямо из интерфейса без обращения к инструментам вне платформы.',
        problemFull: 'пользователи <em>не могли запустить сканирование</em> из контекста конкретного приложения. не было понятно, в каком состоянии находится процесс: запущен ли скан, завершился ли с ошибкой, и что делать дальше. это <em>замедляло реакцию на угрозы и увеличивало время аудита</em>',
        solution: '<em>спроектировали сценарий инициации сканирования</em> через контекстное меню приложения → модальная форма с параметрами запуска (окружение, ветка, коммит, тег, версия) с валидацией на уровне активации CTA.\n\nформа реализует последовательную смену состояний:\n<em>inactive</em> — кнопка недоступна до заполнения обязательных полей\n<em>loading</em> — форма блокируется оверлеем со спиннером, исключая повторный запрос\n<em>completed</em> — модалка закрывается, управление возвращается к списку версий',
      },
      {
        id: 'scan-compare',
        title: 'сравнение сканирований',
        subtitle: 'appsec platform · side-by-side diff',
        year: '2025',
        tags: ['appsec', 'b2b', 'saas'],
        metric: { value: '×3.1', label: 'скорость аудита' },
        problem: 'аудиторам было сложно увидеть, что изменилось между релизами',
        role: 'lead product designer',
        cover: 'diff',
        slides: [
          { cover: 'table', caption: '1 / выбор: пользователь отмечает два сканирования чекбоксами в таблице. строки 5 и 2 активны — кнопка «сравнение» разблокирована.' },
          { cover: 'diff', caption: '2 / сравнение: side-by-side вид с метаданными каждого скана. таблица компонентов подсвечивает изменения — зелёным новые уязвимости, красным устранённые.' },
          { cover: 'steps', caption: '3 / дельты: счётчики (+/−) по уровням cvss. детальная панель раскрывает нарушения с фильтрацией по severity.' },
        ],
        task: 'добавить функцию сравнения результатов сканирований, чтобы команды безопасности могли <em>отслеживать динамику уязвимостей</em> между версиями приложений и коммитами.',
        problemFull: 'пользователи не могли <em>сопоставить результаты</em> двух сканирований без ручного анализа. было непонятно, какие уязвимости появились после нового деплоя, какие устранены, а какие изменили уровень критичности. это <em>замедляло реакцию на угрозы</em> и усложняло аудит безопасности между релизами.',
        solution: `спроектировали функцию сравнения: пользователь выбирает два скана из списка и нажимает «сравнение» — открывается side-by-side вид с метаданными каждого скана (окружение, способ запуска, коммит). таблица компонентов <em>подсвечивает изменения цветом</em>: зелёным — новые уязвимости, красным — устранённые. дельта-счётчики (+/−) <em>показывают динамику</em> по уровням cvss.`,
      },
      {
        id: 'crm-pipeline',
        title: 'воронка для b2b crm',
        subtitle: 'enterprise crm · редизайн pipeline',
        year: '2024',
        tags: ['crm', 'b2b', 'enterprise'],
        metric: { value: '+28%', label: 'конверсия' },
        problem: 'менеджеры теряли сделки на этапе квалификации',
        role: 'product designer',
        cover: 'kanban',
        slides: [
          { cover: 'kanban', caption: '1 / воронка: drag-n-drop между стадиями. цвет карточки показывает возраст сделки, иконка — ответственного.' },
          { cover: 'table', caption: '2 / карточка: 5 ключевых атрибутов на поверхности + чек-лист квалификации прямо в фокусе — без переключений по табам.' },
          { cover: 'steps', caption: '3 / дашборд: мини-график конверсии по стадиям под воронкой — лиды видят, где скапливаются проблемы.' },
        ],
        task: 'перепроектировать воронку продаж так, чтобы менеджер на этапе квалификации <em>видел ключевые атрибуты сделки</em> без необходимости открывать детальную карточку.',
        problemFull: 'сделки <em>застревали на квалификации</em>: в карточке было 40+ полей, но менеджер не видел, чего именно не хватает для перехода дальше. возраст сделки, сумма, источник — всё было спрятано по табам. руководители не могли быстро понять, где скапливаются проблемы.',
        solution: 'вынесли на карточку 5 главных атрибутов, добавили <em>цветовую кодировку по возрасту</em> и чек-лист квалификации прямо в фокусе. под воронкой — мини-дашборд с конверсией по этапам. переходы между этапами — через drag-n-drop или ⌘↵ шорткат.',
      },
      {
        id: 'onboarding',
        title: 'онбординг без слёз',
        subtitle: 'fintech saas · activation flow',
        year: '2024',
        tags: ['fintech', 'saas', 'growth'],
        metric: { value: '62%', label: 'day-1 активация' },
        problem: 'после регистрации пользователи не доходили до ценности',
        role: 'product designer',
        cover: 'steps',
        slides: [
          { cover: 'steps', caption: '1 / 3 шага: прогресс-индикатор сверху, каждый шаг — одна задача, skippable, с сохранением прогресса.' },
          { cover: 'chat', caption: '2 / контекст: персональный гайд показывает, что делать дальше — без долгих туториалов для опытных.' },
          { cover: 'tokens', caption: '3 / пустые состояния: превращены в мини-квесты — «добавь первый счёт → получи график».' },
        ],
        task: 'спроектировать онбординг, который <em>доводит до ценности за 3 шага</em> и позволяет вернуться к пропущенному — без фрустрации у тех, кто уже знаком с продуктом.',
        problemFull: 'после регистрации пользователь попадал на пустой дашборд без контекста. <em>day-1 активация была 24%</em>: большинство не понимали, с чего начать, и уходили. опытные пользователи, наоборот, ненавидели длинные туториалы.',
        solution: 'сократили онбординг до трёх шагов: подключить счёт → настроить первое правило → увидеть первую транзакцию. каждый шаг <em>скиппабельный</em>, с сохранением прогресса. пустые состояния превратили в мини-квесты: «добавь первый счёт → получи график».',
      },
      {
        id: 'ai-copilot',
        title: 'ai-ассистент для аналитиков',
        subtitle: 'b2b analytics · conversational ui',
        year: '2024',
        tags: ['ai', 'b2b', 'research'],
        metric: { value: '4.6/5', label: 'csat' },
        problem: 'аналитики не доверяли ai-ответам без контекста',
        role: 'product designer, research',
        cover: 'chat',
        slides: [
          { cover: 'chat', caption: '1 / запрос: чат справа от дашборда, ассистент понимает контекст открытого отчёта.' },
          { cover: 'diff', caption: '2 / пруфы: каждый ответ с цитатами источников и раскрывающимся sql-запросом — можно проверить данные одним кликом.' },
          { cover: 'table', caption: '3 / использование: кнопка «в отчёт» копирет и данные, и контекст в буфер — ответ сразу применим в работе.' },
        ],
        task: 'сделать так, чтобы ai-ответы встраивались в рабочий процесс аналитика и <em>давали возможность проверить источник</em> одним кликом.',
        problemFull: 'аналитики получали от ассистента ответы без прозрачности: непонятно, на каких данных они построены. <em>без пруфов они не могли использовать ответ в отчёте</em>, и ассистент превращался в второй гугл — любопытно, но не применимо в работе.',
        solution: 'каждый ответ теперь содержит <em>цитаты со ссылками на источник</em>, раскрывающийся sql-запрос и маркер уверенности модели. кнопка «использовать в отчёте» копирует и данные, и контекст в буфер. при низкой уверенности ассистент сам предлагает уточнить запрос.',
      },
      {
        id: 'design-system',
        title: 'design system с нуля',
        subtitle: 'b2b platform · токены + компоненты',
        year: '2023',
        tags: ['ds', 'tokens', 'saas'],
        metric: { value: '120+', label: 'компонентов' },
        problem: '3 команды рисовали одни и те же кнопки по-разному',
        role: 'design system lead',
        cover: 'tokens',
        slides: [
          { cover: 'tokens', caption: '1 / токены: 3 уровня (primitive → semantic → component), синхронизированные с кодом через code-connect.' },
          { cover: 'kanban', caption: '2 / компоненты: 120+ компонентов в figma с документацией рядом с каждым. RFC-процесс для изменений.' },
          { cover: 'steps', caption: '3 / онбординг: сократили онбординг нового дизайнера с 2 недель до 3 дней через внутреннюю wiki.' },
        ],
        task: 'собрать design system, которая <em>объединяет 3 продуктовые команды</em>, но не становится тормозом — с быстрым онбордингом и понятной процедурой изменений.',
        problemFull: '3 команды рисовали одни и те же кнопки по-разному, инженеры <em>дублировали код</em>, редизайны тянулись месяцами. единого словаря токенов не было — цвета жили в головах дизайнеров. онбординг нового дизайнера занимал 2 недели.',
        solution: 'построили трёхуровневую систему токенов (primitive → semantic → component), 120+ компонентов в figma с code-connect. завели публичный rfc-процесс: любое изменение системы проходит через обсуждение. онбординг сократился до 3 дней.',
      },
    ],
  },
  en: {
    name: 'Anna Demeshko',
    filename: 'demeshko.readme',
    role: 'product designer',
    h1Line1: 'anna demeshko,',
    h1Line2: 'product designer.',
    ledeHi: '',
    lede: 'i turn complex processes into clear, convenient and beautiful products, crm systems are my passion\n\ni love my work, Ozzy Osbourne\'s music and Michel de Montaigne\'s philosophy',
    stats: {
      'projects shipped': '10+',
      'case studies': '7',
      experience: 'enterprise / saas / studio',
      'open to': 'full-time, contract',
      location: 'remote, gmt+3',
      languages: 'ru · en',
    },
    secMarker: '# readme.md · last updated 2026.04.19',
    codeStrengths: [
      'complex workflows → simple flows',
      'enterprise crm & b2b saas',
      'data-dense interfaces & tables',
      '0→1 product with research',
    ],
    codeTodayLabel: 'today',
    codeToday: 'redesigning an appsec platform, writing more',
    codeComment: '// what i do best',
    ctaTelegram: 'message me on telegram',
    secProjectsTitle: 'projects',
    secProjectsMeta: '%d projects',
    secStackTitle: 'stack',
    secStackMeta: 'tools & practices',
    secContactTitle: 'contact',
    secContactMeta: '4 ways to reach me',
    secVibesTitle: 'vibes',
    secVibesMeta: 'what plays while i design',
    vibesLabel: 'now playing:',
    folderAbout: 'about',
    folderProjects: 'projects/',
    folderEtc: 'etc/',
    statReady: 'ready',
    ln: 'ln 1, col 1',
    caseStudyLabel: 'case study',
    caseBackLabel: 'back to projects',
    caseTaskLabel: 'task',
    caseProblemLabel: 'problem',
    caseSolutionLabel: 'solution',
    metaYear: 'year',
    metaRole: 'role',
    screenPlaceholder: 'interface screenshot',
    tooltipCopy: 'click to copy',
    tooltipCopied: 'copied!',
    tooltipNavigate: 'click to navigate',
    stack: [
      { short: 'Fi', name: 'figma',          skills: ['auto layout', 'components & variants', 'design tokens', 'prototyping', 'dev mode', 'variables'] },
      { short: 'Ae', name: 'after effects',   skills: ['UI animations', 'motion graphics', 'Lottie export'] },
      { short: '</>', name: 'html / css',     skills: ['markup', 'flexbox / grid', 'basic animations', 'reading dev code'] },
      { short: 'Jr', name: 'jira',            skills: ['backlog', 'epics & sprints', 'user stories', 'reporting'] },
      { short: 'Cf', name: 'confluence',      skills: ['documentation', 'design specs', 'briefs', 'collaboration'] },
      { short: 'Cl', name: 'claude',          skills: ['prompt engineering', 'UX writing', 'research synthesis', 'brainstorming'] },
      { short: 'Mj', name: 'midjourney',      skills: ['concepts', 'moodboards', 'visual direction', 'illustrations'] },
    ],
    contacts: [
      { label: 'telegram', value: '@anna_demeshko', href: '#' },
      { label: 'email', value: 'aneyta@mail.ru', href: 'mailto:aneyta@mail.ru' },
      { label: 'linkedin', value: 'in/anna-demeshko', href: 'https://www.linkedin.com/in/anna-demeshko-534755238/' },
      { label: 'cv', value: 'cv-2026.pdf', href: '#' },
    ],
    tracks: [
      'crazy train — ozzy osbourne',
      'iron man — black sabbath',
      'rock you like a hurricane — scorpions',
      'essais, livre i — m. montaigne',
      'paranoid — black sabbath',
    ],
    projects: [
      {
        id: 'scan-launch',
        title: 'scan launch',
        subtitle: 'appsec platform · initiation flow',
        year: '2025',
        tags: ['appsec', 'b2b', 'saas'],
        metric: { value: '−42%', label: 'time-to-scan' },
        problem: "users couldn't tell when a scan actually started",
        role: 'lead product designer',
        cover: 'table',
        slides: [
          { image: '/scan-launch-1.png', cover: 'table', caption: '1 / initiation: launch modal open, the CTA stays disabled until a config is picked — guard against accidental runs.' },
          { image: '/scan-launch-2.png', cover: 'diff', caption: '2 / form: engineer selects a version and scanner config, the CTA unlocks, params are validated on the fly.' },
          { image: '/scan-launch-3.png', cover: 'steps', caption: '3 / progress: live job status after launch — queued → running → done with a timestamp.' },
          { image: '/scan-launch-4.png', cover: 'kanban', caption: '4 / guard: while the job is running, a blocking overlay prevents re-submitting and creating a duplicate.' },
          { image: '/scan-launch-5.png', cover: 'chat', caption: '5 / result: the completed scan lands in the table — with status, filters and a direct link to the report.' },
          { image: '/scan-launch-6.png', cover: 'table', caption: '6 / details: expanded scan card with metadata, logs and completion status.' },
        ],
        task: 'add a <em>manual scan launch</em> feature so security teams can initiate a check of any version directly from the interface — without jumping to tools outside the platform.',
        problemFull: "the interface triggered scans but gave no feedback: users <em>couldn't tell if the request reached the server</em>, if the job was queued, or if it was already running. engineers clicked the button again, created duplicates, and wasted time pinging support for status.",
        solution: 'reworked the flow: introduced explicit states (queued / running / done / failed) with timestamps, added live progress and <em>a launch confirmation</em> with a clear job id. the scan table got status filters and a direct link to the log.',
      },
      {
        id: 'scan-compare',
        title: 'scan comparison',
        subtitle: 'appsec platform · side-by-side diff',
        year: '2025',
        tags: ['appsec', 'b2b', 'saas'],
        metric: { value: '×3.1', label: 'audit speed' },
        problem: 'auditors struggled to see what changed between releases',
        role: 'lead product designer',
        cover: 'diff',
        slides: [
          { cover: 'table', caption: '1 / selection: user marks two scans via checkboxes in the table. rows 5 and 2 active — the «compare» button unlocks.' },
          { cover: 'diff', caption: '2 / compare: side-by-side view with metadata for each scan. the components table highlights changes — green for new vulns, red for fixed ones.' },
          { cover: 'steps', caption: '3 / deltas: (+/−) counters across cvss levels. the detail panel surfaces violations filtered by severity.' },
        ],
        task: 'add a scan comparison feature so security teams can <em>track vulnerability dynamics</em> between app versions and commits.',
        problemFull: "users couldn't <em>reconcile results</em> of two scans without manual analysis. it was unclear which vulnerabilities appeared after a new deploy, which were fixed, and which changed severity. this <em>slowed threat response</em> and complicated security audits between releases.",
        solution: 'designed a comparison feature: user picks two scans from the list and clicks «compare» — a side-by-side view opens with metadata for each scan. the components table <em>highlights changes by color</em>: green for new vulns, red for fixed ones. delta counters (+/−) <em>show dynamics</em> across cvss levels.',
      },
      {
        id: 'crm-pipeline',
        title: 'b2b crm pipeline',
        subtitle: 'enterprise crm · pipeline redesign',
        year: '2024',
        tags: ['crm', 'b2b', 'enterprise'],
        metric: { value: '+28%', label: 'conversion' },
        problem: 'sales managers were losing deals at qualification',
        role: 'product designer',
        cover: 'kanban',
        slides: [
          { cover: 'kanban', caption: '1 / pipeline: drag-n-drop between stages. card color signals deal age, icon marks the owner.' },
          { cover: 'table', caption: '2 / card: 5 key attributes on the surface + qualification checklist in focus — no tab switching.' },
          { cover: 'steps', caption: '3 / dashboard: mini conversion chart under the pipeline — leads spot where deals pile up.' },
        ],
        task: 'redesign the sales pipeline so managers see <em>key deal attributes at qualification</em> without having to open the full card.',
        problemFull: "deals <em>got stuck at qualification</em>: a card had 40+ fields, but managers couldn't tell what exactly was missing to move on. deal age, value, source — all buried across tabs. leads couldn't quickly see where bottlenecks piled up.",
        solution: 'surfaced 5 key attributes on the card, added <em>color coding by age</em>, and put the qualification checklist front and center. a mini-dashboard under the pipeline shows stage conversion. transitions happen via drag-n-drop or a ⌘↵ shortcut.',
      },
      {
        id: 'onboarding',
        title: 'onboarding without tears',
        subtitle: 'fintech saas · activation flow',
        year: '2024',
        tags: ['fintech', 'saas', 'growth'],
        metric: { value: '62%', label: 'day-1 activation' },
        problem: "new users weren't reaching value after signup",
        role: 'product designer',
        cover: 'steps',
        slides: [
          { cover: 'steps', caption: '1 / 3 steps: progress indicator on top, each step — one task, skippable, with saved progress.' },
          { cover: 'chat', caption: '2 / context: a personal guide hints what to do next — no long tutorials for the experienced.' },
          { cover: 'tokens', caption: '3 / empty states: turned into mini-quests — «add your first account → unlock the chart».' },
        ],
        task: 'design an onboarding that <em>gets users to value in 3 steps</em> and lets them come back to skipped ones — without frustrating the experienced.',
        problemFull: "after signup, users landed on an empty dashboard with no context. <em>day-1 activation was 24%</em>: most didn't know where to start and bounced. experienced users, on the flip side, hated long tutorials.",
        solution: 'trimmed onboarding to three steps: connect account → set up first rule → see first transaction. every step is <em>skippable</em>, with saved progress. empty states became mini-quests: «add your first account → unlock the chart».',
      },
      {
        id: 'ai-copilot',
        title: 'ai copilot for analysts',
        subtitle: 'b2b analytics · conversational ui',
        year: '2024',
        tags: ['ai', 'b2b', 'research'],
        metric: { value: '4.6/5', label: 'csat' },
        problem: "analysts didn't trust ai answers without context",
        role: 'product designer, research',
        cover: 'chat',
        slides: [
          { cover: 'chat', caption: "1 / query: chat sits next to the dashboard, the assistant understands the open report's context." },
          { cover: 'diff', caption: '2 / proofs: every answer carries source citations and an expandable sql query — verify data in one click.' },
          { cover: 'table', caption: '3 / usage: the «use in report» button copies both data and context to the clipboard — instantly applicable.' },
        ],
        task: "make ai answers fit into the analyst's workflow and <em>let them verify the source</em> in one click.",
        problemFull: "analysts got answers from the assistant with no transparency: they couldn't tell which data backed them. <em>without proof they couldn't use the answer in a report</em>, and the assistant turned into a second google — curious, but not usable at work.",
        solution: 'every answer now carries <em>citations linked to sources</em>, an expandable sql query, and a model confidence marker. «use in report» copies both data and context to the clipboard. when confidence is low, the assistant asks to refine the query.',
      },
      {
        id: 'design-system',
        title: 'design system from scratch',
        subtitle: 'b2b platform · tokens + components',
        year: '2023',
        tags: ['ds', 'tokens', 'saas'],
        metric: { value: '120+', label: 'components' },
        problem: '3 teams were drawing the same buttons differently',
        role: 'design system lead',
        cover: 'tokens',
        slides: [
          { cover: 'tokens', caption: '1 / tokens: 3-layer system (primitive → semantic → component), synced to code via code-connect.' },
          { cover: 'kanban', caption: '2 / components: 120+ figma components with docs next to each one. RFC process for all changes.' },
          { cover: 'steps', caption: '3 / onboarding: shrank new designer onboarding from 2 weeks to 3 days via internal wiki.' },
        ],
        task: 'build a design system that <em>aligns 3 product teams</em> but doesn\'t become a bottleneck — fast onboarding, clear change process.',
        problemFull: '3 teams drew the same buttons differently, engineers <em>duplicated code</em>, redesigns dragged on for months. there was no token vocabulary — colors lived in designers\' heads. onboarding a new designer took 2 weeks.',
        solution: 'built a 3-layer token system (primitive → semantic → component), 120+ figma components with code-connect. introduced a public rfc process: any system change goes through review. onboarding shrank to 3 days.',
      },
    ],
  },
};