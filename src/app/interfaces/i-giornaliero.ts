import { iBiglietto } from "./i-biglietto";
import { iMezzo } from "./i-mezzo";
import { iTratta } from "./i-tratta";

export interface iGiornaliero extends iBiglietto {
  daAttivare: boolean;
  mezzo: iMezzo;
  tratta: iTratta;
}
