import { iRivenditore } from './../interfaces/i-rivenditore';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { map, Observable } from 'rxjs';
import { iRivFisico } from '../interfaces/i-riv-fisico';

@Injectable({
  providedIn: 'root',
})
export class RivenditoriService {
  constructor(private http: HttpClient) {}

  rivenditoriUrl: string = environment.remoteRivenditori;

  public getRivenditori(): Observable<iRivenditore[]> {
    return this.http.get<iRivenditore[]>(this.rivenditoriUrl);
  }

  public getRivenditoreById(id: number): Observable<iRivenditore> {
    return this.getRivenditori().pipe(
      map((rivenditori: iRivenditore[]) => {
        const rivenditore = rivenditori.find((r) => r.id === id);
        if (!rivenditore) {
          throw new Error(`Rivenditore with id ${id} not found`);
        }
        return rivenditore;
      })
    );
  }

  public getRivFisici(): Observable<iRivenditore[]> {
    return this.getRivenditori().pipe(
      map((rivenditori) => rivenditori.filter((r) => r.tipo === 'RivFisico'))
    );
  }

  public getRivAutomatici(): Observable<iRivenditore[]> {
    return this.getRivenditori().pipe(
      map((rivenditori) =>
        rivenditori.filter((r) => r.tipo === 'RivAutomatico')
      )
    );
  }

  public createRivenditoreFisico(
    rivFisico: Partial<iRivenditore>
  ): Observable<iRivenditore> {
    return this.http.post<iRivenditore>(this.rivenditoriUrl, rivFisico);
  }

  public createRivenditoreAutomatico(): Observable<string> {
    return this.http.post<string>(this.rivenditoriUrl, {
      tipo: 'RivAutomatico',
    });
  }
}
