import { Link } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { rem } from 'polished';
import breakpoint from 'styled-components-breakpoint';
import Avatar from './Avatar';
import { spacing } from '../styles';

const Container = styled.header`
  padding: ${spacing(1)};
  text-align: center;

  ${breakpoint('md')`
    padding: 20vh ${spacing(1)};
  `}
`;

const HeaderAvatar = styled(Avatar)`
  min-width: ${rem('180px')};
  max-width: ${rem('240px')};
  margin: ${spacing(0.5, 'auto')};
`;

function Header({ className }) {
  return (
    <Container role="banner" className={className}>
      <Link to="/" aria-label="Angus Perkerson - Home Page">
        <HeaderAvatar />
      </Link>
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
