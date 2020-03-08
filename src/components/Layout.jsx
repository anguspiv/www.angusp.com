/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { Grommet, Main, Footer, Text, Anchor } from 'grommet';
import deepMerge from 'deepmerge';
import { createGlobalStyle } from 'styled-components';

import lightTheme from '../styles/themes/light';
import darkTheme from '../styles/themes/dark';
import defaultTheme from '../styles/theme';

import Header, { THEME_DARK, THEME_LIGHT } from './Header';

const dark = deepMerge(defaultTheme, darkTheme);
const light = deepMerge(defaultTheme, lightTheme);

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    transition: background .5s ease-in-out .1s, color .5s ease-in-out .1s;
  }
`;

const Layout = ({ children }) => {
  const [theme, setTheme] = useState(THEME_LIGHT);

  const onThemeToggle = useCallback(themeLabel => {
    setTheme(themeLabel);
  });

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
    <Grommet theme={theme === THEME_DARK ? dark : light}>
      <GlobalStyle />
      <Header
        siteTitle={data.site.siteMetadata.title}
        theme={theme}
        onThemeToggle={onThemeToggle}
      />
      <Main pad="medium" as="main" role="main">
        {children}
      </Main>
      <Footer pad="medium" role="contentinfo" background="accent-1">
        <Text color="white">
          © 
          {' '}
          {new Date().getFullYear()}
          , Built with
          {' '}
          <Anchor href="https://www.gatsbyjs.org" color="white">
            Gatsby
          </Anchor>
        </Text>
      </Footer>
    </Grommet>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
