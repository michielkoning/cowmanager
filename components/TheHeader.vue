<template>
  <header></header>
</template>

<style scoped>
header {
  background-color: #be0000;
  color: white;
  display: flex;
  justify-content: center;
}

nav {
  margin-inline: auto;
  max-width: 75rem;
}

@media print {
  header {
    display: none;
  }
}
</style>
