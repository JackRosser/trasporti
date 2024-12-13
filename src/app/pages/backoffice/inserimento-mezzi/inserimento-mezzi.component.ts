import { Component, OnInit } from '@angular/core';
import { MezziService } from '../../../services/mezzi.service';
import { iMezzo } from '../../../interfaces/i-mezzo';
import { eStato } from '../../../interfaces/e-stato';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inserimento-mezzi',
  templateUrl: './inserimento-mezzi.component.html',
  styleUrls: ['./inserimento-mezzi.component.scss'],
})
export class InserimentoMezziComponent implements OnInit {
  formData: {
    tipo: string; // Aggiungi questa proprietà
    codice: number;
  } = {
    tipo: '', // Inizializza come stringa vuota
    codice: 0,
  };

  mezzi: iMezzo[] = []; // Array per memorizzare i mezzi recuperati dal server

  constructor(private mezziService: MezziService, private router: Router) {}

  ngOnInit(): void {
    this.getMezzi(); // Recupera i mezzi all'inizializzazione del componente
  }

  // Metodo per inviare il form
  onSubmit(formValue: any): void {
    if (!this.formData.tipo) {
      alert('Il tipo del mezzo è obbligatorio.');
      return;
    }

    if (this.formData.codice === 0) {
      alert('Il tipo del mezzo è obbligatorio.');
      return;
    }

    this.mezziService
      .createMezzo(this.formData.tipo, this.formData.codice)
      .subscribe(
        (res) => {
          alert(
            `Mezzo aggiunto con successo! Mezzo: ${res.tipo} - Codice: ${res.codice} - Stato: ${res.stato} - Capienza: ${res.capienza}`
          );
          setTimeout(() => {
            this.router.navigate(['/parco-mezzi']);
          }, 1500);
          this.getMezzi(); // Aggiorna la lista dei mezzi
        },
        (error) => {
          alert('Errore nella richiesta!');
        }
      );
  }

  // Metodo per recuperare tutti i mezzi
  getMezzi(): void {
    this.mezziService.getMezzi().subscribe(
      (response) => {
        console.log('Mezzi recuperati:', response);
        this.mezzi = response;
        this.router.navigate(['/parco-mezzi']);
      },
      (error) => {
        console.error('Errore durante il recupero dei mezzi:', error);
        alert('Errore durante il recupero dei mezzi.');
      }
    );
  }
}
