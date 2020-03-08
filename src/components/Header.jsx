import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useCallback } from 'react';
import { Header as GHeader, Nav, Anchor, Heading, CheckBox } from 'grommet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

export const THEME_LIGHT = 'Light';
export const THEME_DARK = 'Dark';

function Header({ siteTitle, onThemeToggle, theme }) {
  const onThemeChange = useCallback(() => {
    const newTheme = theme === THEME_LIGHT ? THEME_DARK : THEME_LIGHT;
    onThemeToggle(newTheme);
  }, [onThemeToggle]);

  return (
    <GHeader as="header" flex pad="medium" justify="between" role="banner" background="brand">
      <Heading as="div">
        <Anchor as={Link} to="/" label={siteTitle} />
      </Heading>
      <Nav direction="row" role="navigation">
        <Anchor as={Link} to="/page-2">
          Page 2
        </Anchor>
        <Anchor
          href="https://twitter.com/angusp"
          a11yTitle="Angus's Twitter Account"
          icon={<FontAwesomeIcon icon={faTwitter} />}
        />
      </Nav>
      <div>
        Theme:
        {' '}
        <CheckBox toggle checked={theme === THEME_LIGHT} label={theme} onClick={onThemeChange} />
      </div>
    </GHeader>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  onThemeToggle: PropTypes.func,
  theme: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
  onThemeToggle: () => {},
  theme: THEME_LIGHT,
};

export default Header;
