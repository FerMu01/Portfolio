import React from 'react';
import { MessageCircle, X } from 'lucide-react';
import SpockyLogo from '../ui/SpockyLogo.jsx';

/**
 * MobileMenu — menú de navegación móvil con overlay y acción directa a WhatsApp.
 */
const MobileMenu = ({ id, isOpen, onClose, navLinks = [], whatsappUrl }) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="mobile-menu-overlay mobile-menu-overlay--visible"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        id={id}
        className="mobile-menu mobile-menu--open"
        role="dialog"
        aria-modal="true"
        aria-label="Menú de navegación"
      >
        <div className="mobile-menu__header">
          <div className="mobile-menu__brand">
            <SpockyLogo height={20} className="mobile-menu__logo-svg" />
            <span className="mobile-menu__title">/ NAVEGACIÓN</span>
          </div>
          <button
            className="mobile-menu__close"
            onClick={onClose}
            aria-label="Cerrar menú"
          >
            <X size={20} />
          </button>
        </div>

        <nav aria-label="Menú móvil">
          <ul role="list" className="mobile-menu__list">
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="mobile-menu__link"
                  onClick={onClose}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* WhatsApp directo en footer */}
        <div className="mobile-menu__footer">
          {whatsappUrl && (
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--brand"
              style={{ width: '100%', justifyContent: 'center' }}
              onClick={onClose}
            >
              <MessageCircle size={16} aria-hidden="true" />
              Contactar por WhatsApp
            </a>
          )}
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
