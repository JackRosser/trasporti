import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { map, Observable } from 'rxjs';
import { iTessera } from '../interfaces/i-tessera';
import { iUtente } from '../interfaces/i-utente';
import { iRivenditore } from '../interfaces/i-rivenditore';

@Injectable({
  providedIn: 'root',
})
export class TessereService {
  constructor(private http: HttpClient) {}

  tessereUrl: string = environment.remoteTessere;

  public getTessere(): Observable<iTessera[]> {
    return this.http.get<iTessera[]>(this.tessereUrl);
  }

  public getTesseraByCodice(codice: string) {
    return this.getTessere().pipe(
      map((tessere) => tessere.find((t) => t.codice === codice))
    );
  }

  public getTesseraByUtente(utente: iUtente) {
    return this.getTessere().pipe(
      map((tessere: iTessera[]) =>
        tessere.find((t) => t.utente.id === utente.id)
      )
    );
  }

  public createTessera(
    rivenditoreId: number,
    utenteId: number
  ): Observable<iTessera> {
    return this.http.post<iTessera>(this.tessereUrl, {
      rivenditoreId: rivenditoreId,
      utenteId: utenteId,
    });
  }

  public rinnovaTessera(tessera: iTessera) {
    return this.http.put(`${this.tessereUrl}/${tessera.id}`, tessera);
  }

  public deleteTessera(id: number) {
    return this.http.delete(`${this.tessereUrl}/${id}`);
  }
}
