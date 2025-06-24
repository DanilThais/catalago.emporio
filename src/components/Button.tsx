import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = '',
  size = 'md',
  variant = 'primary',
  fullWidth = false,
}) => {
  const sizeClasses = {
    sm: 'py-2 px-4 text-sm',
    md: 'py-3 px-6 text-base',
    lg: 'py-4 px-8 text-lg',
  };

  const variantClasses = {
    primary: 'bg-gold hover:bg-gold-light text-charcoal shadow-md font-semibold',
    secondary: 'bg-charcoal hover:bg-charcoal-dark text-cream shadow-md border border-charcoal/20',
    outline: 'bg-transparent border-2 border-charcoal text-charcoal hover:bg-charcoal/10',
  };

  return (
    <motion.button
      onClick={onClick}
      className={`
        ${sizeClasses[size]} 
        ${variantClasses[variant]} 
        ${fullWidth ? 'w-full' : ''} 
        rounded-lg font-medium transition-colors duration-300 
        focus:outline-none focus:ring-2 focus:ring-gold focus:ring-opacity-50
        ${className}
      `}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
};

export default Button