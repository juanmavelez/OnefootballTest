import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PlayerService } from '@core/services/player.service';
import { IPlayerData } from '@core/models/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  form: FormGroup;
  playerData: IPlayerData;
  playerIsFound = false; //variable used to display the palyers card
  error = false; //variable used to display the error card

  constructor(
    private playerService: PlayerService,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      playerId: ['', [Validators.required, Validators.pattern(/^[a-zA-Z ]+$/)]],
    });
    this.playerData = {
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

  searchPlayer() {
    const value = this.form.value;
    this.playerService.getPlayer(value.playerId).subscribe(
      (res) => {
        this.error = false;
        this.playerIsFound = true;
        this.playerData = res;
      },
      () => {
        this.playerIsFound = false;
        this.error = true;
      }
    );
  }
}
