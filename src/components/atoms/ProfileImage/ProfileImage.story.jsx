import React from 'react';
import ProfileImage from './ProfileImage';

export default {
  component: ProfileImage,
  title: 'Components/Atoms/ProfileImage',
};

const Template = (args) => <ProfileImage {...args} />;

export const Default = Template.bind({});
Default.args = {};
