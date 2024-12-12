import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroComponent } from './intro.component';
import { UtenteComponent } from './components/utente/utente.component';
import { RivenditoreComponent } from './components/rivenditore/rivenditore.component';
import { AdminComponent } from './components/admin/admin.component';
import { IntroRoutingModule } from './intro-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    IntroComponent,
    UtenteComponent,
    RivenditoreComponent,
    AdminComponent,
  ],
  imports: [CommonModule, IntroRoutingModule, FormsModule],
})
export class IntroModule {}
