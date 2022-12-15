const convert_yaml = require('../../shared/vvv/convert_yml');
const vagrant_reload = require('../../shared/vvv/vagrant_reload');

module.exports.wp_sage = async (name) => {
    try {    
        await convert_yaml(name, name)
        await vagrant_reload(result)
      } catch (error) {
        console.log('Good bye 👋')
      }
}