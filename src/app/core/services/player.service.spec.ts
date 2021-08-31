import { TestBed, tick } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { PlayerService } from './player.service';
import { environment } from '@environments/environment';

describe('PlayerService', () => {
  let service: PlayerService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  const resPlayerData = {
    id: 'fabio',
    profile: {
      age: '33',
      role: 'centre-back',
      team: 'Juventus',
      picture: 'https://dummyimage.com/170x170/eead47/000000&text=Giorgio',
    },
    stats: {
      yellowCards: '41',
      passingAccuracy: '70.2',
      foulsConceded: '55',
      gamesPlayed: '55',
      redCards: '9',
      goals: '3',
    },
  };
  const resAvailable = {
    id: 'fabio',
    active: 'true',
    'profile-id': 'profile-111.json',
  };
  const resAvailable2 = {
    id: 'fabio',
    active: 'false',
    'profile-id': 'profile-111.json',
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(PlayerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('Testing  getPlayerAvailability', () => {
    it('Should return the player data', () => {
      let dataError;
      let dataResponse: any;
      service.getPlayerAvailability('fabio').subscribe(
        (res) => {
          dataResponse = res;
        },
        (error) => {
          dataError = error;
        }
      );
      const req = httpTestingController.expectOne(
        `${environment.BASE_URL}/data/fabio.json`
      );
      req.flush(resAvailable);
      expect(dataError).toBeUndefined();
      expect(dataResponse).toEqual(resAvailable);
    });
  });
  describe('Testing  getPlayerData', () => {
    it('Should return the player profile', () => {
      let dataResponse, dataError;
      service.getPlayerData('profile-111.json').subscribe(
        (res) => {
          dataResponse = res;
        },
        (error) => {
          dataError = error;
        }
      );

      const req = httpTestingController.expectOne(
        `${environment.BASE_URL}/profile/profile-111.json`
      );
      req.flush(resPlayerData);
      expect(dataError).toBeUndefined();
      expect(dataResponse).toBeTruthy();
    });
  });

  describe('Testing  getPlayerData', () => {
    it('should return an error', () => {
      let dataResponse, dataError;

      service.getPlayer('fabio').subscribe(
        (res) => {
          dataResponse = res;
        },
        (error) => {
          dataError = error;
        }
      );

      const req = httpTestingController.expectOne(
        `${environment.BASE_URL}/data/fabio.json`
      );

      req.flush(resAvailable2);
      expect(dataResponse).toBeUndefined();
      expect(dataError).toBeTruthy();
    });
  });
});
