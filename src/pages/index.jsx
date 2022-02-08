/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import { get } from 'lodash';
import Layout from '@components/templates/Layout';
import SEO from '@components/organisms/SEO';
import PageSection from '@components/atoms/PageSection';
import ArticleList from '@components/organisms/ArticleList';

function HomePage({ data }) {
  const edges = get(data, 'allGhostPost.edges', []);
  const posts = edges.map(({ node }) => node);

  return (
    <Layout>
      <SEO />
      <PageSection>
        <h1>Hi I&apos;m Angus!</h1>
        <p>
          I&apos;m a software engineer based in Los Angeles, CA. I specialize in web applications
          and the JavaScript ecosystem. Feel free to learn more <Link to="/about">about me</Link>,{' '}
          check out <Link to="/resume">my resume</Link> or read some of my{' '}
          <Link to="/articles">articles</Link>.
        </p>
      </PageSection>
      <ArticleList articles={posts} title="Recent Articles" />
    </Layout>
  );
}

HomePage.propTypes = {
  data: PropTypes.shape({
    allGhostPost: PropTypes.shape({}),
  }),
};

HomePage.defaultProps = {
  data: {},
};

export default HomePage;

export const query = graphql`
  query homePostsQuery {
    allGhostPost(sort: { fields: created_at, order: DESC }, limit: 10) {
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
