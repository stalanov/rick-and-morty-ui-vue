import { computed, ComputedRef, h } from 'vue';
import { LocationQueryValue, RouteLocationNormalizedLoaded, RouterLink } from 'vue-router';
import { MenuOption } from 'naive-ui';
import { Events, Favorite } from '@vicons/carbon';

import { RouteName } from '@/router/types';
import { CharacterRequest } from '@/service/types';
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

type FlatLocationQuery = { [key: string]: LocationQueryValue };

export function getQueryParams(route: RouteLocationNormalizedLoaded): ComputedRef<CharacterRequest> {
  return computed(() => {
    const { query } = route;
    const flatQuery = Object.entries(query).reduce<FlatLocationQuery>((acc, [key, value]) => {
      return { ...acc, [key]: Array.isArray(value) ? value[0] : value };
    }, {});

    const { page, name, status, species, gender } = flatQuery;

    return {
      page: page ? parseInt(page, 10) || 1 : 1,
      ...(name ? { name } : {}),
      ...(status ? { status } : {}),
      ...(species ? { species } : {}),
      ...(gender ? { gender } : {}),
    };
  });
}
