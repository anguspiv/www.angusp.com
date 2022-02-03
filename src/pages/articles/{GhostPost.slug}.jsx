/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import SEO from '@components/organisms/SEO';
import PageHeader from '@components/molecules/PageHeader';
import PageSection from '@components/atoms/PageSection';
import Layout from '@components/templates/Layout';

function Post({ data }) {
  const {
    created_at,
    custom_excerpt,
    excerpt,
    feature_image,
    html,
    meta_description,
    meta_title,
    og_image,
    reading_time,
    title,
  } = data.ghostPost || {};

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
      <PageHeader
        title={title}
        publishDate={created_at}
        readingTime={reading_time}
        excerpt={excerpt}
        featuredImage={feature_image}
      />
      <PageSection as="article" dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
}

Post.propTypes = {
  data: PropTypes.shape({
    ghostPost: PropTypes.shape({
      created_at: PropTypes.string,
      custom_excerpt: PropTypes.string,
      excerpt: PropTypes.string,
      feature_image: PropTypes.string,
      html: PropTypes.string,
      meta_description: PropTypes.string,
      meta_title: PropTypes.string,
      og_image: PropTypes.string,
      reading_time: PropTypes.number,
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
    ghostPost(id: { eq: $id }) {
      created_at(formatString: "MMMM DD, YYYY", locale: "en-US")
      custom_excerpt
      excerpt
      feature_image
      html
      meta_description
      meta_title
      og_image
      reading_time
      slug
      title
    }
  }
`;
