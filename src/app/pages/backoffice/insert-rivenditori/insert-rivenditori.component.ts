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

  onSubmit(): void {
    if (this.formData.serviceType === 'fisico') {
      const rivFisico: Partial<iRivFisico> = {
        tipo: 'RivFisico',
        giornoChiusura: this.formData.giornoChiusura,
        oraApertura: this.formData.oraApertura,
        oraChiusura: this.formData.oraChiusura,
      };

      this.rivenditoriService.createRivenditoreFisico(rivFisico).subscribe(
        (res) => {
          alert(
            `Rivenditore fisico aggiunto: Giorno chiusura: ${res.giornoChiusura} - Orario apertura: ${res.oraApertura} - Orario chiusura: ${res.oraChiusura}`
          );
        },
        (error) => {
          console.error(
            "Errore durante l'aggiunta del rivenditore fisico:",
            error
          );
        }
      );
    } else if (this.formData.serviceType === 'automatico') {
      const rivAutomatico: Partial<iRivAutomatico> = {
        tipo: 'RivAutomatico',
        attivo: this.formData.attivo,
      };

      this.rivenditoriService.createRivenditoreAutomatico().subscribe(
        (res) => {
          alert(
            `Rivenditore automatico aggiunto: ${res.tipo} - attivo: ${res.attivo}`
          );
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
