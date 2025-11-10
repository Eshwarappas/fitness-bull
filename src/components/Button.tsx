
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
      className={`bg-possible-green text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-possible-green-dark transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-possible-green-dark focus:ring-opacity-50 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
