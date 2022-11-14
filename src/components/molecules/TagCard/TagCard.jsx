import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { rem } from 'polished';
import { spacing } from '@styles/utils';
import { Tag } from '@components/atoms/Tag';

const cardCss = css`
  display: flex;
  flex-direction: column;
  padding: 0;
  color: initial;
  padding: ${spacing(2)};

  &:hover {
    color: initial;
    text-decoration: none;
  }
`;

const headerCss = css`
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: flex-start;
`;

const descriptionCss = css`
  margin-bottom: 0;
`;

const postCountCss = css`
  color: var(--text-color-muted);
  font-size: ${rem(14)};

  &:before {
    display: inline-block;
    margin-right: ${spacing(0.5)};
    margin-left: ${spacing(0.5)};
    content: '-';
  }
`;

export function TagCard({ title, description, className, postCount }) {
  return (
    <div data-testid="tag-card" css={cardCss} className={className}>
      <header css={headerCss}>
        <Tag tag={title} />
        {!!postCount && (
          <span css={postCountCss}>
            {postCount} {postCount === 1 ? 'post' : 'posts'}
          </span>
        )}
      </header>
      <p css={descriptionCss}>{description}</p>
    </div>
  );
}

TagCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  postCount: PropTypes.number,
  className: PropTypes.string,
};

TagCard.defaultProps = {
  description: '',
  className: '',
  postCount: null,
};

export default TagCard;
