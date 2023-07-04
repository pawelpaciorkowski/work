/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DaneOsobyPobierajacej } from './DaneOsobyPobierajacej';

export type PobierzOsobePobierajacaResponse = {
    id: string;
    daneOsobyPobierajacej: DaneOsobyPobierajacej;
    wersjaRekordu: number;
    /**
     * informacje wyliczane przez Kartotekę
     */
    komunikaty: Array<string>;
    polaEdytowalne: Array<string>;
};

