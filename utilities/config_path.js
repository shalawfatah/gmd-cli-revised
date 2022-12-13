const username = require("./username");

// PATH TO CONFIG YAML IN VVV-LOCAL
module.exports = () => {
  const user = username()
  const config_yaml = `/Users/${user}/vvv-local/config/config.yml`;
  return config_yaml;
}