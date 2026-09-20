import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '@emotion/react';
import { theme } from '@styles/theme';
import { Tag } from './Tag';

describe('<Tag />', () => {
  it('should render a tag with a color', () => {
    expect.assertions(3);

    const color = '#fff000';

    render(
      <ThemeProvider theme={theme}>
        <Tag label="Test Tag" color={color} />
      </ThemeProvider>,
    );

    expect(screen.getByText('Test Tag')).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute('href', '/tags/test-tag');
    expect(screen.getByRole('link')).toHaveAttribute('class');
  });

  it('should render a tag with a default color', () => {
    expect.assertions(3);

    render(
      <ThemeProvider theme={theme}>
        <Tag label="Test Tag" />
      </ThemeProvider>,
    );

    expect(screen.getByText('Test Tag')).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute('href', '/tags/test-tag');
    expect(screen.getByRole('link')).toHaveAttribute('class');
  });
});
