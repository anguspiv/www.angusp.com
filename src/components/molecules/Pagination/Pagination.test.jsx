import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { axe } from 'jest-axe';
import theme from '@styles';
import Pagination from ".";

describe('<Pagination />', () => {
  const setupPagination = (props) =>
    render(
      <ThemeProvider theme={theme}>
        <Pagination {...props} />
      </ThemeProvider>,
    );

  it('should render without crashing', () => {
    expect.assertions(1);

    const { container } = setupPagination();

    expect(container).toBeTruthy();
  });

  it('should be accessible', async () => {
    expect.assertions(1);

    const { container } = setupPagination();

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  it('should render the previous link', () => {
    expect.assertions(1);

    const { getByRole } = setupPagination({
      previousPagePath: '/previous-page',
    });

    expect(getByRole('link', { name: 'Previous' })).toBeInTheDocument();
  });

  it('should render the next link', () => {
    expect.assertions(1);

    const { getByRole } = setupPagination({
      nextPagePath: '/next-page',
    });

    expect(getByRole('link', { name: 'Next' })).toBeInTheDocument();
  });

  it('should render the current page', () => {
    expect.assertions(1);

    const { getByText } = setupPagination({
      humanPageNumber: 1,
      numberOfPages: 100,
    });

    expect(getByText('1 of 100')).toBeInTheDocument();
  });
});
