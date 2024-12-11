import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AbbonamentoRoutingModule } from './abbonamento-routing.module';
import { AbbonamentoComponent } from './abbonamento.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AbbonamentoComponent
  ],
  imports: [
    CommonModule,
    AbbonamentoRoutingModule,
    FormsModule
  ]
})
export class AbbonamentoModule { }
