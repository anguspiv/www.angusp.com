import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '@emotion/react';
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
    expect(screen.getByText(excerpt)).toBeInTheDocument();
    expect(screen.getByText(date)).toBeInTheDocument();
    expect(screen.getByText(`${readingTime} min. read`)).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute('href', `/articles/${slug}`);
  });
});
