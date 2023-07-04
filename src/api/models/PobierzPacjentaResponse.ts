/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DanePacjenta } from './DanePacjenta';
import type { ZgodyPacjenta } from './ZgodyPacjenta';

export type PobierzPacjentaResponse = {
    id: string;
    danePacjenta: DanePacjenta;
    zgodyPacjenta: ZgodyPacjenta;
    wersjaRekordu: number;
    /**
     * informacje wyliczane przez Kartotekę
     */
    komunikaty: Array<string>;
    polaEdytowalne: Array<string>;
};

