import Api, { getQueryString } from './Api';
import { CharacterRequest, CharacterResponse } from './types';

const url = '/character';

export default {
  getCharacters(params: CharacterRequest) {
    return Api.get<CharacterResponse>(`${url}?${getQueryString<CharacterRequest>(params)}`);
  },
};
