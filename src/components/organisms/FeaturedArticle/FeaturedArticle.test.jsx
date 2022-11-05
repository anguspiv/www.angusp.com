import { render, screen } from '@testing-library/react';
import { FeaturedArticle } from './FeaturedArticle';

describe('<FeaturedArticle />', () => {
  it('should render the featured article', () => {
    expect.assertions(3);

    const article = {
      title: 'Article title',
      excerpt: 'Article excerpt',
    };

    render(<FeaturedArticle article={article} />);

    expect(screen.getByText(article.title)).toBeInTheDocument();
    expect(screen.getByText(article.excerpt)).toBeInTheDocument();
    expect(screen.getByText('Featured')).toBeInTheDocument();
  });
});
