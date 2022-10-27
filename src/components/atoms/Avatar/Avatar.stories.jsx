import { Avatar } from './Avatar';

export default {
  component: Avatar,
  title: 'Components/Atoms/Avatar',
};

const Template = (args) => <Avatar {...args} />;

export const Default = Template.bind({});

Default.args = {
  src: 'https://picsum.photos/200',
  alt: 'Example Name',
  width: 100,
};
