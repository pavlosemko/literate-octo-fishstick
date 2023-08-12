const path = require("path");
const { alias } = require("react-app-rewire-alias");

module.exports = function override(config) {
  alias({
    "@": path.resolve(__dirname, "./src"),
  })(config);

  return config;
};
