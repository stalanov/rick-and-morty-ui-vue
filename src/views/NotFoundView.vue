<template>
  <NotFoundComponent title="Not Found">
    Oops, we couldn't find that page. Try going <router-link :to="{ name: RouteName.HOME }">home</router-link>
  </NotFoundComponent>
</template>

<script setup lang="ts">
import NotFoundComponent from '@/components/NotFoundComponent.vue';
import { RouteName } from '@/router/types';
</script>
