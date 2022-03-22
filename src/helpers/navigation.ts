import { h } from 'vue';
import { RouterLink } from 'vue-router';
import { MenuOption } from 'naive-ui';
import { Home, Favorite } from '@vicons/carbon';

import { renderIcon } from './render';

export const menuOptions: MenuOption[] = [
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'characters',
          },
        },
        { default: () => 'Characters' }
      ),
    key: 'characters',
    icon: renderIcon(Home),
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'favorites',
          },
        },
        { default: () => 'Favorites' }
      ),
    key: 'favorites',
    icon: renderIcon(Favorite),
  },
];
