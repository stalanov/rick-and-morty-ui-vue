import Api, { getQueryString } from './Api';
import { CharacterResponse } from './types';

const url = '/character';

export default {
  getCharacters(page: number) {
    return Api.get<CharacterResponse>(`${url}?${getQueryString({ page })}`);
  },
};
