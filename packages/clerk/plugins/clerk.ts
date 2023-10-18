import { clerkPlugin } from "vue-clerk"

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(clerkPlugin, {
    publishableKey: useRuntimeConfig().public.clerkPublishableKey
  })
})
