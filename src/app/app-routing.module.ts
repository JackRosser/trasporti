import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'backoffice', loadChildren: () => import('./pages/backoffice/backoffice.module').then(m => m.BackofficeModule) },
  { path: 'bus', loadChildren: () => import('./pages/bus/bus.module').then(m => m.BusModule) },
  { path: 'tram', loadChildren: () => import('./pages/tram/tram.module').then(m => m.TramModule) },
  { path: 'abbonamento', loadChildren: () => import('./pages/abbonamento/abbonamento.module').then(m => m.AbbonamentoModule) }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
