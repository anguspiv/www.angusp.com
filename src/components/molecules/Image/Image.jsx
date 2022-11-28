import PropTypes from 'prop-types';
import { css } from '@emotion/react';

const imageCss = css`
  max-width: 100%;
  height: auto;
  margin: 0;
`;

const figureCss = css`
  margin: 0;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 1.666rem;
`;

const captionCss = css`
  margin-top: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text-color-muted);
  font-style: italic;
`;

export function Image({ src, alt, title, className }) {
  return (
    <figure css={figureCss} className={className}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} data-testid="image" css={imageCss} title={title} />
      {title && <figcaption css={captionCss}>{title}</figcaption>}
    </figure>
  );
}

Image.propTypes = {
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({})]).isRequired,
  alt: PropTypes.string,
  title: PropTypes.string,
  className: PropTypes.string,
};

Image.defaultProps = {
  alt: '',
  title: '',
  className: '',
};

export default Image;
