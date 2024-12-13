import { Component } from '@angular/core';
import { TratteService } from '../../../services/tratte.service';
import { iTratta } from '../../../interfaces/i-tratta';

@Component({
  selector: 'app-insert-tratta',
  templateUrl: './insert-tratta.component.html',
  styleUrls: ['./insert-tratta.component.scss'],
})
export class InsertTrattaComponent {
  formData: {
    departure: string;
    destination: string;
    duration: string;
  } = {
    departure: '',
    destination: '',
    duration: '',
  };

  tratte: iTratta[] = []; // Array per memorizzare le tratte recuperate dal server

  constructor(private tratteService: TratteService) {}

  // Metodo per inviare il form
  onSubmit(formValue: any): void {
    if (!formValue.departure || !formValue.destination || !formValue.duration) {
      alert(
        'Tutti i campi sono obbligatori. Si prega di compilare correttamente il form.'
      );
      return;
    }

    const tratta: Partial<iTratta> = {
      partenza: formValue.departure,
      capolinea: formValue.destination,
      durata: formValue.duration,
    };

    this.tratteService.createTratta(tratta).subscribe(
      (response) => {
        console.log('Risposta dal server:', response);
        alert('Tratta aggiunta con successo!');
        this.getTratte(); // Aggiorna la lista delle tratte
      },
      (error) => {
        console.error('Errore:', error);
        alert("Errore durante l'aggiunta della tratta.");
      }
    );
  }

  // Metodo per recuperare tutte le tratte
  getTratte(): void {
    this.tratteService.getTratte().subscribe(
      (response) => {
        console.log('Tratte recuperate:', response);
        this.tratte = response;
      },
      (error) => {
        console.error('Errore durante il recupero delle tratte:', error);
        alert('Errore durante il recupero delle tratte.');
      }
    );
  }
}
