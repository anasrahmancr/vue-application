import en from './locales/content-en.json'
import es from './locales/content-es.json'
import pt from './locales/content-pt.json'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'vue-assessment',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/styles/index.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vee-validate.js',
    '~/plugins/v-mask.js',
    '~/plugins/vuex.js',
    { src: '~/plugins/vuex-persist.js' , ssr: false},
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules:
    [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/i18n',
  ],
  i18n: {
    // lazy: true,
    // langDir: "locales/",
    strategy: "no_prefix",
    locales: [
      {code: 'en', iso: 'en-US', name: 'English'},
      {code: 'es', iso: 'es-ES', name: 'Spanish'},
      {code: 'pt', iso: 'pt-PT', name: 'Portugese'},
    ],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: { en, es, pt }
    },
    // detectBrowserLanguage: {
    //   useCookie: true
    // }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ["vee-validate/dist/rules"],
  }
}
