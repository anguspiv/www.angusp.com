/// <reference types="vitest/config" />
import { defineConfig } from 'astro/config';
import { config } from './astro.config.mjs';

export default defineConfig({
  ...config,
  // @ts-expect-error - this is a vitest config
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.ts',
    coverage: {
      // you can include other reporters, but 'json-summary' is required, json is recommended
      reporter: ['text', 'json-summary', 'json'],
      // If you want a coverage reports even if your tests are failing, include the reportOnFailure option
      reportOnFailure: true,
    },
    typecheck: true,
  },
});
