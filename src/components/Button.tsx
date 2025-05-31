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
    primary: 'bg-rose-800 hover:bg-rose-700 text-white shadow-md',
    secondary: 'bg-rose-200 hover:bg-rose-300 text-rose-800 shadow-sm',
    outline: 'bg-transparent border-2 border-rose-800 text-rose-800 hover:bg-rose-50',
  };

  return (
    <motion.button
      onClick={onClick}
      className={`
        ${sizeClasses[size]} 
        ${variantClasses[variant]} 
        ${fullWidth ? 'w-full' : ''} 
        rounded-lg font-medium transition-colors duration-300 
        focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-opacity-50
        ${className}
      `}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
};

export default Button;