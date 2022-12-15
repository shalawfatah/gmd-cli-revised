const fs   = require('fs');
const yaml = require('js-yaml');
const config_path = require('../../utilities/config_path');
const username = require("../../utilities/username");

module.exports = (name, type) => {
  const user = username()
  const config_yaml = config_path()
  try {
    const doc = yaml.load(fs.readFileSync(`${config_yaml}`));
    const wp_site = doc.sites;
    doc.sites["wordpress-trunk"] && delete doc.sites["wordpress-trunk"];
    wp_site[`${name}`] =  {
      skip_provisioning: false,
      nginx_upstream: 'php80',
      description: 'A standard WP install, useful for building plugins, testing things, etc',
      repo: 'https://github.com/Varying-Vagrant-Vagrants/custom-site-template.git',
      hosts: [`${name}`],
      folders: {
        "public_html/wp-content/mu-plugins": {
          git: {
            repo: "https://github.com/shalawfatah/acorn-mu-plugin.git",
            overwrite_on_clone: true,
            hard_reset: true,
            pull: true
          }
        }
      },
      custom: {
        wp_type: type
      }
    }
    const final_yml = yaml.dump(doc)
    fs.writeFile(`/Users/${user}/vvv-local/config/config.yml`, final_yml, function (err) {
      if (err) return console.log(err);
    });
  } catch (e) {
     console.log('Good bye 👋')
  }
}