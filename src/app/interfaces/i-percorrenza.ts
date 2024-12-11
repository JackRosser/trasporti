import { iMezzo } from "./i-mezzo";
import { iTratta } from "./i-tratta";

export interface iPercorrenza {
  id: number;
  tratta: iTratta;
  mezzo: iMezzo;
  durataEffettiva: Date;
  data: Date;
}
