import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AbbonamentoRoutingModule } from './abbonamento-routing.module';
import { AbbonamentoComponent } from './abbonamento.component';


@NgModule({
  declarations: [
    AbbonamentoComponent
  ],
  imports: [
    CommonModule,
    AbbonamentoRoutingModule
  ]
})
export class AbbonamentoModule { }
