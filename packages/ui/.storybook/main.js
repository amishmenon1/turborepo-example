module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  logLevel: "debug",
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-postcss",
    "storybook-css-modules-preset",
  ],
  framework: "@storybook/react",
  features: {
    previewMdx2: true,
  },
};
