import { defineConfig } from 'astro/config';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import react from '@astrojs/react';
import netlify from '@astrojs/netlify';

export const config = {
  integrations: [react()],
  vite: {
    plugins: [vanillaExtractPlugin({})],
    resolve: {
      alias: {
        '@': '/src',
        '~': '/',
      },
    },
  },
  output: 'static',
  adapter: netlify(),
};

// https://astro.build/config
export default defineConfig(config);
