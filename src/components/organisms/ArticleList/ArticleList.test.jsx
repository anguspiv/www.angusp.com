import { render, screen } from '@testing-library/react';
import { ArticleList } from './ArticleList';

describe('<ArticleList />', () => {
  it('should render an article list', () => {
    expect.assertions(5);

    const title = 'List Title';
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

    render(<ArticleList title={title} articles={articles} />);

    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(articles[0].title)).toBeInTheDocument();
    expect(screen.getByText(articles[1].title)).toBeInTheDocument();
    expect(screen.getByText(articles[0].excerpt)).toBeInTheDocument();
    expect(screen.getByText(articles[1].excerpt)).toBeInTheDocument();
  });
});
