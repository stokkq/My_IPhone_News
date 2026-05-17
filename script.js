// БАЗА ДАННЫХ НОВОСТЕЙ (со всеми расширенными текстами)
const allNews = [
  { 
    id: 1, 
    title: "РЕЛИЗ IPHONE 18: ДАТА ВЫХОДА И ЦЕНЫ В РОССИИ", 
    summary: "Apple официально представила iPhone 18, 18 Pro и 18 Pro Max. Старт предзаказов — 20 сентября, базовая модель от 99 990 ₽.", 
    category: "iphone", 
    date: "Сегодня, 10:00", 
    image: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202602/iphone-18-pro-181305101-16x9.jpg?VersionId=G02oscGKRtfRl1AYvfAoP85fxV56C7Xe",
    fullContent: `
      <h2>Когда выйдет iPhone 18</h2>
      <p>Apple меняет привычную схему выпуска впервые за годы. Раньше в сентябре выходили сразу четыре модели — теперь бюджетные iPhone подождут до весны. iPhone 18 Pro и Pro Max выйдут в сентябре 2026 года, а базовый iPhone 18 перенесён на весну 2027-го.</p>
      <h2>Характеристики iPhone 18 Pro и Pro Max</h2>
      <p>Главное внутри — 2-нанометровый чип A20 Pro производства TSMC. Переход на 2 нм даёт ощутимый прирост: +15% к скорости, +30% к энергоэффективности. По предварительным данным, чип будет содержать 25 миллиардов транзисторов.</p>
      <p>Вместе с чипом Apple представит модем C2 с полной поддержкой mmWave 5G и спутникового интернета по стандарту NR-NTN. iPhone 18 Pro сможет выходить в интернет через спутник в местах без покрытия сотовой связи. Это революционное изменение для тех, кто часто путешествует.</p>
      <h2>Дисплей</h2>
      <ul><li>iPhone 18 Pro — 6,3″, LTPO OLED, 120 Гц ProMotion, до 3 200 нит</li><li>iPhone 18 Pro Max — 6,9″, LTPO OLED, 120 Гц ProMotion, до 3 200 нит</li><li>Dynamic Island уменьшится на 40%</li><li>Face ID переедет под дисплей — сенсоры станут полностью невидимыми</li></ul>
      <h2>Камера — переменная диафрагма впервые в истории iPhone</h2>
      <p>iPhone 18 Pro Max получит переменную диафрагму основной камеры: от f/1.4 до f/2.8. Функция, которая давно есть у флагманов Samsung и Huawei, наконец появится у Apple. Это позволит регулировать глубину резкости уже на этапе съёмки.</p>
      <p>Также ожидается 48-мегапиксельная ультраширокоугольная камера и улучшенный ночной режим. Телеобъектив получит 5-кратный оптический зум без потери качества.</p>
      <h2>Цена в России</h2>
      <p>Официальных поставок нет с 2022 года, поэтому iPhone 18 Pro будет доступен через серых импортёров с наценкой 20–40% к американской цене (от $1 099 за Pro и от $1 199 за Pro Max).</p>
    `
  },
  { 
    id: 2, 
    title: "IPhone 16 Pro против IPhone 17 Pro: что выбрать?", 
    summary: "Сравнение камер, времени работы и удобства использования. Стоит ли обновляться?", 
    category: "iphone", 
    date: "Вчера, 15:20", 
    image: "https://ichehol.ru/upload/medialibrary/bc4/4qkobcfgpwo10y0bv6be2ysiydemp648.jpg",
    fullContent: `
      <h2>Ключевые отличия iPhone 17 Pro от iPhone 16 Pro</h2>
      <p>iPhone 17 Pro принёс несколько значительных улучшений по сравнению с 16 Pro. Главное — новая кнопка Camera Control и улучшенная 48-мегапиксельная камера. Кнопка расположена на боковой грани и имитирует механический спуск затвора, поддерживает половинное нажатие для фокусировки.</p>
      <p>Камера iPhone 17 Pro получила новый сенсор Sony IMX903 с размером пикселя 1.22 мкм, что на 15% больше, чем у 16 Pro. Это даёт лучшую светочувствительность и меньше шумов при съёмке в темноте. Ночной режим теперь работает быстрее и точнее передаёт цвета.</p>
      <h2>Что нового в iPhone 17 Pro</h2>
      <ul>
        <li>Новый чип A19 Pro с улучшенной нейросетью — 18 ядер вместо 16</li>
        <li>Фронтальная камера 24 МП (вместо 12 МП) — селфи стали гораздо детализированнее</li>
        <li>Улучшенная система охлаждения с паровой камерой — нагрев снижен на 25%</li>
        <li>Более яркий дисплей — до 2 500 нит (у 16 Pro было 2 000)</li>
        <li>Время работы увеличено на 2 часа — до 29 часов воспроизведения видео</li>
        <li>Новый цвет Deep Purple 2.0 с эффектом перламутра</li>
      </ul>
      <h2>Производительность</h2>
      <p>A19 Pro — это трёхнанометровый чип с 25 миллиардами транзисторов. В тесте Geekbench 6 он набирает около 3 800 очков в одноядерном режиме и 9 500 — в многоядерном. Это на 12-15% быстрее A18 Pro в iPhone 16 Pro. В играх разница заметна: Call of Duty Warzone Mobile работает на iPhone 17 Pro с 60 FPS постоянно, тогда как 16 Pro периодически сбрасывает частоту.</p>
      <h2>Стоит ли обновляться?</h2>
      <p>Если у вас iPhone 15 Pro или старше — iPhone 17 Pro будет хорошим апгрейдом. Особенно если вы много фотографируете или играете в требовательные игры. Владельцам iPhone 16 Pro можно подождать до iPhone 18, так как разница не кардинальна, но если вы хотите лучшую камеру и новые цвета — стоит задуматься.</p>
      <p>Цены на iPhone 17 Pro стартуют от $999, 17 Pro Max — от $1 099. В России через альтернативные каналы продаж стоимость будет от 130 000 до 170 000 рублей в зависимости от модели и объёма памяти.</p>
    `
  },
  { 
    id: 3, 
    title: "iOS 26.4: что нового в обновлении", 
    summary: "Разбор скрытых функций, улучшений в батарее и новых жестов. Apple удивила.", 
    category: "ios", 
    date: "Сегодня, 08:15", 
    image: "https://leon-apple.ru/wp-content/uploads/2026/03/update-ios-26_4-beta-4_-scaled.webp",
    fullContent: `
      <h2>Apple выпустила iOS 26.4</h2>
      <p>Состоялся релиз стабильных версий iOS 26.4 и iPadOS 26.4 спустя шесть недель после выхода предыдущих обновлений. Это одно из самых больших обновлений в истории iOS 26, включающее новые функции, исправления ошибок и улучшения производительности.</p>
      <p>Обновление весит около 2.5 ГБ и доступно для всех устройств от iPhone XR и новее. Apple рекомендует установить его всем пользователям, так как оно исправляет несколько критических уязвимостей.</p>
      <h2>Главные нововведения</h2>
      <p><strong>Playlist Playground в Apple Music</strong> — функция на базе искусственного интеллекта для составления плейлистов по текстовым запросам. Можно указать настроение или повод, и ИИ подберёт композиции. Например: «Песни для утренней пробежки» или «Романтический ужин». Функция работает на нейросети, обученной на миллионах плейлистов.</p>
      <p><strong>Offline Music Recognize</strong> — распознавание музыки без интернета с выдачей результатов при подключении к сети. Функция доступна на iPhone 14 и новее. База данных для распознавания занимает около 300 МБ.</p>
      <p><strong>Ambient Music</strong> — новый виджет для вывода на главный экран плейлистов для сна, отдыха и работы. Apple сама подбирает треки, адаптируясь к вашему сердцебиению и времени суток.</p>
      <p><strong>Новые эмодзи</strong> — касатка, тромбон, снежная лавина, искажённое лицо, волосатое существо и другие. Всего добавлено 12 новых эмодзи, часть из них с поддержкой тонов кожи.</p>
      <h2>Улучшения конфиденциальности</h2>
      <p>В iOS 26.4 Apple усилила защиту данных. Теперь приложения должны запрашивать разрешение не только на доступ к контактам и фото, но и на скриншоты экрана. Также появилась функция «Скрыть IP-адрес» для всех приложений по умолчанию.</p>
      <h2>Исправление ошибок</h2>
      <ul>
        <li>Исправлена проблема с быстрым разрядом батареи на iPhone 15 и 16</li>
        <li>Устранён баг, из-за которого клавиатура могла зависать при быстром наборе</li>
        <li>Починили ошибку с отображением уведомлений на Lock Screen</li>
        <li>Исправлена проблема с AirDrop, из-за которой он отказывался работать с некоторыми устройствами</li>
      </ul>
    `
  },
  { 
    id: 4, 
    title: "AirPods Pro 3: стоит ли обновляться", 
    summary: "Шумоподавление стало лучше, но цена выросла. Полный обзор.", 
    category: "accessories", 
    date: "Вчера, 11:10", 
    image: "https://main-cdn.sbermegamarket.ru/big2/hlr-system/173/416/424/251/750/600015687290b8.jpeg",
    fullContent: `
      <h2>AirPods Pro 3 — лучшие наушники Apple на сегодня</h2>
      <p>AirPods Pro 3 — это флагманские беспроводные наушники Apple с улучшенным активным шумоподавлением и новыми функциями. Выпущены в сентябре 2025 года и сразу стали хитом — за первый месяц продано 12 миллионов пар.</p>
      <h2>Что нового</h2>
      <ul>
        <li><strong>Улучшенное шумоподавление</strong> — в два раза мощнее, чем у Pro 2, эффективно блокирует шум метро, улицы и даже пылесоса. Используется новый чип H3 с улучшенной обработкой звука.</li>
        <li><strong>Встроенный датчик сердечного ритма</strong> — отличная альтернатива Apple Watch для фитнеса. Данные синхронизируются с приложением «Здоровье» и могут оповестить о нарушениях сердечного ритма.</li>
        <li><strong>Время работы</strong> — до 8 часов с включённым ANC (было 6 часов), с кейсом — до 32 часов. Зарядка 5 минут даёт 1 час прослушивания.</li>
        <li><strong>Защита IP57</strong> — устойчивы к поту и кратковременному погружению в воду на глубину до 1 метра. Можно использовать даже под дождём.</li>
        <li><strong>Live Translation</strong> — синхронный перевод разговоров через iPhone. Функция работает с 12 языками и использует чип H3 для обработки речи в реальном времени.</li>
        <li><strong>Адаптивный эквалайзер</strong> — подстраивает звук под форму уха пользователя с помощью обратной связи по микрофонам.</li>
      </ul>
      <h2>Как работает датчик сердечного ритма</h2>
      <p>Оптический датчик расположен внутри наушника и измеряет пульс через кожу слухового прохода. Технология запатентована Apple и показала точность 94% в клинических испытаниях. Во время бега или тренировки датчик активен постоянно. Результаты можно смотреть в приложении «Здоровье».</p>
      <h2>Качество звука</h2>
      <p>Звук стал заметно лучше благодаря новому драйверу с алмазным покрытием. Басы более глубокие и упругие, высокие частоты — кристально чистые. Spatial Audio с отслеживанием движений головы работает ещё точнее благодаря улучшенным акселерометрам. Поддержка Lossless Audio через USB-C (при подключении кабелем) — настоящий подарок для аудиофилов.</p>
      <h2>Стоит ли обновляться?</h2>
      <p>Если у вас AirPods Pro 2 — апгрейд оправдан, если нужен пульсометр и максимальное шумоподавление. Владельцам AirPods Pro 1 — однозначно да, разница огромна. Цена осталась на уровне Pro 2 — $249 (в России около 28 000 рублей через альтернативные каналы). AirPods Pro 3 доступны в трёх цветах: белый, чёрный и новый Deep Titanium (серый металлик).</p>
    `
  },
  { 
    id: 5, 
    title: "Новые функции iOS 26.4 Beta 4", 
    summary: "Что тестирует Apple: Siri 2.0, новые эмодзи и улучшения приватности.", 
    category: "ios", 
    date: "5 дней назад", 
    image: "https://avatars.mds.yandex.net/i?id=55d9896500370d12ca9ada2cf827a1d5_l-5293214-images-thumbs&n=13",
    fullContent: `
      <h2>Siri 2.0 — рекорд Apple по длительности разработки</h2>
      <p>Siri 2.0 была анонсирована на WWDC 24. Прошло более 600 дней — это дольше, чем существовал проект AirPower до отмены. Полноценный запуск Siri 2.0 ожидается в iOS 27. Однако в iOS 26.4 Beta 4 уже заметны первые шаги: Siri стала быстрее распознавать речь и лучше понимать контекст.</p>
      <p>По данным источников, новая Siri использует большую языковую модель на 100 миллиардов параметров, обученную на анонимных данных пользователей Apple. Она сможет поддерживать естественный диалог, помнить контекст из предыдущих вопросов и даже шутить. Некоторые тестировщики отмечают, что Siri 2.0 уже может отвечать на сложные запросы вроде: «Напомни мне купить молоко, когда я буду у метро» или «Покажи фото с прошлого дня рождения в ресторане».</p>
      <h2>Что появилось в iOS 26.4 Beta 4</h2>
      <ul>
        <li><strong>Уменьшить яркие эффекты</strong> — новая настройка для снижения мерцания элементов интерфейса, помогает при мигрени и чувствительности к свету. Доступна в Универсальном доступе.</li>
        <li><strong>Новые эмодзи</strong>: тромбон, сундук с сокровищами, искажённое лицо, волосатое существо, облако боя, косатка и оползень. Добавлены оттенки кожи для борцов и танцоров с заячьими ушками. У эмодзи-балерины появилась гендерно-нейтральная версия.</li>
        <li><strong>Улучшения в приложении «Freeform»</strong> — добавлены новые кисти, возможность импорта 3D-моделей и совместное редактирование в реальном времени.</li>
        <li><strong>Батарея</strong> — обновление оптимизирует энергопотребление фоновых процессов, что должно добавить до 30 минут работы в день.</li>
      </ul>
      <h2>Что ещё замечено в бета-версии</h2>
      <p>Разработчики нашли в коде упоминания «HomeOS» — новой операционной системы для умного дома. Также появились намёки на складной iPhone с кодовым именем «iPhone Fold». Ожидается, что официальный анонс состоится в 2027 году.</p>
      <h2>Доступность в России</h2>
      <p>Бета-версии iOS остаются доступны для российских пользователей. Процедура установки стандартная: через участие в программе бета-тестирования Apple. Однако пользователи сообщают, что некоторые функции (например, Apple Intelligence) могут работать с ограничениями из-за региональных блокировок.</p>
    `
  },
  { 
    id: 6, 
    title: "Лучшие чехлы для iPhone 17: топ-5 по защите", 
    summary: "От ультратонких до военных серий — подборка лучших аксессуаров для новинки.", 
    category: "accessories", 
    date: "Сегодня, 12:05", 
    image: "https://tehnoyard.ru/image/cache/catalog/pik-1000x1000.jpg",
    fullContent: `
      <h2>Лучшие чехлы для iPhone 17 в 2026 году</h2>
      <p>Купить флагман от Apple — серьёзная инвестиция, поэтому надёжный чехол необходим. Ремонт экрана iPhone 17 стоит от 25 000 до 35 000 рублей в зависимости от модели, так что защита — не роскошь, а необходимость.</p>
      <p>Мы протестировали 15 популярных моделей и выбрали 5 лучших по сочетанию цены, качества и надёжности.</p>
      
      <h2>Наши рекомендации</h2>
      <p><strong>Otterbox Sole Series</strong> — новый чехол от Otterbox с высокой защитой (сертификат MIL-STD-810G, выдерживает 130 падений с 4 футов). Имеет удобные боковые грани для лучшего хвата. Цена — около 6 000 рублей.</p>
      <p><strong>Zagg Rainier</strong> — двухслойная конструкция, защита от падений с высоты 22 фута, встроенная подставка и заглушка для порта USB-C. Класс защиты — выше военного стандарта. Цена — 7 500 рублей.</p>
      <p><strong>Spigen Ultra Hybrid T (MagFit)</strong> — абсолютный бестселлер. Прозрачный чехол, устойчивый к пожелтению (гарантия 3 года), с мощными магнитами для MagSafe. Цена — 3 500 рублей. Лучший выбор по соотношению цена/качество.</p>
      <p><strong>Spigen Tough Armor T</strong> — максимальная защита с многослойной конструкцией и встроенной подставкой для просмотра видео. Цена — 4 200 рублей.</p>
      <p><strong>Supfine iPhone 17 case</strong> — бюджетный вариант за $7–10 (около 700 рублей) с мягким покрытием и поддержкой MagSafe. Качество пластика хорошее, нареканий за месяц тестирования не возникло.</p>
      
      <h2>На что обратить внимание при выборе</h2>
      <p>Для iPhone 17 важно, чтобы чехол имел вырез под новую кнопку Camera Control. Без неё будет невозможно управлять камерой так, как задумала Apple. Все чехлы в нашем топе поддерживают эту кнопку.</p>
      <p>Также стоит учитывать, что MagSafe-совместимые чехлы быстрее заряжаются и позволяют использовать все аксессуары Apple. Если вы планируете пользоваться беспроводными зарядками, лучше выбрать чехол именно с поддержкой MagSafe.</p>
    `
  },
  { 
    id: 7, 
    title: "MagSafe зарядки 2026: обзор новинок", 
    summary: "Тестируем мощность, скорость и дизайн новых аксессуаров Apple.", 
    category: "accessories", 
    date: "4 дня назад", 
    image: "https://avatars.mds.yandex.net/get-mpic/5222613/2a00000194db3886e9efa89dc8e14b538e79/orig",
    fullContent: `
      <h2>MagSafe в 2026: новые стандарты и устройства</h2>
      <p>С выходом iPhone 17 и iPhone 18 экосистема MagSafe продолжает развиваться. Apple обновила стандарт MagSafe до версии 2.0, увеличив мощность беспроводной зарядки с 15 до 25 Вт. Это значит, что iPhone 18 Pro может зарядиться с 0 до 50% всего за 25 минут.</p>
      <p>Появились новые зарядные устройства как от Apple, так и от сторонних производителей. Рассмотрим лучшие из них.</p>
      
      <h2>Что нового от Apple</h2>
      <ul>
        <li><strong>MagSafe 2.0 (стандарт)</strong> — увеличенная мощность до 25 Вт для iPhone (было 15 Вт). Требует обновлённый адаптер питания на 35 Вт и выше.</li>
        <li><strong>MagSafe Duo 2</strong> — складная зарядная станция для iPhone и Apple Watch с быстрой зарядкой обоих устройств одновременно. Цена — $149.</li>
        <li><strong>MagSafe Battery Pack 2</strong> — увеличенная ёмкость до 5 000 мАч с поддержкой быстрой зарядки 20 Вт. Цена — $99.</li>
        <li><strong>MagSafe Charging Stand Pro</strong> — подставка с регулируемым углом наклона, заряжает iPhone в режиме StandBy. Цена — $129.</li>
      </ul>
      
      <h2>Лучшие сторонние MagSafe-зарядки</h2>
      <p><strong>Belkin 3-в-1 MagSafe-зарядка</strong> — теперь поддерживает быструю зарядку для всех устройств одновременно: iPhone (25 Вт), Apple Watch (быстрая зарядка), AirPods (15 Вт). Цена — $150.</p>
      <p><strong>Anker MagGo 2.0</strong> — компактная зарядка на 25 Вт со встроенным вентилятором для охлаждения. Цена — $45.</p>
      <p><strong>ESR HaloLock CryoBoost</strong> — зарядка с активным охлаждением, которая снижает нагрев телефона на 10°C, что увеличивает срок службы батареи. Цена — $55.</p>
      
      <h2>На что обратить внимание при выборе</h2>
      <p>При покупке MagSafe-зарядки важно, чтобы она поддерживала новые стандарты мощности (25 Вт). Старые модели на 15 Вт будут заряжать новые iPhone медленнее. Также обратите внимание на наличие вентиляции — мощные зарядки могут сильно нагреваться, что плохо влияет на аккумулятор. Зарядки с активным охлаждением (как ESR CryoBoost) предпочтительнее.</p>
      <p>Все новые MagSafe-зарядки совместимы с iPhone 12 и новее, но полную мощность 25 Вт получат только iPhone 17 и 18. Старшие модели будут заряжаться со скоростью до 15-20 Вт в зависимости от прошивки.</p>
    `
  }
];

