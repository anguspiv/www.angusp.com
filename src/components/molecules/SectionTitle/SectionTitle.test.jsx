import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '@emotion/react';
import { theme } from '@styles/theme';
import { SectionTitle } from './SectionTitle';

describe('<SectionTitle />', () => {
  it('renders the section title', () => {
    expect.assertions(2);

    render(
      <ThemeProvider theme={theme}>
        <SectionTitle className="test-class">Hello World</SectionTitle>
      </ThemeProvider>,
    );

    expect(screen.getByRole('heading', { name: 'Hello World' })).toBeInTheDocument();
    expect(screen.getByTestId('section-title')).toHaveClass('test-class');
  });
});
