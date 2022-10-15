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
  --fonts-family-sans-serif: ${fonts.family.sansSerif};
  --fonts-family-monospace: ${fonts.family.monospace};
  --fonts-family-base: ${fonts.family.base};
  --fonts-size-base: ${fonts.size.base};
`;

export default fonts;
