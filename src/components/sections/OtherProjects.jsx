import React from 'react';
import { Smartphone, Globe, Layers, Box, Code } from 'lucide-react';
import Container from '../layout/Container.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';
import { getOtherProjects } from '../../data/projects.js';

const getCategoryIcon = (category, id) => {
  if (id.includes('3d') || id.includes('blender')) return <Box size={18} />;
  if (category === 'mobile') return <Smartphone size={18} />;
  if (category === 'web') return <Globe size={18} />;
  return <Code size={18} />;
};

const OtherProjects = () => {
  const others = getOtherProjects();

  return (
    <section id="otros-proyectos" className="section section--dark" aria-label="Otros proyectos">
      <Container>
        <SectionHeading
          label="Trabajo Complementario &amp; Exploración"
          title="Otros proyectos &amp; desarrollos"
          description="Aplicaciones nativas, experimentación tecnológica y herramientas complementarias desarrolladas a lo largo de mi trayectoria."
        />

        <div className="other-projects-grid">
          {others.map((project) => (
            <article key={project.id} className="other-project-card">
              <div className="other-project-card__top">
                <div className="other-project-card__icon-badge" aria-hidden="true">
                  {getCategoryIcon(project.category, project.id)}
                </div>
                {project.status && (
                  <span className={`badge badge--${project.status}`}>
                    {project.statusLabel || project.status}
                  </span>
                )}
              </div>

              <div className="other-project-card__header">
                <h3 className="other-project-card__title">{project.name}</h3>
                <p className="other-project-card__subtitle">{project.subtitle}</p>
              </div>

              <p className="other-project-card__description">{project.description}</p>

              <div className="other-project-card__tech">
                {project.technologies.slice(0, 5).map((tech) => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default OtherProjects;
