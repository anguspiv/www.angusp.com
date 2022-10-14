import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import { rem } from 'polished';
import Layout from '@components/templates/Layout';
import SEO from '@components/organisms/SEO';
import PageHeader from '@components/molecules/PageHeader';
import PageSection from '@components/atoms/PageSection';
import ArticleList from '@components/organisms/ArticleList';
import Tag from '@components/atoms/Tag';
import Divider from '@components/atoms/Divider';

const List = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const ListItem = styled.li`
  margin-bottom: ${({ theme }) => theme.spacing(1)};
`;

const ListCard = styled(Link)`
  display: flex;
  flex-direction: column;
  padding: 0;
  color: initial;

  &:hover {
    color: initial;
    text-decoration: none;
  }
`;

const ListDivider = styled(Divider)`
  max-width: ${rem(300)};
  margin: 0 auto ${({ theme }) => theme.spacing(1)};
`;

const TagHeading = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: flex-start;
`;

const PostCount = styled.span`
  color: ${({ theme }) => theme.colors.text.muted};
  font-size: ${rem(14)};

  &:before {
    display: inline-block;
    margin-right: ${({ theme }) => theme.spacing(0.5)};
    margin-left: ${({ theme }) => theme.spacing(0.5)};
    content: '-';
  }
`;

const TagDescription = styled.p``;

function Tags({ data }) {
  const { edges } = data.allGhostTag;
  const tags = edges.map(({ node }) => node);

  return (
    <Layout>
      <SEO title="Tags - Angus Perkerson" />
      <PageHeader title="Tags" />
      <PageSection>
        <List>
          {tags.map(({ id, name, slug, color, description, postCount }, index) => (
            <ListItem key={id}>
              {index !== 0 ? <ListDivider /> : null}
              <ListCard as={Link} to={`/tags/${slug}`}>
                <TagHeading>
                  <Tag name={name} slug={slug} color={color} />
                  <PostCount>
                    {postCount} {postCount === 1 ? 'Post' : 'Posts'}
                  </PostCount>
                </TagHeading>
                <TagDescription>{description}</TagDescription>
              </ListCard>
            </ListItem>
          ))}
        </List>
      </PageSection>
    </Layout>
  );
}

Tags.propTypes = {
  data: PropTypes.shape({
    allGhostTag: PropTypes.shape({
      edges: ArticleList.propTypes.articles,
    }),
  }),
  pageContext: PropTypes.shape({
    previousPagePath: PropTypes.string,
    nextPagePath: PropTypes.string,
    numberOfPages: PropTypes.number,
    humanPageNumber: PropTypes.number,
    tagId: PropTypes.string,
  }),
};

Tags.defaultProps = {
  data: {},
  pageContext: {},
};

export default Tags;
