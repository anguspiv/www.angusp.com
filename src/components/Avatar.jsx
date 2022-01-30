import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { motion, useSpring } from 'framer-motion';
import ProfileImage from './images/ProfileImage';
import { spacing } from '../styles';

const Image = styled(ProfileImage)`
  overflow: hidden;
  border-radius: 50%;
`;

const Frame = styled(motion.div)`
  position: relative;
  padding: ${spacing(0.5)};
  overflow: hidden;
  border-radius: 50%;
  box-shadow: ${(props) => props.theme.elevation.medium};
`;

const Glare = styled(motion.div)`
  position: absolute;
  top: -50%;
  left: 70%;
  width: 63%;
  height: 163%;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 60%,
    rgba(255, 255, 255, 0.75) 98%,
    rgba(255, 255, 255, 0.2) 100%
  );
  opacity: 0;
  transition-property: 'transform';
`;

const getRotationValue = (curr, max) => {
  let percentWidth = curr / max;
  percentWidth = Number.isNaN(percentWidth) ? 0.5 : percentWidth;
  const translated = percentWidth * 30 - 15;
  return translated;
};

function Avatar({ className }) {
  const [isHovering, setIsHovering] = useState(true);
  const rotateY = useSpring(0, { stiffness: 200 });
  const glareOpacity = useSpring(0);
  const glareRotate = useSpring(30, { stiffness: 100 });
  const glareX = useSpring(0, { stiffness: 100 });
  const onMouseMove = useCallback(
    (evt) => {
      const width = evt.target.width ? evt.target.width : 180;
      const percentWidth = evt.nativeEvent.offsetX / width;
      const y = getRotationValue(evt.nativeEvent.offsetX, width);
      const glareRotation = percentWidth * 30;
      const glareXAdjust = percentWidth * (0 - width) - 20;
      if (isHovering) {
        glareX.set(glareXAdjust);
        glareRotate.set(glareRotation);
        rotateY.set(y);
      }
    },
    [isHovering],
  );

  const onHoverEnd = useCallback(() => {
    rotateY.set(0);
    glareOpacity.set(0);
    setIsHovering(false);
  });

  const onHoverStart = useCallback(() => {
    setIsHovering(true);
    glareOpacity.set(1);
  });

  return (
    <Frame
      data-test-id="profile-image"
      className={className}
      style={{ rotateY }}
      onMouseMove={onMouseMove}
      onHoverEnd={onHoverEnd}
      onHoverStart={onHoverStart}
    >
      <Image />
      <Glare style={{ opacity: glareOpacity, rotateZ: glareRotate, x: glareX }} />
    </Frame>
  );
}

Avatar.propTypes = {
  className: PropTypes.string,
};

Avatar.defaultProps = {
  className: '',
};

export default Avatar;
