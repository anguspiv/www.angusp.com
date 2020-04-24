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
import reboot from 'styled-reboot';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import theme, { spacing } from '../styles';
import Header from './Header';

config.autoAddCss = false;

// Options are, of course, optional, these are the default options
const options = {
  black: theme.colors.text.default,
  fontFamilyBase: theme.fonts.base,
  fontFamilyMonospace: theme.fonts.monospace,
  fontSizeBase: '1rem',
  fontWeightBase: 400,
  lineHeightBase: 1.5,
  bodyColor: theme.colors.text.default,
  bodyBg: theme.colors.background.default,
  headingsMarginBottom: '0.5rem',
  paragraphMarginBottom: '1rem',
  labelMarginBottom: '0.5rem',
  dtFontWeight: 700,
  linkColor: theme.colors.link.default,
  linkDecoration: 'none',
  linkHoverColor: theme.colors.link.hover,
  linkHoverDecoration: 'underline',
  tableCellPadding: '0.75rem',
  textMuted: theme.colors.text.muted,
};

const rebootCss = reboot(options);

const GlobalStyle = createGlobalStyle`
  ${rebootCss}
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
