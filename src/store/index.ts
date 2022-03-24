import { createStore } from 'vuex';

import { Mutation, State, Theme } from './types';

export const store = createStore<State>({
  state: {
    theme: Theme.LIGHT,
  },
  getters: {},
  mutations: {
    [Mutation.SWITCH_THEME](state) {
      state.theme = state.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    },
  },
  actions: {},
  modules: {},
});
