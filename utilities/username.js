let os = require('os');

// USERNAME ON COMPUTER
module.exports = () => {
  const user = os.userInfo().username
  return user;
}