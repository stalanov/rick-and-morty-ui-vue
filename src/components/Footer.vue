<template>
  <n-layout-footer class="footer" bordered> {{ year }} — GridU — Vue.Js </n-layout-footer>
</template>

<script setup lang="ts">
import { NLayoutFooter } from 'naive-ui';

const year = new Date().getFullYear();
</script>

<style scoped lang="scss">
.footer {
  line-height: 2em;
  text-align: center;
}
</style>
