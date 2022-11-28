import { Image } from './Image';

export default {
  component: Image,
  title: 'Components/Molecules/Image',
};

const Template = (args) => <Image {...args} />;

export const Default = Template.bind({});

Default.args = {
  alt: 'Image alt text',
  src: 'https://picsum.photos/200/300',
  title: 'Image title',
};
