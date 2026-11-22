<template>
  <n-space vertical :item-style="expandStyle">
    <n-layout has-sider class="main__layout">
      <n-layout-sider
        class="main__layout-sider"
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
      <n-layout id="main" :item-style="{ flex: 1 }">
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
const expandStyle = { display: 'flex', flexDirection: 'column', flex: 1 };
</script>

<style scoped lang="scss">
.main {
  &__layout {
    display: flex;
    flex-direction: column;

    &:deep(.n-layout-scroll-container) {
      flex: 1;
    }
  }

  &__layout-sider {
    display: none;

    @include respond-to('s') {
      display: block;
    }
  }
}
</style>
