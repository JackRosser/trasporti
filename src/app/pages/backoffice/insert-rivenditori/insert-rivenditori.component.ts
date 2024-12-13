import { Component } from '@angular/core';
import { RivenditoriService } from '../../../services/rivenditori.service';
import { iRivFisico } from '../../../interfaces/i-riv-fisico';
import { iRivAutomatico } from '../../../interfaces/i-riv-automatico';

@Component({
  selector: 'app-insert-rivenditori',
  templateUrl: './insert-rivenditori.component.html',
  styleUrl: './insert-rivenditori.component.scss',
})
export class InsertRivenditoriComponent {
  formData: {
    serviceType: string;
    physicalName?: string;
    giornoChiusura?: number;
    oraApertura?: string;
    oraChiusura?: string;
    attivo?: boolean;
    zone: string;
  } = {
    serviceType: '',
    zone: '',
  };

  constructor(private rivenditoriService: RivenditoriService) {}

  onSubmit(formValue: any): void {
    console.log('Form submit chiamato con i valori:', formValue);
    if (formValue.serviceType === 'fisico') {
      const rivFisico: Partial<iRivFisico> = {
        tipo: 'RivFisico',
        giornoChiusura: formValue.giornoChiusura,
        oraApertura: formValue.oraApertura,
        oraChiusura: formValue.oraChiusura,
      };

      this.rivenditoriService.createRivenditoreFisico(rivFisico).subscribe(
        (response) => {
          console.log('Rivenditore fisico aggiunto:', response);
        },
        (error) => {
          console.error(
            "Errore durante l'aggiunta del rivenditore fisico:",
            error
          );
        }
      );
    } else if (formValue.serviceType === 'automatico') {
      const rivAutomatico: Partial<iRivAutomatico> = {
        tipo: 'RivAutomatico',
        attivo: formValue.attivo,
      };

      this.rivenditoriService.createRivenditoreAutomatico().subscribe(
        (response) => {
          console.log('Rivenditore automatico aggiunto:', response);
        },
        (error) => {
          console.error(
            "Errore durante l'aggiunta del rivenditore automatico:",
            error
          );
        }
      );
    }
  }
}
