<template>
  <n-card class="not-found" :title="props.title" size="huge">
    <template #cover>
      <img class="not-found__image" src="@/assets/404.png" />
    </template>
    <slot />
  </n-card>
</template>

<script setup lang="ts">
import { NCard } from 'naive-ui';

interface NotFoundProps {
  title: string;
}
const props = defineProps<NotFoundProps>();
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
