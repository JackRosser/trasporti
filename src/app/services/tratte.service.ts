import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { iTratta } from '../interfaces/i-tratta';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class TratteService {
  tratteUrl: string = environment.remoteTratte;

  constructor(private http: HttpClient) {}

  public getTratte(): Observable<iTratta[]> {
    return this.http.get<iTratta[]>(this.tratteUrl);
  }

  public getTrattaById(id: number): Observable<iTratta> {
    return this.getTratte().pipe(
      map((tratte: iTratta[]) => {
        const tratta = tratte.find((t) => t.id === id);
        if (!tratta) {
          throw new Error(`Tratta with id ${id} not found`);
        }
        return tratta;
      })
    );
  }

  public createTratta(tratta: Partial<iTratta>): Observable<iTratta> {
    return this.http.post<iTratta>(this.tratteUrl, tratta);
  }

  public updateTratta(tratta: iTratta) {
    return this.http.put<iTratta>(`${this.tratteUrl}/${tratta.id}`, tratta);
  }

  public deleteTratta(id: number) {
    return this.http.delete(`${this.tratteUrl}/${id}`);
  }
}
