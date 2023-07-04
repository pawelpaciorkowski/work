import React, { useState, useEffect, useCallback } from 'react';
import './wyborZleceniodawcy.css';
import SearchComboBox from '../atoms/SearchComboBox';
import Button from '../atoms/button';
import Checkbox from '../atoms/checkbox';

export interface Zleceniodawca {
  symbol: string;
  nazwa: string;
  uwagi?: string;
  hasKartaKlienta?: boolean;
  jestZlecenieGotowkowe: boolean;
  onKartaKlientaShow?: (symbol: string) => void;
}

export interface WyborZleceniodawcyViewProps {
  zleceniodawcy: Zleceniodawca[];
  jestZlecenieGotowkowe: boolean;
  tylkoJedenZleceniodawca: boolean;
  wybranyZleceniodawca?: string;
  onZleceniodawcaChange: (symbol: string, hasKartaKlienta?: boolean) => void;
  onKartaKlientaShow?: (symbol: string) => void;
}

export const WyborZleceniodawcyView: React.FC<WyborZleceniodawcyViewProps> = ({
  zleceniodawcy,
  wybranyZleceniodawca,
  onZleceniodawcaChange,
  tylkoJedenZleceniodawca,
  jestZlecenieGotowkowe,
  onKartaKlientaShow
}) => {
  const [selectedZleceniodawca, setSelectedZleceniodawca] = useState<string>(
    wybranyZleceniodawca || ''
  );

  const [checkboxChecked, setCheckboxChecked] = useState(false);

  const handleZleceniodawcaChange = useCallback(
    (symbol: string, hasKartaKlienta?: boolean) => {
      setSelectedZleceniodawca(symbol);
      onZleceniodawcaChange(symbol, hasKartaKlienta);

      if (zleceniodawcy.length > 0 && symbol !== zleceniodawcy[0].symbol) {
        setCheckboxChecked(false);
      }
    },
    [onZleceniodawcaChange, zleceniodawcy]
  );

  const handleCheckboxChange = useCallback((checked: boolean) => {
    setCheckboxChecked(checked);

    if (checked) {
      if (zleceniodawcy.length > 0) {
        const firstZleceniodawca = zleceniodawcy[0];
        handleZleceniodawcaChange(firstZleceniodawca.symbol, firstZleceniodawca.hasKartaKlienta);
      }
    } else {
      setSelectedZleceniodawca('');
      onZleceniodawcaChange('', false);
    }
  }, [handleZleceniodawcaChange, onZleceniodawcaChange, zleceniodawcy]);

  useEffect(() => {
    if (tylkoJedenZleceniodawca && zleceniodawcy.length === 1) {
      const firstZleceniodawca = zleceniodawcy[0];
      handleZleceniodawcaChange(firstZleceniodawca.symbol, firstZleceniodawca.hasKartaKlienta);
    }
  }, [tylkoJedenZleceniodawca, zleceniodawcy, handleZleceniodawcaChange]);

  const selectedZleceniodawcaData = zleceniodawcy.find(
    (zleceniodawca) => zleceniodawca.symbol === selectedZleceniodawca
  );

  const displaySelectedZleceniodawca = selectedZleceniodawcaData
    ? `${selectedZleceniodawcaData.symbol} - ${selectedZleceniodawcaData.nazwa}`
    : '';

  useEffect(() => {
    if (zleceniodawcy.length > 0 && selectedZleceniodawca === zleceniodawcy[0].symbol) {
      setCheckboxChecked(true);
    } else {
      setCheckboxChecked(false);
    }
  }, [zleceniodawcy, selectedZleceniodawca]);

  return (
    <div className="wyborZleceniodawcyView-container">
      <div className="wyborZleceniodawcyView-flexContainer">
        {zleceniodawcy.length > 0 ? (
          <SearchComboBox
            displayName={displaySelectedZleceniodawca}
            items={zleceniodawcy.map((zleceniodawca) => ({
              value: zleceniodawca.symbol,
              display: zleceniodawca.nazwa,
              hasCard: zleceniodawca.hasKartaKlienta,
            }))}
            selectedItem={displaySelectedZleceniodawca}
            onItemChange={handleZleceniodawcaChange}
            comments={selectedZleceniodawcaData?.uwagi || ''}
            disabled={zleceniodawcy.length === 1 || (tylkoJedenZleceniodawca && zleceniodawcy.length === 1)}
          />
        ) : (
          <SearchComboBox
            displayName={displaySelectedZleceniodawca}
            items={[]}
            selectedItem={displaySelectedZleceniodawca}
            onItemChange={() => {}}
            comments=""
            disabled={true}
          />
        )}

        {selectedZleceniodawcaData && (
          <>
            {selectedZleceniodawcaData.hasKartaKlienta && (
              <Button
                label="Karta klienta"
                className="wyborZleceniodawcyView-clientCardButton"
                onClick={() => onKartaKlientaShow && onKartaKlientaShow(selectedZleceniodawca)}
              />
            )}
          </>
        )}

        {jestZlecenieGotowkowe && (
          <Checkbox
            checked={checkboxChecked}
            onChange={handleCheckboxChange}
            className="wyborZleceniodawcyView-checkboxGotowka"
          >
            Gotówka
          </Checkbox>
        )}
      </div>
    </div>
  );
};

export default WyborZleceniodawcyView;

