import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import { ThemeProvider } from 'styled-components';
import theme from '@styles';
import ArticleList from './ArticleList';

describe('<ArticleList />', () => {
  const setupArticleList = (props) =>
    render(
      <ThemeProvider theme={theme}>
        <ArticleList {...props} />
      </ThemeProvider>,
    );

  it('should render without crashing', () => {
    expect.assertions(1);

    const { container } = setupArticleList();

    expect(container).toBeTruthy();
  });

  it('should be accessible', async () => {
    expect.assertions(1);

    const { container } = setupArticleList({
      title: 'Article title',
      excerpt: 'Article excerpt',
    });

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  it('should render a header', () => {
    expect.assertions(1);

    const title = 'List Title';

    const { getByText } = setupArticleList({ title });

    expect(getByText(title)).toBeInTheDocument();
  });

  it('should render a list of articles', () => {
    expect.assertions(4);

    const articles = [
      {
        title: 'Article title 1',
        excerpt: 'Article excerpt 1',
        slug: 'article-slug-1',
      },
      {
        title: 'Article title 2',
        excerpt: 'Article excerpt 2',
        slug: 'article-slug-2',
      },
    ];

    const { getByText } = setupArticleList({ articles });

    articles.forEach((article) => {
      expect(getByText(article.title)).toBeInTheDocument();
      expect(getByText(article.excerpt)).toBeInTheDocument();
    });
  });
});
