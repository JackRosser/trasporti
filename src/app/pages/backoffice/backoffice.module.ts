import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackofficeRoutingModule } from './backoffice-routing.module';
import { BackofficeComponent } from './backoffice.component';
import { InserimentoMezziComponent } from './inserimento-mezzi/inserimento-mezzi.component';
import { InsertRivenditoriComponent } from './insert-rivenditori/insert-rivenditori.component';
import { InsertTrattaComponent } from './insert-tratta/insert-tratta.component';
import { FormsModule } from '@angular/forms';
import { MezziComponent } from './mezzi/mezzi.component';

@NgModule({
  declarations: [
    BackofficeComponent,
    InserimentoMezziComponent,
    InsertRivenditoriComponent,
    InsertTrattaComponent,
    MezziComponent,
  ],
  imports: [CommonModule, BackofficeRoutingModule, FormsModule],
})
export class BackofficeModule {}
