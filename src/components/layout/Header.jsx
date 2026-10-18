import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Container from './Container.jsx';
import MobileMenu from '../navigation/MobileMenu.jsx';
import SpockyLogo from '../ui/SpockyLogo.jsx';
import { WhatsAppIcon } from '../ui/SocialIcons.jsx';
import { profile } from '../../data/profile.js';

const navLinks = [
  { label: 'Inicio',         href: '/#inicio',          id: 'inicio' },
  { label: 'Áreas',          href: '/#especialidades',  id: 'especialidades' },
  { label: 'Proyectos',      href: '/#proyectos',       id: 'proyectos' },
  { label: 'Diseño UX/UI',   href: '/#diseno-ux-ui',    id: 'diseno-ux-ui' },
  { label: 'Sobre mí',       href: '/#sobre-mi',        id: 'sobre-mi' },
  { label: 'Contacto',       href: '/#contacto',        id: 'contacto' },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      // Solo calcular sección activa si estamos en la página principal
      if (window.location.pathname === '/' || window.location.pathname === '') {
        const sections = navLinks.map((l) => document.getElementById(l.id)).filter(Boolean);
        const scrollPosition = window.scrollY + 160;

        for (let i = sections.length - 1; i >= 0; i--) {
          const section = sections[i];
          if (section.offsetTop <= scrollPosition) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [location]);

  // Cerrar menú móvil con Escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  // Bloquear scroll del body cuando el menú está abierto
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`site-header${scrolled ? ' site-header--scrolled' : ''}`}
        role="banner"
      >
        <Container className="site-header__inner">
          {/* Logo oficial SVG de Spocky */}
          <Link to="/" className="site-header__logo" aria-label="Inicio del portfolio Spocky de Fernando Muñoz Aranda">
            <SpockyLogo height={24} className="site-header__logo-svg" />
            <span className="site-header__logo-sep" aria-hidden="true">/</span>
            <span className="site-header__logo-name">
              {profile.name}
            </span>
          </Link>

          {/* Navegación desktop con indicador de sección activa */}
          <nav className="site-header__nav" aria-label="Navegación principal">
            <ul role="list">
              {navLinks.map(({ label, href, id }) => {
                const isActive = activeSection === id;
                return (
                  <li key={href}>
                    <a
                      href={href}
                      className={`site-header__nav-link ${isActive ? 'site-header__nav-link--active' : ''}`}
                      aria-current={isActive ? 'true' : undefined}
                    >
                      {label}
                      {isActive && <span className="site-header__nav-indicator" aria-hidden="true" />}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Acciones directas: WhatsApp verificado */}
          <div className="site-header__actions">
            <a
              href={profile.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--secondary btn--sm site-header__whatsapp-btn"
              aria-label="Contactar por WhatsApp a Fernando Muñoz Aranda"
            >
              <WhatsAppIcon size={15} className="site-header__whatsapp-icon" aria-hidden="true" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Botón menú móvil */}
          <button
            className="site-header__mobile-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </Container>
      </header>

      {/* Menú móvil */}
      <MobileMenu
        id="mobile-menu"
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        navLinks={navLinks}
        whatsappUrl={profile.whatsapp.url}
        activeSection={activeSection}
      />
    </>
  );
};

export default Header;
