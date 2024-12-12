import { Component } from '@angular/core';
import { iUtente } from '../../../../interfaces/i-utente';
import { UtentiService } from '../../../../services/utenti.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-utente',
  templateUrl: './utente.component.html',
  styleUrl: './utente.component.scss',
})
export class UtenteComponent {
  constructor(private utentiSvc: UtentiService, private router: Router) {}

  utenti!: iUtente[];
  utente!: Partial<iUtente> | iUtente;

  showChoise: boolean = true;
  showCrea: boolean = false;
  showScegli: boolean = false;

  ngOnInit() {
    this.utentiSvc.getUtenti().subscribe((res) => {
      if (res)
        this.utenti = res.filter((u) => u.ruolo === 'utente') as iUtente[];
    });
  }

  onSubmit(formValue: any): void {}

  creaUtente() {
    this.showChoise = false;
    this.showCrea = true;
  }

  scegliUtente() {
    this.showChoise = false;
    this.showScegli = true;
  }

  conferma(event: Event) {
    let id = +(event.target as HTMLSelectElement).value;
    let utente: iUtente = this.utenti.find((u) => u.id === id) as iUtente;
    this.utentiSvc.loggedUser$.next(utente);
    this.router.navigate(['/user']);
  }
}
