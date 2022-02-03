/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '@components/templates/Layout';
import SEO from '@components/organisms/SEO';
import PageHeader from '@components/molecules/PageHeader';
import PageSection from '@components/atoms/PageSection';

function Post({ data }) {
  const {
    custom_excerpt,
    excerpt,
    feature_image,
    html,
    meta_description,
    meta_title,
    og_image,
    title,
  } = data.ghostPage || {};

  const seoTitle = meta_title || title;
  let seoDescription = '';

  if (meta_description) {
    seoDescription = meta_description;
  }

  if (excerpt) {
    seoDescription = excerpt;
  }

  if (custom_excerpt) {
    seoDescription = custom_excerpt;
  }

  return (
    <Layout>
      <SEO title={seoTitle} description={seoDescription} image={og_image} />
      <PageHeader title={title} featuredImage={feature_image} imageFirst />
      <PageSection as="article" dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
}

Post.propTypes = {
  data: PropTypes.shape({
    ghostPage: PropTypes.shape({
      custom_excerpt: PropTypes.string,
      excerpt: PropTypes.string,
      feature_image: PropTypes.string,
      html: PropTypes.string,
      meta_description: PropTypes.string,
      meta_title: PropTypes.string,
      og_image: PropTypes.string,
      slug: PropTypes.string,
      title: PropTypes.string,
    }),
  }),
};

Post.defaultProps = {
  data: {},
};

export default Post;

export const query = graphql`
  query ($id: String) {
    ghostPage(id: { eq: $id }) {
      created_at(formatString: "MMMM DD, YYYY", locale: "en-US")
      custom_excerpt
      excerpt
      feature_image
      html
      meta_description
      meta_title
      og_image
      slug
      title
    }
  }
`;
