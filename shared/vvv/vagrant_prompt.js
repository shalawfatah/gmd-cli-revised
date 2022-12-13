const { Confirm } = require('enquirer');

// RELOAD VAGRANT QUESTION
module.exports = () => {
  const vagrant = new Confirm({
    name: 'question',
    message: 'Do you want to reload vagrant?'
  });
  return vagrant;
}