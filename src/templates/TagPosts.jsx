import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { get } from 'lodash';
import Layout from '@components/templates/Layout';
import SEO from '@components/organisms/SEO';
import PageHeader from '@components/molecules/PageHeader';
import PageSection from '@components/atoms/PageSection';
import ArticleList from '@components/organisms/ArticleList';
import Pagination from '@components/molecules/Pagination';
import Divider from '@components/atoms/Divider';

function TagPosts({ data, pageContext, location }) {
  const edges = get(data, 'allGhostPost.edges', []);
  const { name, description } = get(data, 'ghostTag', {});

  const posts = edges.map(({ node }) => node);
  const { previousPagePath, nextPagePath, humanPageNumber, numberOfPages } = pageContext;

  return (
    <Layout>
      <SEO title={`Tags - ${name} - Angus Perkerson`} />
      <PageHeader title={name} excerpt={description} location={location} />
      <PageSection>
        {!!posts.length && <ArticleList articles={posts} />}
        {numberOfPages > 1 && (
          <>
            <Divider />
            <Pagination
              previousPagePath={previousPagePath}
              nextPagePath={nextPagePath}
              humanPageNumber={humanPageNumber}
            />
          </>
        )}
      </PageSection>
    </Layout>
  );
}

TagPosts.propTypes = {
  data: PropTypes.shape({
    allGhostPost: PropTypes.shape({
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
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
};

TagPosts.defaultProps = {
  location: {},
  data: {},
  pageContext: {},
};

export default TagPosts;

export const query = graphql`
  query tagPostsQuery($skip: Int!, $limit: Int!, $tagId: String!) {
    allGhostPost(
      limit: $limit
      skip: $skip
      filter: { tags: { elemMatch: { id: { eq: $tagId } } } }
      sort: { fields: created_at, order: DESC }
    ) {
      edges {
        node {
          id
          created_at(formatString: "MMMM DD, YYYY")
          excerpt
          reading_time
          slug
          title
        }
      }
    }
    ghostTag(id: { eq: $tagId }) {
      name
      description
    }
  }
`;
