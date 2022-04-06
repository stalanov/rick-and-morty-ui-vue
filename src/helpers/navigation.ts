import { computed, h } from 'vue';
import { RouteLocationNormalizedLoaded, RouterLink } from 'vue-router';
import { MenuOption } from 'naive-ui';
import { Events, Favorite } from '@vicons/carbon';

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
    icon: renderIcon(Events),
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

export function currentRouteName(route: RouteLocationNormalizedLoaded) {
  return computed(() => route.name?.toString());
}

export function getCurrentPage(route: RouteLocationNormalizedLoaded) {
  return computed(() => {
    const { page } = route.query;
    const currentPage = Array.isArray(page) ? page[0] : page;

    if (!currentPage) {
      return 1;
    }

    return parseInt(currentPage, 10) || 1;
  });
}
