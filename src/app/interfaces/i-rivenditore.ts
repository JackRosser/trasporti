import { iBiglietto } from "./i-biglietto";

export interface iRivenditore {
  id: number;
  biglietti: iBiglietto[];
}
