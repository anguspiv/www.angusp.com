import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { axe } from 'jest-axe';
import theme from '@styles';
import Tag from './Tag';

describe('<Tag />', () => {
  const setupTag = (props) =>
    render(
      <ThemeProvider theme={theme}>
        <Tag {...props} />
      </ThemeProvider>,
    );

  it('should render without crashing', () => {
    expect.assertions(1);

    const { container } = setupTag();

    expect(container).toBeTruthy();
  });

  it('should be accessible', async () => {
    expect.assertions(1);

    const name = 'Tag';

    const { container } = setupTag({ name });

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  it('should render the tag name', () => {
    expect.assertions(1);

    const name = 'Test Tag';

    const { getByText } = setupTag({ name });

    expect(getByText(name)).toBeInTheDocument();
  });

  it('should render the tag name as a link', () => {
    expect.assertions(1);

    const name = 'Test Tag';
    const slug = '/test-tag';

    const { getByRole } = setupTag({ name, slug });

    expect(getByRole('link', { name })).toHaveAttribute('href', `/tags/${slug}`);
  });

  it('should set the background color', () => {
    expect.assertions(2);

    const color = '#F00';

    const name = 'Test Tag';
    const slug = '/test-tag';

    const { getByRole } = setupTag({ name, slug, color });

    expect(getByRole('link', { name })).toHaveStyleRule('background-color', color);
  });
});
