import { css } from '@emotion/react';
import normalize from 'emotion-normalize';
import Typography from 'typography';
import CodePlugin from 'typography-plugin-code';
import { themeCSS } from './theme';

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.666,
  headerFontFamily: ['Open Sans', 'sans-serif'],
  bodyFontFamily: ['Open Sans', 'sans-serif'],
  plugins: [new CodePlugin()],
});

const typographyCSS = typography.toString();

export const global = css`
  ${normalize}

  :root {
    ${themeCSS}
  }

  /* Typography.js styles */
  ${typographyCSS}

  html {
    box-sizing: border-box;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    min-height: 100vh;
    min-width: 100vw;
    background-color: var(--color-background-default);
    color: var(--text-color-default);
  }

  a {
    background-color: transparent;
    color: var(--link-color-default);
    text-decoration: none;
    transition: color 0.2s ease-in-out;
  }

  a:active,
  a:hover {
    outline-width: 0;
    text-decoration: underline;
  }

  a:visted {
    color: var(--link-color-visited);
  }

  a:hover {
    color: var(--link-color-hover);
  }

  code,
  pre {
    font-family: var(--font-family-monospace);
  }
`;

export default global;
