const convert_yaml_multisite = require('../../shared/vvv/convert_yaml_multisite');
const vagrant_reload = require('../../shared/vvv/vagrant_reload');

module.exports.wp_multisite = async (name) => {
    try {    
        await convert_yaml_multisite(name, name)
        await vagrant_reload(result)
      } catch (error) {
        console.log('Good bye 👋')
      }
}