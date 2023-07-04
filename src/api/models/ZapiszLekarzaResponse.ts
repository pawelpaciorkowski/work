/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DaneLekarza } from './DaneLekarza';
import type { WynikWyszukiwania } from './WynikWyszukiwania';

export type ZapiszLekarzaResponse = {
    status: boolean;
    id?: string;
    daneLekarza: DaneLekarza;
    wersjaRekordu: number;
    /**
     * w przypadku poprawnie zarejestrowane - takie jak przy pobraniu lekarza
     * po ID; w przypadku błędów - komunikaty błędów
     */
    komunikaty: Array<string>;
    polaEdytowalne: Array<string>;
    /**
     * pola błędnie wypełnione do poprawy
     */
    polaBledne: Array<string>;
    istniejacyLekarze?: Array<WynikWyszukiwania>;
};

