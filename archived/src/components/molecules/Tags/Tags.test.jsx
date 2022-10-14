import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { axe } from 'jest-axe';
import theme from '@styles';
import Tags from './Tags';

describe('<Tags />', () => {
  const setupTags = (props) =>
    render(
      <ThemeProvider theme={theme}>
        <Tags {...props} />
      </ThemeProvider>,
    );

  it('should render without crashing', () => {
    expect.assertions(1);

    const { container } = setupTags();

    expect(container).toBeTruthy();
  });

  it('should be accessible', async () => {
    expect.assertions(1);

    const name = 'Tags';

    const { container } = setupTags({ name });

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  it('should render the tag name', () => {
    expect.assertions(2);

    const tags = [
      { name: 'Tag 1', slug: 'tag-1', color: '#fff' },
      { name: 'Tag 2', slug: 'tag-2', color: '#f00' },
      { name: 'Tag 3', slug: 'tag-3', color: '#ff0' },
      { name: 'Tag 4', slug: 'tag-4', color: '#f0f' },
    ];

    const { getByText } = setupTags({ tags });

    expect(getByText(tags[0].name)).toBeInTheDocument();
    expect(getByText(tags[2].name)).toBeInTheDocument();
  });

  it('should set the className', () => {
    expect.assertions(1);

    const className = 'test';

    const { container } = setupTags({ className });

    expect(container.firstChild).toHaveClass(className);
  });
});
