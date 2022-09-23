import { ProgressBar } from "../components";

export default {
  title: "Components/ProgressBar",
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

export const Blue = Template.bind({});
Blue.args = {
  colorProp: "blue",
};

export const Green = Template.bind({});
Green.args = {
  colorProp: "green",
};

export const Yellow = Template.bind({});
Yellow.args = {
  colorProp: "yellow",
};
