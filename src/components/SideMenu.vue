<template>
  <n-space vertical>
    <n-layout has-sider>
      <n-layout-sider
        bordered
        collapse-mode="width"
        :collapsed-width="64"
        :width="180"
        :collapsed="collapsed"
        show-trigger
        @collapse="collapsed = true"
        @expand="collapsed = false"
      >
        <n-menu
          :value="activeKey"
          :collapsed="collapsed"
          :collapsed-width="64"
          :collapsed-icon-size="22"
          :options="menuOptions"
        />
      </n-layout-sider>
      <n-layout>
        <router-view />
      </n-layout>
    </n-layout>
  </n-space>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { NSpace, NLayout, NLayoutSider, NMenu } from 'naive-ui';

import { currentRouteName, menuOptions } from '@/helpers/navigation';

const route = useRoute();
const activeKey = currentRouteName(route);
const collapsed = ref(true);
</script>
