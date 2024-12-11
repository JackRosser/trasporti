import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsertRivenditoriComponent } from './insert-rivenditori.component';

const routes: Routes = [{ path: '', component: InsertRivenditoriComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InsertRivenditoriRoutingModule { }
