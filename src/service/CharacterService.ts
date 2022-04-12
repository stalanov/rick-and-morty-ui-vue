import Api, { getQueryString } from './Api';
import { Character, CharacterRequest, CharacterResponse } from './types';

const url = '/character';

export default {
  async getCharacters(params: CharacterRequest) {
    const result = await Api.get<CharacterResponse>(`${url}?${getQueryString<CharacterRequest>(params)}`);
    return result?.data;
  },

  async getCharactersById(id: string | string[]) {
    const result = await Api.get<Character>(`${url}/${id}`);
    return result?.data;
  },
};
