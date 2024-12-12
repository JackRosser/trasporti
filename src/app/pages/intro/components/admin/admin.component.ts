import { Component } from '@angular/core';
import { iUtente } from '../../../../interfaces/i-utente';
import { UtentiService } from '../../../../services/utenti.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
})
export class AdminComponent {
  constructor(private utentiSvc: UtentiService, private router: Router) {}

  utenti!: iUtente[];
  utente!: Partial<iUtente> | iUtente;

  ngOnInit() {
    this.utentiSvc.getUtenti().subscribe((res) => {
      if (res)
        this.utenti = res.filter((u) => u.ruolo === 'admin') as iUtente[];
    });
  }

  onSubmit(formValue: any): void {}

  conferma(event: Event) {
    let id = +(event.target as HTMLSelectElement).value;
    let utente: iUtente = this.utenti.find((u) => u.id === id) as iUtente;
    this.utentiSvc.loggedUser$.next(utente);
    // this.router.navigate(['/user']); // fare pagina backoffice con pulsanti di scelta
  }
}
