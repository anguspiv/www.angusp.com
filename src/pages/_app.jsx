import PropTypes from 'prop-types';
import { Global, ThemeProvider } from '@emotion/react';
import { global } from '@styles/global';
import { theme } from '@styles/theme';
import { AppLayout } from '@components/templates/AppLayout';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { SEO } from '@components/organisms/SEO';
import { CMS_HOST } from '@constants/hosts';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={global} />
      <AppLayout>
        <SEO
          title="Angus Perkerson - Software Engineer and Manager"
          descriptio="Angus Perkerson is a Software Engineer and Manger who specializes in web application development and team development."
          image={`${CMS_HOST}/images/angus-perkerson.jpg`}
        />
        <Component {...pageProps} />
      </AppLayout>
    </ThemeProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.shape({}).isRequired,
};

export default MyApp;
