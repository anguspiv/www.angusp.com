import Image from 'next/image';
import PropTypes from 'prop-types';
import { frame, image } from './styles';

export function Avatar({ className, width, height, ...props }) {
  return (
    <div data-testid="avatar" className={className} css={frame}>
      <Image {...props} layout="fill" css={image} placeholder="blur" />
    </div>
  );
}

Avatar.propTypes = {
  ...Image.propTypes,
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({})]).isRequired,
  className: PropTypes.string,
};

Avatar.defaultProps = {
  ...Image.defaultProps,
  className: '',
};

export default Avatar;
