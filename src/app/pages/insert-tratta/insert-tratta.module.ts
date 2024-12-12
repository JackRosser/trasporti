import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { InsertTrattaRoutingModule } from './insert-tratta-routing.module';
import { InsertTrattaComponent } from './insert-tratta.component';

@NgModule({
  declarations: [InsertTrattaComponent],
  imports: [
    CommonModule,
    InsertTrattaRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
})
export class InsertTrattaModule {}
