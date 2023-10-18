import { resolve } from "node:path"

export default defineNuxtConfig({
  experimental: { typedPages: true },
  devtools: { enabled: true },
  css: ["@picocss/pico"],
  modules: ["@hebilicious/authjs-nuxt"],
  alias: {
    cookie: resolve(__dirname, "node_modules/cookie")
  },
  authJs: {
    guestRedirectTo: "/redirected",
    authenticatedRedirectTo: "/private"
  },
  runtimeConfig: {
    authJs: { secret: "/OEjlRC2DK74ZEj5nl8qHNy+E6/JptnouIyHnANbBz0=" },
    github: {
      clientId: "",
      clientSecret: ""
    }
  }
})
