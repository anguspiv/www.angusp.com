import { render, screen } from '@testing-library/react';
import { parseToRgb } from 'polished';
import { theme } from '@styles/theme';
import { Tag } from './Tag';

jest.mock('@emotion/react', () => ({
  ...jest.requireActual('@emotion/react'),
  useTheme: () => theme,
}));

describe('<Tag />', () => {
  it('should render a tag', () => {
    expect.assertions(5);

    const { rerender } = render(<Tag label="Test Tag" slug="test" />);

    expect(screen.getByText('Test Tag')).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute('href', '/tags/test');
    expect(screen.getByRole('link')).toHaveStyle({
      backgroundColor: parseToRgb('#666'),
    });

    rerender(<Tag label="Test Tag" color="#FFCC00" />);

    expect(screen.getByRole('link')).toHaveAttribute('href', '/tags/test-tag');

    rerender(<Tag label="Test Tag" slug="test" color="#FFCC00" />);

    expect(screen.getByRole('link')).toHaveStyle({
      backgroundColor: parseToRgb('#FFCC00'),
    });
  });
});
