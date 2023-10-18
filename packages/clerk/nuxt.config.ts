export default defineNuxtConfig({
  devtools: { enabled: true },
  experimental: { typedPages: true },
  css: ["@picocss/pico"],
  build: {
    transpile: ["vue-clerk", "@clerk/clerk-js"]
  },
  runtimeConfig: {
    public: {
      clerkPublishableKey: ""
    },
    clerkSecretKey: ""
  }
})
