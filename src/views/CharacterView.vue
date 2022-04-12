<template>
  <div class="character-view">
    <n-spin v-if="loading" :size="100" />

    <div v-else class="character-view__card">
      <n-card :title="character.name" size="huge">
        <h1>
          <n-ellipsis>{{ character.species }} - {{ character.status }}</n-ellipsis>
        </h1>
        <h2>
          <n-ellipsis>Last known location: {{ character.location.name }}</n-ellipsis>
        </h2>
        <h2>
          <n-ellipsis>First seen in: Episode {{ firstSeenIn }}</n-ellipsis>
        </h2>

        <template #action>
          <n-button>
            <template #icon>
              <n-icon>
                <Favorite />
              </n-icon>
            </template>
          </n-button>
        </template>
      </n-card>

      <n-image :src="character.image" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import { NCard, NButton, NIcon, NImage, NEllipsis, NSpin } from 'naive-ui';
import { Favorite } from '@vicons/carbon';

import CharacterService from '@/service/CharacterService';
import { Character } from '@/service/types';

const loading = ref(true);
const character = ref<Character | null>(null);
const firstSeenIn = computed(() => {
  const firstEpisode = character.value?.episode.at(0);
  return firstEpisode?.match(/\d+$/)?.[0] || 'unknown';
});
const route = useRoute();

watchEffect(async () => {
  try {
    const response = await CharacterService.getCharactersById(route.params.id);
    character.value = response;
  } finally {
    loading.value = false;
  }
});
</script>

<style lang="scss">
.character-view {
  min-height: 300px;

  &__card {
    display: flex;
    flex-direction: column;
    @include respond-to('s') {
      flex-direction: row;
    }
  }
}
</style>
