import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  ArrowLeft, ArrowRight, ExternalLink, GitBranch, Maximize2, Server, Database, Code2,
} from 'lucide-react';
import Container from '../layout/Container.jsx';
import Button from '../ui/Button.jsx';
import ImageModal from '../ui/ImageModal.jsx';
import { getProjectById, projects } from '../../data/projects.js';

/**
 * CaseStudyPage — Plantilla detallada de caso de estudio.
 * Utiliza banner destacado (menu1.png para TeMiPu), métricas de impacto real
 * y desglose de habilidades clave (Docker, scripts GTFS y motor de búsqueda propio).
 */
const CaseStudyPage = () => {
  const { projectId } = useParams();
  const project = getProjectById(projectId);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedScreenIdx, setSelectedScreenIdx] = useState(0);

  // Proyectos con caseStudyRoute para navegación anterior/siguiente
  const caseStudies = projects.filter((p) => p.caseStudyRoute);
  const currentIndex = caseStudies.findIndex((p) => p.id === projectId);
  const prevProject = currentIndex > 0 ? caseStudies[currentIndex - 1] : null;
  const nextProject = currentIndex < caseStudies.length - 1 ? caseStudies[currentIndex + 1] : null;

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  const coverImage = project.bannerImage || project.image;

  return (
    <div className="case-study-page">
      {/* Breadcrumb */}
      <div className="case-study-page__breadcrumb">
        <Container>
          <Link to="/#proyectos" className="link-arrow">
            <ArrowLeft size={14} />
            Volver a proyectos destacados
          </Link>
        </Container>
      </div>

      {/* Hero del caso de estudio */}
      <header className="case-study-page__hero">
        <Container>
          <div className="case-study-page__hero-grid">
            <div className="case-study-page__hero-content">
              <div className="case-study-page__meta">
                <span className={`badge badge--${project.status}`}>
                  {project.statusLabel || project.status}
                </span>
                <span className="case-study-page__category">
                  {project.category?.toUpperCase() || 'CASO DE ESTUDIO'}
                </span>
              </div>
              <h1 className="case-study-page__title">{project.name}</h1>
              {project.subtitle && (
                <p className="case-study-page__subtitle">{project.subtitle}</p>
              )}
              <p className="case-study-page__description">{project.description}</p>

              {/* Tecnologías destacando las principales con color amarillo */}
              <div className="case-study-page__tech">
                {(project.technologies || []).map((tech) => {
                  const isFeatured = (project.featuredTech && project.featuredTech.includes(tech)) ||
                    ['Flutter', 'OpenTripPlanner', 'Docker', 'GTFS', 'Python'].includes(tech);
                  return (
                    <span
                      key={tech}
                      className={`tech-tag ${isFeatured ? 'tech-tag--sandia' : 'tech-tag--primary'}`}
                    >
                      {tech}
                    </span>
                  );
                })}
              </div>

              {/* Acciones */}
              <div className="case-study-page__actions">
                {project.externalUrl && (
                  <Button href={project.externalUrl} variant="primary" external>
                    <ExternalLink size={14} />
                    Ver proyecto en producción
                  </Button>
                )}
                {project.repoUrl && (
                  <Button href={project.repoUrl} variant="secondary" external>
                    <GitBranch size={14} />
                    Repositorio
                  </Button>
                )}
              </div>
            </div>

            {/* Logo e ícono compuesto oficial en el lado derecho (sin card exterior) */}
            {project.id === 'temipú' && (
              <div className="case-study-page__hero-emblem-wrap">
                <img
                  src="/images/projects/Temipu/logoCompuesto.png"
                  alt="TeMiPu - Identidad oficial y logo de la aplicación"
                  className="case-study-page__emblem-img"
                />
              </div>
            )}
          </div>
        </Container>
      </header>

      {/* Cuerpo del caso de estudio (Sin el banner innecesario para optimizar espacio vertical) */}
      <Container narrow className="case-study-page__body">
        {/* Métricas destacadas en una sola línea compacta */}
        {project.metrics && project.metrics.length > 0 && (
          <section className="case-study-page__section">
            <h2 className="case-study-page__section-title">Impacto comprobable</h2>
            <div className="case-study-page__metrics case-study-page__metrics--single-row">
              {project.metrics.map(({ label, value, caption }) => (
                <div key={label} className="metric-card metric-card--compact">
                  <p className="metric-card__value">{value}</p>
                  <p className="metric-card__label">{label}</p>
                  {caption && <p className="metric-card__caption">{caption}</p>}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Capturas de pantalla reales en alta resolución situadas directamente tras Impacto Comprobable */}
        {project.screenshots && project.screenshots.length > 0 && (
          <section className="case-study-page__section case-study-page__section--gallery">
            <h2 className="case-study-page__section-title">Capturas de pantalla del producto en producción</h2>
            <p className="case-study-page__text" style={{ marginBottom: 'var(--space-6)' }}>
              Vistas reales de la interfaz en producción. Selecciona cualquier captura para examinarla en alta resolución con detalle técnico:
            </p>
            <div className="case-study-device-showcase-grid">
              {project.screenshots.map((screen, idx) => (
                <div
                  key={screen.src}
                  className="case-study-device-card"
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
                  <div className="case-study-device-frame">
                    <div className="case-study-device-notch" aria-hidden="true" />
                    <div className="case-study-device-screen">
                      <img
                        src={screen.src}
                        alt={screen.alt}
                        className="case-study-device-img"
                        loading="lazy"
                      />
                      <div className="case-study-device-zoom-overlay">
                        <Maximize2 size={18} aria-hidden="true" />
                        <span>Ver en alta resolución</span>
                      </div>
                    </div>
                  </div>

                  <div className="case-study-device-meta">
                    <div className="case-study-device-badge">
                      <span>VISTA {idx + 1} DE {project.screenshots.length}</span>
                    </div>
                    <strong className="case-study-device-title">{screen.title}</strong>
                    {screen.caption && (
                      <p className="case-study-device-caption">{screen.caption}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Pilares técnicos específicos para TeMiPu si aplica */}
        {project.id === 'temipú' && (
          <section className="case-study-page__section">
            <h2 className="case-study-page__section-title">Infraestructura y capacidades avanzadas</h2>
            <div className="case-study-pillars-grid">
              <div className="case-study-pillar">
                <div className="case-study-pillar__icon"><Server size={18} /></div>
                <h3>Docker &amp; Orquestación OTP</h3>
                <p>Configuración, compilación del grafo vial y despliegue del servidor OpenTripPlanner (OTP) en contenedores Docker para cálculo de itinerarios en tiempo real.</p>
              </div>
              <div className="case-study-pillar">
                <div className="case-study-pillar__icon"><Database size={18} /></div>
                <h3>Buscador propio &amp; Base de Datos</h3>
                <p>Motor de búsqueda de lugares y restaurantes creado íntegramente a medida, con base de datos relacional independiente alojada en servidor propio.</p>
              </div>
              <div className="case-study-pillar">
                <div className="case-study-pillar__icon"><Code2 size={18} /></div>
                <h3>Generación GTFS con Python</h3>
                <p>Desarrollo de scripts propios en Python para digitalización, depuración y empaquetado de feeds GTFS a partir de datos de transporte urbano no estructurados.</p>
              </div>
            </div>
          </section>
        )}

        {/* Secciones configurables */}
        {[
          { key: 'problem',          label: 'Contexto y problema resuelto' },
          { key: 'myContribution',   label: 'Mi contribución técnica' },
          { key: 'highlights',       label: 'Aspectos técnicos destacados' },
          { key: 'architecture',     label: 'Arquitectura técnica' },
        ].map(({ key, label }) => {
          const value = project[key];
          if (!value) return null;
          return (
            <section key={key} className="case-study-page__section">
              <h2 className="case-study-page__section-title">{label}</h2>
              {key === 'highlights' && Array.isArray(value) ? (
                /* Aspectos técnicos destacados con diseño visual llamativo */
                <div className="case-study-highlights-grid">
                  {value.map((item, i) => (
                    <div key={i} className="case-study-highlight-card">
                      <div className="case-study-highlight-card__bullet" aria-hidden="true" />
                      <p className="case-study-highlight-card__text">{item}</p>
                    </div>
                  ))}
                </div>
              ) : Array.isArray(value) ? (
                <ul className="case-study__list">
                  {value.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              ) : (
                <p className="case-study-page__text">{value}</p>
              )}
            </section>
          );
        })}
      </Container>

      {/* Navegación anterior / siguiente solo si existen proyectos */}
      {(prevProject || nextProject) && (
        <nav className="case-study-page__nav" aria-label="Proyectos anteriores y siguientes">
          <Container>
            <div className="case-study-page__nav-inner">
              {prevProject && (
                <Link to={prevProject.caseStudyRoute} className="case-study-page__nav-link case-study-page__nav-link--prev">
                  <ArrowLeft size={16} />
                  <div>
                    <span className="case-study-page__nav-dir">Anterior</span>
                    <span className="case-study-page__nav-name">{prevProject.name}</span>
                  </div>
                </Link>
              )}

              {nextProject && (
                <Link to={nextProject.caseStudyRoute} className="case-study-page__nav-link case-study-page__nav-link--next">
                  <div>
                    <span className="case-study-page__nav-dir">Siguiente</span>
                    <span className="case-study-page__nav-name">{nextProject.name}</span>
                  </div>
                  <ArrowRight size={16} />
                </Link>
              )}
            </div>
          </Container>
        </nav>
      )}

      {/* Modal de visualización accesible */}
      {project.screenshots && project.screenshots.length > 0 && (
        <ImageModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          items={project.screenshots}
          currentIndex={selectedScreenIdx}
          onIndexChange={setSelectedScreenIdx}
        />
      )}
    </div>
  );
};

export default CaseStudyPage;
