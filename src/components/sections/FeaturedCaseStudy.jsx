import React, { useState } from 'react';
import {
  MapPin, Database, Cpu, Server, Layers, ArrowRight, Maximize2,
} from 'lucide-react';
import Container from '../layout/Container.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';
import Button from '../ui/Button.jsx';
import ImageModal from '../ui/ImageModal.jsx';
import { getProjectById } from '../../data/projects.js';

const temipú = getProjectById('temipú');

const featureBlocks = [
  {
    icon: MapPin,
    title: 'Mapas rasterizados y vectoriales propios',
    description:
      'Integración y renderizado de capas de mapas personalizadas optimizadas para representar la compleja geografía urbana y la red de transporte de La Paz.',
  },
  {
    icon: Cpu,
    title: 'Cálculo de rutas con OpenTripPlanner',
    description:
      'Motor de planificación multimodal que calcula itinerarios paso a paso combinando líneas de transporte, tiempos estimados, paradas y transbordos.',
  },
  {
    icon: Database,
    title: 'Datos GTFS y procesamiento con Python',
    description:
      'Pipeline de extracción, limpieza y estructuración de datos de transporte público en formato estándar GTFS hacia la base de datos relacional.',
  },
  {
    icon: MapPin,
    title: 'Búsqueda de lugares y paradas',
    description:
      'Sistema de búsqueda de puntos de interés, paradas intermedias y direcciones integrado directamente en la experiencia de navegación del usuario.',
  },
  {
    icon: Server,
    title: 'Preparación y administración de servidor Linux',
    description:
      'Configuración del entorno de producción Linux, despliegue del backend de cálculo de rutas y mantenimiento de la infraestructura en la nube.',
  },
  {
    icon: Layers,
    title: 'Publicación exitosa en Google Play',
    description:
      'Ciclo completo de empaquetado, firma y publicación de la aplicación en Google Play, alcanzando aproximadamente 9.000 descargas.',
  },
];

