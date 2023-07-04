/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { WartoscZAlternatywami } from './WartoscZAlternatywami';
import type { WynikWyszukiwania } from './WynikWyszukiwania';

/**
 * Zwrotna odpowiedź na wyszukiwanie. Wyswietla listę wyników wyszukiwania lekarzy.
 * Po wpisaniu PWZL lekarza, którego nie ma w kartotece - w przyszłości sam pobiera informacje NIL o lekarzu.
 */
export type SzukajLekarzaResponse = {
    wyniki: Array<WynikWyszukiwania>;
    daneDoNowego: Record<string, WartoscZAlternatywami>;
};

