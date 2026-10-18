import React from 'react';

/**
 * Container — envuelve contenido con ancho máximo y padding lateral.
 *
 * Props:
 *  - as: etiqueta HTML  (default: 'div')
 *  - narrow: boolean    — max-width reducido
 *  - wide: boolean      — max-width ampliado
 *  - className: string
 *  - children
 */
const Container = ({
  as: Tag = 'div',
  narrow = false,
  wide = false,
  className = '',
  children,
  ...props
}) => {
  const classes = [
    'container',
    narrow ? 'container--narrow' : '',
    wide ? 'container--wide' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Tag className={classes} {...props}>
      {children}
    </Tag>
  );
};

export default Container;