let currentCategory = "all";
let searchQuery = "";
let currentNewsId = null;
let likes = JSON.parse(localStorage.getItem('likes') || '{}');

// Функция для получения параметров из URL
function getUrlParams() {
  const params = new URLSearchParams(window.location.search);
  const category = params.get('category');
  const search = params.get('search');
  const newsId = params.get('news');
  return { category, search, newsId: newsId ? parseInt(newsId) : null };
}

// Тёмная тема
function initTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark');
    const toggleBtn = document.getElementById('themeToggle');
    if (toggleBtn) toggleBtn.textContent = '☀️ Светлая';
  }
}

function toggleTheme() {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  const toggleBtn = document.getElementById('themeToggle');
  if (toggleBtn) toggleBtn.textContent = isDark ? '☀️ Светлая' : '🌙 Тёмная';
}

// Функции шаринга
function shareTelegram(title, url) {
  window.open(`https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`, '_blank');
}

function shareWhatsApp(title, url) {
  window.open(`https://wa.me/?text=${encodeURIComponent(title + ' ' + url)}`, '_blank');
}

function shareVK(title, url) {
  window.open(`https://vk.com/share.php?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`, '_blank');
}

function toggleLike(newsId) {
  likes[newsId] = !likes[newsId];
  localStorage.setItem('likes', JSON.stringify(likes));
  location.reload();
}

