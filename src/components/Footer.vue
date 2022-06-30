<template>
  <n-layout-footer class="footer" bordered>
    <div>{{ year }} — Rick and Morty UI — Vue.Js</div>
    <a class="footer__github" href="https://github.com/stalanov/rick-and-morty-ui-vue" target="_blank">
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
