import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { Header as GHeader, Nav, Anchor, Heading } from 'grommet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const Header = ({ siteTitle }) => (
  <GHeader as="header" background="brand" flex pad="medium" justify="between" role="banner">
    <Heading as="div">
      <Anchor as={Link} to="/" color="white">
        {siteTitle}
      </Anchor>
    </Heading>
    <Nav direction="row" background="brand" role="navigation">
      <Anchor as={Link} to="/page-2" color="white">
        Page 2
      </Anchor>
      <Anchor
        href="https://twitter.com/angusp"
        a11yTitle="Angus's Twitter Account"
        icon={<FontAwesomeIcon icon={faTwitter} />}
        color="white"
      />
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
