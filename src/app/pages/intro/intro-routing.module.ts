import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroComponent } from './intro.component';
import { UtenteComponent } from './components/utente/utente.component';
import { RivenditoreComponent } from './components/rivenditore/rivenditore.component';
import { AdminComponent } from './components/admin/admin.component';

const routes: Routes = [
  {
    path: '',
    component: IntroComponent,
  },
  {
    path: 'utente',
    component: UtenteComponent,
  },
  {
    path: 'rivenditore',
    component: RivenditoreComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntroRoutingModule {}
