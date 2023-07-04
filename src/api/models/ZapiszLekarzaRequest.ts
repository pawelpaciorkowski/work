/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DaneLekarza } from './DaneLekarza';

export type ZapiszLekarzaRequest = {
    daneLekarza: DaneLekarza;
    /**
     * pole wymagane tylko przy rejestrowaniu nowego lekarza.
     * Przy pierwszej próbie rejestracji powinno być false,mogą wtedy wystąpić niekrytyczne błędy, które zatrzymują
     * proces rejestracji zwracjąc komunikaty błędów i ewentualnych możliwych lekarzy do wybrania zamiast
     * zarejestrowania nowego. Rejestratorka może wybrać innego lekarza lub mimo wszystko zarejestrować nowego.
     * W takim przypadku zarejestrujPomimo=true, błędy krytyczne są ignorowane
     */
    zarejestrujPomimo?: boolean;
};

