import { defineConfig } from 'astro/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  integrations: [react()],
});