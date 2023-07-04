/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PobierzLekarzaResponse } from '../models/PobierzLekarzaResponse';
import type { SzukajLekarzaRequest } from '../models/SzukajLekarzaRequest';
import type { SzukajLekarzaResponse } from '../models/SzukajLekarzaResponse';
import type { ZapiszLekarzaRequest } from '../models/ZapiszLekarzaRequest';
import type { ZapiszLekarzaResponse } from '../models/ZapiszLekarzaResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class KartotekaLekarzyService {

    /**
     * Szukaj Lekarza
     * Szukanie lekarza tekstowo po nazwisku lub PWZL.
     * Zwrotnie lista pasujących lekarzy oraz wstępnie wypełniane dane do rejestracji nowego lekarza.
     * @param requestBody
     * @returns SzukajLekarzaResponse Successful Response
     * @throws ApiError
     */
    public static szukajLekarza(
        requestBody: SzukajLekarzaRequest,
    ): CancelablePromise<SzukajLekarzaResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/lekarze_v1/szukaj',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Pobierz Lekarza
     * Informacje o lekarzu z Kartotek Lekarzy
     * @param id
     * @returns PobierzLekarzaResponse Successful Response
     * @throws ApiError
     */
    public static pobierzLekarza(
        id: string,
    ): CancelablePromise<PobierzLekarzaResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/lekarze_v1/pobierz/{id}',
            path: {
                'id': id,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Zarejestruj Nowego Lekarza
     * Zarejestrowanie nowego lekarza w Kartotece
     * @param requestBody
     * @returns ZapiszLekarzaResponse Successful Response
     * @throws ApiError
     */
    public static zarejestrujNowegoLekarza(
        requestBody: ZapiszLekarzaRequest,
    ): CancelablePromise<ZapiszLekarzaResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/lekarze_v1/zarejestruj_nowego',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Popraw Lekarza
     * Edycja danych istniejącego lekarza w Kartotece
     * @param id
     * @param requestBody
     * @returns ZapiszLekarzaResponse Successful Response
     * @throws ApiError
     */
    public static poprawLekarza(
        id: string,
        requestBody: ZapiszLekarzaRequest,
    ): CancelablePromise<ZapiszLekarzaResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/lekarze_v1/popraw/{id}',
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
