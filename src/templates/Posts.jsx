import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '@components/templates/Layout';
import SEO from '@components/organisms/SEO';
import PageHeader from '@components/molecules/PageHeader';
import PageSection from '@components/atoms/PageSection';
import FeaturedArticle from '@components/organisms/FeaturedArticle';
import ArticleList from '@components/organisms/ArticleList';
import Pagination from '@components/molecules/Pagination';
import Divider from '@components/atoms/Divider';

function Posts({ data, pageContext, location }) {
  const { edges } = data.posts;
  const posts = edges.map(({ node }) => node);
  const { previousPagePath, nextPagePath, humanPageNumber, numberOfPages } = pageContext;

  return (
    <Layout>
      <SEO title="Articles - Angus Perkerson" />
      <PageHeader title="Articles" location={location} />
      <PageSection>
        <FeaturedArticle articles={posts} />
        {!!posts.length && <ArticleList articles={posts} title="Recent Articles" />}
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

Posts.propTypes = {
  data: PropTypes.shape({
    posts: PropTypes.shape({
      edges: ArticleList.propTypes.articles,
    }),
  }),
  pageContext: PropTypes.shape({
    previousPagePath: PropTypes.string,
    nextPagePath: PropTypes.string,
    numberOfPages: PropTypes.number,
    humanPageNumber: PropTypes.number,
  }),
  location: PropTypes.shape({
    pathname: PropTypes.string,
    search: PropTypes.string,
  }),
};

Posts.defaultProps = {
  data: {},
  pageContext: {},
  location: {},
};

export default Posts;

export const query = graphql`
  query postsQuery($skip: Int!, $limit: Int!, $featuredId: String!) {
    posts: allGhostPost(
      sort: { fields: created_at, order: DESC }
      limit: $limit
      skip: $skip
      filter: { id: { ne: $featuredId } }
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
  }
`;
