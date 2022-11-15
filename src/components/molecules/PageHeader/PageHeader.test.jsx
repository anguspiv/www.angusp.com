import { render, screen } from '@testing-library/react';
import { PageHeader } from './PageHeader';

describe('<PageHeader />', () => {
  it('should render the page header', () => {
    expect.assertions(10);

    const location = {
      pathname: '/somewhere/else-where',
    };

    const excerpt = 'This is the excerpt';

    render(
      <PageHeader
        title="Test Title"
        location={location}
        publishDate="2010-12-02"
        readingTime={10}
        tags={['Test Tag']}
        excerpt={excerpt}
        featuredImage="https://via.placeholder.com/300"
      />,
    );

    expect(screen.getByRole('heading', { name: 'Test Title' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Somewhere' })).toHaveAttribute('href', '/somewhere');
    expect(screen.getByText('Else Where')).toBeInTheDocument();
    expect(screen.getByText('Dec. 2nd, 2010')).toBeInTheDocument();
    expect(screen.getByText('Reading Time: 10 min.')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Test Tag' })).toHaveAttribute(
      'href',
      '/tags/test-tag',
    );
    expect(screen.getByText(excerpt)).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src');
    expect(screen.getByRole('img')).toHaveAttribute('alt', '');
    expect(screen.getByTestId('featured-image')).toHaveStyle({ order: 2 });
  });

  it('should render the featured image on top', () => {
    expect.assertions(1);

    const location = {
      pathname: '/somewhere/else-where',
    };

    const excerpt = 'This is the excerpt';

    render(
      <PageHeader
        title="Test Title"
        location={location}
        publishDate="2010-12-02"
        readingTime={10}
        tags={['Test Tag']}
        excerpt={excerpt}
        featuredImage="https://via.placeholder.com/300"
        variant="imageTop"
      />,
    );

    expect(screen.getByTestId('featured-image')).toHaveStyle({ order: 1, marginBottom: 0 });
  });

  it('should render the readingTime text', () => {
    expect.assertions(1);

    const location = {
      pathname: '/somewhere/else-where',
    };

    render(
      <PageHeader
        title="test"
        location={location}
        publishDate="2010-12-02"
        readingTime={{
          text: '10 min read',
        }}
      />,
    );

    expect(screen.getByText('10 min read')).toBeInTheDocument();
  });
});
