import { computed, h } from 'vue';
import { RouteLocationNormalizedLoaded, RouterLink } from 'vue-router';
import { MenuOption } from 'naive-ui';
import { Home, Favorite } from '@vicons/carbon';

import { RouteNames } from '@/router/types';
import { renderIcon } from './render';

export const navOptions: MenuOption[] = [
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: RouteNames.CHARACTERS,
          },
        },
        { default: () => 'Characters' }
      ),
    key: RouteNames.CHARACTERS,
    icon: renderIcon(Home),
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: RouteNames.FAVORITES,
          },
        },
        { default: () => 'Favorites' }
      ),
    key: RouteNames.FAVORITES,
    icon: renderIcon(Favorite),
  },
];

export const currentRouteName = (route: RouteLocationNormalizedLoaded) => computed(() => route.name?.toString());
