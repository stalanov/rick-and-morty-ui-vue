import axios from 'axios';

import Router from '@/router';
import { RouteName } from '@/router/types';
import { QueryParams } from './types';

const BASE_URL = 'https://rickandmortyapi.com/api';

export const getQueryString = (params: QueryParams): string => {
  return Object.entries(params).reduce((acc, [key, value]) => `${acc}&${key}=${value}`, '');
};

const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 404) {
      Router.push({ name: RouteName.NOT_FOUND });
    }
    return Promise.reject(error);
  }
);

export default api;
