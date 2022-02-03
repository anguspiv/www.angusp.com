import React from 'react';
import styled from 'styled-components';
import PageSection from './PageSection';

const StorySection = styled(PageSection)`
  background: rgba(255, 0, 0, 0.5);
`;

export default {
  component: PageSection,
  title: 'Components/Atoms/PageSection',
};

const Template = (args) => <StorySection {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'PageSection',
};
