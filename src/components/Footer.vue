<template>
  <n-layout-footer class="footer" bordered>
    <div class="footer__disclaimer">
      <small>
        <strong>Disclaimer:</strong>
        This is an unofficial, non-commercial fan-made project created for educational and entertainment purposes. Rick
        and Morty, its characters, names, images and related trademarks are the property of their respective owners.
        This project is not affiliated with, endorsed by, or associated with Adult Swim or Warner Bros. Discovery.
        Character data and images are provided by
        <a href="https://rickandmortyapi.com/" target="_blank" rel="noopener noreferrer">Rick and Morty API</a>. All
        rights to the original content remain with their respective copyright holders.
      </small>
    </div>
    <div class="footer__creds">
      <div>{{ year }} — Rick and Morty UI — Vue.Js</div>
      <a
        class="footer__github"
        href="https://github.com/stalanov/rick-and-morty-ui-vue"
        target="_blank"
        rel="noopener noreferrer"
      >
        <n-icon :size="22" :component="LogoGithub" />
      </a>
    </div>
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

  &__disclaimer {
    border-bottom: 1px solid var(--n-border-color);
    max-width: 800px;
    font-size: 0.75rem;
    color: #888;
    line-height: 1.6;
    margin: 0 auto;
    padding: 1em 0;
  }

  &__creds {
    position: relative;
  }

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
