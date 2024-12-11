import { iStatoMezzo } from "./i-stato-mezzo";
import { iTratta } from "./i-tratta";

export interface iServizio extends iStatoMezzo{
  tratta: iTratta;
}
