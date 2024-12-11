import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TramRoutingModule } from './tram-routing.module';
import { TramComponent } from './tram.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TramComponent
  ],
  imports: [
    CommonModule,
    TramRoutingModule,
    FormsModule
  ]
})
export class TramModule { }
