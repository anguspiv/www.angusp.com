import { css } from '@emotion/react';
import { Container } from './Container';

const StoryContainer = (props) => (
  <Container
    {...props}
    css={css`
      background: rgba(255, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 300px;
      height: 50vh;
    `}
  />
);

export default {
  component: Container,
  title: 'Components/Atoms/Container',
};

const Template = (args) => <StoryContainer {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Container',
};
