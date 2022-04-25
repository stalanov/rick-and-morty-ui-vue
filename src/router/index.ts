import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import { RouteName } from './types';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: RouteName.HOME,
    redirect: { name: RouteName.CHARACTERS },
  },
  {
    path: '/characters',
    name: RouteName.CHARACTERS,
    component: () => import(/* webpackChunkName: "characters" */ '@/views/CharactersView.vue'),
  },
  {
    path: '/character/:id(\\d+)',
    name: RouteName.CHARACTER,
    component: () => import(/* webpackChunkName: "characters" */ '@/views/CharacterView.vue'),
  },
  {
    path: '/favorites',
    name: RouteName.FAVORITES,
    component: () => import(/* webpackChunkName: "favorites" */ '@/views/FavoritesView.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: RouteName.NOT_FOUND,
    component: () => import(/* webpackChunkName: "not-found" */ '@/views/NotFoundView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to) {
    if (to.redirectedFrom?.name === RouteName.HOME) {
      return {
        top: 0,
      };
    }

    return {
      el: '#main',
    };
  },
});

export default router;
