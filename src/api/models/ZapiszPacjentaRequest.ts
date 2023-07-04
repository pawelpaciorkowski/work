/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DanePacjenta } from './DanePacjenta';
import type { ZgodyPacjenta } from './ZgodyPacjenta';

export type ZapiszPacjentaRequest = {
    danePacjenta: DanePacjenta;
    zgodyPacjenta: ZgodyPacjenta;
    /**
     * pole wymagane tylko przy rejestrowaniu nowego pacjenta.
     * Przy pierwszej próbie rejestracji powinno być false,mogą wtedy wystąpić niekrytyczne błędy, które zatrzymują
     * proces rejestracji zwracjąc komunikaty błędów i ewentualnych możliwych pacjentów do wybrania zamiast
     * zarejestrowania nowego. Rejestratorka może wybrać innego pacjenta lub mimo wszystko zarejestrować nowego.
     * W takim przypadku zarejestrujPomimo=true, błędy krytyczne są ignorowane
     */
    zarejestrujPomimo?: boolean;
};

