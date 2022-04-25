<template>
  <n-card class="character-card" :hoverable="true">
    <template #cover>
      <RouterLink class="character-card__cover" :to="{ name: RouteName.CHARACTER, params: { id: props.id } }">
        <img src="@/assets/image-placeholder-300.png" />
        <img class="character-card__image" :src="props.image" />
      </RouterLink>
    </template>
    <template #header>
      <n-ellipsis>
        {{ props.name }}
      </n-ellipsis>
    </template>

    <n-ellipsis>{{ props.species }} - {{ props.status }}</n-ellipsis>

    <template #action>
      <FavoriteButton :id="props.id.toString()" />
    </template>
  </n-card>
</template>

<script setup lang="ts">
import { NCard, NEllipsis } from 'naive-ui';

import { CharacterStatus } from '@/service/types';
import { RouteName } from '@/router/types';
import FavoriteButton from './FavoriteButton.vue';

interface CharacterCardProps {
  id: number;
  name: string;
  image: string;
  species: string;
  status: CharacterStatus;
}

const props = defineProps<CharacterCardProps>();
</script>

<style scoped lang="scss">
.character-card {
  :deep(.n-card-header__main) {
    width: 100%;
  }

  &__cover {
    display: block;
    position: relative;
  }

  &__image {
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>
