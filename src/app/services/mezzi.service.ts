import { iMezzo } from './../interfaces/i-mezzo';
import { iAutobus } from './../interfaces/i-autobus';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { iVeicolo } from '../interfaces/frontend/i-veicolo';

@Injectable({
  providedIn: 'root',
})
export class MezziService {
  constructor(private http: HttpClient) {
    this.getBus(), this.getTram();
  }

  private tramBh = new BehaviorSubject<iMezzo[]>([]);
  tram$ = this.tramBh.asObservable();

  mezziUrl: string = environment.remoteMezzi;

  private busBh = new BehaviorSubject<iMezzo[]>([]);
  bu$ = this.busBh.asObservable();

  // crud nuove
  public getMezzi(): Observable<iMezzo[]> {
    return this.http.get<iMezzo[]>(this.mezziUrl);
  }

  public getBus(): void {
    this.getMezzi()
      .pipe(
        tap((list) => {
          let bus: iMezzo[] = list.filter((m) => m.tipo === 'Autobus');
          this.busBh.next(bus);
        })
      )
      .subscribe();
  }
  public getTram(): void {
    this.getMezzi()
      .pipe(
        tap((list) => {
          let tram: iMezzo[] = list.filter((m) => m.tipo === 'Tram');
          this.tramBh.next(tram);
        })
      )
      .subscribe();
  }

  public getMezzoById(id: number): Observable<iMezzo> {
    return this.getMezzi().pipe(
      map((mezzi: iMezzo[]) => {
        const mezzo: iMezzo | undefined = mezzi.find((t) => t.id === id);
        if (!mezzo) {
          throw new Error(`Mezzo with id ${id} not found`);
        }
        return mezzo;
      })
    );
  }

  public createMezzo(tipo: string, codice: number): Observable<iMezzo> {
    return this.http.post<iMezzo>(this.mezziUrl, {
      tipo: tipo,
      codice: codice,
    });
  }

  public updateMezzo(mezzo: iMezzo) {
    return this.http.put<iMezzo>(`${this.mezziUrl}/${mezzo.id}`, mezzo);
  }

  public deleteMezzo(id: number): Observable<iMezzo> {
    return this.http.delete<iMezzo>(`${this.mezziUrl}/${id}`);
  }
}
