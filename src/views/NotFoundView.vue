<template>
  <n-card class="not-found" title="Not Found" size="huge">
    <template #cover>
      <img class="not-found__image" src="@/assets/404.png" />
    </template>
    Oops, we couldn't find that page. Try going <router-link :to="{ name: RouteName.HOME }">home</router-link>
  </n-card>
</template>

<script setup lang="ts">
import { NCard } from 'naive-ui';

import { RouteName } from '@/router/types';
</script>

<style scoped lang="scss">
.not-found {
  max-width: 600px;
  margin: 2em auto;

  &__image {
    max-width: 300px;
    margin: auto;
  }
}
</style>
