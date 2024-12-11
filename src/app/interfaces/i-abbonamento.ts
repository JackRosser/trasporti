import { ePeriodicy } from "./e-periodicy";
import { iBiglietto } from "./i-biglietto";
import { iTessera } from "./i-tessera";

export interface iAbbonamento extends iBiglietto{
  tariffa: string;
  tessera: iTessera;
  attivo: boolean;
  periodicy: ePeriodicy;
}
