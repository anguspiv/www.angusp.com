import { defineConfig } from 'astro/config';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import react from '@astrojs/react';
import netlify from '@astrojs/netlify';

import sentry from '@sentry/astro';

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
  integrations: [
    react(),
    sentry({
      sourceMapsUploadOptions: {
        project: 'www-angusp-com',
        authToken: process.env.SENTRY_AUTH_TOKEN,
      },
    }),
  ],
  vite: config,
  output: 'static',
  adapter: netlify(),
});
