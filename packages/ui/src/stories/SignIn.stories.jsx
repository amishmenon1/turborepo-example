import { SignIn } from "../components";

export default {
  title: "Components/SignIn",
  component: SignIn,
  argTypes: {
    // colorProp: {
    //   control: {
    //     type: "color",
    //   },
    // },
  },
};

const Template = (args) => <SignIn />;

export const Default = Template.bind({});
Default.args = {};

// export const Blue = Template.bind({});
// Blue.args = {
//   colorProp: "blue",
// };

// export const Green = Template.bind({});
// Green.args = {
//   colorProp: "green",
// };

// export const Yellow = Template.bind({});
// Yellow.args = {
//   colorProp: "yellow",
// };
