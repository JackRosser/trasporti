import { Component } from '@angular/core';
import { TratteService } from '../../services/tratte.service';
import { iTratta } from '../../interfaces/i-tratta';
import { RivenditoriService } from '../../services/rivenditori.service';
import { iRivFisico } from '../../interfaces/i-riv-fisico';
import { iRivAutomatico } from '../../interfaces/i-riv-automatico';
import { MezziService } from '../../services/mezzi.service';
import { iRivenditore } from '../../interfaces/i-rivenditore';
import { iMezzo } from '../../interfaces/i-mezzo';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss',
})
export class TestComponent {
  constructor(
    private tratteSvc: TratteService,
    private rivenditoriSvc: RivenditoriService,
    private mezziSvc: MezziService
  ) {}

  tratte!: iTratta[];
  rivenditori!: iRivenditore[];
  mezzi!: iMezzo[];

  mezzo!: iMezzo;
  tratta: Partial<iTratta> = {
    partenza: 'Prova partenza',
    capolinea: 'Prova capolinea',
    durata: '00:30',
    percorrenze: [],
  };

  tratta2!: iTratta;

  rivFisico: Partial<iRivFisico> = {
    giornoChiusura: 1,
    oraApertura: '10:00:00',
    oraChiusura: '20:00:00',
    tipo: 'RivFisico',
  };

  rivenditoreById!: iRivenditore;
  rivenditoreById2!: iRivenditore;

  ngOnInit() {
    // test getTratte
    this.tratteSvc.getTratte().subscribe((res) => {
      console.log(res);
    });

    // test getTrattaById
    this.tratteSvc.getTrattaById(1).subscribe((res) => {
      if (res) {
        this.tratta2 = res;
        console.log(this.tratta2);
        this.tratta2.capolinea = 'Prova modifica';
      }
    });

    // test getRivenditori
    this.rivenditoriSvc.getRivenditori().subscribe((res) => {
      if (res) this.rivenditori = res;
      console.log(this.rivenditori);
    });

    // rivenditore fisico
    this.rivenditoriSvc.getRivenditoreById(13).subscribe((res) => {
      if (res) this.rivenditoreById = res;
      console.log(this.rivenditoreById);
    });

    // rivenditore automatico
    this.rivenditoriSvc.getRivenditoreById(8).subscribe((res) => {
      if (res) this.rivenditoreById2 = res;
      console.log(this.rivenditoreById2);
    });

    // test getRivFisici
    this.rivenditoriSvc.getRivFisici().subscribe((res) => console.log(res));

    // test getRivAutomatici
    this.rivenditoriSvc.getRivAutomatici().subscribe((res) => console.log(res));

    // testgetMezzi
    this.mezziSvc.getMezzi().subscribe((res) => console.log(res));

    // test getMezzoById
    this.mezziSvc.getMezzoById(1).subscribe((res) => {
      this.mezzo = res;
      console.log(res);
    });
  }

  inserisciTratta() {
    // test postTratta
    this.tratteSvc.createTratta(this.tratta).subscribe();
  }

  modificaTratta() {
    this.tratteSvc.updateTratta(this.tratta2).subscribe();
  }

  cancellaTratta() {
    this.tratteSvc.deleteTratta(103).subscribe();
  }

  // // test createRivenditoreFisico
  creaRivenditoreFisico() {
    this.rivenditoriSvc.createRivenditoreFisico(this.rivFisico).subscribe();
  }

  // // test creaRivenditoreAutomatico
  creaRivenditoreAutomatico() {
    this.rivenditoriSvc.createRivenditoreAutomatico().subscribe();
  }

  modificaRivenditoreAutomatico() {
    let riv: iRivAutomatico = this.rivenditoreById2 as iRivAutomatico;
    riv.attivo = false;
    this.rivenditoriSvc.updateRivAutomatico(riv).subscribe();
  }

  modificaRivenditoreFisico() {
    let riv: iRivFisico = this.rivenditoreById as iRivFisico;
    riv.giornoChiusura = 1;
    this.rivenditoriSvc.updateRivFisico(riv).subscribe();
  }

  cancellaRivenditore() {
    this.rivenditoriSvc.deleteRivenditore(52).subscribe();
  }

  // test crea mezzo
  creaMezzo() {
    this.mezziSvc.createMezzo('tram', 666).subscribe();
  }

  // test delete mezzo
  cancellaMezzo() {
    this.mezziSvc.deleteMezzo(103).subscribe();
  }

  modificaMezzo() {
    this.mezzo.codice = 1000;
    this.mezziSvc.updateMezzo(this.mezzo).subscribe();
  }
}
