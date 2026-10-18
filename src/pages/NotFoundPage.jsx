import React from 'react';
import { ArrowLeft } from 'lucide-react';
import Container from '../components/layout/Container.jsx';
import Button from '../components/ui/Button.jsx';

const NotFoundPage = () => {
  return (
    <div className="not-found">
      <Container>
        <div className="not-found__inner">
          <p className="not-found__code font-mono">404</p>
          <h1 className="not-found__title">Página no encontrada</h1>
          <p className="not-found__description">
            La ruta que buscas no existe o fue movida.
          </p>
          <Button href="/" variant="primary">
            <ArrowLeft size={14} />
            Ir al inicio
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default NotFoundPage;
