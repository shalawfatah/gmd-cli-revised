const { wp_command } = require("../wp/custom_wp/wp_command");
const helper = require("../utilities/help");
const { wp_sage_command } = require("../wp/wp_sage/wp_sage_command");
const { wp_multisite_command } = require("../wp/multisite_wp/wp_multisite_command");
const { wp_headless_command } = require("../wp/headless_wp/wp_headless_command");
module.exports.lines = (word) => {
 switch(word) {
    case "gmd wp": 
        wp_command()
        break;
    case "gmd wp --sage": 
        wp_sage_command()
        break;
    case "gmd wp --sage --multisite": 
        wp_multisite_command()
        break;
    case "gmd wp --headless": 
        wp_headless_command()
        break;
    case "gmd gatsby --headless": 
        console.log("headless gatsby function 5");
        break;
    case "gmd --help":
        helper();
        break;
    default:
        console.log("Type gmd --help to see all available commands")
    } 
}
