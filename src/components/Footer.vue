<template>
  <n-layout-footer class="footer" bordered>
    <div>{{ year }} — GridU — Vue.Js</div>
    <a class="footer-github" href="https://github.com/gridu/Vue.js-Sergey-Talanov" target="_blank">
      <n-icon :size="22"><LogoGithub /></n-icon>
    </a>
  </n-layout-footer>
</template>

<script setup lang="ts">
import { NLayoutFooter, NIcon } from 'naive-ui';
import { LogoGithub } from '@vicons/carbon';

const year = new Date().getFullYear();
</script>

<style scoped lang="scss">
.footer {
  position: relative;
  line-height: 2em;
  text-align: center;

  .footer-github {
    display: flex;
    align-items: center;
    position: absolute;
    height: 100%;
    right: 1em;
    top: 0;
    text-decoration: none;
    color: inherit;
  }
}
</style>
