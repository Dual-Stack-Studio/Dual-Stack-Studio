import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.dualstackstudio.com',
  integrations: [],
  output: 'static',
  vite: {
    ssr: {
      external: ['svgo']
    }
  }
});
