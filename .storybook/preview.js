import createCache from '@emotion/cache';
import { CacheProvider, Global, ThemeProvider } from '@emotion/react';
import { global } from '@styles/global';
import { theme } from '@styles/theme';

const cache = createCache({ key: 'css', prepend: true });

export const decorators = [
  (Story) => {
    return (
      <CacheProvider value={cache}>
        <ThemeProvider theme={theme}>
          <Global styles={global} />
          <Story />
        </ThemeProvider>
      </CacheProvider>
    );
  },
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
