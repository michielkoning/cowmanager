<script lang="ts" setup>
useSeoMeta({
  title: "CV",
  description:
    "Ervaren frontend developer met een grafische achtergrond en een focus op performance en accessibility.",
});
</script>

<template>
  <div>
    <h1>CV</h1>
    <the-profile />

    <h2>Specaliteiten</h2>
    <p>HTML | CSS | UI | Accessibility | Seo | Performance</p>

    <h2>Gewerkt met</h2>
    <p>
      Nuxtjs | Vuejs | Reactjs | Azure | Netlify | Supabase | Vitest | Jest |
      NodeJs | Sass | Less | Contentstack | Contentful | Sitecore | Scrum | NX |
      React Admin | PWA | Figma | Sketch
    </p>

    <work-experience />

    <h2>Opleidingen</h2>
    <ul>
      <li>Cursus Grafisch Vormgeving, Grafisch Lyceum Utrecht</li>
      <li>Communicatie Systemen, Hoge school van Arnhem en Nijmegen</li>
    </ul>
  </div>
</template>
