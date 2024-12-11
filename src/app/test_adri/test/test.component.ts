import { Component } from '@angular/core';
import { TratteService } from '../../services/tratte.service';
import { iTratta } from '../../interfaces/i-tratta';
import { RivenditoriService } from '../../services/rivenditori.service';
import { iRivFisico } from '../../interfaces/i-riv-fisico';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss',
})
export class TestComponent {
  constructor(
    private tratteSvc: TratteService,
    private rivenditoriSvc: RivenditoriService
  ) {}

  tratte!: iTratta[];
  tratta: Partial<iTratta> = {
    partenza: 'Prova partenza',
    capolinea: 'Prova capolinea',
    durata: '00:30',
    percorrenze: [],
  };

  tratta2!: iTratta;

  rivFisico: Partial<iRivFisico> = {
    giornoChiusura: 'MONDAY',
    oraApertura: '10:00:00',
    oraChiusura: '20:00:00',
    tipo: 'fisico',
  };

  ngOnInit() {
    // test getTratte
    this.tratteSvc.getTratte().subscribe((res) => {
      console.log(res);
    });

    // test getTrattaById
    this.tratteSvc.getTrattaById(252).subscribe((res) => {
      if (res) {
        this.tratta2 = res;
        console.log(this.tratta2);

        this.tratta2.capolinea = 'Prova modifica';
      }
    });

    // test getRivenditori
    this.rivenditoriSvc.getRivenditori().subscribe((res) => {
      console.log(res);
    });
  }

  inserisciTratta() {
    // test postTratta (commentata se no inserisce continuamente)
    this.tratteSvc.createTratta(this.tratta).subscribe();
  }

  modificaTratta() {
    this.tratteSvc.updateTratta(this.tratta2).subscribe();
  }

  cancellaTratta() {
    this.tratteSvc.deleteTratta(205).subscribe();
  }

  creaRivenditoreFisico() {
    this.rivenditoriSvc.createRivenditoreFisico(this.rivFisico).subscribe();
  }
}
