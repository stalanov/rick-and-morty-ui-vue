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
import { ref } from 'vue';
import { NIcon, NSwitch } from 'naive-ui';
import { Moon, Sun } from '@vicons/carbon';

const active = ref(false);
</script>
