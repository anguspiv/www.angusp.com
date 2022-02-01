import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import { useStaticQuery } from 'gatsby';
import { ThemeProvider } from 'styled-components';
import theme from '@styles';
import Avatar from './Avatar';

jest.mock('gatsby', () => ({
  useStaticQuery: jest.fn(),
  graphql: jest.fn(),
}));

const data = {
  site: {
    siteMetadata: {
      profileImage: 'https://example.com/images/profile.png',
    },
  },
  ghostAuthor: {
    profile_image: 'https://example.com/ghost-profile.png',
    name: 'Ghost Name',
  },
};

describe('<Avatar />', () => {
  const setupAvatar = (props) => {
    useStaticQuery.mockClear().mockReturnValue(data);

    return render(
      <ThemeProvider theme={theme}>
        <Avatar {...props} />
      </ThemeProvider>,
    );
  };

  it('should render without crashing', () => {
    expect.assertions(1);

    const { container } = setupAvatar();

    expect(container).toBeTruthy();
  });

  it('should have no accessibility violations', async () => {
    expect.assertions(1);

    const { container } = setupAvatar();
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  it('should render the image', () => {
    expect.assertions(1);

    const { getByAltText } = setupAvatar();

    expect(getByAltText(data.ghostAuthor.name)).toHaveAttribute(
      'src',
      data.ghostAuthor.profile_image,
    );
  });
});
