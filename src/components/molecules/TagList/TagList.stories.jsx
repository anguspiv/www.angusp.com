import { TagList } from './TagList';

export default {
  component: TagList,
  title: 'Components/Molecules/TagList',
};

const Template = (args) => <TagList {...args} />;

export const Default = Template.bind({});
Default.args = {
  tags: [
    { label: 'Career', slug: 'career', color: '#fff' },
    { label: 'Technology', slug: 'technology', color: '#f00' },
    { label: 'JavaScript', slug: 'javascript', color: '#ff0' },
    { label: 'PokerMans', slug: 'pokermans', color: '#f0f' },
  ],
};
