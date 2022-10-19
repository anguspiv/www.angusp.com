import { SectionTitle } from './SectionTitle';

export default {
  component: SectionTitle,
  title: 'Components/Molecules/SectionTitle',
};

const Template = (args) => <SectionTitle {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Section Title',
};
