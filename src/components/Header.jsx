import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Container = styled.header`
  margin-bottom: 1.45rem;
  background: rebeccapurple;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

const Headline = styled.h1`
  margin: 0;
`;

const Wrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 1.45rem 1.0875rem;
`;

const Header = ({ siteTitle }) => (
  <Container>
    <Wrapper>
      <Headline style={{ margin: 0 }}>
        <NavLink to="/">{siteTitle}</NavLink>
      </Headline>
    </Wrapper>
  </Container>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
