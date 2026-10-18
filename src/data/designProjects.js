/**
 * DATOS CENTRALIZADOS DE CASOS DE ESTUDIO UX/UI & REDISEÑO
 * Fernando Muñoz Aranda / Spocky
 * Descripciones centradas en la función y valor real de cada módulo de la aplicación.
 */

export const designProjects = [
  // ─── 01. PLURIBUS — EVOLUCIÓN Y REDISEÑO DE PRODUCTO ────────────────────────
  {
    id: 'pluribus',
    name: 'Pluribus',
    subtitle: 'Evolución de producto y rediseño del sistema de transporte urbano',
    type: 'evolution',
    status: 'in-progress',
    statusLabel: 'En desarrollo · Diseño de producto',
    description:
      'Evolución del concepto de transporte y rediseño integral de interfaz a partir de la experiencia operativa previa de TeMiPu. Proyecto activo bajo la marca Spocky enfocado en una nueva arquitectura de información, jerarquía de navegación móvil y diseño de alto contraste.',
    context:
      'Mientras TeMiPu resolvió la viabilidad técnica del motor de ruteo y mapas en producción, su interfaz original priorizaba lo técnico. Pluribus surge como la evolución natural hacia un producto comercial refinado, con interfaces visuales orientadas a simplificar la toma de decisiones del viajero.',
    screenshots: [
      {
        src: '/images/projects/Pluribus/Inicial.png',
        alt: 'Pluribus: Planificador urbano interactivo',
        title: 'Planificador y cálculo inteligente de viajes',
        caption: 'Permite al usuario ingresar o elegir su destino y calcular automáticamente las mejores opciones de viaje en transporte público urbano, comparando tiempos, transbordos y alternativas multimodales.',
        aspect: 'mobile',
      },
      {
        src: '/images/projects/Pluribus/Autenticacion.png',
        alt: 'Pluribus: Acceso de usuario y onboarding',
        title: 'Acceso ágil y personalización de usuario',
        caption: 'Permite al viajero ingresar rápidamente con un solo toque (Google Sign-In o invitado) para guardar rutas favoritas, configurar paradas habituales y recibir alertas de viaje personalizadas.',
        aspect: 'mobile',
      },
      {
        src: '/images/projects/Pluribus/Lugar%20Detail.png',
        alt: 'Pluribus: Ficha de detalle de punto urbano y turístico',
        title: 'Exploración de lugares y puntos de interés',
        caption: 'Permite consultar información relevante de puntos urbanos y sitios turísticos, con fotos, reseñas y opciones directas de navegación para llegar desde la ubicación actual.',
        aspect: 'mobile',
      },
    ],
    designDecisions: [
      'Jerarquía visual con tarjeta flotante de rutas sobre el mapa para lectura rápida en movimiento',
      'Clasificación explícita de opciones: ruta más rápida frente a opciones multimodales con transbordo',
      'Iconografía personalizada para medios de transporte paceños (minibuses, teleféricos, buses)',
      'Modo oscuro optimizado para visibilidad en pantalla y consumo energético en dispositivos OLED',
    ],
    tools: ['Figma', 'Auto Layout', 'Design Tokens', 'Illustrator', 'Photoshop'],
  },

  // ─── 02. INTERCITY SEGUROS — REDISEÑO WEB CORPORATIVO ────────────────────────
  {
    id: 'intercity-seguros',
    name: 'Intercity Seguros',
    subtitle: 'Rediseño web corporativo para contratación de seguros de viaje',
    type: 'redesign',
    status: 'archived',
    statusLabel: 'Caso de estudio completado',
    description:
      'Rediseño visual y estructural de la plataforma web de Intercity Tours GmbH para la contratación y cotización de pólizas de seguro de viaje para el Espacio Schengen.',
    context:
      'El proyecto requería clarificar una oferta de pólizas con múltiples variables de duración, coberturas médicas y requisitos legales europeos, transformando un proceso administrativo en un flujo de cotización transparente y estructurado.',
    externalUrl: 'https://seguros.intercitytours.com/',
    screenshots: [
      {
        src: '/images/projects/IntercitySeguros/Pantalla Inicio.png',
        alt: 'Intercity Seguros: Selector paramétrico de planes de seguro',
        title: 'Cotización inmediata de seguro de viaje',
        caption: 'Permite al viajero seleccionar la duración de su estancia en Europa y obtener una cotización transparente al instante con cobertura médica válida para el visado Schengen.',
        aspect: 'tall-web',
      },
      {
        src: '/images/projects/IntercitySeguros/Precios y cobertura.png',
        alt: 'Intercity Seguros: Desglose de planes, coberturas médicas y exclusiones',
        title: 'Comparativa y alcance de coberturas',
        caption: 'Permite revisar con total claridad los montos cubiertos en asistencia médica, repatriación y emergencias, asegurando el cumplimiento de los estándares consulares.',
        aspect: 'tall-web',
      },
      {
        src: '/images/projects/IntercitySeguros/¿Como funciona_.png',
        alt: 'Intercity Seguros: Flujo de contratación y certificación de póliza',
        title: 'Emisión y gestión directa de pólizas',
        caption: 'Guía al usuario en el flujo de contratación en 4 pasos, permitiendo descargar el certificado oficial de la póliza de inmediato para tramitar la visa o viajar.',
        aspect: 'tall-web',
      },
    ],
    designDecisions: [
      'Arquitectura de información orientada a responder de inmediato precio, cobertura y países válidos',
      'Tarjetas modulares de selección de viaje agrupadas por rangos temporales para facilitar la decisión',
      'Sección explícita de exclusiones médicas para brindar total transparencia al asegurado',
      'Flujo de compra resumido en 4 pasos secuenciales visualmente comprensibles',
    ],
    tools: ['Figma', 'Photoshop', 'Illustrator', 'Diseño Web Responsive'],
  },
];
