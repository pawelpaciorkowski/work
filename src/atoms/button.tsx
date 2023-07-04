import React from 'react';
// import '../atoms/button.css';

interface ButtonProps {
  label: string;
  onClick: () => void;
  className?: string;
  disabled?: boolean; // Dodano właściwość "disabled"
}

const Button: React.FC<ButtonProps> = ({ label, onClick, className, disabled }) => {
  const buttonClassName = `button ${className ?? ''}`; 

  return (
    <button className={buttonClassName} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};

export default Button;
export type { ButtonProps };
