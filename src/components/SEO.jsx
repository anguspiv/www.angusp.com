/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function SEO({ description, lang, meta, title, image }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            image
            twitter
            url
          }
        }
      }
    `,
  );

  const metaDescription = description || site.siteMetadata.description;
  let metaTitle = site.siteMetadata.title;
  let metaImage = image || site.siteMetadata.image;
  metaImage = `${site.siteMetadata.url}${metaImage}`;

  if (title) {
    metaTitle = `${title} | ${metaTitle}`;
  }

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={metaTitle}
      titleTemplate="%s"
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: 'image',
          content: metaImage,
        },
        {
          property: `og:title`,
          content: metaTitle,
        },
        {
          property: 'og:image',
          content: metaImage,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: 'og:url',
          content: site.siteMetadata.url,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:site`,
          content: site.siteMetadata.twitter,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.twitter,
        },
        {
          name: `twitter:title`,
          content: metaTitle,
        },
        {
          name: 'twitter:image',
          content: metaImage,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  title: '',
  image: '',
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
  image: PropTypes.string,
};

export default SEO;
