import { css } from '@emotion/react';

export const fonts = {
  family: {
    sansSerif: '"Open Sans", sans-serif',
    monospace: '"Fira Code", monospace',
    base: '"Open Sans", sans-serif',
  },
  size: {
    base: '16px',
  },
};

export const fontsCSS = css`
  --font-family-sans-serif: ${fonts.family.sansSerif};
  --font-family-monospace: ${fonts.family.monospace};
  --font-family-base: ${fonts.family.base};
  --font-size-base: ${fonts.size.base};
`;

export default fonts;
