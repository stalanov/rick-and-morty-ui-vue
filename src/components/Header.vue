<template>
  <n-layout-header class="header" bordered>
    <RouterLink class="header__logo" :to="{ name: RouteName.HOME }">
      <img class="header__logo-image" src="../assets/logo.png" />
    </RouterLink>
    <div class="header__menu">
      <n-menu mode="horizontal" :value="activeKey" :options="navOptions" />
      <div class="header__theme-switcher">
        <ThemeSwitcher />
      </div>
    </div>
  </n-layout-header>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { NLayoutHeader, NMenu } from 'naive-ui';

import ThemeSwitcher from '@/components/ThemeSwitcher.vue';
import { currentRouteName, navOptions } from '@/helpers/navigation';
import { RouteName } from '@/router/types';

const route = useRoute();
const activeKey = currentRouteName(route);
</script>

<style scoped lang="scss">
.header {
  text-align: center;

  &__menu {
    position: relative;
    text-align: start;
    @include respond-to('s') {
      text-align: center;
    }
  }

  &__logo {
    display: block;
  }

  &__logo-image {
    max-width: 1280px;
    width: 100%;
  }

  &__theme-switcher {
    @include vertical-align;
    position: absolute;
    top: 0;
    right: 1em;
  }
}
</style>
