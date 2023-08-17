// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  typescript: { strict: true },
  modules: [
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          Inter: true,
          download: true,
          inject: true,
        },
      },
    ],
  ],
})
