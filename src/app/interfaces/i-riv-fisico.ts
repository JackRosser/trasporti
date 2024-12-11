import { iRivenditore } from './i-rivenditore';

export interface iRivFisico extends iRivenditore {
  giornoChiusura: String;
  oraApertura: String;
  oraChiusura: String;
  tipo: String;
}
