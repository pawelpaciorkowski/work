/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Adres } from './Adres';

export type AdresZOpisem = {
    adres: Adres;
    opis: string;
    /**
     * po wybraniu adresu z wyszukiwarki kursor powinien przejść do wskazanego pola
     */
    nastepnePole: string;
};

