/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { WartoscZAlternatywami } from './WartoscZAlternatywami';
import type { WynikWyszukiwania } from './WynikWyszukiwania';

/**
 * Zwrotna odpowiedź na wyszukiwanie. Wyświetla listę wyników wyszukiwania pacjentów.
 */
export type SzukajPacjentaResponse = {
    wyniki: Array<WynikWyszukiwania>;
    daneDoNowego: Record<string, WartoscZAlternatywami>;
};

