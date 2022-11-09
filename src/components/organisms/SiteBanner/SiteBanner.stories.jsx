import { SiteBanner } from './SiteBanner';

export default {
  component: SiteBanner,
  title: 'Components/Organisms/SiteBanner',
};

const Template = (args) => <SiteBanner {...args} />;

export const Default = Template.bind({});
Default.args = {};
