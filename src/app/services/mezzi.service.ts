import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { iVeicolo } from '../interfaces/frontend/i-veicolo';
import { iMezzo } from '../interfaces/i-mezzo';

@Injectable({
  providedIn: 'root',
})
export class MezziService {
  constructor(private http: HttpClient) {
    // this.getTram();
    // this.getBus();
  }

  private tramBh = new BehaviorSubject<iVeicolo[]>([]);
  tram$ = this.tramBh.asObservable();

  mezziUrl: string = environment.remoteMezzi;

  private busBh = new BehaviorSubject<iVeicolo[]>([]);
  bu$ = this.busBh.asObservable();

  // private getTram(): void {
  //   this.http.get<iVeicolo[]>(environment.tramUrl).subscribe((list) => {
  //     this.tramBh.next(list);
  //   });
  // }
  // private getBus(): void {
  //   this.http.get<iVeicolo[]>(environment.busUrl).subscribe((list) => {
  //     this.busBh.next(list);
  //   });
  // }

  // nuove
  public getMezzi(): Observable<iMezzo[]> {
    return this.http.get<iMezzo[]>(this.mezziUrl);
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
