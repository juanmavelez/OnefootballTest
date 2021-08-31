import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';
import { switchMap } from 'rxjs/operators';
import { IPlayerAvailability, IPlayerData } from '@core/models/models';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  constructor(private httpClient: HttpClient) {}

  /**
   *  getPlayer will use the name of the player to check if it is active in the system by calling the getPlayerAvailability
   * method. If the player is not active, getPlayer will throw an error. If the player is active, getPlayer will switch the observable to getPlayerData
   * @param playerName: Player name
   * @returns player data, in case the player is active
   */
  getPlayer(playerName: string): Observable<IPlayerData> {
    return this.getPlayerAvailability(playerName).pipe(
      switchMap((res) => {
        if (res.active === 'false') {
          throw new Error('Player is Unavaliable');
        }
        return this.getPlayerData(res['profile-id']);
      })
    );
  }

  getPlayerAvailability(playerName: string): Observable<IPlayerAvailability> {
    return this.httpClient.get<IPlayerAvailability>(
      `${environment.BASE_URL}/data/${playerName}.json`
    );
  }

  getPlayerData(profileId: string): Observable<IPlayerData> {
    return this.httpClient.get<IPlayerData>(
      `${environment.BASE_URL}/profile/${profileId}`
    );
  }
}
