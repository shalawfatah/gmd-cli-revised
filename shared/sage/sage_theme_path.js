const username = require("../../utilities/username")

// PATH TO SAGE THEME ON YOUR WEBSITE
module.exports = (name) => {
  const user = username()
  const sage_path = `/Users/${user}/vvv-local/www/${name}/public_html/wp-content/themes/${name}`;
  return sage_path;
}