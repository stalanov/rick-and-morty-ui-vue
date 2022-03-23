import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import { RouteNames } from './types';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: RouteNames.HOME,
    redirect: { name: RouteNames.CHARACTERS },
  },
  {
    path: '/characters',
    name: RouteNames.CHARACTERS,
    component: () => import(/* webpackChunkName: "characters" */ '../views/CharactersView.vue'),
  },
  {
    path: '/character/:id',
    name: RouteNames.CHARACTER,
    component: () => import(/* webpackChunkName: "characters" */ '../views/CharacterView.vue'),
  },
  {
    path: '/favorites',
    name: RouteNames.FAVORITES,
    component: () => import(/* webpackChunkName: "favorites" */ '../views/FavoritesView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
