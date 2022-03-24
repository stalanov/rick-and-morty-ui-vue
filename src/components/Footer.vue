<template>
  <n-layout-footer class="footer" bordered>
    <div>{{ year }} — GridU — Vue.Js</div>
    <a class="footer__github" href="https://github.com/gridu/Vue.js-Sergey-Talanov" target="_blank">
      <n-icon :size="22" :component="LogoGithub" />
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

  &__github {
    @include vertical-align;
    position: absolute;
    right: 1em;
    top: 0;
    text-decoration: none;
    color: var(--n-text-color);
  }
}
</style>
