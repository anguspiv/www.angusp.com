import React from 'react';
import Tags from './Tags';

export default {
  component: Tags,
  title: 'Components/Atoms/Tags',
};

const Template = (args) => <Tags {...args} />;

export const Default = Template.bind({});
Default.args = {
  tags: [
    { name: 'Career', slug: 'career', color: '#fff' },
    { name: 'Technology', slug: 'technology', color: '#f00' },
    { name: 'JavaScript', slug: 'javascript', color: '#ff0' },
    { name: 'PokerMans', slug: 'pokermans', color: '#f0f' },
  ],
};
