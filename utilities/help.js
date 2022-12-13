module.exports = () => console.table([
    {command: "gmd wp", action: "Create a Wordpress site"},
    {command: "gmd wp --sage", action: "Create a Wordpress site with Sage theme"},
    {command: "gmd wp headless", action: "Create a headless Wordpress site"},
    {command: "gmd wp --multisite", action: "Create a Wordpress multi-site with Sage theme"},
    {command: "gmd wp --multisite --sage", action: "Create a Wordpress multi-site with Sage theme"},
    {command: "gmd gatsby --headless", action: "Create a headless Gatsby site"},
])