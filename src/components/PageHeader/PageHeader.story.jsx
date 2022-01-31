import React from 'react';
import PageHeader from './PageHeader';

export default {
  component: PageHeader,
  title: 'Components/PageHeader',
  argTypes: {
    publishDate: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <PageHeader {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Test Header Text',
  featuredImage: 'https://via.placeholder.com/1200x800',
  excerpt: 'Test excerpt text for the page header',
};
