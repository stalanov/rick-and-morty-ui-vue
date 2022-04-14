import { InjectionKey } from 'vue';
import { Store } from 'vuex';

export interface State {
  theme: Theme;
  favorites: string[];
}

export const key: InjectionKey<Store<State>> = Symbol();

export enum Theme {
  DARK,
  LIGHT,
}

export enum Mutation {
  SWITCH_THEME = 'SWITCH_THEME',
  SET_STORE = 'SET_STORE',
  TOGGLE_FAVORITE = 'TOGGLE_FAVORITE',
}
