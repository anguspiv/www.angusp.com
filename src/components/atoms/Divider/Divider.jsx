import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { rgba } from 'polished';

const Line = styled.div`
  width: ${({ width, vertical }) => {
    if (width !== null) {
      return width;
    }
    return vertical ? '1px' : '100%';
  }};
  height: ${({ vertical, height }) => {
    if (height !== null) {
      return height;
    }

    return vertical ? '100%' : '1px';
  }};
  background: ${({ theme, vertical, color }) => {
    const { colors } = theme;

    const bgColor = color || colors.gray;

    const transparent = rgba(bgColor, 0);
    const opacified = rgba(bgColor, 1);

    const deg = vertical ? '0deg' : '90deg';

    return `linear-gradient(${deg}, ${transparent} 0%, ${opacified} 20%, ${opacified} 80%, ${transparent} 100%)`;
  }};
  transition: all 0.2s ease-in-out;
`;

function Divider(props) {
  return <Line data-testid="divider" {...props} />;
}

Divider.propTypes = {
  color: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  vertical: PropTypes.bool,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Divider.defaultProps = {
  color: null,
  height: null,
  vertical: false,
  width: null,
};

export default Divider;
