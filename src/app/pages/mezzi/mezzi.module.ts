import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MezziRoutingModule } from './mezzi-routing.module';
import { MezziComponent } from './mezzi.component';


@NgModule({
  declarations: [
    MezziComponent
  ],
  imports: [
    CommonModule,
    MezziRoutingModule
  ]
})
export class MezziModule { }
