import { TagList } from './TagList';

export default {
  component: TagList,
  title: 'Components/Molecules/TagList',
};

const Template = (args) => <TagList {...args} />;

export const Default = Template.bind({});
Default.args = {
  tags: ['Career', 'Technology', 'JavaScript', 'PokerMans'],
};
