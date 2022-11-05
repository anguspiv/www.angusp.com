import { FeaturedArticle } from './FeaturedArticle';

export default {
  component: FeaturedArticle,
  title: 'Components/Organisms/FeaturedArticle',
};

const Template = (args) => <FeaturedArticle {...args} />;

export const Default = Template.bind({});

Default.args = {
  article: {
    date: '2021-01-01',
    excerpt: 'Article excerpt',
    readingTime: 10,
    slug: 'article-slug',
    title: 'Article title',
  },
};
