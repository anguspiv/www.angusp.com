import PropTypes from 'prop-types';
import Link from 'next/link';
import { rem, darken, lighten, readableColor } from 'polished';
import { css, useTheme } from '@emotion/react';

const linkCss = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: ${rem(20)};
  padding: ${rem(4)} ${rem(8)};
  border-radius: ${rem(12)};
  font-size: ${rem(12)};
  line-height: 1;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    text-decoration: none;
  }
`;

export function Tag({ label, color }) {
  const theme = useTheme();
  const linkSlug = label.toLowerCase().replace(/ /g, '-');

  return (
    <Link href={`/tags/${linkSlug}`} passHref>
      <a
        css={css`
          ${linkCss};
          color: ${color ? readableColor(color) : theme.text.color.dark};
          background-color: ${color || theme.colors.gray};

          &:hover {
            color: ${color ? readableColor(color) : theme.text.color.dark};
            background-color: ${lighten(0.1, color || theme.colors.gray)};
          }

          &:active {
            background-color: ${darken(0.1, color || theme.colors.gray)};
          }
        `}
        href={`/tags/${linkSlug}`}
      >
        {label}
      </a>
    </Link>
  );
}

Tag.propTypes = {
  label: PropTypes.string.isRequired,
  color: PropTypes.string,
};

Tag.defaultProps = {
  color: null,
};

export default Tag;
