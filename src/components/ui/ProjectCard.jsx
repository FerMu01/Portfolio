import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ArrowUpRight, CheckCircle2, Maximize2, Smartphone, Monitor, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import ImageModal from './ImageModal.jsx';

const statusClass = {
  published: 'badge--published',
  'in-progress': 'badge--in-progress',
  archived: 'badge--archived',
  concept: 'badge--concept',
  paused: 'badge--paused',
};

/**
 * ProjectCard — Tarjeta glassmorphic unificada con carrusel automático de 4s,
 * mockups pulidos sin flechas invasivas, sin fake links y sin botón redundante.
 */
const ProjectCard = ({ project, compact = false }) => {
  const {
    id,
    name,
    subtitle,
    description,
    myContribution,
    technologies = [],
    metrics = [],
    highlights = [],
    screenshots = [],
    coverAspect = 'desktop',
    status,
    statusLabel,
    caseStudyRoute,
    externalUrl,
    flagship,
  } = project;

  const [activeScreenIndex, setActiveScreenIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(false);
  const touchStartXRef = useRef(null);

  const hasScreenshots = screenshots && screenshots.length > 0;
  const activeScreenshot = hasScreenshots ? screenshots[activeScreenIndex] : null;

  // Auto-slide constante y fluido cada 4 segundos
  useEffect(() => {
    if (!hasScreenshots || screenshots.length <= 1) return;

    const interval = setInterval(() => {
      setActiveScreenIndex((prev) => (prev + 1) % screenshots.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [hasScreenshots, screenshots?.length]);

  const handleTouchStart = (e) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartXRef.current === null || screenshots.length <= 1) return;
    const diffX = e.changedTouches[0].clientX - touchStartXRef.current;
    if (Math.abs(diffX) > 40) {
      if (diffX > 0) {
        setActiveScreenIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
      } else {
        setActiveScreenIndex((prev) => (prev + 1) % screenshots.length);
      }
    }
    touchStartXRef.current = null;
  };

  return (
    <article
      id={`proyecto-${id}`}
      className={`project-editorial-card ${flagship ? 'project-editorial-card--flagship' : ''} ${
        compact ? 'project-editorial-card--compact' : ''
      } ${hasScreenshots ? 'project-editorial-card--with-media' : ''}`}
      aria-label={`Proyecto ${name}`}
    >
      {/* Encabezado de la tarjeta */}
      <div className="project-editorial-card__header">
        <div className="project-editorial-card__title-group">
          <div className="project-editorial-card__meta-line">
            <span className="project-editorial-card__cat">
              {project.category?.toUpperCase() || 'SOFTWARE'}
            </span>
            {flagship && (
              <span className="badge badge--flagship">PROYECTO INSIGNIA</span>
            )}
            {status && (
              <span className={`badge ${statusClass[status] || 'badge--archived'}`}>
                {statusLabel || status}
              </span>
            )}
          </div>
          <h3 className="project-editorial-card__title">{name}</h3>
          {subtitle && <p className="project-editorial-card__subtitle">{subtitle}</p>}
        </div>
      </div>

      {/* Métricas destacadas en tipografía clara y sin fuentes monospaced estridentes */}
      {metrics && metrics.length > 0 && !compact && (
        <div className="project-editorial-card__metrics-bar">
          {metrics.map((m) => (
            <div key={m.label} className="project-editorial-card__metric-item">
              <span className="project-editorial-card__metric-val">{m.value}</span>
              <span className="project-editorial-card__metric-lbl">{m.label}</span>
            </div>
          ))}
        </div>
      )}

      {/* ── Composición visual con carrusel de capturas reales ── */}
      {hasScreenshots && !compact && (
        <div
          className={`project-visual-showcase project-visual-showcase--${coverAspect}`}
          aria-label={`Capturas reales de ${name}`}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {coverAspect === 'mobile' ? (
            /* Composición para aplicaciones móviles (TeMiPu, ADAN) */
            <div className="project-mockup-mobile">
              <div
                className="project-mockup-mobile__frame"
                onClick={() => setModalOpen(true)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setModalOpen(true)}
                aria-label={`Ampliar captura: ${activeScreenshot.title || name}`}
              >
                <div className="project-mockup-mobile__notch" aria-hidden="true" />
                <div className="project-mockup-mobile__screen">
                  <img
                    src={activeScreenshot.src}
                    alt={activeScreenshot.alt || `Captura de ${name}`}
                    className="project-mockup-mobile__img"
                    loading="lazy"
                  />
                  <div className="project-mockup__zoom-overlay">
                    <Maximize2 size={16} />
                    <span>Ver en alta resolución</span>
                  </div>
                </div>
              </div>

              {/* Selector de pantallas y descripción editorial */}
              <div className="project-mockup-mobile__details">
                <div className="project-mockup-mobile__meta">
                  <div className="project-mockup-mobile__tag">
                    <Smartphone size={12} aria-hidden="true" />
                    <span>INTERFAZ MÓVIL EN PRODUCCIÓN</span>
                    {screenshots.length > 1 && (
                      <span className="project-mockup__counter-badge">
                        {activeScreenIndex + 1} / {screenshots.length}
                      </span>
                    )}
                  </div>
                  <h4 className="project-mockup-mobile__screen-title">
                    {activeScreenshot.title}
                  </h4>
                  {activeScreenshot.caption && (
                    <p className="project-mockup-mobile__screen-caption">
                      {activeScreenshot.caption}
                    </p>
                  )}
                </div>

                {/* Controladores limpios de cambio de imagen sin interferir en la imagen */}
                {screenshots.length > 1 && (
                  <div className="project-mockup-carousel-controls" role="tablist" aria-label="Cambiar captura móvil">
                    {screenshots.map((s, idx) => (
                      <button
                        key={s.src}
                        type="button"
                        role="tab"
                        aria-selected={activeScreenIndex === idx}
                        className={`project-mockup-indicator-dot ${
                          activeScreenIndex === idx ? 'project-mockup-indicator-dot--active' : ''
                        }`}
                        onClick={() => setActiveScreenIndex(idx)}
                        aria-label={`Ver imagen ${idx + 1}: ${s.title}`}
                      >
                        <span className="sr-only">{s.title || `Vista ${idx + 1}`}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ) : (
            /* Composición para aplicaciones web de escritorio (Simulador, Gastronomía, Restaurante) */
            <div className="project-mockup-desktop">
              <div className="project-mockup-desktop__window">
                {/* Barra de ventana limpia estilo sistema operativo, sin los 3 puntos coloridos */}
                <div className="project-mockup-desktop__titlebar">
                  <div className="project-mockup-desktop__system-title">
                    <Monitor size={13} aria-hidden="true" />
                    <span>{name} — Interfaz de Sistema</span>
                  </div>
                  <div className="project-mockup-desktop__actions-hint">
                    <Maximize2 size={12} />
                    <span>Clic para ampliar</span>
                  </div>
                </div>

                {/* Lienzo de la imagen web */}
                <div
                  className="project-mockup-desktop__screen"
                  onClick={() => setModalOpen(true)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && setModalOpen(true)}
                  aria-label="Clic para ampliar captura web en alta resolución"
                >
                  <img
                    src={activeScreenshot.src}
                    alt={activeScreenshot.alt || `Captura web de ${name}`}
                    className="project-mockup-desktop__img"
                    loading="lazy"
                  />
                  <div className="project-mockup-desktop__hover-hint">
                    <Maximize2 size={16} />
                    <span>Clic para ver en tamaño completo</span>
                  </div>
                </div>

                {/* Pie explicativo con indicadores sutiles de carrusel */}
                <div className="project-mockup-desktop__footer">
                  <div className="project-mockup-desktop__info">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span className="project-mockup-desktop__label">
                        {activeScreenshot.title}
                      </span>
                      {screenshots.length > 1 && (
                        <span className="project-mockup__counter-badge">
                          {activeScreenIndex + 1} / {screenshots.length}
                        </span>
                      )}
                    </div>
                    <p className="project-mockup-desktop__caption">
                      {activeScreenshot.caption}
                    </p>
                  </div>

                  {screenshots.length > 1 && (
                    <div className="project-mockup-carousel-controls" role="tablist" aria-label={`Pantallas de ${name}`}>
                      {screenshots.map((s, idx) => (
                        <button
                          key={s.src}
                          type="button"
                          role="tab"
                          aria-selected={activeScreenIndex === idx}
                          className={`project-mockup-indicator-dot ${
                            activeScreenIndex === idx ? 'project-mockup-indicator-dot--active' : ''
                          }`}
                          onClick={() => setActiveScreenIndex(idx)}
                          aria-label={`Ver imagen ${idx + 1}: ${s.title}`}
                        >
                          <span className="sr-only">{s.title || `Vista ${idx + 1}`}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Descripción principal */}
      <p className="project-editorial-card__description">{description}</p>

      {/* Botón interactivo para colapsar/expandir detalles técnicos en móvil */}
      {!compact && (
        <button
          type="button"
          className="project-editorial-card__mobile-toggle"
          onClick={() => setMobileExpanded(!mobileExpanded)}
          aria-expanded={mobileExpanded}
        >
          <span>{mobileExpanded ? 'Ocultar detalles técnicos' : 'Ver contribución y tecnologías'}</span>
          <ChevronDown
            size={16}
            className={`project-editorial-card__toggle-icon ${mobileExpanded ? 'project-editorial-card__toggle-icon--open' : ''}`}
            aria-hidden="true"
          />
        </button>
      )}

      {/* Contenido técnico expandible (colapsable en móvil, siempre visible en escritorio) */}
      <div className={`project-editorial-card__expandable ${mobileExpanded ? 'project-editorial-card__expandable--expanded' : ''}`}>
        {/* Contribución individual */}
        {!compact && myContribution && (
          <div className="project-editorial-card__contribution">
            <span className="project-editorial-card__contrib-label">Contribución técnica destacada:</span>
            <p className="project-editorial-card__contrib-text">{myContribution}</p>
          </div>
        )}

        {/* Highlights técnicos */}
        {!compact && highlights && highlights.length > 0 && (
          <ul className="project-editorial-card__highlights-list" role="list">
            {highlights.slice(0, 4).map((h) => (
              <li key={h} className="project-editorial-card__highlight-item">
                <CheckCircle2 size={13} className="project-editorial-card__highlight-icon" aria-hidden="true" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Tecnologías realmente utilizadas con destaque amarillo para las principales */}
        <div className="project-editorial-card__tech">
          {technologies.slice(0, compact ? 4 : 8).map((tech) => {
            const isFeatured =
              (project.featuredTech && project.featuredTech.includes(tech)) ||
              ['Flutter', 'OpenTripPlanner', 'Docker', 'Python', 'Cloudflare Pages', 'ASP.NET', 'SQL Server'].includes(tech);
            return (
              <span
                key={tech}
                className={`tech-tag ${isFeatured ? 'tech-tag--sandia' : ''}`}
              >
                {tech}
              </span>
            );
          })}
          {technologies.length > (compact ? 4 : 8) && (
            <span className="tech-tag tech-tag--more">
              +{technologies.length - (compact ? 4 : 8)}
            </span>
          )}
        </div>
      </div>

      {/* Acciones directas y limpias */}
      <div className="project-editorial-card__actions">
        {caseStudyRoute && (
          <Link to={caseStudyRoute} className="btn btn--brand btn--sm">
            Ver caso de estudio <ArrowRight size={14} aria-hidden="true" />
          </Link>
        )}

        {externalUrl && (
          <a
            href={externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--secondary btn--sm"
            aria-label={`Abrir ${name} en producción`}
          >
            Abrir aplicación <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        )}
      </div>

      {/* Modal de ampliación accesible en alta resolución */}
      {hasScreenshots && (
        <ImageModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          items={screenshots}
          currentIndex={activeScreenIndex}
          onIndexChange={setActiveScreenIndex}
        />
      )}
    </article>
  );
};

export default ProjectCard;
