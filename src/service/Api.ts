import axios from 'axios';
import { QueryParams } from './types';

const BASE_URL = 'https://rickandmortyapi.com/api';

export const getQueryString = (params: QueryParams): string => {
  return Object.entries(params).reduce((acc, [key, value]) => `${acc}&${key}=${value}`, '');
};

export default axios.create({
  baseURL: BASE_URL,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});
