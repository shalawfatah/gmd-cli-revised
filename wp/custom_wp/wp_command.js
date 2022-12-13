const chalk = require('chalk');
const { Input } = require('enquirer');
const { custom_wp_function } = require("./custom_wp_function");

const website_name = chalk.blue.bold("What's the name of your website?")

module.exports.wp_command = () => {
    const prompt = new Input({
        name: 'name',
        message: website_name
      });
       
      prompt.run()
        .then(answer => {
          custom_wp_function(answer)
        })
        .catch(console.error);
}