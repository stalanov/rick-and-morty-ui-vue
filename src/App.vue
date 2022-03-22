<template>
  <n-config-provider :theme="darkTheme">
    <Header />
    <SideMenu />
  </n-config-provider>
</template>

<script setup lang="ts">
import { darkTheme, NConfigProvider } from 'naive-ui';
import Header from '@/components/Header.vue';
import SideMenu from './components/SideMenu.vue';
</script>

<style lang="scss">
@import './styles/reset';
#app {
  font-family: v-sans, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
