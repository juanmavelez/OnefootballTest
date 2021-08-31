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
  playerIsFound = false;
  error = false;
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
    if (value) {
      try {
        this.playerService.getPlayer(value.playerId).subscribe((res) => {
          this.playerIsFound = true;
          this.playerData = res;
        });
      } catch (err) {
        this.error = true;
      }
    }
  }
}
