import React, { useState } from 'react';
import { ImageOff } from 'lucide-react';

/**
 * ProjectImage — imagen de proyecto con fallback y lazy loading.
 *
 * Props:
 *  - src: string | null
 *  - alt: string
 *  - className: string
 */
const ProjectImage = ({ src, alt, className = '' }) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  if (!src || error) {
    return (
      <div className={`project-card__image-placeholder ${className}`}>
        <ImageOff size={28} />
        <span>Imagen próximamente</span>
      </div>
    );
  }

  return (
    <div className={`project-card__image ${className}`} style={{ position: 'relative' }}>
      {!loaded && (
        <div
          className="img-loading"
          style={{ position: 'absolute', inset: 0 }}
          aria-hidden="true"
        />
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.3s' }}
      />
    </div>
  );
};

export default ProjectImage;
