/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';
import get from 'lodash.get';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';

const ReadTime = styled.p`
  color: ${({ theme }) => theme.colors.text.muted};
  font-size: 0.8rem;
  font-style: italic;
`;

const Title = styled.h1`
  margin-bottom: ${({ theme }) => theme.spacing(1)};
`;

function Post({ data }) {
  const { title, html, meta_title, meta_description, og_image, reading_time, featureImageSharp } =
    data.ghostPost || {};
  const fluidImg = get(featureImageSharp, 'childImageSharp.fluid', {});
  return (
    <Layout>
      <SEO title={meta_title} description={meta_description} image={og_image} />
      <article>
        {featureImageSharp ? <Img fluid={fluidImg} alt={title} /> : null}
        <Title>{title}</Title>
        <ReadTime>
          Reading Time: {reading_time}
          min.
        </ReadTime>
        <section
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>
    </Layout>
  );
}

Post.propTypes = {
  data: PropTypes.shape({
    ghostPost: PropTypes.shape({
      title: PropTypes.string,
      feature_image: PropTypes.string,
      html: PropTypes.string,
      meta_title: PropTypes.string,
      meta_description: PropTypes.string,
      og_image: PropTypes.string,
      reading_time: PropTypes.number,
      featureImageSharp: PropTypes.shape({
        childImageSharp: PropTypes.shape({
          fluid: PropTypes.string,
        }),
      }),
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
      title
      slug
      feature_image
      reading_time
      html
    }
  }
`;
