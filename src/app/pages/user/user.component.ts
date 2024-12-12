import { Component, OnInit } from '@angular/core';
import { iTessera } from '../../interfaces/i-tessera';
import { iUtente } from '../../interfaces/i-utente';
import { UtentiService } from '../../services/utenti.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent implements OnInit {
  utente: iUtente | null = null; // Utente con ID 52
  tessera: Partial<iTessera> | null = null; // Tessera generata

  constructor(private utentiService: UtentiService) {}

  ngOnInit(): void {
    // Recupera i dati dell'utente con ID 52
    this.utentiService.getUtenteById(52).subscribe(
      (utente) => {
        this.utente = utente;
        console.log('Utente recuperato:', utente);
      },
      (error) => {
        console.error("Errore nel recupero dell'utente:", error);
      }
    );
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

    // Crea la tessera
    this.tessera = {
      codice: codice,
      validita: validita,
      utente: this.utente,
    };

    console.log('Tessera generata:', this.tessera);
    alert(
      `Tessera generata con codice: ${codice}, validità: ${validita.toLocaleDateString()}`
    );
  }
}
