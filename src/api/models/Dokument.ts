/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TypDokumentu } from './TypDokumentu';

export type Dokument = {
    nrDokumentu: string;
    typDokumentu: TypDokumentu;
    /**
     * kod kraju ISO_3166-1_alfa-3
     */
    krajWydania: string;
};

