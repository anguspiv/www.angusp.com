import PropTypes from 'prop-types';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { SITE_HOST } from '@constants/hosts';

export function SEO({ description, image, title }) {
  const { asPath, isReady } = useRouter();

  return (
    <Head>
      {/* Title */}
      <title>{title}</title>
      <meta property="og:title" content={title} key="og:title" />
      <meta name="twitter:title" content={title} key="twitter:title" />

      {/* Description */}
      <meta name="description" content={description} key="description" />
      <meta property="og:description" content={description} key="og:description" />
      <meta name="twitter:description" content={description} key="twitter:description" />

      {/* Image */}
      <meta name="image" content={image} key="image" />
      <meta property="og:image" content={image} key="og:image" />
      <meta name="twitter:image" content={image} key="twitter:image" />

      {/* Open Graph */}
      <meta property="og:type" content="website" key="og:type" />
      {isReady && <meta property="og:url" content={`${SITE_HOST}${asPath}`} key="og:url" />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary" key="twitter:card" />
      <meta name="twitter:site" content="@angusp" key="twitter:site" />
      <meta name="twitter:creator" content="@angusp" key="twitter:creator" />
    </Head>
  );
}

SEO.propTypes = {
  description: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
};

SEO.defaultProps = {
  description: '',
  image: '',
  title: '',
};

export default SEO;
