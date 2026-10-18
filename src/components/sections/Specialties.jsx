import React from 'react';
import SectionHeading from '../ui/SectionHeading.jsx';
import SkillCard from '../ui/SkillCard.jsx';
import Container from '../layout/Container.jsx';
import { specialties } from '../../data/specialties.js';

const Specialties = () => {
  return (
    <section id="especialidades" className="section" aria-label="Áreas de trabajo y especialidades">
      <Container>
        <SectionHeading
          label="Capacidades técnicas &amp; versatilidad"
          title="Áreas de enfoque y aprendizaje constante"
          description="Una combinación real de ingeniería de software, desarrollo móvil, procesamiento de datos y diseño de producto, con la capacidad y agilidad para investigar, aprender y dominar cualquier nueva tecnología que el proyecto demande."
        />

        <div className="specialties-editorial-grid">
          {specialties.map((specialty) => (
            <SkillCard key={specialty.id} specialty={specialty} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Specialties;
