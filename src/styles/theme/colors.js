import { css } from '@emotion/react';

export const colors = {};

colors.white = '#fff';
colors.offWhite = '#eee';
colors.black = '#111';
colors.red = '#d9534f';
colors.orange = '#f0ad4e';
colors.yellow = '#ffd500';
colors.green = '#5cb85c';
colors.blue = '#025eae';
colors.teal = '#0283f1';
colors.pink = '#ff5b77';
colors.purple = '#613d7c';
colors.gray = '#666';

export const brandCSS = css`
  --color-white: ${colors.white};
  --color-off-white: ${colors.offWhite};
  --color-black: ${colors.black};
  --color-red: ${colors.red};
  --color-orange: ${colors.orange};
  --color-yellow: ${colors.yellow};
  --color-green: ${colors.green};
  --color-blue: ${colors.blue};
  --color-teal: ${colors.teal};
  --color-pink: ${colors.pink};
  --color-purple: ${colors.purple};
  --color-gray: ${colors.gray};
`;

colors.facebook = '#3b5998';
colors.twitter = '#55acee';
colors.linkedin = '#0077b5';
colors.medium = '#00ab6c';
colors.github = '#333333';

export const socialCSS = css`
  --color-facebook: ${colors.facebook};
  --color-twitter: ${colors.twitter};
  --color-linkedin: ${colors.linkedin};
  --color-github: ${colors.github};
  --color-medium: ${colors.medium};
`;

colors.background = {
  default: colors.white,
  dark: colors.black,
  light: colors.offWhite,
};

export const backtgroundCSS = css`
  --color-background-default: ${colors.background.default};
  --color-background-light: ${colors.background.light};
  --color-background-dark: ${colors.background.dark};
`;

export const colorsCSS = css`
  ${brandCSS}
  ${backtgroundCSS}
  ${socialCSS}
`;

export default colors;
