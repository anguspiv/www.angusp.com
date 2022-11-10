import PropTypes from 'prop-types';
import createCache from '@emotion/cache';
import { CacheProvider, Global, ThemeProvider } from '@emotion/react';
import { global } from '@styles/global';
import { theme } from '@styles/theme';
import { AppLayout } from '@components/templates/AppLayout';
import '@fortawesome/fontawesome-svg-core/styles.css';

const cache = createCache({ key: 'css', prepend: true });

function MyApp({ Component, pageProps }) {
  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <Global styles={global} />
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </ThemeProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.shape({}).isRequired,
};

export default MyApp;
