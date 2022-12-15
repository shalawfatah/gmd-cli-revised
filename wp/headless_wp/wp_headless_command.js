const chalk = require('chalk');
const { Input } = require('enquirer');
const { wp_headless } = require('./wp_headless');

const website_name = chalk.blue.bold("What's the name of your website?")

module.exports.wp_headless_command = () => {
    const prompt = new Input({
        name: 'name',
        message: website_name
      });
       
      prompt.run()
        .then(answer => {
          wp_headless(answer)
        })
        .catch(console.error);
}