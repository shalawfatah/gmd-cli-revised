const { execFileSync } = require('node:child_process');
const vagrant_prompt = require('../vvv/vagrant_prompt');
const username = require('../../utilities/username');

module.exports = async (name) => {
    const user = username()
    const vagrant = await vagrant_prompt()
       
    await vagrant.run()
        .then(async answer => {
            if(answer == true) {
                process.chdir(`/Users/${user}/vvv-local/`)
                execFileSync('vagrant', ['reload', '--provision'], {stdio: 'inherit'});
                console.log(`Site ${name} is all set, thanks`)
            } else {
                return;
            }
        })
        .catch((e) => console.log('Good bye 👋'))
}