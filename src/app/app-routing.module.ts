import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test_adri/test/test.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'bus',
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
  },
  {
    path: 'rivenditori',
    loadChildren: () =>
      import('./pages/insert-rivenditori/insert-rivenditori.module').then(
        (m) => m.InsertRivenditoriModule
      ),
  },
  {
    path: 'mezzi',
    loadChildren: () =>
      import('./pages/mezzi/mezzi.module').then((m) => m.MezziModule),
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./pages/user/user.module').then((m) => m.UserModule),
  },
  { path: 'test', component: TestComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
