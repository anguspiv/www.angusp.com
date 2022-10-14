import React from 'react';
import PropTypes from 'prop-types';
import { rem } from 'polished';
import styled from 'styled-components';
import Divider from '@components/atoms/Divider';

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`;

const Title = styled.h2`
  display: inline-block;
  flex: 0 0 auto;
  margin-right: ${({ theme }) => theme.spacing(1)};
  margin-bottom: 0;
  font-weight: normal;
  font-size: ${rem('14px')};
  font-style: italic;
`;

const TitleDivider = styled(Divider)`
  flex: 1 1 100%;
  max-width: ${rem('280px')};
`;

function SectionTitle({ children }) {
  return (
    <Header>
      <Title>{children}</Title>
      <TitleDivider />
    </Header>
  );
}

SectionTitle.propTypes = {
  children: PropTypes.node,
};

SectionTitle.defaultProps = {
  children: null,
};

export default SectionTitle;
