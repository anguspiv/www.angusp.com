import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { axe } from 'jest-axe';
import theme from '@styles';
import BreadCrumbs from './BreadCrumbs';

describe('<BreadCrumbs />', () => {
  const setupBreadCrumbs = (props) =>
    render(
      <ThemeProvider theme={theme}>
        <BreadCrumbs location={{ pathname: '/' }} {...props} />
      </ThemeProvider>,
    );

  it('should render without crashing', () => {
    expect.assertions(1);

    const { container } = setupBreadCrumbs();

    expect(container).toBeTruthy();
  });

  it('should be accessible', async () => {
    expect.assertions(1);

    const { container } = setupBreadCrumbs({});

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  it('should render the crumb links', () => {
    expect.assertions(2);

    const location = {
      pathname: '/somewhere/else',
    };

    const { getByRole } = setupBreadCrumbs({
      location,
    });

    expect(getByRole('link', { name: 'Somewhere' })).toHaveAttribute('href', '/somewhere');
    expect(getByRole('link', { name: 'Else' })).toHaveAttribute('href', '/somewhere/else');
  });

  it('should render the home crumb', () => {
    expect.assertions(1);

    const location = {
      pathname: '/test/path/thing',
    };

    const { getByRole } = setupBreadCrumbs({
      location,
    });

    expect(getByRole('link', { name: 'Home' })).toHaveAttribute('href', '/');
  });

  it('should set the className', () => {
    expect.assertions(1);

    const { container } = setupBreadCrumbs({
      className: 'test-class-name',
    });

    expect(container.firstChild).toHaveClass('test-class-name');
  });

  it('should handle hyphen paths', () => {
    expect.assertions(1);

    const location = {
      pathname: '/test-path/thing',
    };

    const { getByRole } = setupBreadCrumbs({
      location,
    });

    expect(getByRole('link', { name: 'Test Path' })).toHaveAttribute('href', '/test-path');
  });
});
