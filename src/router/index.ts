import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    redirect: { name: 'characters' },
  },
  {
    path: '/characters',
    name: 'characters',
    component: () => import(/* webpackChunkName: "characters" */ '../views/CharactersView.vue'),
  },
  {
    path: '/character/:id',
    name: 'character',
    component: () => import(/* webpackChunkName: "characters" */ '../views/CharacterView.vue'),
  },
  {
    path: '/favorites',
    name: 'favorites',
    component: () => import(/* webpackChunkName: "favorites" */ '../views/FavoritesView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
