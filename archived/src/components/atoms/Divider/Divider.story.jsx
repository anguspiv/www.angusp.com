import React from 'react';
import styled from 'styled-components';
import Divider from './Divider';

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  max-height: 100%;
`;

export default {
  component: Divider,
  title: 'Components/Atoms/Divider',
};

const Template = (args) => (
  <Container>
    <Divider {...args} />
  </Container>
);

export const Default = Template.bind({});
Default.args = {
  vertical: false,
  width: '100%',
};
