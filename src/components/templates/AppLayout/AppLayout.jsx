import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { rem } from 'polished';
import { SiteBanner } from '@components/organisms/SiteBanner';
import { media, spacing } from '@styles/utils';

const pageCss = css`
  display: grid;
  grid-template-areas: 'header' 'content' 'footer';
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 1fr;
  max-width: ${rem(800 + 640)};
  min-height: 100vh;
  margin: 0 auto;

  ${media.lg} {
    grid-template-areas: 'header content' 'empty footer';
    grid-template-rows: 1fr auto;
    grid-template-columns: minmax(auto, 320px) 1fr;
  }

  ${media.xl} {
    grid-template-areas: 'header content spacer' 'empty footer spacer';
    grid-template-rows: 1fr auto;
    grid-template-columns: minmax(auto, 320px) minmax(800px, 1fr) minmax(auto, 320px);
  }
`;

const headerWrapperCss = css`
  position: relative;
  grid-area: header;
`;

const headerContentCss = css`
  ${media.lg} {
    display: flex;
    flex-direction: column;
    position: sticky;
    justify-content: center;
    top: 0;
    height: 100%;
    max-height: 100vh;
  }
`;

const headerBoxCss = css`
  max-height: 100%;
  overflow-y: auto;
`;

const headerCss = css``;

const mainCss = css`
  grid-area: content;
  width: 100%;
  max-width: ${rem(800)};
  margin: 0 auto;
  padding: ${spacing(2)};

  ${media.lg} {
    align-self: center;
    margin: 0;
    padding: ${spacing(4)};
  }
`;

const footerCss = css`
  grid-area: footer;
  max-width: ${rem(800)};
  width: 100%;
  margin: 0 auto;
  padding: ${spacing(2)};
  text-align: center;

  ${media.lg} {
    padding: ${spacing(4)};
  }
`;

export function AppLayout({ children }) {
  const year = new Date().getFullYear();
  return (
    <div css={pageCss}>
      <div css={headerWrapperCss}>
        <div css={headerContentCss}>
          <div css={headerBoxCss}>
            <SiteBanner css={headerCss} />
          </div>
        </div>
      </div>
      <main role="main" css={mainCss}>
        {children}
      </main>
      <footer role="contentinfo" css={footerCss}>
        <p>
          © {year}, Built with <a href="https://nextjs.org/">Next.js</a>
        </p>
      </footer>
    </div>
  );
}

AppLayout.propTypes = {
  children: PropTypes.node,
};

AppLayout.defaultProps = {
  children: null,
};

export default AppLayout;
