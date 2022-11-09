import { Link } from './Link';

export default {
  component: Link,
  title: 'Components/Atoms/Link',
};

const Template = (args) => <Link {...args} />;

export const Default = Template.bind({});
Default.args = {
  href: '/',
  children: 'Link',
};
