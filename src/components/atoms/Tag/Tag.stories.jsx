import { Tag } from './Tag';

export default {
  component: Tag,
  title: 'Components/Atoms/Tag',
};

const Template = (args) => <Tag {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Cool Tag',
  slug: 'cool-tag',
  color: '#fff',
};
