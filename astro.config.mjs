import { defineConfig } from 'astro/config'
import vercel from '@astrojs/vercel'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  output: 'static',
  adapter: vercel(),
  site: 'https://veerify.io',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'no'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
})
