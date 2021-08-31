import { Component, OnInit, Input } from '@angular/core';
import { IPlayerData } from '@core/models/models';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.css'],
})
export class PlayerCardComponent implements OnInit {
  @Input() player: IPlayerData;
  stats: boolean;
  constructor() {
    this.stats = false;
    this.player = {
      id: 'string',
      profile: {
        age: '',
        role: '',
        team: '',
        picture: '',
      },
      stats: {
        gamesPlayed: '',
        goals: '',
        foulsConceded: '',
        passingAccuracy: '',
        redCards: '',
        yellowCards: '',
      },
    };
  }
  ngOnInit(): void {}
}
