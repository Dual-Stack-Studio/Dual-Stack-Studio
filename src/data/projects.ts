// Project case studies shown at /work/<slug> and /de/work/<slug>.
// Language-neutral fields (media, stack, url) live once; the prose lives in `en` / `de`.
import type { Lang } from '../i18n';

interface ProjectText {
  client: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  status: string;
  growthPitch?: string;
}

interface ProjectDef {
  stack: string[];
  image: string;
  video?: string;
  portraitVideo?: boolean;
  gallery?: string[];
  url: string | null;
  en: ProjectText;
  de: ProjectText;
}

const projects: Record<string, ProjectDef> = {
  bumeran: {
    stack: ['React Native', 'Expo SDK 56', 'NativeWind', 'NestJS 11', 'Prisma', 'PostgreSQL', 'Google OAuth', 'Twilio', 'Claude Sonnet 4.6'],
    image: '/images/bumeran-hero.png',
    video: '/videos/bumeran-demo.mp4',
    portraitVideo: true,
    url: null,
    en: {
      client: 'Personal project · Dual-Stack Studio',
      title: 'Bumerán',
      tagline: '"Lo que das, vuelve" — neighborhood favor exchange',
      description: 'A neighborhood favor-exchange app for requesting help, offering assistance, or giving items away — filtered by GPS across 13 categories. Users see only complementary content: those seeking help see offers and gifts, helpers see requests. In active development under Dual-Stack Studio with Claude Sonnet 4.6 as engineering partner.',
      features: [
        'Three post types — necesito, ofrezco, regalo — with intent-aware feed filtering so users only see complementary content',
        'Full-screen map with color-coded pins per post type, plus a swipeable bottom sheet (20/45/85% snap points) for browsing',
        'Safety modal with real-world tips before WhatsApp handoff — exact GPS location is never shown publicly',
        'Twilio SMS verification (6-digit code, 10-minute expiry) — one phone number per account, enforced server-side',
        'Full connection lifecycle — pending → accepted → completed/cancelled — with a review system for local reputation',
        'NestJS backend with global rate limiting (100 req/min per IP) and Helmet security headers',
        'Google OAuth + JWT authentication, session persisted via AsyncStorage with automatic restore on launch',
        'Spanish, English and German localization, GDPR-compliant with a reusable legal footer across 4 screens',
        'Live in production on Railway',
        'Built with Claude Sonnet 4.6 as daily AI pairing partner throughout the build',
      ],
      status: 'Active development · closed testing on Google Play',
      growthPitch: 'Core flows are production-ready — GPS-filtered feed, phone verification and the full connection lifecycle already run live on Railway. Scaling beyond a single city means real, usage-tied costs: Twilio SMS per verification, maps/GPS API calls, and community moderation as the network grows. Open to investment to fund infrastructure and fuel a multi-city rollout.',
    },
    de: {
      client: 'Eigenes Projekt · Dual-Stack Studio',
      title: 'Bumerán',
      tagline: '„Lo que das, vuelve“ — die Tauschbörse für Nachbarschaftshilfe',
      description: 'Eine App für Nachbarschaftshilfe auf Gegenseitigkeit: Hilfe anfragen, Unterstützung anbieten oder Dinge verschenken — per GPS gefiltert, in 13 Kategorien. Es werden nur passende Gegenstücke angezeigt: Wer Hilfe sucht, sieht Angebote und Geschenke, Helfende sehen Gesuche. In aktiver Entwicklung bei Dual-Stack Studio, mit Claude Sonnet 4.6 als Engineering-Partner.',
      features: [
        'Drei Beitragstypen — necesito, ofrezco, regalo — mit absichtsabhängiger Feed-Filterung, sodass nur passende Inhalte erscheinen',
        'Vollbildkarte mit farbcodierten Pins je Beitragstyp und wischbarem Bottom Sheet (Raststufen bei 20/45/85 %) zum Stöbern',
        'Sicherheitshinweis mit praxisnahen Tipps vor der Übergabe an WhatsApp — der genaue GPS-Standort wird nie öffentlich angezeigt',
        'SMS-Verifizierung über Twilio (6-stelliger Code, 10 Minuten gültig) — eine Telefonnummer pro Konto, serverseitig erzwungen',
        'Kompletter Verbindungsablauf — ausstehend → akzeptiert → abgeschlossen/abgebrochen — mit Bewertungssystem für die lokale Reputation',
        'NestJS-Backend mit globalem Rate Limiting (100 Anfragen/Min. pro IP) und Helmet-Security-Headern',
        'Google-OAuth- und JWT-Authentifizierung, Sitzung per AsyncStorage gespeichert und beim Start automatisch wiederhergestellt',
        'Lokalisierung auf Spanisch, Englisch und Deutsch, DSGVO-konform mit wiederverwendbarem Rechtstext-Footer auf 4 Screens',
        'Produktiv im Einsatz auf Railway',
        'Entwickelt mit Claude Sonnet 4.6 als täglichem KI-Pairing-Partner während des gesamten Aufbaus',
      ],
      status: 'In aktiver Entwicklung · geschlossener Test auf Google Play',
      growthPitch: 'Die Kernabläufe sind produktionsreif — GPS-gefilterter Feed, Telefonverifizierung und der komplette Verbindungsablauf laufen bereits live auf Railway. Der Schritt über eine einzelne Stadt hinaus bringt echte, nutzungsabhängige Kosten mit sich: Twilio-SMS pro Verifizierung, Karten-/GPS-API-Aufrufe und Community-Moderation, sobald das Netzwerk wächst. Offen für Investitionen, um die Infrastruktur zu finanzieren und einen Roll-out in mehreren Städten voranzutreiben.',
    },
  },

  echoesandpaths: {
    stack: ['React Native', 'Expo SDK 54', 'Node.js ESM', 'Express 5', 'PostgreSQL', 'Knex.js', 'Claude Sonnet 4.6'],
    image: '/images/echoesandpaths-hero.png',
    gallery: [
      '/images/Eches&Paths (11).jpeg',
      '/images/Eches&Paths (10).jpeg',
      '/images/Eches&Paths (9).jpeg',
      '/images/Eches&Paths (8).jpeg',
      '/images/Eches&Paths (7).jpeg',
      '/images/Eches&Paths (6).jpeg',
      '/images/Eches&Paths (5).jpeg',
      '/images/Eches&Paths (4).jpeg',
      '/images/Eches&Paths (3).jpeg',
      '/images/Eches&Paths (2).jpeg',
      '/images/Eches&Paths (1).jpeg',
    ],
    video: '/videos/echoesandpaths-demo.mp4',
    portraitVideo: true,
    url: 'https://play.google.com/apps/testing/com.sebit.castleapp',
    en: {
      client: 'Personal project · Dual-Stack Studio',
      title: 'Echoes & Paths',
      tagline: 'Conquer historical landmarks, one GPS check-in at a time',
      description: "A GPS-powered historical landmark app born from wanting castles, ruins and museums front-and-center on a map, not buried among restaurants and gas stations. Visit a castle, a ruin, a museum — conquer it physically within 150m — build a medieval rank, add friends, and see what they've explored. Currently in closed testing for family and friends due to Google Places API operational costs at scale.",
      features: [
        'GPS-validated conquest system — server-side Haversine distance check (≤150m) rejects spoofed or remote check-ins',
        '7-tier medieval rank progression — Peasant → Squire → Knight → Baron → Count → Duke → High King',
        'Social layer — friend requests, cross-user conquest visibility, and push notifications via the Expo Push API',
        'Hybrid feed aggregating Google Places API (New), Wikipedia historical descriptions and community contributions — server-cached and paginated',
        'Community photo and text contributions via Cloudinary, moderated before going public',
        'Google Sign-In + JWT authentication',
        'OTA updates via EAS Update — ships JS fixes to production without waiting on a Play Store review',
        'English and German localization, auto-detected from device locale',
        'Full GDPR-compliant legal pages — Art. 13/14 rights, DPA complaint links for 6 EU countries',
        'Built solo with Claude Sonnet 4.6 as daily AI pairing partner throughout the entire build',
      ],
      status: 'Closed testing on Google Play',
      growthPitch: 'The architecture is already built for scale — hybrid caching, the conquest system and the full social layer are production-ready. What caps it at closed testing is API budget: Google Places costs scale directly with active users, and going public means a real, ongoing bill. Open to investment or a sponsorship partner to unlock a public launch.',
    },
    de: {
      client: 'Eigenes Projekt · Dual-Stack Studio',
      title: 'Echoes & Paths',
      tagline: 'Historische Wahrzeichen erobern — ein GPS-Check-in nach dem anderen',
      description: 'Eine GPS-basierte App für historische Sehenswürdigkeiten, entstanden aus dem Wunsch, Burgen, Ruinen und Museen auf der Karte in den Vordergrund zu rücken, statt sie zwischen Restaurants und Tankstellen zu verstecken. Man besucht eine Burg, eine Ruine, ein Museum — erobert sie tatsächlich vor Ort im Umkreis von 150 m —, steigt im mittelalterlichen Rang auf, fügt Freunde hinzu und sieht, was diese entdeckt haben. Derzeit im geschlossenen Test für Familie und Freunde, wegen der Betriebskosten der Google Places API im großen Maßstab.',
      features: [
        'GPS-validiertes Eroberungssystem — serverseitige Haversine-Distanzprüfung (≤ 150 m) lehnt gefälschte oder aus der Ferne getätigte Check-ins ab',
        'Mittelalterliches Rangsystem mit 7 Stufen — Bauer → Knappe → Ritter → Baron → Graf → Herzog → Hochkönig',
        'Soziale Ebene — Freundschaftsanfragen, nutzerübergreifende Sichtbarkeit von Eroberungen und Push-Benachrichtigungen über die Expo Push API',
        'Hybrid-Feed aus Google Places API (New), historischen Beschreibungen von Wikipedia und Community-Beiträgen — serverseitig gecacht und paginiert',
        'Foto- und Textbeiträge der Community über Cloudinary, vor der Veröffentlichung moderiert',
        'Google-Anmeldung und JWT-Authentifizierung',
        'OTA-Updates über EAS Update — JS-Fixes gehen live, ohne auf eine Prüfung im Play Store zu warten',
        'Lokalisierung auf Englisch und Deutsch, automatisch anhand der Geräte-Sprache erkannt',
        'Vollständig DSGVO-konforme Rechtstexte — Rechte nach Art. 13/14, Beschwerdelinks zu den Datenschutzbehörden von 6 EU-Ländern',
        'Allein entwickelt, mit Claude Sonnet 4.6 als täglichem KI-Pairing-Partner während des gesamten Aufbaus',
      ],
      status: 'Geschlossener Test auf Google Play',
      growthPitch: 'Die Architektur ist bereits auf Skalierung ausgelegt — Hybrid-Caching, Eroberungssystem und die komplette soziale Ebene sind produktionsreif. Was das Projekt im geschlossenen Test hält, ist das API-Budget: Die Kosten der Google Places API wachsen direkt mit den aktiven Nutzern, und ein öffentlicher Start bedeutet eine echte, laufende Rechnung. Offen für Investitionen oder einen Sponsoring-Partner, um den öffentlichen Launch zu ermöglichen.',
    },
  },

  nonna: {
    stack: ['Laravel 13', 'PHP 8.3', 'Vite', 'Blade', 'Tailwind CSS v4', 'Carbon'],
    image: '/images/nonna-logo-hero.jpg',
    video: '/videos/nonna-hero.mp4',
    gallery: [
      '/images/nonna-gallery-2.jpg',
      '/images/nonna-gallery-1.jpg',
      '/images/nonna-gallery-3.jpg',
      '/images/nonna-gallery-4.jpg',
    ],
    url: 'https://losalfajoresdelanona.com',
    en: {
      client: 'El Dulce de la Nonna · Live client project',
      title: 'Bakery e-commerce',
      tagline: 'Zero-friction ordering for an artisan alfajores bakery',
      description: "An e-commerce site for an artisan alfajores bakery in Miami, built for Argentine expats who miss the taste of the alfajores their grandmothers used to make. Every order is handcrafted to spec with a 48-hour advance window, and the whole flow runs on email — no database, no admin panel, no maintenance overhead for the client. Legal compliance sits front and center: allergen disclosure for Florida food-safety law, FDUTPA-compliant cancellation terms, and an FDBR-compliant privacy policy with explicit data rights. The architecture stays intentionally simple for where the business is today, with a clear upgrade path to Stripe checkout, automated order emails and a lightweight admin panel once order volume justifies the added complexity — built under Dual-Stack Studio.",
      features: [
        'Email-first order flow — no DB persistence, two Mailables per order',
        '48-hour minimum advance window enforced server-side with Carbon',
        'Allergen disclosure and FDUTPA/FDBR legal compliance built in for Florida food-safety law',
        'Server-rendered Blade monolith — zero client-side JS framework, fast by default',
        "Custom Tailwind v4 branding tokens matching the bakery's identity",
        'Architected to scale on purpose — a clear path to Stripe checkout and an admin panel without a rewrite',
      ],
      status: 'Live · active development',
    },
    de: {
      client: 'El Dulce de la Nonna · Live-Kundenprojekt',
      title: 'Online-Shop für eine Bäckerei',
      tagline: 'Reibungslos bestellen bei einer handwerklichen Alfajores-Bäckerei',
      description: 'Ein Online-Shop für eine handwerkliche Alfajores-Bäckerei in Miami, gebaut für argentinische Auswanderer, die den Geschmack der Alfajores vermissen, die ihre Großmütter früher gebacken haben. Jede Bestellung wird nach Maß von Hand gefertigt, mit 48 Stunden Vorlaufzeit, und der gesamte Ablauf läuft per E-Mail — keine Datenbank, kein Admin-Panel, kein Wartungsaufwand für die Bäckerei. Rechtliche Konformität steht im Mittelpunkt: Allergenkennzeichnung nach dem Lebensmittelrecht von Florida, FDUTPA-konforme Stornobedingungen und eine FDBR-konforme Datenschutzerklärung mit ausdrücklichen Betroffenenrechten. Die Architektur bleibt bewusst schlank für den heutigen Stand des Geschäfts, mit einem klaren Ausbaupfad zu Stripe-Checkout, automatischen Bestell-E-Mails und einem schlanken Admin-Panel, sobald das Bestellvolumen die zusätzliche Komplexität rechtfertigt — umgesetzt bei Dual-Stack Studio.',
      features: [
        'E-Mail-basierter Bestellablauf — keine Datenbank-Persistenz, zwei Mailables pro Bestellung',
        'Mindestvorlauf von 48 Stunden, serverseitig mit Carbon erzwungen',
        'Allergenkennzeichnung sowie FDUTPA-/FDBR-Konformität nach dem Lebensmittelrecht von Florida von Anfang an integriert',
        'Serverseitig gerenderter Blade-Monolith — kein clientseitiges JS-Framework, von Haus aus schnell',
        'Eigene Tailwind-v4-Branding-Tokens, passend zur Identität der Bäckerei',
        'Bewusst skalierbar angelegt — ein klarer Weg zu Stripe-Checkout und Admin-Panel ohne Neuentwicklung',
      ],
      status: 'Live · in aktiver Weiterentwicklung',
    },
  },

  mvg: {
    stack: ['Astro 7', 'TypeScript', 'Vercel', 'Fontsource', 'Vanilla CSS'],
    image: '/images/mvg-logo-hero.jpg',
    video: '/videos/mvg-demo.mp4',
    gallery: [
      '/images/mvg-gallery-1.jpg',
      '/images/mvg-gallery-2.jpg',
      '/images/mvg-gallery-3.jpg',
      '/images/mvg-gallery-4.jpg',
    ],
    url: 'https://mvglashes.no',
    en: {
      client: 'MVG Lash & Brow · Live client project',
      title: 'Salon website',
      tagline: 'Static, private-by-default site for a Trondheim salon',
      description: 'A single-page site for a lashes and brow salon in Trondheim, Norway — statically generated, self-hosted fonts, zero cookies or tracking, and built to stay accessible without sacrificing speed.',
      features: [
        'Astro 7 static generation — flat HTML, config-driven content',
        'Native HTML5 modal for the "About" section, no extra libraries',
        'Self-hosted fonts via Fontsource — no third-party font requests',
        'Privacy-first: no cookies, no analytics, no tracking',
        'WCAG 2.1 AA accessible throughout',
        'Booking integration with the Timma salon management system',
        'Passes Google Core Web Vitals and indexed in Google Search — verified via Search Console, meeting the page-experience quality bar Google uses for ranking',
      ],
      status: 'Live · Lighthouse 95+, LCP ~1.2s, CLS < 0.05',
    },
    de: {
      client: 'MVG Lash & Brow · Live-Kundenprojekt',
      title: 'Salon-Website',
      tagline: 'Statische, datenschutzfreundliche Website für einen Salon in Trondheim',
      description: 'Eine One-Page-Website für einen Wimpern- und Brauen-Salon in Trondheim, Norwegen — statisch generiert, mit selbst gehosteten Schriften, ohne Cookies und Tracking, und so gebaut, dass sie barrierefrei bleibt, ohne Abstriche bei der Geschwindigkeit.',
      features: [
        'Statische Generierung mit Astro 7 — schlankes HTML, konfigurationsgesteuerte Inhalte',
        'Natives HTML5-Modal für den Bereich „Über uns“, ohne zusätzliche Bibliotheken',
        'Selbst gehostete Schriften über Fontsource — keine Anfragen an Drittanbieter',
        'Datenschutz zuerst: keine Cookies, keine Analyse, kein Tracking',
        'Durchgängig barrierefrei nach WCAG 2.1 AA',
        'Buchungsintegration mit dem Salonverwaltungssystem Timma',
        'Besteht die Core Web Vitals von Google und ist in der Google-Suche indexiert — über die Search Console verifiziert und damit auf dem Qualitätsniveau der Seitenerfahrung, das Google für das Ranking heranzieht',
      ],
      status: 'Live · Lighthouse 95+, LCP ca. 1,2 s, CLS < 0,05',
    },
  },
  savora: {
    stack: ['Expo SDK 54', 'expo-router', 'TypeScript', 'FastAPI', 'Python', 'SQLite', 'Anthropic Claude', 'Spoonacular API', 'Railway'],
    image: '/images/savora-hero.jpg',
    video: '/videos/savora-demo.mp4',
    portraitVideo: true,
    gallery: [
      '/images/savora-home.png',
      '/images/savora-recipe-detail.png',
      '/images/savora-shopping.png',
    ],
    url: null,
    en: {
      client: 'Personal project · Dual-Stack Studio',
      title: 'Savora',
      tagline: 'What can I cook with what I have? A recipe app with an AI cooking companion',
      description: "A mobile recipe app built around one question: what can I cook with what I have? Type in your ingredients, pick a diet filter and get ranked suggestions instantly from a local catalog, enriched with results from a much larger online database when local matches run thin. The centerpiece is Linna, a Claude-powered assistant with the app's plush-sheep mascot as her face: a real conversational agent that searches your own catalog first and only reaches for the quota-limited external source when it needs to.",
      features: [
        'Ingredient-based search with diet filters (vegan, vegetarian, with meat) and a match score that shows what you have and what is missing',
        'Linna, a Claude-powered assistant that calls tools: it searches the local catalog first and uses the external recipe API only when local results are weak',
        'Every recipe the assistant surfaces opens straight inside the app through deep navigation',
        'Python/FastAPI backend on Railway, rewritten from Node/Express with the original API mirrored 1:1 and covered by 73 tests before the assistant was added',
        'Embedded SQLite catalog that creates and seeds itself on every boot, with no manual migration step',
        'All external API keys stay on the server, so the client never touches a paid key',
        'Home screen designed around the mascot and real photography, plus favorites and a shopping list',
        'Built with Claude as a daily engineering partner, from the backend migration to deployment debugging',
      ],
      status: 'In development · working through Google Play publishing',
    },
    de: {
      client: 'Eigenes Projekt · Dual-Stack Studio',
      title: 'Savora',
      tagline: 'Was koche ich mit dem, was ich habe? Eine Rezept-App mit KI-Kochbegleiterin',
      description: 'Eine mobile Rezept-App rund um eine einzige Frage: Was kann ich mit dem kochen, was ich zu Hause habe? Zutaten eintippen, Ernährungsfilter wählen und sofort passende Vorschläge aus einem lokalen Katalog bekommen, ergänzt durch Treffer aus einer viel größeren Online-Datenbank, wenn lokal zu wenig passt. Im Mittelpunkt steht Linna, eine Claude-Assistentin mit dem Plüsch-Schaf der App als Gesicht: ein echter Gesprächsagent, der zuerst den eigenen Katalog durchsucht und die kontingentierte externe Quelle nur bei Bedarf nutzt.',
      features: [
        'Suche nach Zutaten mit Ernährungsfiltern (vegan, vegetarisch, mit Fleisch) und einem Trefferwert, der zeigt, was vorhanden ist und was fehlt',
        'Linna, eine Claude-Assistentin mit Tool-Aufrufen: Sie durchsucht zuerst den lokalen Katalog und nutzt die externe Rezept-API nur, wenn lokal wenig passt',
        'Jedes Rezept, das die Assistentin vorschlägt, öffnet sich direkt in der App per Deep Navigation',
        'Python/FastAPI-Backend auf Railway, von Node/Express umgeschrieben, mit 1:1 nachgebauter API und 73 Tests, bevor die Assistentin dazukam',
        'Eingebetteter SQLite-Katalog, der sich bei jedem Start selbst anlegt und befüllt, ohne manuellen Migrationsschritt',
        'Alle externen API-Schlüssel bleiben auf dem Server, der Client sieht nie einen kostenpflichtigen Schlüssel',
        'Startseite rund um das Maskottchen und echte Fotografie gestaltet, dazu Favoriten und Einkaufsliste',
        'Mit Claude als täglichem Engineering-Partner gebaut, von der Backend-Migration bis zum Deployment-Debugging',
      ],
      status: 'In Entwicklung · Veröffentlichung im Google Play Store in Arbeit',
    },
  },
  watchit: {
    stack: ['React 19', 'Redux Toolkit', 'Socket.IO', 'Node.js', 'Express 5', 'YouTube API', 'Vercel'],
    image: '/images/watchit-hero.jpg',
    video: '/videos/watchit-demo.mp4',
    url: 'https://watchit-frontend.vercel.app',
    en: {
      client: 'Personal project · Dual-Stack Studio',
      title: 'WatchIt',
      tagline: 'Watch together in perfect sync: no accounts, no setup',
      description: "For the people who can't be in the same room. Create a room, share a link and watch YouTube videos in perfect sync. One person presses play, everyone watches together; pause, seek and video changes stay in sync instantly. Under the hood: a React 19 progressive web app with Socket.IO-driven sync, and a stateless Node.js server with a custom handshake protocol for frame-accurate sync when someone joins mid-video.",
      features: [
        'Rooms shared by link, with no accounts and no setup',
        'Play, pause, seek and video changes reach everyone in real time through WebSockets (Socket.IO)',
        'Frame-accurate sync for people joining mid-video, thanks to a custom handshake protocol',
        'Stateless Node.js/Express server: no room state to store, back up or migrate',
        'React 19 progressive web app with Redux Toolkit state management',
        'Live on Vercel',
        'The same real-time technology can power live order boards, shared views or live availability for a business',
      ],
      status: 'Live',
    },
    de: {
      client: 'Eigenes Projekt · Dual-Stack Studio',
      title: 'WatchIt',
      tagline: 'Gemeinsam schauen, perfekt synchron: ohne Konto, ohne Einrichtung',
      description: 'Für alle, die nicht im selben Raum sein können. Raum erstellen, Link teilen und YouTube-Videos in perfektem Gleichlauf ansehen. Eine Person drückt Play, alle schauen gemeinsam; Pause, Vor- und Zurückspulen und Videowechsel bleiben sofort synchron. Unter der Haube: eine React-19-Progressive-Web-App mit Socket.IO-gesteuerter Synchronisation und ein zustandsloser Node.js-Server mit eigenem Handshake-Protokoll für bildgenaues Nachsynchronisieren, wenn jemand mitten im Video dazukommt.',
      features: [
        'Räume per Link teilen, ohne Konto und ohne Einrichtung',
        'Play, Pause, Spulen und Videowechsel erreichen alle in Echtzeit über WebSockets (Socket.IO)',
        'Bildgenaue Synchronisation für alle, die mitten im Video dazukommen, dank eigenem Handshake-Protokoll',
        'Zustandsloser Node.js/Express-Server: kein Raumzustand, der gespeichert, gesichert oder migriert werden muss',
        'React-19-Progressive-Web-App mit Redux Toolkit für den Zustand',
        'Live auf Vercel',
        'Dieselbe Echtzeit-Technik kann Live-Bestelltafeln, gemeinsame Ansichten oder Live-Verfügbarkeit für ein Geschäft antreiben',
      ],
      status: 'Live',
    },
  },
  underevents: {
    stack: ['React 18', 'Redux Toolkit', 'Auth0', 'Stripe', 'Leaflet', 'Node.js REST API', 'PostgreSQL', 'Redis', 'Brevo'],
    image: '/images/underevents-hero.jpg',
    video: '/videos/underevents-demo.mp4',
    url: 'https://new-events-final.vercel.app',
    en: {
      client: 'Showcase project · Dual-Stack Studio',
      title: 'UnderEvents',
      tagline: 'A full e-commerce platform for live event tickets, from discovery to confirmation email',
      description: 'A real online store selling event tickets, not a toy CRUD app. Visitors discover events by city, genre and month, add tickets to a cart, pay with Stripe and receive a confirmation email, while admins create and manage events. Our part: the frontend architecture and implementation (folder structure, state management, component boundaries and conventions, all defined before the first screen was built), integrated with a Node.js REST API with Stripe webhooks, Brevo email and Redis caching.',
      features: [
        'Complete purchase lifecycle: event discovery, cart, Stripe payment, confirmation email and admin management',
        'Real Stripe checkout, with payments confirmed server-side through webhooks',
        'Search and filters by city, genre and month, plus interactive Leaflet maps for event locations',
        'Auth0 authentication on the frontend and RS256-signed JWTs on the API',
        'Transactional emails through Brevo, and Redis caching on the API',
        'Admin area to create and manage events',
        'English and German interface',
        'Frontend architecture defined up front (Redux Toolkit state, folder structure, component boundaries, naming conventions) and validated through clear pull requests',
        'Live on Vercel',
      ],
      status: 'Live demo · deployed on Vercel',
    },
    de: {
      client: 'Showcase-Projekt · Dual-Stack Studio',
      title: 'UnderEvents',
      tagline: 'Eine komplette E-Commerce-Plattform für Live-Event-Tickets, von der Entdeckung bis zur Bestätigungs-E-Mail',
      description: 'Ein echter Online-Shop für Event-Tickets, keine Spielerei mit ein paar CRUD-Seiten. Besucher entdecken Events nach Stadt, Genre und Monat, legen Tickets in den Warenkorb, zahlen mit Stripe und erhalten eine Bestätigungs-E-Mail, während Admins Events anlegen und verwalten. Unser Teil: die Frontend-Architektur und deren Umsetzung (Ordnerstruktur, State Management, Komponentengrenzen und Konventionen, alles festgelegt, bevor der erste Screen entstand), angebunden an eine Node.js-REST-API mit Stripe-Webhooks, Brevo-E-Mails und Redis-Caching.',
      features: [
        'Kompletter Kaufprozess: Events entdecken, Warenkorb, Stripe-Zahlung, Bestätigungs-E-Mail und Admin-Verwaltung',
        'Echter Stripe-Checkout, Zahlungen werden serverseitig über Webhooks bestätigt',
        'Suche und Filter nach Stadt, Genre und Monat sowie interaktive Leaflet-Karten für die Veranstaltungsorte',
        'Auth0-Authentifizierung im Frontend und RS256-signierte JWTs in der API',
        'Transaktions-E-Mails über Brevo und Redis-Caching in der API',
        'Admin-Bereich zum Anlegen und Verwalten von Events',
        'Oberfläche auf Englisch und Deutsch',
        'Frontend-Architektur vorab festgelegt (Redux-Toolkit-State, Ordnerstruktur, Komponentengrenzen, Namenskonventionen) und über klare Pull Requests abgestimmt',
        'Live auf Vercel',
      ],
      status: 'Live-Demo · auf Vercel veröffentlicht',
    },
  },
};

export const projectSlugs = Object.keys(projects);

export interface Project extends ProjectText {
  slug: string;
  stack: string[];
  image: string;
  video?: string;
  portraitVideo?: boolean;
  gallery?: string[];
  url: string | null;
}

/** One project's full data in the requested language. */
export function getProject(slug: string, lang: Lang): Project {
  const { en, de, ...shared } = projects[slug];
  return { slug, ...shared, ...(lang === 'de' ? de : en) };
}

/** The short card data for every project except `slug`, in the requested language. */
export function getOtherProjects(slug: string, lang: Lang) {
  return projectSlugs
    .filter((s) => s !== slug)
    .map((s) => {
      const p = getProject(s, lang);
      return { slug: s, client: p.client, title: p.title, tagline: p.tagline, image: p.image };
    });
}
