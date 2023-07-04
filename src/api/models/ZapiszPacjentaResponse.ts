/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DanePacjenta } from './DanePacjenta';
import type { WynikWyszukiwania } from './WynikWyszukiwania';
import type { ZgodyPacjenta } from './ZgodyPacjenta';

export type ZapiszPacjentaResponse = {
    status: boolean;
    id?: string;
    danePacjenta: DanePacjenta;
    zgodyPacjenta: ZgodyPacjenta;
    wersjaRekordu: number;
    /**
     * w przypadku poprawnie zarejestrowanego - takie jak przy pobraniu pacjenta
     * po ID; w przypadku błędów - komunikaty błędów
     */
    komunikaty: Array<string>;
    polaEdytowalne: Array<string>;
    /**
     * pola błędnie wypełnione do poprawy
     */
    polaBledne: Array<string>;
    istniejacyPacjenci?: Array<WynikWyszukiwania>;
};

