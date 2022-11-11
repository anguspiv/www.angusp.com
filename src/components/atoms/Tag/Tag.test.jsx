import { render, screen } from '@testing-library/react';
import { theme } from '@styles/theme';
import { Tag } from './Tag';

jest.mock('@emotion/react', () => ({
  ...jest.requireActual('@emotion/react'),
  useTheme: () => theme,
}));

describe('<Tag />', () => {
  it('should render a tag', () => {
    expect.assertions(2);

    render(<Tag tag="Test Tag" />);

    expect(screen.getByText('Test Tag')).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute('href', '/tags/test-tag');
  });
});
