import React, { useState, useEffect } from "react";
import './WyszukiwaniePacjenta.css'

interface Pacjent {
  id: number;
  name: string;
  surename: string;
  pesel: string;
}

interface WyszukiwaniePacjentaProps {
  onPatientSearch: (searchQuery: string) => Promise<Pacjent[]>;
}

const WyszukiwaniePacjenta: React.FC<WyszukiwaniePacjentaProps> = ({
  onPatientSearch,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Pacjent[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [autoCompleteOptions, setAutoCompleteOptions] = useState<string[]>([]);
  const [isRegistration, setIsRegistration] = useState(false);
  const [newPatientName, setNewPatientName] = useState("");
  const [newPatientSurename, setNewPatientSurename] = useState("");
  const [newPatientPesel, setNewPatientPesel] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const results = await onPatientSearch(searchQuery);
      setSearchResults(results);
    };

    if (searchQuery !== "") {
      const delay = setTimeout(() => {
        fetchData();
      }, 300);

      return () => clearTimeout(delay);
    }
  }, [searchQuery, onPatientSearch]);

  useEffect(() => {
    const generateAutoCompleteOptions = () => {
      const options = searchResults.map((patient) => `${patient.name} ${patient.surename} ${patient.pesel}`);
    setAutoCompleteOptions(options);
    };

    generateAutoCompleteOptions();
  }, [searchResults]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    setShowResults(false);
  };

  const handleShowResults = () => {
    setShowResults(true);
  };

  // dodajemy funkcję do zarejestrowania pacjenta
  const handleRegisterPatient = () => {
    // zarejestruj pacjenta
    // logika rejestracji pacjenta
    console.log(newPatientName, newPatientSurename, newPatientPesel);
    // po rejestracji czyscimy pola formularza
    setNewPatientName("");
    setNewPatientSurename("");
    setNewPatientPesel("");
    setIsRegistration(false);
  };

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
        placeholder="Wyszukaj pacjenta..."
        list="autoCompleteOptions"
      />
      <datalist id="autoCompleteOptions">
        {autoCompleteOptions
          .filter((option) =>
            option.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((option, index) => (
            <option key={index} value={option} />
          ))}
      </datalist>

      <button className="resultButton" onClick={handleShowResults}>Pokaż wyniki</button>

      {showResults && searchQuery && (
        <ul className="searchResults">
          {searchResults
            .filter((patient) => {
              return (
                patient.name
                  .toLowerCase()
                  .includes(searchQuery.toLowerCase()) ||
                patient.surename
                  .toLowerCase()
                  .includes(searchQuery.toLowerCase()) ||
                patient.pesel.includes(searchQuery)
              );
            })
            .map((patient) => (
              <li key={patient.id}>
                {patient.name} {patient.surename}, {patient.pesel}
              </li>
            ))}
        </ul>
      )}

      {showResults && searchQuery && searchResults.length === 0 && (
        <>
        <p>Brak wyników wyszukiwania dla wprowadzonego pacjenta.</p>
        <button onClick={() => setIsRegistration(true)}>Dodaj nowego pacjenta</button>
        </>
        
      )}
      {isRegistration ? (
        <div>
          <input
            className="inputField"
            type="text"
            value={newPatientName}
            onChange={(e) => setNewPatientName(e.target.value)}
            placeholder="Podaj imię"
          />
          <input
            className="inputField"
            type="text"
            value={newPatientSurename}
            onChange={(e) => setNewPatientSurename(e.target.value)}
            placeholder="Podaj nazwisko"
          />
          <input
            className="inputField"
            type="text"
            value={newPatientPesel}
            onChange={(e) => setNewPatientPesel(e.target.value)}
            placeholder="Podaj PESEL"
          />
          <button className="registerButton" onClick={handleRegisterPatient}>Zarejestruj pacjenta</button>
        </div>
      ) : (
        ""
        
      )}
    </div>
  );
};

export default WyszukiwaniePacjenta;
export type { WyszukiwaniePacjentaProps };
