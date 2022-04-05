<template>
  <n-card class="character-card" :hoverable="true">
    <template #cover>
      <img :src="props.image" />
    </template>
    <template #header>
      <n-ellipsis>
        {{ props.name }}
      </n-ellipsis>
    </template>

    {{ props.species }} - {{ props.status }}

    <template #action>
      <n-button>
        <template #icon>
          <n-icon>
            <Favorite />
          </n-icon>
        </template>
        Add to Favorites
      </n-button>
    </template>
  </n-card>
</template>

<script setup lang="ts">
import { NCard, NButton, NIcon, NEllipsis } from 'naive-ui';
import { Favorite } from '@vicons/carbon';

import { CharacterStatus } from '@/service/types';

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
}
</style>
