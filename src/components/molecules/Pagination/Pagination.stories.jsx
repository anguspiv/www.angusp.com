import { Pagination } from './Pagination';

export default {
  component: Pagination,
  title: 'Components/Molecules/Pagination',
};

const Template = (args) => <Pagination {...args} />;

export const Default = Template.bind({});
Default.args = {
  prev: '/previous-page',
  next: '/next-page',
  curr: 1,
  total: 100,
};
