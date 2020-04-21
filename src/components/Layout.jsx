/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql, Link } from 'gatsby';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { Normalize } from 'styled-normalize';
import theme from '../styles';

import Header from './Header';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: ${theme.fonts.base};
    transition: background .5s ease-in-out .1s, color .5s ease-in-out .1s;
  }
`;

const Page = styled.div`
  display: grid;
  grid-template-areas: 'header' 'content' 'footer';
  grid-template-rows: auto 1fr;
  grid-template-columns: 1fr;
  min-height: 100vh;

  ${breakpoint('md')`
    grid-template-areas: 'header content' 'header footer';
    grid-template-rows: 1fr auto;
    grid-template-columns: minmax(auto, 300px) 1fr;
  `}
`;

const HeaderLayout = styled(Header)`
  grid-area: header;
`;

const Main = styled.main`
  grid-area: content;
`;

const Footer = styled.footer`
  grid-area: 'footer';
`;

function Layout({ children }) {
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
    <>
      <GlobalStyle />
      <Normalize />
      <ThemeProvider theme={theme}>
        <Page>
          <HeaderLayout siteTitle={data.site.siteMetadata.title} />
          <Main role="main">{children}</Main>
          <Footer role="contentinfo">
            <span>
              © 
              {' '}
              {new Date().getFullYear()}
              , Built with
              {' '}
              <Link to="https://www.gatsbyjs.org">Gatsby</Link>
            </span>
          </Footer>
        </Page>
      </ThemeProvider>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
