import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsertTrattaComponent } from './insert-tratta.component';

const routes: Routes = [{ path: '', component: InsertTrattaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InsertTrattaRoutingModule { }
