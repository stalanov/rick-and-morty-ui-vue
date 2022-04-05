<template>
  <div class="characters-view">
    <PagePagination class="characters-view__pagination" :page-slot="7" />

    <div class="characters-view__grid">
      <n-grid x-gap="12" y-gap="12" cols="2 s:3 m:4 l:5 xl:5 2xl:5" responsive="screen">
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

    <PagePagination class="characters-view__pagination" :page-slot="7" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { NGi, NGrid } from 'naive-ui';

import CharacterCard from '@/components/CharacterCard.vue';
import PagePagination from '@/components/PagePagination.vue';
import CharacterService from '@/service/CharacterService';
import { Character } from '@/service/types';

const characters = ref<Character[]>([]);

onMounted(() => {
  CharacterService.getCharacters(1).then(({ data }) => {
    characters.value = data.results;
  });
});
</script>

<style scoped lang="scss">
.characters-view {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__grid {
    max-width: map-get($breakpoints, 'l');
  }

  &__pagination {
    margin: 2em 0;
  }
}
</style>
