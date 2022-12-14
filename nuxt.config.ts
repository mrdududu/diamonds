import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // https://v3.nuxtjs.org/guide/features/runtime-config
  runtimeConfig: {
    smtpHost: '',
    smtpPort: '',
    smtpUser: '',
    smtpPass: '',
    mailFrom: '',
    mailTo: '',
    public: {
      apiHost: '',
    },
  },
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/svg', href: '/favicon.svg' }],
      script: [{ lang: 'text/javascript', src: '/js/ym.js' }],
    },
  },
  css: ['~/assets/css/tailwind.css'],
  modules: ['@vueuse/nuxt'],
});
