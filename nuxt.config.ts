// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-04-03",
    modules: ["@nuxt/ui", "nuxt-lodash", "@vueuse/nuxt", "@nuxtjs/i18n"],
    css: ["~/assets/css/main.css", "animate.css/animate.min.css"],
    colorMode: {
        preference: "dark",
    },
    ssr: false,
});
