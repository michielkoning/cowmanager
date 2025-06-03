<script setup lang="ts">
const { data } = await useAsyncData(() =>
  queryCollection("content").path("/").first(),
);
</script>

<template>
  <div>
    <content-renderer v-if="data" :value="data" />
  </div>
</template>

<style scoped>
div {
  font-family: "Fira Sans", sans-serif;
  line-height: 1.875rem;
  font-weight: 400;
}
</style>
