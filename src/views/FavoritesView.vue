<template>
  <div class="favorites-view">
    <div class="favorites-view__grid">
      <n-spin v-if="loading" :size="100" />

      <NotFoundComponent v-else-if="characters.length === 0" title="Nothing Found">
        There is no favorite characters
      </NotFoundComponent>

      <n-grid v-else x-gap="12" y-gap="12" cols="2 s:3 m:4 l:5 xl:5 2xl:5" responsive="screen">
        <n-gi v-for="character in characters" :key="character.id">
          <CharacterCard
            :id="character.id"
            :image="character.image"
            :name="character.name"
            :species="character.species"
            :status="character.status"
          />
        </n-gi>
      </n-grid>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import { useStore } from 'vuex';
import { NGi, NGrid, NSpin } from 'naive-ui';

import CharacterCard from '@/components/CharacterCard.vue';
import NotFoundComponent from '@/components/NotFoundComponent.vue';
import CharacterService from '@/service/CharacterService';
import { Character } from '@/service/types';
import { key } from '@/store/types';

const characters = ref<Character[]>([]);
const loading = ref<boolean>(false);
const store = useStore(key);

watchEffect(async () => {
  const { favorites } = store.state;
  if (favorites.length) {
    loading.value = true;
    try {
      const response = await CharacterService.getCharactersById(store.state.favorites);
      characters.value = Array.isArray(response) ? response : [response] || [];
    } finally {
      loading.value = false;
    }
  }
});
</script>

<style scoped lang="scss">
.favorites-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  max-width: map-get($breakpoints, 'l');
  padding: 1em 0;
  margin: 0 auto;
  @include respond-to('m') {
    padding: 2em;
    gap: 2em;
  }

  &__grid {
    min-height: 800px;
  }
}
</style>
