import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/hri-site-dev/',
  plugins: [sveltekit()],
  server: {
    fs: {
      allow: [
        '/Users/vladiftime/Documents/Projects/HRI-webisite/hri-site-dev/static/Pics',
      ],
    },
  },
})