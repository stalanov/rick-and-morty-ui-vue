<template>
  <n-layout-header class="header" bordered>
    <RouterLink class="header-logo" :to="{ name: 'characters' }">
      <img class="header-logo-image" src="../assets/logo.png" />
    </RouterLink>
    <n-menu mode="horizontal" :value="activeKey" :options="menuOptions" />
  </n-layout-header>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { NLayoutHeader, NMenu } from 'naive-ui';

import { currentRouteName, menuOptions } from '@/helpers/navigation';

const route = useRoute();
const activeKey = currentRouteName(route);
</script>

<style scoped lang="scss">
.header {
  text-align: center;

  .header-logo {
    display: block;
  }

  .header-logo-image {
    max-width: 1280px;
    width: 100%;
  }
}
</style>
