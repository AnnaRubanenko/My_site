export type Lang = 'ru' | 'en';

export interface Project {
  id: string;
  isLoading?: boolean;
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
  process?: string;
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
  secCvTitle: string;
  secCvMeta: string;
  secStackTitle: string;
  secStackMeta: string;
  secContactTitle: string;
  secContactMeta: string;
  secVibesTitle: string;
  secVibesMeta: string;
  vibesLabel: string;
  vibesPlaylistTitle: string;
  vibesPlaylistMeta: string;
  vibesPlaylistCta: string;
  vibesPlaylistHref: string;
  vibesArtworkSrc: string;
  vibesArtworkAlt: string;
  folderAbout: string;
  folderProjects: string;
  folderEtc: string;
  statReady: string;
  ln: string;
  caseStudyLabel: string;
  caseBackLabel: string;
  caseTaskLabel: string;
  caseProblemLabel: string;
  caseProcessLabel: string;
  caseSolutionLabel: string;
  metaYear: string;
  metaRole: string;
  screenPlaceholder: string;
  tooltipCopy: string;
  tooltipCopied: string;
  tooltipNavigate: string;
  cv: {
    downloadLabel: string;
    photoSrc: string;
    headline: string;
    summary: string;
    availability: string;
    portfolioLabel: string;
    portfolioHref: string;
    contactTitle: string;
    contactRows: { label: string; value: string; href?: string }[];
    highlights: string[];
    experienceTitle: string;
    experience: {
      role: string;
      company: string;
      period: string;
      details: string[];
    }[];
    educationTitle: string;
    education: { title: string; place: string; period: string }[];
    toolsTitle: string;
    softSkillsTitle: string;
    softSkills: string[];
    hardSkillsTitle: string;
    hardSkills: { title: string; description: string }[];
    languagesTitle: string;
    languages: string[];
  };
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
    h1Line1: 'анна демешко',
    h1Line2: 'product designer',
    ledeHi: '',
    lede: 'превращаю сложные процессы в понятные, удобные и красивые продукты, crm системы — моя страсть\n\nлюблю свою работу, музыку Оззи Осборна и философию Мишеля Монтеня',
    stats: {
      'запущено проектов': '10+',
      'кейсов': '4 (15)',
      'опыт работы': '3+ года',
      'домены': 'enterprise / saas / b2b / b2c',
      'формат работы': 'full-time',
      'локация': 'remote, gmt+3',
      'языки': 'ru · en',
    },
    secMarker: '# readme.md · обновлено 19.04.2026',
    codeStrengths: [
      'помогаю командам делать сложные продукты понятными для людей',
      'нахожу баланс между задачами бизнеса и потребностями пользователей',
      'проектирую сценарии, в которых удобно работать каждый день',
      'люблю дизайн, который приносит реальную пользу продукту',
    ],
    codeTodayLabel: 'today',
    codeToday: 'делаю редизайны для души, изучаю нейросети',
    codeComment: '// в чём сильна',
    ctaTelegram: 'написать в телеграм',
    secProjectsTitle: 'projects/study_case',
    secProjectsMeta: 'исследования / синки / макеты / тесты => довольные пользователи',
    secCvTitle: 'cv',
    secCvMeta: 'короткая версия для рекрутера',
    secStackTitle: 'stack',
    secStackMeta: 'набила руку',
    secContactTitle: 'contact',
    secContactMeta: 'связь',
    secVibesTitle: 'now playing',
    secVibesMeta: 'играет, пока я дизайню',
    vibesLabel: 'сейчас играет',
    vibesPlaylistTitle: 'No More Tears — Ozzy Osbourne',
    vibesPlaylistMeta: 'мой плейлист в spotify',
    vibesPlaylistCta: 'открыть плейлист',
    vibesPlaylistHref: 'https://open.spotify.com/playlist/14TdC0nbL1qSOms0uueJ5V?si=gg5kzMnVTJ2rLA7iLcbUBw&pi=TUggRTWtSxmjP',
    vibesArtworkSrc: 'https://coverartarchive.org/release/2759878a-d0fb-4c1a-9130-1cca9670a917/front-500',
    vibesArtworkAlt: 'Обложка альбома No More Tears — Ozzy Osbourne',
    folderAbout: 'about',
    folderProjects: 'projects/study_case/',
    folderEtc: 'etc/',
    statReady: 'open to work',
    ln: 'стр 1, кол 1',
    caseStudyLabel: 'case study',
    caseBackLabel: 'к главной',
    caseTaskLabel: 'задача',
    caseProblemLabel: 'проблема',
    caseProcessLabel: 'поиск решения',
    caseSolutionLabel: 'решение',
    metaYear: 'год',
    metaRole: 'роль',
    screenPlaceholder: 'скриншот интерфейса',
    tooltipCopy: 'нажми, чтобы скопировать',
    tooltipCopied: 'скопировано!',
    tooltipNavigate: 'нажми, чтобы перейти',
    cv: {
      downloadLabel: 'скачать PDF',
      photoSrc: '/portfolio/profile-binary-source.png',
      headline: 'Product Designer',
      summary: 'Специализируюсь на B2B и B2C продуктах в сфере информационной безопасности, где важны логика, структура и удобство взаимодействия. Создаю интерфейсы с продуманными сценариями, очевидной логикой и чистым дизайном. Хорошо взаимодействую с PM-ами, разработчиками и аналитиками на всех этапах.',
      availability: 'Открыта к full-time формату, remote, GMT+3.',
      portfolioLabel: 'смотреть портфолио',
      portfolioHref: '#readme',
      contactTitle: 'контакты',
      contactRows: [
        { label: 'телефон/тг', value: '+7 963 316 2580', href: 'https://t.me/annademeshko' },
        { label: 'email', value: 'aneyta@mail.ru', href: 'mailto:aneyta@mail.ru' },
      ],
      highlights: [
        '10+ запущенных продуктовых проектов',
        'B2B / B2C / SaaS / enterprise',
        'сложные таблицы, формы, фильтры и дашборды',
        'исследования, прототипы, дизайн-системы и handoff',
      ],
      experienceTitle: 'опыт работы',
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
      educationTitle: 'образование',
      education: [
        { title: 'UX Researcher', place: 'Google UX Design', period: 'нояб. 2025 — фев. 2026' },
        { title: 'UX / UI Designer', place: 'UPROCK SCHOOL', period: 'март 2024 — сент. 2024' },
        { title: 'Аналитик ИБ', place: 'Университет ИТМО', period: 'сент. 2020 — июнь 2022' },
        { title: 'Прикладной лингвист', place: 'СПбГУАП', period: 'сент. 2014 — июнь 2018' },
      ],
      toolsTitle: 'инструменты работы',
      softSkillsTitle: 'софт скиллс',
      softSkills: ['креативность', 'работа в команде', 'суперкоммуникация', 'самообучение', 'позитивность', 'умение аргументировать'],
      hardSkillsTitle: 'хард скиллс',
      hardSkills: [
        { title: 'Product Discovery', description: '' },
        { title: 'UX Research', description: '' },
        { title: 'Usability Testing', description: '' },
        { title: 'Information Architecture', description: '' },
        { title: 'Interaction Design', description: '' },
        { title: 'Design Systems', description: '' },
        { title: 'Data-heavy Interfaces', description: '' },
      ],
      languagesTitle: 'языки',
      languages: ['русский — native', 'английский — B2 (intermediate)'],
    },
    stack: [
      { short: 'Fi', name: 'figma',          skills: ['auto layout', 'компоненты и варианты', 'дизайн-токены', 'прототипирование', 'dev mode', 'переменные'] },
      { short: 'Ae', name: 'after effects',   skills: ['UI-анимации', 'motion graphics', 'экспорт Lottie'] },
      { short: '</>', name: 'html / css',     skills: ['разметка', 'flexbox / grid', 'базовые анимации', 'работа с дев-кодом'] },
      { short: 'Jr', name: 'jira',            skills: ['бэклог', 'эпики и спринты', 'user stories', 'репортинг'] },
      { short: 'Cf', name: 'confluence',      skills: ['документация', 'дизайн-спеки', 'брифы', 'совместная работа'] },
      { short: 'Cl', name: 'claude',          skills: ['промпт-инжиниринг', 'UX-тексты', 'исследования', 'брейнстормы'] },
      { short: 'Mj', name: 'midjourney',      skills: ['концепты', 'мудборды', 'визуальные направления', 'иллюстрации'] },
      { short: '…',  name: 'загрузка нового скилла', skills: ['в процессе', 'изучаю', 'добавляю в практику'] },
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
        metric: { value: '−42%', label: 'время до запуска скана' },
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
        process: 'поиск решения начинался с карты состояний запуска: черновик формы, проверка обязательных параметров, сценарии повторного клика, ошибка, успешный запуск и возврат в таблицу. несколько итераций ушло на то, чтобы сделать процесс понятным без отдельной страницы статуса.\n\n<em>AI</em> помогал быстро разложить edge cases, сформулировать микротексты для состояний формы и сравнить варианты поведения кнопки после отправки. дальше решения сверялись с техническими ограничениями запуска скана и логикой безопасности.',
        solution: '<em>спроектировали сценарий инициации сканирования</em> через контекстное меню приложения → модальная форма с параметрами запуска (окружение, ветка, коммит, тег, версия) с валидацией на уровне активации CTA.\n\nформа реализует последовательную смену состояний:\n<em>inactive</em> — кнопка недоступна до заполнения обязательных полей\n<em>loading</em> — форма блокируется оверлеем со спиннером, исключая повторный запрос\n<em>completed</em> — модалка закрывается, управление возвращается к списку версий',
      },
      {
        id: 'scan-compare',
        title: 'сравнение сканирований',
        subtitle: 'appsec platform · side-by-side diff',
        year: '2025',
        tags: ['appsec', 'b2b', 'saas'],
        metric: { value: '−68%', label: 'время на аудит' },
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
        process: 'поиск решения шёл через несколько итераций: сначала проверяли простой список изменений, затем split-view по двум сканам, после — таблицу компонентов с дельтами и боковой панелью деталей.\n\n<em>AI</em> использовался как ускоритель исследования и проектирования: я собирала и структурировала сценарии аудиторов, формулировала гипотезы для diff-логики, сравнивала варианты группировки данных и проверяла UX-тексты для статусов «новое / исправлено / изменилось». финальные решения проходили через продуктовую логику, ограничения данных и обсуждение с командой.',
        solution: `спроектировали функцию сравнения: пользователь выбирает два скана из списка и нажимает «сравнение» — открывается side-by-side вид с метаданными каждого скана (окружение, способ запуска, коммит). таблица компонентов <em>подсвечивает изменения цветом</em>: зелёным — новые уязвимости, красным — устранённые. дельта-счётчики (+/−) <em>показывают динамику</em> по уровням cvss.`,
      },
      {
        id: 'dashboards',
        title: 'дашборды для аналитики ИБ',
        subtitle: 'enterprise crm · редизайн pipeline',
        year: '2024',
        tags: ['crm', 'b2b', 'enterprise'],
        metric: { value: '−75%', label: 'лишние переходы' },
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
        process: 'поиск решения шёл от статичного overview к модульной модели: сначала собирали список метрик по ролям, затем проверяли варианты виджетов, порядок добавления, превью до применения и сценарий разворачивания важных блоков.\n\n<em>AI</em> использовался для кластеризации потребностей разных ролей, генерации гипотез по составу виджетов и быстрой проверки информационной архитектуры. финальная композиция собиралась вокруг реальных ежедневных задач: мониторинг, сравнение, приоритизация и быстрый переход к деталям.',
        solution: 'спроектирован модульный дашборд с возможностью <em>самостоятельной конфигурации под задачи</em> конкретной команды. пользователь формирует состав экрана через модальное окно с превью виджетов. <em>время на получение ключевых метрик сократилось</em> с 4 переходов между разделами до одного экрана — дашборд закрыл 80% ежедневных сценариев мониторинга.',
      },
      {
        id: 'triage',
        title: 'триаж — изменение деталей уязвимости',
        subtitle: 'appsec platform · vulnerability triage',
        year: '2025',
        tags: ['appsec', 'b2b', 'saas'],
        metric: { value: '−31%', label: 'время на обработку' },
        problem: 'аналитикам было неудобно быстро обновлять статус и критичность уязвимости',
        role: 'product designer',
        cover: 'table',
        slides: [
          { image: '/portfolio/110.png', cover: 'table', caption: '1 / пользователь открывает карточку уязвимости из списка результатов сканирования. в правой части уже видны текущие атрибуты: уровень, влияние, достоверность и статус. через кнопку «Триаж» начинается сценарий редактирования деталей без перехода на отдельный экран' },
          { image: '/portfolio/111.png', cover: 'steps', caption: '2 / открывается модальное окно «Изменение деталей уязвимости». первым шагом пользователь меняет статус: список вариантов раскрывается прямо в форме, что ускоряет триаж и снижает вероятность ошибки при выборе' },
          { image: '/portfolio/112.png', cover: 'steps', caption: '3 / после выбора статуса «Подтверждено» пользователь задаёт новый уровень уязвимости и влияние. форма остаётся компактной и читаемой: критичные поля собраны в одном месте, а кнопка «Применить» становится доступной только когда изменения готовы к сохранению' },
          { image: '/portfolio/113.png', cover: 'steps', caption: '4 / сценарий поддерживает частичное редактирование: аналитик может пересмотреть только отдельные атрибуты, например уровень и влияние, не переписывая всё заново. это особенно важно при повторной проверке найденных уязвимостей' },
          { image: '/portfolio/114.png', cover: 'table', caption: '5 / после применения изменений интерфейс сразу обновляет статус в карточке уязвимости, а toast-подтверждение сообщает об успешном сохранении. пользователь понимает, что triage завершён и данные уже зафиксированы в системе' },
        ],
        task: 'спроектировать сценарий триажа, в котором аналитик может <em>быстро изменить статус, уровень, влияние и комментарий</em> прямо из карточки уязвимости — без лишних переходов и потери контекста сканирования.',
        problemFull: 'до переработки триаж требовал лишних действий и не давал ощущения управляемого процесса. аналитикам приходилось тратить время на переключение внимания между списком, деталями уязвимости и редактированием. из-за этого <em>обновление статусов и параметров занимало слишком много времени</em>, а подтверждение сохранения было недостаточно очевидным.',
        process: 'поиск решения строился вокруг скорости и контроля: сравнивали inline-редактирование, отдельную страницу и компактную модалку. итерации помогли оставить пользователя в контексте карточки, но дать достаточно места для статуса, уровня, влияния и подтверждения.\n\n<em>AI</em> применялся для разборки сценариев аналитика, проверки последовательности полей, формулировки ошибок и подтверждений, а также для быстрого сравнения вариантов UX-copy. после этого сценарий уточнялся через ограничения данных и привычные паттерны работы аналитиков.',
        solution: 'я собрала триаж в компактный модальный сценарий внутри карточки уязвимости: ключевые поля редактируются в одном окне, кнопка действия становится активной только при валидном состоянии формы, а после сохранения пользователь сразу видит <em>обновлённый статус и явное подтверждение успеха</em>. это <em>сократило время на обработку</em> и сделало работу с уязвимостями заметно быстрее в ежедневных сценариях.',
      },
      {
        id: 'case-loading-1',
        isLoading: true,
        title: 'исследования, синки, макеты и тесты уже упаковываются в кейсы',
        subtitle: 'case study · loading',
        year: 'soon',
        tags: [],
        metric: { value: '', label: '' },
        problem: '',
        role: 'product designer',
        cover: 'loading',
        slides: [],
        task: '',
        problemFull: '',
        solution: '',
      },
    ],
  },
  en: {
    name: 'Anna Demeshko',
    filename: 'demeshko.readme',
    role: 'product designer',
    h1Line1: 'anna demeshko',
    h1Line2: 'product designer',
    ledeHi: '',
    lede: 'i turn complex processes into clear, convenient and beautiful products, crm systems are my passion\n\ni love my work, Ozzy Osbourne\'s music and Michel de Montaigne\'s philosophy',
    stats: {
      'projects shipped': '10+',
      'case studies': '4 (15)',
      'work experience': '3+ years',
      experience: 'enterprise / saas / b2b / b2c',
      'open to': 'full-time',
      location: 'remote, gmt+3',
      languages: 'ru · en',
    },
    secMarker: '# readme.md · last updated 2026.04.19',
    codeStrengths: [
      'help teams make complex products feel clear for people',
      'balance business needs with real user needs',
      'design workflows that feel easy to use every day',
      'care about design that creates real value for the product',
    ],
    codeTodayLabel: 'today',
    codeToday: 'redesigning for fun, exploring AI tools',
    codeComment: '// what i do best',
    ctaTelegram: 'message me on telegram',
    secProjectsTitle: 'projects/study_case',
    secProjectsMeta: 'research / syncs / mockups / tests => happy users',
    secCvTitle: 'cv',
    secCvMeta: 'recruiter-friendly version',
    secStackTitle: 'stack',
    secStackMeta: 'tools & practices',
    secContactTitle: 'contact',
    secContactMeta: 'message me for collaboration',
    secVibesTitle: 'now playing',
    secVibesMeta: 'playing while i design',
    vibesLabel: 'now playing',
    vibesPlaylistTitle: 'No More Tears — Ozzy Osbourne',
    vibesPlaylistMeta: 'my spotify playlist',
    vibesPlaylistCta: 'open playlist',
    vibesPlaylistHref: 'https://open.spotify.com/playlist/14TdC0nbL1qSOms0uueJ5V?si=gg5kzMnVTJ2rLA7iLcbUBw&pi=TUggRTWtSxmjP',
    vibesArtworkSrc: 'https://coverartarchive.org/release/2759878a-d0fb-4c1a-9130-1cca9670a917/front-500',
    vibesArtworkAlt: 'No More Tears album cover by Ozzy Osbourne',
    folderAbout: 'about',
    folderProjects: 'projects/study_case/',
    folderEtc: 'etc/',
    statReady: 'open to work',
    ln: 'ln 1, col 1',
    caseStudyLabel: 'case study',
    caseBackLabel: 'back to projects',
    caseTaskLabel: 'task',
    caseProblemLabel: 'problem',
    caseProcessLabel: 'solution search',
    caseSolutionLabel: 'solution',
    metaYear: 'year',
    metaRole: 'role',
    screenPlaceholder: 'interface screenshot',
    tooltipCopy: 'click to copy',
    tooltipCopied: 'copied!',
    tooltipNavigate: 'click to navigate',
    cv: {
      downloadLabel: 'download PDF',
      photoSrc: '/portfolio/profile-binary-source.png',
      headline: 'Product Designer',
      summary: 'I specialize in B2B and B2C information-security products where logic, structure, and interaction clarity matter most. I design interfaces with thoughtful scenarios, clear product logic, and clean visual systems, collaborating closely with PMs, engineers, and analysts.',
      availability: 'Open to full-time roles, remote, GMT+3.',
      portfolioLabel: 'view portfolio',
      portfolioHref: '#readme',
      contactTitle: 'contacts',
      contactRows: [
        { label: 'phone/tg', value: '+7 963 316 2580', href: 'https://t.me/annademeshko' },
        { label: 'email', value: 'aneyta@mail.ru', href: 'mailto:aneyta@mail.ru' },
      ],
      highlights: [
        '10+ shipped product projects',
        'B2B / B2C / SaaS / enterprise',
        'complex tables, forms, filters, and dashboards',
        'research, prototypes, design systems, and handoff',
      ],
      experienceTitle: 'experience',
      experience: [
        {
          role: 'Product Designer',
          company: 'AppSec Solutions',
          period: 'Feb 2025 — Mar 2026 · 1 yr 2 mos',
          details: [
            'designed complex high-load B2B interfaces for information-security products',
            'owned UX from user flows and wireframes to high-fidelity prototypes and developer-ready specs',
            'contributed to the design system: components, states, specifications, Storybook, and migration to Taiga UI',
            'collaborated with product managers, engineers, and analysts across discovery, design, and implementation',
            'redesigned and improved product web interfaces: dashboards, forms, filters, data tables, and complex UI components',
            'managed several product tasks in parallel while keeping deadlines, quality, and consistency under control',
          ],
        },
        {
          role: 'UX / UI Designer',
          company: 'Grokhotov studio',
          period: 'Mar 2024 — Jan 2025 · 11 mos',
          details: [
            'created wireframes, interface layouts, and interactive prototypes for engineering teams and client presentations',
            'designed responsive interfaces, redesigned existing products, and improved user journeys',
            'supported and updated design systems and UI kits to keep interfaces visually and behaviorally consistent',
            'ran usability tests, collected feedback, and translated findings into interface improvements',
          ],
        },
      ],
      educationTitle: 'education',
      education: [
        { title: 'UX Researcher', place: 'Google UX Design', period: 'Nov 2025 — Feb 2026' },
        { title: 'UX / UI Designer', place: 'UPROCK SCHOOL', period: 'Mar 2024 — Sep 2024' },
        { title: 'Information Security Analyst', place: 'ITMO University', period: 'Sep 2020 — Jun 2022' },
        { title: 'Applied Linguistics', place: 'SUAI', period: 'Sep 2014 — Jun 2018' },
      ],
      toolsTitle: 'tools',
      softSkillsTitle: 'soft skills',
      softSkills: ['creativity', 'teamwork', 'clear communication', 'self-learning', 'positive attitude', 'argumentation'],
      hardSkillsTitle: 'hard skills',
      hardSkills: [
        { title: 'Product Discovery', description: '' },
        { title: 'UX Research', description: '' },
        { title: 'Usability Testing', description: '' },
        { title: 'Information Architecture', description: '' },
        { title: 'Interaction Design', description: '' },
        { title: 'Design Systems', description: '' },
        { title: 'Data-heavy Interfaces', description: '' },
      ],
      languagesTitle: 'languages',
      languages: ['Russian — native', 'English — B2 (intermediate)'],
    },
    stack: [
      { short: 'Fi', name: 'figma',          skills: ['auto layout', 'components & variants', 'design tokens', 'prototyping', 'dev mode', 'variables'] },
      { short: 'Ae', name: 'after effects',   skills: ['UI animations', 'motion graphics', 'Lottie export'] },
      { short: '</>', name: 'html / css',     skills: ['markup', 'flexbox / grid', 'basic animations', 'reading dev code'] },
      { short: 'Jr', name: 'jira',            skills: ['backlog', 'epics & sprints', 'user stories', 'reporting'] },
      { short: 'Cf', name: 'confluence',      skills: ['documentation', 'design specs', 'briefs', 'collaboration'] },
      { short: 'Cl', name: 'claude',          skills: ['prompt engineering', 'UX writing', 'research synthesis', 'brainstorming'] },
      { short: 'Mj', name: 'midjourney',      skills: ['concepts', 'moodboards', 'visual direction', 'illustrations'] },
      { short: '…',  name: 'loading new skill', skills: ['in progress', 'learning', 'bringing into practice'] },
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
        metric: { value: '−42%', label: 'time to scan launch' },
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
        process: 'solution search started with a state map for scan launch: draft form, required params, repeated click, error, successful launch, and return to the table. several iterations focused on making the process understandable without creating a separate status page.\n\n<em>AI</em> helped unpack edge cases, draft microcopy for form states, and compare button behavior after submit. final decisions were checked against technical launch constraints and security logic.',
        solution: '<em>designed the scan initiation flow</em> via the app context menu → a modal form with launch params (environment, branch, commit, tag, version), validated at the CTA activation level.\n\nthe form implements sequential state transitions:\n<em>inactive</em> — button locked until required fields are filled\n<em>loading</em> — form is blocked by a spinner overlay, preventing duplicate requests\n<em>completed</em> — modal closes, control returns to the versions list',
      },
      {
        id: 'scan-compare',
        title: 'scan comparison',
        subtitle: 'appsec platform · side-by-side diff',
        year: '2025',
        tags: ['appsec', 'b2b', 'saas'],
        metric: { value: '−68%', label: 'audit time' },
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
        process: 'solution search went through several iterations: first a simple change log, then a split-view for two scans, then a component table with deltas and a details side panel.\n\n<em>AI</em> helped speed up research and interface thinking: i used it to structure auditor scenarios, shape hypotheses for diff logic, compare data-grouping options, and stress-test UX copy for "new / fixed / changed" states. final decisions were still grounded in product logic, data constraints, and team review.',
        solution: 'designed a comparison feature: user picks two scans from the list and clicks "compare" — a side-by-side view opens with metadata for each scan (environment, launch method, commit). the components table <em>highlights changes by color</em>: green for new vulnerabilities, red for fixed ones. delta counters (+/−) <em>show dynamics</em> across cvss levels.',
      },
      {
        id: 'dashboards',
        title: 'security analytics dashboards',
        subtitle: 'enterprise crm · pipeline redesign',
        year: '2024',
        tags: ['crm', 'b2b', 'enterprise'],
        metric: { value: '−75%', label: 'extra navigation' },
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
        process: 'solution search moved from a static overview toward a modular model: first we mapped metrics by role, then tested widget options, add flow, preview-before-apply behavior, and expanded states for important blocks.\n\n<em>AI</em> helped cluster role needs, generate hypotheses for widget composition, and quickly check information architecture. the final layout was grounded in daily jobs: monitoring, comparison, prioritization, and fast access to details.',
        solution: 'designed a modular dashboard with <em>self-configuration per team needs</em>. users compose their screen through a modal with widget previews. <em>time to access key metrics dropped</em> from 4 section navigations to a single screen — the dashboard covers 80% of daily monitoring scenarios.',
      },
      {
        id: 'triage',
        title: 'triage — editing vulnerability details',
        subtitle: 'appsec platform · vulnerability triage',
        year: '2025',
        tags: ['appsec', 'b2b', 'saas'],
        metric: { value: '−31%', label: 'triage time' },
        problem: 'analysts needed a faster way to update vulnerability status and severity',
        role: 'product designer',
        cover: 'table',
        slides: [
          { image: '/portfolio/110.png', cover: 'table', caption: '1 / the user opens a vulnerability card from the scan results list. the right panel already shows current attributes: severity, impact, confidence, and status. the “Triage” button starts the editing flow without forcing a separate screen' },
          { image: '/portfolio/111.png', cover: 'steps', caption: '2 / the “Edit vulnerability details” modal opens. the first step is changing the status: options expand inline inside the form, making triage faster and reducing selection errors' },
          { image: '/portfolio/112.png', cover: 'steps', caption: '3 / after choosing the “Confirmed” status, the analyst updates severity and impact. the form stays compact and readable: the critical fields are grouped in one place, and the “Apply” button becomes available only when the edit is ready to save' },
          { image: '/portfolio/113.png', cover: 'steps', caption: '4 / the flow also supports partial edits: the analyst can revise only a few attributes, such as severity or impact, without re-entering everything from scratch. this matters in repeated review scenarios' },
          { image: '/portfolio/114.png', cover: 'table', caption: '5 / after applying the changes, the card updates the vulnerability status immediately and a success toast confirms the save. the user clearly sees that triage is complete and the system has stored the new state' },
        ],
        task: 'design a triage flow where an analyst can <em>quickly update status, severity, impact, and comment</em> right inside the vulnerability card — without extra navigation or losing scan context.',
        problemFull: "before the redesign, triage took too many steps and didn't feel controlled. analysts had to split attention between the list, the vulnerability details, and the editing flow. as a result, <em>updating statuses and parameters took too long</em>, and the save confirmation wasn't clear enough.",
        process: 'solution search focused on speed and control: we compared inline editing, a separate page, and a compact modal. iterations helped keep the user inside the vulnerability card context while still giving enough space for status, severity, impact, and confirmation.\n\n<em>AI</em> was used to break down analyst scenarios, validate field sequence, draft errors and confirmations, and compare UX-copy options quickly. the flow was then refined against data constraints and familiar analyst work patterns.',
        solution: 'i turned triage into a compact modal flow inside the vulnerability card: key fields are editable in one place, the primary action becomes available only when the form is in a valid state, and after saving the user immediately sees the <em>updated status and a clear success confirmation</em>. this reduced time-to-triage and made daily vulnerability handling noticeably faster.',
      },
      {
        id: 'case-loading-1',
        isLoading: true,
        title: 'research, syncs, mockups, and tests are being packed into case studies',
        subtitle: 'case study · loading',
        year: 'soon',
        tags: [],
        metric: { value: '', label: '' },
        problem: '',
        role: 'product designer',
        cover: 'loading',
        slides: [],
        task: '',
        problemFull: '',
        solution: '',
      },
    ],
  },
};
