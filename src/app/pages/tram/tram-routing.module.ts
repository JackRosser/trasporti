import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TramComponent } from './tram.component';

const routes: Routes = [{ path: '', component: TramComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TramRoutingModule { }
