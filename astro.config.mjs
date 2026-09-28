import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.dualstackstudio.com',
  integrations: [],
  output: 'static',
  redirects: {
    '/work/japan-lodge': '/work/japan-restaurant',
    '/de/work/japan-lodge': '/de/work/japan-restaurant',
  },
  vite: {
    ssr: {
      external: ['svgo']
    }
  }
});
