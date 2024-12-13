import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  GuardResult,
  MaybeAsync,
  RouterStateSnapshot,
} from '@angular/router';
import { UtentiService } from '../services/utenti.service';

@Injectable({
  providedIn: 'root',
})
export class UtenteGuard implements CanActivate, CanActivateChild {
  constructor(private utentiSvc: UtentiService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): MaybeAsync<GuardResult> {
    if (this.utentiSvc.loggedUser$.value) {
      if (this.utentiSvc.loggedUser$.value.ruolo !== 'utente') {
        alert('Devi scegliere un utente per accedere alla pagina');
        return false;
      } else {
        return true;
      }
    } else {
      return false;
    }
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): MaybeAsync<GuardResult> {
    return this.canActivate(childRoute, state);
  }
}
