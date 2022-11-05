import PropTypes from 'prop-types';
import { rgba } from 'polished';
import { theme } from '@styles/theme';

const { colors } = theme;

export function Divider({ vertical, width, height, color, className }) {
  const bgColor = color || colors?.gray;

  const styles = {
    width: vertical ? '1px' : '100%',
    height: vertical ? '100%' : '1px',
  };

  if (width !== null) {
    styles.width = width;
  }

  if (height !== null) {
    styles.height = height;
  }

  const deg = vertical ? '0deg' : '90deg';

  const transparent = rgba(bgColor, 0);
  const opaque = rgba(bgColor, 1);

  styles.background = `linear-gradient(${deg}, ${transparent} 0%, ${opaque} 20%, ${opaque} 80%, ${transparent} 100%)`;

  return <div css={styles} className={className} data-testid="divider" />;
}

Divider.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  vertical: PropTypes.bool,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Divider.defaultProps = {
  className: null,
  color: null,
  height: null,
  vertical: false,
  width: null,
};

export default Divider;
