const username = require("../../utilities/username")

// PATH TO YOUR NEWLY CREATED SITE
module.exports = (name) => {
  const user = username()
  const path = `/Users/${user}/vvv-local/www/${name}/public_html/wp-content/themes`;
  return path;
}