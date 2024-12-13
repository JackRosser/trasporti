import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { iStatoMezzo } from '../interfaces/i-stato-mezzo';
import { Observable } from 'rxjs';
import { iMezzo } from '../interfaces/i-mezzo';
import { iTratta } from '../interfaces/i-tratta';

@Injectable({
  providedIn: 'root',
})
export class StatomezzoService {
  constructor(private http: HttpClient) {}

  statoMezziUrl: string = environment.remoteStatiMezzo;

  public getAllStatiMezzi(): Observable<iStatoMezzo[]> {
    return this.http.get<iStatoMezzo[]>(this.statoMezziUrl);
  }

  public createServizio(mezzoid: number, trattaid: number) {
    return this.http.post<iStatoMezzo>(this.statoMezziUrl, {
      mezzoId: mezzoid,
      trattaId: trattaid,
      tipo: 'servizio',
    });
  }
  public createManutenzione(
    mezzoid: number,
    trattaid: number,
    descrizione: string
  ) {
    return this.http.post<iStatoMezzo>(this.statoMezziUrl, {
      mezzoId: mezzoid,
      trattaId: trattaid,
      descrizione: descrizione,
      tipo: 'manutenzione',
    });
  }
}
