/**
 * DATOS CENTRALIZADOS DEL PERFIL — Fernando Muñoz Aranda / Spocky
 * Cochabamba, Bolivia.
 * Información personal y profesional verificada.
 */

export const profile = {
  // ── Identidad personal ───────────────────────────────────────────────────
  name: 'Fernando Muñoz Aranda',
  profession: 'Ingeniería de software, visión de producto y diseño digital',
  education: 'Estudiante de Ingeniería de Sistemas · Cochabamba, Bolivia',
  location: 'Cochabamba, Bolivia',

  // ── Hero & Propuesta de valor ────────────────────────────────────────────
  eyebrow: 'FERNANDO MUÑOZ ARANDA / SPOCKY',
  tagline: 'Ingeniería que se convierte en productos digitales.',
  taglinePart1: 'Ingeniería que se convierte en',
  taglinePart2: 'productos digitales.',
  description:
    'Desarrollo aplicaciones móviles, sistemas web y soluciones basadas en datos. Combino ingeniería de software, pensamiento de producto y diseño para transformar ideas en soluciones digitales funcionales.',

  // ── Métricas verificadas para la primera pantalla ────────────────────────
  metrics: [
    {
      value: '9K+',
      label: 'Descargas de TeMiPu',
      caption: 'Publicado en Google Play Store · Descargas aproximadas',
      verified: true,
      featured: true,
    },
    {
      value: '1.415+',
      label: 'Pruebas automatizadas',
      caption: 'Simulador crediticio · Motor financiero client-side',
      verified: true,
    },
    {
      value: '+∞',
      label: 'Aprendizaje continuo',
      caption: 'Capacidad ágil para aprender y adaptarme a cualquier stack o reto técnico',
      verified: true,
    },
  ],

  // ── Canales de contacto y redes prioritarias ─────────────────────────────
  whatsapp: {
    number: '+591 71763465',
    phoneRaw: '71763465',
    countryCode: '591',
    url: 'https://wa.me/59171763465?text=Hola%2C%20vi%20tu%20portfolio%20de%20Spocky%20y%20quisiera%20consultar%20sobre%20un%20proyecto.',
    message: 'Hola, vi tu portfolio de Spocky y quisiera consultar sobre un proyecto.',
  },

  socialChannels: [
    {
      id: 'whatsapp',
      name: 'WhatsApp',
      url: 'https://wa.me/59171763465?text=Hola%2C%20vi%20tu%20portfolio%20de%20Spocky%20y%20quisiera%20consultar%20sobre%20un%20proyecto.',
      label: '+591 71763465',
      primary: true,
      configured: true,
      tag: 'Canal directo prioritario',
    },
    {
      id: 'tiktok',
      name: 'TikTok',
      url: 'https://www.tiktok.com/@spockydev?is_from_webapp=1&sender_device=pc',
      label: '@spockydev',
      caption: 'Ve mi trabajo a través de video',
      primary: false,
      configured: true,
      tag: 'Contenido técnico y desarrollo',
    },
    {
      id: 'fiverr',
      name: 'Fiverr',
      url: 'https://es.fiverr.com/s/GPPGeA2',
      label: 'Spocky Dev',
      caption: 'Contratación directa de servicios',
      primary: false,
      configured: true,
      tag: 'Servicios freelance',
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/fernando-mu%C3%B1oz-aranda-836330444',
      label: 'Fernando Muñoz Aranda',
      caption: 'Perfil y red profesional',
      primary: false,
      configured: true,
      tag: 'Red profesional',
    },
  ],

  // ── Marca Spocky ─────────────────────────────────────────────────────────
  brand: {
    name: 'Spocky',
    tagline: 'Software Engineering · Digital Product',
    descriptor: 'Espacio de software, diseño y experimentación tecnológica',
    summary:
      'Spocky es un espacio donde convergen software, diseño y experimentación tecnológica para crear productos digitales funcionales que respondan a necesidades reales.',
    areas: [
      'Ingeniería de software y arquitectura modular',
      'Desarrollo móvil (Flutter, Kotlin nativo, React Native)',
      'Desarrollo web interactivo y reactivo (React, Vite, JS)',
      'Bases de datos, procesamiento ETL y analítica con Python',
      'Diseño UX/UI de producto digital (Figma, Illustrator, Photoshop)',
      'Docker, despliegue de microservicios y servidores (OTP, BD)',
    ],
  },

  // ── Sobre mí ─────────────────────────────────────────────────────────────
  about: [
    'Soy Fernando Muñoz Aranda. Desarrollo software y construyo productos digitales desde una perspectiva que integra ingeniería, análisis y diseño. Me interesa entender los problemas a fondo, encontrar soluciones técnicamente sólidas y convertirlas en productos funcionales, intuitivos y bien diseñados.',
    'Mi trabajo abarca desde el análisis de requisitos, la lógica de negocio y el modelado de datos hasta la arquitectura del software y el diseño de interfaces. Cada decisión responde a una necesidad concreta: resolver problemas con claridad, evitar complejidad innecesaria y construir soluciones que puedan evolucionar sin perder calidad.',
    'He llevado proyectos desde la idea hasta su implementación, incluyendo aplicaciones móviles publicadas en Google Play, herramientas de cálculo financiero con más de 1.400 pruebas automatizadas, sistemas de gestión de datos institucionales y propuestas de diseño de producto en Figma. Entre estos proyectos destaca TeMiPu, una aplicación de transporte público que alcanzó aproximadamente 9.000 descargas.',
    'Actualmente, desarrollo mi trabajo bajo Spocky, un espacio donde convergen software, diseño y experimentación tecnológica. Mi objetivo es crear productos digitales que no solo funcionen, sino que respondan a necesidades reales, estén bien construidos y tengan una base técnica capaz de acompañar su crecimiento.',
  ],

  competencies: [
    {
      area: 'Desarrollo móvil',
      details: 'Aplicaciones con Flutter y Dart, desarrollo nativo para Android con Kotlin y React Native.',
    },
    {
      area: 'Desarrollo web',
      details: 'Interfaces y aplicaciones web con React, Vite y JavaScript moderno.',
    },
    {
      area: 'Sistemas empresariales',
      details: 'Desarrollo de aplicaciones de gestión con ASP.NET, C# y SQL Server.',
    },
    {
      area: 'Bases de datos',
      details: 'Diseño de esquemas relacionales, modelado de datos, consultas SQL y gestión con PostgreSQL, Supabase y SQL Server.',
    },
    {
      area: 'Ingeniería de datos',
      details: 'Procesamiento, limpieza, transformación e integración de datos mediante Python, flujos ETL y generación de feeds GTFS a través de scripts propios.',
    },
    {
      area: 'Diseño de producto digital',
      details: 'Diseño de interfaces, arquitectura de información, sistemas atómicos y prototipado interactivo con Figma, Illustrator y Photoshop.',
    },
    {
      area: 'Lógica de negocio y calidad',
      details: 'Separación de responsabilidades, diseño de componentes mantenibles y pruebas automatizadas (+1.415 tests).',
    },
    {
      area: 'DevOps & Servidores',
      details: 'Docker para despliegue de microservicios y servidores (OTP - OpenTripPlanner), y servidor propio para hosting de bases de datos y buscador.',
    },
  ],

  workApproach:
    'Abordo cada proyecto desde sus requisitos y objetivos reales. Priorizo soluciones claras, decisiones técnicas fundamentadas, código mantenible y una experiencia de usuario coherente. Selecciono las herramientas y la arquitectura en función de las necesidades del producto, evitando tanto la complejidad innecesaria como las soluciones que comprometen su evolución.',

  commitment:
    'La transparencia forma parte de mi manera de trabajar. Presento los proyectos, tecnologías y resultados de acuerdo con su alcance real, procurando que puedan verificarse mediante demostraciones, repositorios, publicaciones o evidencias disponibles. Distingo la experiencia práctica de los conocimientos en formación y no atribuyo a un proyecto resultados que no pueda respaldar.',

  siteUrl: 'https://spocky.dev',
};
