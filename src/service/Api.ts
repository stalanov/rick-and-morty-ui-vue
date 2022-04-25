import axios from 'axios';

const BASE_URL = 'https://rickandmortyapi.com/api';

export function getQueryString<T>(params: T): string {
  return Object.entries(params)
    .map(([key, value]) => `${key}=${value}`)
    .join('&');
}

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
      return Promise.resolve();
    }
    return Promise.reject(error);
  }
);

export default api;
