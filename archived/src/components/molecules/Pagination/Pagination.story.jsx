import React from 'react';
import Pagination from './Pagination';

export default {
  component: Pagination,
  title: 'Components/Molecules/Pagination',
};

const Template = (args) => <Pagination {...args} />;

export const Default = Template.bind({});
Default.args = {
  previousPagePath: '/previous-page',
  nextPagePath: '/next-page',
  humanPageNumber: 1,
  numberOfPages: 100,
};
