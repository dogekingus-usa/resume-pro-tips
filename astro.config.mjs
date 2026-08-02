import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://resumeprotips.com',
  output: 'static',
  integrations: [tailwind()],
  build: { format: 'directory' },
});
