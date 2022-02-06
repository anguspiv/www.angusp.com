import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { rem, darken, lighten, readableColor } from 'polished';
import styled from 'styled-components';

const TagLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: ${rem(20)};
  padding: ${rem(8)};
  color: ${({ theme, color }) => (color ? readableColor(color) : theme.colors.white)};
  font-size: ${rem(12)};
  line-height: 1;
  text-decoration: none;
  background-color: ${({ theme, color }) => color || theme.colors.gray};
  border-radius: ${rem(12)};
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${({ theme, color }) => (color ? readableColor(color) : theme.colors.white)};
    text-decoration: none;
    background-color: ${({ theme, color }) => lighten(0.1, color || theme.colors.gray)};
  }

  &:active {
    background-color: ${({ theme, color }) => darken(0.1, color || theme.colors.gray)};
  }
`;

function Tag({ name, slug, color }) {
  return (
    <TagLink to={`/tags/${slug}`} color={color}>
      {name}
    </TagLink>
  );
}

Tag.propTypes = {
  name: PropTypes.string.isRequired,
  slug: PropTypes.string,
  color: PropTypes.string,
};

Tag.defaultProps = {
  slug: '',
  color: null,
};

export default Tag;
