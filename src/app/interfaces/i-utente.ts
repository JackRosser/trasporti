import { iTessera } from "./i-tessera";

export interface iUtente {
  id: number;
  name: string;
  cognome: string;
  email: string;
  tessera: iTessera;
}
