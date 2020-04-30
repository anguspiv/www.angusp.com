/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

function Page({ data }) {
  const { title, html, meta_title, meta_description, og_image } = data.ghostPage || {};
  return (
    <Layout>
      <SEO title={meta_title} description={meta_description} image={og_image} />
      <article>
        <h1>{title}</h1>
        <section
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>
    </Layout>
  );
}

Page.propTypes = {
  data: PropTypes.shape({
    ghostPage: PropTypes.shape({
      title: PropTypes.string,
      feature_image: PropTypes.string,
      html: PropTypes.string,
      meta_title: PropTypes.string,
      meta_description: PropTypes.string,
      og_image: PropTypes.string,
      reading_time: PropTypes.number,
    }),
  }),
};

Page.defaultProps = {
  data: {},
};

export default Page;

export const pageQuery = graphql`
  query($slug: String) {
    ghostPage(slug: { eq: $slug }) {
      title
      slug
      feature_image
      html
    }
  }
`;
