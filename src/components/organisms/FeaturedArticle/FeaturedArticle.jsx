import React from 'react';
import { rem } from 'polished';
import { get } from 'lodash';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Divider from '@components/atoms/Divider';
import ArticleCard from '@components/molecules/ArticleCard';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing(1.25)};
`;

const Title = styled.h2`
  margin-right: ${({ theme }) => theme.spacing(1)};
  margin-bottom: 0;
  font-weight: normal;
  font-size: ${rem('14px')};
  font-style: italic;
`;

const TitleDivider = styled(Divider)`
  max-width: ${rem('280px')};
`;

function FeaturedArticle() {
  const query = graphql`
    {
      allGhostPost(limit: 1, sort: { order: DESC, fields: created_at }) {
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
      <Header>
        <Title>Featured</Title>
        <TitleDivider />
      </Header>
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
