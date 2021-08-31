//server response
/*{
    "id": "giorgio",
    "active": "false",
    "profile-id": "profile-333.json"
}*/
export interface IPlayerAvailability {
  id: string;
  active: 'true' | 'false';
  'profile-id': string;
}

export interface IPlayerData {
  id: string;
  profile: {
    age: string;
    role: string;
    team: string;
    picture: string;
  };
  stats: {
    gamesPlayed: string;
    goals: string;
    foulsConceded: string;
    passingAccuracy: string;
    redCards: string;
    yellowCards: string;
  };
}
