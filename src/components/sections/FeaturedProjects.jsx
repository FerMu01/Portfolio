import React, { useState } from 'react';
import SectionHeading from '../ui/SectionHeading.jsx';
import ProjectCard from '../ui/ProjectCard.jsx';
import Container from '../layout/Container.jsx';
import { getFeaturedProjects } from '../../data/projects.js';

const CATEGORIES = [
  { id: 'all',     label: 'Todos' },
  { id: 'mobile',  label: 'Móvil' },
  { id: 'web',     label: 'Web' },
  { id: 'systems', label: 'Sistemas' },
];

const FeaturedProjects = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const featured = getFeaturedProjects();

  const filtered =
    activeCategory === 'all'
      ? featured
      : featured.filter((p) => p.category === activeCategory);

  return (
    <section id="proyectos" className="section section--alt" aria-label="Proyectos destacados">
      <Container>
        <SectionHeading
          label="Proyectos"
          title="Trabajo destacado"
          description="Proyectos seleccionados donde resolví problemas reales con tecnología, datos y diseño."
        />

        {/* Filtros de categoría */}
        <div className="projects-filter" role="group" aria-label="Filtrar proyectos">
          {CATEGORIES.map(({ id, label }) => (
            <button
              key={id}
              className={`projects-filter__btn${activeCategory === id ? ' projects-filter__btn--active' : ''}`}
              onClick={() => setActiveCategory(id)}
              aria-pressed={activeCategory === id}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Grid de tarjetas */}
        <div className="projects-grid">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FeaturedProjects;
