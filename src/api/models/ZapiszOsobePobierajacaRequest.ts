/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DaneOsobyPobierajacej } from './DaneOsobyPobierajacej';

export type ZapiszOsobePobierajacaRequest = {
    daneOsobyPobierajacej: DaneOsobyPobierajacej;
    /**
     * pole wymagane tylko przy rejestrowaniu nowej osoby
     * pobierajacej. Przy pierwszej próbie rejestracji powinno być false,mogą wtedy wystąpić niekrytyczne błędy,
     * które zatrzymują proces rejestracji zwracjąc komunikaty błędów i ewentualnych możliwych osób pobierających do
     * wybrania zamiast zarejestrowania nowego. Rejestratorka może wybrać inną osobę pobierającą lub mimo wszystko
     * zarejestrować nową. W takim przypadku zarejestrujPomimo=true, błędy krytyczne są ignorowane
     */
    zarejestrujPomimo?: boolean;
};

