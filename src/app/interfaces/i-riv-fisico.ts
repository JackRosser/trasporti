import { iRivenditore } from './i-rivenditore';

export interface iRivFisico extends iRivenditore {
  giornoChiusura: number;
  oraApertura: string;
  oraChiusura: string;
}
