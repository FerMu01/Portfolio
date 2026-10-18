import React, { useEffect, useCallback, useRef } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * ImageModal — Visor accesible de capturas en alta resolución.
 *
 * Características:
 * - Cierre con tecla Escape o clic fuera
 * - Navegación con flechas izquierda / derecha en teclado
 * - Soporte de gestos táctiles swipe en móviles
 * - Preservación estricta de proporciones originales
 * - Título y pie explicativo del proyecto
 * - Restauración garantizada del scroll del body
 */
const ImageModal = ({
  isOpen,
  onClose,
  items = [],
  currentIndex = 0,
  onIndexChange,
}) => {
  const currentItem = items[currentIndex] || null;
  const touchStartXRef = useRef(null);

  const handleKeyDown = useCallback(
    (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft' && items.length > 1) {
        if (onIndexChange) {
          onIndexChange((currentIndex - 1 + items.length) % items.length);
        }
      } else if (e.key === 'ArrowRight' && items.length > 1) {
        if (onIndexChange) {
          onIndexChange((currentIndex + 1) % items.length);
        }
      }
    },
    [isOpen, onClose, items, currentIndex, onIndexChange]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  const handleTouchStart = (e) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartXRef.current === null || items.length <= 1) return;
    const diffX = e.changedTouches[0].clientX - touchStartXRef.current;
    if (Math.abs(diffX) > 40) {
      if (diffX > 0) {
        // Swipe derecha -> anterior
        if (onIndexChange) {
          onIndexChange((currentIndex - 1 + items.length) % items.length);
        }
      } else {
        // Swipe izquierda -> siguiente
        if (onIndexChange) {
          onIndexChange((currentIndex + 1) % items.length);
        }
      }
    }
    touchStartXRef.current = null;
  };

  if (!isOpen || !currentItem) return null;

  const hasMultiple = items.length > 1;

  return (
    <div
      className="image-modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-label={currentItem.title || 'Visor de captura'}
      onClick={onClose}
    >
      <div
        className="image-modal-container"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Barra superior con metadatos y botón de cerrar */}
        <div className="image-modal-header">
          <div className="image-modal-meta">
            <span className="image-modal-tag">CAPTURA REAL</span>
            {hasMultiple && (
              <span className="image-modal-counter">
                {currentIndex + 1} / {items.length}
              </span>
            )}
            <h3 className="image-modal-title">{currentItem.title || 'Captura de pantalla'}</h3>
          </div>

          <button
            type="button"
            className="image-modal-close"
            onClick={onClose}
            aria-label="Cerrar visor de imagen (Escape)"
          >
            <X size={20} />
          </button>
        </div>

        {/* Zona central de la imagen con proporciones nativas */}
        <div className="image-modal-stage">
          {hasMultiple && (
            <button
              type="button"
              className="image-modal-nav image-modal-nav--prev"
              onClick={() => {
                if (onIndexChange) {
                  onIndexChange((currentIndex - 1 + items.length) % items.length);
                }
              }}
              aria-label="Captura anterior (Flecha izquierda)"
            >
              <ChevronLeft size={24} />
            </button>
          )}

          <div className="image-modal-img-wrap">
            <img
              src={currentItem.src}
              alt={currentItem.alt || currentItem.title || 'Captura del proyecto'}
              className="image-modal-img"
            />
          </div>

          {hasMultiple && (
            <button
              type="button"
              className="image-modal-nav image-modal-nav--next"
              onClick={() => {
                if (onIndexChange) {
                  onIndexChange((currentIndex + 1) % items.length);
                }
              }}
              aria-label="Captura siguiente (Flecha derecha)"
            >
              <ChevronRight size={24} />
            </button>
          )}
        </div>

        {/* Pie con explicación de la interfaz */}
        {currentItem.caption && (
          <div className="image-modal-caption">
            <p>{currentItem.caption}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageModal;
