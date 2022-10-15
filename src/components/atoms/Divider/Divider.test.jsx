import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '@emotion/react';
import { theme } from '@styles/theme';
import Divider from './Divider';

describe('<Divider />', () => {
  const setupDivider = (props) =>
    render(
      <ThemeProvider theme={theme}>
        <Divider {...props} />
      </ThemeProvider>,
    );

  it('should render without crashing', () => {
    expect.assertions(1);

    const { container } = setupDivider();

    expect(container).toBeTruthy();
  });

  it('should default to 100% width', () => {
    expect.assertions(1);

    setupDivider();

    expect(screen.getByTestId('divider')).toHaveStyle({
      width: '100%',
      height: '1px',
    });
  });

  it('should make the line vertical', () => {
    expect.assertions(1);

    setupDivider({ vertical: true });

    expect(screen.getByTestId('divider')).toHaveStyle({ width: '1px', height: '100%' });
  });

  it('should have a custom width', () => {
    expect.assertions(1);

    setupDivider({ width: '50%' });

    expect(screen.getByTestId('divider')).toHaveStyle({ width: '50%', height: '1px' });
  });

  it('should have a custom height', () => {
    expect.assertions(1);

    setupDivider({ height: '50%' });

    expect(screen.getByTestId('divider')).toHaveStyle({ width: '100%', height: '50%' });
  });

  it('should have a custom vertical width', () => {
    expect.assertions(1);

    setupDivider({ width: '50%', vertical: true });

    expect(screen.getByTestId('divider')).toHaveStyle({ width: '50%', height: '100%' });
  });

  it('should have a custom vertical height', () => {
    expect.assertions(1);

    setupDivider({ height: '50%', vertical: true });

    expect(screen.getByTestId('divider')).toHaveStyle({ width: '1px', height: '50%' });
  });

  it('should set the color', () => {
    expect.assertions(1);

    const color = '#FFF';

    setupDivider({ color });

    expect(screen.getByTestId('divider')).toHaveStyle({
      background:
        'linear-gradient(90deg,rgba(255,255,255,0) 0%,rgba(255,255,255,1) 20%,rgba(255,255,255,1) 80%,rgba(255,255,255,0) 100%)',
    });
  });
});