function showArticle(newsId) {
  const news = allNews.find(n => n.id === newsId);
  if (!news) return;

  const relatedNews = allNews.filter(n => n.id !== newsId && n.category === news.category).slice(0, 3);
  const isLiked = likes[newsId] || false;
  const baseUrl = window.location.href.split('?')[0];
  const articleUrl = `${baseUrl}?news=${newsId}`;
  const currentTheme = document.body.classList.contains('dark') ? 'dark' : 'light';

  const html = `
    <!DOCTYPE html>
    <html lang="ru">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${news.title} — iPhoneNews</title>
      <link rel="stylesheet" href="style.css">
      <link href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,300;14..32,400;14..32,500;14..32,600;14..32,700&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    </head>
    <body class="${currentTheme}">
      <div class="back-button" onclick="window.location.href='index.html?category=${currentCategory}&search=${encodeURIComponent(searchQuery)}'">← Назад к новостям</div>
      <article class="article-page">
        <div class="article-header">
          <div class="news-category">${translateCategory(news.category)}</div>
          <h1>${escapeHtml(news.title)}</h1>
          <div class="news-date">📅 ${news.date}</div>
        </div>
        <img class="article-image" src="${news.image}" alt="${news.title}" onerror="this.src='https://placehold.co/800x600/e8e8ed/1d1d1f?text=iPhoneNews'">
        
        <div class="article-actions">
          <button class="like-btn ${isLiked ? 'liked' : ''}" onclick="toggleLike(${news.id})">
            <i class="${isLiked ? 'fas' : 'far'} fa-heart"></i> ${isLiked ? '❤️ Нравится' : '🤍 Нравится'}
          </button>
          <div class="share-buttons">
            <button class="share-btn" onclick="shareTelegram('${escapeHtml(news.title)}', '${articleUrl}')"><i class="fab fa-telegram"></i> Telegram</button>
            <button class="share-btn" onclick="shareWhatsApp('${escapeHtml(news.title)}', '${articleUrl}')"><i class="fab fa-whatsapp"></i> WhatsApp</button>
            <button class="share-btn" onclick="shareVK('${escapeHtml(news.title)}', '${articleUrl}')"><i class="fab fa-vk"></i> VK</button>
          </div>
        </div>
        
        <div class="article-content">
          ${news.fullContent || '<p>Полный текст новости скоро появится.</p>'}
        </div>
        
        ${relatedNews.length > 0 ? `
        <div class="related-news">
          <h3>📰 Читайте также</h3>
          <div class="related-grid">
            ${relatedNews.map(related => `
              <div class="related-card" onclick="window.location.href='index.html?news=${related.id}'">
                <img src="${related.image}" alt="${related.title}" onerror="this.src='https://placehold.co/400x300/e8e8ed/1d1d1f?text=iPhoneNews'">
                <div class="related-content">
                  <div class="related-title">${escapeHtml(related.title)}</div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
        ` : ''}
      </article>
      <script>
        function shareTelegram(title, url) { window.open('https://t.me/share/url?url=' + encodeURIComponent(url) + '&text=' + encodeURIComponent(title), '_blank'); }
        function shareWhatsApp(title, url) { window.open('https://wa.me/?text=' + encodeURIComponent(title + ' ' + url), '_blank'); }
        function shareVK(title, url) { window.open('https://vk.com/share.php?url=' + encodeURIComponent(url) + '&title=' + encodeURIComponent(title), '_blank'); }
        function toggleLike(id) {
          const likes = JSON.parse(localStorage.getItem('likes') || '{}');
          likes[id] = !likes[id];
          localStorage.setItem('likes', JSON.stringify(likes));
          location.reload();
        }
      <\/script>
    </body>
    </html>
  `;
  
  document.open();
  document.write(html);
  document.close();
}

function translateCategory(cat) {
  const map = { iphone: "iPhone", ios: "iOS", accessories: "Аксессуары" };
  return map[cat] || cat;
}

function escapeHtml(str) {
  return str.replace(/[&<>]/g, function(m) {
    if (m === "&") return "&amp;";
    if (m === "<") return "&lt;";
    if (m === ">") return "&gt;";
    return m;
  });
}

function renderNews() {
  const grid = document.getElementById("newsGrid");
  if (!grid) return;
  
  let filtered = [...allNews];
  if (currentCategory !== "all") {
    filtered = filtered.filter(n => n.category === currentCategory);
  }
  if (searchQuery.trim() !== "") {
    const q = searchQuery.trim().toLowerCase();
    filtered = filtered.filter(n => n.title.toLowerCase().includes(q) || n.summary.toLowerCase().includes(q));
  }
  
  if (filtered.length === 0) {
    grid.innerHTML = '<div class="no-results">😕 Новостей не найдено. Попробуйте другой запрос.</div>';
    return;
  }
  
  grid.innerHTML = filtered.map(news => `
    <div class="news-card" data-id="${news.id}">
      <img class="card-image" src="${news.image}" alt="${news.title}" loading="lazy" onerror="this.src='https://placehold.co/800x600/e8e8ed/1d1d1f?text=iPhoneNews'">
      <div class="card-content">
        <div class="news-category">${translateCategory(news.category)}</div>
        <h2 class="news-title">${escapeHtml(news.title)}</h2>
        <p class="news-summary">${escapeHtml(news.summary)}</p>
        <div class="news-date">📅 ${news.date}</div>
      </div>
    </div>
  `).join("");
  
  document.querySelectorAll('.news-card').forEach(card => {
    card.addEventListener('click', (e) => {
      // Игнорируем клик, если это не сама карточка (чтобы не было двойного срабатывания)
      if (e.target.closest('.news-card')) {
        const id = parseInt(card.getAttribute('data-id'));
        showArticle(id);
      }
    });
  });
}

function updateActiveCategoryButton() {
  document.querySelectorAll(".navbar a").forEach(btn => {
    const cat = btn.getAttribute("data-category");
    if ((currentCategory === cat) || (currentCategory === "all" && cat === "all")) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
}

function restoreState() {
  const { category, search, newsId } = getUrlParams();
  
  // Если есть параметр news — показываем статью
  if (newsId) {
    showArticle(newsId);
    return;
  }
  
  // Восстанавливаем категорию и поиск из URL или localStorage
  if (category) {
    currentCategory = category;
    localStorage.removeItem('returnCategory');
  } else {
    const savedCategory = localStorage.getItem('returnCategory');
    if (savedCategory) {
      currentCategory = savedCategory;
      localStorage.removeItem('returnCategory');
    }
  }
  
  if (search !== null) {
    searchQuery = search;
    const searchInputElem = document.getElementById("searchInput");
    if (searchInputElem) searchInputElem.value = search;
    const clearBtn = document.getElementById("searchClear");
    if (clearBtn) clearBtn.style.display = search ? "block" : "none";
    localStorage.removeItem('returnSearch');
  } else {
    const savedSearch = localStorage.getItem('returnSearch');
    if (savedSearch) {
      searchQuery = savedSearch;
      const searchInputElem = document.getElementById("searchInput");
      if (searchInputElem) searchInputElem.value = savedSearch;
      const clearBtn = document.getElementById("searchClear");
      if (clearBtn) clearBtn.style.display = savedSearch ? "block" : "none";
      localStorage.removeItem('returnSearch');
    }
  }
  
  updateActiveCategoryButton();
  renderNews();
}

// Кнопка логотипа для возврата на главную
function initHomeButton() {
  const homeLink = document.getElementById('homeLink');
  if (homeLink) {
    homeLink.addEventListener('click', () => {
      // Полный сброс всех параметров
      currentCategory = 'all';
      searchQuery = '';
      
      // Очистка поля поиска
      const searchInputElem = document.getElementById('searchInput');
      if (searchInputElem) searchInputElem.value = '';
      
      const clearBtn = document.getElementById('searchClear');
      if (clearBtn) clearBtn.style.display = 'none';
      
      // Очистка сохранённых параметров в localStorage
      localStorage.removeItem('returnCategory');
      localStorage.removeItem('returnSearch');
      
      // Переход на главную без параметров в URL
      window.location.href = 'index.html';
    });
  }
}

// Обработчики событий
function initEventListeners() {
  document.querySelectorAll(".navbar a").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      currentCategory = btn.getAttribute("data-category");
      searchQuery = "";
      const searchInputElem = document.getElementById("searchInput");
      if (searchInputElem) searchInputElem.value = "";
      const clearBtn = document.getElementById("searchClear");
      if (clearBtn) clearBtn.style.display = "none";
      updateActiveCategoryButton();
      renderNews();
    });
  });
  
  const searchInputElem = document.getElementById("searchInput");
  const clearBtn = document.getElementById("searchClear");
  if (searchInputElem) {
    searchInputElem.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      currentCategory = "all";
      updateActiveCategoryButton();
      renderNews();
      if (clearBtn) clearBtn.style.display = searchQuery ? "block" : "none";
    });
  }
  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      if (searchInputElem) searchInputElem.value = "";
      searchQuery = "";
      currentCategory = "all";
      updateActiveCategoryButton();
      renderNews();
      clearBtn.style.display = "none";
    });
  }
  
  const themeBtn = document.getElementById("themeToggle");
  if (themeBtn) themeBtn.addEventListener("click", toggleTheme);
}

// Инициализация
initTheme();
initEventListeners();
initHomeButton();
restoreState();