import React, { useState } from 'react';
import './daneAdresowe.css';

interface DaneAdresoweProps {
    address: string;
    onAddressSearch: (searchQuery: string) => Promise<string>;
  }
  

const DaneAdresowe: React.FC<DaneAdresoweProps> = ({ onAddressSearch }) => {
  const [manualEntry, setManualEntry] = useState(false);
  const [customAddress, setCustomAddress] = useState(false);
  const [street, setStreet] = useState('');
  const [buildingNumber, setBuildingNumber] = useState('');
  const [apartmentNumber, setApartmentNumber] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [city, setCity] = useState('');
  const [postOffice, setPostOffice] = useState('');
  const [province, setProvince] = useState('');
  const [apartmentNumberError, setApartmentNumberError] = useState(false);
  const [postalCodeError, setPostalCodeError] = useState(false);
  const [customAddressText, setCustomAddressText] = useState('');

  const handleAddressInputChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    console.log('Wartość adresu:', value);

    if (id === 'addressInput') {
      setStreet(value);
      if (!manualEntry) {
        const address = await onAddressSearch(value);
        setCustomAddressText(address);
      }
    }

    if (id === 'apartmentNumberInput') {
      const apartmentNumberRegex = /^\d*$/;
      if (!apartmentNumberRegex.test(value)) {
        setApartmentNumberError(true);
      } else {
        setApartmentNumberError(false);
      }
      setApartmentNumber(value);
    }

    if (id === 'postalCodeInput') {
      const postalCodeRegex = /^\d{2}-\d{3}$/;
      if (!postalCodeRegex.test(value)) {
        setPostalCodeError(true);
      } else {
        setPostalCodeError(false);
      }
      setPostalCode(value);
    }

    // Pozostała logika dla innych pól adresowych
    // ...

  };

  const handleCustomAddressChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;
    setCustomAddressText(value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const key = event.key;
    if (key === 'Backspace' || key === 'Delete') {
      const inputValue = event.currentTarget.value;
      if (inputValue === '') {
        // Jeśli pole jest puste, zresetuj wartości pól adresowych
        setStreet('');
        setBuildingNumber('');
        setApartmentNumber('');
        setPostalCode('');
        setCity('');
        setPostOffice('');
        setProvince('');
      }
    } else {
      event.stopPropagation();
    }
  };

  const handleManualEntryChange = () => {
    if (!manualEntry) {
      // Resetuj wartości pól adresowych
      setStreet('');
      setBuildingNumber('');
      setApartmentNumber('');
      setPostalCode('');
      setCity('');
      setPostOffice('');
      setProvince('');
      setCustomAddressText('');
    }
    setManualEntry(!manualEntry);
    setCustomAddress(false);
    setStreet('');
    setBuildingNumber('');
    setApartmentNumber('');
    setPostalCode('');
    setCity('');
    setPostOffice('');
    setProvince('');
    setCustomAddressText('');
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checkboxId = event.target.id;
    if (checkboxId === 'manualEntryCheckbox') {
      handleManualEntryChange();
    } else if (checkboxId === 'customAddressCheckbox') {
      if (!customAddress) {
        // Resetuj wartości pól adresowych
        setStreet('');
        setBuildingNumber('');
        setApartmentNumber('');
        setPostalCode('');
        setCity('');
        setPostOffice('');
        setProvince('');
        setCustomAddressText('');
      }
      setCustomAddress(!customAddress);
      setManualEntry(false);
    }
  };

  const getAddressValue = () => {
    if (customAddress) {
      return customAddressText;
    } else {
      let addressValue = '';

      if (street !== '') {
        addressValue += street;
      }

      if (buildingNumber !== '') {
        addressValue += ' ' + buildingNumber;
      }

      if (apartmentNumber !== '') {
        addressValue += '/' + apartmentNumber;
      }

      if (postalCode !== '') {
        addressValue += ', ' + postalCode;
      }

      if (city !== '') {
        addressValue += ' ' + city;
      }

      if (postOffice !== '') {
        addressValue += ' ' + postOffice;
      }

      if (province !== '') {
        addressValue += ', ' + province;
      }

      return addressValue;
    }
  };

  return (
    <div>
      <label htmlFor="addressInput">Adres:</label>
      <input
        type="text"
        id="addressInput"
        value={getAddressValue()}
        onChange={handleAddressInputChange}
        placeholder="Wprowadź adres"
        onKeyDown={handleKeyPress}
      />

      <div>
        <input
          type="checkbox"
          id="manualEntryCheckbox"
          checked={manualEntry}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="manualEntryCheckbox">Wpisz adres manualnie</label>
      </div>

      {manualEntry && (
        <div className="manual-entry-container">
        <div className="address-line">
          <label htmlFor="streetInput">Ulica:</label>
          <input
            type="text"
            id="streetInput"
            value={street}
            onChange={(event) => setStreet(event.target.value)}
            onKeyDown={handleKeyPress}
          />
      
          <label htmlFor="buildingNumberInput">Numer budynku:</label>
          <input
            type="text"
            id="buildingNumberInput"
            value={buildingNumber}
            onChange={(event) => setBuildingNumber(event.target.value)}
            onKeyDown={handleKeyPress}
          />
      
          <label htmlFor="apartmentNumberInput">Numer mieszkania/lokalu:</label>
          <input
            type="text"
            id="apartmentNumberInput"
            value={apartmentNumber}
            onChange={handleAddressInputChange}
            onKeyDown={handleKeyPress}
          />
          {apartmentNumberError && (
            <div className="error-message">Numer mieszkania musi być liczbą.</div>
          )}
        </div>
      
        <div className="address-line">
          <label htmlFor="postalCodeInput">Kod pocztowy (xx-xxx):</label>
          <input
            type="text"
            id="postalCodeInput"
            value={postalCode}
            onChange={handleAddressInputChange}
            onKeyDown={handleKeyPress}
          />
      
          <label htmlFor="cityInput">Miejscowość:</label>
          <input
            type="text"
            id="cityInput"
            value={city}
            onChange={(event) => setCity(event.target.value)}
            onKeyDown={handleKeyPress}
          />
        </div>
      
        <div className="address-line">
          <label htmlFor="postOfficeInput">Poczta:</label>
          <input
            type="text"
            id="postOfficeInput"
            value={postOffice}
            onChange={(event) => setPostOffice(event.target.value)}
            onKeyDown={handleKeyPress}
          />
      
          <label htmlFor="provinceInput">Województwo:</label>
          <input
            type="text"
            id="provinceInput"
            value={province}
            onChange={(event) => setProvince(event.target.value)}
            onKeyDown={handleKeyPress}
          />
        </div>
      </div>
      
      )}

      <div>
        <input
          type="checkbox"
          id="customAddressCheckbox"
          checked={customAddress}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="customAddressCheckbox">Niestandardowy adres</label>
      </div>

      {customAddress && (
        <div>
          <label htmlFor="customAddressTextArea"></label>
          <textarea
            id="customAddressTextArea"
            value={customAddressText}
            onChange={handleCustomAddressChange}
          ></textarea>
        </div>
      )}
    </div>
  );
};

export default DaneAdresowe;
export type { DaneAdresoweProps };
