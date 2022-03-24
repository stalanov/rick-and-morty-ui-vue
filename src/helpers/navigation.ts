import { computed, h } from 'vue';
import { RouteLocationNormalizedLoaded, RouterLink } from 'vue-router';
import { MenuOption } from 'naive-ui';
import { Home, Favorite } from '@vicons/carbon';

import { RouteName } from '@/router/types';
import { renderIcon } from './render';

export const navOptions: MenuOption[] = [
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: RouteName.CHARACTERS,
          },
        },
        { default: () => 'Characters' }
      ),
    key: RouteName.CHARACTERS,
    icon: renderIcon(Home),
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: RouteName.FAVORITES,
          },
        },
        { default: () => 'Favorites' }
      ),
    key: RouteName.FAVORITES,
    icon: renderIcon(Favorite),
  },
];

export const currentRouteName = (route: RouteLocationNormalizedLoaded) => computed(() => route.name?.toString());
