import {resolve} from "node:dns";

export default defineNuxtConfig({
  app: {
    baseURL: '/RobinW-Langing-Nuxt-Learn/'
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