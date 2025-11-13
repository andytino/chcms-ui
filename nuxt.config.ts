// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  alias: {
    '~': './app'
  },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()]
  },
  modules: ['@nuxt/ui', '@nuxt/eslint'],
  ui: {
    fonts: false,
    colorMode: false
  }
})
