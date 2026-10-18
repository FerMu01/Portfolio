import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, MapPin } from 'lucide-react';
import Container from './Container.jsx';
import SpockyLogo from '../ui/SpockyLogo.jsx';
import { profile } from '../../data/profile.js';

const navLinks = [
  { label: 'Inicio',         href: '/#inicio' },
  { label: 'Áreas de trabajo', href: '/#especialidades' },
  { label: 'Proyectos destacados', href: '/#proyectos' },
  { label: 'Diseño UX/UI',   href: '/#diseno-ux-ui' },
  { label: 'Sobre mí',       href: '/#sobre-mi' },
  { label: 'Contacto',       href: '/#contacto' },
];

const CURRENT_YEAR = 2026;

const Footer = () => {
  return (
    <footer className="site-footer" role="contentinfo">
      <Container>
        <div className="site-footer__grid">
          {/* Identidad de Spocky y Fernando */}
          <div className="site-footer__brand">
            <Link to="/" className="site-footer__logo" aria-label="Inicio del portfolio">
              <SpockyLogo height={24} className="site-footer__logo-svg" />
              <span className="site-footer__logo-name">
                / {profile.name}
              </span>
            </Link>
            <p className="site-footer__tagline">{profile.tagline}</p>
            <div className="site-footer__location">
              <MapPin size={13} className="site-footer__location-icon" aria-hidden="true" />
              <span>{profile.location} · Software &amp; Digital Product</span>
            </div>
          </div>

          {/* Navegación */}
          <nav aria-label="Navegación del pie de página">
            <p className="site-footer__col-title">Navegación</p>
            <ul role="list" className="site-footer__nav-list">
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <a href={href} className="site-footer__nav-link">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contacto directo verificado */}
          <div>
            <p className="site-footer__col-title">Contacto directo</p>
            <ul role="list" className="site-footer__social-list">
              <li>
                <a
                  href={profile.whatsapp.url}
                  className="site-footer__social-link site-footer__whatsapp-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Contactar por WhatsApp a Fernando Muñoz Aranda"
                >
                  <MessageCircle size={16} aria-hidden="true" />
                  <span>WhatsApp: {profile.whatsapp.number}</span>
                </a>
              </li>
              <li style={{ marginTop: 'var(--space-2)' }}>
                <span className="site-footer__status-text">
                  Cochabamba, Bolivia (UTC-4)
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="site-footer__bottom">
          <p className="site-footer__copy">
            &copy; {CURRENT_YEAR} SPOCKY · Fernando Muñoz Aranda. Todos los derechos reservados.
          </p>
          <p className="site-footer__credits">
            Desarrollado con React + Vite
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
