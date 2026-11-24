import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://howmuch.jokerx04.com',
  integrations: [sitemap()],
  build: {
    format: 'directory',
  },
});
