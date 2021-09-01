import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { PlayerService } from '@core/services/player.service';
import { ReactiveFormsModule } from '@angular/forms';
import { IPlayerData } from '@core/models/models';
import { Observable, of, throwError } from 'rxjs';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

//fake playerService
class PlayerServiceStub {
  getPlayer(play: string): Observable<IPlayerData> {
    const player = {
      id: 'test',
      profile: {
        age: 'testage',
        role: 'testrole',
        team: 'testteam',
        picture: 'testpicture',
      },
      stats: {
        gamesPlayed: 'testgames',
        goals: 'testgoals',
        foulsConceded: 'testfouls',
        passingAccuracy: 'testacurracy',
        redCards: 'testredcard',
        yellowCards: 'testyellowcard',
      },
    };
    return of(player);
  }
}
describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [ReactiveFormsModule],
      providers: [{ provide: PlayerService, useClass: PlayerServiceStub }],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA], //to avoid error in the template due the material tags
    }).compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  describe('When Init component', () => {
    it('should create the app', () => {
      expect(component).toBeTruthy();
    });
    it('Should create form with the playerId as only a control', () => {
      expect(Object.keys(component.form.controls)).toEqual(['playerId']);
    });
  });
  describe('When searchPlayer is executed', () => {
    it('should change error to false, and playerIsFound to true', () => {
      component.error = true;
      component.playerIsFound = false;
      component.searchPlayer();
      expect(component.error).toBeFalsy();
      expect(component.playerIsFound).toBeTruthy();
    });
  });
});
