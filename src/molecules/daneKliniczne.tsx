// daneKliniczne.tsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './daneKliniczne.css';

export interface DaneKliniczneViewProps {
  teksty: string[];
  wybraneTeksty: string[];
  onWybraneTekstyChange?: (wybraneTeksty: string[]) => void;
}

export const DaneKliniczneView: React.FC<DaneKliniczneViewProps> = ({
  teksty,
  wybraneTeksty,
  onWybraneTekstyChange,
}) => {
  const [selectedTeksty, setSelectedTeksty] = useState<string[]>(wybraneTeksty);
  

  const handleTekstChange = (event: React.ChangeEvent<HTMLInputElement>, tekst: string) => {
    const isChecked = event.target.checked;

    if (isChecked) {
      const updatedSelectedTeksty = [...selectedTeksty, tekst];
      setSelectedTeksty(updatedSelectedTeksty);
      onWybraneTekstyChange && onWybraneTekstyChange(updatedSelectedTeksty);
    } else {
      const updatedSelectedTeksty = selectedTeksty.filter((selected) => selected !== tekst);
      setSelectedTeksty(updatedSelectedTeksty);
      onWybraneTekstyChange && onWybraneTekstyChange(updatedSelectedTeksty);
    }
  };

  return (
    <div className="daneKliniczneContainer">
      {teksty.map((tekst) => (
        <div key={tekst} className="daneKliniczneTekst">
          <label>
            <input
              type="checkbox"
              checked={selectedTeksty.includes(tekst)}
              onChange={(event) => handleTekstChange(event, tekst)}
            />
            {tekst}
          </label>
        </div>
      ))}
    </div>
  );
};

DaneKliniczneView.propTypes = {
  teksty: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  wybraneTeksty: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onWybraneTekstyChange: PropTypes.func,
}; 
