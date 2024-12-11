import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusRoutingModule } from './bus-routing.module';
import { BusComponent } from './bus.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BusComponent
  ],
  imports: [
    CommonModule,
    BusRoutingModule,
    FormsModule
  ]
})
export class BusModule { }
