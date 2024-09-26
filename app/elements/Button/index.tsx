import React from 'react';
import { ButtonProps } from './props';

export const Button = ({
  type = 'button',
  variant = 'primary',
  size = 'medium',
  children,
  onClick,
  disabled = false,
}: ButtonProps) => {
  const baseStyles = 'font-bold rounded-lg focus:outline-none focus:ring-2 transition-all';

  const variantStyles = {
    primary: 'bg-primary text-white hover:bg-primary-dark',
    secondary: 'bg-gray-500 text-white hover:bg-gray-600',
    danger: 'bg-red-600 text-white hover:bg-red-700',
  };

  const sizeStyles = {
    small: 'text-sm py-2 px-4',
    medium: 'text-md py-3 px-6',
    large: 'text-lg py-4 px-8',
  };

  const buttonClass = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''
    }`;

  return (
    <button type={type} className={buttonClass} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
