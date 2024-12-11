import { Component } from '@angular/core';

@Component({
  selector: 'app-abbonamento',
  templateUrl: './abbonamento.component.html',
  styleUrl: './abbonamento.component.scss'
})
export class AbbonamentoComponent {
// Oggetto che rappresenta i dati del form
formData = {
  serviceType: '', // Tram o Autobus
  firstName: '',
  lastName: '',
  subscriptionType: '' // Periodicità
};

onSubmit(value: any) {
  console.log('Dati inseriti:', value);
  // Logica per salvare o inviare i dati
}
}
