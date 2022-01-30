import { ThemeProvider } from 'styled-components';
import { defaultRebootTheme } from 'styled-reboot';
import theme from '../src/styles';
import { customRebootTheme, GlobalStyle } from '../src/components/Layout';
import { Normalize } from 'styled-normalize';

export const decorators = [
  (Story) => (
    <ThemeProvider theme={{ ...defaultRebootTheme, ...customRebootTheme, ...theme }}>
      <GlobalStyle />
      <Normalize />
      <Story />
    </ThemeProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
