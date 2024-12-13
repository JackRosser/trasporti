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

  utenteById1!: iUtente;

  newUtente: Partial<iUtente> = {
    nome: 'Mario',
    cognome: 'Rossi',
    email: 'mario.rossi@example.com',
    dataNascita: '1990-03-01',
    tessera: null,
    ruolo: 'utente',
  };

  tesseraRinnovo!: iTessera;

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
    this.rivenditoriSvc.getRivenditoreById(164).subscribe((res) => {
      if (res) this.rivenditoreById = res;
      console.log(this.rivenditoreById);
    });

    // rivenditore automatico
    this.rivenditoriSvc.getRivenditoreById(155).subscribe((res) => {
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

    // test getUtenti
    this.utentiSvc.getUtenti().subscribe((res) => console.log(res));

    // test getUtenteById
    this.utentiSvc.getUtenteById(57).subscribe((res) => {
      if (res) this.utenteById1 = res;
      console.log(this.utenteById1);

      // getTesseraByUtente
      this.tessereSvc
        .getTesseraByUtente(this.utenteById1)
        .subscribe((res) => console.log('tessera utente', res));
    });

    // test geet tessere
    this.tessereSvc.getTessere().subscribe((res) => console.log(res));

    // test tessera per codice
    this.tessereSvc.getTesseraByCodice('T-HSOJVAVDQY').subscribe((res) => {
      if (res) {
        this.tesseraRinnovo = res;
        console.log('tessera per codice', res);
        // test abbonamenti per tessera
        // this.bigliettiSvc
        //   .getAbbonamentiByTessera(this.tesseraRinnovo)
        //   .subscribe((res) => console.log('abbonamenti per tessera:', res));
      }
    });

    // test get biglietti
    this.bigliettiSvc.getBiglietti().subscribe((res) => console.log(res));

    // get biglietti giornalieri
    this.bigliettiSvc.getGiornalieri().subscribe((res) => console.log(res));

    // get biglietti abbonamenti
    this.bigliettiSvc.getAbbonamenti().subscribe((res) => console.log(res));

    // get biglietto byId
    this.bigliettiSvc
      .getGiornalieroById(102)
      .subscribe((res) => console.log('Giornaliero per id', res));

    // get abbonamento byId
    this.bigliettiSvc
      .getAbbonamentoById(205)
      .subscribe((res) => console.log('Abbonamento per id', res));
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

  // test creautente
  creaUtente() {
    this.utentiSvc.createUtente(this.newUtente).subscribe();
  }

  // test modifica utente
  modificaUtente() {
    this.utenteById1.cognome = 'Biondi';
    this.utentiSvc.updateUtente(this.utenteById1).subscribe();
  }

  // test cancella utente
  cancellaUtente() {
    this.utentiSvc.deleteUtente(70).subscribe();
  }

  // test createssera
  createssera() {
    this.tessereSvc
      .createTessera(this.rivenditoreById.id, this.utenteById1.id)
      .subscribe();
  }

  // test rinnovatessera
  rinnovatessera() {
    this.tessereSvc.rinnovaTessera(this.tesseraRinnovo).subscribe();
  }

  // test deletetessera
  cancellatessera() {
    this.tessereSvc.deleteTessera(this.tesseraRinnovo.id).subscribe();
  }

  cancellaBiglietto() {
    this.bigliettiSvc.deleteBiglietto(211).subscribe();
  }

  creaGiornaliero() {
    if (this.rivenditoreById.id && this.tratta2.id) {
      this.bigliettiSvc
        .creaGiornalierio(this.rivenditoreById.id, this.tratta2.id)
        .subscribe();
    }
  }

  creaAbbonamento() {
    if (
      this.rivenditoreById.id &&
      this.tesseraRinnovo.id &&
      this.utenteById1.id
    ) {
      this.bigliettiSvc.creaAbbonamento(152, 52, 'mensile').subscribe();
    }
  }
}
