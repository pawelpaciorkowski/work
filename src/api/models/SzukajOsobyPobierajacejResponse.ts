/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { WartoscZAlternatywami } from './WartoscZAlternatywami';
import type { WynikWyszukiwania } from './WynikWyszukiwania';

/**
 * Zwrotna odpowiedź na wyszukiwanie. Wyswietla listę wyników wyszukiwania osób pobierających.
 */
export type SzukajOsobyPobierajacejResponse = {
    wyniki: Array<WynikWyszukiwania>;
    daneDoNowego: Record<string, WartoscZAlternatywami>;
};

