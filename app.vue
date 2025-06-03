<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Michiel Koning` : "Michiel Koning";
  },
});
</script>

<template>
  <main>
    <nuxt-page />
  </main>
</template>

<style scoped>
@media print {
  main {
    box-shadow: none;
    padding: 0;
    margin: 0;
    max-width: none;
    background: pink;
  }
}

main {
  box-shadow: 0 10px 99px rgba(0, 0, 0, 0.15);
  padding: 2rem 1rem;
  margin-inline: auto;
  max-width: 75rem;
  background: #fff;
}

@media screen and (min-width: 64rem) {
  main {
    padding: 4rem 4rem;
  }
}
</style>
