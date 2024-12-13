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
  ) {}

  ngOnInit() {
    this.utentiService.loggedUser$.subscribe((loggedUser) => {
      if (loggedUser) {
        this.utente = loggedUser;
      }
    });
  }

  onSubmit() {
    if (!this.utente.tessera) {
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
  }

  creaAbbonamento(periodicy: string) {
    const rivenditoreId = 159;
    if (this.utente && this.utente.tessera) {
      this.bigliettiService
        .creaAbbonamento(
          rivenditoreId,
          this.utente.tessera.id,
          this.utente.id,
          periodicy
        )
        .subscribe({
          next: (res: iAbbonamento) => {
            // Tipo esplicito per `res`
            alert(
              `Abbonamento acquistato con successo! Codice ${res.codice} + periodicita ${res.periodicy} + valido fino al ${res.scadenza}`
            );

            this.showSubscriptionOptions = false;
          },
          error: (err) => {
            console.error("Errore durante l'acquisto dell'abbonamento:", err);
            alert("Errore durante l'acquisto dell'abbonamento.");
          },
        });
    } else {
      alert("L'utente non ha una tessera valida");
    }
  }
}
