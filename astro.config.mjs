import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://resumeprotips.com',
  output: 'static',
  integrations: [],
  vite: { plugins: [tailwindcss()] },
  build: { format: 'file' },
});

