import React from 'react';


interface BarCodeProps {
  value: string;
  onChange: (value: string) => void;
}

const BarCode: React.FC<BarCodeProps> = ({ value, onChange }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    onChange(newValue);
  };

  return (
    <input
      type="text"
      value={value}
      onChange={handleInputChange}
      placeholder="Wpisz kod kreskowy"
    />
  );
};

export default BarCode;
export type { BarCodeProps };
