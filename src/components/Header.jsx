import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { Header as GHeader, Nav, Anchor } from 'grommet';

const Headline = styled.h1`
  margin: 0;
`;

const Header = ({ siteTitle }) => (
  <GHeader background="brand" flex pad="medium" justify="between">
    <Headline>
      <Anchor as={Link} to="/">
        {siteTitle}
      </Anchor>
    </Headline>
    <Nav direction="row" background="brand">
      <Anchor as={Link} to="/page-2">
        Page 2
      </Anchor>
    </Nav>
  </GHeader>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
