import { Component, OnInit } from '@angular/core';
import { iTessera } from '../../interfaces/i-tessera';
import { iUtente } from '../../interfaces/i-utente';
import { UtentiService } from '../../services/utenti.service';
import { iRivenditore } from '../../interfaces/i-rivenditore';
import { RivenditoriService } from '../../services/rivenditori.service';
import { TessereService } from '../../services/tessere.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent implements OnInit {
  utente!: iUtente; // Utente con ID 52
  tessera!: iTessera; // Tessera generata
  rivenditori!: iRivenditore[];
  rivenditoreId: number = 0;
  constructor(
    private utentiService: UtentiService,
    private rivendoriSvc: RivenditoriService,
    private tessereSvc: TessereService
  ) {}

  showTessera: boolean = false;

  ngOnInit(): void {
    this.utentiService.loggedUser$.subscribe((loggedUser) => {
      if (loggedUser) {
        this.utente = loggedUser;
        if (this.utente.tessera) {
          this.showTessera = true;
        }
      }
    });

    this.rivendoriSvc.getRivenditori().subscribe((res) => {
      this.rivenditori = res;
    });
  }

  onRichiediTessera(): void {
    if (!this.utente) {
      alert('Utente non trovato.');
      return;
    }

    // Genera un codice casuale
    const codice = Math.random().toString(36).substring(2, 10).toUpperCase();

    // Genera una data di validità casuale (es. 1 anno da oggi)
    const validita = new Date();
    validita.setFullYear(validita.getFullYear() + 1);

    console.log('Tessera generata:', this.tessera);
    alert(
      `Tessera generata con codice: ${codice}, validità: ${validita.toLocaleDateString()}`
    );
  }

  generaTessera() {
    let random: number = Math.floor(
      Math.random() * (this.rivenditori.length + 1)
    );
    if (this.utente) {
      this.tessereSvc
        .createTessera(this.rivenditoreId, this.utente.id)
        .subscribe({
          next: (res) => {
            alert('Tessera generata con successo!');
            this.utente.tessera = res;
            this.showTessera = true;
            this.utentiService.loggedUser$.next(this.utente);
          },
          error: (err) => alert('Errore nella richiesta!'),
        });
    }
  }
}
