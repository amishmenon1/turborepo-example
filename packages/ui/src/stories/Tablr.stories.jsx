import { Tablr } from "../components/tablr/Tablr";

export default {
  title: "Tablr - A Customizable React Table Component",
  component: Tablr,
  argTypes: {
    rows: { control: "" },
    headers: { control: "" },
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
