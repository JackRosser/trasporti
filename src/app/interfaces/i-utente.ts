import { iTessera } from './i-tessera';

export interface iUtente {
  id: number;
  nome: string;
  cognome: string;
  email: string;
  dataNascita: string;
  tessera: iTessera | null;
  ruolo: string;
}
