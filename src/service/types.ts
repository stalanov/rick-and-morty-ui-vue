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

export enum CharacterGender {
  MALE = 'Male',
  FEMALE = 'Female',
  GENDERLESS = 'Genderless',
  UNKNOWN = 'unknown',
}

export enum CharacterSpecies {
  HUMAN = 'Human',
  HUMANOID = 'Humanoid',
  ALIEN = 'Alien',
  ANIMAL = 'Animal',
  ROBOT = 'Robot',
  MYTHOLOGICAL_CREATURE = 'Mythological Creature',
  POOPYBUTTHOLE = 'Poopybutthole',
  CRONENBERG = 'Cronenberg',
  DISEASE = 'Disease',
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
  species: CharacterSpecies;
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

export interface CharacterRequest {
  page: number;
  name?: string;
  status?: string;
  species?: string;
  gender?: string;
}
