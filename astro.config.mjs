import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.dualstackstudio.com',
  integrations: [],
  output: 'static',
  redirects: {
    // the Creative page is the home page now
    '/creative': '/',
    '/de/creative': '/de/',
    '/es/creative': '/es/',
    '/work/japan-lodge': '/work/japan-restaurant',
    '/de/work/japan-lodge': '/de/work/japan-restaurant',
    '/es/work/japan-lodge': '/work/japan-restaurant',
    '/photography/close-to-home': '/photography',
    '/photography/japan': '/photography',
    '/de/photography/close-to-home': '/de/photography',
    '/de/photography/japan': '/de/photography',
    '/es/photography/close-to-home': '/es/photography',
    '/es/photography/japan': '/es/photography',
  },
  vite: {
    ssr: {
      external: ['svgo']
    }
  }
});
