import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InsertRivenditoriRoutingModule } from './insert-rivenditori-routing.module';
import { InsertRivenditoriComponent } from './insert-rivenditori.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [InsertRivenditoriComponent],
  imports: [CommonModule, InsertRivenditoriRoutingModule, FormsModule],
})
export class InsertRivenditoriModule {}
