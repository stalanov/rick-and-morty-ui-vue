<template>
  <n-config-provider :theme="theme">
    <Header />
    <SideMenu />
    <Footer />
  </n-config-provider>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { darkTheme, lightTheme, NConfigProvider } from 'naive-ui';
import { useStore } from 'vuex';

import Header from '@/components/Header.vue';
import SideMenu from '@/components/SideMenu.vue';
import Footer from '@/components/Footer.vue';
import { Theme, key } from '@/store/types';

const themeHash = {
  [Theme.LIGHT]: lightTheme,
  [Theme.DARK]: darkTheme,
};

const store = useStore(key);
const theme = computed(() => themeHash[store.state.theme]);
</script>

<style lang="scss">
@import './styles/reset';

#app {
  font-family: v-sans, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
