const first_prompt = require('./launch/command_center');
const welcome = require('./launch/welcome');
module.exports.app = () => {
    welcome();
    first_prompt;
}