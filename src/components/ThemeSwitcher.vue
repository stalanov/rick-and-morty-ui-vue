<template>
  <n-switch v-model:value="active">
    <template #checked-icon>
      <n-icon :component="Moon" />
    </template>
    <template #unchecked-icon>
      <n-icon :component="Sun" />
    </template>
  </n-switch>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from 'vuex';
import { NIcon, NSwitch } from 'naive-ui';
import { Moon, Sun } from '@vicons/carbon';

import { key, Mutation, Theme } from '@/store/types';

const themeHash = {
  [Theme.LIGHT]: false,
  [Theme.DARK]: true,
};

const store = useStore(key);
const active = computed({
  get: () => themeHash[store.state.theme],
  set: () => store.commit(Mutation.SWITCH_THEME),
});
</script>
