import React from 'react';
import Avatar from './Avatar';

export default {
  component: Avatar,
  title: 'Components/Molecules/Avatar',
};

const Template = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {};
