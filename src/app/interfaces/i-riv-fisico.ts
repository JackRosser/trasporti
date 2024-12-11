import { iRivenditore } from "./i-rivenditore";

export interface iRivFisico extends iRivenditore{
  giornoChiusura: Date;
  oraApertura: Date;
  oraChiusura: Date;
}
