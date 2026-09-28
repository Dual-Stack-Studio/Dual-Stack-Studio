import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.dualstackstudio.com',
  integrations: [],
  output: 'static',
  redirects: {
    '/work/japan-lodge': '/work/japan-restaurant',
    '/de/work/japan-lodge': '/de/work/japan-restaurant',
    '/photography/close-to-home': '/photography',
    '/photography/japan': '/photography',
    '/de/photography/close-to-home': '/de/photography',
    '/de/photography/japan': '/de/photography',
  },
  vite: {
    ssr: {
      external: ['svgo']
    }
  }
});
