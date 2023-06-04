// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
  ],
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL
    }
  },
  css: ['~/assets/css/app.scss'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  devServer: {
    port: 3010,
  }
})
