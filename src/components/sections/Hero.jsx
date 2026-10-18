import React from 'react';
import { ArrowUpRight, ArrowDown, Sparkles } from 'lucide-react';
import Button from '../ui/Button.jsx';
import Container from '../layout/Container.jsx';
import SpockyLogo from '../ui/SpockyLogo.jsx';
import { WhatsAppIcon, TikTokIcon, FiverrIcon, LinkedInIcon } from '../ui/SocialIcons.jsx';
import { profile } from '../../data/profile.js';

const Hero = () => {
  return (
    <section id="inicio" className="hero" aria-label="Presentación profesional de Fernando Muñoz Aranda">
      <Container>
        {/* Rejilla principal asimétrica */}
        <div className="hero__grid">
          {/* Columna narrativa: Titular profesional continuo, propuesta de valor y CTAs */}
          <div className="hero__narrative">
            <h1 className="hero__heading">
              Ingeniería que se convierte en{' '}
              <span className="hero__heading-accent">productos digitales.</span>
            </h1>

            <p className="hero__description">{profile.description}</p>

            {/* CTAs principales: Explorar proyectos (sólido sin degradado) y WhatsApp (vidrio líquido) */}
            <div className="hero__actions">
              <Button
                variant="brand"
                size="lg"
                href="#proyectos"
                className="hero__btn-projects btn--solid-white"
              >
                Explorar proyectos <ArrowUpRight size={18} aria-hidden="true" />
              </Button>

              <a
                href={profile.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--secondary btn--lg hero__btn-whatsapp"
                aria-label="Contactar por WhatsApp a Fernando Muñoz Aranda"
              >
                <WhatsAppIcon size={18} className="hero__whatsapp-icon" aria-hidden="true" />
                Contactar por WhatsApp
              </a>
            </div>

            {/* Redes y canales profesionales llamativos y destacados */}
            <div className="hero__channels" aria-label="Redes y canales profesionales">
              <span className="hero__channels-label">Conecta directamente en mis redes y canales:</span>
              <div className="hero__channels-row">
                <a
                  href={profile.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero__social-pill hero__social-pill--whatsapp"
                  aria-label="Contactar por WhatsApp directo"
                  title="WhatsApp directo: +591 71763465"
                >
                  <WhatsAppIcon size={16} />
                  <span>WhatsApp</span>
                </a>

                <a
                  href="https://es.fiverr.com/s/GPPGeA2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero__social-pill hero__social-pill--fiverr"
                  aria-label="Contratar servicios en Fiverr"
                  title="Fiverr - Servicios freelance garantizados"
                >
                  <FiverrIcon size={16} />
                  <span>Fiverr</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/fernando-mu%C3%B1oz-aranda-836330444"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero__social-pill hero__social-pill--linkedin"
                  aria-label="Ver perfil de LinkedIn"
                  title="LinkedIn - Fernando Muñoz Aranda"
                >
                  <LinkedInIcon size={15} />
                  <span>LinkedIn</span>
                </a>

                <a
                  href="https://www.tiktok.com/@spockydev?is_from_webapp=1&sender_device=pc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero__social-pill hero__social-pill--tiktok"
                  aria-label="Ver canal de TikTok @spockydev"
                  title="TikTok - @spockydev (Mira mi trabajo en video)"
                >
                  <TikTokIcon size={15} />
                  <span>TikTok</span>
                </a>
              </div>
            </div>

            {/* Métricas verificadas en la primera pantalla con destaque para TeMiPu */}
            <div className="hero__metrics-grid" role="region" aria-label="Métricas comprobables">
              {profile.metrics.map((m) => (
                <div
                  key={m.label}
                  className={`hero__metric-cell ${m.featured ? 'hero__metric-cell--featured' : ''}`}
                >
                  {m.featured && (
                    <div className="hero__metric-highlight-glow" aria-hidden="true" />
                  )}
                  <div className="hero__metric-number-wrap">
                    <span className="hero__metric-number">{m.value}</span>
                    {m.featured && (
                      <span className="hero__metric-badge">TOP IMPACTO</span>
                    )}
                  </div>
                  <div className="hero__metric-title">{m.label}</div>
                  <div className="hero__metric-caption">{m.caption}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Columna derecha: Escenario de marca Spocky en vidrio líquido de alta transparencia */}
          <div className="hero__showcase">
            <div className="hero-spocky-stage" aria-label="Marca e identidad de Spocky">
              {/* Resplandor ambiental de fondo sutil */}
              <div className="hero-spocky-stage__glow" aria-hidden="true" />

              {/* Insignia central oficial de Spocky calibrada y elegante */}
              <div className="hero-spocky-stage__emblem-wrap">
                <SpockyLogo height={80} className="hero-spocky-stage__logo" />
              </div>

              {/* Identidad de la empresa y propietario */}
              <div className="hero-spocky-stage__brand-info">
                <span className="hero-spocky-stage__tag">EMPRESA DE DESARROLLO DE SOFTWARE</span>
                <h2 className="hero-spocky-stage__owner-title">
                  Fundador y Propietario: Fernando Muñoz Aranda
                </h2>
                <p className="hero-spocky-stage__tagline">
                  Spocky es mi empresa especializada en desarrollo de software de alta calidad, ingeniería de sistemas y arquitectura de productos digitales.
                </p>
              </div>

              {/* Escalabilidad y equipo integrado de forma natural sin card anidada */}
              <div className="hero-spocky-stage__team-flow">
                <div className="hero-spocky-stage__team-badge">
                  <span className="hero-spocky-stage__team-dot" aria-hidden="true" />
                  <span>SIN LÍMITES DE ESCALA</span>
                </div>
                <p className="hero-spocky-stage__team-text">
                  <strong>¿Proyecto grande o entrega urgente?</strong> No estoy limitado: cuento con mi <strong>equipo completo de desarrollo de software</strong> listo para integrarse, acelerar y cumplir cualquier requerimiento de alta demanda.
                </p>
              </div>

              {/* Stack tecnológico con presencia visual destacada */}
              <div className="hero-spocky-stage__stack-section">
                <span className="hero-spocky-stage__stack-title">Tecnologías &amp; Dominio Técnico:</span>
                <div className="hero-spocky-stage__stack-row">
                  <span className="hero-spocky-stage__chip hero-spocky-stage__chip--flutter">Flutter</span>
                  <span className="hero-spocky-stage__chip hero-spocky-stage__chip--react">React / Next.js</span>
                  <span className="hero-spocky-stage__chip hero-spocky-stage__chip--python">Python</span>
                  <span className="hero-spocky-stage__chip hero-spocky-stage__chip--docker">Docker</span>
                  <span className="hero-spocky-stage__chip hero-spocky-stage__chip--postgres">PostgreSQL</span>
                  <span className="hero-spocky-stage__chip hero-spocky-stage__chip--dotnet">C# / .NET</span>
                  <span className="hero-spocky-stage__chip hero-spocky-stage__chip--ts">TypeScript</span>
                  <span className="hero-spocky-stage__chip hero-spocky-stage__chip--ux">UX/UI &amp; Figma</span>
                </div>
              </div>

              {/* Pie del stage */}
              <div className="hero-spocky-stage__footer">
                <span className="hero-spocky-stage__location">Cochabamba, Bolivia</span>
                <a href="#proyectos" className="hero-spocky-stage__link">
                  Ver proyectos <ArrowUpRight size={14} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Barra inferior de pie editorial */}
        <div className="hero__footer-bar" aria-label="Metadatos de pie de portada">
          <div className="hero__footer-disciplines">
            <span>SOFTWARE ENGINEERING</span>
            <span className="hero__footer-slash">/</span>
            <span>DIGITAL PRODUCT</span>
            <span className="hero__footer-slash">/</span>
            <span>DATA ARCHITECTURE</span>
          </div>

          <a href="#proyectos" className="hero__scroll-control" aria-label="Desplazarse a la sección de proyectos">
            <ArrowDown size={14} className="hero__scroll-icon" aria-hidden="true" />
            <span>EXPLORAR TRABAJO</span>
          </a>

          <div className="hero__footer-location">
            <span>COCHABAMBA, BOLIVIA · SPOCKY STUDIO</span>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
