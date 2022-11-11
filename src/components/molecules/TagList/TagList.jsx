import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { Tag } from '@components/atoms/Tag';
import { spacing } from '@styles/utils';

const listCss = css`
  display: flex;
  flex-wrap: wrap;
  gap: ${spacing(0.5)};
  margin: 0;
  padding: 0;
  list-style: none;
`;

export function TagList({ className, tags }) {
  return (
    <ul css={listCss} className={className}>
      {tags.map(({ label, slug, color }) => (
        <li key={slug}>
          <Tag label={label} slug={slug} color={color} />
        </li>
      ))}
    </ul>
  );
}

TagList.propTypes = {
  className: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.shape(Tag.propTypes)),
};

TagList.defaultProps = {
  className: '',
  tags: [],
};

export default TagList;
