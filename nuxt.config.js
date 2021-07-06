export default {
  ssr: false,

  target: 'static',

  head: {
    title: 'Pasta! 🍝',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }, { hid: 'description', name: 'description', content: 'Paste Code or Text, and view it later :)' }, { name: 'format-detection', content: 'telephone=no' }],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/spaghetti.png' }],
  },

  css: ['@/static/style.css'],

  plugins: ['plugins/supabase.client.js'],

  components: true,

  buildModules: ['@nuxtjs/eslint-module'],

  modules: [
    '@nuxtjs/axios',
    [
      'nuxt-highlightjs',
      {
        style: 'obsidian',
      },
    ],
    '@nuxtjs/toast',
    'nuxt-clipboard',
  ],

  toast: {
    position: 'top-right',
    duration: 2400,
  },

  axios: {},

  build: {},
}
