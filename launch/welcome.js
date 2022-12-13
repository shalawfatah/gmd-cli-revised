const chalk = require('chalk')
const pkgJSON = require('../package.json')
const log = console.log;
const welcome = chalk.bold.blue(`🆆 🅴 🅻 🅲 🅾 🅼 🅴  🆃 🅾 `)
const g = chalk.rgb(181,182,183).bold("    🅖   ")
const m = chalk.rgb(252,193,14).bold("🅜  ")
const d = chalk.rgb(238,95,78).bold("🅓 ")
const c = chalk.rgb(44,151,209).bold("🅒")
const l = chalk.rgb(0,80,148).bold("🅛")
const i = chalk.rgb(57,58,57).bold("🅘")
const version = chalk.bold.blue(`    🆅 ${pkgJSON.version}`)

module.exports = () => {
    console.clear();
    log(welcome, g,m,d,c,l,i, version);
    log(chalk.gray("Type gmd --help to see all commands"))
}