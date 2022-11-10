import { css } from '@emotion/react';
import { rem } from 'polished';
import { colors } from './colors';

export const link = {
  color: {
    default: colors.blue,
    visited: colors.purple,
    hover: colors.teal,
  },
  dark: {
    default: colors.teal,
    visited: colors.purple,
    hover: colors.blue,
  },
};

export const linkCSS = css`
  --link-color-default: ${link.color.default};
  --link-color-visited: ${link.color.visited};
  --link-color-hover: ${link.color.hover};
  --link-color-light: ${link.color.defaault};
  --link-color-dark: ${link.dark.default};
  --link-color-dark-visited: ${link.dark.visited};
  --link-color-dark-hover: ${link.dark.hover};
`;

export const text = {
  color: {
    default: colors.black,
    light: colors.black,
    dark: colors.offWhite,
    muted: colors.gray,
  },
};

export const textCSS = css`
  --text-color-default: ${text.color.default};
  --text-color-light: ${text.color.light};
  --text-color-dark: ${text.color.dark};
  --text-color-muted: ${text.color.muted};
`;

export const page = {
  width: rem(800),
};

export const pageCSS = css`
  --page-width: ${page.width};
`;

export const elementsCSS = css`
  ${linkCSS}
  ${textCSS}
  ${pageCSS}
`;
