/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PobierzPacjentaResponse } from '../models/PobierzPacjentaResponse';
import type { PodpowiedzAdresRequest } from '../models/PodpowiedzAdresRequest';
import type { PodpowiedzAdresResponse } from '../models/PodpowiedzAdresResponse';
import type { SzukajPacjentaRequest } from '../models/SzukajPacjentaRequest';
import type { SzukajPacjentaResponse } from '../models/SzukajPacjentaResponse';
import type { ZapiszPacjentaRequest } from '../models/ZapiszPacjentaRequest';
import type { ZapiszPacjentaResponse } from '../models/ZapiszPacjentaResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class KartotekaPacjentowService {

    /**
     * Szukaj
     * Szukanie pacjenta tekstowo po nazwisku, PESELu, nr telefonu lub wg danych zeskanowanych z dokumentu.
     * Zwrotnie lista pasujących pacjentów oraz wstępnie wypełniane dane do rejestracji nowego pacjenta.
     * @param requestBody
     * @returns SzukajPacjentaResponse Successful Response
     * @throws ApiError
     */
    public static szukaj(
        requestBody: SzukajPacjentaRequest,
    ): CancelablePromise<SzukajPacjentaResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/pacjenci_v1/szukaj',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Pobierz Pacjenta
     * Informacje o pacjencie z kartoteki pacjentów
     * @param id
     * @returns PobierzPacjentaResponse Successful Response
     * @throws ApiError
     */
    public static pobierzPacjenta(
        id: string,
    ): CancelablePromise<PobierzPacjentaResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/pacjenci_v1/pobierz/{id}',
            path: {
                'id': id,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Zarejestruj Nowego Pacjenta
     * Rejestracja nowego pacjenta w kartotece
     * @param requestBody
     * @returns ZapiszPacjentaResponse Successful Response
     * @throws ApiError
     */
    public static zarejestrujNowegoPacjenta(
        requestBody: ZapiszPacjentaRequest,
    ): CancelablePromise<ZapiszPacjentaResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/pacjenci_v1/zarejestruj_nowego',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Popraw Pacjenta
     * Edycja danych istniejącego pacjenta w kartotece
     * @param id
     * @param requestBody
     * @returns ZapiszPacjentaResponse Successful Response
     * @throws ApiError
     */
    public static poprawPacjenta(
        id: string,
        requestBody: ZapiszPacjentaRequest,
    ): CancelablePromise<ZapiszPacjentaResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/pacjenci_v1/popraw/{id}',
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

    /**
     * Podpowiedz Adres Pacjenta
     * Podpowiada adres pacjenta
     * @param requestBody
     * @returns PodpowiedzAdresResponse Successful Response
     * @throws ApiError
     */
    public static podpowiedzAdresPacjenta(
        requestBody: PodpowiedzAdresRequest,
    ): CancelablePromise<PodpowiedzAdresResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/pacjenci_v1/podpowiedz_adres',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

}
