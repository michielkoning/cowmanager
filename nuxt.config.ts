// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["/assets/css/styles.css"],
  modules: ["@nuxt/content", "@nuxt/fonts", "@nuxt/eslint"],
  app: {
    head: {
      meta: [
        {
          name: "viewport",
          content: "width=device-width,initial-scale=1",
        },

        { name: "mobile-web-app-capable", content: "yes" },
        { name: "apple-mobile-web-app-capable", content: "yes" },
        {
          name: "apple-mobile-web-app-status-bar-style",
          content: "black",
        },
        { name: "apple-mobile-web-app-title", content: "CV - Michiel Koning" },
        { name: "theme-color", content: "#be0000" },
      ],
      link: [
        {
          rel: "icon",
          href: "/favicon.svg",
          type: "image/svg+xml",
        },
      ],
    },
  },
});
