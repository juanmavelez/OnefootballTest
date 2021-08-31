import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundCardComponent } from './components/not-found-card/not-found-card.component';
import { PlayerCardComponent } from './components/player-card/player-card.component';



@NgModule({
  declarations: [
    NotFoundCardComponent,
    PlayerCardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CardsModule { }
