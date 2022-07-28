import { Character, CharacterListResponse, Gender, Species, Status } from '../../ts/character.type';

export const stubCharacter: Character = {
  id: 1,
  name: 'Beth Smith',
  status: Status.Alive,
  species: Species.Alien,
  type: '',
  gender: Gender.Female,
  origin: {
    name: 'Earth (Replacement Dimension)',
    url: 'https://rickandmortyapi.com/api/location/20',
  },
  location: {
    name: 'Earth (Replacement Dimension)',
    url: 'https://rickandmortyapi.com/api/location/20',
  },
  image: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg',
  episode: ['https://rickandmortyapi.com/api/episode/6'],
  url: 'https://rickandmortyapi.com/api/character/4',
  created: new Date('2017-11-04T19:22:43.665Z'),
};

export const stubCharacter2: Character = {
  ...stubCharacter,
  id: 2,
};

export const stubCharacter3: Character = {
  ...stubCharacter,
  id: 3,
};

export const mockCharacterList: CharacterListResponse = {
  meta: {
    page: 1,
    pages: 2,
  },
  data: [stubCharacter, stubCharacter2, stubCharacter3],
};
