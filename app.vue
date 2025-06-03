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
  padding: 4rem;
  margin-inline: auto;
  max-width: 75rem;
  background: #fff;
}
</style>
