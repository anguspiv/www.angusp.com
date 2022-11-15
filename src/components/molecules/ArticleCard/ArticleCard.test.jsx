import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '@emotion/react';
import { rem } from 'polished';
import { theme } from '@styles/theme';
import { ArticleCard } from './ArticleCard';

describe('<ArticleCard />', () => {
  it('renders an article card', () => {
    expect.assertions(5);

    const title = 'Test Title';
    const excerpt = 'Test excerpt';
    const date = '2021-01-01';
    const readingTime = 1;
    const slug = 'test-title';

    render(
      <ThemeProvider theme={theme}>
        <ArticleCard
          title={title}
          excerpt={excerpt}
          date={date}
          readingTime={readingTime}
          slug={slug}
        />
      </ThemeProvider>,
    );

    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(excerpt)).toHaveStyle({
      fontSize: rem(12),
    });
    expect(screen.getByText('Jan. 1st, 2021')).toBeInTheDocument();
    expect(screen.getByText(`${readingTime} min. read`)).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute('href', `/posts/${slug}`);
  });

  it('renders a featured article card', () => {
    expect.assertions(5);

    const title = 'Test Title';
    const excerpt = 'Test excerpt';
    const date = '2021-01-01';
    const readingTime = 1;
    const slug = 'test-title';

    render(
      <ThemeProvider theme={theme}>
        <ArticleCard
          title={title}
          excerpt={excerpt}
          date={date}
          readingTime={readingTime}
          slug={slug}
          featured
        />
      </ThemeProvider>,
    );

    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(excerpt)).toHaveStyle({
      fontSize: rem(14),
    });
    expect(screen.getByText('Jan. 1st, 2021')).toBeInTheDocument();
    expect(screen.getByText(`${readingTime} min. read`)).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute('href', `/posts/${slug}`);
  });

  it('renders an article card with readingTime object', () => {
    expect.assertions(5);

    const title = 'Test Title';
    const excerpt = 'Test excerpt';
    const date = '2021-01-01';
    const readingTime = { text: '12 min read' };
    const slug = 'test-title';

    render(
      <ThemeProvider theme={theme}>
        <ArticleCard
          title={title}
          excerpt={excerpt}
          date={date}
          readingTime={readingTime}
          slug={slug}
        />
      </ThemeProvider>,
    );

    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(excerpt)).toHaveStyle({
      fontSize: rem(12),
    });
    expect(screen.getByText('Jan. 1st, 2021')).toBeInTheDocument();
    expect(screen.getByText(`${readingTime.text}`)).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute('href', `/posts/${slug}`);
  });
});
