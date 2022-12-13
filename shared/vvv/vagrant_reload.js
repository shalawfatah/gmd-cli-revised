const { execFileSync } = require('node:child_process');
const vagrant_prompt = require('../vvv/vagrant_prompt');
const username = require('../../utilities/username');
const sage_prompt = require('../sage/sage_prompt');
const sage_installation = require('./sage_installation');

module.exports = async (name) => {
    const user = username()
    const vagrant = await vagrant_prompt()
    const sage = await sage_prompt()
       
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
        await sage.run()
        .then(async item => {
            await sage_installation(name)
        }).catch((e) => console.log('Good bye 👋'))
}