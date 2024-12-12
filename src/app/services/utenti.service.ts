import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { iUtente } from '../interfaces/i-utente';
import { iRivenditore } from '../interfaces/i-rivenditore';
import { iTratta } from '../interfaces/i-tratta';

@Injectable({
  providedIn: 'root',
})
export class UtentiService {
  constructor(private http: HttpClient) {}

  utentiUrl: string = environment.remoteUtenti;

  loggedUser$ = new BehaviorSubject<iUtente | null>(null);

  public getUtenti(): Observable<iUtente[]> {
    return this.http.get<iUtente[]>(this.utentiUrl);
  }

  public getUtenteById(id: number): Observable<iUtente> {
    return this.getUtenti().pipe(
      map((utenti: iUtente[]) => {
        const utente = utenti.find((u) => u.id === id);
        if (!utente) {
          throw new Error(`Rivenditore with id ${id} not found`);
        }
        return utente;
      })
    );
  }

  public createUtente(utente: Partial<iUtente>): Observable<iUtente> {
    return this.http.post<iUtente>(this.utentiUrl, utente);
  }

  public updateUtente(utente: iUtente): Observable<iUtente> {
    return this.http.put<iUtente>(`${this.utentiUrl}/${utente.id}`, utente);
  }

  public deleteUtente(id: number) {
    return this.http.delete(`${this.utentiUrl}/${id}`);
  }
}
