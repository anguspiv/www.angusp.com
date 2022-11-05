import PropTypes from 'prop-types';
import Link from 'next/link';
import { css } from '@emotion/react';
import { rem } from 'polished';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { spacing } from '@styles/utils';
import { theme } from '@styles/theme';
import { Divider } from '@components/atoms/Divider';

const { colors } = theme;

const navCss = css`
  display: grid;
  grid-gap: ${spacing(1)};
  grid-template-areas: 'prev current next';
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: ${rem(14)};
`;

const prevCss = css`
  grid-area: prev;
  justify-self: start;
`;

const currentCss = css`
  grid-area: current;
  justify-self: center;
`;

const nextCss = css`
  grid-area: next;
  justify-self: end;
`;

const linkBorderCss = css`
  width: 0;
  transition: all 0.2s ease-in-out;
`;

const pageLinkCss = css`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  line-height: 1.2;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    text-decoration: none;

    .border {
      width: 100%;
    }
  }
`;

const pageLabelCss = css`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;

  .icon + & {
    margin-left: ${spacing(0.5)};
  }

  & + .icon {
    margin-left: ${spacing(0.5)};
  }
`;

export function Pagination({ prev, next, curr, total }) {
  return (
    <nav data-testid="pagination" css={navCss}>
      <div css={prevCss}>
        {prev && (
          <Link href={prev} passHref>
            <a href={prev} css={pageLinkCss}>
              <FontAwesomeIcon icon={faChevronLeft} className="icon" />
              <span css={pageLabelCss}>
                Previous
                <Divider css={linkBorderCss} color={colors.teal} className="border" />
              </span>
            </a>
          </Link>
        )}
      </div>
      <div css={currentCss}>
        <span css={pageLabelCss}>
          {curr} of {total}
        </span>
      </div>
      <div css={nextCss}>
        {next && (
          <Link href={next} passHref>
            <a href={next} css={pageLinkCss}>
              <span css={pageLabelCss}>
                Next
                <Divider color={colors.teal} className="border" css={linkBorderCss} />
              </span>
              <FontAwesomeIcon icon={faChevronRight} className="icon" />
            </a>
          </Link>
        )}
      </div>
    </nav>
  );
}

Pagination.propTypes = {
  prev: PropTypes.string,
  next: PropTypes.string,
  curr: PropTypes.number,
  total: PropTypes.number,
};

Pagination.defaultProps = {
  prev: null,
  next: null,
  curr: 1,
  total: 1,
};

export default Pagination;
