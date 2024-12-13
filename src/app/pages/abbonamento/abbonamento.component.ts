import { Component } from '@angular/core';
import { iUtente } from '../../interfaces/i-utente';
import { BigliettiService } from '../../services/biglietti.service';
import { UtentiService } from '../../services/utenti.service';
import { ePeriodicy } from '../../interfaces/e-periodicy';
import { iAbbonamento } from '../../interfaces/i-abbonamento';

@Component({
  selector: 'app-abbonamento',
  templateUrl: './abbonamento.component.html',
  styleUrl: './abbonamento.component.scss',
})
export class AbbonamentoComponent {
  formData = {
    serviceType: '',
    firstName: '',
    lastName: '',
    subscriptionType: '',
  };

  utente!: iUtente;
  showSubscriptionOptions = false;

  constructor(
    private bigliettiService: BigliettiService,
    private utentiService: UtentiService
  ) {
    this.utentiService.loggedUser$.subscribe((loggedUser) => {
      if (loggedUser) {
        this.utente = loggedUser;
      }
    });
  }

  onSubmit() {
    if (!this.utente || !this.utente.tessera) {
      alert('Devi avere una tessera valida per acquistare un abbonamento.');
      return;
    }

    this.showSubscriptionOptions = true;
  }

  purchaseSubscription(subscriptionType: string) {
    if (!this.utente || !this.utente.tessera) {
      alert('Devi avere una tessera valida per acquistare un abbonamento.');
      return;
    }

    const rivenditoreId = 159;
    const tesseraId = this.utente.tessera.id;
    const periodicy = this.getPeriodicy(subscriptionType);

    this.bigliettiService
      .creaAbbonamento(rivenditoreId, tesseraId, periodicy)
      .subscribe({
        next: (res: iAbbonamento) => {
          // Tipo esplicito per `res`
          alert('Abbonamento acquistato con successo!');
          if (this.utente.tessera) {
            this.utente.tessera.abbonamento.push(res); // Ora `res` è di tipo `iAbbonamento`
          }
          this.showSubscriptionOptions = false;
        },
        error: (err) => {
          console.error("Errore durante l'acquisto dell'abbonamento:", err);
          alert("Errore durante l'acquisto dell'abbonamento.");
        },
      });
  }

  getPeriodicy(subscriptionType: string): ePeriodicy {
    switch (subscriptionType) {
      case 'mensile':
        return ePeriodicy.MENSILE;
      case 'bimestrale':
        return ePeriodicy.BIMESTRALE;
      case 'trimestrale':
        return ePeriodicy.TRIMESTRALE;
      case 'annuale':
        return ePeriodicy.ANNUALE;
      default:
        throw new Error('Tipo di abbonamento non valido');
    }
  }
}
