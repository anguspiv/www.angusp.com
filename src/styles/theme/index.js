import { css } from '@emotion/react';
import { colors, colorsCSS } from './colors';
import { fonts, fontsCSS } from './fonts';
import { elevation, elevationCSS } from './elevation';
import { elementsCSS, text, link, page } from './elements';

export const themeCSS = css`
  ${colorsCSS}
  ${fontsCSS}
  ${elevationCSS}
  ${elementsCSS}
`;

export const theme = {
  colors,
  fonts,
  elevation,
  text,
  link,
  page,
};

export default theme;
