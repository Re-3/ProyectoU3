import type { Config } from 'tailwindcss'

export default {
  darkMode: "class",
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./app.vue"
  ],
  theme: {
    extend: {
      colors: {
        // Aquí pega todo tu objeto de colores que tenías (on-secondary-fixed, surface-container-low, primary, etc.)
        "on-secondary-fixed": "#1b1c1c",
        "surface-container-low": "#f6f3f2",
        // ... (copia todos los colores que pusiste en tu HTML)
        "primary": "#775a19",
        // etc.
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        lg: "0.25rem",
        xl: "0.5rem",
        full: "0.75rem"
      },
      fontFamily: {
        headline: ["Noto Serif", "serif"],
        body: ["Manrope", "sans-serif"],
        label: ["Manrope", "sans-serif"]
      }
    }
  }
} satisfies Config
