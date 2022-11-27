import { render, screen } from '@testing-library/react';
import { readableColor } from 'polished';
import { theme } from '@styles/theme';
import { Tag } from './Tag';

jest.mock('@emotion/react', () => ({
  ...jest.requireActual('@emotion/react'),
  useTheme: () => theme,
}));

describe('<Tag />', () => {
  it('should render a tag', () => {
    expect.assertions(3);

    const color = '#fff000';

    render(<Tag label="Test Tag" color={color} />);

    expect(screen.getByText('Test Tag')).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute('href', '/tags/test-tag');
    expect(screen.getByRole('link')).toHaveStyle({
      color: readableColor(color),
      backgroundColor: color,
    });
  });

  it('should render a tag with a default color', () => {
    expect.assertions(3);

    render(<Tag label="Test Tag" />);

    expect(screen.getByText('Test Tag')).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute('href', '/tags/test-tag');
    expect(screen.getByRole('link')).toHaveStyle({
      color: 'rgb(238, 238, 238)',
      backgroundColor: 'rgb(102, 102, 102)',
    });
  });
});
