import React from 'react';
import { get } from 'lodash';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import ArticleCard from '@components/molecules/ArticleCard';
import SectionTitle from '@components/atoms/SectionTitle';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

function FeaturedArticle() {
  const query = graphql`
    {
      allGhostPost(
        limit: 1
        sort: { order: DESC, fields: created_at }
        filter: { featured: { eq: true } }
      ) {
        edges {
          node {
            slug
            excerpt
            title
            reading_time
            created_at(formatString: "MMMM DD, YYYY", locale: "en-US")
          }
        }
      }
    }
  `;

  const data = useStaticQuery(query);

  // eslint-disable-next-line camelcase
  const { slug, excerpt, title, reading_time, created_at } = get(
    data,
    'allGhostPost.edges[0].node',
    {},
  );

  return (
    <Wrapper>
      <SectionTitle>Featured</SectionTitle>
      <ArticleCard
        // eslint-disable-next-line camelcase
        date={created_at}
        excerpt={excerpt}
        // eslint-disable-next-line camelcase
        readingTime={reading_time}
        slug={slug}
        title={title}
      />
    </Wrapper>
  );
}

export default FeaturedArticle;
