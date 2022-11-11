import PropTypes from 'prop-types';
import Link from 'next/link';
import { rem } from 'polished';
import { css } from '@emotion/react';

export function Tag({ tag }) {
  const linkSlug = tag.toLowerCase().replace(/ /g, '-');

  return (
    <Link href={`/tags/${linkSlug}`} passHref>
      <a
        css={css`
          font-size: ${rem(12)};
          line-height: 1.2;
          font-style: italic;
        `}
        href={`/tags/${linkSlug}`}
      >
        {tag}
      </a>
    </Link>
  );
}

Tag.propTypes = {
  tag: PropTypes.string.isRequired,
};

Tag.defaultProps = {};

export default Tag;
