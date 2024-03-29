import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { rem } from 'polished';
import { Tag } from '@components/atoms/Tag';
import { spacing } from '@styles/utils';

const listCss = css`
  display: flex;
  flex-wrap: wrap;
  gap: ${spacing(0.5)};
  margin: 0;
  padding: 0;
  list-style: none;

  & > li {
    margin: 0;

    &:first-of-type {
      span {
        font-size: ${rem(12)};
        line-height: 1;
      }

      &::after {
        content: '';
      }
    }

    &:last-of-type::after {
      content: '';
    }
  }
`;

export function TagList({ className, tags }) {
  return (
    <ul css={listCss} className={className}>
      <li>
        <span>Tags: </span>
      </li>
      {tags.map(({ label, color }) => (
        <li key={label}>
          <Tag label={label} color={color} />
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
