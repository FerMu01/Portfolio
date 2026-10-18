/**
 * DATOS DE ÁREAS DE TRABAJO — Fernando Muñoz Aranda / Spocky
 * Enfoque técnico y creativo respaldado por proyectos reales,
 * adaptabilidad y aprendizaje continuo para dominar cualquier nueva tecnología.
 */

export const specialties = [
  {
    id: 'mobile',
    icon: 'Smartphone',
    title: 'Desarrollo móvil Android & Multiplataforma',
    headline: 'De la lógica de estado al despliegue en tiendas',
    description:
      'Construcción de aplicaciones móviles centradas en el rendimiento, la estabilidad y la experiencia de uso en dispositivos reales. Experiencia trabajando con arquitecturas móviles, consumo de APIs, servicios geoespaciales y publicación en tiendas.',
    evidence: {
      project: 'TeMiPu',
      metric: '~9.000 descargas en Google Play',
      note: 'Planificación de rutas multimodal, cartografía y búsqueda de lugares',
    },
    capabilities: [
      'Desarrollo multiplataforma con Flutter y Dart',
      'Desarrollo nativo para Android con Kotlin y Android SDK',
      'Desarrollo y componentes con React Native',
      'Integración de mapas vectoriales y rasterizados con geolocalización',
      'Consumo e integración de APIs REST y servicios en segundo plano',
      'Autenticación de usuarios (Google Sign-In)',
      'Notificaciones push y sincronización con Firebase',
      'Microinteracciones y animaciones fluidas con Lottie',
      'Gestión de estado, persistencia local y ciclo de vida de componentes',
    ],
    technologies: [
      { name: 'Flutter', tag: 'Producción', featured: true },
      { name: 'Kotlin', tag: 'Producción', featured: true },
      { name: 'React Native', tag: 'Multiplataforma', featured: true },
      { name: 'Dart', tag: 'Producción' },
      { name: 'Android SDK', tag: 'Producción' },
      { name: 'Firebase', tag: 'Integración' },
      { name: 'APIs REST', tag: 'Integración' },
      { name: 'Google Play', tag: 'Publicación' },
    ],
  },
  {
    id: 'web-data',
    icon: 'Globe',
    title: 'Desarrollo web, sistemas y gestión de datos',
    headline: 'Arquitectura de software, lógica de negocio y rigor analítico',
    description:
      'Desarrollo de aplicaciones web interactivas y sistemas empresariales donde la integridad de los datos y la solidez lógica son prioritarias. Capacidad demostrada para diseñar bases de datos relacionales, crear motores de cálculo y garantizar calidad con pruebas automatizadas.',
    evidence: {
      project: 'Simulador crediticio & Gestor de laboratorios',
      metric: '1.415+ pruebas automatizadas',
      note: 'Modelado relacional SQL Server, pipelines ETL con Python y hosting propio',
    },
    capabilities: [
      'Aplicaciones web interactivas con React, Vite y JavaScript moderno',
      'Desarrollo de motores de cálculo financiero desacoplados del DOM',
      'Pruebas unitarias y de integración automatizadas (más de 1.415 tests)',
      'Sistemas de gestión corporativa con ASP.NET Web Forms y C#',
      'Diseño, normalización y optimización de bases de datos relacionales',
      'Depuración, limpieza y migración de datos masivos (Excel a SQL Server)',
      'Ingeniería de pipelines ETL y procesamiento de feeds GTFS en Python',
      'Contenedores Docker para orquestación de servicios y motores OTP',
    ],
    technologies: [
      { name: 'React', tag: 'Frontend', featured: true },
      { name: 'JavaScript', tag: 'Lógica pura', featured: true },
      { name: 'Python', tag: 'ETL / GTFS', featured: true },
      { name: 'ASP.NET / C#', tag: 'Sistemas', featured: true },
      { name: 'Docker', tag: 'DevOps / Servidores', featured: true },
      { name: 'SQL Server', tag: 'Base de datos' },
      { name: 'PostgreSQL', tag: 'Base de datos' },
      { name: 'Supabase', tag: 'Realtime' },
    ],
  },
  {
    id: 'ux-product',
    icon: 'Layers',
    title: 'Diseño UX/UI & Diseño de producto digital',
    headline: 'De la arquitectura de información al prototipo navegable',
    description:
      'Comprensión profunda de la experiencia de usuario antes y durante el código. Diseño de interfaces funcionales, sistemas de diseño atómicos y flujos interactivos para aplicaciones web y móviles con especial atención a la ergonomía visual y accesibilidad.',
    evidence: {
      project: 'Pluribus & Intercity Seguros',
      metric: 'Evolución de producto & Rediseño web',
      note: 'Sistemas de componentes en Figma, Illustrator y Photoshop',
    },
    capabilities: [
      'Diseño de interfaces de usuario (UI) mobile-first y desktop en Figma',
      'Sistemas de diseño atómicos con tokens de color, tipografía y componentes',
      'Creación de recursos vectoriales y branding en Adobe Illustrator',
      'Edición y retoque de assets gráficos en Adobe Photoshop',
      'Arquitectura de información, wireframes interactivos y prototipos de alta fidelidad',
      'Mapeo de journeys de usuario y optimización de flujos de conversión',
      'Auditorías de contraste, jerarquía tipográfica y accesibilidad WCAG',
      'Traspaso ordenado diseño-desarrollo (Design-to-Code handoff)',
    ],
    technologies: [
      { name: 'Figma', tag: 'Diseño principal', featured: true },
      { name: 'Illustrator', tag: 'Vectores / Branding', featured: true },
      { name: 'Photoshop', tag: 'Gráficos / UI', featured: true },
      { name: 'Auto Layout', tag: 'Sistemas UI' },
      { name: 'Design Tokens', tag: 'Estandarización' },
      { name: 'Atomic Design', tag: 'Metodología' },
    ],
  },
];
