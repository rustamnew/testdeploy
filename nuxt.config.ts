// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

    modules: [
        '@pinia/nuxt',
        '@nuxtjs/google-fonts',
    ],
    css: ['~/assets/css/main.css'],

    googleFonts: {
        preload: true,

        families: {
            Montserrat: [400, 500, 600, 700, 800],
        },
    },
})
