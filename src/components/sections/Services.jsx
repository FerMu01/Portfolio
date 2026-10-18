import React from 'react';
import { MessageCircle } from 'lucide-react';
import Container from '../layout/Container.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';
import { profile } from '../../data/profile.js';

const Services = () => {
  return (
    <section id="servicios" className="section section--alt" aria-label="Servicios de Spocky">
      <Container>
        <SectionHeading
          label="Servicios profesionales · Spocky"
          title="Soluciones que construyo según tu necesidad"
          description="Servicios de desarrollo de software, estructuración de datos y diseño de producto fundamentados en experiencia real. Cada solución se adapta al problema específico de tu proyecto."
        />

        {/* Rejilla de servicios principales */}
        <div className="services-grid">
          {profile.services.map((service) => (
            <article key={service.id} className="service-card" aria-label={service.title}>
              <div className="service-card__top">
                <span className="service-card__number">{service.number}</span>
                <span className="service-card__status-dot" aria-hidden="true" />
              </div>

              <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__description">{service.description}</p>

              <div className="service-card__deliverables">
                <span className="service-card__deliverables-title">Entregables habituales:</span>
                <ul className="service-card__list" role="list">
                  {service.deliverables.map((item) => (
                    <li key={item} className="service-card__item">
                      <span className="service-card__bullet" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        {/* Capacidades complementarias */}
        <div className="services-complementary">
          <div className="services-complementary__header">
            <h4 className="services-complementary__title">Capacidades complementarias</h4>
            <p className="services-complementary__note">
              Habilidades de soporte para complementar proyectos integrales, presentadas con honestidad:
            </p>
          </div>
          <div className="services-complementary__tags">
            {profile.complementaryCapabilities.map((cap) => (
              <span key={cap} className="services-complementary__tag">
                {cap}
              </span>
            ))}
          </div>
        </div>

        {/* CTA a consulta por WhatsApp */}
        <div className="services-cta-banner">
          <div className="services-cta-banner__content">
            <h3 className="services-cta-banner__title">¿Tienes un proyecto en mente?</h3>
            <p className="services-cta-banner__desc">
              Conversemos directamente sobre los requerimientos, viabilidad técnica y arquitectura de tu solución.
            </p>
          </div>
          <div className="services-cta-banner__action">
            <a
              href={profile.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--brand btn--lg"
              aria-label="Consultar sobre un proyecto por WhatsApp"
            >
              <MessageCircle size={18} aria-hidden="true" />
              Consultar por WhatsApp
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Services;
