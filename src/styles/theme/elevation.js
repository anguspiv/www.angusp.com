import { css } from '@emotion/react';

export const elevation = {
  none: 'none',
  xsmall: '0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 1px 2px 0 rgba(0, 0, 0, 0.24)',
  small: '0 3px 6px 0 rgba(0, 0, 0, 0.16), 0 3px 6px 0 rgba(0, 0, 0, 0.23)',
  medium: '0 10px 20px 0 rgba(0, 0, 0, 0.19), 0 6px 6px 0 rgba(0, 0, 0, 0.23)',
  large: '0 15px 25px 0 rgba(0, 0, 0, 0.24), 0 5px 10px 0 rgba(0, 0, 0, 0.22)',
  xlarge: '0 20px 40px 0 rgba(0, 0, 0, 0.3), 0 5px 10px 0 rgba(0, 0, 0, 0.22)',
};

export const elevationCSS = css`
  --elevation-none: ${elevation.none};
  --elevation-xsmall: ${elevation.xsmall};
  --elevation-small: ${elevation.small};
  --elevation-medium: ${elevation.medium};
  --elevation-large: ${elevation.large};
  --elevation-xlarge: ${elevation.xlarge};
`;

export default elevation;
