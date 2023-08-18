// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
    'nuxt-vuefire',
  ],
  
  vuefire: {
    config: {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      projectId: process.env.FIREBASE_PROJECT_ID,
      appId: process.env.FIREBASE_APP_ID,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      measurementId: process.env.FIREBASE_MEASUREMENT_ID,
      databaseURL: process.env.FIREBASE_DATABASE_URL,
    },
  },

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
  },
  nitro: { preset: 'vercel-edge' },
})
