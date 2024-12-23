import globals from 'globals';
import pluginJs from '@eslint/js';
import typescript from 'typescript-eslint';
import react from 'eslint-plugin-react';
import storybook from 'eslint-plugin-storybook';
import prettier from 'eslint-config-prettier';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { globals: globals.browser } },
  { ignores: ['!.storybook', 'dist', '.astro'] },
  { settings: { react: { version: 'detect' } } },
  pluginJs.configs.recommended,
  ...typescript.configs.recommended,
  react.configs.flat.recommended,
  react.configs.flat['jsx-runtime'],
  ...storybook.configs['flat/recommended'],
  prettier,
];
