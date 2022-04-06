<template>
  <n-space vertical>
    <n-layout has-sider>
      <n-layout-sider
        class="side-menu__layout-sider"
        bordered
        collapse-mode="width"
        :collapsed-width="64"
        :width="180"
        :collapsed="collapsed"
        show-trigger
        :trigger-style="triggerStyle"
        :collapsed-trigger-style="triggerStyle"
        @collapse="collapsed = true"
        @expand="collapsed = false"
      >
        <n-menu
          :value="activeKey"
          :collapsed="collapsed"
          :collapsed-width="64"
          :collapsed-icon-size="22"
          :options="navOptions"
        />
      </n-layout-sider>
      <n-layout id="main">
        <router-view />
      </n-layout>
    </n-layout>
  </n-space>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { NSpace, NLayout, NLayoutSider, NMenu } from 'naive-ui';

import { currentRouteName, navOptions } from '@/helpers/navigation';

const route = useRoute();
const activeKey = currentRouteName(route);
const collapsed = ref(true);
const triggerStyle = { top: '55px' };
</script>

<style scoped lang="scss">
.side-menu {
  &__layout-sider {
    display: none;

    @include respond-to('s') {
      display: block;
    }
  }
}
</style>
