import React from 'react';

/**
 * SectionHeading — encabezado reutilizable para secciones.
 *
 * Props:
 *  - label: string — etiqueta monoespaciada superior (ej. "Proyectos")
 *  - title: string | ReactNode — título principal
 *  - description: string — texto descriptivo opcional
 *  - centered: boolean — alineación centrada
 *  - className: string
 */
const SectionHeading = ({
  label,
  title,
  description,
  centered = false,
  className = '',
}) => {
  return (
    <div
      className={[
        'section-heading',
        centered ? 'section-heading--centered' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {label && (
        <span className="section-heading__label" aria-hidden="true">
          {label}
        </span>
      )}
      <h2 className="section-heading__title">{title}</h2>
      {description && (
        <p className="section-heading__description">{description}</p>
      )}
    </div>
  );
};

export default SectionHeading;
