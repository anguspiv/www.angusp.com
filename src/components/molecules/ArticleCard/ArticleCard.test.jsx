import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import { ThemeProvider } from 'styled-components';
import theme from '@styles';
import ArticleCard from './ArticleCard';

describe('<ArticleCard />', () => {
  const setupArticleCard = (props) =>
    render(
      <ThemeProvider theme={theme}>
        <ArticleCard {...props} />
      </ThemeProvider>,
    );

  it('should render without crashing', () => {
    expect.assertions(1);

    const { container } = setupArticleCard();

    expect(container).toBeTruthy();
  });

  it('should be accessible', async () => {
    expect.assertions(1);

    const { container } = setupArticleCard({
      title: 'Article title',
      excerpt: 'Article excerpt',
    });

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  it('should render the title', () => {
    expect.assertions(1);

    const title = 'Test Header Text';

    const { getByText } = setupArticleCard({ title });

    expect(getByText(title)).toBeInTheDocument();
  });

  it('should render the excerpt', () => {
    expect.assertions(1);

    const excerpt = 'Test excerpt text';

    const { getByText } = setupArticleCard({ excerpt });

    expect(getByText(excerpt)).toBeInTheDocument();
  });

  it('should render the article date', () => {
    expect.assertions(1);

    const date = 'January 1st, 2020';

    const { getByText } = setupArticleCard({ date });

    expect(getByText(date)).toBeInTheDocument();
  });

  it('should render the reading time', () => {
    expect.assertions(1);

    const readingTime = 5;

    const { getByText } = setupArticleCard({ readingTime });

    expect(getByText(`${readingTime} min. read`)).toBeInTheDocument();
  });

  it('should link to the article', () => {
    expect.assertions(1);

    const { getByRole } = setupArticleCard({
      title: 'Article title',
      excerpt: 'Article excerpt',
      slug: 'article-slug',
    });

    expect(getByRole('link')).toHaveAttribute('href', '/articles/article-slug');
  });
});
