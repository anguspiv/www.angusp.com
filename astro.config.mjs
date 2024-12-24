import { defineConfig } from 'astro/config';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import react from '@astrojs/react';
import netlify from '@astrojs/netlify';

export const config = {
  plugins: [vanillaExtractPlugin({})],
  resolve: {
    alias: {
      '@': '/src',
      '~/': '/',
    },
  },
};

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  vite: config,
  output: 'static',
  adapter: netlify(),
});
