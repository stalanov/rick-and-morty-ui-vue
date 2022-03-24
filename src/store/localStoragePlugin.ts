import { Store } from 'vuex';
import { Mutation, State } from './types';

const STORAGE_KEY = 'vuex';

export default (store: Store<State>) => {
  const storedState = localStorage.getItem(STORAGE_KEY);
  if (storedState) {
    store.commit(Mutation.SET_STORE, JSON.parse(storedState));
  }

  store.subscribe((_, state) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  });
};
