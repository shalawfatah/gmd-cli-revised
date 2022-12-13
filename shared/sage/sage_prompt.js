const { Confirm } = require('enquirer');

// PROMPT QUESTION TO INSTALL SAGE/ROOTS WP THEME
module.exports = () => {
  const sage = new Confirm({
    name: 'sage',
    message: 'Do you want to install Sage?'
})
return sage;
}