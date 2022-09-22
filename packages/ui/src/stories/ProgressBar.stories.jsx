import { ProgressBar } from "../components";

export default {
  title: "ProgressBar",
  component: ProgressBar,
  argTypes: {
    colorProp: {
      control: {
        type: "color",
      },
    },
  },
};

const Template = (args) => <ProgressBar {...args} />;

export const Default = Template.bind({});
Default.args = {};
