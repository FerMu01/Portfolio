import React from 'react';
import { MapPin, ArrowUpRight, Clock } from 'lucide-react';
import Container from '../layout/Container.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';
import { WhatsAppIcon, TikTokIcon, FiverrIcon, LinkedInIcon } from '../ui/SocialIcons.jsx';
import { profile } from '../../data/profile.js';

const Contact = () => {
  return (
    <section id="contacto" className="section" aria-label="Contacto profesional">
      <Container narrow>
        <SectionHeading
          label="Contacto & Redes"
          title="¿Hablamos sobre un proyecto?"
          description="Prefiero un canal de comunicación directo, transparente y ágil. Puedes escribirme por WhatsApp o explorar mi trabajo en mis diferentes canales."
          centered
        />

        {/* Panel principal de contacto y redes en vidrio líquido (sin cards anidadas) */}
        <div className="contact-hub-card">
          {/* Bloque principal WhatsApp Directo */}
          <div className="contact-hub-card__primary">
            <div className="contact-hub-card__primary-header">
              <div className="contact-hub-card__icon-wrap" aria-hidden="true">
                <WhatsAppIcon size={28} />
              </div>
              <div className="contact-hub-card__title-box">
                <span className="contact-hub-card__badge">CANAL PRINCIPAL RECOMENDADO</span>
                <h3 className="contact-hub-card__name">WhatsApp Directo</h3>
                <p className="contact-hub-card__phone">{profile.whatsapp.number}</p>
              </div>
            </div>

            <p className="contact-hub-card__desc">
              Inicia una conversación directa sobre tu producto digital, aplicación móvil, sistema web o gestión de datos.
            </p>

            <div className="contact-hub-card__meta">
              <span className="contact-hub-card__meta-item">
                <MapPin size={13} aria-hidden="true" />
                Cochabamba, Bolivia
              </span>
              <span className="contact-hub-card__meta-item">
                <Clock size={13} aria-hidden="true" />
                Zona horaria: Bolivia (UTC-4)
              </span>
            </div>

            <a
              href={profile.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--solid-brand contact-hub-card__btn-main"
              aria-label="Abrir conversación en WhatsApp"
            >
              <WhatsAppIcon size={18} />
              <span>Abrir conversación en WhatsApp</span>
              <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="contact-hub-card__divider" />

          {/* Todas las redes en el hub de contacto */}
          <div className="contact-hub-card__networks">
            <span className="contact-hub-card__networks-title">Canales profesionales y contenido:</span>

            <div className="contact-hub-card__grid">
              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@spockydev?is_from_webapp=1&sender_device=pc"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-network-row contact-network-row--tiktok"
                aria-label="Ver canal de TikTok @spockydev"
              >
                <div className="contact-network-row__lead">
                  <div className="contact-network-row__icon-pill contact-network-row__icon-pill--tiktok">
                    <TikTokIcon size={16} />
                  </div>
                  <div>
                    <strong className="contact-network-row__label">TikTok: @spockydev</strong>
                    <span className="contact-network-row__sub">Ve mi trabajo a través de video</span>
                  </div>
                </div>
                <ArrowUpRight size={15} className="contact-network-row__arrow" />
              </a>

              {/* Fiverr */}
              <a
                href="https://es.fiverr.com/s/GPPGeA2"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-network-row"
                aria-label="Contratar servicios en Fiverr"
              >
                <div className="contact-network-row__lead">
                  <div className="contact-network-row__icon-pill">
                    <FiverrIcon size={16} />
                  </div>
                  <div>
                    <strong className="contact-network-row__label">Fiverr</strong>
                    <span className="contact-network-row__sub">Contratación directa de servicios freelance</span>
                  </div>
                </div>
                <ArrowUpRight size={15} className="contact-network-row__arrow" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/fernando-mu%C3%B1oz-aranda-836330444"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-network-row"
                aria-label="Conectar en LinkedIn"
              >
                <div className="contact-network-row__lead">
                  <div className="contact-network-row__icon-pill">
                    <LinkedInIcon size={16} />
                  </div>
                  <div>
                    <strong className="contact-network-row__label">LinkedIn</strong>
                    <span className="contact-network-row__sub">Perfil y red profesional</span>
                  </div>
                </div>
                <ArrowUpRight size={15} className="contact-network-row__arrow" />
              </a>
            </div>
          </div>
        </div>

        <p className="contact__note">
          Comunicación directa y transparente. Responderé a la brevedad para evaluar requerimientos, viabilidad y tiempos.
        </p>
      </Container>
    </section>
  );
};

export default Contact;
