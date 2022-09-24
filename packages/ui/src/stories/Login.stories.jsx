import { Login } from "../components";
import { Router } from "react-router-dom";

export default {
  title: "Components/Login",
  component: Login,
  argTypes: {
    // colorProp: {
    //   control: {
    //     type: "color",
    //   },
    // },
  },
};

const Template = (args) => (
  <Router>
    <Login />
  </Router>
);

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
