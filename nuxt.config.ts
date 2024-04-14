// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: ".",
  },
  devtools: { enabled: true },
  modules: [
    'vuetify-nuxt-module'
  ],
  ssr: false,
})
