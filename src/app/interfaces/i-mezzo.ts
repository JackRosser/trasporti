import { iManutenzione } from './i-manutenzione';
import { iPercorrenza } from './i-percorrenza';
import { iServizio } from './i-servizio';
import { eStato } from './e-stato';
export interface iMezzo {
  id: number;
  capienza: number;
  manutenzioni: iManutenzione[];
  servizi: iServizio[];
  stato: eStato;
  percorrenze: iPercorrenza;
  codice: number;
  tipo: string;
}
