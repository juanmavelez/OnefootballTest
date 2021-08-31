import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@material/material.module';
import { CardsModule } from './cards/cards.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    CardsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
