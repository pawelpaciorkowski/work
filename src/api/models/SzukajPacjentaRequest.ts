/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Pacjenta można wyszukać po wpisaniu pełnego nazwiska lub nr PESEL lub telefonu
 */
export type SzukajPacjentaRequest = {
    wyszukiwanyTekst?: string;
    daneZDokumentu?: string;
};

