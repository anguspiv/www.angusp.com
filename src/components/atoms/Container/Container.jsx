import { css } from '@emotion/react';
import PropTypes from 'prop-types';

export function Container({ children, className }) {
  return (
    <div
      className={className}
      css={css`
        margin: 0 auto;
        padding: 0 1rem;
        max-width: var(--page-width);
      `}
    >
      {children}
    </div>
  );
}

Container.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

Container.defaultProps = {
  children: null,
  className: null,
};

export default Container;
