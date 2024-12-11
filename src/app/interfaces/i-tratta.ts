import { Time } from '@angular/common';
import { iPercorrenza } from './i-percorrenza';
import { iServizio } from './i-servizio';

export interface iTratta {
  id: number;
  partenza: string;
  capolinea: string;
  durata: String;
  servizi: iServizio[];
  percorrenze: iPercorrenza[];
}
