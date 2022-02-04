import React from 'react';
import ArticleList from './ArticleList';

export default {
  component: ArticleList,
  title: 'Components/Molecules/ArticleList',
};

const Template = (args) => <ArticleList {...args} />;

export const Default = Template.bind({});
Default.args = {};
