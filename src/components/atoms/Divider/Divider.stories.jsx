import React from 'react';
import { css } from '@emotion/react';
import Divider from './Divider';

export default {
  component: Divider,
  title: 'Components/Atoms/Divider',
};

const Template = ({ width, height, ...args }) => (
  <div
    css={css`
      width: ${width || '100%'};
      height: ${height || '100%'};
    `}
  >
    <Divider {...args} />
  </div>
);

export const Default = Template.bind({});

Default.args = {
  vertical: false,
  width: '300px',
  height: '300px',
};
