module.exports = () => console.table([
    {command: "gmd wp", action: "Create a Wordpress site"},
    {command: "gmd wp --sage", action: "Create a Wordpress site with Sage theme"},
    {command: "gmd wp --headless", action: "Create a headless Wordpress site"},
    {command: "gmd wp --multisite", action: "Create a Wordpress multi-site with Sage theme"},
    {command: "gmd wp --multisite --sage", action: "Create a Wordpress multi-site with Sage theme"},
    {command: "gmd gatsby --headless", action: "Create a headless Gatsby site"},
    {command: "gmd utility", action: "See all utility commands like vvv set up"},
    {command: "gmd options", action: "See the commands in option/list style"},
    {command: "gmd --help", action: "See all the commands"},
])