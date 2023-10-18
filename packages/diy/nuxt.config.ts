// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  experimental: { typedPages: true },
  css: ["@picocss/pico"],
  runtimeConfig: {
    url: "http://localhost:3000",
    github: {
      clientId: "",
      clientSecret: ""
    }
  }
})
