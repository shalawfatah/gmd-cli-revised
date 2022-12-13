const { wp_command } = require("../wp/custom_wp/wp_command");

module.exports.lines = (word) => {
 switch(word) {
    case "gmd wp": 
        wp_command()
        break;
    case "gmd wp --sage": 
        console.log("gmd wp --sage 2");
        break;
    case "gmd wp --sage --multisite": 
        console.log("gmd wp --sage --multisite 3");
        break;
    case "gmd wp --headless": 
        console.log("headless wp function 4");
        break;
    case "gmd gatsby --headless": 
        console.log("headless gatsby function 5");
        break;
    case "gmd --help":
        console.log("See all commands 6")
        break;
    default:
        console.log("Type gmd --help to see all available commands")
    } 
}
