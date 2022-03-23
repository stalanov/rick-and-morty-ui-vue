<template>
  <n-layout-header class="header" bordered>
    <RouterLink class="header__logo" :to="{ name: 'characters' }">
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

import { currentRouteName, navOptions } from '@/helpers/navigation';
import ThemeSwitcher from './ThemeSwitcher.vue';

const route = useRoute();
const activeKey = currentRouteName(route);
</script>

<style scoped lang="scss">
.header {
  text-align: center;

  &__menu {
    position: relative;
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
