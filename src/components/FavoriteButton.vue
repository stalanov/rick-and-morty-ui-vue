<template>
  <n-button @click="toggleFavorite">
    <template #icon>
      <n-icon>
        <FavoriteFilled v-if="isFavorite" />
        <Favorite v-else />
      </n-icon>
    </template>
  </n-button>
</template>

<script setup lang="ts">
import { useStore } from 'vuex';
import { NButton, NIcon } from 'naive-ui';
import { Favorite, FavoriteFilled } from '@vicons/carbon';

import { key, Mutation } from '@/store/types';
import { computed } from '@vue/reactivity';

interface FavoriteButtonProps {
  id: string;
}

const props = defineProps<FavoriteButtonProps>();
const store = useStore(key);
const isFavorite = computed(() => store.getters.isFavoriteId(props.id));

function toggleFavorite() {
  store.commit(Mutation.TOGGLE_FAVORITE, props.id);
}
</script>
