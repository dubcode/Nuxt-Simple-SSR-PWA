const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#222222' },

  /*
  ** Global CSS
  */
  css: [
    '~assets/css/main.css',
    '~assets/css/fonts/fonts.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {src: '@/assets/js/dw.js', ssr: false}
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],

  
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },
  

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
   //Toggle Class on click
   

    extend(config, ctx) {
      


    }
  }
}

export default {
  router: {
    base: '/dc2019/'
  }
}
