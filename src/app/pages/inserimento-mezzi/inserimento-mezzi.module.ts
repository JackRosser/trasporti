import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InserimentoMezziRoutingModule } from './inserimento-mezzi-routing.module';
import { InserimentoMezziComponent } from './inserimento-mezzi.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [InserimentoMezziComponent],
  imports: [CommonModule, InserimentoMezziRoutingModule, FormsModule],
})
export class InserimentoMezziModule {}
