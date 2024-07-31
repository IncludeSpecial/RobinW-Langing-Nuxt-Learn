export default defineNuxtConfig({

  generate:{
    nojekyll: true, //not working on this version
    fallback: '404.html',
  },
  ssr: false, //When false
  target: "static", // and static, nuxt generates a SPA
  app: {
    baseURL: "/RobinW-Langing-Nuxt-Learn/"
  },
  modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt', '@nuxt/icon', "@nuxt/image"],
  devtools: false,
  shadcn: {

    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  },

  compatibilityDate: '2024-07-31'
})