const FeaturedCaseStudy = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedScreenIdx, setSelectedScreenIdx] = useState(0);

  if (!temipú) return null;

  return (
    <section id="caso-temipú" className="section" aria-label="Caso de estudio insignia TeMiPu">
      <Container>
        <SectionHeading
          label="Proyecto insignia · Producción"
          title="TeMiPu — Planificador de transporte público"
          description="Una solución técnica integral que combina ingeniería de software móvil, datos geoespaciales GTFS, cálculo de rutas multimodal y despliegue en servidor Linux."
        />

        <div className="case-study">
          {/* Columna principal */}
          <div className="case-study__content">
            {/* Contexto */}
            <div className="case-study__block">
              <h3 className="case-study__block-title">Contexto y problema resuelto</h3>
              <p className="case-study__text">
                En La Paz, el transporte público es heterogéneo y carece de información digital accesible o
                rutas centralizadas. Los usuarios habitualmente dependen de la memoria personal o de preguntar
                en la calle. TeMiPu nació para resolver esta brecha: una aplicación que calcula rutas óptimas
                en transporte público, guiando al usuario paso a paso entre su origen y destino.
              </p>
            </div>

            {/* Objetivos */}
            <div className="case-study__block">
              <h3 className="case-study__block-title">Objetivos del producto</h3>
              <ul className="case-study__list">
                <li>Permitir al usuario planificar un viaje desde cualquier punto geográfico de la ciudad</li>
                <li>Calcular itinerarios multimodales con paradas, transbordos y tiempos estimados de llegada</li>
                <li>Ofrecer una experiencia ágil y clara con mapas propios adaptados al contexto local</li>
                <li>Publicar la aplicación en Google Play para su adopción y uso en la vida real</li>
              </ul>
            </div>

            {/* Mi contribución técnica */}
            <div className="case-study__block">
              <h3 className="case-study__block-title">Mi participación y contribución técnica</h3>
              <p className="case-study__text">
                El desarrollo implicó trabajar en múltiples capas de la solución:
              </p>
              <ul className="case-study__list" style={{ marginTop: 'var(--space-2)' }}>
                <li><strong>Desarrollo móvil:</strong> Construcción de la aplicación completa en Flutter y Dart, gestionando estado y reactividad.</li>
                <li><strong>Mapas y cartografía:</strong> Renderizado y control de capas rasterizadas y vectoriales con optimización de memoria.</li>
                <li><strong>Ingeniería de datos:</strong> Scripts en Python para extracción, limpieza y estructuración de feeds en formato GTFS.</li>
                <li><strong>Motor de ruteo:</strong> Configuración e integración de OpenTripPlanner para el cálculo de grafos de transporte multimodal.</li>
                <li><strong>Infraestructura:</strong> Preparación, despliegue y mantenimiento del servidor Linux en entorno de producción.</li>
              </ul>
            </div>

            {/* Funcionalidades */}
            <div className="case-study__block">
              <h3 className="case-study__block-title">Funcionalidades implementadas</h3>
              <div className="case-study__features">
                {featureBlocks.map(({ icon: Icon, title, description }) => (
                  <div key={title} className="case-study__feature">
                    <div className="case-study__feature-icon" aria-hidden="true">
                      <Icon size={18} strokeWidth={1.5} />
                    </div>
                    <div>
                      <strong className="case-study__feature-title">{title}</strong>
                      <p className="case-study__feature-desc">{description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Galería de capturas reales de la aplicación */}
            <div className="case-study__block">
              <div className="case-study__block-header-row">
                <h3 className="case-study__block-title">Capturas reales de la aplicación en producción</h3>
                <span className="case-study__block-badge">Google Play Store</span>
              </div>
              <p className="case-study__text" style={{ marginBottom: 'var(--space-4)' }}>
                Interfaces reales capturadas directamente desde la aplicación Android, demostrando la integración
                de mapas vectoriales, búsqueda de rutas paso a paso y fichas de puntos de referencia paceños:
              </p>

              <div className="case-study-gallery-grid">
                {(temipú.screenshots || []).map((screen, idx) => (
                  <div
                    key={screen.src}
                    className="case-study-gallery-item"
                    onClick={() => {
                      setSelectedScreenIdx(idx);
                      setModalOpen(true);
                    }}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        setSelectedScreenIdx(idx);
                        setModalOpen(true);
                      }
                    }}
                    aria-label={`Ampliar captura: ${screen.title}`}
                  >
                    <div className="case-study-gallery-item__frame">
                      <img
                        src={screen.src}
                        alt={screen.alt}
                        className="case-study-gallery-item__img"
                        loading="lazy"
                      />
                      <div className="case-study-gallery-item__overlay">
                        <Maximize2 size={16} aria-hidden="true" />
                        <span>Ver completa</span>
                      </div>
                    </div>
                    <div className="case-study-gallery-item__meta">
                      <strong className="case-study-gallery-item__title">{screen.title}</strong>
                      <p className="case-study-gallery-item__caption">{screen.caption}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Resultados y aprendizajes */}
            <div className="case-study__block">
              <h3 className="case-study__block-title">Resultados comprobables y aprendizajes</h3>
              <div className="case-study__metrics">
                <div className="metric-card">
                  <p className="metric-card__value">~9.000</p>
                  <p className="metric-card__label">Descargas aproximadas en Google Play</p>
                  <span className="metric-card__caption" style={{ fontSize: '11px', color: 'var(--color-text-tertiary)', display: 'block', marginTop: '4px' }}>
                    Métrica verificable en la tienda (descargas acumuladas aproximadas, no usuarios activos simultáneos).
                  </span>
                </div>
              </div>
              <p className="case-study__text" style={{ marginTop: 'var(--space-4)' }}>
                La planificación de transporte demostró que construir software de producto va mucho más allá
                de diseñar una pantalla atractiva: requiere modelado riguroso de grafos de datos, optimización de consultas
                geográficas y robustez en la integración entre el cliente móvil y el motor de ruteo.
              </p>
            </div>
          </div>

          {/* Columna lateral técnica */}
          <aside className="case-study__aside">
            {/* Ficha técnica del producto */}
            <div className="case-study__sidebar-block">
              <p className="case-study__sidebar-label">Identificación</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <strong style={{ color: 'var(--color-text-primary)' }}>TeMiPu</strong>
                <span style={{ fontSize: '12px', color: 'var(--color-text-secondary)', fontFamily: 'var(--font-mono)' }}>
                  Transporte público paceño
                </span>
              </div>
            </div>

            {/* Tecnologías */}
            <div className="case-study__sidebar-block">
              <p className="case-study__sidebar-label">Tecnologías aplicadas</p>
              <div className="case-study__tech">
                {(temipú.technologies || []).map((t) => (
                  <span key={t} className="tech-tag tech-tag--primary">{t}</span>
                ))}
              </div>
            </div>

            {/* Estado */}
            <div className="case-study__sidebar-block">
              <p className="case-study__sidebar-label">Estado de publicación</p>
              <span className="badge badge--published">{temipú.statusLabel}</span>
            </div>

            {/* Enlace al caso de estudio completo */}
            {temipú.caseStudyRoute && (
              <Button
                href={temipú.caseStudyRoute}
                variant="outline"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Ver documentación completa <ArrowRight size={14} />
              </Button>
            )}
          </aside>
        </div>

        {/* Modal de ampliación accesible para TeMiPu */}
        <ImageModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          items={temipú.screenshots || []}
          currentIndex={selectedScreenIdx}
          onIndexChange={setSelectedScreenIdx}
        />
      </Container>
    </section>
  );
};

export default FeaturedCaseStudy;
