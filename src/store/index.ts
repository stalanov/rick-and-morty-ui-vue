import { createStore } from 'vuex';

import localStoragePlugin from './localStoragePlugin';
import { Mutation, State, Theme } from './types';

export const store = createStore<State>({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    theme: Theme.LIGHT,
    favorites: [],
  },
  getters: {
    isFavoriteId: (state) => (id: string) => {
      return state.favorites.includes(id);
    },
  },
  mutations: {
    [Mutation.SWITCH_THEME](state) {
      state.theme = state.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    },
    [Mutation.SET_STORE](state, newState: State) {
      Object.assign(state, newState);
    },
    [Mutation.TOGGLE_FAVORITE](state, id: string) {
      const idx = state.favorites.indexOf(id);
      if (idx >= 0) {
        const favorites = [...state.favorites];
        favorites.splice(idx, 1);
        state.favorites = [...favorites];
      } else {
        state.favorites = [...state.favorites, id];
      }
    },
  },
  actions: {},
  modules: {},
  plugins: [localStoragePlugin],
});
