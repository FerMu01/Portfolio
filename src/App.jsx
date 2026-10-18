import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';
import Hero from './components/sections/Hero.jsx';
import Specialties from './components/sections/Specialties.jsx';
import FeaturedProjects from './components/sections/FeaturedProjects.jsx';
import DesignPortfolio from './components/sections/DesignPortfolio.jsx';
import OtherProjects from './components/sections/OtherProjects.jsx';
import About from './components/sections/About.jsx';
import Contact from './components/sections/Contact.jsx';
import CaseStudyPage from './components/sections/CaseStudyPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import TechBackground from './components/ui/TechBackground.jsx';

/**
 * ScrollRevealManager — Añade clases animadas sutiles a medida que los bloques
 * entran en pantalla para dar un efecto flotante y ascendente muy refinado.
 */
const ScrollRevealManager = () => {
  const location = useLocation();

  useEffect(() => {
    // Manejar anclajes con hash al cambiar de ruta
    if (location.hash) {
      const el = document.getElementById(location.hash.replace('#', ''));
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }

    // IntersectionObserver para el efecto scroll reveal sutil
    const targets = document.querySelectorAll(
      '.hero__narrative, .hero__showcase, .area-card, .project-editorial-card, .design-study-block, .about-editorial-layout, .contact-whatsapp-card, .other-project-card'
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('scroll-revealed');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    targets.forEach((t) => observer.observe(t));

    return () => observer.disconnect();
  }, [location]);

  return null;
};

const HomePage = () => (
  <main id="main-content">
    <Hero />
    <Specialties />
    <FeaturedProjects />
    <DesignPortfolio />
    <OtherProjects />
    <About />
    <Contact />
  </main>
);

const App = () => {
  return (
    <Router>
      <div className="site-wrapper">
        {/* Fondo animado tecnológico con conectores y pulsos luminosos coloridos */}
        <TechBackground />

        {/* Administrador de scroll reveal para efectos sutiles */}
        <ScrollRevealManager />

        {/* Skip link para accesibilidad */}
        <a href="#main-content" className="skip-link sr-only">
          Saltar al contenido principal
        </a>

        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/proyectos/:projectId" element={<CaseStudyPage />} />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
