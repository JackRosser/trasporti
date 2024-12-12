import { Component, OnInit } from '@angular/core';
import { MezziService } from '../../services/mezzi.service';
import { iMezzo } from '../../interfaces/i-mezzo';
import { eStato } from '../../interfaces/e-stato';

@Component({
  selector: 'app-inserimento-mezzi',
  templateUrl: './inserimento-mezzi.component.html',
  styleUrls: ['./inserimento-mezzi.component.scss'],
})
export class InserimentoMezziComponent implements OnInit {
  formData: {
    tipo: string; // Aggiungi questa proprietà
    seatQuantity: number;
    readyToCirculate: string;
    code: string;
  } = {
    tipo: '', // Inizializza come stringa vuota
    seatQuantity: 0,
    readyToCirculate: '',
    code: '',
  };

  mezzi: iMezzo[] = []; // Array per memorizzare i mezzi recuperati dal server

  constructor(private mezziService: MezziService) {}

  ngOnInit(): void {
    this.getMezzi(); // Recupera i mezzi all'inizializzazione del componente
  }

  // Metodo per inviare il form
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

    // Mappa il valore booleano a un valore dell'enumerazione `eStato`
    const stato =
      formValue.readyToCirculate === 'true'
        ? eStato.IN_SERVIZIO
        : eStato.DEPOSITO;

    const mezzo: Partial<iMezzo> = {
      capienza: formValue.seatQuantity,
      stato: stato, // Usa il valore mappato di `eStato`
      codice: Number(formValue.code),
      tipo: formValue.tipo, // Passa il tipo selezionato
    };

    if (!mezzo.tipo) {
      alert('Il tipo del mezzo è obbligatorio.');
      return;
    }

    if (!mezzo.codice) {
      alert('Il tipo del mezzo è obbligatorio.');
      return;
    }

    this.mezziService.createMezzo(mezzo.tipo, mezzo.codice).subscribe(
      (response) => {
        console.log('Risposta dal server:', response);
        alert('Mezzo aggiunto con successo!');
        this.getMezzi(); // Aggiorna la lista dei mezzi
      },
      (error) => {
        console.error('Errore:', error);
        alert("Errore durante l'aggiunta del mezzo.");
      }
    );
  }

  // Metodo per recuperare tutti i mezzi
  getMezzi(): void {
    this.mezziService.getMezzi().subscribe(
      (response) => {
        console.log('Mezzi recuperati:', response);
        this.mezzi = response;
      },
      (error) => {
        console.error('Errore durante il recupero dei mezzi:', error);
        alert('Errore durante il recupero dei mezzi.');
      }
    );
  }
}
