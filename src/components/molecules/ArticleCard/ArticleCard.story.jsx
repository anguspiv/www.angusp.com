import React from 'react';
import ArticleCard from './ArticleCard';

export default {
  component: ArticleCard,
  title: 'Components/Molecules/ArticleCard',
};

const Template = (args) => <ArticleCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  date: 'January 1st, 2020',
  excerpt: `Elit fugiat sit pariatur et. Velit aute elit esse aliquip exercitation
    reprehenderit et adipisicing eiusmod qui magna. Proident velit veniam eu
    ut ut velit esse dolore minim. Veniam occaecat dolore tempor aute. Non amet
    ipsum duis consectetur quis sunt. Nostrud nostrud mollit amet amet cupidatat
    et. Eiusmod enim consequat deserunt exercitation ut minim aute cupidatat
    cillum.`,
  readingTime: 3,
  slug: 'article-slug',
  title: 'Article Title',
};
