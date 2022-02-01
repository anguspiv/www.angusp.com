/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '@components/templates/Layout';
import SEO from '@components/organisms/SEO';

function HomePage({ data }) {
  const { title, html, meta_title, meta_description, og_image } = data.ghostPage || {};

  return (
    <Layout>
      <SEO title={meta_title} description={meta_description} image={og_image} />
      <h1>{title}</h1>
      <div
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Layout>
  );
}

HomePage.propTypes = {
  data: PropTypes.shape({
    ghostPage: PropTypes.shape({
      title: PropTypes.string,
      feature_image: PropTypes.string,
      html: PropTypes.string,
      meta_title: PropTypes.string,
      meta_description: PropTypes.string,
      og_image: PropTypes.string,
    }),
  }),
};

HomePage.defaultProps = {
  data: {},
};

export default HomePage;

export const query = graphql`
  {
    ghostPage(slug: { eq: "home" }) {
      title
      feature_image
      html
      meta_title
      meta_description
      og_image
    }
  }
`;
