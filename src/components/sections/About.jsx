import React from 'react';
import {
  MapPin,
  GraduationCap,
  ShieldCheck,
  Compass,
  CheckCircle2,
} from 'lucide-react';
import Container from '../layout/Container.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';
import { profile } from '../../data/profile.js';

const About = () => {
  return (
    <section id="sobre-mi" className="section" aria-label="Sobre Fernando Muñoz Aranda">
      <Container>
        <div className="about-editorial-single">
          <SectionHeading
            label="Sobre mí"
            title="Ingeniería de software, visión de producto y diseño digital"
          />

          <div className="about__meta-bar">
            <div className="about__meta-chip">
              <MapPin size={14} className="about__meta-icon" aria-hidden="true" />
              <span>Cochabamba, Bolivia · Trabajo remoto · Proyectos independientes</span>
            </div>
            <div className="about__meta-chip">
              <GraduationCap size={15} className="about__meta-icon" aria-hidden="true" />
              <span>Estudiante de Ingeniería de Sistemas · Desarrollo de software · Diseño de producto digital</span>
            </div>
          </div>

          {/* Texto editorial íntegro */}
          <div className="about__body-copy">
            <p>
              Soy <strong>Fernando Muñoz Aranda</strong>. Desarrollo software y construyo productos digitales desde una perspectiva que integra ingeniería, análisis y diseño. Me interesa entender los problemas a fondo, encontrar soluciones técnicamente sólidas y convertirlas en productos funcionales, intuitivos y bien diseñados.
            </p>
            <p>
              Mi trabajo abarca desde el análisis de requisitos, la lógica de negocio y el modelado de datos hasta la arquitectura del software y el diseño de interfaces. Cada decisión responde a una necesidad concreta: resolver problemas con claridad, evitar complejidad innecesaria y construir soluciones que puedan evolucionar sin perder calidad.
            </p>
            <p>
              He llevado proyectos desde la idea hasta su implementación, incluyendo aplicaciones móviles publicadas en Google Play, herramientas de cálculo financiero con más de 1.400 pruebas automatizadas, sistemas de gestión de datos institucionales y propuestas de diseño de producto en Figma. Entre estos proyectos destaca <strong>TeMiPu</strong>, una aplicación de transporte público que alcanzó aproximadamente <strong>9.000 descargas</strong>.
            </p>
            <p>
              Actualmente, desarrollo mi trabajo bajo <strong>Spocky</strong>, un espacio donde convergen software, diseño y experimentación tecnológica. Mi objetivo es crear productos digitales que no solo funcionen, sino que respondan a necesidades reales, estén bien construidos y tengan una base técnica capaz de acompañar su crecimiento.
            </p>
          </div>

          {/* Competencias técnicas */}
          <div className="about__competencies-section">
            <h3 className="about__subheading">Competencias técnicas</h3>
            <p className="about__subheading-desc">
              Mi trabajo combina desarrollo de software, arquitectura de datos y diseño de producto digital. Estas son las áreas en las que he desarrollado experiencia práctica:
            </p>

            <div className="about__competencies-list">
              {profile.competencies.map((c) => (
                <div key={c.area} className="about__competency-row">
                  <div className="about__competency-marker" aria-hidden="true">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="about__competency-text">
                    <strong>{c.area}:</strong> <span>{c.details}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Forma de trabajo */}
          <div className="about__philosophy-box">
            <div className="about__philosophy-header">
              <Compass size={18} className="about__philosophy-icon" aria-hidden="true" />
              <h4 className="about__philosophy-title">Forma de trabajo</h4>
            </div>
            <p className="about__philosophy-text">{profile.workApproach}</p>
          </div>

          {/* Compromiso profesional */}
          <div className="about__honesty-flow">
            <ShieldCheck size={18} className="about__honesty-icon" aria-hidden="true" />
            <div>
              <strong className="about__honesty-title">Compromiso profesional:</strong>
              <p className="about__honesty-text">{profile.commitment}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
