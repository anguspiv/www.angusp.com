import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { rem } from 'polished';
import { spacing } from '@styles/utils';
import { Divider } from '@components/atoms/Divider';

export function SectionTitle({ children, className }) {
  return (
    <header
      className={className}
      css={css`
        display: flex;
        flex-direction: row;
        align-content: center;
        align-items: center;
        justify-content: flex-start;
        margin-bottom: ${spacing(2)};
      `}
      data-testid="section-title"
    >
      <h2
        css={css`
          display: inline-block;
          flex: 0 0 auto;
          margin-right: ${spacing(1)};
          margin-bottom: 0;
          font-weight: normal;
          font-size: ${rem('14px')};
          font-style: italic;
        `}
      >
        {children}
      </h2>
      <Divider
        css={css`
          flex: 1 1 100%;
          max-width: ${rem('280px')};
        `}
      />
    </header>
  );
}

SectionTitle.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

SectionTitle.defaultProps = {
  children: null,
  className: null,
};

export default SectionTitle;
