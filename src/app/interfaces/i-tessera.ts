import { iAbbonamento } from "./i-abbonamento";
import { iUtente } from "./i-utente";

export interface iTessera {
  id: number;
  codice: string;
  validita: Date;
  abbonamento: iAbbonamento[];
  utente: iUtente;
}
