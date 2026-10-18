import React, { useState, useEffect } from 'react';
import { CheckCircle2, Maximize2, Monitor, Smartphone, ArrowRight } from 'lucide-react';
import Container from '../layout/Container.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';
import ImageModal from '../ui/ImageModal.jsx';
import { designProjects } from '../../data/designProjects.js';

const DesignPortfolio = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalItems, setModalItems] = useState([]);
  const [modalIndex, setModalIndex] = useState(0);

  // Estados de carrusel independiente por proyecto de diseño
  const [activeScreens, setActiveScreens] = useState({
    pluribus: 0,
    'intercity-seguros': 0,
  });

  // Auto-carrusel constante y fluido cada 4 segundos
  useEffect(() => {
    const intervals = designProjects.map((project) => {
      return setInterval(() => {
        if (project.screenshots && project.screenshots.length > 1) {
          setActiveScreens((prev) => ({
            ...prev,
            [project.id]: ((prev[project.id] || 0) + 1) % project.screenshots.length,
          }));
        }
      }, 4000);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  const openModal = (items, index = 0) => {
    setModalItems(items);
    setModalIndex(index);
    setModalOpen(true);
  };

  const setProjectScreen = (projectId, screenIdx) => {
    setActiveScreens((prev) => ({
      ...prev,
      [projectId]: screenIdx,
    }));
  };

  return (
    <section id="diseno-ux-ui" className="section section--alt" aria-label="Portafolio UX/UI y diseño de producto">
      <Container>
        <SectionHeading
          label="Diseño UX/UI &amp; Producto"
          title="Casos de estudio y evolución de interfaces"
          description="Diseño centrado en la usabilidad, arquitectura de información y coherencia visual para transformar sistemas complejos en experiencias intuitivas."
        />

        <div className="design-editorial-showcase">
          {designProjects.map((project) => {
            const currentIdx = activeScreens[project.id] || 0;
            const currentScreenshot = project.screenshots[currentIdx] || project.screenshots[0];
            const isMobile = currentScreenshot.aspect === 'mobile';

            return (
              <article
                key={project.id}
                className="design-study-block"
                aria-label={`Caso de estudio: ${project.name}`}
              >
                {/* Cabecera del caso de estudio */}
                <div className="design-study-block__header">
                  <div className="design-study-block__meta-tags">
                    <span className="design-study-block__category">DISEÑO DE PRODUCTO &amp; UX/UI</span>
                    <span className={`badge badge--${project.status.replace('_', '-')}`}>
                      {project.statusLabel}
                    </span>
                  </div>
                  <h3 className="design-study-block__title">{project.name}</h3>
                  <p className="design-study-block__subtitle">{project.subtitle}</p>
                </div>

                {/* Composición visual con capturas reales */}
                <div className="design-study-block__visual-grid">
                  {/* Visor con carrusel de capturas */}
                  <div className={`design-study-viewer design-study-viewer--${currentScreenshot.aspect}`}>
                    {isMobile ? (
                      /* Mockup de teléfono móvil para Pluribus */
                      <div className="project-mockup-mobile project-mockup-mobile--design">
                        <div
                          className="project-mockup-mobile__frame"
                          onClick={() => openModal(project.screenshots, currentIdx)}
                          role="button"
                          tabIndex={0}
                          onKeyDown={(e) => e.key === 'Enter' && openModal(project.screenshots, currentIdx)}
                          aria-label={`Ampliar captura: ${currentScreenshot.title}`}
                        >
                          <div className="project-mockup-mobile__notch" aria-hidden="true" />
                          <div className="project-mockup-mobile__screen">
                            <img
                              src={currentScreenshot.src}
                              alt={currentScreenshot.alt}
                              className="project-mockup-mobile__img"
                              loading="lazy"
                            />
                            <div className="project-mockup__zoom-overlay">
                              <Maximize2 size={16} />
                              <span>Ampliar captura</span>
                            </div>
                          </div>
                        </div>

                        {/* Metadatos de la pantalla móvil */}
                        <div className="project-mockup-mobile__details">
                          <div className="project-mockup-mobile__meta">
                            <div className="project-mockup-mobile__tag">
                              <Smartphone size={12} aria-hidden="true" />
                              <span>INTERFAZ MÓVIL EN DISEÑO</span>
                              <span className="project-mockup__counter-badge">
                                {currentIdx + 1} / {project.screenshots.length}
                              </span>
                            </div>
                            <h4 className="project-mockup-mobile__screen-title">
                              {currentScreenshot.title}
                            </h4>
                            <p className="project-mockup-mobile__screen-caption">
                              {currentScreenshot.caption}
                            </p>
                          </div>

                          {project.screenshots.length > 1 && (
                            <div className="project-mockup-carousel-controls" role="tablist" aria-label={`Pantallas de ${project.name}`}>
                              {project.screenshots.map((s, idx) => (
                                <button
                                  key={s.src}
                                  type="button"
                                  role="tab"
                                  aria-selected={currentIdx === idx}
                                  className={`project-mockup-indicator-dot ${currentIdx === idx ? 'project-mockup-indicator-dot--active' : ''}`}
                                  onClick={() => setProjectScreen(project.id, idx)}
                                  aria-label={`Ver imagen ${idx + 1}: ${s.title}`}
                                >
                                  <span className="sr-only">{s.title}</span>
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    ) : (
                      /* Mockup de navegador para Intercity Seguros (Sin los 3 puntos y adaptado para capturas altas) */
                      <div className={`project-mockup-desktop project-mockup-desktop--design ${currentScreenshot.aspect === 'tall-web' ? 'project-mockup-desktop--tall' : ''}`}>
                        <div className="project-mockup-desktop__window">
                          <div className="project-mockup-desktop__titlebar">
                            <div className="project-mockup-desktop__system-title">
                              <Monitor size={13} aria-hidden="true" />
                              <span>Intercity Tours — Rediseño Web Corporativo</span>
                            </div>
                            <div className="project-mockup-desktop__actions-hint">
                              <Maximize2 size={12} />
                              <span>Clic para ampliar captura</span>
                            </div>
                          </div>

                          <div
                            className={`project-mockup-desktop__screen ${currentScreenshot.aspect === 'tall-web' ? 'project-mockup-desktop__screen--tall' : ''}`}
                            onClick={() => openModal(project.screenshots, currentIdx)}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => e.key === 'Enter' && openModal(project.screenshots, currentIdx)}
                            aria-label="Clic para ampliar captura web"
                          >
                            <img
                              src={currentScreenshot.src}
                              alt={currentScreenshot.alt}
                              className={`project-mockup-desktop__img ${currentScreenshot.aspect === 'tall-web' ? 'project-mockup-desktop__img--tall' : ''}`}
                              loading="lazy"
                            />
                            <div className="project-mockup-desktop__hover-hint">
                              <Maximize2 size={16} />
                              <span>Clic para ver en tamaño completo</span>
                            </div>
                          </div>

                          <div className="project-mockup-desktop__footer">
                            <div className="project-mockup-desktop__info">
                              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <span className="project-mockup-desktop__label">
                                  {currentScreenshot.title}
                                </span>
                                <span className="project-mockup__counter-badge">
                                  {currentIdx + 1} / {project.screenshots.length}
                                </span>
                              </div>
                              <p className="project-mockup-desktop__caption">
                                {currentScreenshot.caption}
                              </p>
                            </div>

                            {project.screenshots.length > 1 && (
                              <div className="project-mockup-carousel-controls" role="tablist" aria-label={`Pantallas de ${project.name}`}>
                                {project.screenshots.map((s, idx) => (
                                  <button
                                    key={s.src}
                                    type="button"
                                    role="tab"
                                    aria-selected={currentIdx === idx}
                                    className={`project-mockup-indicator-dot ${currentIdx === idx ? 'project-mockup-indicator-dot--active' : ''}`}
                                    onClick={() => setProjectScreen(project.id, idx)}
                                    aria-label={`Ver imagen ${idx + 1}: ${s.title}`}
                                  >
                                    <span className="sr-only">{s.title}</span>
                                  </button>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Columna editorial: Contexto y Decisiones de diseño */}
                  <div className="design-study-block__editorial">
                    <div className="design-study-block__narrative">
                      <strong className="design-study-block__section-label">Contexto del proyecto</strong>
                      <p className="design-study-block__text">{project.context}</p>
                    </div>

                    <div className="design-study-block__decisions">
                      <strong className="design-study-block__section-label">Decisiones clave de UX/UI</strong>
                      <ul className="design-study-block__decisions-list" role="list">
                        {project.designDecisions.map((decision) => (
                          <li key={decision} className="design-study-block__decision-item">
                            <CheckCircle2 size={14} className="design-study-block__check-icon" aria-hidden="true" />
                            <span>{decision}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="design-study-block__tools-wrap">
                      <strong className="design-study-block__section-label">Herramientas aplicadas</strong>
                      <div className="design-study-block__tools">
                        {project.tools.map((t) => (
                          <span key={t} className="tech-tag tech-tag--primary">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Botón de enlace en vivo si el proyecto cuenta con URL externa */}
                    {project.externalUrl && (
                      <div className="design-study-block__actions">
                        <a
                          href={project.externalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn--brand btn--sm"
                          aria-label={`Visitar sitio web oficial de ${project.name}`}
                        >
                          <span>Visitar Intercity Seguros</span>
                          <ArrowRight size={14} aria-hidden="true" />
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Modal de visualización accesible */}
        <ImageModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          items={modalItems}
          currentIndex={modalIndex}
          onIndexChange={setModalIndex}
        />
      </Container>
    </section>
  );
};

export default DesignPortfolio;
