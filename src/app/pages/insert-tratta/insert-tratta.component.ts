import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-insert-tratta',
  templateUrl: './insert-tratta.component.html',
  styleUrls: ['./insert-tratta.component.scss'],
})
export class InsertTrattaComponent {
  formData: {
    departure: string;
    destination: string;
    duration: number | null;
  } = {
    departure: '',
    destination: '',
    duration: null,
  };

  constructor(private http: HttpClient) {}

  onSubmit(formValue: any): void {
    if (!formValue.departure || !formValue.destination || !formValue.duration) {
      alert(
        'Tutti i campi sono obbligatori. Si prega di compilare correttamente il form.'
      );
      return;
    }

    if (formValue.duration <= 0) {
      alert('La durata deve essere un valore positivo.');
      return;
    }

    // Invia i dati al server
    this.http.post('http://localhost:8000/tratte', formValue).subscribe(
      (response) => {
        console.log('Risposta dal server:', response);
        alert('Tratta aggiunta con successo!');
      },
      (error) => {
        console.error('Errore:', error);
        alert("Errore durante l'aggiunta della tratta.");
      }
    );
  }
}
