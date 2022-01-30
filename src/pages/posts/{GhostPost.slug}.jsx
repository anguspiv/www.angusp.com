/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';

const Detail = styled.span`
  font-size: 0.8rem;
`;

const ReadTime = styled(Detail)`
  color: ${({ theme }) => theme.colors.text.muted};
  font-style: italic;
`;

const PublishedAt = styled(Detail)``;

const Title = styled.h1`
  margin-bottom: ${({ theme }) => theme.spacing(1)};
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`;

const Excerpt = styled.p`
  max-width: 800px;
  margin-right: auto;
  margin-left: auto;
  font-style: oblique;
  ${breakpoint('lg')`
    font-size: 1.2rem;
  `}
`;

const Article = styled.article`
  max-width: 800px;
  margin: 0 auto;
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
      <Header>
        <Title>{title}</Title>
        <Details>
          <PublishedAt>{created_at}</PublishedAt>
          <ReadTime>
            Reading Time: {reading_time}
            min.
          </ReadTime>
        </Details>
        {excerpt && <Excerpt>{excerpt}</Excerpt>}
        {feature_image && (
          <FeaturedImageWrapper>
            <img src={feature_image} alt={meta_title} />
          </FeaturedImageWrapper>
        )}
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
