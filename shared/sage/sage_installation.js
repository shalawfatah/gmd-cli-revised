const site_path = require("../vvv/site_path")
const { execFileSync } = require('node:child_process');
const sage_theme_path = require("../sage/sage_theme_path");
const fs = require('fs');

module.exports = async (name) => {
  const finale = `
          export default async (app) => {
          app
              .entry({
              app: ["@scripts/app", "@styles/app"],
              editor: ["@scripts/editor", "@styles/editor"],
              })
              .assets(["images"])
              .watch(["resources/views/**/*", "app/**/*"])
              .proxy("http://${name}")
              .serve("http://0.0.0.0:3000")
              .setPublicPath("/app/themes/sage/public/")
              .wpjson
              .settings({
                  color: {
                  custom: false,
                  customGradient: false,
                  defaultPalette: false,
                  defaultGradients: false,
                  },
                  custom: {
                  spacing: {},
                  typography: {
                      'font-size': {},
                      'line-height': {},
                  },
                  },
                  spacing: {
                  padding: true,
                  units: ['px', '%', 'em', 'rem', 'vw', 'vh'],
                  },
                  typography: {
                  customFontSize: false,
                  },
              })
              .useTailwindColors()
              .useTailwindFontFamily()
              .useTailwindFontSize()
              .enable()
          };
          `
  try {
        const path = site_path(name)
        const theme_path = sage_theme_path(name)
        await process.chdir(path)
        await execFileSync('composer', ['create-project', 'roots/sage', `${name}`], {stdio: 'inherit'});
        // await execFileSync('rm', ['-r', 'twentytwenty'], {stdio: 'inherit'});
        // await execFileSync('rm', ['-r', 'twentytwentyone'], {stdio: 'inherit'});
        // await execFileSync('rm', ['-r', 'twentytwentytwo'], {stdio: 'inherit'});
        await fs.writeFile(`${theme_path}/bud.config.mjs`, finale, function (err) {
            if (err) return console.log(err);
        });
        await setTimeout(async () => {
          await process.chdir(theme_path)
          await execFileSync('composer', ['install'], {stdio: 'inherit'});
          await execFileSync('yarn', {stdio: 'inherit'});
          await execFileSync('yarn', ['build'], {stdio: 'inherit'});
          await execFileSync('yarn', ['dev'], {stdio: 'inherit'});
        }, 4000)
  } catch (error) {
     console.log('Good bye 👋')
  }
}