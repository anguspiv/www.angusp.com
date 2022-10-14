import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import { useStaticQuery } from 'gatsby';
import ProfileImage from './ProfileImage';

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

describe('<ProfileImage />', () => {
  const setupProfileImage = (props) => {
    useStaticQuery.mockClear().mockReturnValue(data);

    return render(<ProfileImage {...props} />);
  };

  it('should render without crashing', () => {
    expect.assertions(1);

    const { container } = setupProfileImage();

    expect(container).toBeTruthy();
  });

  it('should have no accessibility violations', async () => {
    expect.assertions(1);

    const { container } = setupProfileImage();
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  it('should render the image', () => {
    expect.assertions(1);

    const { getByAltText } = setupProfileImage();

    expect(getByAltText(data.ghostAuthor.name)).toHaveAttribute(
      'src',
      data.ghostAuthor.profile_image,
    );
  });
});
