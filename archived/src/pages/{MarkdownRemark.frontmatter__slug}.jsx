/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '@components/templates/Layout';
import SEO from '@components/organisms/SEO';
import PageHeader from '@components/molecules/PageHeader';
import PageSection from '@components/atoms/PageSection';

function Post({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  const { title, image, description, excerpt } = frontmatter;
  
  let seoDescription = '';

  if (description) {
    seoDescription = description;
  }

  if (excerpt) {
    seoDescription = excerpt;
  }

  return (
    <Layout>
      <SEO title={title} description={seoDescription} image={image} />
      <PageHeader title={title} featuredImage={image} imageFirst />
      <PageSection as="article" dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
}

Post.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string,
        date: PropTypes.string,
        slug: PropTypes.string,
        tags: PropTypes.arrayOf(PropTypes.string),
        excerpt: PropTypes.string,
        description: PropTypes.string,
        image: PropTypes.string,
      }),
      html: PropTypes.string,
    }),
  }),
};

Post.defaultProps = {
  data: {},
};

export default Post;

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        tags
        excerpt
        description
        image
      }
    }
  }
`;
