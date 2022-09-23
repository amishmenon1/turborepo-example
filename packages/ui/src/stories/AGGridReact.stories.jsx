import { AGGridReact } from "../components";

export default {
  title: "Components/AG Grid",
  component: AGGridReact,
  argTypes: {
    rowColor: { control: { type: "color" } },
  },
};

const Template = (args) => <AGGridReact {...args} />;

export const Default = Template.bind({});
Default.args = {
  rowColor: "lightgray",
};

export const Blue = Template.bind({});
Blue.args = {
  rowColor: "lightblue",
};

export const Green = Template.bind({});
Green.args = {
  rowColor: "lightgreen",
};

export const Yellow = Template.bind({});
Yellow.args = {
  rowColor: "yellow",
};
