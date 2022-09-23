import { PaginatedRange } from "../components";

export default {
  title: "Components/PaginatedRange",
  component: PaginatedRange,
  argTypes: {
    // colorProp: { control: "select" },
    countProp: {
      control: {
        type: "number",
      },
    },
    defaultPageProp: { control: { type: "number", min: 1, max: 10 } },
    disabled: { control: { type: "boolean" } },
    colorProp: {
      options: ["primary", "secondary"],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => <PaginatedRange {...args} />;

export const Default = Template.bind({});
Default.args = {};
