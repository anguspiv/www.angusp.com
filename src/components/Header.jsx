import { Link, useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { rem } from 'polished';

import breakpoint from 'styled-components-breakpoint';
import { faTwitter, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Avatar from './Avatar';
import { spacing } from '../styles';

const Container = styled.header`
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

  ${breakpoint('lg')`
    padding: 20vh ${spacing(4)};

    &:after {
      position: absolute;
      right: 0;
      top: 20%;
      content: '';
      height: 60%;
      width: 1px;
      display: block;
      background: linear-gradient(
        0deg,
        rgba(127, 127, 127, 0) 0%,
        rgba(127, 127, 127,1) 20%,
        rgba(127, 127, 127,1) 80%,
        rgba(127, 127, 127,0) 100%
      );
    }
  `}
`;

const Title = styled.span`
  display: block;
  margin: 0 auto ${spacing(0.5)} auto;
  font-size: ${rem('24px')};
`;

const Subtitle = styled.span`
  display: block;
  margin: 0 auto ${spacing(1)} auto;
  font-size: ${rem('16px')};
  font-style: italic;
`;

const Email = styled.a`
  display: block;
  margin: 0 auto ${spacing(0.25)} auto;
  font-size: ${rem('18px')};
  font-family: ${({ theme }) => theme.fonts.monospace};
`;

const HeaderAvatar = styled(Avatar)`
  width: ${rem('180px')};
  margin: ${spacing(2, 'auto')};
`;

const ProfileLinks = styled.div`
  display: flex;
  justify-content: center;
  margin: ${spacing(1)} 0;
  font-size: ${rem('32px')};
`;

const ProfileLink = styled.a`
  margin: ${spacing(1)};
`;

function Header({ className }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            email
          }
        }
      }
    `,
  );

  const { title, description, email } = site.siteMetadata;

  return (
    <Container role="banner" className={className}>
      <Link to="/" aria-label={title}>
        <HeaderAvatar />
      </Link>
      <Title as="span" data-test-id="site-title">
        Angus Perkerson
      </Title>
      <Subtitle data-test-id="site-description">{description}</Subtitle>
      <Email href={`mailto:${email}`}>{email}</Email>
      <ProfileLinks>
        <ProfileLink
          href="https://github.com/anguspiv"
          aria-label="Github Profile"
          title="Github Profile"
        >
          <FontAwesomeIcon icon={faGithub} />
        </ProfileLink>
        <ProfileLink
          href="https://twitter.com/angusp"
          aria-label="Twitter Profile"
          title="Twitter Profile"
        >
          <FontAwesomeIcon transform="shrink-6" icon={faTwitter} mask={faCircle} />
        </ProfileLink>
        <ProfileLink
          href="https://www.linkedin.com/in/aperkerson"
          aria-label="LinkedIn Profile"
          title="LinkedIn Profile"
        >
          <FontAwesomeIcon transform="shrink-6" icon={faLinkedinIn} mask={faCircle} />
        </ProfileLink>
      </ProfileLinks>
    </Container>
  );
}

Header.propTypes = {
  className: PropTypes.string,
};

Header.defaultProps = {
  className: null,
};

export default Header;
