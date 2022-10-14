import React from 'react';
import Tag from './Tag';

export default {
  component: Tag,
  title: 'Components/Atoms/Tag',
};

const Template = (args) => <Tag {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'Cool Tag',
  slug: 'cool-tag',
};
