import { iMezzo } from "./i-mezzo";

export interface iStatoMezzo {
  id: number;
  dataInizio: Date;
  dataFine: Date;
  mezzo: iMezzo;
}
