export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Tema 5 - Templates, Pages & Platforms',
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
      //- de cautat pe google fonts 
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // '~/assets/css/style.scss',
    'bootstrap-vue/dist/bootstrap-vue.css',
    '~/node_modules/vue-slick-carousel/dist/vue-slick-carousel.css',
    '~/node_modules/vue-slick-carousel/dist/vue-slick-carousel-theme.css',
    '~/assets/css/templatemo-stand-blog.css',
    // '~/assets/css/flex-slider.css',
    // '~/assets/css/fontawesome.css',
    // '~/assets/css/owl.css',
    //- '~/assets/fonts/',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: '~plugins/vuelidate',
      mode: 'client'
    },
    {
      src: '~/plugins/slick',
      ssr: false,
    },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
  ],

  bootstrapVue: {
    bootstrapCSS: true,
    bootstrapVueCSS: true
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
