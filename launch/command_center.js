const { Input } = require('enquirer');
const chalk = require('chalk')

const cmd = chalk.blue.bold("🔗")
const first_prompt = new Input({
  name: 'question',
  message: cmd
});
 
first_prompt.run()
  .then(answer => console.log('Username:', answer))
  .catch(console.error);

module.exports = first_prompt;