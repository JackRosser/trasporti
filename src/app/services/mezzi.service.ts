import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { iVeicolo } from '../interfaces/frontend/i-veicolo';

@Injectable({
  providedIn: 'root'
})
export class MezziService {

  constructor(private http: HttpClient) {this.getTram(); this.getBus()}

private tramBh = new BehaviorSubject<iVeicolo[]>([]);
tram$ = this.tramBh.asObservable();

private busBh = new BehaviorSubject<iVeicolo[]>([]);
bu$ = this.busBh.asObservable()

private getTram():void {
this.http.get<iVeicolo[]>(environment.tramUrl).subscribe(list => {
  this.tramBh.next(list)
})
}
private getBus():void {
this.http.get<iVeicolo[]>(environment.busUrl).subscribe(list => {
  this.busBh.next(list)
})
}

}
