/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DaneOsobyPobierajacej } from './DaneOsobyPobierajacej';
import type { WynikWyszukiwania } from './WynikWyszukiwania';

export type ZapiszOsobePobierajacaResponse = {
    status: boolean;
    id?: string;
    daneOsobyPobierajacej: DaneOsobyPobierajacej;
    wersjaRekordu: number;
    /**
     * w przypadku poprawnie zarejestrowane - takie jak przy pobraniu osoby
     * pobierajcej po ID; w przypadku błędów - komunikaty błędów
     */
    komunikaty: Array<string>;
    polaEdytowalne: Array<string>;
    /**
     * pola błędnie wypełnione do poprawy
     */
    polaBledne: Array<string>;
    istniejaceOsobyPobierajace?: Array<WynikWyszukiwania>;
};

