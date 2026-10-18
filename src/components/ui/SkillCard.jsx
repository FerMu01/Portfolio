import React, { useState } from 'react';
import { Smartphone, Globe, Layers, Check, Award, ChevronDown } from 'lucide-react';

const iconMap = {
  Smartphone,
  Globe,
  Layers,
};

/**
 * SkillCard — Panel glassmorphic unificado de especialidad y capacidades técnicas.
 * Incluye comportamiento colapsable/expandible en móvil para evitar scroll excesivo.
 */
const SkillCard = ({ specialty }) => {
  const [expanded, setExpanded] = useState(false);
  const {
    icon,
    title,
    headline,
    description,
    evidence,
    capabilities = [],
    technologies = [],
  } = specialty;

  const IconComponent = iconMap[icon] || Globe;

  return (
    <article className="area-card" aria-label={`Especialidad: ${title}`}>
      {/* Header del área con badge elegante */}
      <div className="area-card__header">
        <div className="area-card__icon-badge" aria-hidden="true">
          <IconComponent size={22} strokeWidth={1.75} />
        </div>
        <div className="area-card__meta">
          <span className="area-card__type">ENFOQUE &amp; CAPACIDAD</span>
        </div>
      </div>

      {/* Título y propuesta */}
      <div className="area-card__titles">
        <h3 className="area-card__title">{title}</h3>
        <p className="area-card__headline">{headline}</p>
      </div>

      <p className="area-card__description">{description}</p>

      {/* Botón interactivo para colapsar/expandir en móvil */}
      <button
        type="button"
        className="area-card__mobile-toggle"
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
      >
        <span>{expanded ? 'Ocultar detalles' : 'Ver capacidades y experiencia'}</span>
        <ChevronDown
          size={16}
          className={`area-card__toggle-icon ${expanded ? 'area-card__toggle-icon--open' : ''}`}
          aria-hidden="true"
        />
      </button>

      {/* Contenido expandible (en móvil se oculta/muestra, en desktop siempre visible) */}
      <div className={`area-card__expandable ${expanded ? 'area-card__expandable--expanded' : ''}`}>
        {/* Evidencia integrada de manera fluida */}
        {evidence && (
          <div className="area-card__evidence-flow">
            <div className="area-card__evidence-icon" aria-hidden="true">
              <Award size={15} />
            </div>
            <div className="area-card__evidence-content">
              <div className="area-card__evidence-top">
                <span className="area-card__evidence-label">Evidencia comprobable:</span>
                <span className="area-card__evidence-metric">{evidence.metric}</span>
              </div>
              <p className="area-card__evidence-desc">
                <strong>{evidence.project}</strong> — {evidence.note}
              </p>
            </div>
          </div>
        )}

        {/* Lista de capacidades técnicas y operativas */}
        <div className="area-card__capabilities">
          <h4 className="area-card__section-label">Capacidades y experiencia aplicada</h4>
          <ul className="area-card__list" role="list">
            {capabilities.map((cap) => (
              <li key={cap} className="area-card__item">
                <span className="area-card__check" aria-hidden="true">
                  <Check size={13} strokeWidth={2.5} />
                </span>
                <span>{cap}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tecnologías con roles, destacando las más demandadas */}
        <div className="area-card__footer">
          <h4 className="area-card__section-label">Tecnologías &amp; Herramientas</h4>
          <div className="area-card__tech-wrap">
            {technologies.map((t) => (
              <span
                key={t.name}
                className={`area-card__tech-tag ${t.featured ? 'area-card__tech-tag--featured' : ''}`}
              >
                <span className="area-card__tech-name">{t.name}</span>
                {t.tag && <span className="area-card__tech-role">{t.tag}</span>}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

export default SkillCard;
