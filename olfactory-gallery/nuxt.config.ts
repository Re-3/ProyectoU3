export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],

  // Para los Google Fonts (Noto Serif + Manrope + Material Symbols)
  app: {
    head: {
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,400;0,700;1,400&family=Manrope:wght@300;400;500;700&display=swap' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap' }
      ]
    }
  },

  // Si quieres usar @nuxtjs/google-fonts en vez de links manuales (opcional pero más limpio)
  // modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts'],
})
