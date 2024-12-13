import { Component, OnInit } from '@angular/core';
import { MezziService } from '../../../services/mezzi.service';
import { iVeicolo } from '../../../interfaces/frontend/i-veicolo';
import { iMezzo } from '../../../interfaces/i-mezzo';
import { environment } from '../../../../environments/environment.development';
import { TratteService } from '../../../services/tratte.service';
import { StatomezzoService } from '../../../services/statomezzo.service';
import { iTratta } from '../../../interfaces/i-tratta';

@Component({
  selector: 'app-mezzi',
  templateUrl: './mezzi.component.html',
  styleUrl: './mezzi.component.scss',
})
export class MezziComponent implements OnInit {
  bus!: iMezzo[];
  tram!: iMezzo[];
  toggleBus: boolean = true;
  toggleTram: boolean = false;

  buttonClassBus: string = 'p-2 rounded-md bg-blue-500 text-white';
  buttonClassTram: string =
    'bg-white p-2 rounded-md hover:bg-blue-500 hover:text-white';

  constructor(
    private tratteSvc: TratteService,
    private mezziSvc: MezziService,
    private statoMezziSvc: StatomezzoService,
    private tratteService: TratteService
  ) {}

  tratte!: iTratta[];

  changeInActiveTram(): void {
    this.buttonClassBus =
      'bg-white p-2 rounded-md hover:bg-blue-500 hover:text-white';
    this.buttonClassTram = 'p-2 rounded-md bg-blue-500 text-white';
    this.toggleBus = !this.toggleBus;
    this.toggleTram = !this.toggleTram;
  }
  changeInActiveBus(): void {
    this.buttonClassTram =
      'bg-white p-2 rounded-md hover:bg-blue-500 hover:text-white';
    this.buttonClassBus = 'p-2 rounded-md bg-blue-500 text-white';
    this.toggleBus = !this.toggleBus;
    this.toggleTram = !this.toggleTram;
  }

  busList: string[] = environment.busImages;
  tramList: string[] = environment.tramImages;
  randomIndexBus: number[] = [];
  randomIndexTram: number[] = [];

  // ALLO START
  ngOnInit(): void {
    this.mezziSvc.bu$.subscribe((list) => {
      this.bus = list;
      for (let i = 0; i < this.bus.length; i++) {
        let randomNumBus: number = Math.floor(Math.random() * 4);
        this.randomIndexBus.push(randomNumBus);
      }
    });
    this.mezziSvc.tram$.subscribe((list) => {
      this.tram = list;
      for (let i = 0; i < this.tram.length; i++) {
        let randomNumTram: number = Math.floor(Math.random() * 4);
        this.randomIndexTram.push(randomNumTram);
      }
    });
  }

  public mettiInServizio(mezzo: iMezzo) {
    let random = Math.floor(Math.random() * 30) + 1;
    this.statoMezziSvc
      .createServizio(mezzo.id, random)
      .pipe((res) => {
        alert('Mezzo messo in servizio!');
        return res;
      })
      .subscribe((res) => {
        console.log('SIamoqua');
      });
  }
  public mettiInManutenzione(mezzo: iMezzo) {
    this.statoMezziSvc
      .createManutenzione(mezzo.id, 'Cambio gomme')
      .pipe((res) => {
        alert('Mezzo in manutenzione!');

        return res;
      })
      .subscribe((res) => {
        console.log('SIamoqua');
      });
  }
}
