import { TagCard } from './TagCard';

export default {
  title: 'Components/Molecules/TagCard',
  component: TagCard,
};

const Template = (args) => <TagCard {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: 'JavaScript',
  slug: 'javascript',
  description: 'Test description',
};
