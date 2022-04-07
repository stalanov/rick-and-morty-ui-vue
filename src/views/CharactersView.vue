<template>
  <div class="characters-view">
    <n-pagination
      class="characters-view__pagination"
      :disabled="loading"
      :page="params.page"
      :page-count="pageCount"
      :page-slot="7"
      @update-page="changePage"
    />

    <CharacterFilters :disabled="loading" class="characters-view__filters" />

    <div class="characters-view__grid">
      <n-spin v-if="loading" :size="100" />

      <NotFoundComponent v-else-if="characters.length === 0" title="Nothing Found">
        There is no characters found. Try to change your filters
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

    <n-pagination
      class="characters-view__pagination"
      :disabled="loading"
      :page="params.page"
      :page-count="pageCount"
      :page-slot="7"
      @update-page="changePage"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { NGi, NGrid, NPagination, NSpin } from 'naive-ui';

import CharacterCard from '@/components/CharacterCard.vue';
import CharacterFilters from '@/components/CharacterFilters.vue';
import CharacterService from '@/service/CharacterService';
import { Character } from '@/service/types';
import { getQueryParams } from '@/helpers/navigation';
import { RouteName } from '@/router/types';
import NotFoundComponent from '@/components/NotFoundComponent.vue';

const route = useRoute();
const router = useRouter();
const params = getQueryParams(route);

const characters = ref<Character[]>([]);
const pageCount = ref<number>(1);
const loading = ref<boolean>(true);

watchEffect(() => {
  loading.value = true;
  CharacterService.getCharacters(params.value)
    .then((response) => {
      characters.value = response?.data?.results || [];
      pageCount.value = response?.data?.info?.pages || 1;
    })
    .finally(() => {
      loading.value = false;
    });
});

function changePage(page: number) {
  router.push({
    name: RouteName.CHARACTERS,
    query: {
      ...route.query,
      page,
    },
  });
}
</script>

<style scoped lang="scss">
.characters-view {
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
    min-height: 660px;
  }
}
</style>
