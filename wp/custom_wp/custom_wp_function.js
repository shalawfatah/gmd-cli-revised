const convert_yaml = require('../../shared/vvv/convert_yml');
const vagrant_no_sage = require('../../shared/vvv/vagrant_no_sage');

module.exports.custom_wp_function = async (name) => {
    try {    
        await convert_yaml(name, name)
        await vagrant_no_sage(result)
      } catch (error) {
        console.log('Good bye 👋')
      }
}