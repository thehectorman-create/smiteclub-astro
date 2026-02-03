// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://events.smiteclub40k.com',
  output: 'static',
  build: {
    format: 'directory'
  }
});
