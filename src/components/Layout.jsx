/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { Reset } from 'styled-reset';
import { Grommet, Main, Footer, Text } from 'grommet';

import theme from '../styles/theme';

import Header from './Header';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Grommet theme={theme}>
      <Reset />
      <Header siteTitle={data.site.siteMetadata.title} />
      <Main pad="medium">{children}</Main>
      <Footer pad="medium">
        <Text>
          © 
          {' '}
          {new Date().getFullYear()}
          , Built with 
          {' '}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </Text>
      </Footer>
    </Grommet>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
