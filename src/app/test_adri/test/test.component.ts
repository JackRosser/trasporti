import { Component } from '@angular/core';
import { TratteService } from '../../services/tratte.service';
import { iTratta } from '../../interfaces/i-tratta';
import { RivenditoriService } from '../../services/rivenditori.service';
import { iRivFisico } from '../../interfaces/i-riv-fisico';
import { iRivAutomatico } from '../../interfaces/i-riv-automatico';
import { MezziService } from '../../services/mezzi.service';
import { iRivenditore } from '../../interfaces/i-rivenditore';
import { iMezzo } from '../../interfaces/i-mezzo';
import { UtentiService } from '../../services/utenti.service';
import { iUtente } from '../../interfaces/i-utente';
import { TessereService } from '../../services/tessere.service';
import { iTessera } from '../../interfaces/i-tessera';
import { BigliettiService } from '../../services/biglietti.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss',
})
export class TestComponent {
  constructor(
    private tratteSvc: TratteService,
    private rivenditoriSvc: RivenditoriService,
    private mezziSvc: MezziService,
    private utentiSvc: UtentiService,
    private tessereSvc: TessereService,
    private bigliettiSvc: BigliettiService
  ) {}

  tratta!: iTratta;
  rivenditore!: iRivenditore;

  ngOnInit() {
    // get tutte le tratte
    // this.tratteSvc.getTratte().subscribe((res) => console.log('Tratte', res));

    // get tratta per id
    this.tratteSvc.getTrattaById(2).subscribe((res) => (this.tratta = res));

    // inserimento nuova tratta
    // let nuovaTratta: Partial<iTratta> = {
    //   capolinea: 'prova capolinea',
    //   partenza: 'prova partenza',
    //   durata: '00:45:00',
    // };
    // this.tratteSvc
    //   .createTratta(nuovaTratta)
    //   .subscribe((res) => console.log('Tratta creata', res));

    // get tutti i mezzi
    // this.mezziSvc.getMezzi().subscribe((res) => console.log('Mezzi', res));

    // get mezzo per id
    // this.mezziSvc
    //   .getMezzoById(1)
    //   .subscribe((res) => console.log('mezzo per id', res));

    // insert mezzo
    // this.mezziSvc
    //   .createMezzo('tram', 170)
    //   .subscribe((res) => console.log('tram creato ', res));

    // get tutti i rivenditori
    // this.rivenditoriSvc
    //   .getRivenditori()
    //   .subscribe((res) => console.log('Rivenditori', res));

    // get rivenditore per id
    // this.rivenditoriSvc
    //   .getRivenditoreById(154)
    //   .subscribe((res) => console.log('rivenditore per id', res));
    this.rivenditoriSvc
      .getRivenditoreById(155)
      .subscribe((res) => (this.rivenditore = res));

    // crea rivenditore fisico
    // let rivFisico: Partial<iRivFisico> = {
    //   giornoChiusura: 2,
    //   oraApertura: '10:00:00',
    //   oraChiusura: '18:00:00',
    //   tipo: 'RivFisico',
    // };
    // this.rivenditoriSvc
    //   .createRivenditoreFisico(rivFisico)
    //   .subscribe((res) => console.log('rivFisico creato', res));

    // this.rivenditoriSvc
    //   .createRivenditoreAutomatico()
    //   .subscribe((res) => console.log('riv automatico creato ', res));

    // get tutti biglietti
    // this.bigliettiSvc
    //   .getBiglietti()
    //   .subscribe((res) => console.log('tutti biglietti/abbonamenti ', res));
    // this.bigliettiSvc
    //   .getAbbonamenti()
    //   .subscribe((res) => console.log('tutti abbonamenti', res));
    // this.bigliettiSvc
    //   .getGiornalieri()
    //   .subscribe((res) => console.log('tutti giornalieri ', res));
    // insert giornaliero
  }

  // creaGiornaliero() {
  //   if (this.tratta && this.rivenditore) {
  //     this.bigliettiSvc
  //       .creaGiornalierio(this.rivenditore.id, this.tratta.id)
  //       .subscribe((res) => console.log('giornaliero creato', res));
  //   }
  // }

  // creaAbbonamento() {
  //   if (this.tratta && this.rivenditore) {
  //     let periodicy = 'mensile';
  //     this.bigliettiSvc
  //       .creaAbbonamento(this.rivenditore.id, 2, 57, periodicy)
  //       .subscribe((res) => console.log('abbonamento creato ', res));
  //   }
  // }
}
