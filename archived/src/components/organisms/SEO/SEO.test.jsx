import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import { useStaticQuery } from 'gatsby';
import SEO from './SEO';

jest.mock('gatsby', () => ({
  useStaticQuery: jest.fn(),
  graphql: jest.fn(),
}));

const data = {
  site: {
    siteMetadata: {
      siteUrl: 'https://example.com',
    },
  },
  allGhostSettings: {
    edges: [
      {
        node: {
          title: 'Ghost Title',
          description: 'Ghost Description',
          meta_description: 'Ghost Meta Description',
          meta_title: 'Ghost Meta Title',
          twitter: 'Ghost Twitter',
          icon: 'https://example.com/icon.png',
          logo: 'https://example.com/icon.png',
        },
      },
    ],
  },
  ghostAuthor: {
    profile_image: 'https://example.com/profile.png',
    name: 'Ghost',
    twitter: 'Ghost',
  },
};

describe('<SEO />', () => {
  const setupSEO = (props) => {
    useStaticQuery.mockClear().mockReturnValue(data);

    return render(<SEO {...props} />);
  };

  it('should render without crashing', () => {
    expect.assertions(1);

    const { container } = setupSEO();

    expect(container).toBeTruthy();
  });

  it('should have no accessibility violations', async () => {
    expect.assertions(1);

    const { container } = setupSEO();
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
