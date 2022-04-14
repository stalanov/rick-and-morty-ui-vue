import { createStore } from 'vuex';

import localStoragePlugin from './localStoragePlugin';
import { Mutation, State, Theme } from './types';

export const store = createStore<State>({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    theme: Theme.LIGHT,
    favorites: [],
  },
  getters: {},
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
        state.favorites = [...state.favorites.splice(idx, 1)];
      } else {
        state.favorites = [...state.favorites, id];
      }
    },
  },
  actions: {},
  modules: {},
  plugins: [localStoragePlugin],
});
