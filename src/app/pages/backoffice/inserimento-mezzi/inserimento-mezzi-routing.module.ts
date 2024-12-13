import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InserimentoMezziComponent } from './inserimento-mezzi.component';

const routes: Routes = [{ path: '', component: InserimentoMezziComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InserimentoMezziRoutingModule { }
