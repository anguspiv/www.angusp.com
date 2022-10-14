import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { rem } from 'polished';
import { Link } from 'gatsby';

const Wrapper = styled.nav``;

const List = styled.ul`
  display: flex;
  align-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const ListItem = styled.li`
  margin: 0;
  font-size: ${rem('12px')};
`;

const Crumb = styled(Link)`
  color: ${({ theme }) => theme.colors.text};
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
  }
`;

const StyledSeperator = styled.span`
  margin: 0 0.25rem;
`;

function Separator() {
  return <StyledSeperator>\</StyledSeperator>;
}

const toTitleCase = (str) =>
  str
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

function BreadCrumbs({ className, location }) {
  const { pathname, search } = location;
  const segments = pathname.split('/').filter(Boolean);

  const crumbs = segments.map((segment, index) => {
    const isLast = index === segments.length - 1;
    const label = toTitleCase(segment);
    const path = `/${segments.slice(0, index + 1).join('/')}`;

    return {
      label,
      path,
      isLast,
    };
  });

  return (
    <Wrapper className={className}>
      <List>
        <ListItem>
          <Crumb to="/">Home</Crumb>
          <Separator />
        </ListItem>
        {crumbs.map(({ label, path, isLast }) => (
          <ListItem key={path}>
            <Crumb to={isLast ? `${pathname}${search || ''}` : path}>{label}</Crumb>
            {!isLast && <Separator />}
          </ListItem>
        ))}
      </List>
    </Wrapper>
  );
}

BreadCrumbs.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
    search: PropTypes.string,
  }),
  className: PropTypes.string,
};

BreadCrumbs.defaultProps = {
  className: null,
  location: {
    pathname: '',
    search: '',
  },
};

export default BreadCrumbs;
