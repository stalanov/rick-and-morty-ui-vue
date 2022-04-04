<template>
  <div class="characters-view">
    <n-grid x-gap="12" y-gap="12" cols="1 s:2 m:3 l:4 xl:4 2xl:4" responsive="screen">
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
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { NGi, NGrid } from 'naive-ui';

import CharacterCard from '@/components/CharacterCard.vue';
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
  max-width: 1280px;
  margin: 0 auto;
}
</style>
