import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InsertRivenditoriRoutingModule } from './insert-rivenditori-routing.module';
import { InsertRivenditoriComponent } from './insert-rivenditori.component';


@NgModule({
  declarations: [
    InsertRivenditoriComponent
  ],
  imports: [
    CommonModule,
    InsertRivenditoriRoutingModule
  ]
})
export class InsertRivenditoriModule { }
