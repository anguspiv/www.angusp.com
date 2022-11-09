import PropTypes from 'prop-types';
import { faTwitter, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { css } from '@emotion/react';
import { rem } from 'polished';
import { spacing, media } from '@styles/utils';
import { theme } from '@styles/theme';
import image from '@public/img/angus-perkerson.jpg';
import { Link } from '@components/atoms/Link';
import { Avatar } from '@components/atoms/Avatar';

const navLinks = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/about',
    label: 'About',
  },
  {
    href: '/articles',
    label: 'Articles',
  },
  {
    href: '/resume',
    label: 'Resume',
  },
];

const headerCss = css`
  position: relative;
  padding: ${spacing(1)};
  text-align: center;

  &:after {
    display: block;
    width: 80%;
    height: 1px;
    margin: 0 auto;
    background: linear-gradient(
      90deg,
      rgba(127, 127, 127, 0) 0%,
      rgba(127, 127, 127, 1) 20%,
      rgba(127, 127, 127, 1) 80%,
      rgba(127, 127, 127, 0) 100%
    );
    content: '';
  }

  ${media.lg} {
    padding: 20vh ${spacing(4)};

    &:after {
      position: absolute;
      top: 20%;
      right: 0;
      display: block;
      width: 1px;
      height: 60%;
      background: linear-gradient(
        0deg,
        rgba(127, 127, 127, 0) 0%,
        rgba(127, 127, 127, 1) 20%,
        rgba(127, 127, 127, 1) 80%,
        rgba(127, 127, 127, 0) 100%
      );
      content: '';
    }
  }
`;

const titleCss = css`
  display: block;
  margin: 0 auto ${spacing(0.5)} auto;
  font-size: ${rem('24px')};
`;

const subtitleCss = css`
  display: block;
  margin: 0 auto ${spacing(1)} auto;
  font-size: ${rem('18px')};
`;

const emailCss = css`
  display: block;
  margin: 0 auto ${spacing(1)} auto;
  font-size: ${rem('18px')};
  font-family: ${theme.fonts.family.monospace};
`;

const avatarCss = css`
  width: ${rem('180px')};
  margin: ${spacing(2)} auto;
`;

const profileLinksListCss = css`
  display: flex;
  justify-content: center;
  margin: 0;
  font-size: ${rem('32px')};
`;

const profileLinkCss = css`
  margin: ${spacing(1)};
`;

const menuCss = css`
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
  list-style: none;

  & > li {
    margin: ${spacing(1)};
    flex: 0 0 auto;
  }

  ${media.lg} {
    flex-direction: column;
  }
`;

export function SiteBanner({ className }) {
  return (
    <header role="banner" className={className} css={headerCss}>
      <Link href="/" passHref aria-label="Angus Perkerson">
        <Avatar src={image} css={avatarCss} />
      </Link>
      <span css={titleCss}>Angus Perkerson</span>
      <p css={subtitleCss}>Software Engineer specializing in Web and Applicaton development.</p>
      <a
        href="mailto:angusp@angusp.com"
        aria-label="Email angusp@angusp.com"
        title="Email"
        css={emailCss}
      >
        angusp@angusp.com
      </a>
      <div css={profileLinksListCss}>
        <a
          href="https://github.com/anguspiv"
          aria-label="Github Profile"
          title="Github Profile"
          css={profileLinkCss}
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>

        <a
          href="https://twitter.com/angusp"
          aria-label="Twitter Profile"
          title="Twitter Profile"
          css={profileLinkCss}
        >
          <FontAwesomeIcon icon={faTwitter} mask={faCircle} transform="shrink-6" />
        </a>

        <a
          href="https://www.linkedin.com/in/aperkerson"
          aria-label="LinkedIn Profile"
          title="LinkedIn Profile"
          css={profileLinkCss}
        >
          <FontAwesomeIcon icon={faLinkedinIn} mask={faCircle} transform="shrink-6" />
        </a>
      </div>
      <nav role="navigation" aria-label="Main">
        <ul css={menuCss}>
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} passHref>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

SiteBanner.propTypes = {
  className: PropTypes.string,
};

SiteBanner.defaultProps = {
  className: '',
};

export default SiteBanner;
