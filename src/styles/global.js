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

export const global = css`
  ${normalize}

  :root {
    ${themeCSS}
  }

  html {
    box-sizing: border-box;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  ${typography.toString()}

  html,
  body {
    padding: 0;
    margin: 0;
    min-height: 100vh;
    min-width: 100vw;
    background-color: var(--color-background-default);
    color: var(--color-text-default);
    font-family: var(--font-family-base);
    font-size: var(--font-size-base);
    line-heignt: 1.5;
    word-wrap: break-word;
  }

  a {
    background-color: transparent;
    color: var(--color-link-default);
    text-decoration: underline;
    transition: color 0.2s ease-in-out;
  }

  a:active,
  a:hover {
    outline-width: 0;
  }

  a:visted {
    color: var(--color-link-visited);
  }

  a:hover {
    color: var(--color-link-hover);
  }
`;

export default global;