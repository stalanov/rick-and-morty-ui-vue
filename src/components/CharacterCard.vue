<template>
  <n-card :title="props.name">
    <template #cover>
      <img :src="props.image" />
    </template>
    <div>{{ props.species }} - {{ props.status }}</div>
    <n-button>Add to Favorites</n-button>
  </n-card>
</template>

<script setup lang="ts">
import { NCard, NButton } from 'naive-ui';

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
