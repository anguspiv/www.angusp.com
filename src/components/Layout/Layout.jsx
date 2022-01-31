/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { up } from 'styled-breakpoints';
import { Normalize } from 'styled-normalize';
import { reboot } from 'styled-reboot';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import typography from '../../utils/typography';
import theme, { spacing } from '../../styles';
import Header from '../Header';

config.autoAddCss = false;

export const GlobalStyle = createGlobalStyle`
  ${reboot}
  ${typography.toString()}
`;

const Page = styled.div`
  display: grid;
  grid-template-areas: 'header' 'content' 'footer';
  grid-template-rows: auto 1fr;
  grid-template-columns: 1fr;
  min-height: 100vh;

  ${up('lg')} {
    grid-template-areas: 'header content' 'header footer';
    grid-template-rows: 1fr auto;
    grid-template-columns: minmax(280px, 1fr) 3fr;
    max-height: 100vh;
  }
`;

const HeaderWrapper = styled.div`
  position: relative;
  grid-area: header;
`;

const LayoutHeader = styled(Header)`
  ${up('lg')} {
    position: sticky;
    top: 0;
  }
`;

const Main = styled.main`
  grid-area: content;
  width: 100%;
  margin: 0 auto;
  padding: ${spacing(2)};

  ${up('lg')} {
    margin: 0;
    padding: ${spacing(4)};
  }
`;

const Footer = styled.footer`
  grid-area: footer;
  max-width: 800px;
  margin: 0 auto;
  padding: ${spacing(2)};
  text-align: center;

  ${up('lg')} {
    width: 100%;
    margin: 0;
    padding: ${spacing(4)};
  }
`;

function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Normalize />
      <Page>
        <HeaderWrapper>
          <LayoutHeader />
        </HeaderWrapper>
        <Main role="main">{children}</Main>
        <Footer role="contentinfo">
          <span>
            © {new Date().getFullYear()}, Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
          </span>
        </Footer>
      </Page>
    </ThemeProvider>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
