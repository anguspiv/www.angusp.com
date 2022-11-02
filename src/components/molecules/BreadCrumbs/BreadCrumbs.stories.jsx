import React from 'react';
import { BreadCrumbs } from './BreadCrumbs';

export default {
  component: BreadCrumbs,
  title: 'Components/Molecules/BreadCrumbs',
};

const Template = (args) => <BreadCrumbs {...args} />;

export const Default = Template.bind({});
Default.args = {
  location: {
    pathname: '/example/storybook/path',
    search: '?example=query',
  },
};
