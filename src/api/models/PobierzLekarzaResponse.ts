/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DaneLekarza } from './DaneLekarza';

export type PobierzLekarzaResponse = {
    id: string;
    daneLekarza: DaneLekarza;
    wersjaRekordu: number;
    /**
     * informacje wyliczane przez Kartotekę
     */
    komunikaty: Array<string>;
    polaEdytowalne: Array<string>;
};

