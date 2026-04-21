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
      experience: 'enterprise / saas / b2b / b2c',
      'open to': 'full-time',
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
    secContactMeta: 'связь',
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
          { image: '/portfolio/scan-launch-1.png', cover: 'table', caption: '1 / пользователь находится на странице приложения с историей сканирований. через контекстное меню (⋯) он выбирает пункт «Сканирование». меню предоставляет и другие действия: проверку SBOM, манифеста, архива и настройку уведомлений — всё в одном месте' },
          { image: '/portfolio/scan-launch-2.png', cover: 'diff', caption: '2 / открывается модальное окно «Сканировать приложение». форма содержит предзаполненный репозиторий и поля для выбора окружения, ветки, коммита, тега и версии. кнопка «Сканировать» неактивна — до заполнения обязательных полей' },
          { image: '/portfolio/scan-launch-3.png', cover: 'steps', caption: '3 / пользователь вводит параметры: ветка, коммит, тег, версиякнопка становится активной — форма готова к отправке' },
          { image: '/portfolio/scan-launch-4.png', cover: 'kanban', caption: '4 / <em>ЕСЛИ СКАНИРОВАНИЕ МОЖНО ОСТАНОВИТЬ ПОСЛЕ ЗАПУСКА:</em> после нажатия кнопка переходит в состояние «Идет сканирование» с иконкой загрузки. форма остаётся видимой, пользователь понимает: процесс запущен' },
          { image: '/portfolio/scan-launch-5.png', cover: 'chat', caption: '5 / <em>ЕСЛИ СКАНИРОВАНИЕ НЕЛЬЗЯ ОСТАНОВИТЬ ПОСЛЕ ЗАПУСКА:</em> поверх формы появляется оверлей со спиннером и текстом «Сканирование». поля недоступны для редактирования - это предотвращает случайные изменения во время работы в таблице — со статусом, фильтрами и прямой ссылкой на отчёт.' },
          { image: '/portfolio/scan-launch-6.png', cover: 'table', caption: '6 / модальное окно закрывается, пользователь возвращается к таблице версий, в нижнем правом углу появляется уведомление об успешно проведенном сканировании (или уведомление с ошибкой и подсказкой что делать)' },
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
          { image: '/portfolio/apps_1.png', cover: 'table', caption: '1 /  пользователь выбирает два сканирования через чекбоксы в таблице. строки 5 и 2 отмечены —> интерфейс активирует кнопку «Сравнение». таблица показывает ключевые атрибуты: окружение, способ запуска, количество нарушений и статус' },
          { image: '/portfolio/apps_2.png', cover: 'diff', caption: '2 / как только выбраны два сканирования, кнопка «Сравнение» в тулбаре становится активной. нажатие запускает переход на экран сравнения. ключевое UX-решение: действие возможно только при выборе ровно двух строк' },
          { image: '/portfolio/apps_3.png', cover: 'steps', caption: '3 / Side-by-side вид: вверху метаданные обоих сканирований (окружение, метод, дата, коммит), ниже сравнительная таблица компонентов. зелёная подсветка строки = новый компонент, появившийся с момента предыдущего скана. красная = компонент был удалён. дельты нарушений (+14, −3) показывают динамику' },
          { image: '/portfolio/apps_4.png', cover: 'steps', caption: '4 / при клике на компонент в таблице открывается боковая панель с детализацией. Нарушения сгруппированы по уровню критичности (вкладки: Информационный → Критический). каждое нарушение показывает статус (Новое / Исправлено), тип угрозы и затронутый пакет. позволяет сразу оценить природу изменений' },

        ],
        task: 'добавить функцию сравнения результатов сканирований, чтобы команды безопасности могли <em>отслеживать динамику уязвимостей</em> между версиями приложений и коммитами.',
        problemFull: 'пользователи не могли <em>сопоставить результаты</em> двух сканирований без ручного анализа. было непонятно, какие уязвимости появились после нового деплоя, какие устранены, а какие изменили уровень критичности. это <em>замедляло реакцию на угрозы</em> и усложняло аудит безопасности между релизами.',
        solution: `спроектировали функцию сравнения: пользователь выбирает два скана из списка и нажимает «сравнение» — открывается side-by-side вид с метаданными каждого скана (окружение, способ запуска, коммит). таблица компонентов <em>подсвечивает изменения цветом</em>: зелёным — новые уязвимости, красным — устранённые. дельта-счётчики (+/−) <em>показывают динамику</em> по уровням cvss.`,
      },
      {
        id: 'dashboards',
        title: 'дашборды для аналитики ИБ',
        subtitle: 'enterprise crm · редизайн pipeline',
        year: '2024',
        tags: ['crm', 'b2b', 'enterprise'],
        metric: { value: '+28%', label: 'конверсия' },
        problem: 'у пользователей не было единой точки входа для мониторинга состояния безопасности',
        role: 'product designer',
        cover: 'kanban',
        slides: [
          { image: '/portfolio/Frame 15.png', cover: 'kanban', caption: '1 / пользователь выбирает два сканирования через чекбоксы в таблице. строки 5 и 2 отмечены —> интерфейс активирует кнопку «Сравнение». таблица показывает ключевые атрибуты: окружение, способ запуска, количество нарушений и статус' },
          { image: '/portfolio/Frame 15-1.png', cover: 'table', caption: '2 / модальное окно отображает все доступные виджеты в виде превью с реальными данными. переключатель «выбрать все» в неактивном состоянии — ни один виджет не выбран, кнопка «Применить» не активна' },
          { image: '/portfolio/Frame 15-2.png', cover: 'steps', caption: '3 / после переключения «выбрать все» каждый виджет получает бейдж «Активен», кнопка «Применить» становится кликабельной. пользователь видит итоговый состав дашборда до применения' },          
          { image: '/portfolio/Frame 15-3.png', cover: 'steps', caption: '4 / все виджеты выведены на страницу. при наведении на виджет «Уязвимые приложения» появляются кнопки управления — разворачивание и закрытие' },          
          { image: '/portfolio/Frame 15-4.png', cover: 'steps', caption: '5 / виджет «Уязвимые приложения» разворачивается на весь экран: отображается полный список приложений с горизонтальными stacked bar чартами по уровням критичности (критический, высокий, средний, низкий, информационный) и суммарным счётчиком' },


        ],
        task: 'спроектировать <em>кастомизируемый дашборд</em> чтобы команды могли <em>формировать персональный обзор ключевых метрик</em> — уязвимостей, политик, компонентов и репозиториев — без необходимости переходить между разделами',
        problemFull: 'у пользователей не было единой точки входа для мониторинга состояния безопасности. каждая команда фокусируется на разных метриках, а единый статичный экран не покрывал потребности всех ролей. это приводило к <em>избыточной навигации и потере времени</em> при ежедневном контроле',
        solution: 'спроектирован модульный дашборд с возможностью <em>самостоятельной конфигурации под задачи</em> конкретной команды. пользователь формирует состав экрана через модальное окно с превью виджетов. <em>время на получение ключевых метрик сократилось</em> с 4 переходов между разделами до одного экрана — дашборд закрыл 80% ежедневных сценариев мониторинга.',
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
      experience: 'enterprise / saas / b2b / b2c',
      'open to': 'full-time',
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
        subtitle: 'appsec platform · scan initiation',
        year: '2025',
        tags: ['appsec', 'b2b', 'saas'],
        metric: { value: '−42%', label: 'time-to-scan' },
        problem: "users didn't understand when a scan was actually launched",
        role: 'lead product designer',
        cover: 'table',
        slides: [
          { image: '/portfolio/scan-launch-1.png', cover: 'table', caption: '1 / the user is on the app page with scan history. from the context menu (⋯) they select "Scan." the menu also covers other actions: SBOM check, manifest, archive, and notification settings — all in one place' },
          { image: '/portfolio/scan-launch-2.png', cover: 'diff', caption: '2 / a "Scan application" modal opens. the form has a pre-filled repository and fields for environment, branch, commit, tag, and version. the "Scan" button is inactive until required fields are filled' },
          { image: '/portfolio/scan-launch-3.png', cover: 'steps', caption: '3 / the user fills in the params: branch, commit, tag, version — the button activates and the form is ready to submit' },
          { image: '/portfolio/scan-launch-4.png', cover: 'kanban', caption: '4 / <em>IF THE SCAN CAN BE STOPPED AFTER LAUNCH:</em> after clicking, the button enters "Scanning" state with a loading icon. the form stays visible — the user understands the process is running' },
          { image: '/portfolio/scan-launch-5.png', cover: 'chat', caption: '5 / <em>IF THE SCAN CANNOT BE STOPPED AFTER LAUNCH:</em> an overlay with a spinner and "Scanning" text appears on top of the form. fields are locked to prevent accidental changes. the table shows status, filters, and a direct link to the report' },
          { image: '/portfolio/scan-launch-6.png', cover: 'table', caption: '6 / the modal closes, the user returns to the versions table. a toast appears in the bottom-right confirming a successful scan (or an error with a hint on what to do next)' },
        ],
        task: 'add a <em>manual scan launch</em> feature so security teams can initiate a check of any version directly from the interface — without reaching for tools outside the platform.',
        problemFull: "users <em>couldn't launch a scan</em> from the context of a specific application. there was no way to tell the process state: whether the scan had started, finished with an error, or what to do next. this <em>slowed threat response and increased audit time</em>",
        solution: '<em>designed the scan initiation flow</em> via the app context menu → a modal form with launch params (environment, branch, commit, tag, version), validated at the CTA activation level.\n\nthe form implements sequential state transitions:\n<em>inactive</em> — button locked until required fields are filled\n<em>loading</em> — form is blocked by a spinner overlay, preventing duplicate requests\n<em>completed</em> — modal closes, control returns to the versions list',
      },
      {
        id: 'scan-compare',
        title: 'scan comparison',
        subtitle: 'appsec platform · side-by-side diff',
        year: '2025',
        tags: ['appsec', 'b2b', 'saas'],
        metric: { value: '×3.1', label: 'audit speed' },
        problem: 'auditors had a hard time seeing what changed between releases',
        role: 'lead product designer',
        cover: 'diff',
        slides: [
          { image: '/portfolio/apps_1.png', cover: 'table', caption: '1 / the user selects two scans via checkboxes in the table. rows 5 and 2 are checked —> the interface activates the "Comparison" button. the table shows key attributes: environment, launch method, violation count, and status' },
          { image: '/portfolio/apps_2.png', cover: 'diff', caption: '2 / once two scans are selected, the "Comparison" button in the toolbar becomes active. clicking it transitions to the comparison screen. key ux decision: the action is only available when exactly two rows are selected' },
          { image: '/portfolio/apps_3.png', cover: 'steps', caption: '3 / side-by-side view: metadata for both scans at the top (environment, method, date, commit), followed by a component comparison table. green row = new component since the previous scan. red = removed component. violation deltas (+14, −3) show dynamics' },
          { image: '/portfolio/apps_4.png', cover: 'steps', caption: '4 / clicking a component opens a side panel with details. violations are grouped by severity (tabs: informational → critical). each violation shows its status (new / fixed), threat type, and affected package — lets you immediately assess the nature of changes' },
        ],
        task: 'add a scan comparison feature so security teams can <em>track vulnerability dynamics</em> between app versions and commits.',
        problemFull: "users couldn't <em>reconcile the results</em> of two scans without manual analysis. it was unclear which vulnerabilities appeared after a new deploy, which were fixed, and which changed severity. this <em>slowed threat response</em> and complicated security audits between releases.",
        solution: 'designed a comparison feature: user picks two scans from the list and clicks "compare" — a side-by-side view opens with metadata for each scan (environment, launch method, commit). the components table <em>highlights changes by color</em>: green for new vulnerabilities, red for fixed ones. delta counters (+/−) <em>show dynamics</em> across cvss levels.',
      },
      {
        id: 'dashboards',
        title: 'security analytics dashboards',
        subtitle: 'enterprise crm · pipeline redesign',
        year: '2024',
        tags: ['crm', 'b2b', 'enterprise'],
        metric: { value: '+28%', label: 'conversion' },
        problem: 'users had no single entry point for monitoring their security posture',
        role: 'product designer',
        cover: 'kanban',
        slides: [
          { image: '/portfolio/Frame 15.png', cover: 'kanban', caption: '1 / the dashboard overview — before any widgets are configured. the user opens widget settings to compose their view' },
          { image: '/portfolio/Frame 15-1.png', cover: 'table', caption: '2 / the widget modal shows all available widgets as previews with real data. the "select all" toggle is off — no widgets selected, "Apply" button is inactive' },
          { image: '/portfolio/Frame 15-2.png', cover: 'steps', caption: '3 / after toggling "select all," each widget gets an "Active" badge and "Apply" becomes clickable. the user sees the final dashboard composition before committing' },
          { image: '/portfolio/Frame 15-3.png', cover: 'steps', caption: '4 / all widgets are on the page. hovering over "Vulnerable Applications" reveals controls — expand and close' },
          { image: '/portfolio/Frame 15-4.png', cover: 'steps', caption: '5 / the "Vulnerable Applications" widget expands to full screen: full app list with stacked bar charts by severity level (critical, high, medium, low, informational) and total counts' },
        ],
        task: 'design a <em>customizable dashboard</em> so teams can <em>build a personal view of key metrics</em> — vulnerabilities, policies, components, and repositories — without navigating between sections',
        problemFull: "users had no single entry point for monitoring their security posture. each team focuses on different metrics, and a single static screen couldn't cover all roles' needs. this led to <em>excessive navigation and wasted time</em> during daily monitoring",
        solution: 'designed a modular dashboard with <em>self-configuration per team needs</em>. users compose their screen through a modal with widget previews. <em>time to access key metrics dropped</em> from 4 section navigations to a single screen — the dashboard covers 80% of daily monitoring scenarios.',
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