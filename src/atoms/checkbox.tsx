import React, { ChangeEvent } from 'react';

interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void; 
  children?: React.ReactNode;
  className?: string;
  label?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange, children, className }) => {
  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const checkboxChecked = event.target.checked;
    console.log('Checkbox changed to: ', checkboxChecked);
    onChange(checkboxChecked);
  };

  return (
    <div className={className}>
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={handleCheckboxChange} 
        />
        {children}
      </label>
    </div>
  );
};

export default Checkbox;
export type { CheckboxProps };
