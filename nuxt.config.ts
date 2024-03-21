// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      script: [
        { src: 'https://cdn.withpersona.com/dist/persona-v4.11.0.js', type: 'text/javascript' }
      ],
    }
  },
})
