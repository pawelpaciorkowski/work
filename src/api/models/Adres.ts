/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Standardowo manualnie wypełniane: ulica, nr domu i mieszkania,miejscowość i/lub kod pocztowy.
 * Automatycznie wypełniane: teryt, terytSimc, terytUlic, wojewodztwo, państwo, miejscowość lub kod pocztowy.
 * Sformatowany i niestandarowy adres przypisywane są automatycznie na podstawie pozostałych pól
 */
export type Adres = {
    ulica?: string;
    nrDomu?: string;
    nrMieszkania?: string;
    miejscowosc?: string;
    gmina?: string;
    powiat?: string;
    wojewodztwo?: string;
    kodPocztowy?: string;
    poczta?: string;
    panstwoNazwa?: string;
    panstwoKod?: string;
    teryt?: string;
    terytSimc?: string;
    terytUlic?: string;
    /**
     * adres, którego nie da się sensownie podzielić na pola
     */
    niestandardowaPostacAdresu?: string;
    sformatowanyAdres?: string;
};

