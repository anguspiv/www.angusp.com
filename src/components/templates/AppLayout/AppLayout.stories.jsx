import styled from '@emotion/styled';
import { AppLayout } from './AppLayout';

export default {
  component: AppLayout,
  title: 'Components/Templates/AppLayout',
};

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  min-height: 1400px;
  background-color: pink;
`;

const Template = (args) => (
  <AppLayout {...args}>
    <Content>Content</Content>
  </AppLayout>
);

export const Default = Template.bind({});
Default.args = {};
