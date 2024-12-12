import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { map, Observable } from 'rxjs';
import { iBiglietto } from '../interfaces/i-biglietto';
import { iGiornaliero } from '../interfaces/i-giornaliero';
import { iAbbonamento } from '../interfaces/i-abbonamento';
import { iTessera } from '../interfaces/i-tessera';
import { iRivenditore } from '../interfaces/i-rivenditore';
import { iTratta } from '../interfaces/i-tratta';

@Injectable({
  providedIn: 'root',
})
export class BigliettiService {
  constructor(private http: HttpClient) {}

  bigliettiUrl: string = environment.remoteBiglietti;

  public getBiglietti(): Observable<iBiglietto[]> {
    return this.http.get<iBiglietto[]>(this.bigliettiUrl);
  }

  public getGiornalieri(): Observable<iGiornaliero[]> {
    return this.getBiglietti().pipe(
      map(
        (biglietti: iBiglietto[]) =>
          biglietti.filter((b) => b.tipo === 'Giornaliero') as iGiornaliero[]
      )
    );
  }

  public getAbbonamenti(): Observable<iAbbonamento[]> {
    return this.getBiglietti().pipe(
      map(
        (biglietti: iBiglietto[]) =>
          biglietti.filter((b) => b.tipo === 'Abbonamento') as iAbbonamento[]
      )
    );
  }

  public getAbbonamentoById(id: number): Observable<iAbbonamento | undefined> {
    return this.getAbbonamenti().pipe(
      map((abbonamenti) => abbonamenti.find((a) => a.id === id))
    );
  }

  public getGiornalieroById(id: number): Observable<iGiornaliero | undefined> {
    return this.getGiornalieri().pipe(
      map((giornalieri) => giornalieri.find((a) => a.id === id))
    );
  }

  public getAbbonamentiByTessera(
    // da verificare
    tessera: iTessera
  ): Observable<iAbbonamento[]> {
    return this.getAbbonamenti().pipe(
      map((abbonamenti) =>
        abbonamenti.filter((a) => a.tessera.id === tessera.id)
      )
    );
  }

  public deleteBiglietto(id: number) {
    return this.http.delete(`${this.bigliettiUrl}/${id}`);
  }

  public creaGiornalierio(rivenditoreId: number, trattaId: number) {
    return this.http.post(`${this.bigliettiUrl}`, {
      rivenditoreId: rivenditoreId,
      trattaId: trattaId,
      tipo: 'Giornaliero',
    });
  }

  public creaAbbonamento(
    rivenditoreId: number,
    tesseraId: number,
    periodicy: string
  ) {
    return this.http.post(`${this.bigliettiUrl}`, {
      rivenditoreId: rivenditoreId,
      tipo: 'Abbonamento',
      periodicy: periodicy,
      tesseraId: tesseraId,
    });
  }
}
