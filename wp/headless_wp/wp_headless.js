const convert_yaml_headless = require('../../shared/vvv/convert_yaml_headless');
const vagrant_no_sage = require('../../shared/vvv/vagrant_no_sage');

module.exports.wp_headless = async (name) => {
    try {    
        await convert_yaml_headless(name, name)
        await vagrant_no_sage(result)
      } catch (error) {
        console.log('Good bye 👋')
      }
}