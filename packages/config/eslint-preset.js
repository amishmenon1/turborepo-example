module.exports = {
  extends: ["airbnb"],
  settings: {
    next: {
      rootDir: ["apps/*/", "packages/*/"],
    },
  },
  rules: {
    "react/jsx-key": "off",
  },
};
