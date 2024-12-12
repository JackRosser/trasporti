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
    tipo: 'fisico',
  };

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

    // // test getRivenditori
    // this.rivenditoriSvc.getRivenditori().subscribe((res) => {
    //   if (res) this.rivenditori = res;
    //   console.log(this.rivenditori);
    // });

    // testgetMezzi
    this.mezziSvc.getMezzi().subscribe((res) => console.log(res));

    // test getMezzoById
    this.mezziSvc.getMezzoById(54).subscribe((res) => {
      this.mezzo = res;
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
    this.tratteSvc.deleteTratta(99).subscribe();
  }

  // // test createRivenditoreFisico
  // creaRivenditoreFisico() {
  //   // errore 500 empty_response
  //   this.rivenditoriSvc.createRivenditoreFisico(this.rivFisico).subscribe();
  // }

  // // test creaRivenditoreAutomatico
  // creaRivenditoreAutomatico() {
  //   // da testare
  //   this.rivenditoriSvc.createRivenditoreAutomatico().subscribe();
  // }

  // test crea mezzo
  creaMezzo() {
    this.mezziSvc.createMezzo('tram', 150).subscribe();
  }

  // test delete mezzo
  cancellaMezzo() {
    this.mezziSvc.deleteMezzo(52).subscribe();
  }

  modificaMezzo() {
    this.mezzo.codice = 1000;
    this.mezziSvc.updateMezzo(this.mezzo).subscribe();
  }
}
