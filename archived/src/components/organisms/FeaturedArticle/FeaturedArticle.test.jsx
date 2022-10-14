import React from 'react';
import { render } from '@testing-library/react';
import { useStaticQuery } from 'gatsby';
import { axe } from 'jest-axe';
import { ThemeProvider } from 'styled-components';
import theme from '@styles';
import FeaturedArticle from './FeaturedArticle';

jest.mock('gatsby', () => ({
  useStaticQuery: jest.fn(),
  graphql: jest.fn(),
}));

const data = {
  allGhostPost: {
    edges: [
      {
        node: {
          slug: 'death-to-legacy-code',
          excerpt:
            "We've all come across Legacy Code at least once in our career. How do you deal with this mess? I don’t have a perfect solution, but I have one that worked for me and my company.",
          title: 'Death to Legacy Code',
          reading_time: 7,
          created_at: 'February 13, 2021',
        },
      },
    ],
  },
};

describe('<FeaturedArticle />', () => {
  const setupFeaturedArticle = (props) => {
    useStaticQuery.mockClear().mockReturnValue(data);

    return render(
      <ThemeProvider theme={theme}>
        <FeaturedArticle {...props} />
      </ThemeProvider>,
    );
  };

  it('should render without crashing', () => {
    expect.assertions(1);

    const { container } = setupFeaturedArticle();

    expect(container).toBeTruthy();
  });

  it('should be accessible', async () => {
    expect.assertions(1);

    const { container } = setupFeaturedArticle({
      title: 'Article title',
      excerpt: 'Article excerpt',
    });

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  it('should display the header', () => {
    expect.assertions(1);

    const { getByRole } = setupFeaturedArticle();

    expect(getByRole('heading')).toHaveTextContent('Featured');
  });

  it('should display the article', () => {
    expect.assertions(1);

    const { getByText } = setupFeaturedArticle();

    expect(getByText('Death to Legacy Code')).toBeInTheDocument();
  });
});
