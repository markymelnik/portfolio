import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import path from 'path';

export default defineConfig({
  integrations: [react()],
  vite: {
    resolve: {
      alias: {
        '@styles': path.resolve('src/styles'),
      }
    },
  }
});