import { BigliettiService } from './../../services/biglietti.service';
import { RivenditoriService } from './../../services/rivenditori.service';
import { Component } from '@angular/core';
import { TratteService } from '../../services/tratte.service';
import { iRivenditore } from '../../interfaces/i-rivenditore';
import { iTratta } from '../../interfaces/i-tratta';

@Component({
  selector: 'app-bus',
  templateUrl: './bus.component.html',
  styleUrl: './bus.component.scss',
})
export class BusComponent {
  constructor(
    private tratteSvc: TratteService,
    private rivenditoriSvc: RivenditoriService,
    private bigliettiSvc: BigliettiService
  ) {}

  trattaId: number = 0;
  rivenditoreId: number = 0;

  rivenditori!: iRivenditore[];
  tratte!: iTratta[];

  ngOnInit() {
    this.tratteSvc.getTratte().subscribe((res) => (this.tratte = res));
    this.rivenditoriSvc
      .getRivenditori()
      .subscribe((res) => (this.rivenditori = res));
  }

  onSubmit() {
    this.bigliettiSvc
      .creaGiornalierio(this.rivenditoreId, this.trattaId)
      .subscribe({
        next: (res) => {
          alert(
            `Biglietto creato con successo! Codice: ${res.codice} - Da attivare: ${res.daAttivare} - Scadenza: ${res.scadenza}`
          );
        },
        error: (err) => {
          alert('Errore nella richiesta');
        },
      });
  }
}
