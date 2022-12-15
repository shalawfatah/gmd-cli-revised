const chalk = require('chalk');
const { Input } = require('enquirer');
const { wp_sage } = require('./wp_sage');

const website_name = chalk.blue.bold("What's the name of your website?")

module.exports.wp_sage_command = () => {
    const prompt = new Input({
        name: 'name',
        message: website_name
      });
       
      prompt.run()
        .then(answer => {
          wp_sage(answer)
        })
        .catch(console.error);
}