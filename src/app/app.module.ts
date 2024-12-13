import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { TestComponent } from './test_adri/test/test.component';
import { TestCipoComponent } from './test-cipo/test-cipo.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    TestCipoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
