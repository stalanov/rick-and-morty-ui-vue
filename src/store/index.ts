import { createStore } from 'vuex';

import localStoragePlugin from './localStoragePlugin';
import { Mutation, State, Theme } from './types';

export const store = createStore<State>({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    theme: Theme.LIGHT,
  },
  getters: {},
  mutations: {
    [Mutation.SWITCH_THEME](state) {
      state.theme = state.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    },
    [Mutation.SET_STORE](state, newState) {
      Object.assign(state, newState);
    },
  },
  actions: {},
  modules: {},
  plugins: [localStoragePlugin],
});
