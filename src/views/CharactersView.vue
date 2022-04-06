<template>
  <n-space class="characters-view" vertical align="center">
    <n-pagination
      class="characters-view__pagination"
      :page="page"
      :page-count="pageCount"
      :page-slot="7"
      @update-page="changePage"
    />

    <div class="characters-view__grid">
      <n-spin v-if="loading" :size="100" />

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

    <n-pagination
      class="characters-view__pagination"
      :page="page"
      :page-count="pageCount"
      :page-slot="7"
      @update-page="changePage"
    />
  </n-space>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { NGi, NGrid, NPagination, NSpin, NSpace } from 'naive-ui';

import CharacterCard from '@/components/CharacterCard.vue';
import CharacterService from '@/service/CharacterService';
import { Character } from '@/service/types';
import { getCurrentPage } from '@/helpers/navigation';
import { RouteName } from '@/router/types';

const route = useRoute();
const router = useRouter();
const page = getCurrentPage(route);

const characters = ref<Character[]>([]);
const pageCount = ref<number>(1);
const loading = ref<boolean>(true);

watchEffect(() => {
  loading.value = true;
  CharacterService.getCharacters({ page: page.value })
    .then(({ data }) => {
      characters.value = data.results;
      pageCount.value = data.info.pages;
    })
    .finally(() => {
      loading.value = false;
    });
});

function changePage(newPage: number) {
  router.push({
    name: RouteName.CHARACTERS,
    query: {
      ...route.query,
      page: newPage,
    },
  });
}
</script>

<style scoped lang="scss">
.characters-view {
  &__grid {
    max-width: map-get($breakpoints, 'l');
    min-height: 1000px;
  }

  &__pagination {
    margin: 2em 0;
  }
}
</style>
