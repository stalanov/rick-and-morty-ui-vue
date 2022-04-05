<template>
  <n-pagination v-model:page="page" :page-count="100" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { NPagination } from 'naive-ui';

const page = ref(2);
</script>
