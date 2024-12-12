import { iRivenditore } from './i-rivenditore';

export interface iBiglietto {
  id: number;
  codice: string;
  scadenza: Date;
  rivenditore: iRivenditore;
  tipo: string;
}
