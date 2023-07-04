/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Adres } from './Adres';
import type { Dokument } from './Dokument';
import type { PlecPacjenta } from './PlecPacjenta';

/**
 * Minimum danych pacjenta aby zapisać, to nazwisko i imię oraz PESEL wymiennie z datą urodzenia+płeć.
 */
export type DanePacjenta = {
    nazwisko: string;
    imie: string;
    pesel?: string;
    dokument?: Dokument;
    adres?: Adres;
    dataUrodzenia?: string;
    plec?: PlecPacjenta;
    /**
     * nadawane przez inne systemy. podczas rejestracji brak możliwości
     * edycji i dodawania
     */
    tagi?: Array<string>;
    telefon?: string;
    email?: string;
    /**
     * wszelkie komentarze do pacjenta wpisywane przez panie w PP,
     * np: pacjent mdleje przy pobraniu
     */
    komentarz?: string;
};

