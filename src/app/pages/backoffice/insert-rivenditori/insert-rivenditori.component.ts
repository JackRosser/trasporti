import { Component } from '@angular/core';

@Component({
  selector: 'app-insert-rivenditori',
  templateUrl: './insert-rivenditori.component.html',
  styleUrl: './insert-rivenditori.component.scss',
})
export class InsertRivenditoriComponent {
  formData: {
    serviceType: string;
    physicalName?: string;
    timeSlot?: string;
    zone: string;
  } = {
    serviceType: '',
    zone: '',
  };

  onSubmit(formValue: any): void {
    if (
      this.formData.serviceType === 'fisico' &&
      (!formValue.physicalName || !formValue.timeSlot)
    ) {
      alert('Per il servizio fisico, i campi Nome e Orari sono obbligatori.');
      return;
    }

    if (!formValue.zone) {
      alert('Il campo Zona è obbligatorio.');
      return;
    }

    // Qui puoi gestire il submit dei dati, ad esempio inviarli a un server
    console.log('Form inviato con successo:', formValue);
    alert('Form inviato con successo!');
  }
}
