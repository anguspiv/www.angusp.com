import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { axe } from 'jest-axe';
import theme from '@styles';
import SectionTitle from './SectionTitle';

describe('<SectionTitle />', () => {
  const setupSectionTitle = (props) =>
    render(
      <ThemeProvider theme={theme}>
        <SectionTitle {...props} />
      </ThemeProvider>,
    );

  it('should render without crashing', () => {
    expect.assertions(1);

    const { container } = setupSectionTitle();

    expect(container).toBeTruthy();
  });

  it('should render the title', () => {
    expect.assertions(1);

    const children = 'Test Header Text';

    const { getByText } = setupSectionTitle({ children });

    expect(getByText(children)).toBeInTheDocument();
  });

  it('should render the h1 tag', () => {
    expect.assertions(1);

    const children = 'Test Header Text';

    const { getByRole } = setupSectionTitle({ children });

    expect(getByRole('heading')).toHaveTextContent(children);
  });

  it('should be accessible', async () => {
    expect.assertions(1);

    const { container } = setupSectionTitle({
      children: 'Test Header Text',
    });

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
