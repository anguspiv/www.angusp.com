import PropTypes from 'prop-types';
import Link from 'next/link';
import { rem, darken, lighten, readableColor } from 'polished';
import { css, useTheme } from '@emotion/react';

export function Tag({ label, slug, color }) {
  const theme = useTheme();
  const linkSlug = slug || label.toLowerCase().replace(/ /g, '-');

  return (
    <Link
      css={css`
        display: inline-flex;
        align-items: center;
        justify-content: center;
        height: ${rem(20)};
        padding: ${rem(8)};
        color: ${color ? readableColor(color) : theme.colors.white};
        font-size: ${rem(12)};
        line-height: 1;
        text-decoration: none;
        background-color: ${color || theme.colors.gray};
        border-radius: ${rem(12)};
        transition: all 0.2s ease-in-out;

        &:hover {
          color: ${color ? readableColor(color) : theme.colors.white};
          text-decoration: none;
          background-color: ${lighten(0.1, color || theme.colors.gray)};
        }

        &:active {
          background-color: ${darken(0.1, color || theme.colors.gray)};
        }
      `}
      href={`/tags/${linkSlug}`}
    >
      {label}
    </Link>
  );
}

Tag.propTypes = {
  label: PropTypes.string.isRequired,
  slug: PropTypes.string,
  color: PropTypes.string,
};

Tag.defaultProps = {
  slug: '',
  color: null,
};

export default Tag;
