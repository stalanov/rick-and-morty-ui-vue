<template>
  <header class="header">
    <img class="header-logo" src="../assets/logo.png" />
    <nav class="header-nav">
      <RouterLink class="header-nav-button" :to="{ name: 'characters' }">Characters</RouterLink>
      <RouterLink class="header-nav-button" :to="{ name: 'favorites' }">Favorites</RouterLink>
    </nav>
  </header>
</template>

<style scoped lang="scss">
.header-logo {
  max-width: 1280px;
  width: 100%;
}
</style>
