import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // https://v3.nuxtjs.org/guide/features/runtime-config
  runtimeConfig: {
    public: {
      apiHost: 'https://bbavbtoga8rvputnh66l.containers.yandexcloud.net',
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
    },
  },
  css: ['~/assets/css/tailwind.css'],
});
