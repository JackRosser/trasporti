import { Component } from '@angular/core';

@Component({
  selector: 'app-inserimento-mezzi',
  templateUrl: './inserimento-mezzi.component.html',
  styleUrl: './inserimento-mezzi.component.scss',
})
export class InserimentoMezziComponent {
  formData: {
    seatQuantity: number | null;
    readyToCirculate: string;
    code: string;
  } = {
    seatQuantity: null,
    readyToCirculate: '',
    code: '',
  };

  onSubmit(formValue: any): void {
    if (!formValue.seatQuantity || formValue.seatQuantity <= 0) {
      alert('La quantità di posti a sedere deve essere un valore positivo.');
      return;
    }

    if (!formValue.readyToCirculate) {
      alert('Si prega di selezionare se è pronto a circolare.');
      return;
    }

    if (!formValue.code) {
      alert('Il campo Codice è obbligatorio.');
      return;
    }

    // Gestione dei dati inviati, ad esempio invio al server
    console.log('Form inviato con successo:', formValue);
    alert('Form inviato con successo!');
  }
}
