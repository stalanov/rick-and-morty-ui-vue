<template>
  <div class="character-view">
    <n-spin v-if="loading" :size="100" />

    <div v-else class="character-view__card">
      <n-card class="character-view__info" :title="character.name" size="huge">
        <p>
          <n-ellipsis>{{ character.species }} - {{ character.status }}</n-ellipsis>
        </p>
        <p>
          <n-ellipsis>Last known location: {{ character.location.name }}</n-ellipsis>
        </p>
        <p>
          <n-ellipsis>First seen in: Episode {{ firstSeenIn }}</n-ellipsis>
        </p>

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
import { RouteName } from '@/router/types';

const loading = ref(true);
const character = ref<Character | null>(null);
const firstSeenIn = computed(() => {
  const firstEpisode = character.value?.episode.at(0);
  return firstEpisode?.match(/\d+$/)?.[0] || 'unknown';
});
const route = useRoute();

watchEffect(async () => {
  if (route.name !== RouteName.CHARACTER) {
    return;
  }

  const { id } = route.params;
  const characterId = Array.isArray(id) ? id[0] : id;

  try {
    const response = await CharacterService.getCharacterById(characterId);
    character.value = response;
  } finally {
    loading.value = false;
  }
});
</script>

<style lang="scss">
.character-view {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px;

  &__card {
    display: flex;
    flex-flow: column-reverse;
    align-items: center;
    width: 100%;
    max-width: 900px;
    @include respond-to('s') {
      flex-direction: row;
      align-items: unset;
    }
  }

  &__info {
    min-width: 0;
  }
}
</style>
