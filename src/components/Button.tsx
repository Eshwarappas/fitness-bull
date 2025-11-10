import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className = '', type = 'button' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-brand-red text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-brand-black transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-brand-black focus:ring-opacity-50 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
