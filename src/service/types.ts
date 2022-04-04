export interface QueryParams {
  [key: string]: string | number | boolean;
}

interface ResponseInfo {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export enum CharacterStatus {
  ALIVE = 'Alive',
  DEAD = 'Dead',
  UNKNOWN = 'unknown',
}

enum CharacterGender {
  MALE = 'Male',
  FEMALE = 'Female',
  GENDERLESS = 'Genderless',
  UNKNOWN = 'unknown',
}

interface ShortLocation {
  name: string;
  url: string;
}

export interface Character {
  id: number;
  name: string;
  status: CharacterStatus;
  species: string;
  type: string;
  gender: CharacterGender;
  origin: ShortLocation;
  location: ShortLocation;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface CharacterResponse {
  info: ResponseInfo;
  results: Character[];
}
