import { Tablr } from "../components";

export default {
  title: "Tablr - A Customizable React Table Component",
  component: Tablr,
  argTypes: {
    rows: { control: { disable: true } },
    headers: { control: { disable: true } },
    cellTextColor: { control: { type: "color" } },
    headerTextColor: { control: { type: "color" } },
    cellBorderColor: { control: { type: "color" } },
    backgroundColor: { control: { type: "color" } },
    headerBorderColor: { control: { type: "color" } },
    headerBackgroundColor: { control: { type: "color" } },
    borderWidth: { control: { type: "radio" } },
    cellPadding: { control: { type: "radio" } },
  },
};

const Template = (args) => <Tablr {...args} />;

export const Default = Template.bind({});
Default.args = {
  rows: [
    ["A", "B", "C", "D", "E"],
    ["AA", "BB", "CC", "DD", "EE"],
    ["AAA", "BBB", "CCC", "DDD", "EEE"],
    ["AAAA", "BBBB", "CCCC", "DDDD", "EEEE"],
  ],
  headers: ["Col 1", "Col 2", "Col 3", "Col 4", "Col 5"],
  borderWidth: "thick",
  cellPadding: "small",
  cellTextColor: "black",
  headerTextColor: "white",
  cellBorderColor: "#747381",
  headerBorderColor: "#494866",
  backgroundColor: "#a6a5b8",
  headerBackgroundColor: "#65647a",
};
