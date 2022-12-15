const chalk = require('chalk');
const { Input } = require('enquirer');
const { wp_multisite } = require('./wp_multisite');

const website_name = chalk.blue.bold("What's the name of your website?")

module.exports.wp_multisite_command = () => {
    const prompt = new Input({
        name: 'name',
        message: website_name
      });
       
      prompt.run()
        .then(answer => {
          wp_multisite(answer)
        })
        .catch(console.error);
}