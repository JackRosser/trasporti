import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TramRoutingModule } from './tram-routing.module';
import { TramComponent } from './tram.component';


@NgModule({
  declarations: [
    TramComponent
  ],
  imports: [
    CommonModule,
    TramRoutingModule
  ]
})
export class TramModule { }
