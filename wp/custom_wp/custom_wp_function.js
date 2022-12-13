
module.exports.custom_wp_function = async (name) => {
    try {    
        await convert_yaml(name, name)
        await vagrant_reload(result)
      } catch (error) {
        console.log('Good bye 👋')
      }
}