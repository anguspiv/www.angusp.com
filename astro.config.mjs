import { defineConfig } from 'astro/config';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import react from '@astrojs/react';

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
};

// https://astro.build/config
export default defineConfig(config);
