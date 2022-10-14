import React from 'react';
import styled from 'styled-components';
import Layout from './Layout';

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: pink;
`;

export default {
  component: Layout,
  title: 'Components/Templates/Layout',
};

const Template = (args) => (
  <Layout {...args}>
    <Content>Content</Content>
  </Layout>
);

export const Default = Template.bind({});
Default.args = {};
