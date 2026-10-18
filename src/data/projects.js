/**
 * DATOS CENTRALIZADOS DE PROYECTOS — Fernando Muñoz Aranda / Spocky
 * Manifiesto verificado con capturas reales y descripciones exactas.
 */

export const projects = [
  // ─── 01. PROYECTO INSIGNIA: TeMiPu ──────────────────────────────────────────
  {
    id: 'temipú',
    name: 'TeMiPu',
    subtitle: 'Planificador de transporte público en La Paz',
    category: 'mobile',
    featured: true,
    flagship: true,
    status: 'published',
    statusLabel: 'Publicado en Google Play',
    technologies: ['Flutter', 'Dart', 'OpenTripPlanner', 'GTFS', 'Python', 'Docker', 'PostgreSQL', 'Linux'],
    image: '/images/projects/Temipu/RutaTemipu.jpeg',
    bannerImage: null,
    coverAspect: 'mobile',
    caseStudyRoute: '/proyectos/temipú',
    externalUrl: null,
    repoUrl: null,

    featuredTech: ['Flutter', 'OpenTripPlanner', 'Docker', 'GTFS', 'Python'],

    // Métricas verificadas actualizadas a 9.000 descargas
    metrics: [
      { label: 'Descargas alcanzadas', value: '9.000+', verified: true, caption: 'En Google Play Store' },
      { label: 'Rutas digitalizadas', value: '900+', verified: true, caption: 'Líneas y conexiones urbanas en La Paz' },
      { label: 'Motor de cálculo', value: 'OpenTripPlanner', verified: true, caption: 'Itinerarios multimodales paso a paso' },
    ],

    // Galería completa con todas las capturas reales de la carpeta Temipu
    screenshots: [
      {
        src: '/images/projects/Temipu/RutaTemipu.jpeg',
        alt: 'TeMiPu: Planificación de ruta en transporte público en La Paz',
        title: 'Planificación de viajes en transporte público',
        caption: 'La aplicación asiste a los usuarios a llegar a su destino calculando rutas óptimas paso a paso mediante las diferentes líneas y opciones de transporte público de la ciudad de La Paz.',
        aspect: 'mobile',
      },
      {
        src: '/images/projects/Temipu/inicioTemipu.webp',
        alt: 'TeMiPu: Buscador de lugares propios y alternativas de transporte',
        title: 'Buscador propio de lugares y restaurantes',
        caption: 'El motor de búsqueda y el catálogo de lugares, puntos de referencia y restaurantes de la ciudad de La Paz fueron creados íntegramente por mí, respaldados por una base de datos propia en servidor independiente.',
        aspect: 'mobile',
      },
      {
        src: '/images/projects/Temipu/Tarifas.jpeg',
        alt: 'TeMiPu: Consulta de tarifas oficiales de transporte',
        title: 'Guía tarifaria y estimación de costos',
        caption: 'Muestra información detallada de tarifas diurnas y nocturnas según tramo y modalidad de transporte en La Paz.',
        aspect: 'mobile',
      },
      {
        src: '/images/projects/Temipu/FormRastreo.jpeg',
        alt: 'TeMiPu: Verificación y estado de líneas',
        title: 'Rastreo y reporte colaborativo de rutas',
        caption: 'Módulo de verificación comunitaria de líneas activas y actualización de trazados para el sistema multimodal.',
        aspect: 'mobile',
      },
      {
        src: '/images/projects/Temipu/InfoTemipu.jpeg',
        alt: 'TeMiPu: Ficha técnica de recorridos',
        title: 'Ficha técnica de rutas y frecuencias',
        caption: 'Detalle de paradas, horarios de operación y transbordos sugeridos para cada línea de minibús, micro o bus.',
        aspect: 'mobile',
      },
    ],

    description:
      'Aplicación Android para la planificación de rutas de transporte público en La Paz, Bolivia. Desarrollada para resolver la desestructuración del transporte urbano paceño mediante cálculo de itinerarios multimodales, mapas vectoriales propios, buscador de lugares creado a medida y servidor OTP orquestado en Docker.',

    problem:
      'El sistema de transporte público paceño no cuenta con información digital estructurada ni rutas centralizadas. Los usuarios dependen de la memoria local para navegar la ciudad. Planificar un viaje multimodal requiere resolver capas de datos geográficos, paradas, transbordos y cálculo de tiempos reales en una geografía de gran altitud y relieve irregular.',

    myContribution:
      'Desarrollo integral de la app en Flutter/Dart, desarrollo del buscador propio de lugares y restaurantes con base de datos en servidor propio, creación de scripts en Python para generación y limpieza de datos GTFS de más de 900 rutas, contenedorización y despliegue del motor OpenTripPlanner con Docker en servidor Linux, y publicación exitosa en Google Play alcanzando más de 9.000 descargas.',

    highlights: [
      'Más de 9.000 descargas alcanzadas en Google Play Store',
      'Más de 900 rutas de transporte público digitalizadas y calculables en la app',
      'Buscador propio de lugares y gastronomía con base de datos independiente',
      'Creación y procesamiento de feeds GTFS mediante scripts personalizados en Python',
      'Despliegue y orquestación del servidor OpenTripPlanner (OTP) mediante Docker',
      'Cálculo de rutas multimodal paso a paso para minibuses, buses y teleféricos',
      'Mapas interactivos vectoriales y rasterizados de alta velocidad',
    ],
  },

  // ─── 02. SIMULADOR DE PROCESOS CREDITICIOS ─────────────────────────────────
  {
    id: 'simulador-creditos',
    name: 'Simulador de procesos crediticios',
    subtitle: 'Motor matemático financiero y evaluación crediticia',
    category: 'web',
    featured: true,
    flagship: false,
    status: 'published',
    statusLabel: 'En producción en Cloudflare Pages',
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'Pruebas Automatizadas', 'Cloudflare Pages'],
    image: '/images/projects/Simulador/inicio.png',
    coverAspect: 'desktop',
    caseStudyRoute: null,
    externalUrl: 'https://simuladorbancario.pages.dev/',
    repoUrl: null,

    metrics: [
      { label: 'Pruebas automatizadas', value: '1.415+', verified: true, caption: 'Tests unitarios y de integración para validar cálculos' },
      { label: 'Arquitectura', value: '100% Client-side', verified: true, caption: 'Motor financiero desacoplado del DOM sin backend' },
      { label: 'Despliegue', value: 'Cloudflare Pages', verified: true, caption: 'Entrega estática de alto rendimiento' },
    ],

    screenshots: [
      {
        src: '/images/projects/Simulador/inicio.png',
        alt: 'Simulador bancario: Formulario de entrada de datos del solicitante y crédito',
        title: 'Entrada paramétrica de la operación crediticia',
        caption: 'Captura estructurada de datos del solicitante y condiciones del crédito (capital, tasa anual/periódica, plazo en años y periodicidad).',
        aspect: 'desktop',
      },
      {
        src: '/images/projects/Simulador/resultado1.png',
        alt: 'Simulador bancario: Comparación de sistemas Francés, Alemán y Americano con evaluación de riesgo',
        title: 'Comparativa de amortizaciones y dictamen crediticio',
        caption: 'Cálculo simultáneo y comparativo entre sistema Francés, Alemán y Americano, con análisis de esfuerzo financiero (DTI) y dictamen paramétrico.',
        aspect: 'desktop',
      },
      {
        src: '/images/projects/Simulador/resultado2.png',
        alt: 'Simulador bancario: Tabla de amortización detallada y botón para generar expediente PDF',
        title: 'Tabla de amortización y generación de expediente PDF',
        caption: 'Desglose período a período (períodos de gracia, cuota, amortización e interés) con exportación directa de contratos y tablas en PDF.',
        aspect: 'desktop',
      },
    ],

    description:
      'Aplicación web client-side (sin backend) para la simulación y análisis de operaciones de crédito. Desarrollada con HTML, CSS y JavaScript moderno, incorpora un motor matemático independiente de la interfaz, control estricto de estado, generación de reportes PDF y más de 1.415 pruebas automatizadas que certifican la exactitud de los cálculos.',

    problem:
      'La simulación bancaria requiere absoluta precisión numérica en el cálculo de intereses, comisiones, reprogramaciones y tablas de amortización. Un error de redondeo o lógica invalida la propuesta. El reto fue crear un simulador completo que corra enteramente en el navegador del cliente con confiabilidad demostrable.',

    myContribution:
      'Diseño e implementación de la arquitectura completa: separación estricta entre el motor de cálculo financiero y la manipulación del DOM, desarrollo de los algoritmos de amortización (francesa, alemana y planes personalizados), suite de más de 1.415 pruebas unitarias automatizadas y generación de contratos y tablas en PDF.',

    highlights: [
      'Motor matemático financiero independiente desacoplado del DOM',
      'Cálculo de amortización fija, variable, períodos de gracia y reprogramaciones',
      'Evaluación paramétrica de riesgo crediticio según capacidad de pago',
      'Generación de documentos PDF y contratos directamente desde el navegador',
      'Más de 1.415 pruebas automatizadas que garantizan solidez matemática',
      'Despliegue ágil y continuo en Cloudflare Pages con disponibilidad inmediata',
    ],
  },

  // ─── 03. GESTOR DE LABORATORIOS DE GASTRONOMÍA ─────────────────────────────
  {
    id: 'gestor-laboratorios',
    name: 'Gestor de laboratorios de gastronomía',
    subtitle: 'Sistema institucional de gestión técnica y estructuración de datos',
    category: 'systems',
    featured: true,
    flagship: false,
    status: 'archived',
    statusLabel: 'Proyecto completado',
    technologies: ['ASP.NET', 'C#', 'SQL Server', 'Excel ETL', 'JavaScript'],
    image: '/images/projects/Gestion Gastronomia/Dashboard.png',
    coverAspect: 'desktop',
    caseStudyRoute: null,
    externalUrl: null,
    repoUrl: null,

    metrics: [
      { label: 'Ingeniería de datos', value: 'Excel a SQL Server', verified: true, caption: 'Limpieza y estructuración de datos masivos' },
      { label: 'Stack tecnológico', value: 'ASP.NET + C#', verified: true, caption: 'Arquitectura institucional relacional' },
    ],

    screenshots: [
      {
        src: '/images/projects/Gestion Gastronomia/Dashboard.png',
        alt: 'Gestor de laboratorios: Panel de mantenimiento preventivo y métricas de avance',
        title: 'Panel de control y mantenimiento preventivo',
        caption: 'Métricas de estado en tiempo real (activos totales, sanos, vencidos, completados, porcentaje de avance) y accesos directos al wizard de mantenimiento.',
        aspect: 'desktop',
      },
      {
        src: '/images/projects/Gestion Gastronomia/EquipoInventario.png',
        alt: 'Gestor de laboratorios: Registro y codificación de activos fijos del laboratorio',
        title: 'Inventario y codificación de activos fijos',
        caption: 'Control de inventario global con filtros por tipo de recurso, estado de revisión y ambiente asignado a los laboratorios de cocina y coctelería.',
        aspect: 'desktop',
      },
      {
        src: '/images/projects/Gestion Gastronomia/Mantenimiento.png',
        alt: 'Gestor de laboratorios: Wizard paso a paso de ronda de mantenimiento progresivo',
        title: 'Ronda de mantenimiento progresivo (Wizard)',
        caption: 'Flujo guiado por etapas de verificación masiva de equipos (Verificación → Solicitud → Mantenimiento → Salida → Kardex → Desembolso).',
        aspect: 'desktop',
      },
      {
        src: '/images/projects/Gestion Gastronomia/PlanificacionCalendario.png',
        alt: 'Gestor de laboratorios: Grilla de planificación semanal y horarios académicos',
        title: 'Grilla semanal y planificación de prácticas',
        caption: 'Matriz horaria semanal por ambiente y laboratorio con asignación de docentes, materias prácticas y control de ocupación.',
        aspect: 'desktop',
      },
    ],

    description:
      'Sistema web desarrollado para la administración integral de laboratorios de gastronomía institucional: control de mantenimiento preventivo, codificación de inventario de equipos, rondas de verificación técnica y grilla de horarios académicos.',

    problem:
      'La institución operaba con múltiples planillas de cálculo dispersas, con formatos heterogéneos, inconsistencias en codificaciones de equipos y duplicación de información. Era indispensable consolidar toda la operativa en un modelo relacional consistente para habilitar el nuevo sistema de gestión.',

    myContribution:
      'Desarrollo del sistema en ASP.NET y C#, liderando la ingeniería de datos: análisis de las planillas Excel del cliente, depuración y normalización de información, modelado del esquema relacional en SQL Server, scripts de carga masiva y validación de integridad referencial.',

    highlights: [
      'Auditoría y depuración de planillas Excel operativas del cliente',
      'Modelado de base de datos relacional normalizada en SQL Server',
      'Scripts de transformación y carga de datos garantizando integridad',
      'Módulos de administración de laboratorios, inventario y rondas técnicas',
      'Control de versiones y pruebas de flujo completadas',
    ],
  },

  // ─── 04. ADAN — EDUCACIÓN AUDIOVISUAL ──────────────────────────────────────
  {
    id: 'adan',
    name: 'ADAN',
    subtitle: 'Aplicación educativa audiovisual sobre la Ley 348',
    category: 'mobile',
    featured: true,
    flagship: false,
    status: 'archived',
    statusLabel: 'Proyecto completado',
    technologies: ['Android', 'Kotlin', 'Java', 'Multimedia UI'],
    image: '/images/projects/Adan/adan2.jpeg',
    coverAspect: 'mobile',
    caseStudyRoute: null,
    externalUrl: null,
    repoUrl: null,

    screenshots: [
      {
        src: '/images/projects/Adan/adan2.jpeg',
        alt: 'ADAN: Menú principal con módulos de Galería, Ley 348 y Desahógate',
        title: 'Menú principal y canales de apoyo',
        caption: 'Interfaz accesible con accesos directos a la galería audiovisual, consulta de artículos estipulados en la Ley 348 y canal de escucha y orientación.',
        aspect: 'mobile',
      },
      {
        src: '/images/projects/Adan/adan3.jpeg',
        alt: 'ADAN: Galería audiovisual con secciones Cortos, Reflexiones y Música',
        title: 'Galería de cápsulas educativas y reflexiones',
        caption: 'Contenido multimedia pedagógico estructurado en contrastes visuales para concientizar sobre relaciones saludables y prevención.',
        aspect: 'mobile',
      },
      {
        src: '/images/projects/Adan/adan1.jpeg',
        alt: 'ADAN: Portada conceptual del proyecto educativo móvil',
        title: 'Identidad visual y diseño empático',
        caption: 'Tratamiento visual humanizado para abordar temáticas sensibles de prevención de violencia de género de forma accesible.',
        aspect: 'mobile',
      },
    ],

    description:
      'Aplicación móvil Android educativa orientada a la sensibilización, prevención y divulgación de los derechos estipulados en la Ley 348. Diseñada con un enfoque sensible y empático mediante tarjetas visuales interactivas, cápsulas audiovisuales y orientación.',

    problem:
      'El lenguaje legal suele ser árido y poco accesible para el público general, especialmente en problemáticas sensibles. El desafío consistió en estructurar una experiencia de usuario clara, respetuosa e intuitiva que permita acceder a información vital de manera segura y comprensible.',

    myContribution:
      'Desarrollo de la aplicación Android en Kotlin/Java, diseño de la arquitectura de navegación por tarjetas de contenido, integración de reproductor multimedia para sketches educativos y diseño de flujos de interacción centrados en la claridad.',

    highlights: [
      'Arquitectura de navegación fluida basada en tarjetas de contenido',
      'Integración multimedia optimizada para reproducción de sketches educativos',
      'Estructuración pedagógica de artículos legales complejos',
      'Diseño de interfaz empático y accesible para todo tipo de usuarios',
    ],
  },

  // ─── 05. PROTOTIPO DE RESTAURANTE ──────────────────────────────────────────
  {
    id: 'sistema-restaurante',
    name: 'Prototipo de restaurante (DeliverThePeople)',
    subtitle: 'Gestión en tiempo real para cocina, comandas y despacho',
    category: 'systems',
    featured: true,
    flagship: false,
    status: 'concept',
    statusLabel: 'Prototipo colaborativo',
    technologies: ['React', 'Vite', 'Supabase', 'CSS'],
    image: '/images/projects/Restaurant/Ordenes.png',
    coverAspect: 'desktop',
    caseStudyRoute: null,
    externalUrl: null,
    repoUrl: null,

    screenshots: [
      {
        src: '/images/projects/Restaurant/Ordenes.png',
        alt: 'DeliverThePeople: Gestión de pedidos y flujo de producción en cocina',
        title: 'Flujo de producción en cocina (Comandas)',
        caption: 'Control de pedidos en tiempo real con alertas de retraso, desglose de ítems y botones de acción rápida para personal de cocina.',
        aspect: 'desktop',
      },
      {
        src: '/images/projects/Restaurant/Catalogo.png',
        alt: 'DeliverThePeople: Catálogo de inventario de insumos e ingredientes',
        title: 'Catálogo de inventario y materias primas',
        caption: 'Gestión de insumos por categoría, niveles de stock mínimo, costos unitarios y control de movimientos.',
        aspect: 'desktop',
      },
      {
        src: '/images/projects/Restaurant/Chat.png',
        alt: 'DeliverThePeople: Canal de mensajería directa con clientes por pedido',
        title: 'Comunicación en tiempo real con clientes',
        caption: 'Chat contextualizado por pedido para coordinación inmediata de tiempos de entrega, dudas sobre despacho y atención directa.',
        aspect: 'desktop',
      },
      {
        src: '/images/projects/Restaurant/GestionEmpleado.png',
        alt: 'DeliverThePeople: Panel de administración de empleados y roles',
        title: 'Gestión de personal y asignación de roles',
        caption: 'Administración de personal activo por sucursal, control de permisos de acceso según roles operativos.',
        aspect: 'desktop',
      },
      {
        src: '/images/projects/Restaurant/Incidencias.png',
        alt: 'DeliverThePeople: Módulo de registro de incidencias cocina-despacho',
        title: 'Reporte de incidencias operativas',
        caption: 'Registro y seguimiento de incidencias internas (insumos agotados, averías de equipamiento) con niveles de prioridad.',
        aspect: 'desktop',
      },
    ],

    description:
      'Prototipo interactivo desarrollado en colaboración con React, Vite y Supabase para validar la coordinación operativa en tiempo real entre la recepción de pedidos, el estado de preparación en cocina y la asignación a despacho.',

    problem:
      'Validar cómo la reactividad en tiempo real de una base de datos moderna puede sincronizar las comandas de cocina con sala y delivery sin recurrir a una infraestructura backend pesada.',

    myContribution:
      'Co-diseño y desarrollo de los componentes frontend en React con Vite, modelado de tablas y suscripciones en tiempo real en Supabase, y construcción de las interfaces diferenciadas para comandas de cocina, inventario e incidencias.',

    highlights: [
      'Módulos visuales diferenciados para sala, cocina y despacho',
      'Sincronización de pedidos en tiempo real con Supabase Realtime',
      'Desarrollo modular de componentes con React y Vite',
      'Validación de experiencia de usuario en flujos rápidos de comandas',
    ],
  },

  // ─── PROYECTOS SECUNDARIOS / COMPLEMENTARIOS ──────────────────────────────
  {
    id: 'app-citas-medicas',
    name: 'App de citas médicas',
    subtitle: 'Gestión de agenda y recordatorios de turnos',
    category: 'mobile',
    featured: false,
    flagship: false,
    status: 'archived',
    statusLabel: 'Completado',
    technologies: ['Kotlin', 'Android', 'Firebase', 'APIs REST'],
    image: null,
    caseStudyRoute: null,
    externalUrl: null,
    repoUrl: null,
    description:
      'Aplicación Android nativa desarrollada con Kotlin para la reserva de citas médicas, administración de turnos y sincronización de notificaciones push de recordatorio mediante Firebase.',
  },

  {
    id: 'apps-android-kotlin',
    name: 'Aplicaciones Android con Kotlin',
    subtitle: 'Prácticas y módulos nativos en Android Studio',
    category: 'mobile',
    featured: false,
    flagship: false,
    status: 'archived',
    statusLabel: 'Completado',
    technologies: ['Kotlin', 'Android SDK', 'Lottie', 'APIs REST'],
    image: null,
    caseStudyRoute: null,
    externalUrl: null,
    repoUrl: null,
    description:
      'Colección de módulos nativos para Android: consumo de servicios REST, microinteracciones con animaciones Lottie, gestión de ciclo de vida de actividades y almacenamiento local.',
  },

  {
    id: 'experimentos-web',
    name: 'Exploración web y modelado 3D',
    subtitle: 'Prototipado tecnológico y visualización en Blender',
    category: 'web',
    featured: false,
    flagship: false,
    status: 'concept',
    statusLabel: 'Exploración',
    technologies: ['HTML', 'CSS', 'JavaScript', 'WordPress', 'Blender'],
    image: null,
    caseStudyRoute: null,
    externalUrl: null,
    repoUrl: null,
    description:
      'Proyectos de exploración formativa: personalización de sitios WordPress, maquetación CSS avanzada y modelos 3D básicos desarrollados en Blender para complementar proyectos digitales.',
  },
];

export const getFeaturedProjects = () =>
  projects
    .filter((p) => p.featured)
    .sort((a, b) => (b.flagship ? 1 : 0) - (a.flagship ? 1 : 0));

export const getOtherProjects = () => projects.filter((p) => !p.featured);

export const getProjectById = (id) => {
  if (!id) return null;
  const decoded = decodeURIComponent(id).toLowerCase();
  return projects.find(
    (p) =>
      p.id.toLowerCase() === decoded ||
      (p.id === 'temipú' && (decoded === 'temipu' || decoded === 'temipú'))
  );
};
