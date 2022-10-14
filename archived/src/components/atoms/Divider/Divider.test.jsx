import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { axe } from 'jest-axe';
import theme from '@styles';
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

  it('should be accessible', async () => {
    expect.assertions(1);

    const { container } = setupDivider();

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  it('should default to 100% width', () => {
    expect.assertions(4); // I have no idea why in the heck toHaveStyleRule is doubling my assertions

    const { getByTestId } = setupDivider();

    expect(getByTestId('divider')).toHaveStyleRule('width', '100%');
    expect(getByTestId('divider')).toHaveStyleRule('height', '1px');
  });

  it('should make the line vertical', () => {
    expect.assertions(4); // I have no idea why in the heck toHaveStyleRule is doubling my assertions

    const { getByTestId } = setupDivider({ vertical: true });

    expect(getByTestId('divider')).toHaveStyleRule('width', '1px');
    expect(getByTestId('divider')).toHaveStyleRule('height', '100%');
  });

  it('should have a custom width', () => {
    expect.assertions(4); // I have no idea why in the heck toHaveStyleRule is doubling my assertions

    const { getByTestId } = setupDivider({ width: '50%' });

    expect(getByTestId('divider')).toHaveStyleRule('width', '50%');
    expect(getByTestId('divider')).toHaveStyleRule('height', '1px');
  });

  it('should have a custom height', () => {
    expect.assertions(4); // I have no idea why in the heck toHaveStyleRule is doubling my assertions

    const { getByTestId } = setupDivider({ height: '50%' });

    expect(getByTestId('divider')).toHaveStyleRule('width', '100%');
    expect(getByTestId('divider')).toHaveStyleRule('height', '50%');
  });

  it('should have a custom vertical width', () => {
    expect.assertions(4); // I have no idea why in the heck toHaveStyleRule is doubling my assertions

    const { getByTestId } = setupDivider({ width: '50%', vertical: true });

    expect(getByTestId('divider')).toHaveStyleRule('width', '50%');
    expect(getByTestId('divider')).toHaveStyleRule('height', '100%');
  });

  it('should have a custom vertical height', () => {
    expect.assertions(4); // I have no idea why in the heck toHaveStyleRule is doubling my assertions

    const { getByTestId } = setupDivider({ height: '50%', vertical: true });

    expect(getByTestId('divider')).toHaveStyleRule('width', '1px');
    expect(getByTestId('divider')).toHaveStyleRule('height', '50%');
  });

  it('should set the color', () => {
    expect.assertions(2); // I have no idea why in the heck toHaveStyleRule is doubling my assertions

    const color = '#FFF';

    const { getByTestId } = setupDivider({ color });

    expect(getByTestId('divider')).toHaveStyleRule(
      'background',
      'linear-gradient(90deg,rgba(255,255,255,0) 0%,rgba(255,255,255,1) 20%,rgba(255,255,255,1) 80%,rgba(255,255,255,0) 100%)',
    );
  });
});
