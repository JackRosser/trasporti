import { Component } from '@angular/core';
import { UtentiService } from '../../services/utenti.service';
import { iUtente } from '../../interfaces/i-utente';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  constructor(private utentiSvc: UtentiService) {}

  toggleBackoffice: boolean = false;

  utente!: iUtente;

  ngOnInit() {
    this.utentiSvc.loggedUser$.subscribe((user) => {
      if (user) this.utente = user;
    });
  }

  activateToggle(): void {
    this.toggleBackoffice = !this.toggleBackoffice;
  }
}
