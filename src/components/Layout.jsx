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
import theme, { spacing } from '../styles';

import Header from './Header';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    color: ${theme.colors.text.default};
    font-family: ${theme.fonts.base};
    background: ${theme.colors.background.default};
    transition: background .5s ease-in-out .1s, color .5s ease-in-out .1s;
  }

  a {
    color: ${theme.colors.link.default};
    transition: color ease-in-out .2s;
    
    &:hover {
      color: ${theme.colors.link.hover}
    }

    &:visited {
      color: ${theme.colors.link.visited};
    }
  }
`;

const Page = styled.div`
  display: grid;
  grid-template-areas: 'header' 'content' 'footer';
  grid-template-rows: auto 1fr;
  grid-template-columns: 1fr;
  min-height: 100vh;

  ${breakpoint('lg')`
    max-height: 100vh;
    grid-template-areas: 'header content' 'header footer';
    grid-template-rows: 1fr auto;
    grid-template-columns: minmax(300px, 1fr) 3fr;
  `}
`;

const HeaderWrapper = styled.div`
  position: relative;
  grid-area: header;
`;

const LayoutHeader = styled(Header)`
  ${breakpoint('lg')`
    position: sticky;
    top: 0;
  `}
`;

const Main = styled.main`
  grid-area: content;
  max-width: 720px;
  margin: 0 auto;
  padding: ${spacing(2)};

  ${breakpoint('lg')`
    padding: ${spacing(4)};
  `}
`;

const Footer = styled.footer`
  grid-area: footer;
  max-width: 720px;
  margin: 0 auto;
  padding: ${spacing(2)};
  text-align: center;

  ${breakpoint('lg')`
    width: 100%;
    padding: ${spacing(4)};
  `}
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
          <HeaderWrapper>
            <LayoutHeader siteTitle={data.site.siteMetadata.title} />
          </HeaderWrapper>
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
