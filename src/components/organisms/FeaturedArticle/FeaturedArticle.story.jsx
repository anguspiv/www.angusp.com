import React from 'react';
import FeaturedArticle from './FeaturedArticle';

export default {
  component: FeaturedArticle,
  title: 'Components/Molecules/FeaturedArticle',
};

const Template = (args) => <FeaturedArticle {...args} />;

export const Default = Template.bind({});
Default.args = {};
