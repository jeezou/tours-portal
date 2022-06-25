<template>
  <router-view />
</template>

<style lang="scss">
@import url("static/reset.css");
@import url("https://fonts.googleapis.com/css2?family=Roboto+Mono&family=Roboto:wght@400;500;700;900&display=swap");

html {
  scroll-behavior: smooth;
}

#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  overflow-x: hidden;
}
</style>
