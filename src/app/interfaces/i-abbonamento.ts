import { ePeriodicy } from "./e-periodicy";
import { iTessera } from "./i-tessera";

export interface iAbbonamento {
  tariffa: string;
  tessera: iTessera;
  attivo: boolean;
  periodicy: ePeriodicy;
}
