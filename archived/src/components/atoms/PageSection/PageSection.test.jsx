import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import { ThemeProvider } from 'styled-components';
import theme from '@styles';
import PageSection from './PageSection';

describe('<PageSection />', () => {
  const setupPageSection = (props) =>
    render(
      <ThemeProvider theme={theme}>
        <PageSection {...props} />
      </ThemeProvider>,
    );

  it('should render without crashing', () => {
    expect.assertions(1);

    const { container } = setupPageSection();

    expect(container).toBeTruthy();
  });

  it('should be accessible', async () => {
    expect.assertions(1);

    const { container } = setupPageSection({
      title: 'Article title',
      excerpt: 'Article excerpt',
    });

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  it('should render the children', () => {
    expect.assertions(1);

    const children = <div>Test</div>;

    const { getByText } = setupPageSection({ children });

    expect(getByText('Test')).toBeInTheDocument();
  });
});
