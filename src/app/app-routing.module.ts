import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
  ActivatedRoute,
  CanActivate,
} from '@angular/router';
import { TestComponent } from './test_adri/test/test.component';
import { LoginGuard } from './guards/login.guard';
import { AdminGuard } from './guards/admin.guard';
import { UtenteGuard } from './guards/utente.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/intro/intro.module').then((m) => m.IntroModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
    canActivate: [LoginGuard],
  },
  {
    path: 'giornaliero',
    loadChildren: () =>
      import('./pages/bus/bus.module').then((m) => m.BusModule),
  },
  {
    path: 'tram',
    loadChildren: () =>
      import('./pages/tram/tram.module').then((m) => m.TramModule),
  },
  {
    path: 'abbonamento',
    loadChildren: () =>
      import('./pages/abbonamento/abbonamento.module').then(
        (m) => m.AbbonamentoModule
      ),
    canActivate: [LoginGuard, UtenteGuard],
  },

  {
    path: 'user',
    loadChildren: () =>
      import('./pages/user/user.module').then((m) => m.UserModule),
    canActivate: [LoginGuard, UtenteGuard],
  },
  { path: 'test', component: TestComponent },
  {
    path: 'backoffice',
    loadChildren: () =>
      import('./pages/backoffice/backoffice.module').then(
        (m) => m.BackofficeModule
      ),
    canActivate: [LoginGuard, AdminGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
