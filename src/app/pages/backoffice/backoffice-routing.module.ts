import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackofficeComponent } from './backoffice.component';
import { InserimentoMezziComponent } from './inserimento-mezzi/inserimento-mezzi.component';
import { InsertTrattaComponent } from './insert-tratta/insert-tratta.component';
import { InsertRivenditoriComponent } from './insert-rivenditori/insert-rivenditori.component';
import { MezziComponent } from './mezzi/mezzi.component';

const routes: Routes = [
  {
    path: '',
    component: BackofficeComponent,
  },
  {
    path: 'inserimento-mezzi',
    component: InserimentoMezziComponent,
  },
  {
    path: 'inserimento-tratte',
    component: InsertTrattaComponent,
  },
  {
    path: 'inserimento-rivenditori',
    component: InsertRivenditoriComponent,
  },
  {
    path: 'parco-mezzi',
    component: MezziComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BackofficeRoutingModule {}
