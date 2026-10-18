import React from 'react';

/**
 * Button — componente de botón reutilizable.
 *
 * Props:
 *  - variant: 'primary' | 'secondary' | 'outline'  (default: 'primary')
 *  - size: 'sm' | 'md' | 'lg'                      (default: 'md')
 *  - href: string — si se define, renderiza un <a>
 *  - disabled: boolean
 *  - external: boolean — abre href en nueva pestaña
 *  - className: string — clases adicionales
 *  - children, onClick, ...props
 */
const Button = ({
  variant = 'primary',
  size = 'md',
  href,
  disabled = false,
  external = false,
  className = '',
  children,
  onClick,
  ...props
}) => {
  const classes = [
    'btn',
    `btn--${variant}`,
    size !== 'md' ? `btn--${size}` : '',
    disabled ? 'btn--disabled' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        aria-disabled={disabled}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={classes}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
