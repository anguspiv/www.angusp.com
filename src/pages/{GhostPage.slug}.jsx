/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const Article = styled.article`
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h1`
  width: 100%;
  max-width: 800px;
  margin: 0 auto ${({ theme }) => theme.headingsMarginBottom};
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const FeaturedImageWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(100% + ${({ theme }) => theme.spacing(4)});
  max-width: none;
  height: auto;
  max-height: 480px;
  margin-right: ${({ theme }) => theme.spacing(-2)};
  margin-bottom: ${({ theme }) => theme.paragraphMarginBottom};
  margin-left: ${({ theme }) => theme.spacing(-2)};
  overflow: hidden;

  ${({ theme }) => breakpoint('lg')`
    width: calc(100% + ${theme.spacing(8)});
    margin-right: ${theme.spacing(-4)};
    margin-left: ${theme.spacing(-4)};
  `}
`;

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
      <Header>
        {feature_image && (
          <FeaturedImageWrapper>
            <img src={feature_image} alt={meta_title} />
          </FeaturedImageWrapper>
        )}
        <Title>{title}</Title>
      </Header>
      <Article>
        <section
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </Article>
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
