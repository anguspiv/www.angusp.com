import { ArticleList } from './ArticleList';

const articles = [
  {
    slug: 'article-1',
    title: 'Article 1',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur tempor, nisl nunc ultrices eros, eu porttitor nisl nunc eget lorem. Donec euismod, nisl eget consectetur tempor, nisl nunc ultrices eros, eu porttitor nisl nunc eget lorem.',
    date: '2019-01-01',
    readingTime: 7,
  },
  {
    slug: 'article-2',
    title: 'Article 2',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur tempor, nisl nunc ultrices eros, eu porttitor nisl nunc eget lorem. Donec euismod, nisl eget consectetur tempor, nisl nunc ultrices eros, eu porttitor nisl nunc eget lorem.',
    date: '2019-01-02',
    readingTime: 5,
  },
  {
    slug: 'article-3',
    title: 'Article 3',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur tempor, nisl nunc ultrices eros, eu porttitor nisl nunc eget lorem. Donec euismod, nisl eget consectetur tempor, nisl nunc ultrices eros, eu porttitor nisl nunc eget lorem.',
    date: '2019-01-04',
    readingTime: 8,
  },
  {
    slug: 'article-4',
    title: 'Article 4',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur tempor, nisl nunc ultrices eros, eu porttitor nisl nunc eget lorem. Donec euismod, nisl eget consectetur tempor, nisl nunc ultrices eros, eu porttitor nisl nunc eget lorem.',
    date: '2019-01-05',
    readingTime: 3,
  },
  {
    slug: 'article-5',
    title: 'Article 5',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur tempor, nisl nunc ultrices eros, eu porttitor nisl nunc eget lorem. Donec euismod, nisl eget consectetur tempor, nisl nunc ultrices eros, eu porttitor nisl nunc eget lorem.',
    date: '2019-01-05',
    readingTime: 15,
  },
];

export default {
  title: 'Components/Organisms/ArticleList',
  component: ArticleList,
};

const Template = (args) => <ArticleList {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: 'Articles',
  articles,
};
