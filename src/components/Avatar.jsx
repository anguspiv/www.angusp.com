import React from 'react';
import styled from 'styled-components';
import { Box } from 'grommet';
import { rem } from 'polished';
import ProfileImage from './images/ProfileImage';

const ImgFrame = styled(Box)`
  width: 100%;
  max-width: ${rem('280px')};
  margin: 1rem auto;
  overflow: hidden;
  border-radius: 50%;
`;

function Avatar() {
  return (
    <ImgFrame animation="fadeIn" elevation="large" overflow="hidden" round="full">
      <ProfileImage />
    </ImgFrame>
  );
}

export default Avatar;
