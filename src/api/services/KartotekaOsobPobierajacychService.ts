/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PobierzOsobePobierajacaResponse } from '../models/PobierzOsobePobierajacaResponse';
import type { SzukajOsobyPobierajacejRequest } from '../models/SzukajOsobyPobierajacejRequest';
import type { SzukajOsobyPobierajacejResponse } from '../models/SzukajOsobyPobierajacejResponse';
import type { ZapiszOsobePobierajacaRequest } from '../models/ZapiszOsobePobierajacaRequest';
import type { ZapiszOsobePobierajacaResponse } from '../models/ZapiszOsobePobierajacaResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class KartotekaOsobPobierajacychService {

    /**
     * Szukaj Osobe Pobierajaca
     * Szukanie osoby pobierającej tekstowo po nazwisku lub PWZ.
     * Zwrotnie lista pasujących osób pobierajacych oraz wstępnie wypełniane dane do rejestracji nowej osoby.
     * @param requestBody
     * @returns SzukajOsobyPobierajacejResponse Successful Response
     * @throws ApiError
     */
    public static szukajOsobePobierajaca(
        requestBody: SzukajOsobyPobierajacejRequest,
    ): CancelablePromise<SzukajOsobyPobierajacejResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/osoby_pobierajace_v1/szukaj',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Pobierz Osobe Pobierajaca
     * Informacje o osobie pobierającej z Kartoteki
     * @param id
     * @returns PobierzOsobePobierajacaResponse Successful Response
     * @throws ApiError
     */
    public static pobierzOsobePobierajaca(
        id: string,
    ): CancelablePromise<PobierzOsobePobierajacaResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/osoby_pobierajace_v1/pobierz/{id}',
            path: {
                'id': id,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Zarejestruj Nowa Osobe Pobierajaca
     * Zarejestrowanie nowej osoby pobierającej w Kartotece
     * @param requestBody
     * @returns ZapiszOsobePobierajacaResponse Successful Response
     * @throws ApiError
     */
    public static zarejestrujNowaOsobePobierajaca(
        requestBody: ZapiszOsobePobierajacaRequest,
    ): CancelablePromise<ZapiszOsobePobierajacaResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/osoby_pobierajace_v1/zarejestruj_nowego',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Popraw Osobe Pobierajaca
     * Edycja danych istniejącej osoby pobierającej w Kartotece
     * @param id
     * @param requestBody
     * @returns ZapiszOsobePobierajacaResponse Successful Response
     * @throws ApiError
     */
    public static poprawOsobePobierajaca(
        id: string,
        requestBody: ZapiszOsobePobierajacaRequest,
    ): CancelablePromise<ZapiszOsobePobierajacaResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/osoby_pobierajace_v1/popraw/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

}
